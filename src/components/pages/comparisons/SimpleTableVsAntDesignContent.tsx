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

const SimpleTableVsAntDesignContent = () => {
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
      title: "Ant Design Table",
      dataIndex: "antDesign",
      key: "antDesign",
      width: "37.5%",
    },
  ];

  const data = [
    {
      key: "quick-start",
      feature: FeatureIcons.QuickStart,
      simpleTable: FeatureStatus.Available("Single package, minimal setup"),
      antDesign: FeatureStatus.Available("Requires Ant Design core setup"),
    },
    {
      key: "virtualization",
      feature: FeatureIcons.Virtualization,
      simpleTable: FeatureStatus.Available("Built-in virtualization for millions of rows"),
      antDesign: FeatureStatus.Available("Requires additional rc-virtual-list package"),
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Infinite Scroll", "Built-in support for infinite scroll")}
        </Space>
      ),
    },
    {
      key: "column-features",
      feature: FeatureIcons.ColumnFeatures,
      simpleTable: commonColumnFeatures.simpleTable,
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Resizing", "Resize columns by dragging their edges")}
          {FeatureTags.Success("Reordering", "Reorder columns by dragging them")}
          {FeatureTags.Success("Visibility", "Show/hide columns dynamically")}
          {FeatureTags.Success("Pinning", "Pin columns to the left or right side")}
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
          {FeatureTags.Error("Tree Data", "Not available in Simple Table")}
        </Space>
      ),
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Error("Row Grouping", "No built-in support for row grouping")}
          {FeatureTags.Success(
            "Adjustable Height",
            "Adjust row height dynamically or set fixed heights"
          )}
          {FeatureTags.Error("Selection", "No built-in support for row selection")}
          {FeatureTags.Error("Expansion", "Limited support for row expansion")}
          {FeatureTags.Success("Tree Data", "Built-in support for tree data structures")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Editing", "Basic cell editing capabilities")}
          {FeatureTags.Success(
            "Custom Components",
            "Create custom cell components for complex content"
          )}
          {FeatureTags.Success(
            "Live Updates",
            "Update cell values in real-time without page refresh"
          )}
          {FeatureTags.Error("Formatting", "Limited built-in formatting options")}
          {FeatureTags.Error("Validation", "No built-in validation, requires Form integration")}
          {FeatureTags.Error("Cell Merging", "No built-in cell merging support")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Error("Formulas", "No formula support")}
          {FeatureTags.Error("Data Binding", "No built-in two-way data binding")}
          {FeatureTags.Error("Context Menu", "No built-in context menu")}
          {FeatureTags.Error("Comments", "No built-in comment functionality")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Column Filters", "Basic column filters")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Client-side", "Built-in pagination with Ant Design controls")}
          {FeatureTags.Success("Server-side", "Support for controlled pagination")}
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
          {FeatureTags.Error("Row Spanning", "Not available in Simple Table")}
          {FeatureTags.Error("Master/Detail Views", "Not available in Simple Table")}
        </Space>
      ),
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Error("Value Getters/Setters", "No built-in data accessor functions")}
          {FeatureTags.Error("Cell Range Selection", "Not supported")}
          {FeatureTags.Error("Aggregation Functions", "No built-in aggregation capabilities")}
          {FeatureTags.Error("Pivot Tables", "Not supported")}
          {FeatureTags.Success("Row Spanning", "Basic row span support through rowSpan property")}
          {FeatureTags.Error("Master/Detail Views", "No built-in master/detail support")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Error("Context Menu", "Not built-in, requires additional components")}
          {FeatureTags.Error("Status Bar", "Not built-in, requires custom implementation")}
          {FeatureTags.Error("Column Menu", "No built-in column menu")}
          {FeatureTags.Error("Full Width Rows", "Limited support through colSpan")}
          {FeatureTags.Success(
            "Advanced Tooltips",
            "Integration with Ant Design Tooltip components"
          )}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Error("Excel Export/Import", "No built-in export/import functionality")}
          {FeatureTags.Error("CSV Export/Import", "No built-in export/import functionality")}
          {FeatureTags.Error("Clipboard Operations", "No built-in clipboard functionality")}
          {FeatureTags.Error("Advanced Keyboard Navigation", "Limited keyboard support")}
          {FeatureTags.Success("Accessibility Features", "Basic accessibility support")}
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
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("Ant Design Theme", "Full Ant Design theming system")}
          {FeatureTags.Success("Custom Icons", "Replace default icons with custom ones")}
          {FeatureTags.Success(
            "Theme Provider",
            "Complete control through Ant Design's theming system"
          )}
          {FeatureTags.Success("Responsive", "Mobile-friendly with responsive configurations")}
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: FeatureIcons.PricingSize,
      simpleTable: simplePricing,
      antDesign: (
        <Space direction="vertical">
          {FeatureTags.Success("MIT License", "Free to use with MIT license")}
          {FeatureTags.Error("48.3 MB (unpacked)", "Entire Ant Design component library required")}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      When choosing a data grid for your React application, you need to consider both functionality
      and integration with your existing UI framework. In this comparison, we'll look at{" "}
      <Text className="text-lg" strong>
        Simple Table
      </Text>
      , a lightweight (16 kB) standalone React data grid, against{" "}
      <Text className="text-lg" strong>
        Ant Design Table
      </Text>
      , a component from the popular Ant Design framework. Let's break down their features,
      performance, and more to help you decide.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg text-gray-700 mb-4" style={{ display: "block" }}>
        <Text className="text-lg" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, standalone data grid that provides essential features with minimal
        overhead. It's ideal for projects that need a performant table component without the weight
        of a full UI framework. With its 16 kB bundle size, it offers a great balance of features
        and performance.
      </Text>
      <Text className="text-lg text-gray-700 mb-4" style={{ display: "block" }}>
        <Text className="text-lg" strong>
          Ant Design Table
        </Text>{" "}
        is part of the comprehensive Ant Design framework, offering a consistent look and feel with
        other Ant Design components. While it provides basic table functionality, it lacks many
        advanced data grid features that Simple Table offers. It comes with the overhead of the full
        framework (~100 kB) and requires additional customization for complex use cases.
      </Text>
      <Text className="text-lg text-gray-700" style={{ display: "block" }}>
        If you need a lightweight, standalone table component with advanced features,{" "}
        <a href="https://www.simple-table.com" className="text-blue-600 hover:underline">
          try Simple Table
        </a>
        . If you're already using Ant Design and need a basic table with Ant Design styling, the Ant
        Design Table might be sufficient for simpler use cases.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. Ant Design Table"
      subtitle="A comprehensive comparison of lightweight vs full-featured React data grid solutions"
      introText={introText}
      featureTable={{ columns, data }}
      performanceMetrics={{
        competitor: "Ant Design Table",
        competitorSize: "48.3 MB (unpacked)",
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsAntDesignContent;
