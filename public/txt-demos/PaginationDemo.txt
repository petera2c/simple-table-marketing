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
    id: 1,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "Software Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "Product Manager",
    department: "Product",
    status: "Active",
  },
  {
    id: 3,
    name: "Carol Williams",
    email: "carol.w@example.com",
    role: "UX Designer",
    department: "Design",
    status: "On Leave",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.b@example.com",
    role: "Data Scientist",
    department: "Analytics",
    status: "Active",
  },
  {
    id: 5,
    name: "Eva Garcia",
    email: "eva.garcia@example.com",
    role: "Marketing Manager",
    department: "Marketing",
    status: "Active",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.m@example.com",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 7,
    name: "Grace Davis",
    email: "grace.d@example.com",
    role: "Sales Representative",
    department: "Sales",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Henry Rodriguez",
    email: "henry.r@example.com",
    role: "QA Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 9,
    name: "Irene Wilson",
    email: "irene.w@example.com",
    role: "HR Manager",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: 10,
    name: "John Moore",
    email: "john.moore@example.com",
    role: "Financial Analyst",
    department: "Finance",
    status: "Active",
  },
  {
    id: 11,
    name: "Isabella Martinez",
    email: "isabella.m@example.com",
    role: "Backend Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 12,
    name: "Jack Wilson",
    email: "jack.wilson@example.com",
    role: "Product Designer",
    department: "Design",
    status: "Active",
  },
  {
    id: 13,
    name: "Kylie Brown",
    email: "kylie.brown@example.com",
    role: "Content Writer",
    department: "Marketing",
    status: "Active",
  },
  {
    id: 14,
    name: "Liam Johnson",
    email: "liam.j@example.com",
    role: "IT Support",
    department: "IT",
    status: "Active",
  },
  {
    id: 15,
    name: "Mia Thompson",
    email: "mia.t@example.com",
    role: "Accountant",
    department: "Finance",
    status: "Active",
  },
  {
    id: 16,
    name: "Nathan Clark",
    email: "nathan.c@example.com",
    role: "HR Specialist",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: 17,
    name: "Olivia Davis",
    email: "olivia.d@example.com",
    role: "Social Media Manager",
    department: "Marketing",
    status: "On Leave",
  },
  {
    id: 18,
    name: "Peter Zhang",
    email: "peter.z@example.com",
    role: "Mobile Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 19,
    name: "Quinn Roberts",
    email: "quinn.r@example.com",
    role: "Project Manager",
    department: "Product",
    status: "Active",
  },
  {
    id: 20,
    name: "Ryan Cooper",
    email: "ryan.c@example.com",
    role: "Systems Analyst",
    department: "IT",
    status: "Active",
  },
  {
    id: 21,
    name: "Sophia Lee",
    email: "sophia.l@example.com",
    role: "UX Researcher",
    department: "Design",
    status: "Active",
  },
  {
    id: 22,
    name: "Thomas Garcia",
    email: "thomas.g@example.com",
    role: "Database Administrator",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 23,
    name: "Uma Patel",
    email: "uma.p@example.com",
    role: "Legal Counsel",
    department: "Legal",
    status: "Active",
  },
  {
    id: 24,
    name: "Victor Anderson",
    email: "victor.a@example.com",
    role: "Sales Manager",
    department: "Sales",
    status: "Active",
  },
  {
    id: 25,
    name: "Wendy Martinez",
    email: "wendy.m@example.com",
    role: "Customer Success",
    department: "Support",
    status: "Active",
  },
  {
    id: 26,
    name: "Xavier Johnson",
    email: "xavier.j@example.com",
    role: "Security Engineer",
    department: "IT",
    status: "Active",
  },
  {
    id: 27,
    name: "Yasmine Ali",
    email: "yasmine.a@example.com",
    role: "Data Analyst",
    department: "Analytics",
    status: "Inactive",
  },
  {
    id: 28,
    name: "Zachary Miller",
    email: "zachary.m@example.com",
    role: "Frontend Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 29,
    name: "Abigail Wilson",
    email: "abigail.w@example.com",
    role: "Content Strategist",
    department: "Marketing",
    status: "Active",
  },
  {
    id: 30,
    name: "Benjamin Taylor",
    email: "benjamin.t@example.com",
    role: "Research Scientist",
    department: "R&D",
    status: "Active",
  },
  {
    id: 31,
    name: "Charlotte Harris",
    email: "charlotte.h@example.com",
    role: "Business Analyst",
    department: "Product",
    status: "Active",
  },
  {
    id: 32,
    name: "Daniel White",
    email: "daniel.w@example.com",
    role: "Cloud Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 33,
    name: "Emma Davis",
    email: "emma.d@example.com",
    role: "Training Specialist",
    department: "Human Resources",
    status: "On Leave",
  },
  {
    id: 34,
    name: "Felix Johnson",
    email: "felix.j@example.com",
    role: "Technical Lead",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 35,
    name: "Gabriella Martinez",
    email: "gabriella.m@example.com",
    role: "Graphic Designer",
    department: "Design",
    status: "Active",
  },
  {
    id: 36,
    name: "Hector Gomez",
    email: "hector.g@example.com",
    role: "Sales Representative",
    department: "Sales",
    status: "Inactive",
  },
  {
    id: 37,
    name: "Iris Scott",
    email: "iris.s@example.com",
    role: "Financial Analyst",
    department: "Finance",
    status: "Active",
  },
  {
    id: 38,
    name: "Julian Parker",
    email: "julian.p@example.com",
    role: "Technical Writer",
    department: "Documentation",
    status: "Active",
  },
  {
    id: 39,
    name: "Kara Williams",
    email: "kara.w@example.com",
    role: "Support Specialist",
    department: "Support",
    status: "Active",
  },
  {
    id: 40,
    name: "Leo Adams",
    email: "leo.a@example.com",
    role: "UI Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 41,
    name: "Maya Jackson",
    email: "maya.j@example.com",
    role: "QA Manager",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 42,
    name: "Noah Bennett",
    email: "noah.b@example.com",
    role: "Business Analyst",
    department: "Product",
    status: "On Leave",
  },
  {
    id: 43,
    name: "Olivia Franklin",
    email: "olivia.f@example.com",
    role: "User Researcher",
    department: "Design",
    status: "Active",
  },
  {
    id: 44,
    name: "Patrick Murphy",
    email: "patrick.m@example.com",
    role: "Backend Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 45,
    name: "Rachel Sanders",
    email: "rachel.s@example.com",
    role: "Marketing Director",
    department: "Marketing",
    status: "Active",
  },
  {
    id: 46,
    name: "Samuel Washington",
    email: "samuel.w@example.com",
    role: "Frontend Team Lead",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 47,
    name: "Tara Wilson",
    email: "tara.w@example.com",
    role: "Operations Manager",
    department: "Operations",
    status: "Active",
  },
  {
    id: 48,
    name: "Umar Khan",
    email: "umar.k@example.com",
    role: "Machine Learning Engineer",
    department: "AI Research",
    status: "Active",
  },
  {
    id: 49,
    name: "Victoria Lopez",
    email: "victoria.l@example.com",
    role: "Customer Relations",
    department: "Support",
    status: "Inactive",
  },
  {
    id: 50,
    name: "William Chen",
    email: "william.c@example.com",
    role: "CTO",
    department: "Executive",
    status: "Active",
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
        rowIdAccessor="id"
        rows={rows}
        rowsPerPage={ROWS_PER_PAGE}
        shouldPaginate
        theme={theme}
      />
    </div>
  );
};

export default PaginationDemo;
