"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import styles from "../about-section.module.css";

/* =========================================
   COMPONENT
========================================= */

export function AboutContact() {
  return (
    <div className={styles.contactBlock}>
      {/* HEADER */}

      <div className={styles.contactHeader}>
        <span>Connection Terminal</span>

        <h3>Let&apos;s build something meaningful together.</h3>

        <p>
          Open for frontend engineering, product systems and operational
          experiences.
        </p>
      </div>

      {/* LINKS */}

      <div className={styles.contactLinks}>
        <a
          href="https://github.com/LeonardoLandell"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/leonardo-landell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </a>

        <a href="mailto:leonardolandell2000@gmail.com">
          <Mail size={18} />
          Email
        </a>
      </div>

      {/* CTA */}

      <a href="#contact" className={styles.contactCTA}>
        <span>Start a connection</span>

        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
