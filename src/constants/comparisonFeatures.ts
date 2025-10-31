/**
 * Comprehensive feature list for all table packages
 * Each feature maps to one of: "free", "paid", "in-development", or "not-available"
 */

export type FeatureStatus = "free" | "paid" | "in-development" | "not-available";

export interface FeatureMapping {
  [feature: string]: FeatureStatus;
}

// Comprehensive list of all features across all comparison pages
export const ALL_FEATURES = [
  // Core Features
  "quickStart",
  "virtualization",
  "infiniteScroll",
  "componentType",

  // Column Features
  "columnResizing",
  "columnReordering",
  "columnVisibility",
  "columnPinning",
  "columnAlignment",
  "columnSorting",
  "columnFiltering",
  "columnAdvancedFiltering",
  "columnNestedHeaders",
  "columnAggregationFunctions",
  "columnSelection",
  "columnCollapsible",
  "columnEditing",

  // Row Features
  "rowSelection",
  "rowGrouping",
  "rowAdjustableHeight",
  "rowExpansion",

  // Cell Features
  "cellEditing",
  "cellHighlighting",
  "cellClicking",
  "cellCustomRenderers",
  "cellLiveUpdates",
  "cellFormatting",
  "cellValidation",

  // Spreadsheet Features
  "spreadsheetFormulas",
  "spreadsheetDataBinding",
  "spreadsheetContextMenu",
  "spreadsheetComments",

  // Filtering Features
  "filteringColumnFilters",
  "filteringGlobalSearch",
  "filteringCustomFilters",
  "filteringFacetedFilters",

  // Pagination Features
  "paginationClientSide",
  "paginationServerSide",
  "paginationCursorBased",

  // Advanced Data Features
  "advancedValueGettersSetters",
  "advancedCellRangeSelection",
  "advancedPivotTables",
  "advancedTreeData",
  "advancedRowSpanning",
  "advancedMasterDetailViews",

  // Advanced UI Features
  "uiContextMenu",
  "uiStatusBar",
  "uiColumnMenu",
  "uiFullWidthRows",
  "uiAdvancedTooltips",

  // Integration Features
  "integrationExcelExport",
  "integrationExcelImport",
  "integrationCsvExport",
  "integrationCsvImport",
  "integrationClipboardOperations",
  "integrationKeyboardNavigation",
  "integrationAccessibility",

  // Theming Features
  "themingMultipleThemes",
  "themingCustomIcons",
  "themingFullThemeControl",
  "themingResponsive",

  // Developer Experience Features
  "developerTypeScriptSupport",

  // Undo/Redo Features
  "undoRedo",

  // Pricing & Bundle Size
  "pricing",
] as const;

// Feature mappings for Simple Table
export const simpleTableFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free",
  infiniteScroll: "free",
  componentType: "free",

  // Column Features
  columnResizing: "free",
  columnReordering: "free",
  columnVisibility: "free",
  columnPinning: "free",
  columnAlignment: "free",
  columnSorting: "free",
  columnFiltering: "free",
  columnAdvancedFiltering: "free",
  columnNestedHeaders: "free",
  columnAggregationFunctions: "free",
  columnSelection: "free",
  columnCollapsible: "free",
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "free",
  rowAdjustableHeight: "free",
  rowExpansion: "free",

  // Cell Features
  cellEditing: "free",
  cellHighlighting: "free",
  cellClicking: "free",
  cellCustomRenderers: "free",
  cellLiveUpdates: "free",
  cellFormatting: "free",
  cellValidation: "free",

  // Spreadsheet Features
  spreadsheetFormulas: "in-development",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "not-available",
  spreadsheetComments: "not-available",

  // Filtering Features
  filteringColumnFilters: "free",
  filteringGlobalSearch: "in-development",
  filteringCustomFilters: "free",
  filteringFacetedFilters: "free",

  // Pagination Features
  paginationClientSide: "free",
  paginationServerSide: "free",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "free",
  advancedCellRangeSelection: "free",
  advancedPivotTables: "not-available",
  advancedTreeData: "free",
  advancedRowSpanning: "not-available",
  advancedMasterDetailViews: "not-available",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "in-development",
  uiFullWidthRows: "in-development",
  uiAdvancedTooltips: "in-development",

  // Integration Features
  integrationExcelExport: "in-development",
  integrationExcelImport: "in-development",
  integrationCsvExport: "free",
  integrationCsvImport: "in-development",
  integrationClipboardOperations: "free",
  integrationKeyboardNavigation: "free",
  integrationAccessibility: "in-development",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",

  // Undo/Redo Features
  undoRedo: "in-development",

  // Pricing
  pricing: "free",
};

