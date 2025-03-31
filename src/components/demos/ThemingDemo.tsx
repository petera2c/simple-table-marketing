import React, { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";

// Define some theme presets
const themePresets: Record<string, Theme> = {
  default: {
    table: {
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
    },
    header: {
      backgroundColor: "#f9fafb",
      borderColor: "#e5e7eb",
      textColor: "#111827",
      fontWeight: "600",
    },
    row: {
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
      textColor: "#374151",
      hoverBackgroundColor: "#f3f4f6",
      selectedBackgroundColor: "#eff6ff",
      alternateBackgroundColor: "#f9fafb",
    },
  },
  dark: {
    table: {
      backgroundColor: "#1f2937",
      borderColor: "#374151",
    },
    header: {
      backgroundColor: "#111827",
      borderColor: "#374151",
      textColor: "#f9fafb",
      fontWeight: "600",
    },
    row: {
      backgroundColor: "#1f2937",
      borderColor: "#374151",
      textColor: "#e5e7eb",
      hoverBackgroundColor: "#374151",
      selectedBackgroundColor: "#2d3748",
      alternateBackgroundColor: "#1a2234",
    },
  },
  purple: {
    table: {
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
    },
    header: {
      backgroundColor: "#8b5cf6",
      borderColor: "#7c3aed",
      textColor: "#ffffff",
      fontWeight: "600",
    },
    row: {
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
      textColor: "#4b5563",
      hoverBackgroundColor: "#f5f3ff",
      selectedBackgroundColor: "#ede9fe",
      alternateBackgroundColor: "#faf5ff",
    },
  },
  green: {
    table: {
      backgroundColor: "#f0fdf4",
      borderColor: "#d1fae5",
    },
    header: {
      backgroundColor: "#10b981",
      borderColor: "#059669",
      textColor: "#ffffff",
      fontWeight: "600",
    },
    row: {
      backgroundColor: "#f0fdf4",
      borderColor: "#d1fae5",
      textColor: "#064e3b",
      hoverBackgroundColor: "#ecfdf5",
      selectedBackgroundColor: "#d1fae5",
      alternateBackgroundColor: "#f0fdf4",
    },
  },
};

const ThemingDemo = () => {
  // State for current theme
  const [currentTheme, setCurrentTheme] = useState<string>("default");

  // Sample data
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", department: "Engineering", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", department: "Design", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", department: "Marketing", status: "Inactive" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", department: "Engineering", status: "Active" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", department: "Sales", status: "Active" },
  ];

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80 },
    { accessor: "name", label: "Name", width: 180 },
    { accessor: "email", label: "Email", width: 220 },
    { accessor: "department", label: "Department", width: 150 },
    { accessor: "status", label: "Status", width: 120 },
  ];

  // Map data to rows
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Theming Demo</h2>
        <p className="text-gray-700 mb-4">Customize the appearance of SimpleTable with different themes.</p>

        {/* Theme selector */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.keys(themePresets).map((themeName) => (
            <button
              key={themeName}
              onClick={() => setCurrentTheme(themeName)}
              className={`px-4 py-2 rounded font-medium ${
                currentTheme === themeName ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </button>
          ))}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable
            defaultHeaders={headers}
            rows={rows}
            theme={themePresets[currentTheme]}
            useAlternatingRowColors={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemingDemo;
