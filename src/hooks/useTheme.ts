import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

    // Use saved theme or fallback to system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }

    // Apply theme to document
    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark" || (!savedTheme && prefersDark)
    );
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return [theme, toggleTheme];
};
