import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with minimum and maximum widths
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "firstName", label: "First Name", width: 120, type: "string" },
  { accessor: "lastName", label: "Last Name", width: 120, type: "string" },
  { accessor: "age", label: "Age", width: 80, align: "right", type: "number" },
  { accessor: "email", label: "Email", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "location", label: "Location", width: 150, type: "string" },
];

const data = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 28,
      email: "john.doe@example.com",
      location: "New York",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 32,
      email: "jane.smith@example.com",
      location: "Los Angeles",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      age: 45,
      email: "robert.j@example.com",
      location: "Chicago",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      age: 24,
      email: "emily.brown@example.com",
      location: "Houston",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      firstName: "Michael",
      lastName: "Davis",
      age: 36,
      email: "michael.davis@example.com",
      location: "Phoenix",
    },
  },
];

const ColumnResizingDemo = () => {
  return <SimpleTable columnResizing defaultHeaders={headers} rows={data} />;
};

export default ColumnResizingDemo;
