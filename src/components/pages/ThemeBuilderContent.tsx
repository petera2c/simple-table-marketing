"use client";

import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import PageWrapper from "@/components/PageWrapper";
import type { Color } from "antd/es/color-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faDownload,
  faRotateLeft,
  faSearch,
  faChevronDown,
  faChevronUp,
  faTable,
  faTableCells,
  faTableColumns,
  faTableList,
  faPenToSquare,
  faHandPointer,
  faSquareCheck,
  faArrowsUpDownLeftRight,
  faComment,
  faEllipsisVertical,
  faCalendar,
  faCaretDown,
  faFilter,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { UI_STRINGS } from "@/constants/strings/ui";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useThemeContext } from "@/providers/ThemeProvider";

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
import "simple-table-core/styles.css";

const ROW_HEIGHT = 32;

// Function to process the data and add the new fields
const processData = (rawData: Row[]): (Row & { closeDate: string; category: string })[] => {
  return rawData.map((row: Row) => {
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
      closeDate,
      category,
    };
  });
};

interface ThemeConfig {
  borderColor: string;
  borderRadius: string;
  buttonActiveBackgroundColor: string;
  buttonHoverBackgroundColor: string;
  cellColor: string;
  cellOddRowColor: string;
  cellPadding: string;
  cellFlashColor: string;
  copyFlashColor: string;
  warningFlashColor: string;
  checkboxCheckedBackgroundColor: string;
  checkboxCheckedBorderColor: string;
  checkboxBorderColor: string;
  columnEditorBackgroundColor: string;
  columnEditorPopoutBackgroundColor: string;
  columnEditorTextColor: string;
  draggingBackgroundColor: string;
  editCellShadow: string;
  editableCellFocusBorderColor: string;
  evenRowBackgroundColor: string;
  evenColumnBackgroundColor: string;
  footerBackgroundColor: string;
  headerBackgroundColor: string;
  headerLabelColor: string;
  headerIconColor: string;
  lastGroupRowSeparatorBorderColor: string;
  oddRowBackgroundColor: string;
  oddColumnBackgroundColor: string;
  resizeHandleColor: string;
  resizeHandleSelectedColor: string;
  scrollbarBgColor: string;
  scrollbarThumbColor: string;
  scrollbarWidth: string;
  selectedBorderColor: string;
  selectedCellBackgroundColor: string;
  selectedCellColor: string;
  selectedFirstCellBackgroundColor: string;
  selectedFirstCellColor: string;
  selectedRowBackgroundColor: string;
  separatorBorderColor: string;
  spacingMedium: string;
  spacingSmall: string;
  hoverRowBackgroundColor: string;
  nextPrevBtnColor: string;
  nextPrevBtnDisabledColor: string;
  pageBtnColor: string;
  pageBtnHoverBackgroundColor: string;
  dropdownGroupLabelColor: string;
  datepickerWeekdayColor: string;
  datepickerOtherMonthColor: string;
  filterButtonDisabledBackgroundColor: string;
  filterButtonDisabledTextColor: string;
  tooltipBackgroundColor: string;
  tooltipTextColor: string;
  tooltipBorderRadius: string;
  tooltipPadding: string;
  tooltipFontSize: string;
  tooltipShadow: string;
  headerSelectedBackgroundColor: string;
  headerSelectedLabelColor: string;
  headerSelectedIconColor: string;
  headerHighlightIndicatorColor: string;
  selectionHighlightIndicatorColor: string;
}

