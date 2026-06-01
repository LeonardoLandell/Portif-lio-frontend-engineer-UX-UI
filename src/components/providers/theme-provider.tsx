"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

/* =========================================
   TYPES
========================================= */

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;

  mounted: boolean;

  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

/* =========================================
   CONTEXT
========================================= */

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",

  mounted: false,

  toggleTheme: () => {},
});

/* =========================================
   PROVIDER
========================================= */

export function ThemeProvider({ children }: ThemeProviderProps) {
  /* =========================================
     DEFAULT THEME
  ========================================= */

  const [theme, setTheme] = useState<Theme>("dark");

  const [mounted, setMounted] = useState(false);

  /* =========================================
     INITIALIZE
  ========================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }

    setMounted(true);
  }, []);

  /* =========================================
     APPLY THEME
  ========================================= */

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  /* =========================================
     TOGGLE
  ========================================= */

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mounted,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* =========================================
   HOOK
========================================= */

export function useTheme() {
  return useContext(ThemeContext);
}
