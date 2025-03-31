import React, { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const ColumnVisibilityDemo = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
      department: "Product",
      location: "New York",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      department: "Operations",
      location: "San Francisco",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Marketing",
      department: "Sales",
      location: "Chicago",
    },
  ];

  // Define all possible headers
  const allHeaders: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 60 },
    { accessor: "name", label: "Name", width: 180 },
    { accessor: "email", label: "Email", width: 220 },
    { accessor: "role", label: "Role", width: 150 },
    { accessor: "department", label: "Department", width: 150 },
    { accessor: "location", label: "Location", width: 150 },
  ];

  // State to track visible columns
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    id: true,
    name: true,
    email: true,
    role: true,
    department: true,
    location: true,
  });

  // Filter headers based on visibility
  const visibleHeaders = allHeaders.filter((header) => visibleColumns[header.accessor]);

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  // Toggle column visibility
  const toggleColumnVisibility = (accessor: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [accessor]: !prev[accessor],
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Visibility Demo</h2>
        <p className="text-gray-700 mb-4">Toggle the visibility of columns to customize your table view.</p>

        {/* Column visibility controls */}
        <div className="mb-4 flex flex-wrap gap-2">
          {allHeaders.map((header) => (
            <button
              key={header.accessor}
              onClick={() => toggleColumnVisibility(header.accessor)}
              className={`px-3 py-1 text-sm rounded ${
                visibleColumns[header.accessor] ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {header.label}
            </button>
          ))}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={visibleHeaders} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default ColumnVisibilityDemo;
