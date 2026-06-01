"use client";

import { useState } from "react";

import styles from "../about-section.module.css";

const timeline = [
  {
    year: "2021",

    title: "Primeiras Interfaces",

    description:
      "Primeiro contato com desenvolvimento web, explorando HTML, CSS e JavaScript.",

    technologies: ["HTML", "CSS", "JavaScript", "Git"],

    evolution: ["Fundamentos da Web", "Responsividade", "Primeiros Projetos"],

    projects: ["Projetos Acadêmicos"],
  },

  {
    year: "2022",

    title: "Fundamentos Frontend",

    description: "Transição para React, componentização e arquitetura moderna.",

    technologies: ["React", "TypeScript", "Node.js"],

    evolution: ["Componentização", "Estados", "Arquitetura Frontend"],

    projects: ["Projetos de Estudo"],
  },

  {
    year: "2023",

    title: "Dashboards & SaaS",

    description: "Construção de dashboards e sistemas orientados a dados.",

    technologies: ["Analytics", "Charts", "Dashboards"],

    evolution: ["KPIs", "Visualização", "Sistemas Operacionais"],

    projects: ["Primeiros Dashboards"],
  },

  {
    year: "2024",

    title: "Product Engineering",

    description: "Mudança de mentalidade para produto, experiência e negócio.",

    technologies: ["Next.js", "UX", "Product Thinking"],

    evolution: ["Produto", "UX Engineering", "Business Thinking"],

    projects: ["Protótipos SaaS"],
  },

  {
    year: "2025",

    title: "Engineering Systems",

    description:
      "Construção de sistemas completos focados em arquitetura e experiência.",

    technologies: ["Next.js", "Supabase", "Framer Motion"],

    evolution: ["Arquitetura", "Motion", "Design Systems"],

    projects: ["ForecastOS", "Mini CRM OS", "ProjectOS"],
  },

  {
    year: "2026",

    title: "Engineering Ecosystems",

    description:
      "Construção de ecossistemas digitais conectando produto, engenharia e experiência.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Product Engineering",
      "UX Engineering",
      "AI Workflows",
    ],

    evolution: [
      "Ecossistemas Digitais",
      "Arquitetura Escalável",
      "Experiências Interativas",
      "Sistemas Operacionais",
    ],

    projects: [
      "ForecastOS",
      "ProjectOS",
      "Mini CRM OS",
      "Curaflow",
      "Landell Studio",
    ],
  },
];

export function AboutJourney() {
  const [activeIndex, setActiveIndex] = useState(5);

  const active = timeline[activeIndex];

  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyHeader}>
        <span>JORNADA</span>

        <h3>Evoluindo de interfaces para ecossistemas digitais completos.</h3>
      </div>

      <div className={styles.journeyLayout}>
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`${styles.timelineButton} ${
                activeIndex === index ? styles.activeTimeline : ""
              }`}
            >
              <span className={styles.timelineYear}>{item.year}</span>
            </button>
          ))}
        </div>

        <div className={styles.journeyPanel}>
          <span className={styles.panelYear}>{active.year}</span>

          <h4>{active.title}</h4>

          <p>{active.description}</p>

          <div className={styles.panelBlock}>
            <strong>Tecnologias</strong>

            <div className={styles.tagGroup}>
              {active.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.panelBlock}>
            <strong>Evolução</strong>

            <ul>
              {active.evolution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.panelBlock}>
            <strong>Projetos</strong>

            <div className={styles.tagGroup}>
              {active.projects.map((project) => (
                <span key={project}>{project}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
