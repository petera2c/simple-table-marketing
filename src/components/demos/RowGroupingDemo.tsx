import { SimpleTable, HeaderObject } from "simple-table-core";

const headers: HeaderObject[] = [
  { accessor: "organization", label: "Organization", width: 200, expandable: true },
  { accessor: "employees", label: "Employees", width: 100 },
  { accessor: "budget", label: "Annual Budget", width: 140 },
  { accessor: "performance", label: "Performance", width: 120 },
  { accessor: "location", label: "Location", width: 130 },
  { accessor: "growthRate", label: "Growth", width: 90 },
  { accessor: "status", label: "Status", width: 110 },
  { accessor: "established", label: "Est. Date", width: 110 },
];

// SOFTWARE INDUSTRY
const softwareEngTeams = [
  {
    rowMeta: { rowId: 1001, isExpanded: false },
    rowData: {
      organization: "Frontend",
      employees: 28,
      budget: "$2.8M",
      performance: "Exceeding",
      location: "San Francisco",
      growthRate: "+12%",
      status: "Hiring",
      established: "2019-05-16",
    },
  },
  {
    rowMeta: { rowId: 1002, isExpanded: false },
    rowData: {
      organization: "Backend",
      employees: 32,
      budget: "$3.4M",
      performance: "Meeting",
      location: "Seattle",
      growthRate: "+8%",
      status: "Stable",
      established: "2018-03-22",
    },
  },
  {
    rowMeta: { rowId: 1003, isExpanded: false },
    rowData: {
      organization: "DevOps",
      employees: 15,
      budget: "$1.9M",
      performance: "Exceeding",
      location: "Remote",
      growthRate: "+15%",
      status: "Hiring",
      established: "2020-11-05",
    },
  },
  {
    rowMeta: { rowId: 1004, isExpanded: false },
    rowData: {
      organization: "Mobile",
      employees: 22,
      budget: "$2.5M",
      performance: "Meeting",
      location: "Austin",
      growthRate: "+10%",
      status: "Restructuring",
      established: "2019-08-12",
    },
  },
];

const softwareProductTeams = [
  {
    rowMeta: { rowId: 1101, isExpanded: false },
    rowData: {
      organization: "Design",
      employees: 17,
      budget: "$1.8M",
      performance: "Meeting",
      location: "Portland",
      growthRate: "+6%",
      status: "Stable",
      established: "2019-02-28",
    },
  },
  {
    rowMeta: { rowId: 1102, isExpanded: false },
    rowData: {
      organization: "Research",
      employees: 9,
      budget: "$1.4M",
      performance: "Below Target",
      location: "Boston",
      growthRate: "+3%",
      status: "Reviewing",
      established: "2020-07-15",
    },
  },
  {
    rowMeta: { rowId: 1103, isExpanded: false },
    rowData: {
      organization: "QA Testing",
      employees: 14,
      budget: "$1.2M",
      performance: "Meeting",
      location: "Chicago",
      growthRate: "+5%",
      status: "Stable",
      established: "2019-11-01",
    },
  },
];

// HEALTHCARE INDUSTRY
const hospitalTeams = [
  {
    rowMeta: { rowId: 2001, isExpanded: false },
    rowData: {
      organization: "Emergency",
      employees: 48,
      budget: "$5.2M",
      performance: "Meeting",
      location: "New York",
      growthRate: "+4%",
      status: "Critical",
      established: "2010-06-14",
    },
  },
  {
    rowMeta: { rowId: 2002, isExpanded: false },
    rowData: {
      organization: "Cardiology",
      employees: 32,
      budget: "$4.8M",
      performance: "Exceeding",
      location: "Chicago",
      growthRate: "+9%",
      status: "Expanding",
      established: "2012-03-25",
    },
  },
  {
    rowMeta: { rowId: 2003, isExpanded: false },
    rowData: {
      organization: "Pediatrics",
      employees: 26,
      budget: "$3.1M",
      performance: "Meeting",
      location: "Boston",
      growthRate: "+7%",
      status: "Stable",
      established: "2014-08-30",
    },
  },
];