const lightThemeDefaults: ThemeConfig = {
  // Layout/Structure variables
  borderRadius: "4px",
  cellPadding: "8px",

  // Spacing variables
  spacingSmall: "4px",
  spacingMedium: "8px",

  // Scrollbar variables
  scrollbarBgColor: "#f8fafc", // slate-50
  scrollbarThumbColor: "#cbd5e1", // slate-300
  scrollbarWidth: "thin",

  // Color variables
  borderColor: "#cbd5e1", // slate-300
  oddRowBackgroundColor: "#ffffff", // white
  evenRowBackgroundColor: "#f8fafc", // slate-50
  oddColumnBackgroundColor: "#f8fafc", // slate-50
  evenColumnBackgroundColor: "#ffffff", // white
  headerBackgroundColor: "#f1f5f9", // slate-100
  headerLabelColor: "#0f172a", // slate-900
  headerIconColor: "#64748b", // slate-500
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
  resizeHandleSelectedColor: "#ffffff", // white
  separatorBorderColor: "#e2e8f0", // slate-200
  lastGroupRowSeparatorBorderColor: "#94a3b8", // slate-400
  cellFlashColor: "#e2e8f0", // slate-200
  copyFlashColor: "#3b82f6", // blue-500
  warningFlashColor: "#fca5a5", // red-300

  // Border colors
  selectedBorderColor: "#3b82f6", // blue-500
  editableCellFocusBorderColor: "#3b82f6", // blue-500

  // Component-specific colors
  checkboxCheckedBackgroundColor: "#2563eb", // blue-600
  checkboxCheckedBorderColor: "#2563eb", // blue-600
  checkboxBorderColor: "#cbd5e1", // slate-300
  columnEditorBackgroundColor: "#ffffff", // white
  columnEditorPopoutBackgroundColor: "#ffffff", // white
  columnEditorTextColor: "#64748b", // slate-500
  buttonHoverBackgroundColor: "#f1f5f9", // slate-100
  buttonActiveBackgroundColor: "#2563eb", // blue-600
  hoverRowBackgroundColor: "#f1f5f9", // slate-100
  selectedRowBackgroundColor: "#eff6ff", // blue-50

  // Header selection colors
  headerSelectedBackgroundColor: "#2563eb", // blue-600
  headerSelectedLabelColor: "#ffffff", // white
  headerSelectedIconColor: "#ffffff", // white

  // Highlight indicator colors
  headerHighlightIndicatorColor: "#cbd5e1", // slate-300
  selectionHighlightIndicatorColor: "#cbd5e1", // slate-300

  // Navigation button colors
  nextPrevBtnColor: "#475569", // slate-600
  nextPrevBtnDisabledColor: "#94a3b8", // slate-400

  // Page button colors
  pageBtnColor: "#475569", // slate-600
  pageBtnHoverBackgroundColor: "#f1f5f9", // slate-100

  // Dropdown colors
  dropdownGroupLabelColor: "#64748b", // slate-500

  // Datepicker colors
  datepickerWeekdayColor: "#64748b", // slate-500
  datepickerOtherMonthColor: "#94a3b8", // slate-400

  // Filter button disabled colors
  filterButtonDisabledBackgroundColor: "#cbd5e1", // slate-300
  filterButtonDisabledTextColor: "#64748b", // slate-500

  // Tooltip colors
  tooltipBackgroundColor: "#0f172a", // slate-900
  tooltipTextColor: "#ffffff", // white
  tooltipBorderRadius: "6px",
  tooltipPadding: "8px 12px",
  tooltipFontSize: "13px",
  tooltipShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
};

