import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const ColumnPropertiesDemo = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", visits: 23, status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", visits: 45, status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", visits: 12, status: "Inactive" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", visits: 34, status: "Active" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", visits: 5, status: "Pending" },
  ];

  // Define headers with various properties
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80, isSortable: true },
    { accessor: "name", label: "Name", width: 180, isSortable: true, isEditable: true },
    {
      accessor: "email",
      label: "Email Address",
      width: 250,
      isSortable: false,
    },
    {
      accessor: "visits",
      label: "Visit Count",
      width: 120,
      isSortable: true,
      align: "right",
      cellRenderer: (row) => `${row.rowData.visits} visits`,
    },
    {
      accessor: "status",
      label: "Status",
      width: 120,
      isSortable: true,
      cellRenderer: (row) => {
        const status = row.rowData.status as string;
        let color = "gray";
        if (status === "Active") color = "green";
        if (status === "Inactive") color = "red";
        if (status === "Pending") color = "orange";

        return <span className={`px-2 py-1 rounded-full text-xs text-white bg-${color}-500`}>{status}</span>;
      },
    },
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Properties Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo showcases different column properties including width, alignment, sortable, editable, and custom
          cell rendering.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default ColumnPropertiesDemo;
