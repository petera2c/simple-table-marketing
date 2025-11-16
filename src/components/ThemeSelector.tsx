import { Select } from "antd";
import { ThemeOption } from "@/types/theme";
import { Theme } from "simple-table-core";

const THEME_OPTIONS: Theme[] = ["light", "dark", "sky", "violet", "neutral"];

const ThemeSelector = ({
  currentTheme = "light",
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

  return (
    <Select
      placeholder="Select a theme"
      style={{ width: 200 }}
      onChange={(value) => setCurrentTheme(value as Theme)}
      options={availableThemes.map((theme) => ({
        value: theme,
        label: themeLabels?.[theme] || theme.charAt(0).toUpperCase() + theme.slice(1),
      }))}
      value={currentTheme}
    />
  );
};

export default ThemeSelector;
