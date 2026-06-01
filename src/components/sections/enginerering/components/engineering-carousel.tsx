/* =========================================
   engineering-carousel.tsx
========================================= */

"use client";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";

import {
  engineeringMessages,
  type EngineeringLanguage,
  type EngineeringCard,
} from "./messages";

import { EngineeringCard as EngineeringCardComponent } from "./engineering-card";

import styles from "../engineering-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function EngineeringCarousel() {
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

  /* =========================================
     DATA
  ========================================= */

  const engineeringData: EngineeringCard[] = content.cards.map((card) => ({
    ...card,
    concepts: [...card.concepts],
    stack: [...card.stack],
  }));

  const total = engineeringData.length;

  /* =========================================
     STATE
  ========================================= */

  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================
     AUTOPLAY
  ========================================= */

  useEffect(() => {
    if (!total) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 8000);

    return () => clearInterval(interval);
  }, [total]);

  /* =========================================
     EMPTY STATE
  ========================================= */

  if (!total) {
    return null;
  }

  /* =========================================
     POSITIONS
  ========================================= */

  const previous = (activeIndex - 1 + total) % total;

  const next = (activeIndex + 1) % total;

  const activeCard = engineeringData[activeIndex];

  const previousCard = engineeringData[previous];

  const nextCard = engineeringData[next];

  /* =========================================
     HANDLERS
  ========================================= */

  function handlePrevious() {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % total);
  }

  return (
    <section className={styles.carouselWrapper}>
      {/* ORBITAL GLOW */}

      <div className={styles.orbitalGlow} />

      {/* CAROUSEL */}

      <div className={styles.engineeringCarousel}>
        <EngineeringCardComponent item={previousCard} position="left" />

        <AnimatePresence mode="wait">
          <EngineeringCardComponent
            key={activeCard.id}
            item={activeCard}
            position="center"
            isActive
          />
        </AnimatePresence>

        <EngineeringCardComponent item={nextCard} position="right" />
      </div>

      {/* CONTROLS */}

      <div className={styles.carouselControls}>
        <button
          onClick={handlePrevious}
          className={styles.carouselButton}
          aria-label="Previous card"
        >
          <ChevronLeft size={18} />
        </button>

        <div className={styles.carouselIndicators}>
          {engineeringData.map((card: EngineeringCard, index: number) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(index)}
              className={`
                  ${styles.indicator}
                  ${activeIndex === index ? styles.activeIndicator : ""}
                `}
              aria-label={`Go to ${card.title}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className={styles.carouselButton}
          aria-label="Next card"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
