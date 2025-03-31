import { SimpleTable, HeaderObject } from "simple-table-core";

// Sample data
const data = [
  { id: 1, name: "John Doe", score: 85, rating: 4.2, status: "Active" },
  { id: 2, name: "Jane Smith", score: 92, rating: 4.8, status: "Active" },
  { id: 3, name: "Bob Johnson", score: 78, rating: 3.9, status: "Inactive" },
  { id: 4, name: "Alice Williams", score: 95, rating: 4.9, status: "Active" },
  { id: 5, name: "Charlie Brown", score: 82, rating: 4.1, status: "Active" },
];

// Initial headers with different alignments
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, align: "left" },
  { accessor: "name", label: "Name", width: 180, align: "center" },
  { accessor: "score", label: "Score", width: 120, align: "right" },
  { accessor: "rating", label: "Rating", width: 120, align: "right" },
  { accessor: "status", label: "Status", width: 120, align: "left" },
];
const ColumnAlignmentDemo = () => {
  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  // Change column alignment
  // const onColumnOrderChange = (accessor: string, alignment: AlignmentType) => {
  //   // Call api to change alignment in the database
  // };

  return (
    <SimpleTable
      defaultHeaders={headers}
      // onColumnOrderChange={onColumnOrderChange}
      rows={rows}
    />
  );
};

export default ColumnAlignmentDemo;