const darkThemeDefaults: ThemeConfig = {
  // Layout/Structure variables
  borderRadius: "4px",
  cellPadding: "8px",

  // Spacing variables
  spacingSmall: "4px",
  spacingMedium: "8px",

  // Scrollbar variables
  scrollbarBgColor: "#1e293b", // slate-800
  scrollbarThumbColor: "#475569", // slate-600
  scrollbarWidth: "thin",

  // Color variables
  borderColor: "#475569", // slate-600
  oddRowBackgroundColor: "#0f172a", // slate-900
  evenRowBackgroundColor: "#1e293b", // slate-800
  oddColumnBackgroundColor: "#1e293b", // slate-800
  evenColumnBackgroundColor: "#0f172a", // slate-900
  headerBackgroundColor: "#0f172a", // slate-900
  headerLabelColor: "#f8fafc", // slate-50
  headerIconColor: "#94a3b8", // slate-400
  draggingBackgroundColor: "#334155", // slate-700
  selectedCellBackgroundColor: "#1e3a8a", // blue-900
  selectedFirstCellBackgroundColor: "#172554", // blue-950
  footerBackgroundColor: "#1e293b", // slate-800
  cellColor: "#f8fafc", // slate-50
  cellOddRowColor: "#e2e8f0", // slate-200
  editCellShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
  selectedCellColor: "#f8fafc", // slate-50
  selectedFirstCellColor: "#f8fafc", // slate-50
  resizeHandleColor: "#64748b", // slate-500
  resizeHandleSelectedColor: "#ffffff", // white
  separatorBorderColor: "#334155", // slate-700
  lastGroupRowSeparatorBorderColor: "#64748b", // slate-500
  cellFlashColor: "#334155", // slate-700
  copyFlashColor: "#60a5fa", // blue-400
  warningFlashColor: "#f87171", // red-400
  hoverRowBackgroundColor: "#334155", // slate-700

  // Border colors
  selectedBorderColor: "#60a5fa", // blue-400
  editableCellFocusBorderColor: "#60a5fa", // blue-400

  // Component-specific colors
  checkboxCheckedBackgroundColor: "#3b82f6", // blue-500
  checkboxCheckedBorderColor: "#3b82f6", // blue-500
  checkboxBorderColor: "#475569", // slate-600
  columnEditorBackgroundColor: "#1e293b", // slate-800
  columnEditorPopoutBackgroundColor: "#1e293b", // slate-800
  columnEditorTextColor: "#94a3b8", // slate-400
  buttonHoverBackgroundColor: "#334155", // slate-700
  buttonActiveBackgroundColor: "#3b82f6", // blue-500
  selectedRowBackgroundColor: "#172554", // blue-950

  // Header selection colors
  headerSelectedBackgroundColor: "#3b82f6", // blue-500
  headerSelectedLabelColor: "#ffffff", // white
  headerSelectedIconColor: "#ffffff", // white

  // Highlight indicator colors
  headerHighlightIndicatorColor: "#475569", // slate-600
  selectionHighlightIndicatorColor: "#475569", // slate-600

  // Navigation button colors
  nextPrevBtnColor: "#94a3b8", // slate-400
  nextPrevBtnDisabledColor: "#64748b", // slate-500

  // Page button colors
  pageBtnColor: "#94a3b8", // slate-400
  pageBtnHoverBackgroundColor: "#334155", // slate-700

  // Dropdown colors
  dropdownGroupLabelColor: "#94a3b8", // slate-400

  // Datepicker colors
  datepickerWeekdayColor: "#94a3b8", // slate-400
  datepickerOtherMonthColor: "#64748b", // slate-500

  // Filter button disabled colors
  filterButtonDisabledBackgroundColor: "#475569", // slate-600
  filterButtonDisabledTextColor: "#94a3b8", // slate-400

  // Tooltip colors
  tooltipBackgroundColor: "#1e293b", // slate-800
  tooltipTextColor: "#f8fafc", // slate-50
  tooltipBorderRadius: "6px",
  tooltipPadding: "8px 12px",
  tooltipFontSize: "13px",
  tooltipShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
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
  const { theme: appTheme } = useThemeContext();

  // Track user changes that apply to all themes
  const [userChanges, setUserChanges] = useState<Partial<ThemeConfig>>({});

  // The current theme is a combination of the default theme for the current mode + user changes
  const [theme, setTheme] = useState<ThemeConfig>(
    appTheme === "light"
      ? { ...lightThemeDefaults, ...userChanges }
      : { ...darkThemeDefaults, ...userChanges }
  );

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    tableStructure: false,
    rowsAndCells: false,
    columns: false,
    headers: false,
    footer: false,
    selectionAndEditing: false,
    buttons: false,
    checkboxes: false,
    dragAndResize: false,
    tooltip: false,
    scrollbar: false,
    datepicker: false,
    dropdown: false,
    filter: false,
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Update the theme when app theme changes or user makes changes
  useEffect(() => {
    const baseTheme = appTheme === "light" ? lightThemeDefaults : darkThemeDefaults;

    // Apply the current theme defaults + any user changes
    setTheme({ ...baseTheme, ...userChanges });
  }, [appTheme, userChanges]);

  useEffect(() => {
    setThemeToDocument(theme);
  }, [theme]);

  const handleColorChange = (key: keyof ThemeConfig) => (color: Color) => {
    const newValue = color.toHexString();

    // Store the change in the user changes object
    setUserChanges((prev) => ({ ...prev, [key]: newValue }));
  };

  const handleValueChange = (key: keyof ThemeConfig) => (value: string | number | null) => {
    if (value !== null) {
      const stringValue = value.toString();

      // Store the change in the user changes object
      setUserChanges((prev) => ({ ...prev, [key]: stringValue }));
    }
  };

  const resetTheme = () => {
    // Clear all user changes and search
    setUserChanges({});
    setSearchQuery("");
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
  };

  // Toggle expanded sections
  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Check if all sections are expanded
  const allExpanded = Object.values(expandedSections).every((value) => value);

  // Expand or collapse all sections
  const toggleAllSections = () => {
    const newState = !allExpanded;
    setExpandedSections({
      tableStructure: newState,
      rowsAndCells: newState,
      columns: newState,
      headers: newState,
      footer: newState,
      selectionAndEditing: newState,
      buttons: newState,
      checkboxes: newState,
      dragAndResize: newState,
      tooltip: newState,
      scrollbar: newState,
      datepicker: newState,
      dropdown: newState,
      filter: newState,
    });
  };

  // Section configurations organized by visual component
  type SectionField = {
    key: keyof ThemeConfig;
    type: "color" | "text";
  };

  type SectionConfig = {
    title: string;
    fields: SectionField[];
  };

  const sectionConfigs: Record<string, SectionConfig[]> = {
    tableStructure: [
      {
        title: "Borders",
        fields: [
          { key: "borderColor", type: "color" },
          { key: "borderRadius", type: "text" },
          { key: "separatorBorderColor", type: "color" },
          { key: "lastGroupRowSeparatorBorderColor", type: "color" },
        ],
      },
      {
        title: "Spacing",
        fields: [
          { key: "spacingSmall", type: "text" },
          { key: "spacingMedium", type: "text" },
        ],
      },
    ],
    rowsAndCells: [
      {
        title: "Row Colors",
        fields: [
          { key: "oddRowBackgroundColor", type: "color" },
          { key: "evenRowBackgroundColor", type: "color" },
          { key: "hoverRowBackgroundColor", type: "color" },
        ],
      },
      {
        title: "Cell Text & Layout",
        fields: [
          { key: "cellColor", type: "color" },
          { key: "cellOddRowColor", type: "color" },
          { key: "cellPadding", type: "text" },
        ],
      },
      {
        title: "Cell Effects",
        fields: [
          { key: "cellFlashColor", type: "color" },
          { key: "copyFlashColor", type: "color" },
          { key: "warningFlashColor", type: "color" },
        ],
      },
    ],
    columns: [
      {
        title: "Column Colors",
        fields: [
          { key: "oddColumnBackgroundColor", type: "color" },
          { key: "evenColumnBackgroundColor", type: "color" },
        ],
      },
      {
        title: "Column Editor",
        fields: [
          { key: "columnEditorBackgroundColor", type: "color" },
          { key: "columnEditorPopoutBackgroundColor", type: "color" },
          { key: "columnEditorTextColor", type: "color" },
        ],
      },
    ],
    headers: [
      {
        title: "Header Styles",
        fields: [
          { key: "headerBackgroundColor", type: "color" },
          { key: "headerLabelColor", type: "color" },
          { key: "headerIconColor", type: "color" },
          { key: "headerHighlightIndicatorColor", type: "color" },
        ],
      },
      {
        title: "Header Selection",
        fields: [
          { key: "headerSelectedBackgroundColor", type: "color" },
          { key: "headerSelectedLabelColor", type: "color" },
          { key: "headerSelectedIconColor", type: "color" },
        ],
      },
    ],
    footer: [
      {
        title: "Footer Styles",
        fields: [{ key: "footerBackgroundColor", type: "color" }],
      },
      {
        title: "Pagination",
        fields: [
          { key: "pageBtnColor", type: "color" },
          { key: "pageBtnHoverBackgroundColor", type: "color" },
        ],
      },
      {
        title: "Navigation Buttons",
        fields: [
          { key: "nextPrevBtnColor", type: "color" },
          { key: "nextPrevBtnDisabledColor", type: "color" },
        ],
      },
    ],
    selectionAndEditing: [
      {
        title: "Selection Colors",
        fields: [
          { key: "selectedCellBackgroundColor", type: "color" },
          { key: "selectedCellColor", type: "color" },
          { key: "selectedFirstCellBackgroundColor", type: "color" },
          { key: "selectedFirstCellColor", type: "color" },
          { key: "selectedRowBackgroundColor", type: "color" },
          { key: "selectionHighlightIndicatorColor", type: "color" },
        ],
      },
      {
        title: "Selection Borders",
        fields: [{ key: "selectedBorderColor", type: "color" }],
      },
      {
        title: "Editing",
        fields: [
          { key: "editableCellFocusBorderColor", type: "color" },
          { key: "editCellShadow", type: "text" },
        ],
      },
    ],
    buttons: [
      {
        title: "Button States",
        fields: [
          { key: "buttonHoverBackgroundColor", type: "color" },
          { key: "buttonActiveBackgroundColor", type: "color" },
        ],
      },
    ],
    checkboxes: [
      {
        title: "Checkbox Styles",
        fields: [
          { key: "checkboxCheckedBackgroundColor", type: "color" },
          { key: "checkboxCheckedBorderColor", type: "color" },
          { key: "checkboxBorderColor", type: "color" },
        ],
      },
    ],
    dragAndResize: [
      {
        title: "Drag & Resize Styles",
        fields: [
          { key: "draggingBackgroundColor", type: "color" },
          { key: "resizeHandleColor", type: "color" },
          { key: "resizeHandleSelectedColor", type: "color" },
        ],
      },
    ],
    tooltip: [
      {
        title: "Tooltip Colors",
        fields: [
          { key: "tooltipBackgroundColor", type: "color" },
          { key: "tooltipTextColor", type: "color" },
        ],
      },
      {
        title: "Tooltip Layout",
        fields: [
          { key: "tooltipBorderRadius", type: "text" },
          { key: "tooltipPadding", type: "text" },
          { key: "tooltipFontSize", type: "text" },
          { key: "tooltipShadow", type: "text" },
        ],
      },
    ],
    scrollbar: [
      {
        title: "Scrollbar Styles",
        fields: [
          { key: "scrollbarBgColor", type: "color" },
          { key: "scrollbarThumbColor", type: "color" },
          { key: "scrollbarWidth", type: "text" },
        ],
      },
    ],
    datepicker: [
      {
        title: "Datepicker Styles",
        fields: [
          { key: "datepickerWeekdayColor", type: "color" },
          { key: "datepickerOtherMonthColor", type: "color" },
        ],
      },
    ],
    dropdown: [
      {
        title: "Dropdown Styles",
        fields: [{ key: "dropdownGroupLabelColor", type: "color" }],
      },
    ],
    filter: [
      {
        title: "Filter Button Disabled",
        fields: [
          { key: "filterButtonDisabledBackgroundColor", type: "color" },
          { key: "filterButtonDisabledTextColor", type: "color" },
        ],
      },
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

  // Filter sections based on search query
  const filterSections = (sections: Record<string, SectionConfig[]>) => {
    if (!searchQuery) return sections;

    const filtered: Record<string, SectionConfig[]> = {};

    Object.entries(sections).forEach(([sectionKey, configs]) => {
      const filteredConfigs: SectionConfig[] = [];

      configs.forEach((config) => {
        const matchingFields = config.fields.filter((field) => {
          const label = shortenLabel(field.key.toString()).toLowerCase();
          const keyName = field.key.toString().toLowerCase();
          const configTitle = config.title.toLowerCase();
          const query = searchQuery.toLowerCase();

          return label.includes(query) || keyName.includes(query) || configTitle.includes(query);
        });

        if (matchingFields.length > 0) {
          filteredConfigs.push({
            title: config.title,
            fields: matchingFields,
          });
        }
      });

      if (filteredConfigs.length > 0) {
        filtered[sectionKey] = filteredConfigs;
      }
    });

    return filtered;
  };

  const filteredSections = filterSections(sectionConfigs);

  // Count total filtered variables
  const totalMatches = Object.values(filteredSections).reduce(
    (acc, configs) => acc + configs.reduce((sum, config) => sum + config.fields.length, 0),
    0
  );

  // Section metadata (titles and icons)
  const sectionMetadata: Record<string, { title: string; icon: any }> = {
    tableStructure: { title: "Table Structure", icon: faTable },
    rowsAndCells: { title: "Rows & Cells", icon: faTableCells },
    columns: { title: "Columns", icon: faTableColumns },
    headers: { title: "Headers", icon: faTableList },
    footer: { title: "Footer", icon: faRectangleList },
    selectionAndEditing: { title: "Selection & Editing", icon: faPenToSquare },
    buttons: { title: "Buttons", icon: faHandPointer },
    checkboxes: { title: "Checkboxes", icon: faSquareCheck },
    dragAndResize: { title: "Drag & Resize", icon: faArrowsUpDownLeftRight },
    tooltip: { title: "Tooltip", icon: faComment },
    scrollbar: { title: "Scrollbar", icon: faEllipsisVertical },
    datepicker: { title: "Datepicker", icon: faCalendar },
    dropdown: { title: "Dropdown", icon: faCaretDown },
    filter: { title: "Filter", icon: faFilter },
  };

  // Render a single section config
  const renderSectionConfig = (config: SectionConfig, sectionKey: string) => {
    // Check if any fields in this config have been modified
    const hasModifications = config.fields.some((field) => userChanges[field.key] !== undefined);

    return (
      <div key={config.title} className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{config.title}</h4>
          {hasModifications && (
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
              Modified
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          {config.fields.map((field, index) => {
            if (field.type === "color") {
              return (
                <ThemeColorPicker
                  key={index}
                  label={shortenLabel(field.key.toString())}
                  value={theme[field.key].toString()}
                  onChange={handleColorChange(field.key)}
                />
              );
            } else {
              return (
                <ThemeInput
                  key={index}
                  label={shortenLabel(field.key.toString())}
                  value={theme[field.key]}
                  onChange={(value) => handleValueChange(field.key)(value)}
                />
              );
            }
          })}
        </div>
      </div>
    );
  };

  // Create sidebar content
  const sidebarContent = (
    <div className="px-1">
      {/* Search Input */}
      <div className="mb-4">
        <Input
          placeholder="Search theme variables..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          allowClear
          prefix={<FontAwesomeIcon icon={faSearch} className="text-gray-400" />}
          className="w-full"
        />
        <div className="flex items-center justify-between mt-2">
          {searchQuery ? (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Found {totalMatches} matching variable{totalMatches !== 1 ? "s" : ""}
            </div>
          ) : (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {Object.keys(theme).length} total variables
            </div>
          )}
          {!searchQuery && (
            <Button
              type="text"
              size="small"
              onClick={toggleAllSections}
              className="text-xs"
              icon={<FontAwesomeIcon icon={allExpanded ? faChevronUp : faChevronDown} />}
            >
              {allExpanded ? "Collapse All" : "Expand All"}
            </Button>
          )}
        </div>
      </div>

      {/* Render all sections dynamically */}
      {Object.entries(sectionMetadata).map(([sectionKey, metadata]) => {
        const configs = filteredSections[sectionKey];

        // Don't render section if no configs match search
        if (searchQuery && (!configs || configs.length === 0)) {
          return null;
        }

        return (
          <ExpandableSection
            key={sectionKey}
            title={metadata.title}
            icon={metadata.icon}
            expanded={
              expandedSections[sectionKey as keyof typeof expandedSections] || searchQuery !== ""
            }
            onToggle={() => toggleSection(sectionKey)}
          >
            {configs && configs.length > 0 ? (
              configs.map((config) => renderSectionConfig(config, sectionKey))
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
                No matching variables found
              </div>
            )}
          </ExpandableSection>
        );
      })}
    </div>
  );

  // Count modifications
  const modificationCount = Object.keys(userChanges).length;

  // Create footer content
  const footerContent = (
    <div className="space-y-3">
      {modificationCount > 0 && (
        <div className="text-sm text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <span className="font-semibold text-blue-700 dark:text-blue-300">
            {modificationCount}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {" "}
            variable{modificationCount !== 1 ? "s" : ""} modified
          </span>
        </div>
      )}

      <Button
        onClick={resetTheme}
        className="w-full"
        icon={<FontAwesomeIcon icon={faRotateLeft} />}
        disabled={modificationCount === 0}
      >
        Reset to Default
      </Button>

      <Button
        className="w-full"
        type="primary"
        onClick={downloadCSS}
        icon={<FontAwesomeIcon icon={faDownload} />}
      >
        {UI_STRINGS.common.download} {UI_STRINGS.common.theme}
      </Button>
    </div>
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
    return (
      <PageWrapper>
        <MobileUnsupportedPage featureName="Theme Builder" />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageLayout sidebar={<ConfigurableSidebar config={sidebarConfig} />}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {UI_STRINGS.themeBuilder.sections.livePreview}
        </h1>
        <SalesExample
          onGridReady={() => {
            setThemeToDocument(theme);
          }}
        />
      </PageLayout>
    </PageWrapper>
  );
}

function SalesExample({ onGridReady }: { onGridReady?: () => void }) {
  const [data, setData] = useState<(Row & { closeDate: string; category: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });
  const howManyRowsCanFit = containerHeight ? Math.floor(containerHeight / ROW_HEIGHT) : 10;

  // Fetch sales data from API and process it
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Use relative path for local development, full URL for production/sandboxes
        const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
        const baseUrl = isLocal ? "" : "https://www.simple-table.com";
        const response = await fetch(`${baseUrl}/api/data/sales?rowCount=50`);
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const salesData = await response.json();
        const processedData = processData(salesData);
        setData(processedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            [accessor]: newValue,
          };
        }
        return item;
      })
    );
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: containerHeight ? `${containerHeight}px` : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading sales data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={SALES_HEADERS}
      editColumns
      onCellEdit={handleCellEdit}
      onGridReady={onGridReady}
      rowIdAccessor="id"
      rows={data}
      rowHeight={ROW_HEIGHT}
      rowsPerPage={howManyRowsCanFit}
      selectableCells
      shouldPaginate
      theme={"custom"}
    />
  );
}
