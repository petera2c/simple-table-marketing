import { Select } from "antd";
import { Theme } from "simple-table-core";

const THEME_OPTIONS: Theme[] = ["light", "dark", "sky", "violet", "neutral", "frost"];

const ThemeSelector = ({
  currentTheme = "light",
  setCurrentTheme,
}: {
  currentTheme?: Theme;
  setCurrentTheme: (theme: Theme) => void;
}) => {
  return (
    <Select
      placeholder="Select a theme"
      style={{ width: 200 }}
      onChange={(value) => setCurrentTheme(value as Theme)}
      options={THEME_OPTIONS.map((theme) => ({
        value: theme,
        label: theme.charAt(0).toUpperCase() + theme.slice(1),
      }))}
      value={currentTheme}
    />
  );
};

export default ThemeSelector;
