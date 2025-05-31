import type { Row } from "simple-table-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate HR organizational data with hierarchical structure
export const generateHRData = (): Row[] => {
  const departments = [
    {
      id: "DEPT-001",
      name: "Engineering",
      headCount: 45,
      budget: 5200000,
      location: "San Francisco",
      head: "Sarah Thompson",
      teams: [
        {
          id: "TEAM-001",
          name: "Frontend",
          headCount: 12,
          budget: 1400000,
          location: "San Francisco",
          lead: "John Anderson",
          employees: [
            {
              id: "EMP-001",
              name: "John Doe",
              role: "Senior Engineer",
              salary: 125000,
              startDate: "2021-03-15",
            },
            {
              id: "EMP-002",
              name: "Jane Smith",
              role: "Engineer",
              salary: 95000,
              startDate: "2022-01-10",
            },
            {
              id: "EMP-003",
              name: "Alex Kim",
              role: "Junior Engineer",
              salary: 75000,
              startDate: "2023-06-01",
            },
          ],
        },
        {
          id: "TEAM-002",
          name: "Backend",
          headCount: 15,
          budget: 1600000,
          location: "San Francisco",
          lead: "Emily Davis",
          employees: [
            {
              id: "EMP-004",
              name: "Bob Wilson",
              role: "Staff Engineer",
              salary: 150000,
              startDate: "2020-05-20",
            },
            {
              id: "EMP-005",
              name: "Lisa Chen",
              role: "Senior Engineer",
              salary: 130000,
              startDate: "2021-08-12",
            },
          ],
        },
        {
          id: "TEAM-003",
          name: "DevOps",
          headCount: 8,
          budget: 950000,
          location: "Remote",
          lead: "Tom Rodriguez",
          employees: [
            {
              id: "EMP-006",
              name: "David Lee",
              role: "DevOps Engineer",
              salary: 115000,
              startDate: "2022-03-08",
            },
          ],
        },
      ],
    },
    {
      id: "DEPT-002",
      name: "Product",
      headCount: 18,
      budget: 2100000,
      location: "San Francisco",
      head: "Jennifer Walsh",
      teams: [
        {
          id: "TEAM-004",
          name: "Product Management",
          headCount: 8,
          budget: 980000,
          location: "San Francisco",
          lead: "Mark Thompson",
          employees: [
            {
              id: "EMP-007",
              name: "Sarah Johnson",
              role: "Senior PM",
              salary: 140000,
              startDate: "2021-11-15",
            },
            {
              id: "EMP-008",
              name: "Chris Lee",
              role: "Product Manager",
              salary: 110000,
              startDate: "2022-07-01",
            },
          ],
        },
        {
          id: "TEAM-005",
          name: "Design",
          headCount: 10,
          budget: 1100000,
          location: "San Francisco",
          lead: "Anna Martinez",
          employees: [
            {
              id: "EMP-009",
              name: "Jessica Brown",
              role: "Senior Designer",
              salary: 105000,
              startDate: "2021-09-20",
            },
            {
              id: "EMP-010",
              name: "Ryan Garcia",
              role: "UX Designer",
              salary: 85000,
              startDate: "2022-12-05",
            },
          ],
        },
      ],
    },
    {
      id: "DEPT-003",
      name: "Sales",
      headCount: 22,
      budget: 2800000,
      location: "New York",
      head: "Robert Kim",
      teams: [
        {
          id: "TEAM-006",
          name: "Enterprise Sales",
          headCount: 12,
          budget: 1600000,
          location: "New York",
          lead: "Michael Brown",
          employees: [
            {
              id: "EMP-011",
              name: "Amanda Wilson",
              role: "Account Executive",
              salary: 95000,
              startDate: "2021-04-12",
            },
            {
              id: "EMP-012",
              name: "James Taylor",
              role: "Senior AE",
              salary: 115000,
              startDate: "2020-10-08",
            },
          ],
        },
        {
          id: "TEAM-007",
          name: "SMB Sales",
          headCount: 10,
          budget: 1200000,
          location: "Austin",
          lead: "Nicole Davis",
          employees: [
            {
              id: "EMP-013",
              name: "Kevin Martinez",
              role: "Sales Rep",
              salary: 70000,
              startDate: "2022-02-14",
            },
          ],
        },
      ],
    },
  ];

  return departments;
};

function saveDataToFile() {
  const data = generateHRData();
  const outputPath = path.join(__dirname, "../public/data/hr-data.json");

  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`HR data saved to ${outputPath}`);
  console.log(`Generated ${data.length} departments`);
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  saveDataToFile();
}
