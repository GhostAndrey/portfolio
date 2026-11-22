import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getNextProject, getProject, readProjects } from "@/lib/projects";
import { ProjectArt } from "@/components/ProjectArt";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return readProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Проект не найден" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Андрей`,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Андрей`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const next = getNextProject(slug);
  const style = { "--accent": project.accent, "--accent-2": project.accent2 } as CSSProperties;

  return (
    <article style={style}>
      <header className="shell work-hero">
        <Link href="/#work" className="work-hero__back">
          <ArrowLeft size={14} /> Все проекты
        </Link>

        <div className="work-hero__meta">
          <span className="chip chip--accent">{project.category}</span>
          <span className="chip">{project.year}</span>
          <span className="chip">{project.status}</span>
          <span className="chip">{project.engine}</span>
        </div>

        <h1 className="work-hero__title">
          {project.title}
          <em>.</em>
        </h1>

        <p className="work-hero__tagline">{project.tagline}</p>

        <div className="work-hero__bar">
          {project.tech.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </header>

      <div className="shell">
        <Reveal className="work-art" y={30}>
          <ProjectArt project={project} />
        </Reveal>
      </div>

      <div className="shell work-body">
        <aside className="work-aside">
          <div className="work-aside__block">
            <div className="work-aside__label">Роль</div>
            <div className="work-aside__value">{project.role}</div>
          </div>
          <div className="work-aside__block">
            <div className="work-aside__label">Движок</div>
            <div className="work-aside__value">
              {project.engine} · {project.version}
            </div>
          </div>
          <div className="work-aside__block">
            <div className="work-aside__label">Платформа</div>
            <div className="work-aside__value">{project.platform}</div>
          </div>
          <div className="work-aside__block">
            <div className="work-aside__label">Жанр</div>
            <div className="work-aside__value">{project.genre}</div>
          </div>

          <nav className="work-aside__nav" aria-label="Содержание проекта">
            <a href="#overview" className="work-aside__link">
              Обзор
            </a>
            <a href="#mechanics" className="work-aside__link">
              Механики
            </a>
            <a href="#stack" className="work-aside__link">
              Стек
            </a>
          </nav>
        </aside>

        <div className="work-content">
          <section className="work-section" id="overview">
            <h2 className="work-section__title">
              <span>01</span> Обзор
            </h2>
            <div className="work-copy">
              <p>{project.summary}</p>
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="work-metrics">
              {project.metrics.map((metric) => (
                <div className="work-metric" key={metric.label}>
                  <div className="work-metric__value">{metric.value}</div>
                  <div className="work-metric__label">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="work-section" id="mechanics">
            <h2 className="work-section__title">
              <span>02</span> Механики
            </h2>
            <div className="feature-grid">
              {project.features.map((feature, index) => (
                <div className="feature" key={feature.title}>
                  <span className="feature__num">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__text">{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="work-section" id="stack">
            <h2 className="work-section__title">
              <span>03</span> Стек и роль
            </h2>
            <div className="work-copy" style={{ marginBottom: 24 }}>
              <p>
                {project.role}. {project.engine} ({project.version}), платформа {project.platform}.
                Статус: {project.status.toLowerCase()}.
              </p>
            </div>
            <div className="tech-list">
              {project.tech.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <div className="work-cta">
            <span className="work-cta__text">Хотите такой же уровень проработки?</span>
            <Link href="/#contact" className="btn btn--primary">
              <span>Обсудить проект</span>
              <span className="btn__arrow">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="shell" style={{ paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <Link
          href={`/work/${next.slug}`}
          className="next-work"
          style={{ "--accent": next.accent } as CSSProperties}
        >
          <span className="next-work__label">Следующий проект</span>
          <span className="next-work__title">
            {next.title}
            <span className="next-work__arrow">
              <ArrowUpRight size={32} />
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
}
