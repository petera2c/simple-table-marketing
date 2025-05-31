import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with filterable property
const headers: HeaderObject[] = [
  {
    accessor: "id",
    label: "ID",
    width: 80,
    type: "number",
    isSortable: true,
    filterable: true,
  },
  {
    accessor: "name",
    label: "Employee Name",
    width: "1fr",
    minWidth: 150,
    type: "string",
    isSortable: true,
    filterable: true,
  },
  {
    accessor: "department",
    label: "Department",
    width: "1fr",
    minWidth: 120,
    type: "enum",
    isSortable: true,
    filterable: true,
    enumOptions: [
      { label: "Engineering", value: "Engineering" },
      { label: "Design", value: "Design" },
      { label: "Marketing", value: "Marketing" },
      { label: "Sales", value: "Sales" },
      { label: "HR", value: "HR" },
    ],
  },
  {
    accessor: "role",
    label: "Role",
    width: 140,
    type: "string",
    isSortable: true,
    filterable: true,
  },
  {
    accessor: "salary",
    label: "Salary",
    width: 120,
    align: "right",
    type: "number",
    isSortable: true,
    filterable: true,
    cellRenderer: ({ row }) => {
      const salary = row.salary as number;
      return `$${salary.toLocaleString()}`;
    },
  },
  {
    accessor: "startDate",
    label: "Start Date",
    width: 130,
    type: "date",
    isSortable: true,
    filterable: true,
  },
  {
    accessor: "isActive",
    label: "Active",
    width: 100,
    align: "center",
    type: "boolean",
    isSortable: true,
    filterable: true,
  },
];

// Sample data with more variety for filtering
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    role: "Senior Developer",
    salary: 95000,
    startDate: "2020-01-15",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Design",
    role: "UX Designer",
    salary: 78000,
    startDate: "2021-03-22",
    isActive: true,
  },
  {
    id: 3,
    name: "Bob Johnson",
    department: "Engineering",
    role: "Engineering Manager",
    salary: 125000,
    startDate: "2019-05-10",
    isActive: true,
  },
  {
    id: 4,
    name: "Alice Williams",
    department: "Marketing",
    role: "Marketing Specialist",
    salary: 65000,
    startDate: "2022-01-10",
    isActive: false,
  },
  {
    id: 5,
    name: "Charlie Brown",
    department: "Engineering",
    role: "DevOps Engineer",
    salary: 88000,
    startDate: "2020-08-17",
    isActive: true,
  },
  {
    id: 6,
    name: "David Lee",
    department: "Sales",
    role: "Sales Representative",
    salary: 72000,
    startDate: "2021-07-22",
    isActive: true,
  },
  {
    id: 7,
    name: "Eve Green",
    department: "HR",
    role: "HR Manager",
    salary: 85000,
    startDate: "2019-04-18",
    isActive: true,
  },
  {
    id: 8,
    name: "Frank White",
    department: "Design",
    role: "Product Designer",
    salary: 82000,
    startDate: "2021-11-01",
    isActive: false,
  },
  {
    id: 9,
    name: "Grace Black",
    department: "Marketing",
    role: "Content Manager",
    salary: 68000,
    startDate: "2022-02-15",
    isActive: true,
  },
  {
    id: 10,
    name: "Henry Wilson",
    department: "Sales",
    role: "Sales Manager",
    salary: 98000,
    startDate: "2020-06-30",
    isActive: true,
  },
];

const ColumnFilteringDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rowIdAccessor="id"
      rows={EMPLOYEE_DATA}
      height={height}
      theme={theme}
    />
  );
};

export default ColumnFilteringDemo;