// Feature mappings for AG Grid
// Naming notes:
// - infiniteScroll -> "Infinite Row Model" (Enterprise)
// - columnAdvancedFiltering -> "Advanced Filter" or "Set Filter" (Enterprise)
// - rowGrouping -> "Row Grouping" (Enterprise)
// - rowExpansion -> "Master Detail" (Enterprise)
export const agGridFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free", // AG Grid: "Row Virtualization"
  infiniteScroll: "paid", // AG Grid: "Infinite Row Model"
  componentType: "free",

  // Column Features
  columnResizing: "free",
  columnReordering: "free", // AG Grid: "Column Moving"
  columnVisibility: "free", // AG Grid: "Column Visibility"
  columnPinning: "free", // AG Grid: "Column Pinning"
  columnAlignment: "free",
  columnSorting: "free",
  columnFiltering: "free", // AG Grid: "Column Filter"
  columnAdvancedFiltering: "paid", // AG Grid: "Advanced Filter" or "Set Filter" (Enterprise)
  columnNestedHeaders: "free", // AG Grid: "Column Groups"
  columnAggregationFunctions: "paid", // AG Grid: "Aggregation" (Enterprise)
  columnSelection: "free",
  columnCollapsible: "free", // AG Grid: "Column Group Opening"
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "paid", // AG Grid: "Row Grouping" (Enterprise)
  rowAdjustableHeight: "free", // AG Grid: "Row Height"
  rowExpansion: "paid", // AG Grid: "Master Detail" (Enterprise)

  // Cell Features
  cellEditing: "free",
  cellHighlighting: "paid", // AG Grid: "Range Selection" or "Cell Selection" (Enterprise)
  cellClicking: "free", // AG Grid: "onCellClicked" event
  cellCustomRenderers: "free", // AG Grid: "Cell Renderer"
  cellLiveUpdates: "free", // AG Grid: "Change Detection"
  cellFormatting: "free", // AG Grid: "Value Formatter"
  cellValidation: "free",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "paid", // AG Grid: "Context Menu" (Enterprise)
  spreadsheetComments: "not-available",

  // Filtering Features
  filteringColumnFilters: "free",
  filteringGlobalSearch: "free", // AG Grid: "Quick Filter"
  filteringCustomFilters: "free", // AG Grid: "Custom Filter"
  filteringFacetedFilters: "paid", // AG Grid: "Set Filter" (Enterprise)

  // Pagination Features
  paginationClientSide: "free", // AG Grid: "Client-Side Row Model"
  paginationServerSide: "paid", // AG Grid: "Server-Side Row Model" (Enterprise)
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "free", // AG Grid: "Value Getter/Setter"
  advancedCellRangeSelection: "paid", // AG Grid: "Range Selection" (Enterprise)
  advancedPivotTables: "paid", // AG Grid: "Pivot Mode" (Enterprise)
  advancedTreeData: "paid", // AG Grid: "Tree Data" (Enterprise)
  advancedRowSpanning: "paid", // AG Grid: "Row Spanning" (Enterprise)
  advancedMasterDetailViews: "paid", // AG Grid: "Master Detail" (Enterprise)

  // Advanced UI Features
  uiContextMenu: "paid", // AG Grid: "Context Menu" (Enterprise)
  uiStatusBar: "paid", // AG Grid: "Status Bar" (Enterprise)
  uiColumnMenu: "paid", // AG Grid: "Column Menu" (Enterprise)
  uiFullWidthRows: "free", // AG Grid: "Full Width Rows"
  uiAdvancedTooltips: "free", // AG Grid: "Tooltip Component"

  // Integration Features
  integrationExcelExport: "paid", // AG Grid: "Excel Export" (Enterprise)
  integrationExcelImport: "paid", // AG Grid: "Excel Import" (Enterprise)
  integrationCsvExport: "free", // AG Grid: "CSV Export"
  integrationCsvImport: "not-available",
  integrationClipboardOperations: "paid", // AG Grid: "Clipboard" (Enterprise)
  integrationKeyboardNavigation: "free",
  integrationAccessibility: "free",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",

  // Undo/Redo Features
  undoRedo: "paid",
};

