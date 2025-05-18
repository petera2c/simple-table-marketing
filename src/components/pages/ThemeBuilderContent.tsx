"use client";

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import type { Color } from "antd/es/color-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faPalette,
  faSwatchbook,
  faColumns,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { trackDownload } from "@/utils/analytics";
import { UI_STRINGS } from "@/constants/strings/ui";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";
import { useIsMobile } from "@/hooks/useIsMobile";

// Import our reusable components
import PageLayout from "@/components/PageLayout";
import ConfigurableSidebar, { SidebarConfig } from "@/components/ConfigurableSidebar";
import ExpandableSection from "@/components/ExpandableSection";
import ThemeColorPicker from "@/components/ThemeColorPicker";
import ThemeInput from "@/components/ThemeInput";
import MobileUnsupportedPage from "@/components/MobileUnsupported";

import { CellChangeProps, Row, SimpleTable, Theme } from "simple-table-core";
import { SALES_HEADERS } from "@/examples/sales/sales-headers";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import rawData from "@/examples/sales/sales-data.json";
import "simple-table-core/styles.css";

const ROW_HEIGHT = 40;

interface ThemeConfig {
  borderColor: string;
  borderRadius: string;
  buttonActiveBackgroundColor: string;
  buttonHoverBackgroundColor: string;
  cellColor: string;
  cellOddRowColor: string;
  cellPadding: string;
  cellFlashColor: string;
  checkboxCheckedBackgroundColor: string;
  checkboxCheckedBorderColor: string;
  columnEditorBackgroundColor: string;
  columnEditorPopoutBackgroundColor: string;
  draggingBackgroundColor: string;
  editCellShadow: string;
  editableCellFocusBorderColor: string;
  evenRowBackgroundColor: string;
  footerBackgroundColor: string;
  headerBackgroundColor: string;
  headerLabelColor: string;
  lastGroupRowSeparatorBorderColor: string;
  oddRowBackgroundColor: string;
  resizeHandleColor: string;
  scrollbarBgColor: string;
  scrollbarThumbColor: string;
  selectedBorderColor: string;
  selectedCellBackgroundColor: string;
  selectedCellColor: string;
  selectedFirstCellBackgroundColor: string;
  selectedFirstCellColor: string;
  separatorBorderColor: string;
  spacingMedium: string;
  spacingSmall: string;
}

const defaultTheme: ThemeConfig = {
  // Layout/Structure variables
  borderRadius: "4px",
  cellPadding: "8px",

  // Spacing variables
  spacingSmall: "4px",
  spacingMedium: "8px",

  // Scrollbar variables
  scrollbarBgColor: "#f8fafc", // slate-50
  scrollbarThumbColor: "#cbd5e1", // slate-300

  // Color variables
  borderColor: "#cbd5e1", // slate-300
  oddRowBackgroundColor: "#ffffff", // white
  evenRowBackgroundColor: "#f8fafc", // slate-50
  headerBackgroundColor: "#f1f5f9", // slate-100
  headerLabelColor: "#0f172a", // slate-900
  draggingBackgroundColor: "#e2e8f0", // slate-200
  selectedCellBackgroundColor: "#dbeafe", // blue-100
  selectedFirstCellBackgroundColor: "#eff6ff", // blue-50
  footerBackgroundColor: "#f8fafc", // slate-50
  cellColor: "#0f172a", // slate-900
  cellOddRowColor: "#1e293b", // slate-800
  editCellShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  selectedCellColor: "#0f172a", // slate-900
  selectedFirstCellColor: "#0f172a", // slate-900
  resizeHandleColor: "#94a3b8", // slate-400
  separatorBorderColor: "#e2e8f0", // slate-200
  lastGroupRowSeparatorBorderColor: "#94a3b8", // slate-400
  cellFlashColor: "#e2e8f0", // slate-200

  // Border colors
  selectedBorderColor: "#3b82f6", // blue-500
  editableCellFocusBorderColor: "#3b82f6", // blue-500

  // Component-specific colors
  checkboxCheckedBackgroundColor: "#2563eb", // blue-600
  checkboxCheckedBorderColor: "#2563eb", // blue-600
  columnEditorBackgroundColor: "#ffffff", // white
  columnEditorPopoutBackgroundColor: "#ffffff", // white
  buttonHoverBackgroundColor: "#f1f5f9", // slate-100
  buttonActiveBackgroundColor: "#2563eb", // blue-600
};

