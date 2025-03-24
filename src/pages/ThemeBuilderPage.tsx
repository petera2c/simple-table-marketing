import React, { useState, useEffect } from "react";
import { Button, ColorPicker, Input, Collapse } from "antd";
import type { Color } from "antd/es/color-picker";
import RowGroupingExample from "../demos/examples/row-grouping/RowGrouping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { trackThemeChange, trackDownload } from "../utils/analytics";

const { Panel } = Collapse;

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

const ThemeBuilder: React.FC = () => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    // Target the container of your table
    const container = document.querySelector(".simple-table-root");
    if (container) {
      // Set each CSS variable
      Object.entries(theme).forEach(([key, value]) => {
        const cssVarName = `--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
        console.log(cssVarName, value);
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
    a.download = "simple-table-theme.css";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    trackDownload("simple-table-theme.css");
  };

  // Group theme options into categories
  const themeCategories: { [key: string]: (keyof ThemeConfig)[] } = {
    Colors: [
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
    Spacing: ["borderRadius", "borderWidth", "cellPadding", "spacingLarge", "spacingMedium", "spacingSmall"],
    Typography: ["fontFamily", "fontSize", "fontWeightBold", "fontWeightNormal"],
    Effects: ["editCellShadow", "opacityDisabled", "transitionDuration", "transitionEase"],
  };

  // Subcategories for Colors
  const colorSubcategories: { [key: string]: (keyof ThemeConfig)[] } = {
    "Table Structure": ["borderColor", "lastGroupRowSeparatorBorderColor", "separatorBorderColor"],
    Button: ["buttonActiveBackgroundColor", "buttonHoverBackgroundColor"],
    Cell: ["cellColor", "cellOddRowColor", "evenRowBackgroundColor", "oddRowBackgroundColor"],
    Selection: [
      "selectedBorderBottomColor",
      "selectedBorderLeftColor",
      "selectedBorderRightColor",
      "selectedBorderTopColor",
      "selectedCellBackgroundColor",
      "selectedCellColor",
      "selectedFirstCellBackgroundColor",
      "selectedFirstCellColor",
    ],
    Checkbox: ["checkboxCheckedBackgroundColor", "checkboxCheckedBorderColor"],
    Editor: ["columnEditorBackgroundColor", "columnEditorPopoutBackgroundColor", "editableCellFocusBorderColor"],
    "Interactive Elements": ["draggingBackgroundColor", "resizeHandleColor"],
    Background: ["footerBackgroundColor", "headerBackgroundColor", "scrollbarBgColor", "scrollbarThumbColor"],
  };

  // Custom expand icon for Collapse
  const expandIcon = ({ isActive }: { isActive?: boolean }) => (
    <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} className="text-blue-600" />
  );

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Theme Builder</h1>
      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Column: Theme Options */}
        <div className="flex flex-col md:col-span-4 space-y-6 sticky top-0 self-start">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
          <Collapse defaultActiveKey={["Colors"]} expandIcon={expandIcon} className="border-none">
            {Object.entries(themeCategories).map(([category, keys]) => (
              <Panel header={category} key={category} className="mb-2">
                {category === "Colors" ? (
                  <div className="space-y-6">
                    {Object.entries(colorSubcategories).map(([subcategory, subKeys], subIndex) => (
                      <div key={subcategory} className={subIndex !== 0 ? "pt-6 border-t-2 border-gray-200" : ""}>
                        <div className="text-sm font-semibold text-gray-800 mb-3">{subcategory}</div>
                        <div className="space-y-4">
                          {subKeys.map((key, index) => (
                            <div key={key} className={index !== 0 ? "pt-4 border-t border-gray-100" : ""}>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {shortenLabel(key)}
                              </label>
                              <ColorPicker value={theme[key].toString()} onChange={handleColorChange(key)} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {keys.map((key, index) => (
                      <div key={key} className={index !== 0 ? "pt-4 border-t border-gray-100" : ""}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{shortenLabel(key)}</label>
                        {key.includes("Color") ? (
                          <ColorPicker value={theme[key].toString()} onChange={handleColorChange(key)} />
                        ) : (
                          <Input value={theme[key]} onChange={(e) => handleValueChange(key)(e.target.value)} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Panel>
            ))}
          </Collapse>
          <Button className="mt-6 w-full" type="primary" onClick={downloadCSS}>
            Download Theme
          </Button>
        </div>
        {/* Right Column: Live Preview (Wider) */}
        <div className="md:col-span-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h2>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm sticky top-20">
            <RowGroupingExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeBuilder;