// Feature mappings for Ant Design Table
// Naming notes:
// - virtualization -> "Virtual Scroll"
// - columnPinning -> "Fixed Columns"
// - columnNestedHeaders -> "Column Groups"
// - rowExpansion -> "Expandable Rows"
// - cellHighlighting -> via "rowClassName" or "onRow" props
// - cellCustomRenderers -> "render" function in column definition
export const antDesignFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free", // Ant Design: "Virtual Scroll"
  infiniteScroll: "not-available",
  componentType: "free",

  // Column Features
  columnResizing: "free", // Ant Design: "resizable" prop
  columnReordering: "not-available", // Not built-in, requires custom implementation
  columnVisibility: "not-available", // Not built-in, manual column array manipulation required
  columnPinning: "free", // Ant Design: "fixed" prop (left/right)
  columnAlignment: "free", // Ant Design: "align" prop
  columnSorting: "free", // Ant Design: "sorter" prop
  columnFiltering: "free", // Ant Design: "filters" prop
  columnAdvancedFiltering: "not-available",
  columnNestedHeaders: "free", // Ant Design: "Column Groups" via nested columns
  columnAggregationFunctions: "free", // Ant Design: "summary" prop
  columnSelection: "not-available",
  columnCollapsible: "not-available",
  columnEditing: "free", // Via custom "render" function

  // Row Features
  rowSelection: "free", // Ant Design: "rowSelection" prop
  rowGrouping: "not-available",
  rowAdjustableHeight: "not-available",
  rowExpansion: "free", // Ant Design: "expandable" prop

  // Cell Features
  cellEditing: "free", // Via custom "render" or "onCell"
  cellHighlighting: "free", // Ant Design: via "rowClassName" or "onRow" callbacks
  cellClicking: "free", // Ant Design: "onCell" or "onRow" callbacks
  cellCustomRenderers: "free", // Ant Design: "render" function in column definition
  cellLiveUpdates: "free", // Works with React state updates
  cellFormatting: "free", // Ant Design: "render" function
  cellValidation: "not-available",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "not-available",
  spreadsheetComments: "not-available",

  // Filtering Features
  filteringColumnFilters: "free",
  filteringGlobalSearch: "free",
  filteringCustomFilters: "free",
  filteringFacetedFilters: "not-available",

  // Pagination Features
  paginationClientSide: "free",
  paginationServerSide: "free",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "not-available",
  advancedCellRangeSelection: "not-available",
  advancedPivotTables: "not-available",
  advancedTreeData: "free",
  advancedRowSpanning: "free",
  advancedMasterDetailViews: "free",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "not-available",
  uiFullWidthRows: "not-available",
  uiAdvancedTooltips: "not-available",

  // Integration Features
  integrationExcelExport: "not-available",
  integrationExcelImport: "not-available",
  integrationCsvExport: "not-available",
  integrationCsvImport: "not-available",
  integrationClipboardOperations: "not-available",
  integrationKeyboardNavigation: "free",
  integrationAccessibility: "free",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "free",
};

