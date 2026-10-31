"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

function ProjectEntry({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const reduced = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setPointer({ x, y });
  };

  return (
    <article
      className={`project${open ? " is-open" : ""}`}
      style={{ "--mx": `${pointer.x}%`, "--my": `${pointer.y}%` } as React.CSSProperties}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer({ x: 50, y: 50 })}
    >
      <button type="button" className="project__hit" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <div className="project__index">
          <span>PROJECT {project.index}</span>
          <span className="project__year">{project.year ?? "SYSTEM"}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project__sub">{project.subtitle}</p>
        <div className="project__reveal">
          {project.kind ? <span>{project.kind}</span> : null}
          {project.domain ? <span>{project.domain}</span> : null}
          <span>{open ? "CLOSE" : "EXPAND"}</span>
        </div>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="project__body"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}
          >
            <p>{project.description}</p>
            <div className="project__cols">
              <div>
                <h4>STACK</h4>
                <ul className="tech">
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>ARCHITECTURE</h4>
                <ol className="arch">
                  {project.architecture.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            {project.github ? (
              <a className="ext" href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="section work" data-atmosphere="work">
      <header className="section-head">
        <span>01 — WORK</span>
        <h2>SELECTED SYSTEMS</h2>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectEntry key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
