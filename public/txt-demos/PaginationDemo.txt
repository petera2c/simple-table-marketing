import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const ROWS_PER_PAGE = 7;
const HEADERS: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: "1fr", minWidth: 100, type: "string" },
  { accessor: "email", label: "Email", width: 200, type: "string" },
  { accessor: "role", label: "Role", width: 140, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
  { accessor: "status", label: "Status", width: 110, type: "string" },
];

const ROWS = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Senior Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Product Manager",
      department: "Product",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "UX Designer",
      department: "Design",
      status: "On Leave",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "DevOps Engineer",
      department: "Infrastructure",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      role: "Marketing Specialist",
      department: "Marketing",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 6 },
    rowData: {
      id: 6,
      name: "Diana White",
      email: "diana.white@example.com",
      role: "Data Scientist",
      department: "Analytics",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 7 },
    rowData: {
      id: 7,
      name: "Eve Green",
      email: "eve.green@example.com",
      role: "QA Engineer",
      department: "Engineering",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 8 },
    rowData: {
      id: 8,
      name: "Frank Black",
      email: "frank.black@example.com",
      role: "Sales Representative",
      department: "Sales",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 9 },
    rowData: {
      id: 9,
      name: "Grace Blue",
      email: "grace.blue@example.com",
      role: "Customer Support",
      department: "Support",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 10 },
    rowData: {
      id: 10,
      name: "Henry White",
      email: "henry.white@example.com",
      role: "Frontend Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 11 },
    rowData: {
      id: 11,
      name: "Isabella Martinez",
      email: "isabella.m@example.com",
      role: "Backend Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 12 },
    rowData: {
      id: 12,
      name: "Jack Wilson",
      email: "jack.wilson@example.com",
      role: "Product Designer",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 13 },
    rowData: {
      id: 13,
      name: "Kylie Brown",
      email: "kylie.brown@example.com",
      role: "Content Writer",
      department: "Marketing",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 14 },
    rowData: {
      id: 14,
      name: "Liam Johnson",
      email: "liam.j@example.com",
      role: "IT Support",
      department: "IT",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 15 },
    rowData: {
      id: 15,
      name: "Mia Thompson",
      email: "mia.t@example.com",
      role: "Accountant",
      department: "Finance",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 16 },
    rowData: {
      id: 16,
      name: "Nathan Clark",
      email: "nathan.c@example.com",
      role: "HR Specialist",
      department: "Human Resources",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 17 },
    rowData: {
      id: 17,
      name: "Olivia Davis",
      email: "olivia.d@example.com",
      role: "Social Media Manager",
      department: "Marketing",
      status: "On Leave",
    },
  },
  {
    rowMeta: { rowId: 18 },
    rowData: {
      id: 18,
      name: "Peter Zhang",
      email: "peter.z@example.com",
      role: "Mobile Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 19 },
    rowData: {
      id: 19,
      name: "Quinn Roberts",
      email: "quinn.r@example.com",
      role: "Project Manager",
      department: "Product",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 20 },
    rowData: {
      id: 20,
      name: "Ryan Cooper",
      email: "ryan.c@example.com",
      role: "Systems Analyst",
      department: "IT",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 21 },
    rowData: {
      id: 21,
      name: "Sophia Lee",
      email: "sophia.l@example.com",
      role: "UX Researcher",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 22 },
    rowData: {
      id: 22,
      name: "Thomas Garcia",
      email: "thomas.g@example.com",
      role: "Database Administrator",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 23 },
    rowData: {
      id: 23,
      name: "Uma Patel",
      email: "uma.p@example.com",
      role: "Legal Counsel",
      department: "Legal",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 24 },
    rowData: {
      id: 24,
      name: "Victor Anderson",
      email: "victor.a@example.com",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 25 },
    rowData: {
      id: 25,
      name: "Wendy Martinez",
      email: "wendy.m@example.com",
      role: "Customer Success",
      department: "Support",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 26 },
    rowData: {
      id: 26,
      name: "Xavier Johnson",
      email: "xavier.j@example.com",
      role: "Security Engineer",
      department: "IT",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 27 },
    rowData: {
      id: 27,
      name: "Yasmine Ali",
      email: "yasmine.a@example.com",
      role: "Data Analyst",
      department: "Analytics",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 28 },
    rowData: {
      id: 28,
      name: "Zachary Miller",
      email: "zachary.m@example.com",
      role: "Frontend Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 29 },
    rowData: {
      id: 29,
      name: "Abigail Wilson",
      email: "abigail.w@example.com",
      role: "Backend Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 30 },
    rowData: {
      id: 30,
      name: "Benjamin Taylor",
      email: "benjamin.t@example.com",
      role: "DevOps Engineer",
      department: "Infrastructure",
      status: "On Leave",
    },
  },
  {
    rowMeta: { rowId: 31 },
    rowData: {
      id: 31,
      name: "Chloe Rodriguez",
      email: "chloe.r@example.com",
      role: "Graphic Designer",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 32 },
    rowData: {
      id: 32,
      name: "Daniel Kim",
      email: "daniel.k@example.com",
      role: "Product Manager",
      department: "Product",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 33 },
    rowData: {
      id: 33,
      name: "Emily Chen",
      email: "emily.c@example.com",
      role: "Content Strategist",
      department: "Marketing",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 34 },
    rowData: {
      id: 34,
      name: "Felix Wong",
      email: "felix.w@example.com",
      role: "Software Engineer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 35 },
    rowData: {
      id: 35,
      name: "Gabriella Nguyen",
      email: "gabriella.n@example.com",
      role: "UX Designer",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 36 },
    rowData: {
      id: 36,
      name: "Hector Gomez",
      email: "hector.g@example.com",
      role: "Sales Representative",
      department: "Sales",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 37 },
    rowData: {
      id: 37,
      name: "Iris Scott",
      email: "iris.s@example.com",
      role: "Financial Analyst",
      department: "Finance",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 38 },
    rowData: {
      id: 38,
      name: "Julian Parker",
      email: "julian.p@example.com",
      role: "Technical Writer",
      department: "Documentation",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 39 },
    rowData: {
      id: 39,
      name: "Kara Williams",
      email: "kara.w@example.com",
      role: "Support Specialist",
      department: "Support",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 40 },
    rowData: {
      id: 40,
      name: "Leo Adams",
      email: "leo.a@example.com",
      role: "UI Developer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 41 },
    rowData: {
      id: 41,
      name: "Maya Jackson",
      email: "maya.j@example.com",
      role: "QA Manager",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 42 },
    rowData: {
      id: 42,
      name: "Noah Bennett",
      email: "noah.b@example.com",
      role: "Business Analyst",
      department: "Product",
      status: "On Leave",
    },
  },
  {
    rowMeta: { rowId: 43 },
    rowData: {
      id: 43,
      name: "Olivia Franklin",
      email: "olivia.f@example.com",
      role: "User Researcher",
      department: "Design",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 44 },
    rowData: {
      id: 44,
      name: "Patrick Murphy",
      email: "patrick.m@example.com",
      role: "Backend Engineer",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 45 },
    rowData: {
      id: 45,
      name: "Rachel Sanders",
      email: "rachel.s@example.com",
      role: "Marketing Director",
      department: "Marketing",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 46 },
    rowData: {
      id: 46,
      name: "Samuel Washington",
      email: "samuel.w@example.com",
      role: "Frontend Team Lead",
      department: "Engineering",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 47 },
    rowData: {
      id: 47,
      name: "Tara Wilson",
      email: "tara.w@example.com",
      role: "Operations Manager",
      department: "Operations",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 48 },
    rowData: {
      id: 48,
      name: "Umar Khan",
      email: "umar.k@example.com",
      role: "Machine Learning Engineer",
      department: "AI Research",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 49 },
    rowData: {
      id: 49,
      name: "Victoria Lopez",
      email: "victoria.l@example.com",
      role: "Customer Relations",
      department: "Support",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 50 },
    rowData: {
      id: 50,
      name: "William Chen",
      email: "william.c@example.com",
      role: "CTO",
      department: "Executive",
      status: "Active",
    },
  },
];

const PaginationDemo = ({ theme }: { theme?: Theme }) => {
  // Only hold the current page data, not all data
  const [rows, setRows] = useState(ROWS.slice(0, ROWS_PER_PAGE));

  // Handler for next page data fetch
  const onNextPage = async (pageIndex: number) => {
    const startIndex = pageIndex * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;

    await new Promise((resolve) => setTimeout(resolve, 100));
    const newPageData = ROWS.slice(startIndex, endIndex);

    if (newPageData.length === 0 || rows.length > startIndex) {
      return false;
    }

    setRows((prevRows) => [...prevRows, ...newPageData]);
    return true;
  };

  return (
    <div style={{ display: "flex" }}>
      <SimpleTable
        defaultHeaders={HEADERS}
        height="auto"
        onNextPage={onNextPage}
        rows={rows}
        rowsPerPage={ROWS_PER_PAGE}
        shouldPaginate
        theme={theme}
      />
    </div>
  );
};

export default PaginationDemo;
