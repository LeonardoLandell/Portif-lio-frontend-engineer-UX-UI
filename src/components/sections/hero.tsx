"use client";

import Image from "next/image";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";

import { motion, Variants } from "framer-motion";

import { Topbar } from "@/components/layout/topbar/topbar";
import { useLanguage } from "@/components/providers/language-provider";

import styles from "./hero.module.css";

/* =========================================
   ANIMATIONS
========================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.35,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    filter: "blur(8px)",
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.35,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================
   HERO
========================================= */

export function Hero() {
  const language = useLanguage();

  const messages = language?.messages ?? {};

  const hero = messages?.hero ?? {
    badge: "FRONTEND ENGINEER • PRODUCT ENGINEER • UX/UI",

    title:
      "Construindo sistemas digitais premium com design, engenharia e propósito.",

    description:
      "Desenvolvedor focado em interfaces escaláveis, produtos SaaS e experiências digitais modernas.",

    primaryButton: "Ver Projetos",

    secondaryButton: "Sobre Mim",
  };

  return (
    <>
      <Topbar />

      <section id="home" className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            {/* LEFT */}

            <motion.div
              className={styles.left}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <motion.span
                className={styles.badge}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.18}
              >
                {hero.badge}
              </motion.span>

              <motion.h1
                className={`heading ${styles.title}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.42}
              >
                {hero.title}
              </motion.h1>

              <motion.p
                className={styles.description}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.68}
              >
                {hero.description}
              </motion.p>

              <motion.div
                className={styles.actions}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.94}
              >
                <motion.button
                  className={styles.primaryButton}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                >
                  {hero.primaryButton}
                </motion.button>

                <motion.button
                  className={styles.secondaryButton}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                >
                  {hero.secondaryButton}
                </motion.button>
              </motion.div>

              <motion.div
                className={styles.techStack}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1.15}
              >
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <SiReact />
                  </div>
                  <span>React</span>
                </div>

                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <SiNextdotjs />
                  </div>
                  <span>Next.js</span>
                </div>

                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <SiTypescript />
                  </div>
                  <span>TypeScript</span>
                </div>

                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <SiNodedotjs />
                  </div>
                  <span>Node.js</span>
                </div>

                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <SiSupabase />
                  </div>
                  <span>Supabase</span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              className={styles.right}
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <div className={styles.heroCircle} />

              <div className={styles.heroSquare} />

              <div className={styles.visualWrapper}>
                <Image
                  src="/Leo.png"
                  alt="Leonardo Landell"
                  width={760}
                  height={860}
                  priority
                  className={styles.heroImage}
                />

                <div className={styles.codeCard}>
                  <div className={styles.cardContent}>
                    <span className={styles.cardLabel}>
                      PRODUCT ENGINEERING
                    </span>

                    <pre>{`const Portfolio = () => {
  return impacto;
}`}</pre>
                  </div>
                </div>

                <div className={styles.performanceCard}>
                  <div className={styles.cardContent}>
                    <span className={styles.cardLabel}>PERFORMANCE</span>

                    <h3>98%</h3>

                    <p>Performance Score</p>
                  </div>
                </div>

                <div className={styles.wireframeCard}>
                  <div className={styles.cardContent}>
                    <span className={styles.cardLabel}>PORTFOLIO OS</span>

                    <p>Interactive Product Ecosystem</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
