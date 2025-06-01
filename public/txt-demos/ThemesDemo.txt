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
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Design",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    department: "Management",
    status: "Active",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    department: "Engineering",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 6,
    name: "David Lee",
    email: "david@example.com",
    department: "Quality Assurance",
    status: "Active",
  },
  {
    id: 7,
    name: "Eve Green",
    email: "eve@example.com",
    department: "Product Management",
    status: "Active",
  },
  {
    id: 8,
    name: "Frank White",
    email: "frank@example.com",
    department: "Sales",
    status: "Active",
  },
  {
    id: 9,
    name: "Grace Black",
    email: "grace@example.com",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: 10,
    name: "Henry Blue",
    email: "henry@example.com",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 11,
    name: "Ivy Red",
    email: "ivy@example.com",
    department: "Design",
    status: "Active",
  },
  {
    id: 12,
    name: "Jack Silver",
    email: "jack@example.com",
    department: "Engineering",
    status: "Active",
  },
];

const ThemesDemo = ({ height = "400px", theme }: { height?: string; theme: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rowIdAccessor="id"
      rows={EMPLOYEE_DATA}
      theme={theme}
    />
  );
};

export default ThemesDemo;
