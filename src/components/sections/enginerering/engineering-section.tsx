/* =========================================
   engineering-section.tsx
========================================= */

"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/providers/language-provider";

import {
  engineeringMessages,
  EngineeringLanguage,
} from "./components/messages";

import { EngineeringCarousel } from "./components/engineering-carousel";

import styles from "./engineering-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function EngineeringSection() {
  /* =========================================
     LANGUAGE
  ========================================= */

  const languageContext = useLanguage();

  const language: EngineeringLanguage =
    (languageContext?.language as EngineeringLanguage) ?? "pt";

  /* =========================================
     CONTENT
  ========================================= */

  const content = engineeringMessages[language] ?? engineeringMessages.pt;

  return (
    <section id="engineering" className={styles.engineeringSection}>
      <div className="container">
        <div className={styles.engineeringLayout}>
          {/* HEADER */}

          <motion.div
            className={styles.engineeringHeader}
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.engineeringLabel}>{content.badge}</span>

            <h2 className={styles.engineeringTitle}>{content.title}</h2>

            <p className={styles.engineeringDescription}>
              {content.description}
            </p>
          </motion.div>

          {/* CAROUSEL */}

          <EngineeringCarousel />
        </div>
      </div>
    </section>
  );
}
