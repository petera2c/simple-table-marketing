import { useState } from "react";
import { SimpleTable, HeaderObject, Row } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", minWidth: 150, width: "1fr", type: "string" },
  { accessor: "age", label: "Age", width: 100, type: "string" },
  { accessor: "role", label: "Role", minWidth: 180, width: "1fr", type: "string" },
  { accessor: "department", label: "Department", minWidth: 180, width: "1fr", type: "string" },
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
  {
    id: 10,
    name: "Henry Davis",
    age: 35,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2020-01-01",
  },
  {
    id: 11,
    name: "Ivy Evans",
    age: 30,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2020-01-01",
  },
  {
    id: 12,
    name: "Jack White",
    age: 32,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2020-01-01",
  },
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const RowHeightDemo = ({ height = "400px" }: { height?: string }) => {
  return <SimpleTable defaultHeaders={headers} height={height} rows={rows} rowHeight={32} />;
};

export default RowHeightDemo;
