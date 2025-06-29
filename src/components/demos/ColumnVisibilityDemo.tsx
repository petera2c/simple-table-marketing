import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define all possible headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", hide: true, type: "string" },
  { accessor: "role", label: "Role", width: 150, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
];

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "Valentino Rosso",
    age: 35,
    role: "Creative Director",
    department: "Design",
    startDate: "2017-04-12",
  },
  {
    id: 2,
    name: "Coco Delacroix",
    age: 28,
    role: "Fashion Designer",
    department: "Design",
    startDate: "2020-08-15",
  },
  {
    id: 3,
    name: "Armando Silva",
    age: 42,
    role: "Studio Manager",
    department: "Operations",
    startDate: "2016-02-08",
  },
  {
    id: 4,
    name: "Chanel Kumar",
    age: 25,
    role: "Pattern Maker",
    department: "Production",
    startDate: "2022-06-20",
  },
  {
    id: 5,
    name: "Versace Chen",
    age: 31,
    role: "Textile Designer",
    department: "Materials",
    startDate: "2019-11-03",
  },
  {
    id: 6,
    name: "Gucci Hassan",
    age: 29,
    role: "Sample Coordinator",
    department: "Production",
    startDate: "2021-03-18",
  },
  {
    id: 7,
    name: "Prada Williams",
    age: 33,
    role: "Fashion Stylist",
    department: "Styling",
    startDate: "2020-01-22",
  },
  {
    id: 8,
    name: "Dior Martinez",
    age: 27,
    role: "Technical Designer",
    department: "Technical",
    startDate: "2021-09-14",
  },
  {
    id: 9,
    name: "Hermès Okafor",
    age: 30,
    role: "Color Specialist",
    department: "Design",
    startDate: "2020-05-07",
  },
  {
    id: 10,
    name: "Balenciaga Kim",
    age: 32,
    role: "Fit Specialist",
    department: "Production",
    startDate: "2019-07-11",
  },
  {
    id: 11,
    name: "Yves Thompson",
    age: 26,
    role: "Trend Researcher",
    department: "Research",
    startDate: "2022-02-28",
  },
  {
    id: 12,
    name: "Givenchy Nakamura",
    age: 38,
    role: "Production Manager",
    department: "Production",
    startDate: "2018-10-05",
  },
];

const ColumnVisibilityDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      editColumns
      editColumnsInitOpen
      rowIdAccessor="id"
      rows={EMPLOYEE_DATA}
      height={height}
      theme={theme}
    />
  );
};

export default ColumnVisibilityDemo;
