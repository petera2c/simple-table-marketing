import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers for the demo
const initialHeaders: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 120, type: "string" },
  { accessor: "age", label: "Age", width: 80, align: "right", type: "number" },
  { accessor: "role", label: "Role", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "department", disableReorder: true, label: "Department", width: 150, type: "string" },
];

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    role: "Developer",
    department: "Engineering",
    startDate: "2018-06-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    role: "Designer",
    department: "Design",
    startDate: "2019-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 45,
    role: "Manager",
    department: "Management",
    startDate: "2017-05-10",
  },
  {
    id: 4,
    name: "Alice Williams",
    age: 24,
    role: "Intern",
    department: "Internship",
    startDate: "2018-09-01",
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 37,
    role: "DevOps",
    department: "Engineering",
    startDate: "2018-03-15",
  },
  {
    id: 6,
    name: "David Lee",
    age: 31,
    role: "QA Engineer",
    department: "Quality Assurance",
    startDate: "2018-07-22",
  },
  {
    id: 7,
    name: "Eve Green",
    age: 29,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2018-04-18",
  },
  {
    id: 8,
    name: "Frank White",
    age: 34,
    role: "Sales Manager",
    department: "Sales",
    startDate: "2017-11-05",
  },
  {
    id: 9,
    name: "Grace Black",
    age: 27,
    role: "HR Coordinator",
    department: "Human Resources",
    startDate: "2019-03-25",
  },
  {
    id: 10,
    name: "Henry Blue",
    age: 35,
    role: "Backend Developer",
    department: "Engineering",
    startDate: "2019-08-12",
  },
  {
    id: 11,
    name: "Ivy Red",
    age: 26,
    role: "UX Designer",
    department: "Design",
    startDate: "2020-11-03",
  },
  {
    id: 12,
    name: "Jack Silver",
    age: 41,
    role: "Technical Lead",
    department: "Engineering",
    startDate: "2016-02-28",
  },
];

const ColumnReorderingDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  const [headers, setHeaders] = useState<HeaderObject[]>(initialHeaders);
  const [, setCurrentColumnOrder] = useState<string>(
    initialHeaders.map((header) => header.accessor).join(", ")
  );

  const handleColumnOrderChange = (newHeaders: HeaderObject[]) => {
    setHeaders(newHeaders);
    setCurrentColumnOrder(newHeaders.map((header) => header.accessor).join(", "));
  };

  return (
    <SimpleTable
      columnReordering
      defaultHeaders={headers}
      height={height}
      rowIdAccessor="id"
      rows={EMPLOYEE_DATA}
      onColumnOrderChange={handleColumnOrderChange}
      theme={theme}
    />
  );
};

export default ColumnReorderingDemo;
