import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with various aggregation types
const headers: HeaderObject[] = [
  { accessor: "organization", label: "Organization", width: 200, type: "string" },
  {
    accessor: "employees",
    label: "Employees",
    width: 100,
    type: "number",
    aggregation: { type: "sum" },
  },
  {
    accessor: "budget",
    label: "Annual Budget",
    width: 140,
    type: "string",
    aggregation: {
      type: "sum",
      parseValue: (value: string) => {
        // Parse values like "$15.0M" to numbers
        const numericValue = parseFloat(value.replace(/[$M]/g, ""));
        return isNaN(numericValue) ? 0 : numericValue;
      },
    },
    cellRenderer: ({ row }) => {
      const value = row.budget;
      if (typeof value === "number") {
        // This is an aggregated value, format as currency
        return `$${value.toFixed(1)}M`;
      }
      if (typeof value === "string") {
        // This is original string value, return as-is
        return value;
      }
      return "";
    },
  },
  {
    accessor: "rating",
    label: "Team Rating",
    width: 120,
    type: "number",
    aggregation: { type: "average" },
    cellRenderer: ({ row }) => {
      const value = row.rating;
      if (typeof value === "number") {
        return `${value.toFixed(1)} ⭐`;
      }
      if (typeof value === "string" || typeof value === "number") {
        return `${value} ⭐`;
      }
      return "";
    },
  },
  {
    accessor: "projectCount",
    label: "Projects",
    width: 90,
    type: "number",
    aggregation: { type: "count" },
  },
  {
    accessor: "minTeamSize",
    label: "Min Team",
    width: 90,
    type: "number",
    aggregation: { type: "min" },
  },
  {
    accessor: "maxTeamSize",
    label: "Max Team",
    width: 90,
    type: "number",
    aggregation: { type: "max" },
  },
  {
    accessor: "weightedScore",
    label: "Score",
    width: 100,
    type: "number",
    aggregation: {
      type: "custom",
      customFn: (values: any[]) => {
        // Custom aggregation: calculate weighted score
        if (values.length === 0) return 0;
        const sum = values.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
        return Math.round((sum / values.length) * 10) / 10; // Round to 1 decimal
      },
    },
    cellRenderer: ({ row }) => {
      const value = row.weightedScore;
      if (typeof value === "number" || typeof value === "string") {
        return `${value}/100`;
      }
      return "";
    },
  },
  { accessor: "performance", label: "Performance", width: 120, type: "string" },
  { accessor: "location", label: "Location", width: 130, type: "string" },
  { accessor: "status", label: "Status", width: 110, type: "string" },
];

