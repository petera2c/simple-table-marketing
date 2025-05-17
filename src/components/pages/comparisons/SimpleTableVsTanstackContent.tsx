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

const SimpleTableVsTanstackContent = () => {
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
      title: "TanStack Table",
      dataIndex: "tanstack",
      key: "tanstack",
      width: "37.5%",
    },
  ];

  const data = [
    {
      key: "quick-start",
      feature: FeatureIcons.QuickStart,
      simpleTable: FeatureStatus.Available("Single package with ready-to-use components"),
      tanstack: FeatureStatus.Available("Headless library requiring custom UI implementation"),
    },
    {
      key: "component-type",
      feature: (
        <Space>
          <span>Component Type</span>
        </Space>
      ),
      simpleTable: FeatureStatus.Available("Ready-to-use solution with pre-built UI"),
      tanstack: FeatureStatus.Available("Headless library (hooks & utilities without UI)"),
    },
    {
      key: "virtualization",
      feature: FeatureIcons.Virtualization,
      simpleTable: FeatureStatus.Available("Built-in virtualization for millions of rows"),
      tanstack: FeatureStatus.Available("Requires additional package (@tanstack/react-virtual)"),
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
      tanstack: FeatureStatus.Available(
        "Available through API hooks, requires custom UI implementation"
      ),
    },
    {
      key: "column-features",
      feature: FeatureIcons.ColumnFeatures,
      simpleTable: commonColumnFeatures.simpleTable,
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Resizing", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Reordering", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Visibility", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Pinning", "Available through API hooks, requires custom UI")}
          {FeatureTags.Error("Alignment", "No direct support for column alignment")}
          {FeatureTags.Success("Sorting", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Nested Headers", "Available through API hooks, requires custom UI")}
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
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Column Filters", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Global Search", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Custom Filters", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Faceted Filters", "Multiple filter modes and options")}
        </Space>
      ),
    },
    {
      key: "cell-features",
      feature: FeatureIcons.CellFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Editing", "Built-in cell editors with validation")}
          {FeatureTags.Success("Custom Renderers", "Custom cell render components")}
          {FeatureTags.Success("Live Updates", "Update cell values in real-time")}
          {FeatureTags.Success("Formatting", "Data formatting with built-in formatters")}
          {FeatureTags.Success("Validation", "Validate cell input with custom rules")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Error("Editing", "Requires custom implementation")}
          {FeatureTags.Success("Custom Renderers", "Full flexibility for custom components")}
          {FeatureTags.Error("Live Updates", "Requires custom implementation")}
          {FeatureTags.Error("Formatting", "Requires custom implementation")}
          {FeatureTags.Error("Validation", "Requires custom implementation")}
        </Space>
      ),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Row Selection", "Built-in single/multi-row selection")}
          {FeatureTags.Success("Row Expansion", "Expandable rows for nested details")}
          {FeatureTags.Success("Row Grouping", "Group rows by column value")}
          {FeatureTags.Success("Adjustable Height", "Adjust row height dynamically")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Row Selection", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Row Expansion", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Row Grouping", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Adjustable Height", "Requires custom implementation")}
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
          {FeatureTags.Error("Cursor-based", "Not supported in Simple Table")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Client-side", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Server-side", "Available through API hooks, requires custom UI")}
          {FeatureTags.Success("Cursor-based", "Support for cursor-based pagination")}
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
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Value Getters/Setters", "Advanced data accessors and mutation")}
          {FeatureTags.Error("Cell Range Selection", "Requires custom implementation")}
          {FeatureTags.Success("Aggregation Functions", "Built-in support for data aggregation")}
          {FeatureTags.Error("Pivot Tables", "Requires custom implementation")}
          {FeatureTags.Success("Tree Data", "Built-in support for tree data structures")}
          {FeatureTags.Error("Row Spanning", "Requires custom implementation")}
          {FeatureTags.Success(
            "Master/Detail Views",
            "Available through API hooks, requires custom UI"
          )}
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
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Error("Context Menu", "Requires custom implementation")}
          {FeatureTags.Error("Status Bar", "Requires custom implementation")}
          {FeatureTags.Error("Column Menu", "Requires custom implementation")}
          {FeatureTags.Error("Full Width Rows", "Requires custom implementation")}
          {FeatureTags.Error("Advanced Tooltips", "Requires custom implementation")}
        </Space>
      ),
    },
    {
      key: "theming",
      feature: FeatureIcons.Customization,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Built-in Themes", "Light/dark modes included")}
          {FeatureTags.Success("Custom Icons", "Replace default icons with custom ones")}
          {FeatureTags.Success("Full Theme Control", "CSS variables for easy customization")}
          {FeatureTags.Success("Responsive", "Mobile-friendly by default")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Error("Built-in Themes", "No built-in UI, themes must be built")}
          {FeatureTags.Error("Custom Icons", "No built-in icons, must be implemented")}
          {FeatureTags.Error("Full Theme Control", "Requires complete UI implementation")}
          {FeatureTags.Error("Responsive", "Requires custom responsive implementation")}
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
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Error("Excel Export/Import", "Requires custom implementation")}
          {FeatureTags.Error("CSV Export/Import", "Requires custom implementation")}
          {FeatureTags.Error("Clipboard Operations", "Requires custom implementation")}
          {FeatureTags.Error("Advanced Keyboard Navigation", "Requires custom implementation")}
          {FeatureTags.Error("Accessibility Features", "Requires custom implementation")}
        </Space>
      ),
    },
    {
      key: "developer-experience",
      feature: (
        <Space>
          <span>Developer Experience</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("TypeScript Support", "Full TypeScript support with strong typing")}
          {FeatureTags.Success("Easy Setup", "Minimal configuration required")}
          {FeatureTags.Success("Ready-to-use Components", "No need to build UI from scratch")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("TypeScript Support", "Excellent TypeScript integration")}
          {FeatureTags.Warning("Steep Learning Curve", "Requires understanding complex concepts")}
          {FeatureTags.Warning("UI Implementation", "Requires building all UI components")}
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: FeatureIcons.PricingSize,
      simpleTable: simplePricing,
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Free (MIT License)", "Open-source with MIT license")}
          {FeatureTags.Success("~12 kB (core)", "Core package is lightweight")}
          {FeatureTags.Warning("Additional Size for UI", "Your custom UI adds to bundle size")}
        </Space>
      ),
    },
    {
      key: "learning-curve",
      feature: (
        <Space>
          <span>Learning Curve</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Success("Low", "Ready to use with minimal setup")}
          {FeatureTags.Success("Clear Documentation", "Examples and API references")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Warning("Steep", "Requires understanding core concepts and building UI")}
          {FeatureTags.Success("Extensive Documentation", "Detailed docs and examples")}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      When choosing a React table library, you have two main approaches: a ready-to-use solution or
      a headless library. This comparison examines{" "}
      <Text className="text-lg" strong>
        Simple Table
      </Text>
      , a full-featured data grid with built-in UI, and{" "}
      <Text className="text-lg" strong>
        TanStack Table
      </Text>{" "}
      (formerly React Table), a headless library that provides table logic without UI components.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg text-gray-700 mb-4" style={{ display: "block" }}>
        <Text className="text-lg" strong>
          Simple Table
        </Text>{" "}
        provides a complete solution with pre-built UI components, ready to use out of the box. It's
        ideal for projects that need a functional data grid quickly without building UI components
        from scratch. With a small bundle size (16 kB) and comprehensive features, it's great for
        most table needs where you want to focus on your application logic rather than building UI
        components.
      </Text>
      <Text className="text-lg text-gray-700 mb-4" style={{ display: "block" }}>
        <Text className="text-lg" strong>
          TanStack Table
        </Text>{" "}
        is a headless library that gives you complete control over your table's UI. It provides
        hooks and utilities to handle table logic, but you'll need to build all UI components
        yourself. It's perfect for projects that require highly customized tables and have the
        resources to build custom UI components from scratch.
      </Text>
      <Text className="text-lg text-gray-700" style={{ display: "block" }}>
        Choose{" "}
        <a href="https://www.simple-table.com" className="text-blue-600 hover:underline">
          Simple Table
        </a>{" "}
        if you want a ready-to-use solution with minimal setup. Choose TanStack Table if you need
        complete UI flexibility and have the time and resources to build custom components.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. TanStack Table"
      subtitle="Ready-to-use solution vs. headless library approach"
      introText={introText}
      featureTable={{ columns, data }}
      performanceMetrics={{
        competitor: "TanStack Table",
        competitorSize: "~12 kB + custom UI",
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsTanstackContent;
