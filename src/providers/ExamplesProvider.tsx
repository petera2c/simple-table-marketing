"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useThemeContext } from "@/providers/ThemeProvider";
import { ThemeOption } from "@/types/theme";
import { IconLibrary } from "@/utils/getTableIcons";
import { useEffect } from "react";

interface ExamplesContextType {
  currentTheme: ThemeOption;
  currentRowCount: number;
  currentIconLibrary: IconLibrary;
  currentExampleId: string;
  handleThemeChange: (theme: ThemeOption) => void;
  handleRowCountChange: (rowCount: number) => void;
  handleIconLibraryChange: (iconLibrary: IconLibrary) => void;
  handleExampleChange: (examplePath: string) => void;
}

const ExamplesContext = createContext<ExamplesContextType | undefined>(undefined);

export function ExamplesProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useThemeContext();

  const currentTheme = (searchParams?.get("theme") as ThemeOption) || theme;
  const currentRowCount = parseInt(searchParams?.get("rows") || "1000");
  const currentIconLibrary = (searchParams?.get("icons") as IconLibrary) || "default";

  // Determine current example ID from pathname
  const currentExampleId = pathname?.split("/examples/")[1]?.split("/")[0] || "crm";

  const handleThemeChange = (newTheme: ThemeOption) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("theme", newTheme);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleRowCountChange = (rowCount: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("rows", rowCount.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleIconLibraryChange = (iconLibrary: IconLibrary) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("icons", iconLibrary);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleExampleChange = (examplePath: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    
    // Determine the target example from the path
    const targetExampleId = examplePath.split("/examples/")[1]?.split("/")[0];

    if (targetExampleId) {
      // Adjust theme before navigation to prevent flicker
      if (targetExampleId === "crm") {
        // CRM example needs custom themes
        if (currentTheme !== "custom-light" && currentTheme !== "custom-dark") {
          const newTheme = theme === "dark" ? "custom-dark" : "custom-light";
          params.set("theme", newTheme);
        }
      } else {
        // Non-CRM examples should not use custom themes
        if (currentTheme === "custom-light" || currentTheme === "custom-dark") {
          params.set("theme", theme);
        }
      }
    }

    router.push(`${examplePath}?${params.toString()}`);
  };

  // If we are not on the CRM example, and the theme is custom-light or custom-dark, set the theme to the website theme
  useEffect(() => {
    if (currentExampleId !== "crm") {
      if (currentTheme === "custom-light" || currentTheme === "custom-dark") {
        handleThemeChange(theme);
      }
    } else {
      // CRM example
      const expectedTheme = theme === "dark" ? "custom-dark" : "custom-light";
      if (currentTheme !== "custom-light" && currentTheme !== "custom-dark") {
        handleThemeChange(expectedTheme);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExampleId]);

  return (
    <ExamplesContext.Provider
      value={{
        currentTheme,
        currentRowCount,
        currentIconLibrary,
        currentExampleId,
        handleThemeChange,
        handleRowCountChange,
        handleIconLibraryChange,
        handleExampleChange,
      }}
    >
      {children}
    </ExamplesContext.Provider>
  );
}

export function useExamplesContext() {
  const context = useContext(ExamplesContext);
  if (context === undefined) {
    throw new Error("useExamplesContext must be used within an ExamplesProvider");
  }
  return context;
}
