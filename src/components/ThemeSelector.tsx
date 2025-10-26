import { Select } from "antd";
import { Theme } from "simple-table-core";

const THEME_OPTIONS: Theme[] = ["light", "dark", "sky", "violet", "neutral", "frost"];

const ThemeSelector = ({
  currentTheme = "light",
  setCurrentTheme,
  restrictedThemes,
}: {
  currentTheme?: Theme;
  setCurrentTheme: (theme: Theme) => void;
  restrictedThemes?: Theme[];
}) => {
  const availableThemes = restrictedThemes || THEME_OPTIONS;

  return (
    <Select
      placeholder="Select a theme"
      style={{ width: 200 }}
      onChange={(value) => setCurrentTheme(value as Theme)}
      options={availableThemes.map((theme) => ({
        value: theme,
        label: theme.charAt(0).toUpperCase() + theme.slice(1),
      }))}
      value={currentTheme}
    />
  );
};

export default ThemeSelector;
