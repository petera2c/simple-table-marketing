import { Theme } from "simple-table-core";
import { ThemeOption } from "@/types/theme";

/**
 * Maps the marketing site's ThemeOption to simple-table-core's Theme type.
 * - Custom themes like "custom-light" and "custom-dark" are mapped to their base equivalents.
 * - All other themes pass through unchanged
 *
 * @param themeOption - The theme option from the marketing site
 * @returns The mapped theme for simple-table-core, or undefined if no theme is provided
 */
export function mapThemeOptionToTheme(themeOption?: ThemeOption): Theme | undefined {
  if (!themeOption) {
    return undefined;
  }

  // Map custom themes to their base equivalents
  if (themeOption === "custom-light") {
    return "light";
  }

  if (themeOption === "custom-dark") {
    return "dark";
  }

  // All other themes are valid Theme values from simple-table-core
  return themeOption as Theme;
}

/**
 * Maps website theme (from ThemeProvider) to default table theme.
 * This is used when no explicit theme is selected, to provide modern defaults.
 * - "light" → "modern-light" 
 * - "dark" → "modern-dark"
 *
 * @param websiteTheme - The theme from ThemeProvider ("light" or "dark")
 * @returns The default table theme
 */
export function mapWebsiteThemeToTableTheme(websiteTheme: "light" | "dark"): Theme {
  return websiteTheme === "light" ? "modern-light" : "modern-dark";
}
