/* =========================================
   messages.ts
========================================= */

export type EngineeringLanguage = "pt" | "en" | "es";

export type EngineeringCard = {
  id: string;

  label: string;

  status: string;

  title: string;

  description: string;

  documentation: string;

  concepts: string[];

  stack: string[];
};

export const engineeringMessages = {
  pt: {
    badge: "Filosofia de Engenharia",

    title: "Construindo sistemas além das interfaces.",

    description:
      "Arquitetura frontend, sistemas de produto e experiências interativas pensadas como ecossistemas vivos.",

    controls: {
      previous: "Projeto anterior",
      next: "Próximo projeto",
    },

    cards: [
      {
        id: "frontend-architecture",

        label: "ARQUITETURA",

        status: "CORE",

        title: "Arquitetura Frontend",

        description:
          "Construção de arquiteturas escaláveis focadas em performance, manutenção e crescimento contínuo do produto.",

        documentation:
          "Organização por domínios, componentização avançada, design systems e padronização para produtos de longo prazo.",

        concepts: [
          "Arquitetura Modular",
          "Design Systems",
          "Escalabilidade",
          "Componentização",
        ],

        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "CSS Modules",
          "Framer Motion",
        ],
      },

      {
        id: "product-engineering",

        label: "PRODUTO",

        status: "ACTIVE",

        title: "Engenharia de Produto",

        description:
          "Desenvolvimento de produtos digitais unindo experiência do usuário, métricas de negócio e engenharia moderna.",

        documentation:
          "Cada interface é construída considerando impacto real, usabilidade, conversão e evolução contínua do produto.",

        concepts: [
          "Product Thinking",
          "UX Engineering",
          "Métricas",
          "Experiência do Usuário",
        ],

        stack: [
          "Analytics",
          "UX Design",
          "Product Strategy",
          "Recharts",
          "Data Visualization",
        ],
      },

      {
        id: "interactive-systems",

        label: "EXPERIÊNCIA",

        status: "LIVE",

        title: "Sistemas Interativos",

        description:
          "Sistemas visuais e interativos focados em motion design, feedback visual e experiências memoráveis.",

        documentation:
          "Microinterações, animações contextuais e interfaces que reforçam a identidade do produto sem comprometer performance.",

        concepts: [
          "Motion Design",
          "Microinterações",
          "Acessibilidade",
          "Performance",
        ],

        stack: [
          "Framer Motion",
          "SVG",
          "Canvas",
          "Animation Systems",
          "UI Engineering",
        ],
      },
    ],
  },

  en: {
    badge: "Engineering Philosophy",

    title: "Building systems beyond interfaces.",

    description:
      "Frontend architecture, product systems and interactive experiences designed as living ecosystems.",

    controls: {
      previous: "Previous project",
      next: "Next project",
    },

    cards: [
      {
        id: "frontend-architecture",

        label: "ARCHITECTURE",

        status: "CORE",

        title: "Frontend Architecture",

        description:
          "Building scalable architectures focused on performance, maintainability and long-term product growth.",

        documentation:
          "Domain-driven organization, advanced component architecture and design systems for sustainable products.",

        concepts: [
          "Modular Architecture",
          "Design Systems",
          "Scalability",
          "Component Architecture",
        ],

        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "CSS Modules",
          "Framer Motion",
        ],
      },

      {
        id: "product-engineering",

        label: "PRODUCT",

        status: "ACTIVE",

        title: "Product Engineering",

        description:
          "Building digital products by combining user experience, business metrics and modern engineering.",

        documentation:
          "Every interface is designed around usability, business impact and continuous product evolution.",

        concepts: [
          "Product Thinking",
          "UX Engineering",
          "Business Metrics",
          "User Experience",
        ],

        stack: [
          "Analytics",
          "UX Design",
          "Product Strategy",
          "Recharts",
          "Data Visualization",
        ],
      },

      {
        id: "interactive-systems",

        label: "EXPERIENCE",

        status: "LIVE",

        title: "Interactive Systems",

        description:
          "Interactive visual systems focused on motion design, visual feedback and memorable experiences.",

        documentation:
          "Micro-interactions and contextual animations that strengthen product identity without compromising performance.",

        concepts: [
          "Motion Design",
          "Micro Interactions",
          "Accessibility",
          "Performance",
        ],

        stack: [
          "Framer Motion",
          "SVG",
          "Canvas",
          "Animation Systems",
          "UI Engineering",
        ],
      },
    ],
  },

  es: {
    badge: "Filosofía de Ingeniería",

    title: "Construyendo sistemas más allá de las interfaces.",

    description:
      "Arquitectura frontend, sistemas de producto y experiencias interactivas diseñadas como ecosistemas vivos.",

    controls: {
      previous: "Proyecto anterior",
      next: "Próximo proyecto",
    },

    cards: [
      {
        id: "frontend-architecture",

        label: "ARQUITECTURA",

        status: "CORE",

        title: "Arquitectura Frontend",

        description:
          "Construcción de arquitecturas escalables enfocadas en rendimiento, mantenimiento y crecimiento continuo.",

        documentation:
          "Organización por dominios, arquitectura avanzada de componentes y design systems para productos sostenibles.",

        concepts: [
          "Arquitectura Modular",
          "Design Systems",
          "Escalabilidad",
          "Componentización",
        ],

        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "CSS Modules",
          "Framer Motion",
        ],
      },

      {
        id: "product-engineering",

        label: "PRODUCTO",

        status: "ACTIVE",

        title: "Ingeniería de Producto",

        description:
          "Desarrollo de productos digitales uniendo experiencia de usuario, métricas de negocio e ingeniería moderna.",

        documentation:
          "Cada interfaz se construye considerando impacto real, usabilidad y evolución continua del producto.",

        concepts: [
          "Product Thinking",
          "UX Engineering",
          "Métricas",
          "Experiencia de Usuario",
        ],

        stack: [
          "Analytics",
          "UX Design",
          "Product Strategy",
          "Recharts",
          "Data Visualization",
        ],
      },

      {
        id: "interactive-systems",

        label: "EXPERIENCIA",

        status: "LIVE",

        title: "Sistemas Interactivos",

        description:
          "Sistemas visuales e interactivos enfocados en motion design, feedback visual y experiencias memorables.",

        documentation:
          "Microinteracciones y animaciones contextuales que fortalecen la identidad del producto sin comprometer el rendimiento.",

        concepts: [
          "Motion Design",
          "Microinteracciones",
          "Accesibilidad",
          "Performance",
        ],

        stack: [
          "Framer Motion",
          "SVG",
          "Canvas",
          "Animation Systems",
          "UI Engineering",
        ],
      },
    ],
  },
} as const;