const researchTeams = [
  {
    rowMeta: { rowId: 2101, isExpanded: false },
    rowData: {
      organization: "Clinical Trials",
      employees: 18,
      budget: "$4.2M",
      performance: "Exceeding",
      location: "San Diego",
      growthRate: "+12%",
      status: "Expanding",
      established: "2017-04-18",
    },
  },
  {
    rowMeta: { rowId: 2102, isExpanded: false },
    rowData: {
      organization: "Genomics",
      employees: 14,
      budget: "$5.1M",
      performance: "Exceeding",
      location: "Cambridge",
      growthRate: "+18%",
      status: "Hiring",
      established: "2019-02-21",
    },
  },
];

// FINANCE INDUSTRY
const bankingTeams = [
  {
    rowMeta: { rowId: 3001, isExpanded: false },
    rowData: {
      organization: "Retail Banking",
      employees: 56,
      budget: "$4.8M",
      performance: "Meeting",
      location: "New York",
      growthRate: "+2%",
      status: "Stable",
      established: "2005-11-08",
    },
  },
  {
    rowMeta: { rowId: 3002, isExpanded: false },
    rowData: {
      organization: "Investment",
      employees: 38,
      budget: "$7.2M",
      performance: "Exceeding",
      location: "Chicago",
      growthRate: "+11%",
      status: "Hiring",
      established: "2008-05-12",
    },
  },
  {
    rowMeta: { rowId: 3003, isExpanded: false },
    rowData: {
      organization: "Loans",
      employees: 27,
      budget: "$3.5M",
      performance: "Below Target",
      location: "Dallas",
      growthRate: "-3%",
      status: "Restructuring",
      established: "2010-03-17",
    },
  },
];

// EDUCATION INDUSTRY
const universityDepts = [
  {
    rowMeta: { rowId: 4001, isExpanded: false },
    rowData: {
      organization: "Computer Science",
      employees: 35,
      budget: "$3.8M",
      performance: "Meeting",
      location: "Boston",
      growthRate: "+8%",
      status: "Expanding",
      established: "1998-08-24",
    },
  },
  {
    rowMeta: { rowId: 4002, isExpanded: false },
    rowData: {
      organization: "Business",
      employees: 42,
      budget: "$4.5M",
      performance: "Exceeding",
      location: "Chicago",
      growthRate: "+6%",
      status: "Stable",
      established: "1995-09-15",
    },
  },
  {
    rowMeta: { rowId: 4003, isExpanded: false },
    rowData: {
      organization: "Engineering",
      employees: 38,
      budget: "$5.1M",
      performance: "Meeting",
      location: "San Francisco",
      growthRate: "+4%",
      status: "Stable",
      established: "1992-02-11",
    },
  },
];

// MANUFACTURING INDUSTRY
const productionTeams = [
  {
    rowMeta: { rowId: 5001, isExpanded: false },
    rowData: {
      organization: "Assembly",
      employees: 78,
      budget: "$6.2M",
      performance: "Meeting",
      location: "Detroit",
      growthRate: "+2%",
      status: "Stable",
      established: "2001-05-18",
    },
  },
  {
    rowMeta: { rowId: 5002, isExpanded: false },
    rowData: {
      organization: "Quality Control",
      employees: 32,
      budget: "$2.8M",
      performance: "Exceeding",
      location: "Pittsburgh",
      growthRate: "+5%",
      status: "Hiring",
      established: "2003-11-24",
    },
  },
  {
    rowMeta: { rowId: 5003, isExpanded: false },
    rowData: {
      organization: "Logistics",
      employees: 42,
      budget: "$3.9M",
      performance: "Meeting",
      location: "Indianapolis",
      growthRate: "+3%",
      status: "Stable",
      established: "2005-02-08",
    },
  },
];

// ENTERTAINMENT INDUSTRY
const studioTeams = [
  {
    rowMeta: { rowId: 6001, isExpanded: false },
    rowData: {
      organization: "Production",
      employees: 64,
      budget: "$12.5M",
      performance: "Exceeding",
      location: "Los Angeles",
      growthRate: "+15%",
      status: "Expanding",
      established: "2008-07-22",
    },
  },
  {
    rowMeta: { rowId: 6002, isExpanded: false },
    rowData: {
      organization: "Post-Production",
      employees: 38,
      budget: "$8.2M",
      performance: "Meeting",
      location: "Vancouver",
      growthRate: "+9%",
      status: "Hiring",
      established: "2010-04-15",
    },
  },
  {
    rowMeta: { rowId: 6003, isExpanded: false },
    rowData: {
      organization: "Animation",
      employees: 52,
      budget: "$7.8M",
      performance: "Exceeding",
      location: "San Francisco",
      growthRate: "+18%",
      status: "Expanding",
      established: "2014-09-30",
    },
  },
];

