# Портфолио — Unity-разработчик

Сайт-портфолио на **Next.js + Go** с кинематографичным тёмным интерфейсом,
генеративной графикой для каждого проекта и разборами 14 Unity-игр из GitHub.
Отдельный раздел «Остальные проекты» показывает инженерные работы на Go,
React и Electron.

> Проект `Sraka` намеренно не включён в портфолио.

## Стек

| Слой | Технологии |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| Анимации | Framer Motion, Lenis (smooth scroll), Canvas 2D |
| Backend (опционально) | Go 1.24+, стандартная библиотека `net/http`, `go:embed` |
| Хостинг | Netlify (Next.js Runtime), Go API — на любом Go-хостинге |
| Шрифты | Space Grotesk, Manrope, JetBrains Mono (локально, `@fontsource-variable`) |
| Данные | Единый `backend/data/projects.json` |

## Быстрый старт

Нужен Node.js 20.9+ (для локального API — ещё и Go 1.24+).

```powershell
cd C:\Games\portfolio
npm install
```

Запуск сайта:

```powershell
npm run dev
```

Откройте <http://localhost:3000>.

Если нужен Go API (проекты + форма обратной связи), запустите его вторым терминалом:

```powershell
npm run api
```

### Production-сборка

```powershell
npm run build
npm run start
```

API собирается отдельно:

```powershell
npm run api:build
.\backend\portfolio-api.exe
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` при необходимости:

```env
PORTFOLIO_API_URL=http://localhost:8080
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
CONTACT_WEBHOOK_URL=
```

- `PORTFOLIO_API_URL` — если задан, серверные страницы берут проекты из Go API.
  Если API недоступен, сайт читает `backend/data/projects.json` на этапе сборки.
- `NEXT_PUBLIC_API_URL` — адрес Go API для формы обратной связи в браузере.
  На Netlify очистите его: форма пойдёт в собственный маршрут `/api/contact`.
