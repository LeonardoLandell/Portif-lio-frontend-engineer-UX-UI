"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";

import { ProjectsNavbar } from "./components/projects-navbar";

import { projectsMessages } from "./messages/project-messages";

import Image from "next/image";

import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState("forecast");

  const languageContext = useLanguage();

  const language = languageContext?.language ?? "pt";

  const content = projectsMessages[language] ?? projectsMessages.pt;

  /* =========================================
     SCROLL SPY
  ========================================= */

  useEffect(() => {
    const sections = ["forecast", "crm", "projectos"];

    function handleScroll() {
      const scrollPosition = window.scrollY + 300;

      for (const id of sections) {
        const element = document.getElementById(id);

        if (!element) continue;

        const top = element.offsetTop;

        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSlug(id);

          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     NAVIGATION
  ========================================= */

  const navigationProjects = content.projects.map((project) => ({
    slug: project.id,

    title: project.title,
  }));

  return (
    <>
      <ProjectsNavbar projects={navigationProjects} activeSlug={activeSlug} />

      <main className={styles.projectsPage}>
        {/* HERO */}

        <section className={styles.hero}>
          <span className={styles.badge}>{content.badge}</span>

          <h1>{content.title}</h1>

          <p>{content.description}</p>
        </section>

        {/* PROJECTS */}

        {content.projects.map((project) => (
          <section
            key={project.id}
            id={project.id}
            className={`
              ${styles.project}
              ${project.id === "forecast" ? styles.forecast : ""}
              ${project.id === "crm" ? styles.crm : ""}
              ${project.id === "projectos" ? styles.workspace : ""}
            `}
          >
            <div className={styles.banner}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className={styles.bannerImage}
              />

              <div className={styles.bannerOverlay} />

              <div className={styles.bannerContent}>
                <span>{project.label}</span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>
              </div>
            </div>

            {/* CONTENT */}

            <div className={styles.projectBody}>
              {/* STACKS */}

              <div className={styles.section}>
                <h3>{content.labels.stacks}</h3>

                <div className={styles.tags}>
                  {project.stacks.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
              </div>

              {/* PROBLEM */}

              <div className={styles.section}>
                <h3>{content.labels.problem}</h3>

                <p>{project.problem}</p>
              </div>

              {/* SOLUTION */}

              <div className={styles.section}>
                <h3>{content.labels.solution}</h3>

                <p>{project.solution}</p>
              </div>

              {/* CASE */}

              <div className={styles.section}>
                <h3>{content.labels.caseStudy}</h3>

                <p>{project.caseStudy}</p>
              </div>

              {/* DOCUMENTATION */}

              <div className={styles.section}>
                <h3>{content.labels.documentation}</h3>

                <div className={styles.documentationGrid}>
                  {project.documentation.map((item) => (
                    <div key={item.title} className={styles.documentationCard}>
                      <h4>{item.title}</h4>

                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
