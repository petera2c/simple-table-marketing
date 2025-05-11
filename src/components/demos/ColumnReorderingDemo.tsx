import { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";
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
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const ColumnReorderingDemo = () => {
  const [headers, setHeaders] = useState<HeaderObject[]>(initialHeaders);
  const [currentColumnOrder, setCurrentColumnOrder] = useState<string>(
    initialHeaders.map((header) => header.accessor).join(", ")
  );

  const handleColumnOrderChange = (newHeaders: HeaderObject[]) => {
    setHeaders(newHeaders);
    setCurrentColumnOrder(newHeaders.map((header) => header.accessor).join(", "));
  };

  return (
    <div className="space-y-4">
      <div className="p-2 bg-blue-100 text-blue-800 rounded-md text-sm">
        Current column order: {currentColumnOrder}
      </div>
      <SimpleTable
        columnReordering
        defaultHeaders={headers}
        rows={rows}
        onColumnOrderChange={handleColumnOrderChange}
      />
      <div className="text-sm text-gray-600 italic mt-2">
        Try dragging column headers to reorder them.
      </div>
    </div>
  );
};

export default ColumnReorderingDemo;
