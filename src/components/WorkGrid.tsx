"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

type WorkGridProps = {
  projects: Project[];
};

const sizes = [7, 5, 5, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

export function WorkGrid({ projects }: WorkGridProps) {
  const [active, setActive] = useState("Все");
  const reduce = useReducedMotion();

  const categories = useMemo(() => {
    const set = new Set(projects.map((project) => project.category));
    return ["Все", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(
    () => (active === "Все" ? projects : projects.filter((project) => project.category === active)),
    [active, projects]
  );

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="section-head__index mono">02 / Работы</span>
            <h2 className="section-head__title">
              Избранные
              <br />
              проекты.
            </h2>
          </div>
          <p className="section-head__aside">
            Четырнадцать игр из GitHub: от учебных экспериментов до большого
            кооперативного мира. Фильтруйте по жанру и открывайте разбор каждой.
          </p>
          <span className="section-head__count">
            {String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="filters" role="group" aria-label="Фильтр проектов по жанру">
          {categories.map((category) => {
            const count =
              category === "Все"
                ? projects.length
                : projects.filter((project) => project.category === category).length;
            return (
              <button
                key={category}
                type="button"
                className={`filter ${active === category ? "is-active" : ""}`}
                onClick={() => setActive(category)}
                aria-pressed={active === category}
              >
                {category}
                <span className="filter__count">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div className="grid" layout={!reduce}>
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, index) => {
              const size = sizes[index] ?? 4;
              return (
                <motion.div
                  layout={!reduce}
                  key={project.slug}
                  className={`project-slot project-slot--${size}`}
                  initial={reduce ? false : { opacity: 0, scale: 0.97, y: 14 }}
                  animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.97, y: 10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} index={project.order - 1} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div style={{ marginTop: 34, display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <span className="mono muted">Unity / C# / 2021—2026</span>
          <span className="mono muted">Нажмите на проект, чтобы открыть разбор</span>
        </div>
      </div>
    </section>
  );
}
