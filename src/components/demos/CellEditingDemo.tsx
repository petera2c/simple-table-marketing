import React, { useState } from "react";
import { SimpleTable, HeaderObject, Row } from "simple-table-core";

const CellEditingDemo = () => {
  // Sample initial data
  const initialData = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", role: "Developer" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", role: "Designer" },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", role: "Manager" },
    { id: 4, firstName: "Alice", lastName: "Williams", email: "alice@example.com", role: "Developer" },
    { id: 5, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", role: "Marketing" },
  ];

  // State to track the data
  const [data, setData] = useState(initialData);

  // Define headers with editable property
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80, isEditable: false },
    { accessor: "firstName", label: "First Name", width: 150, isEditable: true },
    { accessor: "lastName", label: "Last Name", width: 150, isEditable: true },
    { accessor: "email", label: "Email", width: 220, isEditable: true },
    { accessor: "role", label: "Role", width: 150, isEditable: true },
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  // Handle cell edit
  const handleCellEdit = (rowId: number | string, accessor: string, value: any) => {
    setData((prevData) => prevData.map((item) => (item.id === rowId ? { ...item, [accessor]: value } : item)));
  };

  // Reset data to initial state
  const resetData = () => {
    setData(initialData);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Cell Editing Demo</h2>
          <button
            onClick={resetData}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors text-sm"
          >
            Reset Data
          </button>
        </div>

        <p className="text-gray-700 mb-6">
          Double-click on any editable cell to modify its content. Press Enter to save changes or Escape to cancel.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} onCellEdit={handleCellEdit} />
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Current Data:</h3>
          <pre className="text-xs text-gray-600 overflow-auto max-h-40">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default CellEditingDemo;
