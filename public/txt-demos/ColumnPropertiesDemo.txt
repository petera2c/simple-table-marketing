import { Tag } from "antd";
import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with various properties
const headers: HeaderObject[] = [
  {
    accessor: "id",
    label: "ID",
    width: 80,
    isSortable: true,
    expandable: true,
    pinned: "left",
    type: "number",
  },
  {
    accessor: "name",
    label: "Name",
    minWidth: 100,
    width: "1fr",
    isSortable: true,
    isEditable: true,
    type: "string",
  },
  {
    accessor: "email",
    label: "Email Address",
    width: 250,
    isSortable: true,
    type: "string",
  },
  {
    accessor: "visits",
    label: "Visit Count",
    width: 120,
    isSortable: true,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => `${row.rowData.visits} visits`,
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    isSortable: true,
    type: "string",
    cellRenderer: ({ row }) => {
      const status = row.rowData.status as string;
      let color = "gray";
      if (status === "Active") color = "green";
      if (status === "Inactive") color = "red";
      if (status === "Pending") color = "orange";

      return <Tag color={color}>{status}</Tag>;
    },
  },
];

// Sample data
const data = [
  {
    rowMeta: { rowId: 1, isExpanded: false },
    rowData: { id: 1, name: "John Doe", email: "john@example.com", visits: 23, status: "Active" },
  },
  {
    rowMeta: { rowId: 2, isExpanded: false },
    rowData: { id: 2, name: "Jane Smith", email: "jane@example.com", visits: 45, status: "Active" },
  },
  {
    rowMeta: { rowId: 3, isExpanded: false },
    rowData: {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      visits: 12,
      status: "Inactive",
    },
  },
  {
    rowMeta: { rowId: 4, isExpanded: false },
    rowData: {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      visits: 34,
      status: "Active",
    },
  },
  {
    rowMeta: { rowId: 5, isExpanded: false },
    rowData: {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      visits: 5,
      status: "Pending",
    },
  },
  {
    rowMeta: { rowId: 6, isExpanded: false },
    rowData: {
      id: 6,
      name: "David Davis",
      email: "david@example.com",
      visits: 67,
      status: "Inactive",
    },
  },
];

const ColumnPropertiesDemo = () => {
  return <SimpleTable defaultHeaders={headers} editColumns rows={data} height="auto" />;
};

export default ColumnPropertiesDemo;
