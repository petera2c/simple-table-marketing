/**
 * Comprehensive feature list for all table packages
 * Each feature maps to one of: "free", "paid", "in-development", or "not-available"
 */

export type FeatureStatus = "free" | "paid" | "in-development" | "not-available";

export interface FeatureMapping {
  [feature: string]: FeatureStatus;
}

// Feature categories for organizing features in comparison tables
export const FEATURE_CATEGORIES = {
  core: ["quickStart", "virtualization", "infiniteScroll", "componentType"],
  column: [
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
  ],
  row: ["rowSelection", "rowGrouping", "rowAdjustableHeight", "rowExpansion"],
  cell: [
    "cellEditing",
    "cellHighlighting",
    "cellClicking",
    "cellCustomRenderers",
    "cellLiveUpdates",
    "cellFormatting",
    "cellValidation",
  ],
  spreadsheet: [
    "spreadsheetFormulas",
    "spreadsheetDataBinding",
    "spreadsheetContextMenu",
    "spreadsheetComments",
  ],
  filtering: [
    "filteringColumnFilters",
    "filteringGlobalSearch",
    "filteringCustomFilters",
    "filteringFacetedFilters",
  ],
  pagination: ["paginationClientSide", "paginationServerSide", "paginationCursorBased"],
  advancedData: [
    "advancedValueGettersSetters",
    "advancedCellRangeSelection",
    "advancedPivotTables",
    "advancedTreeData",
    "advancedRowSpanning",
    "advancedMasterDetailViews",
  ],
  advancedUI: [
    "uiContextMenu",
    "uiStatusBar",
    "uiColumnMenu",
    "uiFullWidthRows",
    "uiAdvancedTooltips",
  ],
  integration: [
    "integrationExcelExport",
    "integrationExcelImport",
    "integrationCsvExport",
    "integrationCsvImport",
    "integrationClipboardOperations",
    "integrationKeyboardNavigation",
    "integrationAccessibility",
  ],
  theming: [
    "themingMultipleThemes",
    "themingCustomIcons",
    "themingFullThemeControl",
    "themingResponsive",
  ],
  developer: [
    "developerTypeScriptSupport",
    "developerEasySetup",
    "developerReadyToUseComponents",
    "developerLearningCurve",
  ],
  other: ["undoRedo", "pricing"],
} as const;

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
  "developerEasySetup",
  "developerReadyToUseComponents",
  "developerLearningCurve",

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
  developerEasySetup: "free",
  developerReadyToUseComponents: "free",
  developerLearningCurve: "free",

  // Undo/Redo Features
  undoRedo: "in-development",

  // Pricing
  pricing: "free",
};

// Feature mappings for AG Grid
export const agGridFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free",
  infiniteScroll: "paid",
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
  columnAggregationFunctions: "paid",
  columnSelection: "free",
  columnCollapsible: "free",
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "paid",
  rowAdjustableHeight: "free",
  rowExpansion: "free",

  // Cell Features
  cellEditing: "free",
  cellHighlighting: "paid",
  cellClicking: "free",
  cellCustomRenderers: "free",
  cellLiveUpdates: "free",
  cellFormatting: "free",
  cellValidation: "paid",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "free",
  spreadsheetContextMenu: "paid",
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
  advancedCellRangeSelection: "paid",
  advancedPivotTables: "paid",
  advancedTreeData: "paid",
  advancedRowSpanning: "paid",
  advancedMasterDetailViews: "paid",

  // Advanced UI Features
  uiContextMenu: "paid",
  uiStatusBar: "paid",
  uiColumnMenu: "free",
  uiFullWidthRows: "free",
  uiAdvancedTooltips: "paid",

  // Integration Features
  integrationExcelExport: "paid",
  integrationExcelImport: "paid",
  integrationCsvExport: "free",
  integrationCsvImport: "free",
  integrationClipboardOperations: "paid",
  integrationKeyboardNavigation: "free",
  integrationAccessibility: "paid",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",
  developerEasySetup: "free",
  developerReadyToUseComponents: "free",
  developerLearningCurve: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "paid",
};

// Feature mappings for Ant Design Table
export const antDesignFeatures: FeatureMapping = {
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
  columnAdvancedFiltering: "not-available",
  columnNestedHeaders: "free",
  columnAggregationFunctions: "not-available",
  columnSelection: "not-available",
  columnCollapsible: "not-available",
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "not-available",
  rowAdjustableHeight: "free",
  rowExpansion: "free",

  // Cell Features
  cellEditing: "free",
  cellHighlighting: "not-available",
  cellClicking: "free",
  cellCustomRenderers: "free",
  cellLiveUpdates: "not-available",
  cellFormatting: "free",
  cellValidation: "free",

  // Spreadsheet Features
  spreadsheetFormulas: "not-available",
  spreadsheetDataBinding: "not-available",
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
  advancedTreeData: "not-available",
  advancedRowSpanning: "free",
  advancedMasterDetailViews: "not-available",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "not-available",
  uiFullWidthRows: "not-available",
  uiAdvancedTooltips: "free",

  // Integration Features
  integrationExcelExport: "not-available",
  integrationExcelImport: "not-available",
  integrationCsvExport: "not-available",
  integrationCsvImport: "not-available",
  integrationClipboardOperations: "not-available",
  integrationKeyboardNavigation: "not-available",
  integrationAccessibility: "free",

  // Theming Features
  themingMultipleThemes: "free",
  themingCustomIcons: "free",
  themingFullThemeControl: "free",
  themingResponsive: "free",

  // Developer Experience Features
  developerTypeScriptSupport: "free",
  developerEasySetup: "free",
  developerReadyToUseComponents: "free",
  developerLearningCurve: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "free",
};

