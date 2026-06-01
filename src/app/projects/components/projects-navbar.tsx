/* =========================================
   PROJECTS NAVBAR
========================================= */

"use client";

import Link from "next/link";

import { useState } from "react";

import { Moon, Sun, ChevronDown } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";

import {
  useLanguage,
  Language,
} from "@/components/providers/language-provider";

import styles from "./projects-navbar.module.css";

/* =========================================
   TYPES
========================================= */

interface Project {
  slug: string;

  title: string;
}

interface ProjectsNavbarProps {
  projects: Project[];

  activeSlug: string;
}

/* =========================================
   COMPONENT
========================================= */

export function ProjectsNavbar({ projects, activeSlug }: ProjectsNavbarProps) {
  const { theme, toggleTheme } = useTheme();

  const { language, changeLanguage, messages } = useLanguage();

  const [open, setOpen] = useState(false);

  /* =========================================
     LANGUAGE
  ========================================= */

  function handleLanguageChange(language: Language) {
    changeLanguage(language);

    setOpen(false);
  }

  return (
    <header className={styles.topbar}>
      {/* BACKGROUND */}

      <div className={styles.topbarGrid} />

      <div className={styles.topbarGlow} />

      <div className={styles.topbarRoute} />

      {/* CONTAINER */}

      <div className={styles.topbarContainer}>
        {/* =========================================
            BRAND
        ========================================= */}

        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoGlow} />

            <div className={styles.logoNode} />

            <span className={styles.lOne}>L</span>

            <span className={styles.lTwo}>L</span>
          </div>

          <div className={styles.brandInfo}>
            <h3>Leonardo Landell</h3>

            <p>Projects Hub</p>
          </div>
        </div>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav className={styles.navigation}>
          <div className={styles.navigationGlow} />

          {projects.map((project) => (
            <a
              key={project.slug}
              href={`#${project.slug}`}
              className={activeSlug === project.slug ? styles.activeLink : ""}
            >
              {project.title}
            </a>
          ))}
        </nav>

        {/* =========================================
            ACTIONS
        ========================================= */}

        <div className={styles.rightActions}>
          {/* THEME */}

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* LANGUAGE */}

          <div className={styles.languageWrapper}>
            <button
              className={styles.languageToggle}
              onClick={() => setOpen(!open)}
            >
              {language === "pt" && "🇧🇷"}

              {language === "en" && "🇺🇸"}

              {language === "es" && "🇪🇸"}

              <ChevronDown size={14} />
            </button>

            {open && (
              <div className={styles.languageDropdown}>
                <button
                  onClick={() => handleLanguageChange("pt")}
                  className={styles.languageOption}
                >
                  🇧🇷 {messages.languages.pt}
                </button>

                <button
                  onClick={() => handleLanguageChange("en")}
                  className={styles.languageOption}
                >
                  🇺🇸 {messages.languages.en}
                </button>

                <button
                  onClick={() => handleLanguageChange("es")}
                  className={styles.languageOption}
                >
                  🇪🇸 {messages.languages.es}
                </button>
              </div>
            )}
          </div>

          {/* CTA */}

          <Link href="/" className={styles.topbarButton}>
            Portfolio
            <span>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
