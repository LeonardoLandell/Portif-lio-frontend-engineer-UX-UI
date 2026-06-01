import type { Metadata } from "next";

import type { ReactNode } from "react";

/* =========================================
   METADATA
========================================= */

export const metadata: Metadata = {
  title: "Projects Ecosystem | Leonardo Landell",

  description: "Living product ecosystems and frontend engineering systems.",
};

/* =========================================
   TYPES
========================================= */

interface ProjectsLayoutProps {
  children: ReactNode;
}

/* =========================================
   COMPONENT
========================================= */

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <>{children}</>;
}