// Feature mappings for Handsontable
export const handsontableFeatures: FeatureMapping = {
  quickStart: "paid",
  virtualization: "paid",
  infiniteScroll: "paid",
  componentType: "paid",

  // Column Features
  columnResizing: "paid",
  columnReordering: "paid",
  columnVisibility: "paid",
  columnPinning: "paid",
  columnAlignment: "paid",
  columnSorting: "paid",
  columnFiltering: "paid",
  columnAdvancedFiltering: "paid",
  columnNestedHeaders: "paid",
  columnAggregationFunctions: "paid",
  columnSelection: "paid",
  columnCollapsible: "paid",
  columnEditing: "paid",

  // Row Features
  rowSelection: "paid",
  rowGrouping: "paid",
  rowAdjustableHeight: "paid",
  rowExpansion: "not-available",

  // Cell Features
  cellEditing: "paid",
  cellHighlighting: "paid",
  cellClicking: "paid",
  cellCustomRenderers: "paid",
  cellLiveUpdates: "paid",
  cellFormatting: "paid",
  cellValidation: "paid",

  // Spreadsheet Features
  spreadsheetFormulas: "paid",
  spreadsheetDataBinding: "paid",
  spreadsheetContextMenu: "paid",
  spreadsheetComments: "paid",

  // Filtering Features
  filteringColumnFilters: "paid",
  filteringGlobalSearch: "paid",
  filteringCustomFilters: "paid",
  filteringFacetedFilters: "paid",

  // Pagination Features
  paginationClientSide: "paid",
  paginationServerSide: "paid",
  paginationCursorBased: "not-available",

  // Advanced Data Features
  advancedValueGettersSetters: "paid",
  advancedCellRangeSelection: "paid",
  advancedPivotTables: "paid",
  advancedTreeData: "paid",
  advancedRowSpanning: "paid",
  advancedMasterDetailViews: "paid",

  // Advanced UI Features
  uiContextMenu: "paid",
  uiStatusBar: "paid",
  uiColumnMenu: "paid",
  uiFullWidthRows: "paid",
  uiAdvancedTooltips: "paid",

  // Integration Features
  integrationExcelExport: "paid",
  integrationExcelImport: "paid",
  integrationCsvExport: "paid",
  integrationCsvImport: "paid",
  integrationClipboardOperations: "paid",
  integrationKeyboardNavigation: "paid",
  integrationAccessibility: "paid",

  // Theming Features
  themingMultipleThemes: "paid",
  themingCustomIcons: "paid",
  themingFullThemeControl: "not-available",
  themingResponsive: "paid",

  // Developer Experience Features
  developerTypeScriptSupport: "paid",
  developerEasySetup: "paid",
  developerReadyToUseComponents: "paid",
  developerLearningCurve: "paid",

  // Undo/Redo Features
  undoRedo: "paid",

  // Pricing
  pricing: "paid",
};

// Feature mappings for Material-UI Table
export const materialReactFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free",
  infiniteScroll: "not-available",
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
  columnNestedHeaders: "not-available",
  columnAggregationFunctions: "not-available",
  columnSelection: "not-available",
  columnCollapsible: "not-available",
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "free",
  rowAdjustableHeight: "free",
  rowExpansion: "free",

  // Cell Features
  cellEditing: "free",
  cellHighlighting: "not-available",
  cellClicking: "free",
  cellCustomRenderers: "free",
  cellLiveUpdates: "not-available",
  cellFormatting: "free",
  cellValidation: "free",

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
  advancedTreeData: "not-available",
  advancedRowSpanning: "not-available",
  advancedMasterDetailViews: "not-available",

  // Advanced UI Features
  uiContextMenu: "not-available",
  uiStatusBar: "not-available",
  uiColumnMenu: "not-available",
  uiFullWidthRows: "free",
  uiAdvancedTooltips: "free",

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
  developerEasySetup: "free",
  developerReadyToUseComponents: "free",
  developerLearningCurve: "free",

  // Undo/Redo Features
  undoRedo: "not-available",

  // Pricing
  pricing: "free",
};

// Feature mappings for TanStack Table
export const tanstackFeatures: FeatureMapping = {
  quickStart: "free",
  virtualization: "free",
  infiniteScroll: "free",
  componentType: "free",

  // Column Features
  columnResizing: "free",
  columnReordering: "free",
  columnVisibility: "free",
  columnPinning: "free",
  columnAlignment: "not-available",
  columnSorting: "free",
  columnFiltering: "free",
  columnAdvancedFiltering: "free",
  columnNestedHeaders: "free",
  columnAggregationFunctions: "not-available",
  columnSelection: "not-available",
  columnCollapsible: "free",
  columnEditing: "free",

  // Row Features
  rowSelection: "free",
  rowGrouping: "free",
  rowAdjustableHeight: "free",
  rowExpansion: "free",

  // Cell Features
  cellEditing: "not-available",
  cellHighlighting: "not-available",
  cellClicking: "not-available",
  cellCustomRenderers: "free",
  cellLiveUpdates: "not-available",
  cellFormatting: "not-available",
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
  paginationCursorBased: "free",

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
  developerEasySetup: "free",
  developerReadyToUseComponents: "not-available",
  developerLearningCurve: "free",

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
