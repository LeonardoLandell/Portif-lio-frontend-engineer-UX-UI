"use client";

import { useTheme } from "@/components/providers/theme-provider";

import styles from "./background-system.module.css";

export function BackgroundSystem() {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.background} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <svg
        className={styles.circuitSvg}
        viewBox="0 0 1920 3000"
        preserveAspectRatio="none"
      >
        {/* =========================================
      LEFT COLUMN
  ========================================= */}

        <path className={styles.primary} d="M180 0 V500" />

        <path className={styles.secondary} d="M180 180 H420" />
        <path className={styles.secondary} d="M180 320 H360" />
        <path className={styles.secondary} d="M180 460 H520" />

        <circle className={styles.nodeLarge} cx="420" cy="180" r="8" />
        <circle className={styles.nodeMedium} cx="360" cy="320" r="5" />
        <circle className={styles.nodeMedium} cx="520" cy="460" r="5" />

        {/* =========================================
      PROJECTS
  ========================================= */}

        <path className={styles.primary} d="M180 700 V1250" />

        <path className={styles.secondary} d="M180 820 H460" />
        <path className={styles.secondary} d="M180 980 H620" />
        <path className={styles.secondary} d="M180 1140 H420" />

        <circle className={styles.nodeLarge} cx="460" cy="820" r="8" />
        <circle className={styles.nodeMedium} cx="620" cy="980" r="5" />
        <circle className={styles.nodeMedium} cx="420" cy="1140" r="5" />

        {/* =========================================
      ENGINEERING
  ========================================= */}

        <path className={styles.primary} d="M180 1450 V2050" />

        <path className={styles.secondary} d="M180 1560 H520" />
        <path className={styles.secondary} d="M180 1740 H360" />
        <path className={styles.secondary} d="M180 1920 H620" />

        <circle className={styles.nodeLarge} cx="520" cy="1560" r="8" />
        <circle className={styles.nodeMedium} cx="360" cy="1740" r="5" />
        <circle className={styles.nodeMedium} cx="620" cy="1920" r="5" />

        {/* =========================================
      ABOUT
  ========================================= */}

        <path className={styles.primary} d="M180 2250 V2850" />

        <path className={styles.secondary} d="M180 2380 H460" />
        <path className={styles.secondary} d="M180 2560 H620" />
        <path className={styles.secondary} d="M180 2740 H380" />

        <circle className={styles.nodeLarge} cx="460" cy="2380" r="8" />
        <circle className={styles.nodeMedium} cx="620" cy="2560" r="5" />
        <circle className={styles.nodeMedium} cx="380" cy="2740" r="5" />

        {/* =========================================
      RIGHT COLUMN
  ========================================= */}

        <path className={styles.primary} d="M1720 100 V650" />

        <path className={styles.secondary} d="M1480 220 H1720" />
        <path className={styles.secondary} d="M1520 420 H1720" />

        <circle className={styles.nodeLarge} cx="1480" cy="220" r="8" />
        <circle className={styles.nodeMedium} cx="1520" cy="420" r="5" />

        <path className={styles.primary} d="M1720 850 V1450" />

        <path className={styles.secondary} d="M1380 980 H1720" />
        <path className={styles.secondary} d="M1520 1220 H1720" />

        <circle className={styles.nodeLarge} cx="1380" cy="980" r="8" />
        <circle className={styles.nodeMedium} cx="1520" cy="1220" r="5" />

        <path className={styles.primary} d="M1720 1650 V2250" />

        <path className={styles.secondary} d="M1420 1780 H1720" />
        <path className={styles.secondary} d="M1500 2040 H1720" />

        <circle className={styles.nodeLarge} cx="1420" cy="1780" r="8" />
        <circle className={styles.nodeMedium} cx="1500" cy="2040" r="5" />

        <path className={styles.primary} d="M1720 2450 V3000" />

        <path className={styles.secondary} d="M1460 2580 H1720" />
        <path className={styles.secondary} d="M1540 2800 H1720" />

        <circle className={styles.nodeLarge} cx="1460" cy="2580" r="8" />
        <circle className={styles.nodeMedium} cx="1540" cy="2800" r="5" />

        {/* GLOW NODES */}

        <circle className={styles.nodeGlow} cx="240" cy="900" r="10" />
        <circle className={styles.nodeGlow} cx="320" cy="1800" r="12" />
        <circle className={styles.nodeGlow} cx="1580" cy="1100" r="12" />
        <circle className={styles.nodeGlow} cx="1500" cy="2300" r="10" />

        {/* ARROWS */}

        <text className={styles.arrowGroup} x="260" y="1740">
          ►►►
        </text>

        <text className={styles.arrowGroup} x="1460" y="1220">
          ◄◄◄
        </text>
      </svg>

      {/* ENERGY CASCADE */}
      <div className={`${styles.energy} ${styles.energyLeft}`} />
      <div className={`${styles.energy} ${styles.energyCenter}`} />
      <div className={`${styles.energy} ${styles.energyRight}`} />
      <div className={`${styles.energyGold} ${styles.energyGoldOne}`} />
    </div>
  );
}
