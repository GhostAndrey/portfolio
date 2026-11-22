import projectsData from "../../backend/data/projects.json";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectFeature = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  category: string;
  genre: string;
  engine: string;
  version: string;
  platform: string;
  status: string;
  accent: string;
  accent2: string;
  art: string;
  featured: boolean;
  order: number;
  summary: string;
  description: string[];
  features: ProjectFeature[];
  metrics: ProjectMetric[];
  tech: string[];
  role: string;
};

// The JSON file is bundled at build time so the site works on static hosting
// (Netlify) without a filesystem or the Go API.
const localProjects = projectsData as Project[];

export function readProjects(): Project[] {
  return [...localProjects].sort((a, b) => a.order - b.order);
}

export async function getProjects(): Promise<Project[]> {
  const api = process.env.PORTFOLIO_API_URL;
  if (api) {
    try {
      const res = await fetch(`${api.replace(/\/$/, "")}/api/projects`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const projects = (await res.json()) as Project[];
        if (Array.isArray(projects) && projects.length > 0) {
          return projects.sort((a, b) => a.order - b.order);
        }
      }
    } catch {
      // The API is optional in development — fall back to the shared JSON file.
    }
  }
  return readProjects();
}

export function getProject(slug: string): Project | undefined {
  return readProjects().find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const projects = readProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export function getCategories(projects: Project[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const project of projects) {
    if (!seen.has(project.category)) {
      seen.add(project.category);
      result.push(project.category);
    }
  }
  return result;
}

export function padIndex(index: number): string {
  return String(index).padStart(2, "0");
}
