import { useEffect } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";
import "./CustomTheme.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", width: 180, type: "string" },
  { accessor: "email", label: "Email", width: 220, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
  { accessor: "status", label: "Status", width: 120, type: "string" },
  { accessor: "number", label: "Number", width: 120, type: "number" },
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
      number: 1234567890,
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
      number: 1234567890,
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
      number: 1234567890,
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
      number: 1234567890,
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
      number: 1234567890,
    },
  },
];

const CustomThemeDemo = () => {
  // Add effect to apply/remove the custom CSS class when component mounts/unmounts
  useEffect(() => {
    // Add the custom-theme-enabled class to root when component mounts
    document.documentElement.classList.add("custom-theme-enabled");

    // Clean up function to remove the class when component unmounts
    return () => {
      document.documentElement.classList.remove("custom-theme-enabled");
    };
  }, []);

  return (
    <div className="custom-theme-container">
      <SimpleTable
        columnResizing
        defaultHeaders={headers}
        rows={data}
        selectableCells
        selectableColumns
        theme="custom"
      />
    </div>
  );
};

export default CustomThemeDemo;
