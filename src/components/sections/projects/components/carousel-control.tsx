/* =========================================
   carousel-control.tsx
========================================= */

"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import styles from "../projects-section.module.css";

type Props = {
  onPrevious: () => void;

  onNext: () => void;
};

export function CarouselControl({ onPrevious, onNext }: Props) {
  return (
    <div className={styles.carouselControls}>
      <button onClick={onPrevious} className={styles.carouselButton}>
        <ArrowLeft size={20} />
      </button>

      <button onClick={onNext} className={styles.carouselButton}>
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
