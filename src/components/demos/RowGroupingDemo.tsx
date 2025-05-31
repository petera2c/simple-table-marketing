import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const headers: HeaderObject[] = [
  { accessor: "organization", label: "Organization", width: 200, expandable: true, type: "string" },
  { accessor: "employees", label: "Employees", width: 100, type: "number" },
  { accessor: "budget", label: "Annual Budget", width: 140, type: "string" },
  { accessor: "performance", label: "Performance", width: 120, type: "string" },
  { accessor: "location", label: "Location", width: 130, type: "string" },
  { accessor: "growthRate", label: "Growth", width: 90, type: "string" },
  { accessor: "status", label: "Status", width: 110, type: "string" },
  { accessor: "established", label: "Est. Date", width: 110, type: "date" },
];

// Sample hierarchical organizational data with flat structure
const organizationData = [
  {
    id: "COMP-001",
    organization: "TechSolutions Inc.",
    employees: 137,
    budget: "$15.0M",
    performance: "Exceeding",
    location: "San Francisco",
    growthRate: "+9%",
    status: "Expanding",
    established: "2018-01-01",
    divisions: [
      {
        id: "DIV-001",
        organization: "Engineering Division",
        employees: 97,
        budget: "$8.5M",
        performance: "Exceeding",
        location: "San Francisco",
        growthRate: "+11%",
        status: "Hiring",
        established: "2018-01-01",
        departments: [
          {
            id: "DEPT-001",
            organization: "Frontend Team",
            employees: 28,
            budget: "$2.8M",
            performance: "Exceeding",
            location: "San Francisco",
            growthRate: "+12%",
            status: "Hiring",
            established: "2019-05-16",
          },
          {
            id: "DEPT-002",
            organization: "Backend Team",
            employees: 32,
            budget: "$3.4M",
            performance: "Meeting",
            location: "Seattle",
            growthRate: "+8%",
            status: "Stable",
            established: "2018-03-22",
          },
          {
            id: "DEPT-003",
            organization: "DevOps Team",
            employees: 15,
            budget: "$1.9M",
            performance: "Exceeding",
            location: "Remote",
            growthRate: "+15%",
            status: "Hiring",
            established: "2020-11-05",
          },
        ],
      },
      {
        id: "DIV-002",
        organization: "Product Division",
        employees: 40,
        budget: "$3.2M",
        performance: "Meeting",
        location: "San Francisco",
        growthRate: "+7%",
        status: "Stable",
        established: "2019-01-01",
        departments: [
          {
            id: "DEPT-004",
            organization: "Design Team",
            employees: 17,
            budget: "$1.8M",
            performance: "Meeting",
            location: "Portland",
            growthRate: "+6%",
            status: "Stable",
            established: "2019-02-28",
          },
          {
            id: "DEPT-005",
            organization: "Research Team",
            employees: 9,
            budget: "$1.4M",
            performance: "Below Target",
            location: "Boston",
            growthRate: "+3%",
            status: "Reviewing",
            established: "2020-07-15",
          },
        ],
      },
    ],
  },
  {
    id: "COMP-002",
    organization: "HealthFirst Group",
    employees: 138,
    budget: "$22.4M",
    performance: "Meeting",
    location: "Boston",
    growthRate: "+8%",
    status: "Stable",
    established: "2010-01-01",
    divisions: [
      {
        id: "DIV-003",
        organization: "Hospital Operations",
        employees: 120,
        budget: "$18.1M",
        performance: "Meeting",
        location: "Boston",
        growthRate: "+6%",
        status: "Stable",
        established: "2010-01-01",
        departments: [
          {
            id: "DEPT-006",
            organization: "Emergency",
            employees: 48,
            budget: "$5.2M",
            performance: "Meeting",
            location: "New York",
            growthRate: "+4%",
            status: "Critical",
            established: "2010-06-14",
          },
          {
            id: "DEPT-007",
            organization: "Cardiology",
            employees: 32,
            budget: "$4.8M",
            performance: "Exceeding",
            location: "Chicago",
            growthRate: "+9%",
            status: "Expanding",
            established: "2012-03-25",
          },
        ],
      },
      {
        id: "DIV-004",
        organization: "Research Division",
        employees: 18,
        budget: "$4.3M",
        performance: "Exceeding",
        location: "Cambridge",
        growthRate: "+15%",
        status: "Expanding",
        established: "2017-01-01",
        departments: [
          {
            id: "DEPT-008",
            organization: "Clinical Trials",
            employees: 18,
            budget: "$4.2M",
            performance: "Exceeding",
            location: "San Diego",
            growthRate: "+12%",
            status: "Expanding",
            established: "2017-04-18",
          },
        ],
      },
    ],
  },
  {
    id: "COMP-003",
    organization: "Global Finance",
    employees: 121,
    budget: "$15.5M",
    performance: "Meeting",
    location: "New York",
    growthRate: "+3%",
    status: "Restructuring",
    established: "2005-01-01",
    divisions: [
      {
        id: "DIV-005",
        organization: "Banking Operations",
        employees: 121,
        budget: "$15.5M",
        performance: "Meeting",
        location: "New York",
        growthRate: "+3%",
        status: "Restructuring",
        established: "2005-01-15",
        departments: [
          {
            id: "DEPT-009",
            organization: "Retail Banking",
            employees: 56,
            budget: "$4.8M",
            performance: "Meeting",
            location: "New York",
            growthRate: "+2%",
            status: "Stable",
            established: "2005-11-08",
          },
          {
            id: "DEPT-010",
            organization: "Investment Banking",
            employees: 38,
            budget: "$6.2M",
            performance: "Exceeding",
            location: "New York",
            growthRate: "+5%",
            status: "Hiring",
            established: "2006-02-12",
          },
        ],
      },
    ],
  },
];

const RowGroupingDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rows={organizationData}
      rowIdAccessor="id"
      rowGrouping={["divisions", "departments"]}
      theme={theme}
    />
  );
};

export default RowGroupingDemo;
