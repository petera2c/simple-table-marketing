import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Define all possible headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60 },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", hide: true },
  { accessor: "role", label: "Role", width: 150 },
  { accessor: "department", label: "Department", width: 150 },
  { accessor: "location", label: "Location", width: 150 },
];

const data = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
      department: "Product",
      location: "New York",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      department: "Operations",
      location: "San Francisco",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Marketing",
      department: "Sales",
      location: "Chicago",
    },
  },
];

const ColumnVisibilityDemo = () => {
  return <SimpleTable defaultHeaders={headers} editColumns editColumnsInitOpen rows={data} />;
};

export default ColumnVisibilityDemo;
