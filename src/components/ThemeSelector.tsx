import { Select } from "antd";
import { Theme } from "simple-table-core";
import { ThemeOption } from "@/types/theme";

const THEME_OPTIONS: ThemeOption[] = ["light", "dark", "sky", "violet", "neutral", "frost"];

const ThemeSelector = ({
  currentTheme = "light",
  setCurrentTheme,
  restrictedThemes,
  themeLabels,
}: {
  currentTheme?: ThemeOption;
  setCurrentTheme: (theme: ThemeOption) => void;
  restrictedThemes?: ThemeOption[];
  themeLabels?: Record<string, string>;
}) => {
  const availableThemes = restrictedThemes || THEME_OPTIONS;

  return (
    <Select
      placeholder="Select a theme"
      style={{ width: 200 }}
      onChange={(value) => setCurrentTheme(value as ThemeOption)}
      options={availableThemes.map((theme) => ({
        value: theme,
        label: themeLabels?.[theme] || theme.charAt(0).toUpperCase() + theme.slice(1),
      }))}
      value={currentTheme}
    />
  );
};

export default ThemeSelector;