// Feature mappings for Handsontable
// Note: Handsontable requires a commercial license for production use
// Free non-commercial license available for personal/non-commercial projects
// Naming notes:
// - columnReordering -> "Manual Column Move"
// - columnVisibility -> "Hidden Columns"
// - columnPinning -> "Fixed Columns"
// - columnNestedHeaders -> "Nested Headers"
// - cellHighlighting -> "Current Cell Highlighting" & "Fill Handle"
// - cellCustomRenderers -> "Cell Renderers"
// - spreadsheetFormulas -> "Formulas" plugin
// - spreadsheetComments -> "Comments" plugin
export const handsontableFeatures: FeatureMapping = {
  quickStart: "paid",
  virtualization: "paid", // Handsontable: Built-in performance optimization
  infiniteScroll: "not-available",
  componentType: "paid",

  // Column Features
  columnResizing: "paid", // Handsontable: "Manual Column Resize"
  columnReordering: "paid", // Handsontable: "Manual Column Move"
  columnVisibility: "paid", // Handsontable: "Hidden Columns"
  columnPinning: "paid", // Handsontable: "Fixed Columns"
  columnAlignment: "paid", // Handsontable: via "className" or CSS
  columnSorting: "paid", // Handsontable: "Column Sorting" plugin
  columnFiltering: "paid", // Handsontable: "Filters" plugin
  columnAdvancedFiltering: "paid", // Handsontable: Advanced filter conditions
  columnNestedHeaders: "paid", // Handsontable: "Nested Headers" plugin
  columnAggregationFunctions: "not-available",
  columnSelection: "paid", // Handsontable: Column selection via headers
  columnCollapsible: "paid", // Handsontable: "Collapsing Columns" plugin
  columnEditing: "paid",

  // Row Features
  rowSelection: "paid", // Handsontable: Row selection via row headers
  rowGrouping: "not-available",
  rowAdjustableHeight: "paid", // Handsontable: "Manual Row Resize"
  rowExpansion: "not-available",

  // Cell Features
  cellEditing: "paid", // Handsontable: Core spreadsheet editing
  cellHighlighting: "paid", // Handsontable: "Current Cell Highlighting" & selection
  cellClicking: "paid", // Handsontable: Cell event hooks
  cellCustomRenderers: "paid", // Handsontable: "Cell Renderers"
  cellLiveUpdates: "paid", // Handsontable: Real-time data updates
  cellFormatting: "paid", // Handsontable: "Numeric" and other cell types
  cellValidation: "paid", // Handsontable: "Data Validation"

  // Spreadsheet Features
  spreadsheetFormulas: "paid", // Handsontable: "Formulas" plugin (HyperFormula)
  spreadsheetDataBinding: "paid",
  spreadsheetContextMenu: "paid", // Handsontable: "Context Menu" plugin
  spreadsheetComments: "paid", // Handsontable: "Comments" plugin

  // Filtering Features
  filteringColumnFilters: "paid",
  filteringGlobalSearch: "not-available",
  filteringCustomFilters: "paid",
  filteringFacetedFilters: "not-available",

  // Pagination Features
  paginationClientSide: "not-available",
  paginationServerSide: "not-available",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "paid",
  advancedCellRangeSelection: "paid",
  advancedPivotTables: "not-available",
  advancedTreeData: "paid",
  advancedRowSpanning: "paid",
  advancedMasterDetailViews: "not-available",

  // Advanced UI Features
  uiContextMenu: "paid",
  uiStatusBar: "not-available",
  uiColumnMenu: "paid",
  uiFullWidthRows: "not-available",
  uiAdvancedTooltips: "not-available",

  // Integration Features
  integrationExcelExport: "not-available",
  integrationExcelImport: "not-available",
  integrationCsvExport: "paid",
  integrationCsvImport: "paid",
  integrationClipboardOperations: "paid",
  integrationKeyboardNavigation: "paid",
  integrationAccessibility: "paid",

  // Theming Features
  themingMultipleThemes: "not-available",
  themingCustomIcons: "not-available",
  themingFullThemeControl: "paid",
  themingResponsive: "paid",

  // Developer Experience Features
  developerTypeScriptSupport: "paid",

  // Undo/Redo Features
  undoRedo: "paid",

  // Pricing
  pricing: "paid",
};

