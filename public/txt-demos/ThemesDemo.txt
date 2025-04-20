"use client";
import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import { Select } from "antd";
import "simple-table-core/styles.css";
import ThemeSelector from "../ThemeSelector";

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

const ThemesDemo = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col gap-4">
      <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <SimpleTable defaultHeaders={headers} rows={data} theme={currentTheme} />
    </div>
  );
};

export default ThemesDemo;
