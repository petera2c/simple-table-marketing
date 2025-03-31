import React, { useState, useEffect } from "react";
import { Button, ColorPicker, Input } from "antd";
import type { Color } from "antd/es/color-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCode,
  faPaintBrush,
  faPalette,
  faSwatchbook,
  faColumns,
  faDownload,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { trackThemeChange, trackDownload } from "../utils/analytics";
import SEO from "../components/SEO";
import { UI_STRINGS } from "../constants/strings/ui";
import { SEO_STRINGS } from "../constants/strings/seo";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";
import RowGroupingExample from "../components/examples/FinanceExample";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";

interface ThemeConfig {
  borderColor: string;
  borderRadius: string;
  borderWidth: string;
  buttonActiveBackgroundColor: string;
  buttonHoverBackgroundColor: string;
  cellColor: string;
  cellOddRowColor: string;
  cellPadding: string;
  checkboxCheckedBackgroundColor: string;
  checkboxCheckedBorderColor: string;
  columnEditorBackgroundColor: string;
  columnEditorPopoutBackgroundColor: string;
  draggingBackgroundColor: string;
  editCellShadow: string;
  editableCellFocusBorderColor: string;
  evenRowBackgroundColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeightBold: number;
  fontWeightNormal: number;
  footerBackgroundColor: string;
  headerBackgroundColor: string;
  lastGroupRowSeparatorBorderColor: string;
  oddRowBackgroundColor: string;
  opacityDisabled: number;
  resizeHandleColor: string;
  scrollbarBgColor: string;
  scrollbarThumbColor: string;
  selectedBorderBottomColor: string;
  selectedBorderLeftColor: string;
  selectedBorderRightColor: string;
  selectedBorderTopColor: string;
  selectedCellBackgroundColor: string;
  selectedCellColor: string;
  selectedFirstCellBackgroundColor: string;
  selectedFirstCellColor: string;
  separatorBorderColor: string;
  spacingLarge: string;
  spacingMedium: string;
  spacingSmall: string;
  transitionDuration: string;
  transitionEase: string;
}

const defaultTheme: ThemeConfig = {
  borderColor: "#d1d5db",
  borderRadius: "4px",
  borderWidth: "1px",
  buttonActiveBackgroundColor: "#1e3a8a",
  buttonHoverBackgroundColor: "#e5e7eb",
  cellColor: "#1f2937",
  cellOddRowColor: "#374151",
  cellPadding: "8px",
  checkboxCheckedBackgroundColor: "#2563eb",
  checkboxCheckedBorderColor: "#2563eb",
  columnEditorBackgroundColor: "#ffffff",
  columnEditorPopoutBackgroundColor: "#ffffff",
  draggingBackgroundColor: "#e5e7eb",
  editCellShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px -1px rgba(0, 0, 0, 0.05)",
  editableCellFocusBorderColor: "#2563eb",
  evenRowBackgroundColor: "#ffffff",
  fontFamily: '"Roboto", sans-serif',
  fontSize: "0.875rem",
  fontWeightBold: 600,
  fontWeightNormal: 400,
  footerBackgroundColor: "#ffffff",
  headerBackgroundColor: "#ffffff",
  lastGroupRowSeparatorBorderColor: "#d1d5db",
  oddRowBackgroundColor: "#ffffff",
  opacityDisabled: 0.5,
  resizeHandleColor: "#93c5fd",
  scrollbarBgColor: "#f8fafc",
  scrollbarThumbColor: "#cbd5e1",
  selectedBorderBottomColor: "#2563eb",
  selectedBorderLeftColor: "#2563eb",
  selectedBorderRightColor: "#2563eb",
  selectedBorderTopColor: "#2563eb",
  selectedCellBackgroundColor: "#bfdbfe",
  selectedCellColor: "#111827",
  selectedFirstCellBackgroundColor: "#bfdbfe",
  selectedFirstCellColor: "#111827",
  separatorBorderColor: "#f1f5f9",
  spacingLarge: "16px",
  spacingMedium: "8px",
  spacingSmall: "4px",
  transitionDuration: "0.2s",
  transitionEase: "ease",
};

interface ThemeSidebarProps {
  theme: ThemeConfig;
  onColorChange: (key: keyof ThemeConfig) => (color: Color) => void;
  onValueChange: (key: keyof ThemeConfig) => (value: string | number | null) => void;
  onDownload: () => void;
  colorSubcategories: { [key: string]: (keyof ThemeConfig)[] };
  themeCategories: { [key: string]: (keyof ThemeConfig)[] };
}

