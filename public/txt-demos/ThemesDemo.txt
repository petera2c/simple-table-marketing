import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
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
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    role: "Developer",
    department: "Engineering",
    startDate: "2020-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    role: "Designer",
    department: "Design",
    startDate: "2020-01-01",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 45,
    role: "Manager",
    department: "Management",
    startDate: "2020-01-01",
  },
  {
    id: 4,
    name: "Alice Williams",
    age: 24,
    role: "Intern",
    department: "Internship",
    startDate: "2020-01-01",
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 37,
    role: "DevOps",
    department: "Engineering",
    startDate: "2020-01-01",
  },
  {
    id: 6,
    name: "David Lee",
    age: 31,
    role: "QA Engineer",
    department: "Quality Assurance",
    startDate: "2020-01-01",
  },
  {
    id: 7,
    name: "Eve Green",
    age: 29,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2020-01-01",
  },
  {
    id: 8,
    name: "Frank White",
    age: 33,
    role: "Sales Manager",
    department: "Sales",
    startDate: "2020-01-01",
  },
  {
    id: 9,
    name: "Grace Black",
    age: 27,
    role: "HR Manager",
    department: "Human Resources",
    startDate: "2020-01-01",
  },
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const ThemesDemo = ({ height = "400px" }: { height?: string }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col gap-4">
      <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <SimpleTable defaultHeaders={headers} height={height} rows={rows} theme={currentTheme} />
    </div>
  );
};

export default ThemesDemo;
