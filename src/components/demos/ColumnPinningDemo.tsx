import { SimpleTable, HeaderObject } from "simple-table-core";

// Define all headers with pinned status
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, pinned: "left" },
  { accessor: "name", label: "Name", width: 180, pinned: "left" },
  { accessor: "email", label: "Email", width: 220 },
  { accessor: "role", label: "Role", width: 150 },
  { accessor: "department", label: "Department", width: 150 },
  { accessor: "location", label: "Location", width: 150 },
  { accessor: "joinDate", label: "Join Date", width: 120 },
  { accessor: "salary", label: "Salary", width: 120, align: "right" },
  { accessor: "manager", label: "Manager", width: 180 },
  { accessor: "status", label: "Status", width: 120 },
  { accessor: "projects", label: "Projects", width: 120, align: "right", pinned: "right" },
];

// Sample data with more columns to demonstrate horizontal scrolling
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
      joinDate: "2020-05-15",
      salary: 85000,
      manager: "Jane Smith",
      status: "Active",
      projects: 4,
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
      joinDate: "2019-02-20",
      salary: 92000,
      manager: "Robert Johnson",
      status: "Active",
      projects: 6,
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
      joinDate: "2018-11-10",
      salary: 120000,
      manager: "Michael Chen",
      status: "Active",
      projects: 8,
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
      joinDate: "2021-03-05",
      salary: 78000,
      manager: "John Doe",
      status: "Active",
      projects: 3,
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
      joinDate: "2020-08-12",
      salary: 82000,
      manager: "Lisa Park",
      status: "Active",
      projects: 5,
    },
  },
];

const ColumnPinningDemo = () => {
  return <SimpleTable defaultHeaders={headers} rows={data} />;
};

export default ColumnPinningDemo;
