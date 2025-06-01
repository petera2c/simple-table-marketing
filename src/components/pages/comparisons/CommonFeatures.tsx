import React from "react";
import { Space, Tag, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  Success: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="success">{label}</Tag>
    </Tooltip>
  ),
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
        status: "processing" as const,
        label: "Advanced Filtering",
        tooltip: "Multi-condition filtering coming soon",
      },
      {
        status: "success" as const,
        label: "Nested Headers",
        tooltip: "Column grouping and nesting",
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
    ],
  },
  rowFeatures: {
    simpleTable: [
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
        label: "Selection",
        tooltip: "Select single or multiple rows with checkboxes or clicks",
      },
      {
        status: "success" as const,
        label: "Expansion",
        tooltip: "Expand rows to show additional details or nested content",
      },
    ],
    agGrid: [
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
        label: "Selection",
        tooltip: "Select single or multiple rows with checkboxes or clicks",
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
        label: "Row Expansion",
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
    ],
    antDesign: [
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
        label: "Selection",
        tooltip: "Built-in row selection with checkboxes",
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
        label: "Selection",
        tooltip: "Built-in row selection with checkboxes",
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
        label: "Row Grouping",
        tooltip: "Advanced row grouping with nested levels",
      },
      {
        status: "success" as const,
        label: "Adjustable Height",
        tooltip: "Dynamic row height adjustment",
      },
      { status: "success" as const, label: "Selection", tooltip: "Flexible row selection modes" },
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
        label: "Editing",
        tooltip: "Edit cell values inline with validation and formatting",
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
        label: "Editing",
        tooltip: "Edit cell values inline with validation and formatting",
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
      { status: "error" as const, label: "Editing", tooltip: "Requires custom implementation" },
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
        label: "Editing",
        tooltip: "Built-in editable cells with form validation",
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
        label: "Editing",
        tooltip: "Built-in cell editing capabilities",
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
        label: "Editing",
        tooltip: "Excel-like cell editing experience",
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
    {FeatureTags.Success("197 kB (unpacked)", "Minimal bundle size for optimal performance")}
  </Space>
);
