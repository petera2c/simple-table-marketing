import React from "react";
import { Space, Tag, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faCheck,
  faDollarSign,
  faCode,
  faGaugeHigh,
  faLayerGroup,
  faTableColumns,
  faTableCells,
  faPalette,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

// Mapping of feature labels to their corresponding docs pages
const FEATURE_DOCS_MAPPING: Record<string, string> = {
  Resizing: "/docs/column-resizing",
  Reordering: "/docs/column-reordering",
  Visibility: "/docs/column-visibility",
  Pinning: "/docs/column-pinning",
  Alignment: "/docs/column-alignment",
  Sorting: "/docs/column-sorting",
  Filtering: "/docs/column-filtering",
  "Advanced Filtering": "/docs/column-filtering",
  "Nested Headers": "/docs/nested-headers",
  "Aggregation Functions": "/docs/aggregate-functions",
  "Row Grouping": "/docs/row-grouping",
  "Adjustable Height": "/docs/row-height",
  Expansion: "/docs/row-grouping",
  Editing: "/docs/cell-editing",
  "Custom Renderers": "/docs/cell-renderer",
  "Live Updates": "/docs/live-updates",
  Formatting: "/docs/cell-renderer",
  Validation: "/docs/cell-renderer",
  "Custom Icons": "/docs/custom-icons",
  "Multiple Themes": "/docs/themes",
  "Full Theme Control": "/docs/custom-theme",
  "CSS Variables": "/docs/custom-theme",
  "Clipboard Operations": "/docs/cell-highlighting",
  "Value Getters/Setters": "/docs/live-updates",
  "Cell Range Selection": "/docs/cell-highlighting",
  "Cell Highlighting": "/docs/cell-highlighting",
  "Header Renderer": "/docs/header-renderer",
  "Tree Data": "/docs/row-grouping",
  "Column Filters": "/docs/column-filtering",
  "Global Search": "/docs/column-filtering",
  "Custom Filters": "/docs/column-filtering",
  "Faceted Filters": "/docs/column-filtering",
  "Client-side": "/docs/pagination",
  "Server-side": "/docs/pagination",
  "Infinite Scroll": "/docs/infinite-scroll",
  "Built-in Themes": "/docs/themes",
  "Light/dark themes included": "/docs/themes",
  "Support for light and dark themes with easy customization": "/docs/themes",
  "Replace default icons with custom ones": "/docs/custom-icons",
  "Replace default icons easily": "/docs/custom-icons",
  "Custom functions to get/set cell values": "/docs/live-updates",
  "Custom functions to get and set cell values": "/docs/live-updates",
  "Select multiple cells in a range": "/docs/cell-highlighting",
  "Display hierarchical data in a tree structure": "/docs/row-grouping",
  "Group rows by column values with expand/collapse functionality": "/docs/row-grouping",
  "Adjust row height dynamically or set fixed heights": "/docs/row-height",
  "Expand rows to show additional details or nested content": "/docs/row-grouping",
  "Edit cell values inline with validation and formatting": "/docs/cell-editing",
  "Create custom cell renderers for complex content": "/docs/cell-renderer",
  "Update cell values in real-time without page refresh": "/docs/live-updates",
  "Format cell values (numbers, dates, currency, etc.)": "/docs/cell-renderer",
  "Validate cell input with custom rules and error messages": "/docs/cell-renderer",
  "Filter individual columns": "/docs/column-filtering",
  "Search across all columns": "/docs/column-filtering",
  "Define custom filter functions": "/docs/column-filtering",
  "Built-in pagination with customizable controls": "/docs/pagination",
  "Support for controlled pagination": "/docs/pagination",
  "Copy/paste data to/from clipboard": "/docs/cell-highlighting",
  "Copy and paste data to/from clipboard": "/docs/cell-highlighting",
  "Scroll to the bottom of the table to load more data": "/docs/live-updates",
  "Built-in support with customizable loading states": "/docs/live-updates",
  "Two-way data binding with React state": "/docs/live-updates",
  "Complete control over styling through CSS variables": "/docs/custom-theme",
  "Easy npm install and minimal setup": "/docs/quick-start",
  "Single package, minimal setup": "/docs/quick-start",
  "Built-in virtualization for millions of rows": "/docs/live-updates",
  "Theming through CSS variables": "/docs/custom-theme",
  "TypeScript Support": "/docs/api-reference",
};

// Common feature icons
export const FeatureIcons = {
  QuickStart: (
    <Space>
      <FontAwesomeIcon icon={faCode} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Quick Start</span>
    </Space>
  ),
  Virtualization: (
    <Space>
      <FontAwesomeIcon icon={faGaugeHigh} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Virtualization</span>
    </Space>
  ),
  ColumnFeatures: (
    <Space>
      <FontAwesomeIcon icon={faTableColumns} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Column Features</span>
    </Space>
  ),
  RowFeatures: (
    <Space>
      <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Row Features</span>
    </Space>
  ),
  CellFeatures: (
    <Space>
      <FontAwesomeIcon icon={faTableCells} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Cell Features</span>
    </Space>
  ),
  Customization: (
    <Space>
      <FontAwesomeIcon icon={faPalette} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Customization</span>
    </Space>
  ),
  EnterpriseFeatures: (
    <Space>
      <FontAwesomeIcon icon={faGear} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Enterprise Features</span>
    </Space>
  ),
  PricingSize: (
    <Space>
      <FontAwesomeIcon icon={faDollarSign} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Pricing & Size</span>
    </Space>
  ),
  AdvancedDataFeatures: (
    <Space>
      <FontAwesomeIcon icon={faGear} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Advanced Data Features</span>
    </Space>
  ),
  AdvancedUIFeatures: (
    <Space>
      <FontAwesomeIcon icon={faPalette} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Advanced UI Features</span>
    </Space>
  ),
  IntegrationFeatures: (
    <Space>
      <FontAwesomeIcon icon={faCode} className="text-gray-600 dark:text-gray-300" />
      <span className="dark:text-white">Integration Features</span>
    </Space>
  ),
};

// Common feature status components
export const FeatureStatus = {
  Available: (text: string) => (
    <Space>
      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
      <span className="dark:text-gray-300">{text}</span>
    </Space>
  ),
  Paid: (text: string) => (
    <Space>
      <FontAwesomeIcon icon={faDollarSign} className="text-yellow-500" />
      <span className="dark:text-gray-300">{text}</span>
    </Space>
  ),
};

// Common feature tags with tooltips
export const FeatureTags = {
  Success: (label: string, tooltip: string) => {
    const docLink = FEATURE_DOCS_MAPPING[label];
    const tagContent = (
      <Tooltip title={tooltip}>
        <Tag color="success">{label}</Tag>
      </Tooltip>
    );

    return docLink ? (
      <Link href={docLink} className="hover:opacity-80 transition-opacity">
        {tagContent}
      </Link>
    ) : (
      tagContent
    );
  },
  Warning: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="warning">{label}</Tag>
    </Tooltip>
  ),
  Error: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="error">{label}</Tag>
    </Tooltip>
  ),
  Processing: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="processing">{label}</Tag>
    </Tooltip>
  ),
};

