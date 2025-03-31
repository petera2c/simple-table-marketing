import { SimpleTable, HeaderObject } from "simple-table-core";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    department: "Product",
    location: "New York",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Manager",
    department: "Operations",
    location: "San Francisco",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Developer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Marketing",
    department: "Sales",
    location: "Chicago",
  },
];

// Define all possible headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60 },
  { accessor: "name", label: "Name", width: 180 },
  { accessor: "email", label: "Email", width: 220, hide: true },
  { accessor: "role", label: "Role", width: 150 },
  { accessor: "department", label: "Department", width: 150 },
  { accessor: "location", label: "Location", width: 150 },
];

const ColumnVisibilityDemo = () => {
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return <SimpleTable defaultHeaders={headers} editColumns editColumnsInitOpen rows={rows} />;
};

export default ColumnVisibilityDemo;
