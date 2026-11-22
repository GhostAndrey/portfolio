import type { CSSProperties } from "react";
import { otherProjects } from "@/lib/otherProjects";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

export function MoreProjects() {
  return (
    <section className="section" id="more">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="section-head__index mono">03 / Остальные проекты</span>
            <h2 className="section-head__title">
              Не только
              <br />
              игры.
            </h2>
          </div>
          <p className="section-head__aside">
            Бэкенды, тренажёры и инструменты автоматизации: другой стек — та же
            привычка доводить систему до рабочего состояния.
          </p>
          <span className="section-head__count">
            {String(otherProjects.length).padStart(2, "0")} проекта
          </span>
        </div>

        <div className="more-grid">
          {otherProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article
                className="more-card"
                style={{ "--accent": project.accent } as CSSProperties}
              >
                <div className="more-card__top">
                  <span className="more-card__num mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="more-card__kind mono">{project.kind}</span>
                  <span className="more-card__year mono">{project.year}</span>
                </div>

                <h3 className="more-card__title">{project.name}</h3>
                <p className="more-card__status mono">{project.status}</p>
                <p className="more-card__text">{project.summary}</p>

                <ul className="more-card__points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="more-card__foot">
                  <div className="more-card__tech">
                    {project.tech.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      className="more-card__link"
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link.label}
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
