"use client";

import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import type { Project } from "@/lib/projects";
import { ProjectArt } from "./ProjectArt";
import { ArrowUpRight } from "./icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${px * 4.5}deg`);
    el.style.setProperty("--rx", `${-py * 4.5}deg`);
  };

  const onLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  const style = {
    "--accent": project.accent,
    "--accent-2": project.accent2,
  } as CSSProperties;

  return (
    <Link href={`/work/${project.slug}`} className="project-card" style={style}>
      <div
        ref={frameRef}
        className="project-card__frame"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="project-card__art-wrap">
          <div className="project-card__art">
            <ProjectArt project={project} />
          </div>
          <div className="project-card__top">
            <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-card__badge">{project.category}</span>
          </div>
          <span className="project-card__arrow" aria-hidden="true">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>

      <div className="project-card__body">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__sub">{project.subtitle}</p>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </Link>
  );
}
