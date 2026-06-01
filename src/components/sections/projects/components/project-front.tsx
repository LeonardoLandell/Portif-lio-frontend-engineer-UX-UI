/* =========================================
   project-front.tsx
========================================= */

"use client";

import Image from "next/image";

import { ArrowUpRight, GitBranch, Info } from "lucide-react";

import { Project } from "../data";

import styles from "../projects-section.module.css";

type Props = {
  project: Project;

  onFlip: () => void;
};

export function ProjectFront({ project, onFlip }: Props) {
  return (
    <div className={styles.cardFront}>
      {/* IMAGE */}

      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImage}
        />

        <div className={styles.imageOverlay} />
      </div>

      {/* CONTENT */}

      <div className={styles.cardContent}>
        <span className={styles.status}>{project.status}</span>

        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description.pt}</p>

        {/* ACTIONS */}

        <div className={styles.cardActions}>
          {/* GITHUB */}

          <a
            href={project.githubUrl}
            target="_blank"
            className={`${styles.projectButton} ${styles.secondaryButton}`}
          >
            <GitBranch size={16} />

            <span>GitHub</span>
          </a>

          {/* INFO */}

          <button
            onClick={onFlip}
            className={`${styles.projectButton} ${styles.secondaryButton}`}
          >
            <Info size={16} />

            <span>Info</span>
          </button>

          {/* PROJECT */}

          <a
            href={project.projectUrl}
            target="_blank"
            className={`${styles.projectButton} ${styles.primaryButton}`}
          >
            <ArrowUpRight size={16} />

            <span>Projeto</span>
          </a>
        </div>
      </div>
    </div>
  );
}
