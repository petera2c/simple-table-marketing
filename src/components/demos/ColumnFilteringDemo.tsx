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
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    role: "Product Manager",
    department: "Product",
    salary: 95000,
  },
  { id: 3, name: "Mike Johnson", age: 35, role: "Designer", department: "Design", salary: 75000 },
  {
    id: 4,
    name: "Sarah Williams",
    age: 28,
    role: "Data Scientist",
    department: "Engineering",
    salary: 90000,
  },
  {
    id: 5,
    name: "David Brown",
    age: 32,
    role: "Marketing Manager",
    department: "Marketing",
    salary: 80000,
  },
  {
    id: 6,
    name: "Lisa Chen",
    age: 29,
    role: "Software Engineer",
    department: "Engineering",
    salary: 87000,
  },
  {
    id: 7,
    name: "Alex Rodriguez",
    age: 31,
    role: "UX Designer",
    department: "Design",
    salary: 78000,
  },
  {
    id: 8,
    name: "Emily Davis",
    age: 27,
    role: "Product Manager",
    department: "Product",
    salary: 92000,
  },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 150, filterable: true, type: "string" },
  { accessor: "age", label: "Age", width: 80, filterable: true, type: "number" },
  { accessor: "role", label: "Role", width: 150, filterable: true, type: "string" },
  { accessor: "department", label: "Department", width: 130, filterable: true, type: "string" },
  {
    accessor: "salary",
    label: "Salary",
    width: 120,
    filterable: true,
    type: "number",
    cellRenderer: ({ row }) => {
      const salary = row.salary as number;
      return `$${salary.toLocaleString()}`;
    },
  },
];

const ColumnFilteringDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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

export default ColumnFilteringDemo;
