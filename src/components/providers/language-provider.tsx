"use client";

import { createContext, useContext, useMemo, useState } from "react";

import type { ReactNode } from "react";

import { pt } from "@/messages/pt";

import { en } from "@/messages/en";

import { es } from "@/messages/es";

/* =========================================
   TYPES
========================================= */

export type Language = "pt" | "en" | "es";

/* =========================================
   MESSAGES
========================================= */

type Messages = typeof pt | typeof en | typeof es;

/* =========================================
   CONTEXT TYPES
========================================= */

type LanguageContextProps = {
  language: Language;

  changeLanguage: (language: Language) => void;

  messages: Messages;
};

/* =========================================
   CONTEXT
========================================= */

const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps,
);

/* =========================================
   PROVIDER
========================================= */

type ProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: ProviderProps) {
  /* =========================================
     STATE
  ========================================= */

  const [language, setLanguage] = useState<Language>("pt");

  /* =========================================
     MESSAGES
  ========================================= */

  const messages = useMemo(() => {
    switch (language) {
      case "en":
        return en;

      case "es":
        return es;

      case "pt":
      default:
        return pt;
    }
  }, [language]);

  /* =========================================
     CHANGE LANGUAGE
  ========================================= */

  function changeLanguage(language: Language) {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        messages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/* =========================================
   HOOK
========================================= */

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