const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
  theme,
  onColorChange,
  onValueChange,
  onDownload,
  colorSubcategories,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    colors: true,
    typography: false,
    layout: false,
    effects: false,
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Shorten label names
  const shortenLabel = (key: string) => {
    // Capitalize first letter of each word
    return (
      key.charAt(0).toUpperCase() +
      key
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim()
        .replace("Background Color", "Bg")
        .replace("Border Color", "Border")
        .replace("Color", "")
    );
  };

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="md:w-72 w-full sticky top-[84px] mb-6 self-start h-[calc(100vh-84px-4rem)]"
    >
      <div className="bg-white/90 backdrop-blur-sm flex flex-col rounded-xl h-full shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1 overflow-hidden">
        <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
          <FontAwesomeIcon icon={faPaintBrush} />
          Theme Builder
        </h2>

        <div className="overflow-y-auto flex-grow px-3 pb-2">
          {/* Color Settings */}
          <div className="py-1 mb-4">
            <button
              onClick={() => toggleSection("colors")}
              className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPalette} className="text-blue-500" />
                Colors
              </span>
              <FontAwesomeIcon
                icon={expandedSections["colors"] ? faChevronDown : faChevronRight}
                className="text-gray-400"
              />
            </button>

            {expandedSections["colors"] && (
              <div className="mt-1 ml-3 border-l-2 border-gray-100 pl-4 pr-2">
                {Object.entries(colorSubcategories).map(([subcategory, subKeys]) => (
                  <div key={subcategory} className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">{subcategory}</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                      {subKeys.map((key) => (
                        <div key={key} className="mb-2">
                          <label
                            className="block text-xs font-medium text-gray-700 mb-1 truncate"
                            title={shortenLabel(key)}
                          >
                            {shortenLabel(key)}
                          </label>
                          <ColorPicker size="small" value={theme[key].toString()} onChange={onColorChange(key)} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Typography Settings */}
          <div className="py-1 mb-4">
            <button
              onClick={() => toggleSection("typography")}
              className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-blue-500" />
                Typography
              </span>
              <FontAwesomeIcon
                icon={expandedSections["typography"] ? faChevronDown : faChevronRight}
                className="text-gray-400"
              />
            </button>

            {expandedSections["typography"] && (
              <div className="mt-1 ml-3 space-y-3 border-l-2 border-gray-100 pl-4 pr-2">
                {["fontFamily", "fontSize", "fontWeightBold", "fontWeightNormal"].map((key) => (
                  <div key={key} className="mb-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">{shortenLabel(key)}</label>
                    <Input
                      size="small"
                      value={theme[key as keyof ThemeConfig]}
                      onChange={(e) => onValueChange(key as keyof ThemeConfig)(e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Layout Settings */}
          <div className="py-1 mb-4">
            <button
              onClick={() => toggleSection("layout")}
              className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faColumns} className="text-blue-500" />
                Layout & Spacing
              </span>
              <FontAwesomeIcon
                icon={expandedSections["layout"] ? faChevronDown : faChevronRight}
                className="text-gray-400"
              />
            </button>

            {expandedSections["layout"] && (
              <div className="mt-1 ml-3 border-l-2 border-gray-100 pl-4 pr-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  {["borderRadius", "borderWidth", "cellPadding", "spacingLarge", "spacingMedium", "spacingSmall"].map(
                    (key) => (
                      <div key={key} className="mb-2">
                        <label
                          className="block text-xs font-medium text-gray-700 mb-1 truncate"
                          title={shortenLabel(key)}
                        >
                          {shortenLabel(key)}
                        </label>
                        <Input
                          size="small"
                          value={theme[key as keyof ThemeConfig]}
                          onChange={(e) => onValueChange(key as keyof ThemeConfig)(e.target.value)}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Effects Settings */}
          <div className="py-1 mb-4">
            <button
              onClick={() => toggleSection("effects")}
              className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSwatchbook} className="text-blue-500" />
                Effects
              </span>
              <FontAwesomeIcon
                icon={expandedSections["effects"] ? faChevronDown : faChevronRight}
                className="text-gray-400"
              />
            </button>

            {expandedSections["effects"] && (
              <div className="mt-1 ml-3 border-l-2 border-gray-100 pl-4 pr-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  {["editCellShadow", "opacityDisabled", "transitionDuration", "transitionEase"].map((key) => (
                    <div key={key} className="mb-2">
                      <label
                        className="block text-xs font-medium text-gray-700 mb-1 truncate"
                        title={shortenLabel(key)}
                      >
                        {shortenLabel(key)}
                      </label>
                      <Input
                        size="small"
                        value={theme[key as keyof ThemeConfig]}
                        onChange={(e) => onValueChange(key as keyof ThemeConfig)(e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed download button (outside scrollable area) */}
        <div className="px-3 py-3 border-t border-gray-100 mt-auto">
          <Button className="w-full" type="primary" onClick={onDownload} icon={<FontAwesomeIcon icon={faDownload} />}>
            {UI_STRINGS.common.download} {UI_STRINGS.common.theme}
          </Button>
        </div>
      </div>
    </motion.aside>
  );
};

const ThemeBuilder: React.FC = () => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    // Target the container of your table
    const container = document.querySelector(".simple-table-root");
    if (container) {
      // Set each CSS variable
      Object.entries(theme).forEach(([key, value]) => {
        const cssVarName = `--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
        document.documentElement.style.setProperty(cssVarName, value);
      });
      // Track theme change
      trackThemeChange("Custom Theme");
    }
  }, [theme]);

  const handleColorChange = (key: keyof ThemeConfig) => (color: Color) => {
    setTheme((prev) => ({ ...prev, [key]: color.toHexString() }));
  };

  const handleValueChange = (key: keyof ThemeConfig) => (value: string | number | null) => {
    if (value !== null) {
      setTheme((prev) => ({ ...prev, [key]: value.toString() }));
    }
  };

  const generateCSS = (): string => {
    return `
.theme-custom {
  ${Object.entries(theme)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`)
    .join("\n  ")}
}
    `.trim();
  };

  const downloadCSS = () => {
    const cssContent = generateCSS();
    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = TECHNICAL_STRINGS.files.theme;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    trackDownload(TECHNICAL_STRINGS.files.theme);
  };

  // Group theme options into categories
  const themeCategories: { [key: string]: (keyof ThemeConfig)[] } = {
    [UI_STRINGS.themeBuilder.categories.colors]: [
      "borderColor",
      "buttonActiveBackgroundColor",
      "buttonHoverBackgroundColor",
      "cellColor",
      "cellOddRowColor",
      "checkboxCheckedBackgroundColor",
      "checkboxCheckedBorderColor",
      "columnEditorBackgroundColor",
      "columnEditorPopoutBackgroundColor",
      "draggingBackgroundColor",
      "editableCellFocusBorderColor",
      "evenRowBackgroundColor",
      "footerBackgroundColor",
      "headerBackgroundColor",
      "lastGroupRowSeparatorBorderColor",
      "oddRowBackgroundColor",
      "resizeHandleColor",
      "scrollbarBgColor",
      "scrollbarThumbColor",
      "selectedBorderBottomColor",
      "selectedBorderLeftColor",
      "selectedBorderRightColor",
      "selectedBorderTopColor",
      "selectedCellBackgroundColor",
      "selectedCellColor",
      "selectedFirstCellBackgroundColor",
      "selectedFirstCellColor",
      "separatorBorderColor",
    ],
    [UI_STRINGS.themeBuilder.categories.spacing]: [
      "borderRadius",
      "borderWidth",
      "cellPadding",
      "spacingLarge",
      "spacingMedium",
      "spacingSmall",
    ],
    [UI_STRINGS.themeBuilder.categories.typography]: ["fontFamily", "fontSize", "fontWeightBold", "fontWeightNormal"],
    [UI_STRINGS.themeBuilder.categories.effects]: [
      "editCellShadow",
      "opacityDisabled",
      "transitionDuration",
      "transitionEase",
    ],
  };

  // Subcategories for Colors
  const colorSubcategories: { [key: string]: (keyof ThemeConfig)[] } = {
    [UI_STRINGS.themeBuilder.subcategories.tableStructure]: [
      "borderColor",
      "lastGroupRowSeparatorBorderColor",
      "separatorBorderColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.button]: ["buttonActiveBackgroundColor", "buttonHoverBackgroundColor"],
    [UI_STRINGS.themeBuilder.subcategories.cell]: [
      "cellColor",
      "cellOddRowColor",
      "evenRowBackgroundColor",
      "oddRowBackgroundColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.selection]: [
      "selectedBorderBottomColor",
      "selectedBorderLeftColor",
      "selectedBorderRightColor",
      "selectedBorderTopColor",
      "selectedCellBackgroundColor",
      "selectedCellColor",
      "selectedFirstCellBackgroundColor",
      "selectedFirstCellColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.checkbox]: ["checkboxCheckedBackgroundColor", "checkboxCheckedBorderColor"],
    [UI_STRINGS.themeBuilder.subcategories.editor]: [
      "columnEditorBackgroundColor",
      "columnEditorPopoutBackgroundColor",
      "editableCellFocusBorderColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.interactiveElements]: ["draggingBackgroundColor", "resizeHandleColor"],
    [UI_STRINGS.themeBuilder.subcategories.background]: [
      "footerBackgroundColor",
      "headerBackgroundColor",
      "scrollbarBgColor",
      "scrollbarThumbColor",
    ],
  };

  return (
    <>
      <SEO
        title={SEO_STRINGS.themeBuilder.title}
        description={SEO_STRINGS.themeBuilder.description}
        keywords={SEO_STRINGS.themeBuilder.keywords}
        canonicalUrl="/theme-builder"
      />

      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-8">
          <ThemeSidebar
            theme={theme}
            onColorChange={handleColorChange}
            onValueChange={handleValueChange}
            onDownload={downloadCSS}
            colorSubcategories={colorSubcategories}
            themeCategories={themeCategories}
          />

          <div className="flex-1 mx-auto max-w-4xl mt-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 mb-8 min-h-[calc(100dvh-84px-4rem)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{UI_STRINGS.themeBuilder.sections.livePreview}</h1>

              <RowGroupingExample />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeBuilder;
