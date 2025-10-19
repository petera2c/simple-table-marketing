"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { HEADER_HEIGHT } from "@/constants/global";
import PropTable, { type PropInfo } from "@/components/PropTable";
import useHashNavigation from "@/hooks/useHashNavigation";

// Union type definitions
const UNION_TYPE_DEFINITIONS: PropInfo[] = [
  {
    key: "accessor",
    name: "Accessor",
    required: false,
    description: "Valid property key that exists in the Row type. Used to safely access row data.",
    type: "keyof Row",
    example: `// If your Row type has properties: id, name, age, status
const accessor: Accessor = "name";     // Valid - exists in Row
const accessor2: Accessor = "age";     // Valid - exists in Row
// const invalid: Accessor = "xyz";    // TypeScript error - doesn't exist in Row`,
  },
  {
    key: "cellvalue",
    name: "CellValue",
    required: false,
    description: "Valid data types that can be stored in a table cell.",
    type: "string | number | boolean | undefined | null | string[] | number[] | Record<string, any>[]",
    example: `const name: CellValue = "John Doe";           // string
const age: CellValue = 30;                    // number
const isActive: CellValue = true;             // boolean
const score: CellValue = null;                // null
const description: CellValue = undefined;     // undefined
const tags: CellValue = ["tag1", "tag2"];     // string[]
const ratings: CellValue = [4.5, 3.8, 5.0];  // number[]
const users: CellValue = [                    // Record<string, any>[]
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" }
];`,
  },
  {
    key: "theme",
    name: "Theme",
    required: false,
    description: "Built-in theme options for styling the table.",
    type: '"light" | "dark" | "sky" | "violet" | "neutral" | "frost" | "custom"',
    example: `theme="dark"
theme="frost"
theme="custom"`,
  },
  {
    key: "aggregationtype",
    name: "AggregationType",
    required: false,
    description: "Available aggregation functions for grouped data.",
    type: '"sum" | "average" | "count" | "min" | "max" | "custom"',
    example: `aggregation: {
  type: "sum"     // Sum all values
}
aggregation: {
  type: "custom"  // Custom function
}`,
  },
  {
    key: "pinned",
    name: "Pinned",
    required: false,
    description: "Column pinning position options.",
    type: '"left" | "right"',
    example: `pinned: "left"   // Pin to left side
pinned: "right"  // Pin to right side`,
  },
  {
    key: "columneditorposition",
    name: "ColumnEditorPosition",
    required: false,
    description: "Position options for the column editor panel.",
    type: '"left" | "right"',
    example: `columnEditorPosition="left"
columnEditorPosition="right"`,
  },
  {
    key: "row",
    name: "Row",
    required: false,
    description:
      "Data object representing a single table row. Can contain cell values or nested row arrays for hierarchical data.",
    type: "Record<string, CellValue | Row[]>",
    example: `const row: Row = {
  id: 1,
  name: "John Doe",
  age: 30,
  status: "active",
  // Nested rows for hierarchical data
  children: [
    { id: 2, name: "Child Row", parentId: 1 }
  ]
}`,
  },
  {
    key: "type",
    name: "HeaderObject.type",
    required: false,
    description: "Data type for proper formatting and sorting behavior.",
    type: "string | number | boolean | date | enum | other",
    example: `type: "number"   // For numeric columns`,
  },
];

const ENUM_OPTION_PROPS: PropInfo[] = [
  {
    key: "label",
    name: "label",
    required: true,
    description: "Display text shown in the dropdown",
    type: "string",
    example: `{ label: "Active" }`,
  },
  {
    key: "value",
    name: "value",
    required: true,
    description: "Actual value stored in the data",
    type: "string",
    example: `{ value: "active" }`,
  },
];

