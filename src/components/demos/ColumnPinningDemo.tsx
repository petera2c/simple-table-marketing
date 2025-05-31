import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    role: "Software Engineer",
    department: "Engineering",
    salary: 85000,
    location: "San Francisco",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    role: "Product Manager",
    department: "Product",
    salary: 95000,
    location: "New York",
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 35,
    role: "Designer",
    department: "Design",
    salary: 75000,
    location: "Austin",
  },
  {
    id: 4,
    name: "Sarah Williams",
    age: 28,
    role: "Data Scientist",
    department: "Engineering",
    salary: 90000,
    location: "Seattle",
  },
  {
    id: 5,
    name: "David Brown",
    age: 32,
    role: "Marketing Manager",
    department: "Marketing",
    salary: 80000,
    location: "Boston",
  },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, pinned: "left", type: "number" },
  { accessor: "name", label: "Name", width: 150, pinned: "left", type: "string" },
  { accessor: "age", label: "Age", width: 80, type: "number" },
  { accessor: "role", label: "Role", width: 150, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
  { accessor: "salary", label: "Salary", width: 120, type: "number" },
  { accessor: "location", label: "Location", width: 120, pinned: "right", type: "string" },
];

const ColumnPinningDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      height={height}
      theme={theme}
    />
  );
};

export default ColumnPinningDemo;
