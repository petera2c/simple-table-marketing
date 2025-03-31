import { useState } from "react";
import { SimpleTable, HeaderObject, CellChangeProps } from "simple-table-core";

// Sample initial data
const initialData = [
  {
    rowMeta: { rowId: 1 },
    rowData: { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", role: "Developer" },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", role: "Designer" },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", role: "Manager" },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: { id: 4, firstName: "Alice", lastName: "Williams", email: "alice@example.com", role: "Developer" },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: { id: 5, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", role: "Marketing" },
  },
];

// Define headers with editable property
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, isEditable: false },
  { accessor: "firstName", label: "First Name", width: 150, isEditable: true },
  { accessor: "lastName", label: "Last Name", width: 150, isEditable: true },
  { accessor: "email", label: "Email", width: 220, isEditable: true },
  { accessor: "role", label: "Role", width: 150, isEditable: true },
];

const CellEditingDemo = () => {
  // State to track the data
  const [data, setData] = useState(initialData);

  // Handle cell edit
  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => (item.rowMeta.rowId === row.rowMeta.rowId ? { ...item, [accessor]: newValue } : item))
    );
  };

  return <SimpleTable defaultHeaders={headers} rows={data} onCellEdit={handleCellEdit} />;
};

export default CellEditingDemo;
