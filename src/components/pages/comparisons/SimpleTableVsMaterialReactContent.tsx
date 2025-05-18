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

const SimpleTableVsMaterialReactContent = () => {
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
      title: "Material-UI Table",
      dataIndex: "materialReact",
      key: "materialReact",
      width: "37.5%",
    },
  ];

  const data = [
    {
      key: "quick-start",
      feature: FeatureIcons.QuickStart,
      simpleTable: FeatureStatus.Available("Single package, minimal setup"),
      materialReact: FeatureStatus.Available("Requires Material-UI core setup"),
    },
    {
      key: "virtualization",
      feature: FeatureIcons.Virtualization,
      simpleTable: FeatureStatus.Available("Built-in virtualization for millions of rows"),
      materialReact: FeatureStatus.Available("Requires additional package (react-window)"),
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Infinite Scroll", "No built-in infinite scroll support")}
        </Space>
      ),
    },
    {
      key: "column-features",
      feature: FeatureIcons.ColumnFeatures,
      simpleTable: commonColumnFeatures.simpleTable,
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("Resizing", "Resize columns by dragging their edges")}
          {FeatureTags.Error("Reordering", "No built-in column reordering")}
          {FeatureTags.Success("Visibility", "Show/hide columns dynamically")}
          {FeatureTags.Error("Pinning", "No built-in column pinning")}
          {FeatureTags.Success("Alignment", "Align content left, center, or right")}
          {FeatureTags.Success("Sorting", "Sort data by clicking column headers")}
          {FeatureTags.Error("Nested Headers", "No built-in support for nested headers")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Row Grouping", "No built-in row grouping support")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("Editing", "Edit cell values inline with validation and formatting")}
          {FeatureTags.Success(
            "Custom Components",
            "Create custom cell components for complex content"
          )}
          {FeatureTags.Success(
            "Live Updates",
            "Update cell values in real-time without page refresh"
          )}
          {FeatureTags.Error("Formatting", "No built-in formatting utilities")}
          {FeatureTags.Error("Validation", "No built-in validation utilities")}
          {FeatureTags.Error("Cell Merging", "No built-in cell merging support")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("Column Filters", "Filter individual columns")}
          {FeatureTags.Success("Global Search", "Search across all columns")}
          {FeatureTags.Success("Custom Filters", "Define custom filter functions")}
          {FeatureTags.Error("Faceted Filters", "No built-in support for faceted filters")}
        </Space>
      ),
    },
    {
      key: "pagination",
      feature: (
        <Space>
          <span>Pagination</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Client-side", "Built-in pagination with customizable controls")}
          {FeatureTags.Success("Server-side", "Support for controlled pagination")}
        </Space>
      ),
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("Client-side", "Built-in pagination with Material Design controls")}
          {FeatureTags.Success("Server-side", "Support for controlled pagination")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Formulas", "No formula support")}
          {FeatureTags.Success("Data Binding", "Two-way data binding with React state")}
          {FeatureTags.Error("Context Menu", "No built-in context menu")}
          {FeatureTags.Error("Comments", "No comment functionality")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Value Getters/Setters", "No built-in data accessor utilities")}
          {FeatureTags.Error("Cell Range Selection", "No built-in range selection")}
          {FeatureTags.Error("Aggregation Functions", "No built-in aggregation utilities")}
          {FeatureTags.Error("Pivot Tables", "Not supported")}
          {FeatureTags.Error("Tree Data", "Limited support for hierarchical data")}
          {FeatureTags.Error("Row Spanning", "Not supported")}
          {FeatureTags.Error("Master/Detail Views", "Not supported")}
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
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Context Menu", "No built-in context menu")}
          {FeatureTags.Error("Status Bar", "No built-in status bar")}
          {FeatureTags.Error("Column Menu", "No built-in column menu")}
          {FeatureTags.Success("Full Width Rows", "Support for spanning rows across all columns")}
          {FeatureTags.Success("Advanced Tooltips", "Material-UI Tooltip integration")}
        </Space>
      ),
    },
    {
      key: "integration-features",
      feature: FeatureIcons.IntegrationFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Processing("Excel Export/Import", "Coming soon to Simple Table")}
          {FeatureTags.Processing("CSV Export/Import", "Coming soon to Simple Table")}
          {FeatureTags.Success("Clipboard Operations", "Copy/paste data to/from clipboard")}
          {FeatureTags.Processing("Advanced Keyboard Navigation", "Coming soon to Simple Table")}
          {FeatureTags.Processing("Accessibility Features", "Coming soon to Simple Table")}
        </Space>
      ),
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Error("Excel Export/Import", "No built-in export/import functionality")}
          {FeatureTags.Error("CSV Export/Import", "No built-in export/import functionality")}
          {FeatureTags.Error("Clipboard Operations", "No built-in clipboard functionality")}
          {FeatureTags.Success("Advanced Keyboard Navigation", "Material-UI focus management")}
          {FeatureTags.Success("Accessibility Features", "Material-UI accessibility support")}
        </Space>
      ),
    },
    {
      key: "theming",
      feature: FeatureIcons.Customization,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success(
            "Multiple Themes",
            "Support for light and dark themes with easy customization"
          )}
          {FeatureTags.Success("Custom Icons", "Replace default icons with custom ones")}
          {FeatureTags.Success(
            "Full Theme Control",
            "Complete control over styling through CSS variables"
          )}
          {FeatureTags.Success("Responsive", "Mobile-friendly by default")}
        </Space>
      ),
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("Material Design", "Full Material Design theming system")}
          {FeatureTags.Success("Custom Icons", "Replace default icons with custom ones")}
          {FeatureTags.Success(
            "Theme Provider",
            "Complete control through Material-UI's theming system"
          )}
          {FeatureTags.Success(
            "Responsive",
            "Mobile-friendly with Material-UI responsive components"
          )}
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: FeatureIcons.PricingSize,
      simpleTable: simplePricing,
      materialReact: (
        <Space direction="vertical">
          {FeatureTags.Success("MIT License", "Free to use with MIT license")}
          {FeatureTags.Warning(
            "5.56 MB (unpacked)",
            "Larger bundle size due to Material-UI dependencies"
          )}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      When choosing a data grid for your React application, you need to consider both functionality
      and integration with your existing UI framework. In this comparison, we'll look at{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>
      , a lightweight (16 kB) standalone React data grid, against{" "}
      <Text className="text-lg text-inherit" strong>
        Material-UI Table
      </Text>
      , a component from the popular Material Design framework. Let's break down their features,
      performance, and more to help you decide.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, standalone data grid that provides essential features with minimal
        overhead. It's ideal for projects that need a performant table component without the weight
        of a full UI framework. With its 16 kB bundle size, it offers a great balance of features
        and performance.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Material-UI Table
        </Text>{" "}
        is part of the comprehensive Material Design framework, offering a consistent look and feel
        with other Material-UI components. It's perfect for projects already using Material-UI, but
        comes with the overhead of the full framework and lacks some advanced data grid features
        found in dedicated solutions.
      </Text>
      <Text className="text-lg block text-inherit">
        If you need a lightweight, standalone table component with advanced data grid features,{" "}
        <a
          href="https://www.simple-table.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          try Simple Table
        </a>
        . If you're already using Material-UI and want consistent styling with basic table
        functionality, Material-UI Table might be the better choice.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. Material-UI Table"
      subtitle="A comprehensive comparison of lightweight vs full-featured React data grid solutions"
      introText={introText}
      featureTable={{ columns, data }}
      performanceMetrics={{
        competitor: "Material-UI Table",
        competitorSize: "5.56 MB (unpacked)",
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsMaterialReactContent;
