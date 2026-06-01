"use client";

import { useEffect, useState } from "react";

import { Moon, Sun, ChevronDown } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";

import {
  useLanguage,
  Language,
} from "@/components/providers/language-provider";

import styles from "./topbar.module.css";

/* =========================================
   SECTIONS
========================================= */

const sections = ["home", "projects", "engineering", "about"];

/* =========================================
   COMPONENT
========================================= */

export function Topbar() {
  const { theme, toggleTheme } = useTheme();

  const languageContext = useLanguage();

  const language = languageContext?.language ?? "pt";

  const changeLanguage = languageContext?.changeLanguage ?? (() => {});

  const messages = languageContext?.messages ?? {};

  const navigation = messages?.navigation ?? {
    home: "Home",
    projects: "Projetos",
    engineering: "Engineering",
    about: "Sobre",
  };

  const languages = messages?.languages ?? {
    pt: "Português",
    en: "English",
    es: "Español",
  };

  const hero = messages?.hero ?? {
    secondaryButton: "Contato",
  };

  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const offsetTop = element.offsetTop;

        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLanguageChange(selectedLanguage: Language) {
    changeLanguage(selectedLanguage);

    setOpen(false);
  }

  return (
    <header className={styles.topbar}>
      <div className={styles.topbarGrid} />
      <div className={styles.topbarGlow} />
      <div className={styles.topbarRoute} />

      <div className={styles.topbarContainer}>
        {/* BRAND */}

        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoGlow} />
            <div className={styles.logoNode} />

            <span className={styles.lOne}>L</span>
            <span className={styles.lTwo}>L</span>
          </div>

          <div className={styles.brandInfo}>
            <h3>Leonardo Landell</h3>

            <p>
              Product Engineer
              <span>•</span>
              Front-end Engineer
            </p>
          </div>
        </div>

        {/* NAVIGATION */}

        <nav className={styles.navigation}>
          <div className={styles.navigationGlow} />

          <a
            href="#home"
            className={activeSection === "home" ? styles.activeLink : ""}
          >
            {navigation.home}
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? styles.activeLink : ""}
          >
            {navigation.projects}
          </a>

          <a
            href="#engineering"
            className={activeSection === "engineering" ? styles.activeLink : ""}
          >
            {navigation.engineering}
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? styles.activeLink : ""}
          >
            {navigation.about}
          </a>
        </nav>

        {/* ACTIONS */}

        <div className={styles.rightActions}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

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
                  🇧🇷 {languages.pt}
                </button>

                <button
                  onClick={() => handleLanguageChange("en")}
                  className={styles.languageOption}
                >
                  🇺🇸 {languages.en}
                </button>

                <button
                  onClick={() => handleLanguageChange("es")}
                  className={styles.languageOption}
                >
                  🇪🇸 {languages.es}
                </button>
              </div>
            )}
          </div>

          <a href="#about" className={styles.topbarButton}>
            {hero.secondaryButton}

            <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