const AGGREGATION_CONFIG_PROPS: PropInfo[] = [
  {
    key: "type",
    name: "type",
    required: true,
    description: "The aggregation function to use",
    type: "AggregationType",
    link: "#union-types",
    example: `{ type: "sum" }`,
  },
  {
    key: "parseValue",
    name: "parseValue",
    required: false,
    description: "Function to parse string values to numbers (e.g., '$15.0M' to 15000000)",
    type: "(value: any) => number",
    example: `parseValue: (val) => parseFloat(val.replace(/[^0-9.-]/g, ''))`,
  },
  {
    key: "formatResult",
    name: "formatResult",
    required: false,
    description: "Function to format the aggregated result back to string",
    type: "(value: number) => string",
    example: `formatResult: (val) => '$' + val.toLocaleString()`,
  },
  {
    key: "customFn",
    name: "customFn",
    required: false,
    description: "Custom aggregation function (only when type is 'custom')",
    type: "(values: any[]) => any",
    example: `customFn: (values) => values.filter(v => v > 0).length`,
  },
];

const ROW_SELECTION_CHANGE_PROPS_PROPS: PropInfo[] = [
  {
    key: "row",
    name: "row",
    required: true,
    description: "The complete row object that was selected or deselected",
    type: "Row",
    link: "#union-types",
    example: `props.row // { id: 1, name: "John", age: 30 }`,
  },
  {
    key: "isSelected",
    name: "isSelected",
    required: true,
    description: "Boolean indicating whether the row was selected (true) or deselected (false)",
    type: "boolean",
    example: `props.isSelected // true or false`,
  },
  {
    key: "selectedRows",
    name: "selectedRows",
    required: true,
    description: "Set containing the IDs of all currently selected rows",
    type: "Set<string>",
    example: `props.selectedRows // Set(['1', '3', '5'])`,
  },
];

const CELL_CHANGE_PROPS_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor/key that was edited",
    type: "Accessor",
    link: "#union-types",
    example: `props.accessor // "firstName"`,
  },
  {
    key: "newValue",
    name: "newValue",
    required: true,
    description: "The new value after editing",
    type: "CellValue",
    link: "#union-types",
    example: `props.newValue // "John Doe"`,
  },
  {
    key: "row",
    name: "row",
    required: true,
    description: "The complete row object that was edited",
    type: "Row",
    link: "#union-types",
    example: `props.row // { id: 1, name: "John", age: 30 }`,
  },
];

const CELL_CLICK_PROPS_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor/key of the clicked cell",
    type: "Accessor",
    link: "#union-types",
    example: `props.accessor // "firstName"`,
  },
  {
    key: "colIndex",
    name: "colIndex",
    required: true,
    description: "The column index of the clicked cell (0-based)",
    type: "number",
    example: `props.colIndex // 2`,
  },
  {
    key: "row",
    name: "row",
    required: true,
    description: "The complete row object containing the clicked cell",
    type: "Row",
    link: "#union-types",
    example: `props.row // { id: 1, name: "John", age: 30 }`,
  },
  {
    key: "rowId",
    name: "rowId",
    required: true,
    description: "The unique identifier of the row containing the clicked cell",
    type: "RowId",
    example: `props.rowId // "user-123"`,
  },
  {
    key: "rowIndex",
    name: "rowIndex",
    required: true,
    description: "The row index of the clicked cell (0-based)",
    type: "number",
    example: `props.rowIndex // 5`,
  },
  {
    key: "value",
    name: "value",
    required: true,
    description: "The value of the clicked cell",
    type: "CellValue",
    link: "#union-types",
    example: `props.value // "John Doe"`,
  },
];

const FILTER_CONDITION_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor/key being filtered",
    type: "Accessor",
    link: "#union-types",
    example: `{ accessor: "age" }`,
  },
  {
    key: "operator",
    name: "operator",
    required: true,
    description: "The filter operation to perform",
    type: "FilterOperator",
    example: `{ operator: "greaterThan" }`,
  },
  {
    key: "value",
    name: "value",
    required: false,
    description: "Single value for most filter operations",
    type: "CellValue",
    link: "#union-types",
    example: `{ value: 25 }`,
  },
  {
    key: "values",
    name: "values",
    required: false,
    description: "Array of values for 'between', 'in', etc. operations",
    type: "CellValue[]",
    link: "#union-types",
    example: `{ values: [18, 65] } // for between filter`,
  },
];

