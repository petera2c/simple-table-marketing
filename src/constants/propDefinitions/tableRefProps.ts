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
      "Programmatically triggers the header rename mode for a specific column. Sets the header cell to editing mode, allowing the user to rename it. The header must have enableHeaderRename enabled.",
    type: "(params: { accessor: Accessor }) => void",
    example: `// Trigger header rename mode
tableRef.current?.setHeaderRename({
  accessor: "firstName"
});

// Trigger rename from a button
const handleRenameClick = () => {
  tableRef.current?.setHeaderRename({
    accessor: "status"
  });
};`,
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
  {
    key: "getSortState",
    name: "getSortState",
    required: false,
    description:
      "Returns the current sort state of the table. Returns null if no sorting is applied, or a SortColumn object containing the sorted column and direction. Useful for persisting table state, synchronizing with external state management, or implementing custom sort UI.",
    type: "() => SortColumn | null",
    link: "#union-types",
    example: `// Get current sort state
const sortState = tableRef.current?.getSortState();
if (sortState) {
  console.log(\`Sorted by: \${sortState.key.accessor}\`);
  console.log(\`Direction: \${sortState.direction}\`);
} else {
  console.log("No sorting applied");
}

// Save sort state to localStorage
const sortState = tableRef.current?.getSortState();
localStorage.setItem("tableSortState", JSON.stringify(sortState));

// Check if specific column is sorted
const sortState = tableRef.current?.getSortState();
const isSortedByName = sortState?.key.accessor === "name";`,
  },
  {
    key: "applySortState",
    name: "applySortState",
    required: false,
    description:
      "Programmatically applies a sort state to the table. Pass a column accessor and optional direction to sort, or undefined to clear sorting. If direction is omitted, the sort cycles through: asc → desc → removed. This method is async and returns a Promise. Perfect for implementing custom sort controls or coordinating sorting with external data sources.",
    type: "(props?: { accessor: Accessor; direction?: SortDirection }) => Promise<void>",
    link: "#union-types",
    example: `// Cycle through sort states (asc → desc → removed)
await tableRef.current?.applySortState({ accessor: "name" });

// Apply sort by price descending (explicit)
await tableRef.current?.applySortState({ accessor: "price", direction: "desc" });

// Apply sort by age ascending (explicit)
await tableRef.current?.applySortState({ accessor: "age", direction: "asc" });

// Clear all sorting
await tableRef.current?.applySortState();

// Dynamic sorting based on user selection
const handleSort = async (column: string, descending: boolean) => {
  await tableRef.current?.applySortState({
    accessor: column,
    direction: descending ? "desc" : "asc",
  });
};`,
  },
  {
    key: "getFilterState",
    name: "getFilterState",
    required: false,
    description:
      "Returns the current filter state of the table as a TableFilterState object. The object contains all active filters keyed by unique filter IDs. Each filter includes the column accessor, operator, and values. Useful for debugging, persisting filter state, or building custom filter UI.",
    type: "() => TableFilterState",
    link: "#table-filter-state",
    example: `// Get current filters
const filters = tableRef.current?.getFilterState();
console.log(\`Active filters: \${Object.keys(filters).length}\`);

// Log all filter details
const filters = tableRef.current?.getFilterState();
Object.entries(filters).forEach(([id, filter]) => {
  console.log(\`Filter \${id}: \${filter.accessor} \${filter.operator} \${filter.value}\`);
});

// Save filters to session storage
const filters = tableRef.current?.getFilterState();
sessionStorage.setItem("tableFilters", JSON.stringify(filters));

// Check if specific column is filtered
const filters = tableRef.current?.getFilterState();
const hasNameFilter = Object.values(filters).some(f => f.accessor === "name");`,
  },
  {
    key: "applyFilter",
    name: "applyFilter",
    required: false,
    description:
      "Programmatically applies a filter to a specific column. Accepts a FilterCondition object specifying the column accessor, filter operator, and value(s). This method is async and returns a Promise. Supports all filter operators including equals, contains, greaterThan, between, and more. Perfect for implementing custom filter UI, applying saved filters, or creating filter presets.",
    type: "(filter: FilterCondition) => Promise<void>",
    link: "#filter-condition",
    example: `// Filter by exact value
await tableRef.current?.applyFilter({
  accessor: "status",
  operator: "equals",
  value: "active"
});

// Filter by text contains
await tableRef.current?.applyFilter({
  accessor: "name",
  operator: "contains",
  value: "John"
});

// Filter by numeric range
await tableRef.current?.applyFilter({
  accessor: "age",
  operator: "between",
  values: [18, 65]
});

// Filter by multiple values (in operator)
await tableRef.current?.applyFilter({
  accessor: "department",
  operator: "in",
  values: ["Sales", "Marketing", "Support"]
});`,
  },
  {
    key: "clearFilter",
    name: "clearFilter",
    required: false,
    description:
      "Clears the filter for a specific column identified by its accessor. This method is async and returns a Promise. Only removes filters applied to the specified column, leaving other column filters intact. Useful for implementing 'clear filter' buttons on individual columns or resetting specific filters programmatically.",
    type: "(accessor: Accessor) => Promise<void>",
    link: "#union-types",
    example: `// Clear filter on name column
await tableRef.current?.clearFilter("name");

// Clear filter on nested accessor
await tableRef.current?.clearFilter("user.profile.name");

// Clear filter and notify user
await tableRef.current?.clearFilter("status");
console.log("Status filter cleared");`,
  },
  {
    key: "clearAllFilters",
    name: "clearAllFilters",
    required: false,
    description:
      "Clears all active filters from the table at once. This method is async and returns a Promise. Resets the table to show all data without any filtering applied. Perfect for 'reset all filters' buttons or starting fresh with filter state.",
    type: "() => Promise<void>",
    example: `// Clear all filters
await tableRef.current?.clearAllFilters();

// Clear filters and notify
await tableRef.current?.clearAllFilters();
console.log("All filters cleared");

// Clear filters before applying new ones
await tableRef.current?.clearAllFilters();
await tableRef.current?.applyFilter({
  accessor: "status",
  operator: "equals",
  value: "active"
});`,
  },
  {
    key: "getCurrentPage",
    name: "getCurrentPage",
    required: false,
    description:
      "Returns the current page number when pagination is enabled. Page numbers are 1-indexed (first page is 1, not 0). Returns the current page regardless of whether pagination is client-side or server-side. Useful for tracking user navigation, syncing with URL parameters, or building custom pagination UI.",
    type: "() => number",
    example: `// Get current page
const currentPage = tableRef.current?.getCurrentPage();
console.log(\`Currently on page \${currentPage}\`);

// Sync with URL
const page = tableRef.current?.getCurrentPage();
window.history.pushState({}, '', \`?page=\${page}\`);

// Save page state
const page = tableRef.current?.getCurrentPage();
localStorage.setItem("lastPage", page.toString());`,
  },
  {
    key: "setPage",
    name: "setPage",
    required: false,
    description:
      "Programmatically navigates to a specific page when pagination is enabled. Accepts a 1-indexed page number (first page is 1). Works with both client-side and server-side pagination. If the page number is out of range, it will be clamped to valid bounds. Perfect for implementing custom pagination controls, deep linking, or restoring saved pagination state.",
    type: "(page: number) => void",
    example: `// Navigate to page 3
tableRef.current?.setPage(3);

// Go to first page
tableRef.current?.setPage(1);

// Restore saved page
const savedPage = localStorage.getItem("lastPage");
if (savedPage) {
  tableRef.current?.setPage(parseInt(savedPage));
}

// Handle URL parameter
const urlParams = new URLSearchParams(window.location.search);
const page = parseInt(urlParams.get('page') || '1');
tableRef.current?.setPage(page);`,
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
