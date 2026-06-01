/* =========================================
   project-back.tsx
========================================= */

"use client";

import { RotateCcw } from "lucide-react";

import { Project } from "../data";

import styles from "../projects-section.module.css";

type Props = {
  project: Project;

  onBack: () => void;
};

export function ProjectBack({ project, onBack }: Props) {
  return (
    <div className={styles.cardBack}>
      <span className={styles.footerLabel}>INFORMAÇÕES DO SISTEMA</span>

      <h3 className={styles.projectTitle}>{project.title}</h3>

      <p className={styles.projectDescription}>{project.description.pt}</p>

      {/* TECH STACK */}

      <div className={styles.techStack}>
        {project.technologies.map((tech) => (
          <div key={tech} className={styles.techItem}>
            {tech}
          </div>
        ))}
      </div>

      {/* METRICS */}

      <div className={styles.metrics}>
        {project.metrics.pt.map((metric) => (
          <div key={metric} className={styles.metricItem}>
            <div className={styles.metricDot} />

            <span>{metric}</span>
          </div>
        ))}
      </div>

      {/* BACK */}

      <button
        onClick={onBack}
        className={`${styles.projectButton} ${styles.secondaryButton}`}
      >
        <RotateCcw size={16} />

        <span>Voltar</span>
      </button>
    </div>
  );
}
