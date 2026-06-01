/* =========================================
   engineering-card.tsx
========================================= */

"use client";

import { motion } from "framer-motion";

import styles from "../engineering-section.module.css";

/* =========================================
   TYPES
========================================= */

type EngineeringCardProps = {
  item: {
    id: string;

    label: string;

    status: string;

    title: string;

    description: string;

    documentation: string;

    concepts: string[];

    stack: string[];
  };

  position: "left" | "center" | "right";

  isActive?: boolean;
};

/* =========================================
   COMPONENT
========================================= */

export function EngineeringCard({
  item,
  position,
  isActive,
}: EngineeringCardProps) {
  return (
    <motion.article
      className={`
        ${styles.engineeringCard}
        ${styles[position]}
        ${isActive ? styles.activeCard : ""}
      `}
      initial={false}
      animate={{
        opacity: position === "center" ? 1 : 0.62,

        scale: position === "center" ? 1 : 0.72,

        rotateY: position === "left" ? 26 : position === "right" ? -26 : 0,

        rotateZ: position === "left" ? -4 : position === "right" ? 4 : 0,

        x: position === "left" ? -420 : position === "right" ? 420 : 0,

        z: position === "center" ? 120 : -120,

        y: position === "center" ? -8 : 18,

        filter: position === "center" ? "blur(0px)" : "blur(3px)",
      }}
      whileHover={{
        y: position === "center" ? -14 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
    >
      <div className={styles.cardInner}>
        {/* ROUTES */}

        <div className={styles.cardRouteHorizontal} />

        <div className={styles.cardRouteVertical} />

        {/* FLOWS */}

        <div className={styles.cardFlowHorizontal} />

        <div className={styles.cardFlowVertical} />

        {/* NODES */}

        <div className={styles.cardNodeOne} />

        <div className={styles.cardNodeTwo} />

        {/* TOP */}

        <div className={styles.cardTop}>
          <span className={styles.cardLabel}>{item.label}</span>

          <div className={styles.cardStatus}>{item.status}</div>
        </div>

        {/* TITLE */}

        <h3 className={styles.cardTitle}>{item.title}</h3>

        {/* DESCRIPTION */}

        <p className={styles.cardDescription}>{item.description}</p>

        {/* DOCUMENTATION */}

        <div className={styles.documentationBlock}>
          <p>{item.documentation}</p>
        </div>

        {/* CONCEPTS */}

        <div className={styles.concepts}>
          {item.concepts.map((concept) => (
            <div key={concept} className={styles.conceptItem}>
              <span />

              <p>{concept}</p>
            </div>
          ))}
        </div>

        {/* STACK */}

        <div className={styles.stack}>
          {item.stack.map((tech) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
            </span>
          ))}
        </div>

        {/* ACTIVE GLOW */}

        {isActive && <div className={styles.activeGlow} />}
      </div>
    </motion.article>
  );
}
