import { useState } from "react";
import { SimpleTable, HeaderObject, Row } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", width: 150, type: "string" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "description", label: "Description", width: 250, type: "string" },
  { accessor: "status", label: "Status", width: 120, type: "string" },
];

// Sample initial data
const initialData: Row[] = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      description: "A short description.",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      description:
        "This is a medium length description that spans a few lines when displayed in the table cell.",
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      name: "Robert Williams",
      email: "robert.williams@example.com",
      description:
        "A very long description that will require more vertical space to display properly. This text should cause the row to expand significantly when variable row heights are enabled.",
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      description: "Another short description.",
      status: "Pending",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      description:
        "This row has a medium length description that takes up a moderate amount of space in the table.",
      status: "Active",
    },
  },
];

const RowHeightDemo = () => {
  const [data] = useState(initialData);

  return <SimpleTable defaultHeaders={headers} rows={data} rowHeight={32} />;
};

export default RowHeightDemo;
