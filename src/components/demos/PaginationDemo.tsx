import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Generate sample data for pagination
const generateData = () => {
  const data = [];
  const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Sarah",
    "David",
    "Lisa",
    "Chris",
    "Emma",
    "Robert",
    "Maria",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Garcia",
    "Martinez",
    "Anderson",
  ];
  const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance", "Operations"];
  const roles = ["Manager", "Developer", "Designer", "Analyst", "Coordinator", "Specialist"];

  for (let i = 1; i <= 100; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const age = 22 + Math.floor(Math.random() * 40);
    const salary = 50000 + Math.floor(Math.random() * 100000);

    data.push({
      id: i,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
      age,
      department,
      role,
      salary,
      startDate: `2020-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(
        Math.floor(Math.random() * 28) + 1
      ).padStart(2, "0")}`,
    });
  }

  return data;
};

const data = generateData();

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 150, type: "string" },
  { accessor: "email", label: "Email", width: 200, type: "string" },
  { accessor: "age", label: "Age", width: 80, type: "number" },
  { accessor: "department", label: "Department", width: 120, type: "string" },
  { accessor: "role", label: "Role", width: 120, type: "string" },
  { accessor: "salary", label: "Salary", width: 100, type: "number" },
  { accessor: "startDate", label: "Start Date", width: 120, type: "date" },
];

const PaginationDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      shouldPaginate
      rowsPerPage={15}
      height={height}
      theme={theme}
    />
  );
};

export default PaginationDemo;