const SIMPLE_TABLE_PROPS: PropInfo[] = [
  {
    key: "defaultHeaders",
    name: "defaultHeaders",
    required: true,
    description: "Array of column definitions that specify the structure of your table.",
    type: "HeaderObject[]",
    link: "#header-object",
    example: `const headers = [
  { accessor: "id", label: "ID", width: 80 },
  { accessor: "name", label: "Name", width: "1fr" }
];`,
  },
  {
    key: "rows",
    name: "rows",
    required: true,
    description: "Array of data objects to display in the table. Each object represents a row.",
    type: "Row[]",
    link: "#union-types",
    example: `const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
];`,
  },
  {
    key: "rowIdAccessor",
    name: "rowIdAccessor",
    required: true,
    description:
      "Property name to use as row ID. This is crucial for proper row tracking, selection, and updates.",
    type: "Accessor",
    link: "#union-types",
    example: `rowIdAccessor="id"
// or
rowIdAccessor="employeeId"`,
  },
  {
    key: "height",
    name: "height",
    required: false,
    description: "Height of the table container.",
    type: "string",
    example: `height="400px"
height="50vh"`,
  },
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description: "Height of each individual row in pixels.",
    type: "number",
    example: `rowHeight={32}
rowHeight={48}`,
  },
  {
    key: "allowAnimations",
    name: "allowAnimations",
    required: false,
    description:
      "Beta feature! This feature is not yet fully tested and may not work as expected. Use at your own risk. Flag for allowing animations throughout the table.",
    type: "boolean",
    example: `allowAnimations={true}`,
  },
  {
    key: "cellUpdateFlash",
    name: "cellUpdateFlash",
    required: false,
    description: "Flag for flash animation after cell update.",
    type: "boolean",
    example: `cellUpdateFlash={true}`,
  },
  {
    key: "columnReordering",
    name: "columnReordering",
    required: false,
    description: "Enable column reordering by drag and drop.",
    type: "boolean",
    example: `columnReordering={true}`,
  },
  {
    key: "columnResizing",
    name: "columnResizing",
    required: false,
    description: "Enable column resizing functionality.",
    type: "boolean",
    example: `columnResizing={true}`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description: "Flag for column editing via column editor panel.",
    type: "boolean",
    example: `editColumns={true}`,
  },
  {
    key: "editColumnsInitOpen",
    name: "editColumnsInitOpen",
    required: false,
    description: "Flag for opening the column editor when the table is loaded.",
    type: "boolean",
    example: `editColumnsInitOpen={true}`,
  },
  {
    key: "expandAll",
    name: "expandAll",
    required: false,
    description: "Flag for expanding all rows by default (for grouped rows).",
    type: "boolean",
    example: `expandAll={true}`,
  },
  {
    key: "expandIcon",
    name: "expandIcon",
    required: false,
    description: "Icon for expandable rows (will rotate on expand/collapse).",
    type: "ReactNode",
    example: `expandIcon={<ChevronIcon />}`,
  },
  {
    key: "externalFilterHandling",
    name: "externalFilterHandling",
    required: false,
    description: "Flag to let consumer handle filter logic completely.",
    type: "boolean",
    example: `externalFilterHandling={true}`,
  },
  {
    key: "externalSortHandling",
    name: "externalSortHandling",
    required: false,
    description:
      "When true, completely disables internal sorting logic. The table will not sort data internally - you must provide pre-sorted data via the rows prop.",
    type: "boolean",
    example: `externalSortHandling={true}`,
  },
  {
    key: "hideFooter",
    name: "hideFooter",
    required: false,
    description: "Flag for hiding the table footer.",
    type: "boolean",
    example: `hideFooter={true}`,
  },
  {
    key: "onFilterChange",
    name: "onFilterChange",
    required: false,
    description:
      "Callback function triggered when filter configuration changes. Receives the current filter state with all active filters.",
    type: "(filters: TableFilterState) => void",
    example: `onFilterChange={(filters) => {
  console.log('Active filters:', filters);
  // Make API call with filter parameters
  // filters is an object where keys are unique filter IDs
  // and values are FilterCondition objects
}}`,
  },
  {
    key: "onLoadMore",
    name: "onLoadMore",
    required: false,
    description:
      "Callback function triggered when user scrolls near the bottom of the table to load more data. Useful for implementing infinite scrolling or paginated data loading.",
    type: "() => void",
    example: `onLoadMore={() => {
  console.log('Loading more data...');
  // Fetch additional data from API
  // Append new rows to existing data
  fetchMoreData().then(newRows => {
    setRows(prevRows => [...prevRows, ...newRows]);
  });
}}`,
  },
  {
    key: "onSortChange",
    name: "onSortChange",
    required: false,
    description:
      "Callback function triggered when sort configuration changes. Receives the current sort configuration or null if no sorting is applied.",
    type: "(sort: SortConfig | null) => void",
    example: `onSortChange={(sortConfig) => {
  if (sortConfig) {
    console.log(\`Sorting by \${sortConfig.key.accessor} (\${sortConfig.direction})\`);
    // Make API call with sort parameters
  }
}}`,
  },
  {
    key: "rowGrouping",
    name: "rowGrouping",
    required: false,
    description: "Array of property names that define row grouping hierarchy.",
    type: "string[]",
    example: `rowGrouping={["department", "team"]}`,
  },
  {
    key: "rowsPerPage",
    name: "rowsPerPage",
    required: false,
    description: "Number of rows per page for pagination.",
    type: "number",
    example: `rowsPerPage={25}`,
  },
  {
    key: "selectableCells",
    name: "selectableCells",
    required: false,
    description: "Enable cell selection functionality.",
    type: "boolean",
    example: `selectableCells={true}`,
  },
  {
    key: "selectableColumns",
    name: "selectableColumns",
    required: false,
    description: "Flag for selectable column headers.",
    type: "boolean",
    example: `selectableColumns={true}`,
  },
  {
    key: "shouldPaginate",
    name: "shouldPaginate",
    required: false,
    description: "Flag for enabling pagination.",
    type: "boolean",
    example: `shouldPaginate={true}`,
  },
  {
    key: "theme",
    name: "theme",
    required: false,
    description: "Theme configuration for the table styling.",
    type: "Theme",
    link: "#union-types",
    example: `theme={{
  primaryColor: "#1890ff",
  backgroundColor: "#ffffff"
}}`,
  },
  {
    key: "useOddColumnBackground",
    name: "useOddColumnBackground",
    required: false,
    description: "Flag for using alternating column background colors.",
    type: "boolean",
    example: `useOddColumnBackground={true}`,
  },
  {
    key: "useHoverRowBackground",
    name: "useHoverRowBackground",
    required: false,
    description: "Flag for using hover row background highlighting.",
    type: "boolean",
    example: `useHoverRowBackground={true}`,
  },
  {
    key: "useOddEvenRowBackground",
    name: "useOddEvenRowBackground",
    required: false,
    description: "Flag for using odd/even row background colors.",
    type: "boolean",
    example: `useOddEvenRowBackground={true}`,
  },
  {
    key: "enableRowSelection",
    name: "enableRowSelection",
    required: false,
    description: "Enable row selection functionality with checkboxes.",
    type: "boolean",
    example: `enableRowSelection={true}`,
  },
  {
    key: "onRowSelectionChange",
    name: "onRowSelectionChange",
    required: false,
    description: "Callback function triggered when row selection changes.",
    type: "(props: RowSelectionChangeProps) => void",
    link: "#row-selection-change-props",
    example: `onRowSelectionChange={({ row, isSelected, selectedRows }) => {
  console.log('Selection changed:', { row, isSelected, selectedRows });
}}`,
  },
  {
    key: "onCellClick",
    name: "onCellClick",
    required: false,
    description:
      "Callback function triggered when a cell is clicked. Provides detailed information about the clicked cell including its position, value, and containing row.",
    type: "(props: CellClickProps) => void",
    link: "#cell-click-props",
    example: `onCellClick={({ accessor, colIndex, row, rowId, rowIndex, value }) => {
  console.log(\`Clicked cell \${accessor} in row \${rowIndex}:\`, value);
  // Handle cell click - open modal, navigate, etc.
  if (accessor === 'details') {
    openDetailModal(row);
  }
}}`,
  },
  {
    key: "onCellEdit",
    name: "onCellEdit",
    required: false,
    description:
      "Callback function triggered when a cell is edited. Provides the edited cell information including the new value, row, and column accessor.",
    type: "(props: CellChangeProps) => void",
    link: "#cell-change-props",
    example: `onCellEdit={({ accessor, newValue, row }) => {
  console.log(\`Cell \${accessor} edited to:\`, newValue);
  // Update your data
  updateRowData(row.id, accessor, newValue);
}}`,
  },
  {
    key: "onColumnSelect",
    name: "onColumnSelect",
    required: false,
    description:
      "Callback when a column is selected/clicked. Provides the complete HeaderObject of the selected column.",
    type: "(header: HeaderObject) => void",
    link: "#header-object",
    example: `onColumnSelect={(header) => {
  console.log('Column selected:', header.label);
  console.log('Column accessor:', header.accessor);
  console.log('Column type:', header.type);
  // Handle column selection - show column menu, apply operations, etc.
}}`,
  },
  {
    key: "enableHeaderEditing",
    name: "enableHeaderEditing",
    required: false,
    description: "Flag for enabling header label editing when clicking already active headers.",
    type: "boolean",
    example: `enableHeaderEditing={true}`,
  },
  {
    key: "onHeaderEdit",
    name: "onHeaderEdit",
    required: false,
    description:
      "Callback when a header is edited. Receives the HeaderObject and the new label value.",
    type: "(header: HeaderObject, newLabel: string) => void",
    link: "#header-object",
    example: `onHeaderEdit={(header, newLabel) => {
  console.log('Header edited:', { header, newLabel });
  // Update your headers state
  setHeaders(prev => prev.map(h => 
    h.accessor === header.accessor 
      ? { ...h, label: newLabel }
      : h
  ));
}}`,
  },
  {
    key: "onColumnOrderChange",
    name: "onColumnOrderChange",
    required: false,
    description:
      "Callback when column order changes (through drag and drop reordering). Receives the new headers array in the updated order.",
    type: "(newHeaders: HeaderObject[]) => void",
    link: "#header-object",
    example: `onColumnOrderChange={(newHeaders) => {
  console.log('Column order changed:', newHeaders);
  // Update your headers state with the new order
  setHeaders(newHeaders);
}}`,
  },
  {
    key: "columnBorders",
    name: "columnBorders",
    required: false,
    description: "Flag for showing column borders.",
    type: "boolean",
    example: `columnBorders={true}`,
  },
  {
    key: "headerDropdown",
    name: "headerDropdown",
    required: false,
    description: "Custom dropdown component for headers.",
    type: "HeaderDropdown",
    example: `headerDropdown={({ accessor, colIndex, header, isOpen, onClose, position }) => (
  isOpen ? <CustomDropdown header={header} position={position} onClose={onClose} /> : null
)}`,
  },
  {
    key: "rowButtons",
    name: "rowButtons",
    required: false,
    description: "Array of buttons to show in each row.",
    type: "RowButton[]",
    example: `rowButtons={[
  ({ row }) => <button onClick={() => editRow(row)}>Edit</button>,
  ({ row }) => <button onClick={() => deleteRow(row)}>Delete</button>
]}`,
  },
  {
    key: "selectionColumnWidth",
    name: "selectionColumnWidth",
    required: false,
    description: "Width of the selection column (defaults to 42).",
    type: "number",
    example: `selectionColumnWidth={60}`,
  },
  {
    key: "headerExpandIcon",
    name: "headerExpandIcon",
    required: false,
    description:
      "Custom icon component for the expand state of collapsible column headers. Shows when a column group can be expanded to reveal child columns.",
    type: "ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

headerExpandIcon={<FontAwesomeIcon icon={faChevronRight} />}`,
  },
  {
    key: "headerCollapseIcon",
    name: "headerCollapseIcon",
    required: false,
    description:
      "Custom icon component for the collapse state of collapsible column headers. Shows when a column group can be collapsed to hide child columns.",
    type: "ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

headerCollapseIcon={<FontAwesomeIcon icon={faChevronDown} />}`,
  },
  {
    key: "className",
    name: "className",
    required: false,
    description: "CSS class name to apply to the table container element.",
    type: "string",
    example: `className="my-custom-table"`,
  },
  {
    key: "columnEditorPosition",
    name: "columnEditorPosition",
    required: false,
    description: "Position of the column editor panel when editColumns is enabled.",
    type: "ColumnEditorPosition",
    link: "#union-types",
    example: `columnEditorPosition="left"
columnEditorPosition="right"`,
  },
  {
    key: "columnEditorText",
    name: "columnEditorText",
    required: false,
    description: "Custom text label for the column editor panel.",
    type: "string",
    example: `columnEditorText="Customize Columns"`,
  },
  {
    key: "onGridReady",
    name: "onGridReady",
    required: false,
    description: "Callback function triggered when the table grid is fully initialized and ready.",
    type: "() => void",
    example: `onGridReady={() => {
  console.log('Table is ready!');
  // Perform any initialization logic
}}`,
  },
  {
    key: "onNextPage",
    name: "onNextPage",
    required: false,
    description: "Custom handler for pagination next page action.",
    type: "OnNextPage",
    example: `onNextPage={(currentPage, totalPages) => {
  console.log(\`Going to page \${currentPage + 1} of \${totalPages}\`);
  // Custom pagination logic
}}`,
  },
  {
    key: "tableRef",
    name: "tableRef",
    required: false,
    description:
      "React ref object to access table methods and state programmatically. Provides access to methods like exportToCSV and updateData.",
    type: "MutableRefObject<TableRefType | null>",
    link: "#table-ref-type",
    example: `const tableRef = useRef(null);

<SimpleTable
  tableRef={tableRef}
  // ... other props
/>

// Export table data to CSV
tableRef.current?.exportToCSV({ filename: "data.csv" });

// Update cell data programmatically
tableRef.current?.updateData({
  accessor: "status",
  rowIndex: 0,
  newValue: "active"
});`,
  },
];