const setThemeToDocument = (theme: ThemeConfig) => {
  const container = document.querySelector(".simple-table-root");
  if (container) {
    // Set each CSS variable
    Object.entries(theme).forEach(([key, value]) => {
      const cssVarName = `--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      (container as HTMLElement).style.setProperty(cssVarName, value);
    });
  }
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
    setThemeToDocument(theme);
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
      "cellFlashColor",
    ],
    [UI_STRINGS.themeBuilder.subcategories.selection]: [
      "selectedBorderColor",
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
    <div className="px-1">
      {/* Color Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.colors}
        icon={faPalette}
        expanded={expandedSections["colors"]}
        onToggle={() => toggleSection("colors")}
      >
        {Object.entries(colorSubcategories).map(([subcategory, subKeys], index) => (
          <div key={index} className="mb-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">{subcategory}</h4>
            <div className="grid grid-cols-1 gap-y-4">
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

      {/* Layout Settings */}
      <ExpandableSection
        title={UI_STRINGS.themeBuilder.categories.spacing}
        icon={faColumns}
        expanded={expandedSections["layout"]}
        onToggle={() => toggleSection("layout")}
      >
        <div className="grid grid-cols-1 gap-y-4 mb-2">
          {["borderRadius", "cellPadding", "spacingMedium", "spacingSmall"].map((key) => (
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
        <div className="grid grid-cols-1 gap-y-4 mb-2">
          {["editCellShadow"].map((key) => (
            <ThemeInput
              key={key}
              label={shortenLabel(key)}
              value={theme[key as keyof ThemeConfig]}
              onChange={(value) => handleValueChange(key as keyof ThemeConfig)(value)}
            />
          ))}
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
    width: "380px", // Slightly smaller width that works better with single column layout
  };

  // If on mobile, return the unsupported page
  if (isMobile) {
    return <MobileUnsupportedPage featureName="Theme Builder" />;
  }

  return (
    <PageLayout sidebar={<ConfigurableSidebar config={sidebarConfig} />}>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {UI_STRINGS.themeBuilder.sections.livePreview}
      </h1>
      <SalesExample
        onGridReady={() => {
          setThemeToDocument(theme);
        }}
      />
    </PageLayout>
  );
}

// Process the data to add the new fields
const processedData = (rawData as Row[]).map((row: Row) => {
  // Generate a random close date in the past 90 days
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 90));
  const closeDate = pastDate.toISOString().split("T")[0];

  // Assign a random category
  const categories = ["Software", "Hardware", "Services", "Consulting", "Training", "Support"];
  const category = categories[Math.floor(Math.random() * categories.length)];

  return {
    ...row,
    rowData: {
      ...row.rowData,
      closeDate,
      category,
    },
  };
});

function SalesExample({ onGridReady }: { onGridReady?: () => void }) {
  const [data, setData] = useState(processedData);

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });
  const howManyRowsCanFit = containerHeight ? Math.floor(containerHeight / ROW_HEIGHT) : 10;

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.rowMeta.rowId === row.rowMeta.rowId) {
          return {
            ...item,
            rowData: {
              ...item.rowData,
              [accessor]: newValue,
            },
          };
        }
        return item;
      })
    );
  };

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={SALES_HEADERS}
      editColumns
      onCellEdit={handleCellEdit}
      onGridReady={onGridReady}
      rows={data}
      rowsPerPage={howManyRowsCanFit}
      selectableCells
      shouldPaginate
      theme={"custom"}
    />
  );
}