// Feature definition types
export type FeatureImplementation = {
  status: "success" | "warning" | "error" | "processing";
  label: string;
  tooltip: string;
};

export type CompetitorFeatures = {
  [competitor: string]: FeatureImplementation[];
};

// Feature definitions - add all features here and define for each competitor
export const FEATURE_DEFINITIONS = {
  columnFeatures: {
    simpleTable: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Resize columns by dragging their edges",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Drag and drop columns to reorder them",
      },
      { status: "success" as const, label: "Visibility", tooltip: "Show/hide columns dynamically" },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Pin columns to the left or right side",
      },
      {
        status: "success" as const,
        label: "Alignment",
        tooltip: "Align content left, center, or right",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Sort data by clicking column headers",
      },
      {
        status: "success" as const,
        label: "Filtering",
        tooltip: "Filter data with type-specific controls",
      },
      {
        status: "success" as const,
        label: "Advanced Filtering",
        tooltip: "Complex multi-condition filtering with custom operators",
      },
      {
        status: "success" as const,
        label: "Nested Headers",
        tooltip: "Column grouping and nesting",
      },
      {
        status: "success" as const,
        label: "Aggregation Functions",
        tooltip: "Built-in aggregation functions (sum, average, count, min, max, etc.)",
      },
      {
        status: "success" as const,
        label: "Column Selection",
        tooltip: "Select entire columns by clicking column headers",
      },
      {
        status: "success" as const,
        label: "Collapsible Columns",
        tooltip: "Collapse and expand column groups to manage screen space",
      },
    ],
    agGrid: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Resize columns by dragging their edges",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Drag and drop columns to reorder them",
      },
      { status: "success" as const, label: "Visibility", tooltip: "Show/hide columns dynamically" },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Pin columns to the left or right side",
      },
      {
        status: "success" as const,
        label: "Alignment",
        tooltip: "Align content left, center, or right",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Sort data by clicking column headers",
      },
      {
        status: "success" as const,
        label: "Filtering",
        tooltip: "Advanced filtering with multiple filter types",
      },
      {
        status: "success" as const,
        label: "Advanced Filtering",
        tooltip: "Complex multi-condition filtering with custom operators",
      },
      {
        status: "success" as const,
        label: "Nested Headers",
        tooltip: "Create nested column headers for complex data structures",
      },
      {
        status: "warning" as const,
        label: "Aggregation Functions",
        tooltip: "Built-in aggregation functions with pivot table support (Enterprise only)",
      },
      {
        status: "success" as const,
        label: "Column Selection",
        tooltip: "Select entire columns with advanced features",
      },
      {
        status: "success" as const,
        label: "Collapsible Columns",
        tooltip: "Collapse and expand column groups",
      },
    ],
    tanstack: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Visibility",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "error" as const,
        label: "Alignment",
        tooltip: "No direct support for column alignment",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Filtering",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Advanced Filtering",
        tooltip: "Complex filtering logic available through API, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Nested Headers",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "error" as const,
        label: "Aggregation Functions",
        tooltip: "No built-in aggregation functions, requires custom implementation",
      },
      {
        status: "error" as const,
        label: "Column Selection",
        tooltip: "No built-in column selection support",
      },
      {
        status: "success" as const,
        label: "Collapsible Columns",
        tooltip: "Available through column grouping",
      },
    ],
    antDesign: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Resize columns by dragging their edges",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Drag and drop columns to reorder them",
      },
      { status: "success" as const, label: "Visibility", tooltip: "Show/hide columns dynamically" },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Pin columns to the left or right side",
      },
      {
        status: "success" as const,
        label: "Alignment",
        tooltip: "Align content left, center, or right",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Sort data by clicking column headers",
      },
      { status: "success" as const, label: "Filtering", tooltip: "Built-in filter components" },
      {
        status: "error" as const,
        label: "Advanced Filtering",
        tooltip: "No built-in advanced filtering, requires custom implementation",
      },
      { status: "success" as const, label: "Nested Headers", tooltip: "Column grouping support" },
      {
        status: "error" as const,
        label: "Aggregation Functions",
        tooltip: "No built-in aggregation functions, requires custom implementation",
      },
      {
        status: "error" as const,
        label: "Column Selection",
        tooltip: "No built-in column selection support",
      },
      {
        status: "error" as const,
        label: "Collapsible Columns",
        tooltip: "No built-in support for collapsible columns",
      },
    ],
    materialReact: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Resize columns by dragging their edges",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Drag and drop columns to reorder them",
      },
      { status: "success" as const, label: "Visibility", tooltip: "Show/hide columns dynamically" },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Pin columns to the left or right side",
      },
      {
        status: "success" as const,
        label: "Alignment",
        tooltip: "Align content left, center, or right",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Sort data by clicking column headers",
      },
      { status: "success" as const, label: "Filtering", tooltip: "Built-in filter components" },
      {
        status: "warning" as const,
        label: "Advanced Filtering",
        tooltip: "Some advanced filtering through custom filter functions",
      },
      {
        status: "error" as const,
        label: "Nested Headers",
        tooltip: "No built-in support for nested headers",
      },
      {
        status: "error" as const,
        label: "Aggregation Functions",
        tooltip: "No built-in aggregation functions, requires custom implementation",
      },
      {
        status: "error" as const,
        label: "Column Selection",
        tooltip: "No built-in column selection support",
      },
      {
        status: "error" as const,
        label: "Collapsible Columns",
        tooltip: "No built-in support for collapsible columns",
      },
    ],
    handsontable: [
      {
        status: "success" as const,
        label: "Resizing",
        tooltip: "Resize columns by dragging their edges",
      },
      {
        status: "success" as const,
        label: "Reordering",
        tooltip: "Drag and drop columns to reorder them",
      },
      { status: "success" as const, label: "Visibility", tooltip: "Show/hide columns dynamically" },
      {
        status: "success" as const,
        label: "Pinning",
        tooltip: "Pin columns to the left or right side",
      },
      {
        status: "success" as const,
        label: "Alignment",
        tooltip: "Align content left, center, or right",
      },
      {
        status: "success" as const,
        label: "Sorting",
        tooltip: "Sort data by clicking column headers",
      },
      {
        status: "success" as const,
        label: "Filtering",
        tooltip: "Advanced filtering capabilities",
      },
      {
        status: "success" as const,
        label: "Advanced Filtering",
        tooltip: "Excel-like filtering with multiple conditions and custom operators",
      },
      {
        status: "success" as const,
        label: "Nested Headers",
        tooltip: "Multi-level column headers",
      },
      {
        status: "success" as const,
        label: "Aggregation Functions",
        tooltip: "Built-in aggregation functions with pivot table capabilities",
      },
      {
        status: "success" as const,
        label: "Column Selection",
        tooltip: "Select entire columns and ranges",
      },
      {
        status: "success" as const,
        label: "Collapsible Columns",
        tooltip: "Collapse and expand column groups",
      },
    ],
  },
  rowFeatures: {
    simpleTable: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Select single or multiple rows with checkboxes or clicks",
      },
      {
        status: "success" as const,
        label: "Row Grouping",
        tooltip: "Group rows by column values with expand/collapse functionality",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Adjust row height dynamically or set fixed heights",
      },
      {
        status: "success" as const,
        label: "Expansion",
        tooltip: "Expand rows to show additional details or nested content",
      },
    ],
    agGrid: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Select single or multiple rows with checkboxes or clicks",
      },
      {
        status: "warning" as const,
        label: "Row Grouping (Enterprise)",
        tooltip: "Group rows by column values with expand/collapse functionality (Enterprise only)",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Adjust row height dynamically or set fixed heights",
      },
      {
        status: "success" as const,
        label: "Expansion",
        tooltip: "Expand rows to show additional details or nested content",
      },
    ],
    tanstack: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Row Grouping",
        tooltip: "Available through API hooks, requires custom UI",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Requires custom implementation",
      },
      {
        status: "success" as const,
        label: "Row Expansion",
        tooltip: "Available through API hooks, requires custom UI",
      },
    ],
    antDesign: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Built-in row selection with checkboxes",
      },
      {
        status: "error" as const,
        label: "Row Grouping",
        tooltip: "No built-in row grouping support",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Support for custom row heights",
      },
      {
        status: "success" as const,
        label: "Expansion",
        tooltip: "Expandable rows for nested content",
      },
    ],
    materialReact: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Built-in row selection with checkboxes",
      },
      {
        status: "success" as const,
        label: "Row Grouping",
        tooltip: "Built-in row grouping functionality",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Support for custom row heights",
      },
      {
        status: "success" as const,
        label: "Expansion",
        tooltip: "Expandable rows for detail views",
      },
    ],
    handsontable: [
      {
        status: "success" as const,
        label: "Row Selection",
        tooltip: "Excel-like row selection",
      },
      {
        status: "success" as const,
        label: "Row Grouping",
        tooltip: "Advanced row grouping with nested levels",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Dynamic row height adjustment",
      },
      {
        status: "error" as const,
        label: "Expansion",
        tooltip: "No built-in row expansion support",
      },
    ],
  },
  cellFeatures: {
    simpleTable: [
      {
        status: "success" as const,
        label: "Cell Editing",
        tooltip: "Edit cell values inline with validation and formatting",
      },
      {
        status: "success" as const,
        label: "Cell Highlighting",
        tooltip: "Highlight cells and select cell ranges",
      },
      {
        status: "success" as const,
        label: "Cell Clicking",
        tooltip: "Handle cell click events with custom actions",
      },
      {
        status: "success" as const,
        label: "Custom Renderers",
        tooltip: "Create custom cell renderers for complex content",
      },
      {
        status: "success" as const,
        label: "Live Updates",
        tooltip: "Update cell values in real-time without page refresh",
      },
      {
        status: "success" as const,
        label: "Formatting",
        tooltip: "Format cell values (numbers, dates, currency, etc.)",
      },
      {
        status: "success" as const,
        label: "Validation",
        tooltip: "Validate cell input with custom rules and error messages",
      },
    ],
    agGrid: [
      {
        status: "success" as const,
        label: "Cell Editing",
        tooltip: "Edit cell values inline with validation and formatting",
      },
      {
        status: "warning" as const,
        label: "Cell Highlighting (Enterprise)",
        tooltip: "Cell range selection and highlighting (Enterprise only)",
      },
      {
        status: "success" as const,
        label: "Cell Clicking",
        tooltip: "Handle cell click events",
      },
      {
        status: "success" as const,
        label: "Custom Components",
        tooltip: "Create custom cell components for complex content",
      },
      {
        status: "success" as const,
        label: "Live Updates",
        tooltip: "Update cell values in real-time without page refresh",
      },
      {
        status: "success" as const,
        label: "Formatting",
        tooltip: "Format cell values (numbers, dates, currency, etc.)",
      },
      {
        status: "warning" as const,
        label: "Validation (Enterprise)",
        tooltip: "Validate cell input with custom rules and error messages (Enterprise only)",
      },
    ],
    tanstack: [
      {
        status: "error" as const,
        label: "Cell Editing",
        tooltip: "Requires custom implementation",
      },
      {
        status: "error" as const,
        label: "Cell Highlighting",
        tooltip: "Requires custom implementation",
      },
      {
        status: "error" as const,
        label: "Cell Clicking",
        tooltip: "Requires custom implementation",
      },
      {
        status: "success" as const,
        label: "Custom Renderers",
        tooltip: "Full flexibility for custom components",
      },
      {
        status: "error" as const,
        label: "Live Updates",
        tooltip: "Requires custom implementation",
      },
      { status: "error" as const, label: "Formatting", tooltip: "Requires custom implementation" },
      { status: "error" as const, label: "Validation", tooltip: "Requires custom implementation" },
    ],
    antDesign: [
      {
        status: "success" as const,
        label: "Cell Editing",
        tooltip: "Built-in editable cells with form validation",
      },
      {
        status: "error" as const,
        label: "Cell Highlighting",
        tooltip: "No built-in cell highlighting support",
      },
      {
        status: "success" as const,
        label: "Cell Clicking",
        tooltip: "Handle cell click events through onCell prop",
      },
      {
        status: "success" as const,
        label: "Custom Renderers",
        tooltip: "Custom render functions for cells",
      },
      {
        status: "error" as const,
        label: "Live Updates",
        tooltip: "Requires manual state management",
      },
      { status: "success" as const, label: "Formatting", tooltip: "Built-in formatting support" },
      {
        status: "success" as const,
        label: "Validation",
        tooltip: "Integration with Ant Design form validation",
      },
    ],
    materialReact: [
      {
        status: "success" as const,
        label: "Cell Editing",
        tooltip: "Built-in cell editing capabilities",
      },
      {
        status: "error" as const,
        label: "Cell Highlighting",
        tooltip: "No built-in cell highlighting support",
      },
      {
        status: "success" as const,
        label: "Cell Clicking",
        tooltip: "Handle cell click events",
      },
      { status: "success" as const, label: "Custom Renderers", tooltip: "Custom cell components" },
      {
        status: "error" as const,
        label: "Live Updates",
        tooltip: "Requires manual implementation",
      },
      { status: "success" as const, label: "Formatting", tooltip: "Built-in formatting options" },
      { status: "success" as const, label: "Validation", tooltip: "Built-in validation support" },
    ],
    handsontable: [
      {
        status: "success" as const,
        label: "Cell Editing",
        tooltip: "Excel-like cell editing experience",
      },
      {
        status: "success" as const,
        label: "Cell Highlighting",
        tooltip: "Excel-like cell range selection and highlighting",
      },
      {
        status: "success" as const,
        label: "Cell Clicking",
        tooltip: "Handle cell click events",
      },
      {
        status: "success" as const,
        label: "Custom Renderers",
        tooltip: "Extensive custom cell renderer support",
      },
      { status: "success" as const, label: "Live Updates", tooltip: "Real-time cell updates" },
      {
        status: "success" as const,
        label: "Formatting",
        tooltip: "Advanced cell formatting options",
      },
      { status: "success" as const, label: "Validation", tooltip: "Comprehensive data validation" },
    ],
  },
};

// Helper function to render features for a specific competitor
export const renderFeatures = (
  featureKey: keyof typeof FEATURE_DEFINITIONS,
  competitor: string
) => {
  const featureSet = FEATURE_DEFINITIONS[featureKey] as Record<string, FeatureImplementation[]>;
  const features = featureSet[competitor];
  if (!features) {
    console.warn(`No features defined for ${competitor} in ${featureKey}`);
    return null;
  }

  return (
    <Space direction="vertical">
      {features.map((feature: FeatureImplementation, index: number) => {
        const TagComponent =
          FeatureTags[
            feature.status === "success"
              ? "Success"
              : feature.status === "warning"
              ? "Warning"
              : feature.status === "error"
              ? "Error"
              : "Processing"
          ];
        return <div key={index}>{TagComponent(feature.label, feature.tooltip)}</div>;
      })}
    </Space>
  );
};

// Reusable pricing info
export const simplePricing = (
  <Space direction="vertical">
    {FeatureTags.Success("100% Free", "Completely free to use in any project")}
    {FeatureTags.Success(
      "31 kB (minified + gzipped)",
      "Minimal bundle size for optimal performance"
    )}
  </Space>
);
