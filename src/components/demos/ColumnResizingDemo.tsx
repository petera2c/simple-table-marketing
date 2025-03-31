import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const ColumnResizingDemo = () => {
  const data = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28, email: "john.doe@example.com", location: "New York" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 32, email: "jane.smith@example.com", location: "Los Angeles" },
    { id: 3, firstName: "Robert", lastName: "Johnson", age: 45, email: "robert.j@example.com", location: "Chicago" },
    { id: 4, firstName: "Emily", lastName: "Brown", age: 24, email: "emily.brown@example.com", location: "Houston" },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Davis",
      age: 36,
      email: "michael.davis@example.com",
      location: "Phoenix",
    },
  ];

  // Define headers with minimum and maximum widths
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 60 },
    { accessor: "firstName", label: "First Name", width: 120 },
    { accessor: "lastName", label: "Last Name", width: 120 },
    { accessor: "age", label: "Age", width: 80, align: "right" },
    { accessor: "email", label: "Email", width: 220 },
    { accessor: "location", label: "Location", width: 150 },
  ];

  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Resizing Demo</h2>
        <p className="text-gray-700 mb-6">
          Try dragging the dividers between column headers to resize columns. Notice how the table maintains its layout
          while allowing each column to be customized.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default ColumnResizingDemo;
