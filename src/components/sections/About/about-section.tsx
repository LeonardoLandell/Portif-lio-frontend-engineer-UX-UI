/* =========================================
   ABOUT SECTION
========================================= */

"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/language-provider";

import { aboutMessages } from "./messages";

import { AboutJourney } from "./components/about-journey";

import styles from "./about-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function AboutSection() {
  const languageContext = useLanguage();

  const language =
    (languageContext?.language as keyof typeof aboutMessages) ?? "pt";

  const messages = aboutMessages[language] ?? aboutMessages.pt;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutLayout}>
          {/* =========================================
              HERO
          ========================================= */}

          <div className={styles.aboutHero}>
            {/* PHOTO */}

            <div className={styles.aboutPhotoWrapper}>
              <div className={styles.aboutPhotoGlow} />

              <div className={styles.aboutPhotoCard}>
                <Image
                  src="/Leo.png"
                  alt="Leonardo Landell"
                  width={600}
                  height={900}
                  priority
                  className={styles.aboutPhoto}
                />

                <div className={styles.aboutPhotoOverlay} />
              </div>
            </div>

            {/* PRESENTATION */}

            <div className={styles.aboutPresentation}>
              <span className={styles.aboutLabel}>{messages.hero.label}</span>

              <h2 className={styles.aboutTitle}>
                {messages.hero.title.first}

                <span> {messages.hero.title.highlight}</span>
              </h2>

              <p className={styles.aboutDescription}>
                {messages.hero.descriptionOne}
              </p>

              <p className={styles.aboutDescription}>
                {messages.hero.descriptionTwo}
              </p>

              {/* INFO GRID */}

              <div className={styles.aboutInfoGrid}>
                {messages.hero.cards.map((card, index) => (
                  <div key={index} className={styles.aboutInfoCard}>
                    <span>{card.label}</span>

                    <h4>{card.title}</h4>

                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* JOURNEY */}

          <AboutJourney />

          {/* CONTACT TERMINAL */}

          <div className={styles.contactTerminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDot} />

              <div className={styles.terminalDot} />

              <div className={styles.terminalDot} />

              <span className={styles.terminalTitle}>
                {messages.contact.label}
              </span>
            </div>

            {/* CONTACT GRID */}

            <div className={styles.contactGrid}>
              {messages.contact.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <span>{item.label}</span>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <div className={styles.contactArrow}>↗</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
