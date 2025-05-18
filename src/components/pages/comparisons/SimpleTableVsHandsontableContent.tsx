"use client";
import React from "react";
import { Typography, Space } from "antd";
import ComparisonLayout from "./ComparisonLayout";
import {
  FeatureIcons,
  FeatureStatus,
  FeatureTags,
  commonColumnFeatures,
  simplePricing,
} from "./CommonFeatures";

const { Text } = Typography;

const SimpleTableVsHandsontableContent = () => {
  const columns = [
    {
      title: "Feature",
      dataIndex: "feature",
      key: "feature",
      width: "25%",
    },
    {
      title: "Simple Table",
      dataIndex: "simpleTable",
      key: "simpleTable",
      width: "37.5%",
    },
    {
      title: "Handsontable",
      dataIndex: "handsontable",
      key: "handsontable",
      width: "37.5%",
    },
  ];

  const data = [
    {
      key: "quick-start",
      feature: FeatureIcons.QuickStart,
      simpleTable: FeatureStatus.Available("Easy npm install and minimal setup"),
      handsontable: FeatureStatus.Paid("Simple setup, but requires commercial license"),
    },
    {
      key: "virtualization",
      feature: FeatureIcons.Virtualization,
      simpleTable: FeatureStatus.Available("Built-in virtualization for millions of rows"),
      handsontable: FeatureStatus.Paid("Built-in virtualization support (commercial license)"),
    },
    {
      key: "infinite-scroll",
      feature: FeatureIcons.RowFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success(
            "Infinite Scroll",
            "Scroll to the bottom of the table to load more data"
          )}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Infinite Scroll", "Support for infinite scroll (paid)")}
        </Space>
      ),
    },
    {
      key: "column-features",
      feature: FeatureIcons.ColumnFeatures,
      simpleTable: commonColumnFeatures.simpleTable,
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Resizing", "Resize columns by dragging their edges (paid)")}
          {FeatureTags.Warning("Reordering", "Drag and drop columns to reorder them (paid)")}
          {FeatureTags.Warning("Visibility", "Show/hide columns dynamically (paid)")}
          {FeatureTags.Warning("Pinning", "Pin columns to the left or right side (paid)")}
          {FeatureTags.Warning("Alignment", "Align content left, center, or right (paid)")}
          {FeatureTags.Warning("Sorting", "Sort data by clicking column headers (paid)")}
          {FeatureTags.Warning("Nested Headers", "Create nested column headers (paid)")}
        </Space>
      ),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success(
            "Row Grouping",
            "Group rows by column values with expand/collapse functionality"
          )}
          {FeatureTags.Success(
            "Adjustable Height",
            "Adjust row height dynamically or set fixed heights"
          )}
          {FeatureTags.Success(
            "Selection",
            "Select single or multiple rows with checkboxes or clicks"
          )}
          {FeatureTags.Success(
            "Expansion",
            "Expand rows to show additional details or nested content"
          )}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Row Grouping",
            "Group rows by column values with expand/collapse (paid)"
          )}
          {FeatureTags.Warning(
            "Adjustable Height",
            "Adjust row height dynamically or set fixed heights (paid)"
          )}
          {FeatureTags.Warning(
            "Selection",
            "Select single or multiple rows with checkboxes or clicks (paid)"
          )}
          {FeatureTags.Warning(
            "Expansion",
            "Expand rows to show additional details or nested content (paid)"
          )}
        </Space>
      ),
    },
    {
      key: "cell-features",
      feature: FeatureIcons.CellFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Editing", "Edit cell values inline with validation and formatting")}
          {FeatureTags.Success(
            "Custom Renderers",
            "Create custom cell renderers for complex content"
          )}
          {FeatureTags.Success(
            "Live Updates",
            "Update cell values in real-time without page refresh"
          )}
          {FeatureTags.Success("Formatting", "Format cell values (numbers, dates, currency, etc.)")}
          {FeatureTags.Success(
            "Validation",
            "Validate cell input with custom rules and error messages"
          )}
          {FeatureTags.Error("Cell Merging", "Not available in Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Editing",
            "Excel-like cell editing with validation and formatting (paid)"
          )}
          {FeatureTags.Warning(
            "Custom Renderers",
            "Create custom cell renderers for complex content (paid)"
          )}
          {FeatureTags.Warning(
            "Live Updates",
            "Update cell values in real-time without page refresh (paid)"
          )}
          {FeatureTags.Warning(
            "Formatting",
            "Advanced formatting for numbers, dates, currency, etc. (paid)"
          )}
          {FeatureTags.Warning(
            "Validation",
            "Excel-like validation with custom rules and error messages (paid)"
          )}
          {FeatureTags.Warning("Cell Merging", "Cell merging and spanning (paid)")}
        </Space>
      ),
    },
    {
      key: "spreadsheet-features",
      feature: (
        <Space>
          <span>Spreadsheet Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Processing("Basic Formulas", "Coming soon to Simple Table")}
          {FeatureTags.Success("Data Binding", "Two-way data binding with React state")}
          {FeatureTags.Error("Context Menu", "Not available in Simple Table")}
          {FeatureTags.Error("Comments", "Not available in Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Excel-like Formulas", "Full Excel-like formula support (paid)")}
          {FeatureTags.Warning("Data Binding", "Two-way data binding capabilities (paid)")}
          {FeatureTags.Warning("Context Menu", "Excel-like context menu (paid)")}
          {FeatureTags.Warning("Comments", "Cell comments and annotations (paid)")}
        </Space>
      ),
    },
    {
      key: "filtering",
      feature: (
        <Space>
          <span>Filtering</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Column Filters", "Filter individual columns")}
          {FeatureTags.Success("Global Search", "Search across all columns")}
          {FeatureTags.Success("Custom Filters", "Define custom filter functions")}
          {FeatureTags.Processing("Faceted Filters", "Coming soon to Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Column Filters", "Advanced column filtering (paid)")}
          {FeatureTags.Warning("Global Search", "Search across all columns (paid)")}
          {FeatureTags.Warning("Custom Filters", "Define custom filter functions (paid)")}
          {FeatureTags.Warning("Faceted Filters", "Multiple filter modes and options (paid)")}
        </Space>
      ),
    },
    {
      key: "advanced-data-features",
      feature: FeatureIcons.AdvancedDataFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Value Getters/Setters", "Custom functions to get/set cell values")}
          {FeatureTags.Success("Cell Range Selection", "Select multiple cells in a range")}
          {FeatureTags.Processing("Aggregation Functions", "Coming soon to Simple Table")}
          {FeatureTags.Error("Pivot Tables", "Not available in Simple Table")}
          {FeatureTags.Error("Tree Data", "Not available in Simple Table")}
          {FeatureTags.Error("Row Spanning", "Not available in Simple Table")}
          {FeatureTags.Error("Master/Detail Views", "Not available in Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Value Getters/Setters", "Custom data access functions (paid)")}
          {FeatureTags.Warning("Cell Range Selection", "Select and manipulate cell ranges (paid)")}
          {FeatureTags.Warning("Aggregation Functions", "Calculate sums, averages, etc. (paid)")}
          {FeatureTags.Warning("Pivot Tables", "Create and customize pivot tables (paid)")}
          {FeatureTags.Warning("Tree Data", "Display hierarchical data structures (paid)")}
          {FeatureTags.Warning("Row Spanning", "Span cells across multiple rows (paid)")}
          {FeatureTags.Warning("Master/Detail Views", "Display master-detail relationships (paid)")}
        </Space>
      ),
    },
    {
      key: "data-import-export",
      feature: FeatureIcons.IntegrationFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Processing("Excel Export", "Coming soon to Simple Table")}
          {FeatureTags.Processing("CSV Export", "Coming soon to Simple Table")}
          {FeatureTags.Success("Clipboard Operations", "Copy/paste data to/from clipboard")}
          {FeatureTags.Processing("Excel Import", "Coming soon to Simple Table")}
          {FeatureTags.Processing("CSV Import", "Coming soon to Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Excel Export", "Comprehensive Excel export (paid)")}
          {FeatureTags.Warning("CSV Export", "Comprehensive CSV export (paid)")}
          {FeatureTags.Warning("Clipboard Operations", "Excel-compatible copy/paste (paid)")}
          {FeatureTags.Warning("Excel Import", "Import data from Excel (paid)")}
          {FeatureTags.Warning("CSV Import", "Import data from CSV (paid)")}
        </Space>
      ),
    },
    {
      key: "undo-redo",
      feature: (
        <Space>
          <span>Undo/Redo</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Processing("Basic Undo/Redo", "Coming soon to Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Advanced Undo/Redo", "Excel-like history management (paid)")}
        </Space>
      ),
    },
    {
      key: "advanced-ui-features",
      feature: FeatureIcons.AdvancedUIFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Error("Context Menu", "Not available in Simple Table")}
          {FeatureTags.Error("Status Bar", "Not available in Simple Table")}
          {FeatureTags.Processing("Column Menu", "Coming soon to Simple Table")}
          {FeatureTags.Processing("Full Width Rows", "Coming soon to Simple Table")}
          {FeatureTags.Processing("Advanced Tooltips", "Coming soon to Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Context Menu", "Excel-like context menu (paid)")}
          {FeatureTags.Warning(
            "Status Bar",
            "Status bar showing selected rows and other info (paid)"
          )}
          {FeatureTags.Warning("Column Menu", "Column menu for filtering, sorting, etc. (paid)")}
          {FeatureTags.Warning(
            "Full Width Rows",
            "Rows that span the full width of the table (paid)"
          )}
          {FeatureTags.Warning("Advanced Tooltips", "Advanced tooltips with rich content (paid)")}
        </Space>
      ),
    },
    {
      key: "theming",
      feature: FeatureIcons.Customization,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Multiple Themes", "Light/dark themes included")}
          {FeatureTags.Success("Custom Icons", "Replace default icons easily")}
          {FeatureTags.Success("CSS Variables", "Theming through CSS variables")}
          {FeatureTags.Success("Responsive", "Mobile-friendly by default")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Theming System", "Customizable themes (paid)")}
          {FeatureTags.Error("Limited Styling", "Very limited styling options")}
          {FeatureTags.Warning("Custom Icons", "Replace default icons (paid)")}
          {FeatureTags.Warning("Responsive", "Responsive configuration options (paid)")}
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: FeatureIcons.PricingSize,
      simpleTable: simplePricing,
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Commercial License Required",
            "Starts at $590/year for a single developer"
          )}
          {FeatureTags.Warning("Free for Non-Commercial", "Free for non-commercial use only")}
          {FeatureTags.Error("21.3 MB (unpacked)", "20.8 MB main package + 505 kB React add-on")}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      When building applications that need spreadsheet-like functionality, choosing the right data
      grid is crucial. In this comparison, we'll look at{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>
      , a lightweight (16 kB) React data grid, against{" "}
      <Text className="text-lg text-inherit" strong>
        Handsontable
      </Text>
      , a feature-rich commercial spreadsheet component. Let's break down their features, pricing,
      and more to help you decide.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, free alternative to Handsontable, offering essential features like
        virtualization, cell editing, and column management. It's ideal for projects that need basic
        spreadsheet functionality without the overhead of advanced features or commercial licensing.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Handsontable
        </Text>{" "}
        is a full-featured spreadsheet component with Excel-like capabilities, including advanced
        formulas, cell merging, and comprehensive import/export features. However, these features
        come at the cost of a larger bundle size and require a commercial license starting at
        $590/year for production use.
      </Text>
      <Text className="text-lg block text-inherit">
        If you need basic spreadsheet functionality with a small footprint,{" "}
        <a
          href="https://www.simple-table.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          try Simple Table
        </a>
        . If you need full Excel-like capabilities and don't mind the commercial license,
        Handsontable might be the better choice.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. Handsontable"
      subtitle="A comprehensive comparison of React data grid solutions for spreadsheet-like functionality"
      introText={introText}
      featureTable={{ columns, data }}
      performanceMetrics={{
        competitor: "Handsontable",
        competitorSize: "21.3 MB (unpacked)",
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsHandsontableContent;
