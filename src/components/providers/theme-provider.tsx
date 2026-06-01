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

  toggleTheme: () => {},
});

/* =========================================
   PROVIDER
========================================= */

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;

    return savedTheme ?? "dark";
  });

  /* =========================================
     APPLY THEME
  ========================================= */

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

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
