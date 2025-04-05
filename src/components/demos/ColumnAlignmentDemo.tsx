import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Initial headers with different alignments
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, align: "left" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", align: "center" },
  { accessor: "score", label: "Score", width: 120, align: "right" },
  { accessor: "rating", label: "Rating", width: 120, align: "right" },
  { accessor: "status", label: "Status", width: 120, align: "left" },
];

// Sample data
const data = [
  { rowMeta: { rowId: 1 }, rowData: { id: 1, name: "John Doe", score: 85, rating: 4.2, status: "Active" } },
  { rowMeta: { rowId: 2 }, rowData: { id: 2, name: "Jane Smith", score: 92, rating: 4.8, status: "Active" } },
  { rowMeta: { rowId: 3 }, rowData: { id: 3, name: "Bob Johnson", score: 78, rating: 3.9, status: "Inactive" } },
  { rowMeta: { rowId: 4 }, rowData: { id: 4, name: "Alice Williams", score: 95, rating: 4.9, status: "Active" } },
  { rowMeta: { rowId: 5 }, rowData: { id: 5, name: "Charlie Brown", score: 82, rating: 4.1, status: "Active" } },
];

const ColumnAlignmentDemo = () => {
  // Change column alignment
  // const onColumnOrderChange = (accessor: string, alignment: AlignmentType) => {
  //   // Call api to change alignment in the database
  // };

  return (
    <SimpleTable
      defaultHeaders={headers}
      // onColumnOrderChange={onColumnOrderChange}
      rows={data}
    />
  );
};

export default ColumnAlignmentDemo;