// Feature mappings for Material React Table (MRT)
// Built on top of TanStack Table with Material UI components
// Naming notes:
// - virtualization -> "Row Virtualization" (via @tanstack/react-virtual)
// - infiniteScroll -> Works with virtualization
// - columnReordering -> "enableColumnOrdering"
// - columnVisibility -> "Column Hiding"
// - columnPinning -> "Column Pinning"
// - columnAdvancedFiltering -> "enableColumnFilterModes"
// - columnNestedHeaders -> "Header Groups"
// - columnAggregationFunctions -> "Aggregation and Grouping"
// - rowGrouping -> "Grouping" feature
// - rowExpansion -> "Detail Panels" or "Expanding"
// - cellHighlighting -> via "muiTableBodyCellProps" styling
export const materialReactFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free", // MRT: "enableRowVirtualization"
  infiniteScroll: "free", // MRT: Works with virtualization
  componentType: "free",

  // Column Features
  columnResizing: "free", // MRT: "enableColumnResizing"
  columnReordering: "free", // MRT: "enableColumnOrdering"
  columnVisibility: "free", // MRT: "Column Hiding" feature
  columnPinning: "free", // MRT: "enableColumnPinning"
  columnAlignment: "free", // MRT: via column "align" property
  columnSorting: "free", // MRT: "enableSorting"
  columnFiltering: "free", // MRT: "enableColumnFilters"
  columnAdvancedFiltering: "free", // MRT: "enableColumnFilterModes"
  columnNestedHeaders: "free", // MRT: "Header Groups" via column structure
  columnAggregationFunctions: "free", // MRT: "Aggregation and Grouping"
  columnSelection: "not-available",
  columnCollapsible: "not-available",
  columnEditing: "free", // MRT: "enableEditing"

  // Row Features
  rowSelection: "free", // MRT: "enableRowSelection"
  rowGrouping: "free", // MRT: "enableGrouping"
  rowAdjustableHeight: "free", // MRT: via "muiTableBodyRowProps"
  rowExpansion: "free", // MRT: "Detail Panels" or "enableExpanding"

  // Cell Features
  cellEditing: "free", // MRT: "enableEditing" with cell edit mode
  cellHighlighting: "free", // MRT: via "muiTableBodyCellProps" styling
  cellClicking: "free", // MRT: via "muiTableBodyCellProps" onClick
  cellCustomRenderers: "free", // MRT: "Cell" render function in columns
  cellLiveUpdates: "free", // Works with React state
  cellFormatting: "free", // MRT: "Cell" render function
  cellValidation: "not-available",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "not-available",
  spreadsheetComments: "not-available",

  // Filtering Features
  filteringColumnFilters: "free",
  filteringGlobalSearch: "free",
  filteringCustomFilters: "free",
  filteringFacetedFilters: "free",

  // Pagination Features
  paginationClientSide: "free",
  paginationServerSide: "free",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "free",
  advancedCellRangeSelection: "not-available",
  advancedPivotTables: "not-available",
  advancedTreeData: "free",
  advancedRowSpanning: "not-available",
  advancedMasterDetailViews: "free",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "free",
  uiFullWidthRows: "free",
  uiAdvancedTooltips: "free",

  // Integration Features
  integrationExcelExport: "not-available",
  integrationExcelImport: "not-available",
  integrationCsvExport: "free",
  integrationCsvImport: "not-available",
  integrationClipboardOperations: "not-available",
  integrationKeyboardNavigation: "free",
  integrationAccessibility: "free",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "free",
};

