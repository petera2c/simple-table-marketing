import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define all headers with pinned status
const headers: HeaderObject[] = [
  { accessor: "name", label: "Name", width: 132, pinned: "left", type: "string" },
  { accessor: "email", label: "Email", width: 220, type: "string" },
  { accessor: "role", label: "Role", width: 150, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
  { accessor: "location", label: "Location", width: 150, type: "string" },
  { accessor: "joinDate", label: "Join Date", width: 120, type: "date" },
  { accessor: "salary", label: "Salary", width: 120, align: "right", type: "number" },
  { accessor: "manager", label: "Manager", width: 180, type: "string" },
  { accessor: "status", label: "Status", width: 120, type: "string" },
  {
    accessor: "projects",
    label: "Projects",
    width: 60,
    align: "right",
    pinned: "right",
    type: "number",
  },
];

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Senior Developer",
    department: "Engineering",
    location: "San Francisco",
    joinDate: "2018-06-15",
    salary: 120000,
    manager: "Sarah Chen",
    status: "Active",
    projects: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@company.com",
    role: "Lead Designer",
    department: "Design",
    location: "New York",
    joinDate: "2019-02-20",
    salary: 115000,
    manager: "Michael Brown",
    status: "Active",
    projects: 3,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@company.com",
    role: "Engineering Manager",
    department: "Engineering",
    location: "Seattle",
    joinDate: "2017-05-10",
    salary: 150000,
    manager: "Lisa Wong",
    status: "Active",
    projects: 8,
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@company.com",
    role: "Junior Developer",
    department: "Engineering",
    location: "Remote",
    joinDate: "2022-09-01",
    salary: 85000,
    manager: "John Doe",
    status: "Active",
    projects: 2,
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@company.com",
    role: "DevOps Engineer",
    department: "Engineering",
    location: "Austin",
    joinDate: "2020-03-15",
    salary: 110000,
    manager: "Bob Johnson",
    status: "Active",
    projects: 4,
  },
  {
    id: 6,
    name: "David Lee",
    email: "david.lee@company.com",
    role: "QA Lead",
    department: "Quality Assurance",
    location: "Boston",
    joinDate: "2019-07-22",
    salary: 105000,
    manager: "Emma Davis",
    status: "Active",
    projects: 6,
  },
  {
    id: 7,
    name: "Eve Green",
    email: "eve.green@company.com",
    role: "Product Manager",
    department: "Product",
    location: "Chicago",
    joinDate: "2021-04-18",
    salary: 130000,
    manager: "Tom Wilson",
    status: "Active",
    projects: 4,
  },
  {
    id: 8,
    name: "Frank White",
    email: "frank.white@company.com",
    role: "Sales Director",
    department: "Sales",
    location: "Miami",
    joinDate: "2018-01-01",
    salary: 140000,
    manager: "Rachel Martinez",
    status: "Active",
    projects: 7,
  },
  {
    id: 9,
    name: "Grace Black",
    email: "grace.black@company.com",
    role: "HR Director",
    department: "Human Resources",
    location: "Denver",
    joinDate: "2018-01-01",
    salary: 135000,
    manager: "CEO",
    status: "Active",
    projects: 3,
  },
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const ColumnPinningDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      columnResizing
      defaultHeaders={headers}
      height={height}
      rows={rows}
      theme={theme}
    />
  );
};

export default ColumnPinningDemo;
