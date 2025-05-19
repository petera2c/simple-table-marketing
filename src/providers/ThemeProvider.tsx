"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme?: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Private hook for internal use only - not exported
const useThemeImplementation = () => {
  const [theme, setTheme] = useState<Theme>();

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;

    const defaultTheme: Theme = savedTheme ? savedTheme : prefersLight ? "light" : "dark";

    setTheme(defaultTheme);

    localStorage.setItem("theme", defaultTheme);

    // Apply theme to document
    document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useThemeImplementation();

  if (!theme) return null;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
