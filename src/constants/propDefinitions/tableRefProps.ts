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
  {
    key: "setHeaderRename",
    name: "setHeaderRename",
    required: false,
    description:
      "Programmatically rename a column header. Useful for dynamic table configurations and internationalization.",
    type: "(params: { accessor: Accessor; newLabel: string }) => void",
    example: `// Rename a column header
tableRef.current?.setHeaderRename({
  accessor: "firstName",
  newLabel: "First Name (Updated)"
});`,
  },
  {
    key: "getVisibleRows",
    name: "getVisibleRows",
    required: false,
    description:
      "Returns the currently visible rows in the table. When pagination is enabled, this returns only the rows on the current page. When filters are applied, returns only filtered rows. This is useful for getting a snapshot of what the user is currently viewing.",
    type: "() => TableRow[]",
    example: `// Get visible rows
const visibleRows = tableRef.current?.getVisibleRows();
console.log(\`Showing \${visibleRows.length} rows\`);

// With pagination
const currentPageRows = tableRef.current?.getVisibleRows();
console.log(\`Page has \${currentPageRows.length} rows\`);`,
  },
  {
    key: "getAllRows",
    name: "getAllRows",
    required: false,
    description:
      "Returns all rows in the table as TableRow objects, flattened and including nested/grouped rows. Each TableRow contains the raw row data plus metadata like depth, position, and rowPath. Unlike getVisibleRows, this returns the complete dataset regardless of pagination, filters, or grouping state. Perfect for exporting complete data, analytics, or batch operations.",
    type: "() => TableRow[]",
    example: `// Get all rows including nested data
const allRows = tableRef.current?.getAllRows();
console.log(\`Total rows: \${allRows.length}\`);

// Access row data and metadata
allRows.forEach(tableRow => {
  console.log(\`Row at depth \${tableRow.depth}:\`, tableRow.row);
  console.log(\`Position: \${tableRow.position}\`);
  if (tableRow.rowPath) {
    console.log(\`Path: \${tableRow.rowPath.join(' > ')}\`);
  }
});

// Calculate totals from row data
const totalRevenue = allRows.reduce((sum, tableRow) => 
  sum + (tableRow.row.revenue || 0), 0
);

// Export raw data
const rawData = allRows.map(tableRow => tableRow.row);
exportToJSON(rawData);`,
  },
  {
    key: "getHeaders",
    name: "getHeaders",
    required: false,
    description:
      "Returns the table's current header/column definitions. Includes all column configuration such as accessors, labels, types, and formatting options. Useful for dynamic table manipulation, export configurations, or building custom UI controls.",
    type: "() => HeaderObject[]",
    example: `// Get current headers
const headers = tableRef.current?.getHeaders();
console.log(\`Table has \${headers.length} columns\`);

// Export with custom mapping
const headers = tableRef.current?.getHeaders();
const columnNames = headers.map(h => h.label);
console.log("Columns:", columnNames);

// Validate column configuration
const headers = tableRef.current?.getHeaders();
const sortableColumns = headers.filter(h => h.isSortable);`,
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
