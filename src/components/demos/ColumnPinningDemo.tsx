import React, { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const ColumnPinningDemo = () => {
  // Sample data with more columns to demonstrate horizontal scrolling
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
      joinDate: "2020-05-15",
      salary: 85000,
      manager: "Jane Smith",
      status: "Active",
      projects: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
      department: "Product",
      location: "New York",
      joinDate: "2019-02-20",
      salary: 92000,
      manager: "Robert Johnson",
      status: "Active",
      projects: 6,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      department: "Operations",
      location: "San Francisco",
      joinDate: "2018-11-10",
      salary: 120000,
      manager: "Michael Chen",
      status: "Active",
      projects: 8,
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Developer",
      department: "Engineering",
      location: "Remote",
      joinDate: "2021-03-05",
      salary: 78000,
      manager: "John Doe",
      status: "Active",
      projects: 3,
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Marketing",
      department: "Sales",
      location: "Chicago",
      joinDate: "2020-08-12",
      salary: 82000,
      manager: "Lisa Park",
      status: "Active",
      projects: 5,
    },
  ];

  // Define all headers with pinned status
  const [headers, setHeaders] = useState<HeaderObject[]>([
    { accessor: "id", label: "ID", width: 80, pinned: "left" },
    { accessor: "name", label: "Name", width: 180, pinned: "left" },
    { accessor: "email", label: "Email", width: 220 },
    { accessor: "role", label: "Role", width: 150 },
    { accessor: "department", label: "Department", width: 150 },
    { accessor: "location", label: "Location", width: 150 },
    { accessor: "joinDate", label: "Join Date", width: 120 },
    { accessor: "salary", label: "Salary", width: 120, align: "right" },
    { accessor: "manager", label: "Manager", width: 180 },
    { accessor: "status", label: "Status", width: 120 },
    { accessor: "projects", label: "Projects", width: 120, align: "right", pinned: "right" },
  ]);

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  // Toggle pin status
  const togglePinStatus = (accessor: string) => {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) => {
        if (header.accessor === accessor) {
          if (!header.pinned) return { ...header, pinned: "left" };
          if (header.pinned === "left") return { ...header, pinned: "right" };
          return { ...header, pinned: undefined };
        }
        return header;
      })
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Pinning Demo</h2>
        <p className="text-gray-700 mb-4">
          Pin columns to the left or right side of the table. This is useful for tables with many columns when you need
          to keep certain columns always visible while scrolling horizontally.
        </p>

        {/* Column pinning controls */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Click to toggle pin status: Not Pinned → Left → Right → Not Pinned
          </p>
          <div className="flex flex-wrap gap-2">
            {headers.map((header) => (
              <button
                key={header.accessor}
                onClick={() => togglePinStatus(header.accessor)}
                className={`px-3 py-1 text-sm rounded ${
                  header.pinned === "left"
                    ? "bg-blue-500 text-white"
                    : header.pinned === "right"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {header.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ maxWidth: "100%" }}>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <SimpleTable defaultHeaders={headers} rows={rows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnPinningDemo;