// RETAIL INDUSTRY
const storeTeams = [
  {
    rowMeta: { rowId: 7001, isExpanded: false },
    rowData: {
      organization: "Sales",
      employees: 85,
      budget: "$4.2M",
      performance: "Below Target",
      location: "Multiple",
      growthRate: "-2%",
      status: "Restructuring",
      established: "2009-03-14",
    },
  },
  {
    rowMeta: { rowId: 7002, isExpanded: false },
    rowData: {
      organization: "Customer Support",
      employees: 42,
      budget: "$2.8M",
      performance: "Meeting",
      location: "Phoenix",
      growthRate: "+1%",
      status: "Stable",
      established: "2010-11-22",
    },
  },
  {
    rowMeta: { rowId: 7003, isExpanded: false },
    rowData: {
      organization: "Online Store",
      employees: 28,
      budget: "$3.5M",
      performance: "Exceeding",
      location: "Remote",
      growthRate: "+22%",
      status: "Expanding",
      established: "2018-06-05",
    },
  },
];

// AGRICULTURE INDUSTRY
const farmingTeams = [
  {
    rowMeta: { rowId: 8001, isExpanded: false },
    rowData: {
      organization: "Crop Division",
      employees: 56,
      budget: "$5.1M",
      performance: "Meeting",
      location: "Iowa",
      growthRate: "+4%",
      status: "Stable",
      established: "2005-02-18",
    },
  },
  {
    rowMeta: { rowId: 8002, isExpanded: false },
    rowData: {
      organization: "Livestock",
      employees: 42,
      budget: "$4.8M",
      performance: "Below Target",
      location: "Nebraska",
      growthRate: "-1%",
      status: "Reviewing",
      established: "2007-05-22",
    },
  },
  {
    rowMeta: { rowId: 8003, isExpanded: false },
    rowData: {
      organization: "Research",
      employees: 18,
      budget: "$2.9M",
      performance: "Exceeding",
      location: "California",
      growthRate: "+9%",
      status: "Expanding",
      established: "2015-08-11",
    },
  },
];

// Division level (middle level)
const softwareDivisions = [
  {
    rowMeta: { rowId: 101, isExpanded: true, children: softwareEngTeams },
    rowData: {
      organization: "Engineering",
      employees: 97,
      budget: "$10.6M",
      performance: "Exceeding",
      location: "Multiple",
      growthRate: "+11%",
      status: "Expanding",
      established: "2018-01-15",
    },
  },
  {
    rowMeta: { rowId: 102, isExpanded: false, children: softwareProductTeams },
    rowData: {
      organization: "Product",
      employees: 40,
      budget: "$4.4M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+5%",
      status: "Stable",
      established: "2019-01-10",
    },
  },
];

const healthcareDivisions = [
  {
    rowMeta: { rowId: 201, isExpanded: false, children: hospitalTeams },
    rowData: {
      organization: "Hospital Operations",
      employees: 106,
      budget: "$13.1M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+6%",
      status: "Expanding",
      established: "2010-01-05",
    },
  },
  {
    rowMeta: { rowId: 202, isExpanded: false, children: researchTeams },
    rowData: {
      organization: "Research & Development",
      employees: 32,
      budget: "$9.3M",
      performance: "Exceeding",
      location: "Multiple",
      growthRate: "+15%",
      status: "Hiring",
      established: "2017-01-10",
    },
  },
];

const educationDivisions = [
  {
    rowMeta: { rowId: 401, isExpanded: false, children: universityDepts },
    rowData: {
      organization: "Academic Departments",
      employees: 115,
      budget: "$13.4M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+6%",
      status: "Stable",
      established: "1992-01-15",
    },
  },
];

const manufacturingDivisions = [
  {
    rowMeta: { rowId: 501, isExpanded: false, children: productionTeams },
    rowData: {
      organization: "Production",
      employees: 152,
      budget: "$12.9M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+3%",
      status: "Stable",
      established: "2001-01-10",
    },
  },
];

