import { Theme } from "simple-table-core";
import { ThemeOption } from "@/types/theme";

/**
 * Maps the marketing site's ThemeOption to simple-table-core's Theme type.
 * Custom themes like "custom-light" and "custom-dark" are mapped to their base equivalents.
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
