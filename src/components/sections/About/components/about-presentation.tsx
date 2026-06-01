"use client";

import Image from "next/image";

import styles from "../about-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function AboutPresentation() {
  return (
    <div className={styles.presentationBlock}>
      {/* PORTRAIT */}

      <div className={styles.portraitColumn}>
        <div className={styles.portraitWrapper}>
          <Image
            src="/Leo.png"
            alt="Leonardo Landell"
            width={600}
            height={900}
            priority
            className={styles.portrait}
          />
        </div>
      </div>

      {/* CONTENT */}

      <div className={styles.contentColumn}>
        {/* LABEL */}

        <span className={styles.aboutLabel}>About / Manifesto</span>

        {/* TITLE */}

        <h2 className={styles.aboutTitle}>
          Building digital systems with architecture, intention and identity.
        </h2>

        {/* LETTER */}

        <div className={styles.aboutLetter}>
          <p>Acredito que produtos digitais não devem apenas funcionar.</p>

          <p>Eles precisam comunicar direção, intenção e identidade.</p>

          <p>
            Nos últimos anos venho explorando a construção de sistemas frontend
            orientados por produto, combinando arquitetura, motion, UX
            operacional e design systems em experiências vivas.
          </p>

          <p>
            Busco desenvolver ecossistemas digitais capazes de conectar
            performance, clareza e experiência em um único fluxo operacional.
          </p>
        </div>

        {/* STATUS */}

        <div className={styles.statusGrid}>
          <div className={styles.statusCard}>
            <span>STATUS</span>

            <p>Building living systems</p>
          </div>

          <div className={styles.statusCard}>
            <span>FOCUS</span>

            <p>Product Engineering</p>
          </div>

          <div className={styles.statusCard}>
            <span>LOCATION</span>

            <p>Brazil • Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
}
