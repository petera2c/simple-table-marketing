// src/pages/ThemeBuilder.tsx
import React, { useState, useEffect } from "react";
import { Button, ColorPicker, Input } from "antd";
import type { Color } from "antd/es/color-picker";
import { SimpleTable } from "simple-table-core";

interface ThemeConfig {
  borderRadius: string;
  borderWidth: string;
  cellPadding: string;
  fontSize: string;
  fontWeightNormal: number;
  fontWeightBold: number;
  transitionDuration: string;
  transitionEase: string;
  opacityDisabled: number;
  spacingSmall: string;
  spacingMedium: string;
  spacingLarge: string;
  scrollbarBgColor: string;
  scrollbarThumbColor: string;
  borderColor: string;
  oddRowBackgroundColor: string;
  evenRowBackgroundColor: string;
  headerBackgroundColor: string;
  draggingBackgroundColor: string;
  selectedCellBackgroundColor: string;
  selectedFirstCellBackgroundColor: string;
  footerBackgroundColor: string;
  cellColor: string;
  cellOddRowColor: string;
  editCellShadow: string;
  selectedCellColor: string;
  selectedFirstCellColor: string;
  resizeHandleColor: string;
  separatorBorderColor: string;
  lastGroupRowSeparatorBorderColor: string;
  selectedBorderTopColor: string;
  selectedBorderBottomColor: string;
  selectedBorderLeftColor: string;
  selectedBorderRightColor: string;
  checkboxCheckedBackgroundColor: string;
  checkboxCheckedBorderColor: string;
  columnEditorBackgroundColor: string;
  columnEditorPopoutBackgroundColor: string;
  buttonHoverBackgroundColor: string;
  buttonActiveBackgroundColor: string;
  fontFamily: string;
  editableCellFocusBorderColor: string;
}

const defaultTheme: ThemeConfig = {
  borderRadius: "4px",
  borderWidth: "1px",
  cellPadding: "8px",
  fontSize: "0.875rem",
  fontWeightNormal: 400,
  fontWeightBold: 600,
  transitionDuration: "0.2s",
  transitionEase: "ease",
  opacityDisabled: 0.5,
  spacingSmall: "4px",
  spacingMedium: "8px",
  spacingLarge: "16px",
  scrollbarBgColor: "#f8fafc",
  scrollbarThumbColor: "#cbd5e1",
  borderColor: "#d1d5db",
  oddRowBackgroundColor: "#ffffff",
  evenRowBackgroundColor: "#ffffff",
  headerBackgroundColor: "#ffffff",
  draggingBackgroundColor: "#e5e7eb",
  selectedCellBackgroundColor: "#bfdbfe",
  selectedFirstCellBackgroundColor: "#bfdbfe",
  footerBackgroundColor: "#ffffff",
  cellColor: "#1f2937",
  cellOddRowColor: "#374151",
  editCellShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px -1px rgba(0, 0, 0, 0.05)",
  selectedCellColor: "#111827",
  selectedFirstCellColor: "#111827",
  resizeHandleColor: "#93c5fd",
  separatorBorderColor: "#f1f5f9",
  lastGroupRowSeparatorBorderColor: "#d1d5db",
  selectedBorderTopColor: "#2563eb",
  selectedBorderBottomColor: "#2563eb",
  selectedBorderLeftColor: "#2563eb",
  selectedBorderRightColor: "#2563eb",
  checkboxCheckedBackgroundColor: "#2563eb",
  checkboxCheckedBorderColor: "#2563eb",
  columnEditorBackgroundColor: "#ffffff",
  columnEditorPopoutBackgroundColor: "#ffffff",
  buttonHoverBackgroundColor: "#e5e7eb",
  buttonActiveBackgroundColor: "#1e3a8a",
  fontFamily: '"Roboto", sans-serif',
  editableCellFocusBorderColor: "#2563eb",
};

// Sample data for the table preview
const sampleHeaders: any[] = [
  { label: "Name", accessor: "name", width: 200, isEditable: true },
  { label: "Age", accessor: "age", width: 100, isEditable: true, type: "number" },
  { label: "Email", accessor: "email", width: 250, isEditable: true },
];

const sampleRows: any[] = [
  { rowMeta: { rowId: "1" }, rowData: { name: "John Doe", age: 30, email: "john@example.com" } },
  { rowMeta: { rowId: "2" }, rowData: { name: "Jane Smith", age: 25, email: "jane@example.com" } },
  { rowMeta: { rowId: "3" }, rowData: { name: "Bob Johnson", age: 45, email: "bob@example.com" } },
];

