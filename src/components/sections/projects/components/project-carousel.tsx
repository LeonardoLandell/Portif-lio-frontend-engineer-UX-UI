/* =========================================
   project-carousel.tsx
========================================= */

"use client";

import { useState } from "react";

import { projects } from "../data";

import { ProjectCard } from "./project-card";

import { CarouselControl } from "./carousel-control";

import styles from "../projects-section.module.css";

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const total = projects.length;

  const previous = (activeIndex - 1 + total) % total;

  const next = (activeIndex + 1) % total;

  const activeProject = projects[activeIndex];

  console.log(
    "INDEX:",
    activeIndex,
    "PROJECT:",
    activeProject.title,
    "THEME:",
    activeProject.theme,
  );

  function handlePrevious() {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % total);
  }

  return (
    <section
      className={`${styles.carouselWrapper} ${styles[activeProject.theme]}`}
    >
      {/* BACKGROUND */}

      <div className={styles.projectsBackgroundSystem}>
        <div className={styles.projectsBlueRouteOne} />
        <div className={styles.projectsBlueRouteTwo} />

        <div className={styles.projectsGoldRouteOne} />
        <div className={styles.projectsGoldRouteTwo} />

        <div className={styles.projectsVerticalRouteOne} />
        <div className={styles.projectsVerticalRouteTwo} />
        <div className={styles.projectsVerticalRouteThree} />

        <div className={styles.projectsBlueFlow} />
        <div className={styles.projectsGoldFlow} />

        <div className={styles.verticalFlowOne} />
        <div className={styles.verticalFlowTwo} />
        <div className={styles.verticalFlowThree} />

        <div className={styles.projectsNodeOne} />
        <div className={styles.projectsNodeTwo} />
        <div className={styles.projectsGoldNode} />

        <div className={styles.carouselGlow} />
      </div>

      {/* DEBUG */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 999,
          padding: "8px 12px",
          borderRadius: 8,
          background: "rgba(0,0,0,.8)",
          color: "#fff",
          fontSize: 12,
        }}
      >
        {activeProject.title} • {activeProject.theme}
      </div>

      {/* CAROUSEL */}

      <div className={styles.carousel}>
        <ProjectCard
          key={`${projects[previous].id}-left`}
          project={projects[previous]}
          position="left"
        />

        <ProjectCard
          key={`${activeProject.id}-center`}
          project={activeProject}
          position="center"
        />

        <ProjectCard
          key={`${projects[next].id}-right`}
          project={projects[next]}
          position="right"
        />
      </div>

      {/* CONTROLS */}

      <CarouselControl onPrevious={handlePrevious} onNext={handleNext} />
    </section>
  );
}
