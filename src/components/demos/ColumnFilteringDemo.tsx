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
      { label: "Editorial", value: "Editorial" },
      { label: "Production", value: "Production" },
      { label: "Marketing", value: "Marketing" },
      { label: "Sales", value: "Sales" },
      { label: "Operations", value: "Operations" },
      { label: "Human Resources", value: "Human Resources" },
      { label: "Finance", value: "Finance" },
      { label: "Legal", value: "Legal" },
      { label: "IT Support", value: "IT Support" },
      { label: "Customer Service", value: "Customer Service" },
      { label: "Research & Development", value: "Research & Development" },
      { label: "Quality Assurance", value: "Quality Assurance" },
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
    name: "Bianca Rossi",
    department: "Editorial",
    role: "Senior Editor",
    salary: 82000,
    startDate: "2020-02-14",
    isActive: true,
  },
  {
    id: 2,
    name: "Axel Chen",
    department: "Production",
    role: "Art Director",
    salary: 75000,
    startDate: "2021-06-18",
    isActive: true,
  },
  {
    id: 3,
    name: "Emilia Nakamura",
    department: "Editorial",
    role: "Managing Editor",
    salary: 95000,
    startDate: "2019-04-22",
    isActive: true,
  },
  {
    id: 4,
    name: "Luca Martinez",
    department: "Marketing",
    role: "Content Strategist",
    salary: 68000,
    startDate: "2022-01-12",
    isActive: false,
  },
  {
    id: 5,
    name: "Delia Kumar",
    department: "Production",
    role: "Layout Designer",
    salary: 72000,
    startDate: "2020-09-07",
    isActive: true,
  },
  {
    id: 6,
    name: "Cian O'Sullivan",
    department: "Sales",
    role: "Sales Representative",
    salary: 65000,
    startDate: "2021-11-03",
    isActive: true,
  },
  {
    id: 7,
    name: "Amara Okafor",
    department: "Human Resources",
    role: "HR Manager",
    salary: 78000,
    startDate: "2019-08-15",
    isActive: true,
  },
  {
    id: 8,
    name: "Rowan Thompson",
    department: "Production",
    role: "Cover Designer",
    salary: 69000,
    startDate: "2021-12-20",
    isActive: false,
  },
  {
    id: 9,
    name: "Celeste Petrov",
    department: "Marketing",
    role: "PR Specialist",
    salary: 63000,
    startDate: "2022-03-08",
    isActive: true,
  },
  {
    id: 10,
    name: "Quinn Hassan",
    department: "Sales",
    role: "Sales Manager",
    salary: 89000,
    startDate: "2020-05-11",
    isActive: true,
  },
  {
    id: 11,
    name: "Isla Williams",
    department: "Editorial",
    role: "Copy Editor",
    salary: 58000,
    startDate: "2021-10-25",
    isActive: true,
  },
  {
    id: 12,
    name: "Dax Silva",
    department: "Finance",
    role: "Financial Analyst",
    salary: 64000,
    startDate: "2022-07-14",
    isActive: false,
  },
  {
    id: 13,
    name: "Maya Patel",
    department: "IT Support",
    role: "Systems Administrator",
    salary: 71000,
    startDate: "2021-03-15",
    isActive: true,
  },
  {
    id: 14,
    name: "Jordan Lee",
    department: "Quality Assurance",
    role: "QA Engineer",
    salary: 67000,
    startDate: "2020-11-08",
    isActive: true,
  },
];

const ColumnFilteringDemo = ({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) => {
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