- `ALLOWED_ORIGINS` — CORS-список для Go API (через запятую).
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` — доставка сообщений формы в Telegram.
- `CONTACT_WEBHOOK_URL` — альтернатива Telegram: POST JSON на любой webhook
  (Make, n8n, Discord и т. п.).

## Структура

```
portfolio/
├─ backend/
│  ├─ main.go              # API, CORS, rate limit, валидация формы
│  ├─ go.mod
│  └─ data/
│     ├─ projects.json     # единственный источник данных о проектах
│     └─ messages.jsonl    # создаётся после первого сообщения
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # шрифты, метаданные, preloader, курсор, навигация
│  │  ├─ page.tsx          # главная
│  │  ├─ globals.css       # дизайн-система и все анимации
│  │  ├─ api/contact/      # маршрут формы для статического хостинга
│  │  ├─ work/[slug]/      # страница проекта (SSG для всех 14)
│  │  ├─ opengraph-image.tsx
│  │  └─ icon.svg
│  ├─ components/          # Hero, WorkGrid, MoreProjects, ProjectArt и др.
│  └─ lib/
│     ├─ projects.ts       # типы и загрузка Unity-проектов
│     └─ otherProjects.ts  # данные раздела «Остальные проекты»
├─ netlify.toml
└─ package.json
```

## API

| Метод | Путь | Описание |
| --- | --- | --- |
| GET | `/api/health` | статус, версия, аптайм, количество проектов |
| GET | `/api/projects` | все проекты; фильтры `?category=Кооп`, `?featured=true` |
| GET | `/api/projects/{slug}` | один проект |
| GET | `/api/stats` | агрегаты: категории, движки, технологии |
| POST | `/api/contact` | форма: `{ name, email, message, company }` |

Go API сохраняет сообщения в `backend/data/messages.jsonl` (по одному JSON на строку),
имеет honeypot-поле и лимит 5 отправок за 10 минут с одного IP.

```powershell
curl http://localhost:8080/api/health
curl "http://localhost:8080/api/projects?category=Кооп"
```

## Проекты в портфолио

Unity-проекты из GitHub-аккаунта `GhostAndrey`:

1. **Medieval Coop** — кооперативный симулятор средневековой жизни, мир 5×5 км, 276 скриптов.
2. **The Co-habitant** — хоррор от первого лица в квартире с Авито.
3. **Cipher Code Rebellion** — пошаговая тактика о цифровом восстании.
4. **Yandex Platformer** — 3D-платформер с Yandex Games SDK.
5. **UFO Battle** — волновая арена против инопланетян.
6. **Tower Defens** — tower defense с двумя башнями и двумя финалами.
7. **Rocket Mouse** — бесконечный раннер про мышь с реактивным ранцем.
8. **Poulpi Shooter** — 2D-шутер с параллаксом и тремя типами врагов.
9. **Girgir Platformer** — 2D-платформер с инвентарём, ключами и телепортами.
10. **RPG Dungeon** — low-poly RPG с инвентарём и боем.
11. **Programmer Clicker** — кликер о жизни разработчика.
12. **Memory Cards** — мини-игра на память.
13. **Pong** — классика на трёх скриптах.
14. **Raycast Cube** — минимальный прототип на одном скрипте.

Раздел «Остальные проекты» (`src/lib/otherProjects.ts`):

- **ASTRION** — Telegram Mini App: React, TypeScript, Canvas, NestJS, Socket.IO, TON Connect.
- **Subscription Firewall** — Go-микросервис для поиска подписок и виртуальных карт.
- **GoDojo** — офлайн-тренажёр по Go: templ, chi, SQLite, песочница компиляции.
- **Avito Parser** — Electron-приложение с Puppeteer Stealth и прокси.

## Деплой на Netlify

1. Залейте репозиторий на GitHub.
2. В Netlify выберите **Add new site → Import an existing project** и укажите репозиторий.
3. Настройки сборки подхватятся из `netlify.toml`:
   - build command — `npm run build`;
   - publish directory — `.next`;
   - плагин — `@netlify/plugin-nextjs`.
4. В **Site configuration → Environment variables** задайте:
   - `NEXT_PUBLIC_SITE_URL` — домен сайта;
   - `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` **или** `CONTACT_WEBHOOK_URL`
     для формы обратной связи.
5. Задеплойте. Go API для сайта не обязателен: данные проектов попадают в сборку
   из `backend/data/projects.json`.

Если форма не настроена, она вернёт ошибку и предложит написать в GitHub —
сайт при этом продолжает работать.

## Как редактировать контент

Тексты, метрики, цвета и теги Unity-проектов лежат в `backend/data/projects.json`.
После изменения:

- в dev-режиме страница обновится сама;
- для production пересоберите `npm run build`.

Поля проекта: `slug`, `title`, `subtitle`, `tagline`, `year`, `category`, `genre`,
`engine`, `version`, `platform`, `status`, `accent`, `accent2`, `art`, `featured`,
`order`, `summary`, `description[]`, `features[]`, `metrics[]`, `tech[]`, `role`.

`art` выбирает одну из генеративных SVG-обложек: `valley`, `apartment`, `cipher`,
`platformer`, `ufo`, `tower`, `rocket`, `shmup`, `girgir`, `rpg`, `clicker`,
`memory`, `pong`, `cube`, `pacman`.

Инженерные проекты редактируются в `src/lib/otherProjects.ts`.

## Что реализовано

- Кинематографичный hero с интерактивным flow-field на Canvas и курсором-отталкиванием.
- Кастомный курсор, preloader, индикатор прокрутки, Lenis smooth scroll.
- Маска-анимация заголовков по словам, reveal-анимации секций, счётчики.
- 14 уникальных генеративных SVG-обложек без внешних картинок.
- Сетка проектов с фильтрами и layout-анимациями, tilt-эффект карточек.
- Отдельные SSG-страницы проектов: метрики, механики, стек, следующий проект.
- Раздел «Остальные проекты» с описанием стека и задач.
- Форма обратной связи: Go API локально или `/api/contact` на Netlify.
- Адаптивность, `prefers-reduced-motion`, focus-состояния, SEO/OG-метаданные.
