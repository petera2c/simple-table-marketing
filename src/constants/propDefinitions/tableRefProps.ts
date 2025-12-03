import type { PropInfo } from "./types";

export const TABLE_REF_TYPE_METHODS: PropInfo[] = [
  {
    key: "exportToCSV",
    name: "exportToCSV",
    required: false,
    description:
      "Exports the current table data to a CSV file. Respects active filters and sorting. Optionally accepts a props object to customize the filename.",
    type: "(props?: ExportToCSVProps) => void",
    link: "#export-to-csv-props",
    example: `// Export with default filename
tableRef.current?.exportToCSV();

// Export with custom filename
tableRef.current?.exportToCSV({ 
  filename: "my-data.csv" 
});

// Dynamic filename
const date = new Date().toISOString().split('T')[0];
tableRef.current?.exportToCSV({ 
  filename: \`report-\${date}.csv\` 
});`,
  },
  {
    key: "updateData",
    name: "updateData",
    required: false,
    description:
      "Programmatically update a specific cell value in the table. Useful for live updates and real-time data changes. Triggers cellUpdateFlash animation if enabled.",
    type: "(params: { accessor: Accessor; rowIndex: number; newValue: CellValue }) => void",
    example: `// Update a single cell
tableRef.current?.updateData({
  accessor: "price",
  rowIndex: 2,
  newValue: 29.99
});

// Update based on condition
if (stockLow) {
  tableRef.current?.updateData({
    accessor: "status",
    rowIndex: 5,
    newValue: "Low Stock"
  });
}`,
  },
];

export const EXPORT_TO_CSV_PROPS: PropInfo[] = [
  {
    key: "filename",
    name: "filename",
    required: false,
    description:
      "Custom filename for the exported CSV file. Defaults to 'table-export.csv' if not provided.",
    type: "string",
    example: `{ filename: "sales-report-2024.csv" }`,
  },
];