const entertainmentDivisions = [
  {
    rowMeta: { rowId: 601, isExpanded: false, children: studioTeams },
    rowData: {
      organization: "Studio Operations",
      employees: 154,
      budget: "$28.5M",
      performance: "Exceeding",
      location: "Multiple",
      growthRate: "+14%",
      status: "Expanding",
      established: "2008-01-15",
    },
  },
];

const retailDivisions = [
  {
    rowMeta: { rowId: 701, isExpanded: false, children: storeTeams },
    rowData: {
      organization: "Store Operations",
      employees: 155,
      budget: "$10.5M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+7%",
      status: "Stable",
      established: "2009-01-05",
    },
  },
];

const agricultureDivisions = [
  {
    rowMeta: { rowId: 801, isExpanded: false, children: farmingTeams },
    rowData: {
      organization: "Farming Operations",
      employees: 116,
      budget: "$12.8M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+4%",
      status: "Stable",
      established: "2005-01-10",
    },
  },
];

const financeDivisions = [
  {
    rowMeta: { rowId: 301, isExpanded: false, children: bankingTeams },
    rowData: {
      organization: "Banking Operations",
      employees: 121,
      budget: "$15.5M",
      performance: "Meeting",
      location: "Multiple",
      growthRate: "+3%",
      status: "Stable",
      established: "2005-01-15",
    },
  },
];

// Company level (top level)
const rows = [
  {
    rowMeta: { rowId: 1, isExpanded: true, children: softwareDivisions },
    rowData: {
      organization: "TechSolutions Inc.",
      employees: 137,
      budget: "$15.0M",
      performance: "Exceeding",
      location: "San Francisco",
      growthRate: "+9%",
      status: "Expanding",
      established: "2018-01-01",
    },
  },
  {
    rowMeta: { rowId: 2, isExpanded: false, children: healthcareDivisions },
    rowData: {
      organization: "HealthFirst Group",
      employees: 138,
      budget: "$22.4M",
      performance: "Meeting",
      location: "Boston",
      growthRate: "+8%",
      status: "Stable",
      established: "2010-01-01",
    },
  },
  {
    rowMeta: { rowId: 3, isExpanded: false, children: financeDivisions },
    rowData: {
      organization: "Global Finance",
      employees: 121,
      budget: "$15.5M",
      performance: "Meeting",
      location: "New York",
      growthRate: "+3%",
      status: "Restructuring",
      established: "2005-01-01",
    },
  },
  {
    rowMeta: { rowId: 4, isExpanded: false, children: educationDivisions },
    rowData: {
      organization: "Apex University",
      employees: 115,
      budget: "$13.4M",
      performance: "Meeting",
      location: "Cambridge",
      growthRate: "+6%",
      status: "Stable",
      established: "1992-01-01",
    },
  },
  {
    rowMeta: { rowId: 5, isExpanded: false, children: manufacturingDivisions },
    rowData: {
      organization: "Industrial Systems",
      employees: 152,
      budget: "$12.9M",
      performance: "Meeting",
      location: "Detroit",
      growthRate: "+3%",
      status: "Stable",
      established: "2001-01-01",
    },
  },
  {
    rowMeta: { rowId: 6, isExpanded: false, children: entertainmentDivisions },
    rowData: {
      organization: "Creative Media",
      employees: 154,
      budget: "$28.5M",
      performance: "Exceeding",
      location: "Los Angeles",
      growthRate: "+14%",
      status: "Expanding",
      established: "2008-01-01",
    },
  },
  {
    rowMeta: { rowId: 7, isExpanded: false, children: retailDivisions },
    rowData: {
      organization: "ShopSmart",
      employees: 155,
      budget: "$10.5M",
      performance: "Below Target",
      location: "Chicago",
      growthRate: "+2%",
      status: "Restructuring",
      established: "2009-01-01",
    },
  },
  {
    rowMeta: { rowId: 8, isExpanded: false, children: agricultureDivisions },
    rowData: {
      organization: "Green Harvest",
      employees: 116,
      budget: "$12.8M",
      performance: "Meeting",
      location: "Iowa",
      growthRate: "+4%",
      status: "Stable",
      established: "2005-01-01",
    },
  },
];

const RowGroupingDemo = () => {
  return <SimpleTable defaultHeaders={headers} rows={rows} height="400px" />;
};

export default RowGroupingDemo;
