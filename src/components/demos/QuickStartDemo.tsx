import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const QuickStartDemo = () => {
  // Sample data for a quick start demo
  const data = [
    { id: 1, name: "John Doe", age: 28, role: "Developer" },
    { id: 2, name: "Jane Smith", age: 32, role: "Designer" },
    { id: 3, name: "Bob Johnson", age: 45, role: "Manager" },
    { id: 4, name: "Alice Williams", age: 24, role: "Intern" },
    { id: 5, name: "Charlie Brown", age: 37, role: "DevOps" },
  ];

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80 },
    { accessor: "name", label: "Name", width: 200 },
    { accessor: "age", label: "Age", width: 100 },
    { accessor: "role", label: "Role", width: 150 },
  ];

  // Map data to rows format expected by SimpleTable
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Start Demo</h2>
        <p className="text-gray-700 mb-6">A minimal implementation of SimpleTable with basic data and headers.</p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default QuickStartDemo;
