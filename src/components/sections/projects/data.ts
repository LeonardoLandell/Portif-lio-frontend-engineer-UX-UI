/* =========================================
   TYPES
========================================= */

export type ProjectStatus = "production" | "development" | "concept";

export type ProjectTheme = "forecast" | "crm" | "project";

export type Project = {
  id: string;

  title: string;

  status: ProjectStatus;

  description: {
    pt: string;
    en: string;
    es: string;
  };

  theme: ProjectTheme;

  image: string;

  technologies: string[];

  metrics: {
    pt: string[];
    en: string[];
    es: string[];
  };

  projectUrl: string;

  githubUrl: string;
};

/* =========================================
   PROJECTS
========================================= */

export const projects: Project[] = [
  /* =========================================
     FORECAST OS
  ========================================= */

  {
    id: "forecast-os",

    title: "ForecastOS",

    status: "production",

    description: {
      pt: "Sistema operacional analítico focado em previsões, métricas e inteligência visual.",

      en: "Operational analytics system focused on predictions, metrics and visual intelligence.",

      es: "Sistema operativo analítico enfocado en predicciones, métricas e inteligencia visual.",
    },

    theme: "forecast",

    image: "/projects/forecast.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Chart.js",
      "Supabase",
    ],

    metrics: {
      pt: [
        "Engine Analítico",
        "Dashboard em Tempo Real",
        "UX Enterprise",
        "Sistema Motion",
      ],

      en: [
        "Analytics Engine",
        "Real-time Dashboard",
        "Enterprise UX",
        "Motion System",
      ],

      es: [
        "Motor Analítico",
        "Dashboard en Tiempo Real",
        "UX Enterprise",
        "Sistema Motion",
      ],
    },

    projectUrl: "https://forecast-os-one.vercel.app/",

    githubUrl: "https://github.com/LeonardoLandell/forecast-OS",
  },

  /* =========================================
     PROJECT OS
  ========================================= */

  {
    id: "project-os",

    title: "ProjectOS",

    status: "development",

    description: {
      pt: "Workspace operacional focado em gerenciamento de projetos, produtividade e fluxo operacional.",

      en: "Operational workspace focused on project management, productivity and operational flow.",

      es: "Workspace operacional enfocado en gestión de proyectos, productividad y flujo operacional.",
    },

    theme: "project",

    image: "/projects/project-os.png",

    technologies: ["React", "Next.js", "TypeScript", "Zustand", "MUI"],

    metrics: {
      pt: [
        "Gestão de Tarefas",
        "Sistema de Foco",
        "Sync Realtime",
        "UX de Produto",
      ],

      en: ["Task Management", "Focus System", "Realtime Sync", "Product UX"],

      es: [
        "Gestión de Tareas",
        "Sistema de Enfoque",
        "Sync Realtime",
        "UX de Producto",
      ],
    },

    projectUrl: "https://project-os-smoky.vercel.app/",

    githubUrl: "https://github.com/LeonardoLandell/Project-OS",
  },

  /* =========================================
     MINI CRM OS
  ========================================= */

  {
    id: "mini-crm-os",

    title: "Mini CRM OS",

    status: "concept",

    description: {
      pt: "CRM moderno focado em experiência premium, operação inteligente e arquitetura SaaS.",

      en: "Modern CRM focused on premium experience, intelligent operation and SaaS architecture.",

      es: "CRM moderno enfocado en experiencia premium, operación inteligente y arquitectura SaaS.",
    },

    theme: "crm",

    image: "/projects/mini-crm.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "DND Kit",
      "Framer Motion",
      "Supabase",
    ],

    metrics: {
      pt: [
        "Dashboard CRM",
        "Sistema Kanban",
        "UX Engineering",
        "Interface SaaS",
      ],

      en: [
        "CRM Dashboard",
        "Kanban System",
        "UX Engineering",
        "SaaS Interface",
      ],

      es: [
        "Dashboard CRM",
        "Sistema Kanban",
        "UX Engineering",
        "Interfaz SaaS",
      ],
    },

    projectUrl: "https://mini-crm-os.vercel.app/",

    githubUrl: "https://github.com/LeonardoLandell/mini-crm-os",
  },
];