const HEADER_OBJECT_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The key to access data in your row objects. Must match a property in your data.",
    type: "Accessor",
    link: "#union-types",
    example: `{ accessor: "firstName" }`,
  },
  {
    key: "label",
    name: "label",
    required: true,
    description: "The display name shown in the column header.",
    type: "string",
    example: `{ label: "First Name" }`,
  },
  {
    key: "width",
    name: "width",
    required: true,
    description: "Column width. Can be pixels, string with units, or flexible units like '1fr'.",
    type: "number | string",
    example: `width: 100        // 100px
width: "150px"    // 150px  
width: "1fr"      // Flexible`,
  },
  {
    key: "aggregation",
    name: "aggregation",
    required: false,
    description: "Configuration for data aggregation when rows are grouped.",
    type: "AggregationConfig",
    link: "#aggregation-config",
    example: `aggregation: {
  type: "sum",
  parseValue: (val) => parseFloat(val.replace('$', '')),
  formatResult: (val) => '$' + val.toFixed(2)
}`,
  },
  {
    key: "align",
    name: "align",
    required: false,
    description: "Text alignment for the column content.",
    type: "string",
    enumValues: ["left", "center", "right"],
    example: `align: "center"`,
  },
  {
    key: "type",
    name: "type",
    required: false,
    description: "Data type for proper formatting and sorting behavior.",
    type: "enum",
    link: "#union-types",
    enumValues: ["string", "number", "boolean", "date", "enum", "other"],
    example: `type: "number"   // For numeric data
type: "date"     // For date data
type: "boolean"  // For true/false data
type: "enum"     // For enum data
type: "other"    // For custom content (buttons, etc.)
type: "string"   // Default`,
  },
  {
    key: "minWidth",
    name: "minWidth",
    required: false,
    description: "Minimum width constraint for the column.",
    type: "number | string",
    example: `minWidth: 80
minWidth: "100px"`,
  },
  {
    key: "isSortable",
    name: "isSortable",
    required: false,
    description: "Enable sorting for this column.",
    type: "boolean",
    example: `isSortable: true`,
  },
  {
    key: "filterable",
    name: "filterable",
    required: false,
    description: "Enable filtering for this column.",
    type: "boolean",
    example: `filterable: true`,
  },
  {
    key: "isEditable",
    name: "isEditable",
    required: false,
    description: "Enable inline editing for this column.",
    type: "boolean",
    example: `isEditable: true`,
  },
  {
    key: "hide",
    name: "hide",
    required: false,
    description: "Hide this column from display.",
    type: "boolean",
    example: `hide: true`,
  },
  {
    key: "disableReorder",
    name: "disableReorder",
    required: false,
    description: "Prevent this column from being reordered.",
    type: "boolean",
    example: `disableReorder: true`,
  },
  {
    key: "expandable",
    name: "expandable",
    required: false,
    description: "Make this column expandable for row grouping.",
    type: "boolean",
    example: `expandable: true`,
  },
  {
    key: "pinned",
    name: "pinned",
    required: false,
    description: "Pin this column to left or right side.",
    type: "Pinned",
    enumValues: ["left", "right"],
    link: "#union-types",
    example: `pinned: "left"`,
  },
  {
    key: "children",
    name: "children",
    required: false,
    description: "Child columns for nested header structure.",
    type: "HeaderObject[]",
    link: "#header-object",
    example: `children: [
  { accessor: "firstName", label: "First", width: 100 },
  { accessor: "lastName", label: "Last", width: 100 }
]`,
  },
  {
    key: "enumOptions",
    name: "enumOptions",
    required: false,
    description: "Options for enum type columns (dropdown values).",
    type: "EnumOption[]",
    link: "#enum-option",
    example: `enumOptions: [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" }
]`,
  },
  {
    key: "cellRenderer",
    name: "cellRenderer",
    required: false,
    description: "Custom render function for cell content.",
    type: "({ accessor, colIndex, row, theme }: { accessor: Accessor; colIndex: number; row: Row; theme: Theme; }) => ReactNode | string",
    example: `cellRenderer: ({ accessor, colIndex, row, theme }) => (
  <span style={{ color: 'blue' }}>
    {row[accessor]}
  </span>
)`,
  },
  {
    key: "headerRenderer",
    name: "headerRenderer",
    required: false,
    description: "Custom render function for header content.",
    type: "({ accessor, colIndex, header }: { accessor: Accessor; colIndex: number; header: HeaderObject; }) => ReactNode | string",
    example: `headerRenderer: ({ accessor, colIndex, header }) => (
  <strong>{header.label}</strong>
)`,
  },
  {
    key: "collapsible",
    name: "collapsible",
    required: false,
    description:
      "Makes this column group collapsible. When true, users can click an arrow icon to collapse/expand the column group. Must have children columns.",
    type: "boolean",
    example: `collapsible: true`,
  },
  {
    key: "showWhen",
    name: "showWhen",
    required: false,
    description:
      'Controls when a child column is visible in collapsible groups. Can be "parentCollapsed" (only visible when collapsed), "parentExpanded" (only visible when expanded), or "always" (visible in both states). Default is "parentExpanded".',
    type: 'ShowWhen ("parentCollapsed" | "parentExpanded" | "always")',
    example: `showWhen: "parentCollapsed"  // Only visible when parent is collapsed
showWhen: "parentExpanded"   // Only visible when parent is expanded (default)
showWhen: "always"           // Always visible regardless of parent state`,
  },
  {
    key: "tooltip",
    name: "tooltip",
    required: false,
    description:
      "Tooltip text that appears when hovering over the column header. Provides helpful context about the column's purpose or data.",
    type: "string",
    example: `tooltip: "Current retail price in USD"
tooltip: "Date in YYYY-MM-DD format"
tooltip: "Average customer rating (1-5 stars)"`,
  },
];