// Hierarchical data structure for row grouping and aggregation
const ORGANIZATION_DATA = [
  // TechSolutions Inc. company
  {
    id: 1,
    organization: "TechSolutions Inc.",
    performance: "Exceeding",
    location: "San Francisco",
    status: "Expanding",
    divisions: [
      {
        id: 101,
        organization: "Engineering",
        performance: "Exceeding",
        location: "Multiple",
        status: "Expanding",
        teams: [
          {
            id: 1001,
            organization: "Frontend",
            employees: 28,
            budget: "$2.8M",
            rating: 4.8,
            projectCount: 12,
            minTeamSize: 3,
            maxTeamSize: 28,
            weightedScore: 92.5,
            performance: "Exceeding",
            location: "San Francisco",
            status: "Hiring",
          },
          {
            id: 1002,
            organization: "Backend",
            employees: 32,
            budget: "$3.4M",
            rating: 4.6,
            projectCount: 8,
            minTeamSize: 4,
            maxTeamSize: 32,
            weightedScore: 88.2,
            performance: "Meeting",
            location: "Seattle",
            status: "Stable",
          },
          {
            id: 1003,
            organization: "DevOps",
            employees: 15,
            budget: "$1.9M",
            rating: 4.9,
            projectCount: 15,
            minTeamSize: 2,
            maxTeamSize: 15,
            weightedScore: 95.1,
            performance: "Exceeding",
            location: "Remote",
            status: "Hiring",
          },
        ],
      },
      {
        id: 102,
        organization: "Product",
        performance: "Meeting",
        location: "Multiple",
        status: "Stable",
        teams: [
          {
            id: 1101,
            organization: "Design",
            employees: 17,
            budget: "$1.8M",
            rating: 4.4,
            projectCount: 9,
            minTeamSize: 2,
            maxTeamSize: 17,
            weightedScore: 87.3,
            performance: "Meeting",
            location: "Portland",
            status: "Stable",
          },
          {
            id: 1102,
            organization: "Research",
            employees: 9,
            budget: "$1.4M",
            rating: 4.1,
            projectCount: 4,
            minTeamSize: 1,
            maxTeamSize: 9,
            weightedScore: 74.6,
            performance: "Below Target",
            location: "Boston",
            status: "Reviewing",
          },
        ],
      },
    ],
  },
  // HealthFirst Group company
  {
    id: 2,
    organization: "HealthFirst Group",
    performance: "Meeting",
    location: "Boston",
    status: "Stable",
    divisions: [
      {
        id: 201,
        organization: "Hospital Operations",
        performance: "Meeting",
        location: "Multiple",
        status: "Expanding",
        teams: [
          {
            id: 2001,
            organization: "Emergency",
            employees: 48,
            budget: "$5.2M",
            rating: 4.7,
            projectCount: 3,
            minTeamSize: 8,
            maxTeamSize: 48,
            weightedScore: 91.4,
            performance: "Meeting",
            location: "New York",
            status: "Critical",
          },
          {
            id: 2002,
            organization: "Cardiology",
            employees: 32,
            budget: "$4.8M",
            rating: 4.9,
            projectCount: 5,
            minTeamSize: 6,
            maxTeamSize: 32,
            weightedScore: 96.8,
            performance: "Exceeding",
            location: "Chicago",
            status: "Expanding",
          },
        ],
      },
      {
        id: 202,
        organization: "Research & Development",
        performance: "Exceeding",
        location: "Multiple",
        status: "Hiring",
        teams: [
          {
            id: 2101,
            organization: "Clinical Trials",
            employees: 18,
            budget: "$4.2M",
            rating: 4.8,
            projectCount: 7,
            minTeamSize: 3,
            maxTeamSize: 18,
            weightedScore: 93.5,
            performance: "Exceeding",
            location: "San Diego",
            status: "Expanding",
          },
        ],
      },
    ],
  },
  // Creative Media company
  {
    id: 3,
    organization: "Creative Media",
    performance: "Exceeding",
    location: "Los Angeles",
    status: "Expanding",
    divisions: [
      {
        id: 301,
        organization: "Studio Operations",
        performance: "Exceeding",
        location: "Multiple",
        status: "Expanding",
        teams: [
          {
            id: 3001,
            organization: "Production",
            employees: 64,
            budget: "$12.5M",
            rating: 4.8,
            projectCount: 12,
            minTeamSize: 8,
            maxTeamSize: 64,
            weightedScore: 94.2,
            performance: "Exceeding",
            location: "Los Angeles",
            status: "Expanding",
          },
          {
            id: 3002,
            organization: "Post-Production",
            employees: 38,
            budget: "$8.2M",
            rating: 4.5,
            projectCount: 9,
            minTeamSize: 4,
            maxTeamSize: 38,
            weightedScore: 89.7,
            performance: "Meeting",
            location: "Vancouver",
            status: "Hiring",
          },
        ],
      },
    ],
  },
];

const AggregateFunctionsDemo = ({
  height = "500px",
  theme,
}: {
  height?: string;
  theme?: Theme;
}) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={ORGANIZATION_DATA}
      rowGrouping={["divisions", "teams"]}
      rowIdAccessor="id"
      height={height}
      theme={theme}
    />
  );
};

export default AggregateFunctionsDemo;
