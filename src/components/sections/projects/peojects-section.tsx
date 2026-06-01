"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectCarousel } from "./components/project-carousel";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import styles from "./projects-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function ProjectsSection() {
  const language = useLanguage();

  const messages = language?.messages ?? {};

  const projects = messages?.projects ?? {
    badge: "PROJECTS",
    title: "Featured Projects",
    description:
      "Products, systems and digital experiences built with a focus on engineering and product thinking.",

    footer: {
      badge: "ENGINEERING",
      title: "Building scalable digital systems",
      description:
        "Explore my engineering approach, architecture decisions and product development process.",
      button: "View Engineering",
    },
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* =========================================
      BACKGROUND SYSTEM
  ========================================= */}

      <div className={styles.projectsBackgroundSystem}>
        <div className={styles.carouselGlow} />

        <div className={styles.projectsBlueRouteOne} />
        <div className={styles.projectsBlueRouteTwo} />

        <div className={styles.projectsGoldRouteOne} />
        <div className={styles.projectsGoldRouteTwo} />

        <div className={styles.projectsVerticalRouteOne} />
        <div className={styles.projectsVerticalRouteTwo} />
        <div className={styles.projectsVerticalRouteThree} />

        <div className={styles.projectsNodeOne} />
        <div className={styles.projectsNodeTwo} />
        <div className={styles.projectsGoldNode} />
      </div>

      <div className="container">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className={styles.header}
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.label}>{projects.badge}</span>

          <h2 className="heading">{projects.title}</h2>

          <p>{projects.description}</p>
        </motion.div>

        {/* =========================================
            CAROUSEL
        ========================================= */}

        <ProjectCarousel />

        {/* =========================================
            FOOTER CTA
        ========================================= */}

        <motion.div
          className={styles.projectsFooter}
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.footerLine} />

          <div className={styles.footerContent}>
            <div>
              <span className={styles.footerLabel}>
                {projects.footer?.badge}
              </span>

              <h3>{projects.footer?.title}</h3>

              <p>{projects.footer?.description}</p>
            </div>

            <Link href="/projects" className={styles.projectsCTA}>
              <span>Explore Projects</span>

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
