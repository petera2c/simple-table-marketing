"use client";
import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "email", label: "Email", width: 220, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
  { accessor: "status", label: "Status", width: 120, type: "string" },
];

// Sample data
const data = [
  {
    rowMeta: { rowId: 1, isExpanded: false },
    rowData: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 2, isExpanded: false },
    rowData: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 3, isExpanded: false },
    rowData: {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      department: "Marketing",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 4, isExpanded: false },
    rowData: {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 5, isExpanded: false },
    rowData: {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      department: "Sales",
      status: "Active",
    },
  },
];

const THEME_OPTIONS: Theme[] = [
  "light",
  "dark",
  "90s",
  "bubblegum",
  "desert",
  "forest",
  "high-contrast",
  "ocean",
  "pastel",
  "solarized-dark",
  "solarized-light",
  "vibrant",
];

const ThemesDemo = () => {
  // State for current theme
  const [currentTheme, setCurrentTheme] = useState<Theme>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {THEME_OPTIONS.map((theme, index) => {
          const { backgroundColor, color } = getThemeColor(theme);
          return (
            <button
              key={index}
              onClick={() => setCurrentTheme(theme)}
              className={`cursor-pointer px-4 py-2 rounded-md bg-gray-100 transition-colors`}
              style={{ backgroundColor, color }}
            >
              {theme}
            </button>
          );
        })}
      </div>
      <SimpleTable defaultHeaders={headers} rows={data} theme={currentTheme} />
    </div>
  );
};

// Function to get theme color
const getThemeColor = (theme: Theme): { backgroundColor: string; color: string } => {
  switch (theme) {
    case "dark":
      return { backgroundColor: "#333", color: "white" };
    case "desert":
      return { backgroundColor: "#C19A6B", color: "white" };
    case "forest":
      return { backgroundColor: "#228B22", color: "white" };
    case "high-contrast":
      return { backgroundColor: "#000", color: "white" };
    case "light":
      return { backgroundColor: "#f0f0f0", color: "black" };
    case "ocean":
      return { backgroundColor: "#1E90FF", color: "white" };
    case "pastel":
      return { backgroundColor: "#FFDAB9", color: "black" };
    case "solarized-dark":
      return { backgroundColor: "#002b36", color: "white" };
    case "solarized-light":
      return { backgroundColor: "#fdf6e3", color: "black" };
    case "vibrant":
      return { backgroundColor: "#FF4500", color: "white" };
    case "bubblegum":
      return { backgroundColor: "#FFC0CB", color: "black" };
    case "90s":
      return { backgroundColor: "#87CEEB", color: "black" };
    default:
      return { backgroundColor: "#ccc", color: "black" };
  }
};

export default ThemesDemo;
