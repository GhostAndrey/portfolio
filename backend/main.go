package main

import (
	"context"
	"embed"
	"encoding/json"
	"errors"
	"log"
	"net"
	"net/http"
	"net/mail"
	"os"
	"os/signal"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"syscall"
	"time"
)

//go:embed data/projects.json
var content embed.FS

const (
	version       = "1.0.0"
	maxBodyBytes  = 32 << 10
	messagesFile  = "data/messages.jsonl"
	rateWindow    = 10 * time.Minute
	rateMaxPerIP  = 5
	defaultOrigin = "http://localhost:3000,http://127.0.0.1:3000"
)

type Metric struct {
	Value string `json:"value"`
	Label string `json:"label"`
}

type Feature struct {
	Title string `json:"title"`
	Text  string `json:"text"`
}

type Project struct {
	Slug        string    `json:"slug"`
	Title       string    `json:"title"`
	Subtitle    string    `json:"subtitle"`
	Tagline     string    `json:"tagline"`
	Year        string    `json:"year"`
	Category    string    `json:"category"`
	Genre       string    `json:"genre"`
	Engine      string    `json:"engine"`
	Version     string    `json:"version"`
	Platform    string    `json:"platform"`
	Status      string    `json:"status"`
	Accent      string    `json:"accent"`
	Accent2     string    `json:"accent2"`
	Art         string    `json:"art"`
	Featured    bool      `json:"featured"`
	Order       int       `json:"order"`
	Summary     string    `json:"summary"`
	Description []string  `json:"description"`
	Features    []Feature `json:"features"`
	Metrics     []Metric  `json:"metrics"`
	Tech        []string  `json:"tech"`
	Role        string    `json:"role"`
}

type ContactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
	Company string `json:"company"`
}

type ContactRecord struct {
	Name       string    `json:"name"`
	Email      string    `json:"email"`
	Message    string    `json:"message"`
	ReceivedAt time.Time `json:"receivedAt"`
}

var (
	projects   []Project
	projectsMu sync.RWMutex
	startedAt  = time.Now()
	writeMu    sync.Mutex
	limiter    = newRateLimiter(rateMaxPerIP, rateWindow)
)

func main() {
	if err := loadProjects(); err != nil {
		log.Fatalf("load projects: %v", err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /", handleRoot)
	mux.HandleFunc("GET /api/health", handleHealth)
	mux.HandleFunc("GET /api/projects", handleProjects)
	mux.HandleFunc("GET /api/projects/{slug}", handleProject)
	mux.HandleFunc("GET /api/stats", handleStats)
	mux.HandleFunc("POST /api/contact", handleContact)

	handler := recoverer(securityHeaders(cors(logging(mux))))

	port := getenv("PORT", "8080")
	server := &http.Server{
		Addr:              ":" + port,
		Handler:           handler,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       15 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	go func() {
		log.Printf("Portfolio API %s listening on http://localhost:%s (%d projects)", version, port, len(projects))
		if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	<-stop

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := server.Shutdown(ctx); err != nil {
		log.Printf("shutdown: %v", err)
	}
	log.Println("Portfolio API stopped")
}

func loadProjects() error {
	raw, err := content.ReadFile("data/projects.json")
	if err != nil {
		return err
	}
	var list []Project
	if err := json.Unmarshal(raw, &list); err != nil {
		return err
	}
	sort.Slice(list, func(i, j int) bool { return list[i].Order < list[j].Order })
	projectsMu.Lock()
	projects = list
	projectsMu.Unlock()
	return nil
}

func snapshot() []Project {
	projectsMu.RLock()
	defer projectsMu.RUnlock()
	out := make([]Project, len(projects))
	copy(out, projects)
	return out
}

func handleRoot(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		writeError(w, http.StatusNotFound, "not found")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"name":    "Portfolio API",
		"version": version,
		"endpoints": []string{
			"GET /api/health",
			"GET /api/projects?category=&featured=true",
			"GET /api/projects/{slug}",
			"GET /api/stats",
			"POST /api/contact",
		},
	})
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]any{
		"status":   "ok",
		"version":  version,
		"projects": len(snapshot()),
		"uptime":   time.Since(startedAt).Round(time.Second).String(),
		"time":     time.Now().UTC().Format(time.RFC3339),
	})
}

func handleProjects(w http.ResponseWriter, r *http.Request) {
	list := snapshot()
	query := r.URL.Query()

	category := strings.TrimSpace(query.Get("category"))
	if category != "" {
		filtered := make([]Project, 0, len(list))
		for _, project := range list {
			if strings.EqualFold(project.Category, category) {
				filtered = append(filtered, project)
			}
		}
		list = filtered
	}

	if featured := query.Get("featured"); featured != "" {
		want := featured == "true" || featured == "1"
		filtered := make([]Project, 0, len(list))
		for _, project := range list {
			if project.Featured == want {
				filtered = append(filtered, project)
			}
		}
		list = filtered
	}

	w.Header().Set("Cache-Control", "public, max-age=60")
	writeJSON(w, http.StatusOK, list)
}

func handleProject(w http.ResponseWriter, r *http.Request) {
	slug := strings.TrimSpace(r.PathValue("slug"))
	for _, project := range snapshot() {
		if project.Slug == slug {
			w.Header().Set("Cache-Control", "public, max-age=60")
			writeJSON(w, http.StatusOK, project)
			return
		}
	}
	writeError(w, http.StatusNotFound, "project not found")
}

