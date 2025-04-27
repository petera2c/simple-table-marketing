import { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers for the demo
const initialHeaders: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "firstName", label: "First Name", width: 120, type: "string" },
  { accessor: "lastName", label: "Last Name", width: 120, type: "string" },
  { accessor: "age", label: "Age", width: 80, align: "right", type: "number" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "location", disableReorder: true, label: "Location", width: 150, type: "string" },
];

const data = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 28,
      email: "john.doe@example.com",
      location: "New York",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 32,
      email: "jane.smith@example.com",
      location: "Los Angeles",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      age: 45,
      email: "robert.j@example.com",
      location: "Chicago",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      age: 24,
      email: "emily.brown@example.com",
      location: "Houston",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      firstName: "Michael",
      lastName: "Davis",
      age: 36,
      email: "michael.davis@example.com",
      location: "Phoenix",
    },
  },
];

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
        rows={data}
        onColumnOrderChange={handleColumnOrderChange}
      />
      <div className="text-sm text-gray-600 italic mt-2">
        Try dragging column headers to reorder them.
      </div>
    </div>
  );
};

export default ColumnReorderingDemo;