// Feature mappings for TanStack Table
// Note: TanStack Table is a headless UI library - it provides logic/state management
// but no UI components. Features marked as "free" mean the logic is provided,
// but you must implement your own UI. "not-available" means no built-in logic support.
// Naming notes:
// - virtualization -> Use separate @tanstack/react-virtual library
// - columnResizing -> "Column Sizing" API
// - columnReordering -> "Column Ordering" API
// - columnVisibility -> "Column Visibility" API
// - columnPinning -> "Column Pinning" API
// - columnSorting -> "Sorting" API
// - columnFiltering -> "Filtering" API
// - columnNestedHeaders -> "Header Groups" via column structure
// - columnAggregationFunctions -> "Grouping" API with aggregation functions
// - rowSelection -> "Row Selection" API
// - rowGrouping -> "Grouping" API
// - rowExpansion -> "Expanding" API
// - cellCustomRenderers -> "cell" render function in column definition
export const tanstackFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free", // TanStack: Use @tanstack/react-virtual separately
  infiniteScroll: "not-available",
  componentType: "free", // Headless library

  // Column Features
  columnResizing: "free", // TanStack: "Column Sizing" API
  columnReordering: "free", // TanStack: "Column Ordering" API
  columnVisibility: "free", // TanStack: "Column Visibility" API
  columnPinning: "free", // TanStack: "Column Pinning" API
  columnAlignment: "free", // TanStack: via column meta
  columnSorting: "free", // TanStack: "Sorting" API
  columnFiltering: "free", // TanStack: "Filtering" API
  columnAdvancedFiltering: "not-available",
  columnNestedHeaders: "free", // TanStack: "Header Groups"
  columnAggregationFunctions: "free", // TanStack: "Grouping" with aggregation
  columnSelection: "not-available",
  columnCollapsible: "not-available",
  columnEditing: "not-available", // No editing logic, implement yourself

  // Row Features
  rowSelection: "free", // TanStack: "Row Selection" API
  rowGrouping: "free", // TanStack: "Grouping" API
  rowAdjustableHeight: "not-available",
  rowExpansion: "free", // TanStack: "Expanding" API

  // Cell Features
  cellEditing: "not-available", // No editing logic
  cellHighlighting: "not-available", // No styling logic
  cellClicking: "not-available", // Handle events in your UI layer
  cellCustomRenderers: "free", // TanStack: "cell" function in columns
  cellLiveUpdates: "not-available", // Handle in your state management
  cellFormatting: "not-available", // Implement in cell renderer
  cellValidation: "not-available",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "not-available",
  spreadsheetComments: "not-available",

  // Filtering Features
  filteringColumnFilters: "free",
  filteringGlobalSearch: "free",
  filteringCustomFilters: "free",
  filteringFacetedFilters: "free",

  // Pagination Features
  paginationClientSide: "free",
  paginationServerSide: "free",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "free",
  advancedCellRangeSelection: "not-available",
  advancedPivotTables: "not-available",
  advancedTreeData: "free",
  advancedRowSpanning: "not-available",
  advancedMasterDetailViews: "not-available",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "not-available",
  uiFullWidthRows: "not-available",
  uiAdvancedTooltips: "not-available",

  // Integration Features
  integrationExcelExport: "not-available",
  integrationExcelImport: "not-available",
  integrationCsvExport: "not-available",
  integrationCsvImport: "not-available",
  integrationClipboardOperations: "not-available",
  integrationKeyboardNavigation: "not-available",
  integrationAccessibility: "not-available",

  // Theming Features
  themingMultipleThemes: "not-available",
  themingCustomIcons: "not-available",
  themingFullThemeControl: "not-available",
  themingResponsive: "not-available",

  // Developer Experience Features
  developerTypeScriptSupport: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "free",
};

// Map of all table packages to their feature mappings
export const tablePackageFeatures: Record<string, FeatureMapping> = {
  simpleTable: simpleTableFeatures,
  agGrid: agGridFeatures,
  antDesign: antDesignFeatures,
  handsontable: handsontableFeatures,
  materialReact: materialReactFeatures,
  tanstack: tanstackFeatures,
};

// Helper function to get feature status for a package
export function getFeatureStatus(packageName: string, feature: string): FeatureStatus | undefined {
  const packageFeatures = tablePackageFeatures[packageName];
  return packageFeatures?.[feature];
}

// Helper function to check if a feature is available for a package
export function hasFeature(packageName: string, feature: string): boolean {
  const status = getFeatureStatus(packageName, feature);
  return status === "free" || status === "paid";
}