func handleStats(w http.ResponseWriter, r *http.Request) {
	list := snapshot()
	categories := map[string]int{}
	engines := map[string]int{}
	techSet := map[string]struct{}{}
	features := 0

	for _, project := range list {
		categories[project.Category]++
		engines[project.Engine]++
		features += len(project.Features)
		for _, tech := range project.Tech {
			techSet[tech] = struct{}{}
		}
	}

	tech := make([]string, 0, len(techSet))
	for item := range techSet {
		tech = append(tech, item)
	}
	sort.Strings(tech)

	writeJSON(w, http.StatusOK, map[string]any{
		"projects":   len(list),
		"features":   features,
		"categories": categories,
		"engines":    engines,
		"tech":       tech,
	})
}

func handleContact(w http.ResponseWriter, r *http.Request) {
	ip := clientIP(r)
	if !limiter.allow(ip) {
		writeError(w, http.StatusTooManyRequests, "too many requests, try later")
		return
	}

	r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)
	defer r.Body.Close()

	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()

	var payload ContactRequest
	if err := decoder.Decode(&payload); err != nil {
		writeError(w, http.StatusBadRequest, "invalid JSON body")
		return
	}

	payload.Name = strings.TrimSpace(payload.Name)
	payload.Email = strings.TrimSpace(payload.Email)
	payload.Message = strings.TrimSpace(payload.Message)
	payload.Company = strings.TrimSpace(payload.Company)

	// Honeypot: bots fill hidden fields. Pretend everything is fine.
	if payload.Company != "" {
		writeJSON(w, http.StatusAccepted, map[string]string{"status": "accepted"})
		return
	}

	if len([]rune(payload.Name)) < 2 || len([]rune(payload.Name)) > 120 {
		writeError(w, http.StatusBadRequest, "name must be 2–120 characters")
		return
	}
	if _, err := mail.ParseAddress(payload.Email); err != nil || len(payload.Email) > 200 {
		writeError(w, http.StatusBadRequest, "valid email is required")
		return
	}
	if len([]rune(payload.Message)) < 10 || len([]rune(payload.Message)) > 4000 {
		writeError(w, http.StatusBadRequest, "message must be 10–4000 characters")
		return
	}

	record := ContactRecord{
		Name:       payload.Name,
		Email:      payload.Email,
		Message:    payload.Message,
		ReceivedAt: time.Now().UTC(),
	}

	if err := appendMessage(record); err != nil {
		log.Printf("save message: %v", err)
		writeError(w, http.StatusInternalServerError, "could not save message")
		return
	}

	log.Printf("contact message from %q <%s>", record.Name, record.Email)
	writeJSON(w, http.StatusCreated, map[string]string{"status": "created"})
}

func appendMessage(record ContactRecord) error {
	writeMu.Lock()
	defer writeMu.Unlock()

	if err := os.MkdirAll(filepath.Dir(messagesFile), 0o755); err != nil {
		return err
	}
	file, err := os.OpenFile(messagesFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o600)
	if err != nil {
		return err
	}
	defer file.Close()

	line, err := json.Marshal(record)
	if err != nil {
		return err
	}
	line = append(line, '\n')
	_, err = file.Write(line)
	return err
}

// ---------- middleware ----------

type statusWriter struct {
	http.ResponseWriter
	status int
}

func (w *statusWriter) WriteHeader(code int) {
	w.status = code
	w.ResponseWriter.WriteHeader(code)
}

func logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		rec := &statusWriter{ResponseWriter: w, status: http.StatusOK}
		next.ServeHTTP(rec, r)
		log.Printf("%s %s %d %s", r.Method, r.URL.RequestURI(), rec.status, time.Since(start).Round(time.Millisecond))
	})
}

func recoverer(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if value := recover(); value != nil {
				log.Printf("panic: %v", value)
				writeError(w, http.StatusInternalServerError, "internal error")
			}
		}()
		next.ServeHTTP(w, r)
	})
}

func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("Referrer-Policy", "no-referrer")
		w.Header().Set("X-Frame-Options", "DENY")
		next.ServeHTTP(w, r)
	})
}

func cors(next http.Handler) http.Handler {
	allowed := map[string]struct{}{}
	for _, origin := range strings.Split(getenv("ALLOWED_ORIGINS", defaultOrigin), ",") {
		if trimmed := strings.TrimSpace(origin); trimmed != "" {
			allowed[trimmed] = struct{}{}
		}
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if _, ok := allowed[origin]; ok && origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Vary", "Origin")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
			w.Header().Set("Access-Control-Max-Age", "86400")
		}

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

// ---------- helpers ----------

type rateLimiter struct {
	mu     sync.Mutex
	hits   map[string][]time.Time
	max    int
	window time.Duration
}

func newRateLimiter(max int, window time.Duration) *rateLimiter {
	return &rateLimiter{hits: map[string][]time.Time{}, max: max, window: window}
}

func (l *rateLimiter) allow(key string) bool {
	l.mu.Lock()
	defer l.mu.Unlock()

	now := time.Now()
	cutoff := now.Add(-l.window)
	kept := l.hits[key][:0]
	for _, hit := range l.hits[key] {
		if hit.After(cutoff) {
			kept = append(kept, hit)
		}
	}
	if len(kept) >= l.max {
		l.hits[key] = kept
		return false
	}
	l.hits[key] = append(kept, now)
	return true
}

func clientIP(r *http.Request) string {
	if forwarded := r.Header.Get("X-Forwarded-For"); forwarded != "" {
		if first := strings.TrimSpace(strings.Split(forwarded, ",")[0]); first != "" {
			return first
		}
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

func getenv(key, fallback string) string {
	if value := strings.TrimSpace(os.Getenv(key)); value != "" {
		return value
	}
	return fallback
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(payload); err != nil {
		log.Printf("encode response: %v", err)
	}
}

func writeError(w http.ResponseWriter, status int, message string) {
	writeJSON(w, status, map[string]string{"error": message})
}
