import { Tag } from "antd";
import { SimpleTable, HeaderObject } from "simple-table-core";

// Sample data
const data = [
  { id: 1, name: "John Doe", email: "john@example.com", visits: 23, status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", visits: 45, status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", visits: 12, status: "Inactive" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", visits: 34, status: "Active" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", visits: 5, status: "Pending" },
  { id: 6, name: "David Davis", email: "david@example.com", visits: 67, status: "Inactive" },
];

// Define headers with various properties
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, isSortable: true, expandable: true, pinned: "left" },
  { accessor: "name", label: "Name", width: 180, isSortable: true, isEditable: true },
  {
    accessor: "email",
    label: "Email Address",
    width: 250,
    isSortable: true,
  },
  {
    accessor: "visits",
    label: "Visit Count",
    width: 120,
    isSortable: true,
    align: "right",
    cellRenderer: ({ row }) => `${row.rowData.visits} visits`,
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    isSortable: true,
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

// Map data to rows format
const rows = data.map((item) => ({
  rowMeta: { rowId: item.id, isExpanded: false },
  rowData: item,
}));

const ColumnPropertiesDemo = () => {
  return <SimpleTable defaultHeaders={headers} editColumns rows={rows} height="auto" />;
};

export default ColumnPropertiesDemo;
