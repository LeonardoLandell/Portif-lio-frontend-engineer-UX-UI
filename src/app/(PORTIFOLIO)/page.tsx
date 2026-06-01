/* =========================================
   page.tsx
========================================= */

import { Hero } from "@/components/sections/hero";

import { ProjectsSection } from "@/components/sections/projects/peojects-section";

import { EngineeringSection } from "@/components/sections/enginerering/engineering-section";

import { AboutSection } from "@/components/sections/About/about-section";

/* =========================================
   PAGE
========================================= */

export default function HomePage() {
  return (
    <>
      {/* HERO */}

      <Hero />

      {/* PROJECTS */}

      <ProjectsSection />

      {/* ENGINEERING */}

      <EngineeringSection />

      {/* ABOUT */}

      <AboutSection />
    </>
  );
}
