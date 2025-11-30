import { useState, useCallback } from "react";
import { SimpleTable, Theme, OnRowGroupExpandProps, Row } from "simple-table-core";
import "simple-table-core/styles.css";
import { HEADERS } from "./organization-headers";
import { useOrganizationData } from "./useOrganizationData";

// Type definitions
interface Department extends Row {
  id: string;
  name: string;
  type: "department";
  employeeCount?: number;
  budget?: string;
  manager?: string;
  location?: string;
  status?: string;
  teams?: Team[];
  _loading?: boolean;
  _error?: string | null;
}

interface Team extends Row {
  id: string;
  name: string;
  type: "team";
  employeeCount?: number;
  budget?: string;
  lead?: string;
  location?: string;
  status?: string;
  employees?: Employee[];
  _loading?: boolean;
  _error?: string | null;
}

interface Employee extends Row {
  id: string;
  name: string;
  type: "employee";
  role: string;
  salary: string;
  email: string;
  startDate: string;
  status: string;
}

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated API: Fetch teams for a department
const fetchTeamsForDepartment = async (departmentId: string, departmentName: string): Promise<Team[]> => {
  await delay(1200); // Simulate network delay

  // Simulated realistic team data based on department
  const teamsMap: Record<string, { teams: string[]; locations: string[] }> = {
    Engineering: {
      teams: [
        "Frontend Development",
        "Backend Services",
        "Mobile Applications",
        "Infrastructure & DevOps",
        "Quality Assurance",
      ],
      locations: ["San Francisco, CA", "Austin, TX", "Seattle, WA"],
    },
    "Product Management": {
      teams: ["Product Strategy", "UX Research", "Product Design", "Product Analytics"],
      locations: ["San Francisco, CA", "New York, NY"],
    },
    "Sales & Business Development": {
      teams: ["Enterprise Sales", "SMB Sales", "Business Development", "Sales Operations"],
      locations: ["New York, NY", "Chicago, IL", "Boston, MA"],
    },
    Marketing: {
      teams: [
        "Content Marketing",
        "Digital Marketing",
        "Brand & Communications",
        "Growth Marketing",
        "Marketing Operations",
      ],
      locations: ["San Francisco, CA", "Los Angeles, CA"],
    },
    "Customer Success": {
      teams: ["Technical Support", "Customer Onboarding", "Account Management", "Training"],
      locations: ["Denver, CO", "Portland, OR", "Remote"],
    },
    "Human Resources": {
      teams: [
        "Talent Acquisition",
        "People Operations",
        "Compensation & Benefits",
        "Learning & Development",
      ],
      locations: ["San Francisco, CA", "Remote"],
    },
    "Finance & Accounting": {
      teams: [
        "Financial Planning",
        "Accounting Operations",
        "Revenue Operations",
        "Investor Relations",
      ],
      locations: ["New York, NY", "San Francisco, CA"],
    },
    "Legal & Compliance": {
      teams: ["Corporate Legal", "Compliance", "Data Privacy", "Contracts"],
      locations: ["New York, NY", "Washington, DC"],
    },
    "Data & Analytics": {
      teams: ["Data Engineering", "Business Intelligence", "Data Science", "Analytics"],
      locations: ["San Francisco, CA", "Seattle, WA"],
    },
    Operations: {
      teams: ["IT Operations", "Facilities", "Business Operations", "Vendor Management"],
      locations: ["San Francisco, CA", "Austin, TX"],
    },
    "Security & Compliance": {
      teams: [
        "Information Security",
        "Security Operations",
        "Compliance Monitoring",
        "Risk Management",
      ],
      locations: ["San Francisco, CA", "Remote"],
    },
    "Research & Development": {
      teams: ["AI Research", "Advanced Technologies", "Innovation Lab", "Prototyping"],
      locations: ["Palo Alto, CA", "Cambridge, MA"],
    },
  };

  const deptConfig = teamsMap[departmentName];
  if (!deptConfig) return [];

  return deptConfig.teams.map((teamName, index) => ({
    id: `${departmentId}-TEAM-${index + 1}`,
    name: teamName,
    type: "team",
    employeeCount: Math.floor(Math.random() * 9) + 4, // 4-12 employees
    budget: `$${(Math.floor(Math.random() * 600000) + 400000).toLocaleString()}`,
    lead: generateRandomName(),
    location: deptConfig.locations[Math.floor(Math.random() * deptConfig.locations.length)],
    status: "Active",
  }));
};

// Simulated API: Fetch employees for a team
const fetchEmployeesForTeam = async (teamId: string, teamName: string): Promise<Employee[]> => {
  await delay(800); // Simulate network delay

  const employeeCount = Math.floor(Math.random() * 9) + 4; // 4-12 employees
  const employees: Employee[] = [];

  const roles = getRolesForTeam(teamName);

  for (let i = 0; i < employeeCount; i++) {
    const name = generateRandomName();
    const role = roles[Math.floor(Math.random() * roles.length)];
    const salary = Math.floor(Math.random() * 80000) + 70000; // $70k-$150k
    const year = Math.floor(Math.random() * 6) + 2019; // 2019-2024
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    employees.push({
      id: `${teamId}-EMP-${i + 1}`,
      name,
      type: "employee",
      role,
      salary: `$${salary.toLocaleString()}`,
      email: `${name.toLowerCase().replace(/\s+/g, ".")}@company.com`,
      startDate: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      status: Math.random() > 0.95 ? "On Leave" : "Active",
    });
  }

  return employees;
};

