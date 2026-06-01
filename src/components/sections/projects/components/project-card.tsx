/* =========================================
   project-card.tsx
========================================= */

"use client";

import { useState } from "react";

import clsx from "clsx";

import { Project } from "../data";

import { ProjectFront } from "./project-front";

import { ProjectBack } from "./project-back";

import styles from "../projects-section.module.css";

type Props = {
  project: Project;

  position: "left" | "center" | "right";
};

export function ProjectCard({ project, position }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={clsx(styles.projectCard, styles[position])}>
      <div className={clsx(styles.cardInner, flipped && styles.flipped)}>
        <ProjectFront project={project} onFlip={() => setFlipped(true)} />

        <ProjectBack project={project} onBack={() => setFlipped(false)} />
      </div>
    </div>
  );
}
