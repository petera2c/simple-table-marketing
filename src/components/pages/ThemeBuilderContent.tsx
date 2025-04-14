"use client";

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import type { Color } from "antd/es/color-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faPalette,
  faSwatchbook,
  faColumns,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { trackThemeChange, trackDownload } from "../../utils/analytics";
import SEO from "../../components/SEO";
import { UI_STRINGS } from "../../constants/strings/ui";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { TECHNICAL_STRINGS } from "../../constants/strings/technical";
import { useIsMobile } from "../../hooks/useIsMobile";

// Import our reusable components
import PageLayout from "../../components/PageLayout";
import ConfigurableSidebar, { SidebarConfig } from "../../components/ConfigurableSidebar";
import ExpandableSection from "../../components/ExpandableSection";
import ThemeColorPicker from "../../components/ThemeColorPicker";
import ThemeInput from "../../components/ThemeInput";
import MobileUnsupportedPage from "../../components/MobileUnsupported";
import BillingExample from "./BillingExampleContent";

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

export default function ThemeBuilderContent() {
  const isMobile = useIsMobile();
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    colors: true,
    typography: false,
    layout: false,
    effects: false,
  });

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

  // Toggle expanded sections
  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Subcategories for Colors
  const colorSubcategories: { [key: string]: (keyof ThemeConfig)[] } = {
    [UI_STRINGS.themeBuilder.subcategories.tableStructure]: [
      "borderColor",
      "lastGroupRowSeparatorBorderColor",
      "separatorBorderColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.button]: [
      "buttonActiveBackgroundColor",
      "buttonHoverBackgroundColor",
    ],
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
    [UI_STRINGS.themeBuilder.subcategories.checkbox]: [
      "checkboxCheckedBackgroundColor",
      "checkboxCheckedBorderColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.editor]: [
      "columnEditorBackgroundColor",
      "columnEditorPopoutBackgroundColor",
      "editableCellFocusBorderColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.interactiveElements]: [
      "draggingBackgroundColor",
      "resizeHandleColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.background]: [
      "footerBackgroundColor",
      "headerBackgroundColor",
      "scrollbarBgColor",
      "scrollbarThumbColor",
    ],
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

  // Create sidebar content
  const sidebarContent = (
    <div>
      {/* Color Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.colors}
        icon={faPalette}
        expanded={expandedSections["colors"]}
        onToggle={() => toggleSection("colors")}
      >
        {Object.entries(colorSubcategories).map(([subcategory, subKeys], index) => (
          <div key={index} className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">{subcategory}</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              {subKeys.map((key, index) => (
                <ThemeColorPicker
                  key={index}
                  label={shortenLabel(key.toString())}
                  value={theme[key].toString()}
                  onChange={handleColorChange(key)}
                />
              ))}
            </div>
          </div>
        ))}
      </ExpandableSection>

      {/* Typography Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.typography}
        icon={faCode}
        expanded={expandedSections["typography"]}
        onToggle={() => toggleSection("typography")}
      >
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {["fontFamily", "fontSize", "fontWeightBold", "fontWeightNormal"].map((key, index) => (
            <ThemeInput
              key={index}
              label={shortenLabel(key)}
              value={theme[key as keyof ThemeConfig]}
              onChange={(value) => handleValueChange(key as keyof ThemeConfig)(value)}
            />
          ))}
        </div>
      </ExpandableSection>

      {/* Layout Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.spacing}
        icon={faColumns}
        expanded={expandedSections["layout"]}
        onToggle={() => toggleSection("layout")}
      >
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {[
            "borderRadius",
            "borderWidth",
            "cellPadding",
            "spacingLarge",
            "spacingMedium",
            "spacingSmall",
          ].map((key) => (
            <ThemeInput
              key={key}
              label={shortenLabel(key)}
              value={theme[key as keyof ThemeConfig]}
              onChange={(value) => handleValueChange(key as keyof ThemeConfig)(value)}
            />
          ))}
        </div>
      </ExpandableSection>

      {/* Effects Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.effects}
        icon={faSwatchbook}
        expanded={expandedSections["effects"]}
        onToggle={() => toggleSection("effects")}
      >
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {["editCellShadow", "opacityDisabled", "transitionDuration", "transitionEase"].map(
            (key) => (
              <ThemeInput
                key={key}
                label={shortenLabel(key)}
                value={theme[key as keyof ThemeConfig]}
                onChange={(value) => handleValueChange(key as keyof ThemeConfig)(value)}
              />
            )
          )}
        </div>
      </ExpandableSection>
    </div>
  );

  // Create footer content
  const footerContent = (
    <Button
      className="w-full"
      type="primary"
      onClick={downloadCSS}
      icon={<FontAwesomeIcon icon={faDownload} />}
    >
      {UI_STRINGS.common.download} {UI_STRINGS.common.theme}
    </Button>
  );

  // Create sidebar config
  const sidebarConfig: SidebarConfig = {
    title: UI_STRINGS.themeBuilder.title,
    icon: faPaintBrush,
    sidebarContent,
    footerContent,
  };

  // If on mobile, return the unsupported page
  if (isMobile) {
    return <MobileUnsupportedPage featureName="Theme Builder" />;
  }

  return (
    <>
      <SEO
        title={SEO_STRINGS.themeBuilder.title}
        description={SEO_STRINGS.themeBuilder.description}
        keywords={SEO_STRINGS.themeBuilder.keywords}
        canonicalUrl="/theme-builder"
      />

      <PageLayout sidebar={<ConfigurableSidebar config={sidebarConfig} />}>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {UI_STRINGS.themeBuilder.sections.livePreview}
        </h1>
        <BillingExample themeOverride="custom" />
      </PageLayout>
    </>
  );
}
