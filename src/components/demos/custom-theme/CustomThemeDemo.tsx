import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";
import "./CustomTheme.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "department", label: "Department", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "status", label: "Status", width: 120, type: "string" },
  {
    accessor: "number",
    label: "Number",
    width: 150,
    type: "number",
    cellRenderer: ({ row }) => {
      const number = row.number?.toString() ?? "";
      const areaCode = number.slice(0, 3);
      const prefix = number.slice(3, 6);
      const lineNumber = number.slice(6);
      return (
        <div className="text-blue-500">
          ({areaCode}) {prefix}-{lineNumber}
        </div>
      );
    },
  },
];

// Sample data
const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    status: "Active",
    number: 4155551234,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Design",
    status: "Active",
    number: 2125556789,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    department: "Marketing",
    status: "Inactive",
    number: 3105554321,
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    department: "Engineering",
    status: "Active",
    number: 6175559876,
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    department: "Sales",
    status: "Active",
    number: 2065553456,
  },
  {
    id: 6,
    name: "Eve Green",
    email: "eve@example.com",
    department: "Engineering",
    status: "Active",
    number: 5125557890,
  },
  {
    id: 7,
    name: "Frank White",
    email: "frank@example.com",
    department: "Sales",
    status: "Active",
    number: 3035552345,
  },
  {
    id: 8,
    name: "Grace Black",
    email: "grace@example.com",
    department: "Engineering",
    status: "Active",
    number: 4045558765,
  },
  {
    id: 9,
    name: "Henry Blue",
    email: "henry@example.com",
    department: "Engineering",
    status: "Active",
    number: 3125556543,
  },
];

const CustomThemeDemo = ({ height = "400px" }: { height?: string }) => {
  return (
    <div className="custom-theme-container">
      <SimpleTable
        columnResizing
        defaultHeaders={headers}
        height={height}
        rowIdAccessor="id"
        rows={data}
        selectableCells
        selectableColumns
        theme="custom"
      />
    </div>
  );
};

export default CustomThemeDemo;
