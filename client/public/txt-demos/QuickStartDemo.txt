"use client";

import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

const QuickStartDemo = () => {
  // Sample data for a quick start demo
  const data = [
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
  ];

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80, isSortable: true, type: "number" },
    {
      accessor: "name",
      label: "Name",
      minWidth: 80,
      width: "1fr",
      isSortable: true,
      type: "string",
    },
    { accessor: "age", label: "Age", width: 100, isSortable: true, type: "number" },
    { accessor: "role", label: "Role", width: 150, isSortable: true, type: "string" },
    { accessor: "department", label: "Department", width: 150, isSortable: true, type: "string" },
    { accessor: "startDate", label: "Start Date", width: 150, isSortable: true, type: "date" },
  ];

  // Map data to rows format expected by SimpleTable
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <SimpleTable defaultHeaders={headers} editColumns rows={rows} rowHeight={48} selectableCells />
  );
};

export default QuickStartDemo;