// Helper function to generate random names
const generateRandomName = (): string => {
  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Barbara",
    "David",
    "Elizabeth",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Christopher",
    "Karen",
    "Daniel",
    "Nancy",
    "Matthew",
    "Lisa",
    "Anthony",
    "Betty",
    "Mark",
    "Margaret",
    "Donald",
    "Sandra",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
  ];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

// Helper function to get roles for a specific team
const getRolesForTeam = (teamName: string): string[] => {
  const roleMap: Record<string, string[]> = {
    "Frontend Development": [
      "Senior Frontend Engineer",
      "Frontend Engineer",
      "UI Developer",
      "Frontend Architect",
    ],
    "Backend Services": [
      "Senior Backend Engineer",
      "Backend Engineer",
      "API Developer",
      "Backend Architect",
    ],
    "Mobile Applications": [
      "Senior Mobile Engineer",
      "iOS Developer",
      "Android Developer",
      "Mobile Architect",
    ],
    "Infrastructure & DevOps": [
      "Senior DevOps Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "Site Reliability Engineer",
    ],
    "Quality Assurance": [
      "Senior QA Engineer",
      "QA Engineer",
      "Test Automation Engineer",
      "QA Lead",
    ],
    "Product Strategy": [
      "Senior Product Manager",
      "Product Manager",
      "Product Strategist",
      "Group Product Manager",
    ],
    "UX Research": ["Senior UX Researcher", "UX Researcher", "User Researcher", "Research Lead"],
    "Product Design": [
      "Senior Product Designer",
      "Product Designer",
      "UX/UI Designer",
      "Design Lead",
    ],
    "Product Analytics": [
      "Senior Product Analyst",
      "Product Analyst",
      "Analytics Manager",
      "Insights Lead",
    ],
    "Enterprise Sales": [
      "Enterprise Account Executive",
      "Senior Account Executive",
      "Sales Manager",
      "Sales Director",
    ],
    "SMB Sales": [
      "Account Executive",
      "Sales Representative",
      "SMB Account Manager",
      "Sales Specialist",
    ],
    "Business Development": [
      "Business Development Manager",
      "Partnership Manager",
      "BD Director",
      "Strategic Partnerships Lead",
    ],
    "Sales Operations": [
      "Sales Operations Manager",
      "Sales Analyst",
      "Sales Operations Specialist",
      "Revenue Operations Manager",
    ],
  };

  return roleMap[teamName] || [
    "Manager",
    "Senior Specialist",
    "Specialist",
    "Coordinator",
    "Analyst",
  ];
};

// Helper to update row children (nested data)
const updateRowChildren = (
  rows: Department[],
  rowId: string,
  groupingKey: string,
  children: any[]
): Department[] => {
  return rows.map((row) => {
    if (row.id === rowId) {
      return { ...row, [groupingKey]: children, _loading: false };
    }

    if (row.teams && Array.isArray(row.teams)) {
      return {
        ...row,
        teams: row.teams.map((team) => {
          if (team.id === rowId) {
            return { ...team, [groupingKey]: children, _loading: false };
          }
          return team;
        }),
      };
    }

    return row;
  });
};

// Helper to set loading state
const setRowLoading = (rows: Department[], rowId: string, isLoading: boolean): Department[] => {
  return rows.map((row) => {
    if (row.id === rowId) {
      return { ...row, _loading: isLoading };
    }

    if (row.teams && Array.isArray(row.teams)) {
      return {
        ...row,
        teams: row.teams.map((team) => {
          if (team.id === rowId) {
            return { ...team, _loading: isLoading };
          }
          return team;
        }),
      };
    }

    return row;
  });
};

export default function OrganizationHierarchyDemo({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) {
  const { data: initialDepartments, isLoading } = useOrganizationData();
  const [rows, setRows] = useState<Department[]>([]);

  // Update rows when data is loaded
  useState(() => {
    if (initialDepartments && initialDepartments.length > 0) {
      setRows(initialDepartments as Department[]);
    }
  });

  // Update when initialDepartments changes
  if (initialDepartments && rows.length === 0 && !isLoading) {
    setRows(initialDepartments as Department[]);
  }

  const handleRowExpand = useCallback(
    async ({ row, rowId, depth, groupingKey, isExpanded }: OnRowGroupExpandProps) => {
      // Don't fetch if collapsing
      if (!isExpanded) {
        return;
      }

      // Don't fetch if data already exists
      if (groupingKey && row[groupingKey] && (row[groupingKey] as any[]).length > 0) {
        return;
      }

      try {
        if (depth === 0 && groupingKey === "teams") {
          // Set loading state
          setRows((prevRows) => setRowLoading(prevRows, String(rowId), true));

          const teams = await fetchTeamsForDepartment(String(rowId), row.name as string);

          // Update with fetched data
          setRows((prevRows) => updateRowChildren(prevRows, String(rowId), "teams", teams));
        } else if (depth === 1 && groupingKey === "employees") {
          // Set loading state
          setRows((prevRows) => setRowLoading(prevRows, String(rowId), true));

          const employees = await fetchEmployeesForTeam(String(rowId), row.name as string);

          // Update with fetched data
          setRows((prevRows) => updateRowChildren(prevRows, String(rowId), "employees", employees));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRows((prevRows) => setRowLoading(prevRows, String(rowId), false));
      }
    },
    [rows]
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: typeof height === "number" ? `${height}px` : height,
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading organization data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      expandAll={false}
      height={typeof height === "number" ? `${height}px` : height}
      onRowGroupExpand={handleRowExpand}
      rowGrouping={["teams", "employees"]}
      rowIdAccessor="id"
      rows={rows}
      selectableCells
      theme={theme}
      useOddEvenRowBackground
    />
  );
}

