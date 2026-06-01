/* =========================================
   PROJECTS HERO
========================================= */

"use client";

import styles from "../projects.module.css";

/* =========================================
   COMPONENT
========================================= */

export function ProjectsHero() {
  return (
    <section className={styles.projectsHero}>
      {/* =========================================
          HERO GLOW
      ========================================= */}

      <div className={styles.heroGlow} />

      {/* =========================================
          ROUTES
      ========================================= */}

      <div className={styles.heroRouteOne} />

      <div className={styles.heroRouteTwo} />

      <div className={styles.heroVerticalRoute} />

      {/* =========================================
          NODES
      ========================================= */}

      <div className={styles.heroNodeOne} />

      <div className={styles.heroNodeTwo} />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="container">
        <div className={styles.heroContent}>
          {/* =========================================
              LABEL
          ========================================= */}

          <span className={styles.heroLabel}>
            PRODUTOS • ECOSSISTEMAS • ENGENHARIA
          </span>

          {/* =========================================
              TITLE
          ========================================= */}

          <h1 className={styles.heroTitle}>
            Construindo
            <span> ecossistemas digitais</span>
            <br />
            através da engenharia de produtos.
          </h1>

          {/* =========================================
              DESCRIPTION
          ========================================= */}

          <p className={styles.heroDescription}>
            Uma coleção de plataformas, sistemas operacionais e experiências
            digitais desenvolvidas com foco em produto, UX Engineering,
            escalabilidade e documentação viva.
          </p>

          {/* =========================================
              METRICS
          ========================================= */}

          <div className={styles.heroMetrics}>
            <div className={styles.metricCard}>
              <span>PRODUTOS</span>

              <h3>03</h3>

              <p>ForecastOS • Mini CRM • ProjectOS</p>
            </div>

            <div className={styles.metricCard}>
              <span>FOCO</span>

              <h3>Product Engineering</h3>

              <p>Interfaces, sistemas e experiências digitais.</p>
            </div>

            <div className={styles.metricCard}>
              <span>EM BREVE</span>

              <h3>WorkspaceOS + CuraFlow</h3>

              <p>Próximas plataformas do ecossistema.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}