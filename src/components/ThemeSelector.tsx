import { Select } from "antd";
import { ThemeOption } from "@/types/theme";
import { Theme } from "simple-table-core";

const THEME_OPTIONS: Theme[] = ["modern-light", "modern-dark", "light", "dark", "sky", "violet", "neutral"];

const DEFAULT_THEME_LABELS: Record<string, string> = {
  "modern-light": "Modern Light",
  "modern-dark": "Modern Dark",
  light: "Light",
  dark: "Dark",
  sky: "Sky",
  violet: "Violet",
  neutral: "Neutral",
};

const ThemeSelector = ({
  currentTheme = "modern-light",
  setCurrentTheme,
  restrictedThemes,
  themeLabels,
}: {
  currentTheme?: ThemeOption;
  setCurrentTheme: (theme: Theme) => void;
  restrictedThemes?: ThemeOption[];
  themeLabels?: Record<string, string>;
}) => {
  const availableThemes = restrictedThemes || THEME_OPTIONS;
  const labels = { ...DEFAULT_THEME_LABELS, ...themeLabels };

  return (
    <Select
      placeholder="Select a theme"
      style={{ width: 200 }}
      onChange={(value) => setCurrentTheme(value as Theme)}
      options={availableThemes.map((theme) => ({
        value: theme,
        label: labels[theme] || theme.charAt(0).toUpperCase() + theme.slice(1),
      }))}
      value={currentTheme}
    />
  );
};

export default ThemeSelector;
