import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Initial headers with different alignments
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, align: "left", type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", align: "center", type: "string" },
  { accessor: "score", label: "Score", width: 120, align: "right", type: "number" },
  { accessor: "rating", label: "Rating", width: 120, align: "right", type: "number" },
  { accessor: "status", label: "Status", width: 120, align: "left", type: "string" },
];

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    score: 92,
    rating: 4.8,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    score: 88,
    rating: 4.5,
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    score: 95,
    rating: 4.9,
    status: "Active",
  },
  {
    id: 4,
    name: "Alice Williams",
    score: 78,
    rating: 3.9,
    status: "On Leave",
  },
  {
    id: 5,
    name: "Charlie Brown",
    score: 85,
    rating: 4.2,
    status: "Active",
  },
  {
    id: 6,
    name: "David Lee",
    score: 91,
    rating: 4.7,
    status: "Active",
  },
  {
    id: 7,
    name: "Eve Green",
    score: 89,
    rating: 4.6,
    status: "Active",
  },
  {
    id: 8,
    name: "Frank White",
    score: 82,
    rating: 4.1,
    status: "Inactive",
  },
  {
    id: 9,
    name: "Grace Black",
    score: 94,
    rating: 4.8,
    status: "Active",
  },
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const ColumnAlignmentDemo = ({ height = "400px" }: { height?: string }) => {
  // Change column alignment
  const onColumnOrderChange = (newHeaders: HeaderObject[]) => {
    // Call api to change alignment in the database
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      onColumnOrderChange={onColumnOrderChange}
      rows={rows}
      height={height}
    />
  );
};

export default ColumnAlignmentDemo;