const SORT_CONFIG_PROPS: PropInfo[] = [
  {
    key: "key",
    name: "key",
    required: true,
    description: "The HeaderObject representing the column being sorted.",
    type: "HeaderObject",
    link: "#header-object",
    example: `key: { accessor: "name", label: "Name", width: 150 }`,
  },
  {
    key: "direction",
    name: "direction",
    required: true,
    description: "The sort direction for the column.",
    type: '"ascending" | "descending"',
    example: `direction: "ascending"`,
  },
];

const TABLE_FILTER_STATE_PROPS: PropInfo[] = [
  {
    key: "filterCondition",
    name: "filterCondition",
    required: true,
    description: "The FilterCondition object containing the filter logic.",
    type: "FilterCondition",
    link: "#filter-condition",
    example: `{
  accessor: "name",
  operator: "contains",
  value: "John"
}`,
  },
];

const EXPORT_TO_CSV_PROPS_PROPS: PropInfo[] = [
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

const TABLE_REF_TYPE_METHODS: PropInfo[] = [
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

const ApiReferenceContent = () => {
  useHashNavigation();

  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faBook} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">API Reference</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Complete reference for all SimpleTable component props and HeaderObject configuration
        options.
      </motion.p>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SimpleTable Props
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        These are all the props available for the main{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">SimpleTable</code> component.
      </motion.p>

      <PropTable props={SIMPLE_TABLE_PROPS} title="SimpleTable Component Props" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="header-object"
      >
        HeaderObject Configuration
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        These are all the properties available when defining column headers in the{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">defaultHeaders</code> array.
      </motion.p>

      <PropTable props={HEADER_OBJECT_PROPS} title="Header Object Properties" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-12"
        style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Type Definitions
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        All union type values and object type properties used in SimpleTable.
      </motion.p>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="enum-option">
        <PropTable props={ENUM_OPTION_PROPS} title="EnumOption" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="aggregation-config">
        <PropTable props={AGGREGATION_CONFIG_PROPS} title="AggregationConfig" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="row-selection-change-props">
        <PropTable props={ROW_SELECTION_CHANGE_PROPS_PROPS} title="RowSelectionChangeProps" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="cell-change-props">
        <PropTable props={CELL_CHANGE_PROPS_PROPS} title="CellChangeProps" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="cell-click-props">
        <PropTable props={CELL_CLICK_PROPS_PROPS} title="CellClickProps" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="filter-condition">
        <PropTable props={FILTER_CONDITION_PROPS} title="FilterCondition" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="union-types">
        <PropTable props={UNION_TYPE_DEFINITIONS} title="Union Type Definitions" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="sort-config">
        <PropTable props={SORT_CONFIG_PROPS} title="SortConfig" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="table-filter-state">
        <PropTable props={TABLE_FILTER_STATE_PROPS} title="TableFilterState" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="table-ref-type">
        <PropTable props={TABLE_REF_TYPE_METHODS} title="TableRefType Methods" />
      </div>

      <div style={{ scrollMarginTop: `${HEADER_HEIGHT}px` }} id="export-to-csv-props">
        <PropTable props={EXPORT_TO_CSV_PROPS_PROPS} title="ExportToCSVProps" />
      </div>

      <DocNavigationButtons />
    </>
  );
};

export default ApiReferenceContent;