const ThemeBuilder: React.FC = () => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  // Apply theme dynamically using a style tag
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = generateCSS();
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
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
.simple-table-root {
  --st-border-radius: ${theme.borderRadius};
  --st-border-width: ${theme.borderWidth};
  --st-cell-padding: ${theme.cellPadding};
  --st-font-size: ${theme.fontSize};
  --st-font-weight-normal: ${theme.fontWeightNormal};
  --st-font-weight-bold: ${theme.fontWeightBold};
  --st-transition-duration: ${theme.transitionDuration};
  --st-transition-ease: ${theme.transitionEase};
  --st-opacity-disabled: ${theme.opacityDisabled};
  --st-spacing-small: ${theme.spacingSmall};
  --st-spacing-medium: ${theme.spacingMedium};
  --st-spacing-large: ${theme.spacingLarge};
  --st-scrollbar-bg-color: ${theme.scrollbarBgColor};
  --st-scrollbar-thumb-color: ${theme.scrollbarThumbColor};
  --st-border-color: ${theme.borderColor};
  --st-odd-row-background-color: ${theme.oddRowBackgroundColor};
  --st-even-row-background-color: ${theme.evenRowBackgroundColor};
  --st-header-background-color: ${theme.headerBackgroundColor};
  --st-dragging-background-color: ${theme.draggingBackgroundColor};
  --st-selected-cell-background-color: ${theme.selectedCellBackgroundColor};
  --st-selected-first-cell-background-color: ${theme.selectedFirstCellBackgroundColor};
  --st-footer-background-color: ${theme.footerBackgroundColor};
  --st-cell-color: ${theme.cellColor};
  --st-cell-odd-row-color: ${theme.cellOddRowColor};
  --st-edit-cell-shadow: ${theme.editCellShadow};
  --st-selected-cell-color: ${theme.selectedCellColor};
  --st-selected-first-cell-color: ${theme.selectedFirstCellColor};
  --st-resize-handle-color: ${theme.resizeHandleColor};
  --st-separator-border-color: ${theme.separatorBorderColor};
  --st-last-group-row-separator-border-color: ${theme.lastGroupRowSeparatorBorderColor};
  --st-selected-border-top-color: ${theme.selectedBorderTopColor};
  --st-selected-border-bottom-color: ${theme.selectedBorderBottomColor};
  --st-selected-border-left-color: ${theme.selectedBorderLeftColor};
  --st-selected-border-right-color: ${theme.selectedBorderRightColor};
  --st-checkbox-checked-background-color: ${theme.checkboxCheckedBackgroundColor};
  --st-checkbox-checked-border-color: ${theme.checkboxCheckedBorderColor};
  --st-column-editor-background-color: ${theme.columnEditorBackgroundColor};
  --st-column-editor-popout-background-color: ${theme.columnEditorPopoutBackgroundColor};
  --st-button-hover-background-color: ${theme.buttonHoverBackgroundColor};
  --st-button-active-background-color: ${theme.buttonActiveBackgroundColor};
  --st-font-family: ${theme.fontFamily};
  --st-editable-cell-focus-border-color: ${theme.editableCellFocusBorderColor};
}
    `.trim();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Theme Builder</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Controls Column */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Base Settings</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
            <Input value={theme.borderRadius} onChange={(e) => handleValueChange("borderRadius")(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Border Width</label>
            <Input value={theme.borderWidth} onChange={(e) => handleValueChange("borderWidth")(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cell Padding</label>
            <Input value={theme.cellPadding} onChange={(e) => handleValueChange("cellPadding")(e.target.value)} />
          </div>
          {/* Add more base settings as needed */}

          <h2 className="text-xl font-semibold text-gray-800 mt-8">Colors</h2>
          {Object.entries(theme).map(([key, value]) => {
            if (key.includes("Color") && !key.includes("Shadow")) {
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <ColorPicker value={value} onChange={handleColorChange(key as keyof ThemeConfig)} />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Preview Column */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Preview</h2>
          <div className="border rounded-lg p-4 bg-white">
            <SimpleTable
              defaultHeaders={sampleHeaders}
              rows={sampleRows}
              height="400px"
              shouldPaginate={false}
              columnResizing={true}
              draggable={true}
              editColumns={true}
              selectableCells={true}
            />
          </div>
        </div>

        {/* CSS Output Column */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Generated CSS</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto h-[80vh]">{generateCSS()}</pre>
          <Button type="primary" className="mt-4 w-full" onClick={() => navigator.clipboard.writeText(generateCSS())}>
            Copy CSS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeBuilder;
