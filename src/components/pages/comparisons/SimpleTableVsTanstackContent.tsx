"use client";
import React from "react";
import { Typography, Space } from "antd";
import ComparisonLayout from "./ComparisonLayout";
import {
  FeatureIcons,
  FeatureStatus,
  FeatureTags,
  renderFeatures,
  simplePricing,
} from "./CommonFeatures";

const { Text, Title } = Typography;

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
      simpleTable: FeatureStatus.Available("Easy npm install and minimal setup"),
      tanstack: FeatureStatus.Available(
        "Easy npm install, but requires more setup for UI components"
      ),
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
      simpleTable: FeatureStatus.Available(
        "Supports millions of rows with advanced row virtualization"
      ),
      tanstack: FeatureStatus.Available("Built-in support through @tanstack/react-virtual"),
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
      simpleTable: renderFeatures("columnFeatures", "simpleTable"),
      tanstack: renderFeatures("columnFeatures", "tanstack"),
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
          {FeatureTags.Processing("Global Search", "Coming soon to Simple Table")}
          {FeatureTags.Success("Custom Filters", "Define custom filter functions")}
          {FeatureTags.Success("Faceted Filters", "Multiple filter modes and options")}
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
      simpleTable: renderFeatures("cellFeatures", "simpleTable"),
      tanstack: renderFeatures("cellFeatures", "tanstack"),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: renderFeatures("rowFeatures", "simpleTable"),
      tanstack: renderFeatures("rowFeatures", "tanstack"),
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
          {FeatureTags.Error("Pivot Tables", "Not available in Simple Table")}
          {FeatureTags.Success("Tree Data", "Display hierarchical data in a tree structure")}
          {FeatureTags.Error("Row Spanning", "Not available in Simple Table")}
          {FeatureTags.Error("Master/Detail Views", "Not available in Simple Table")}
        </Space>
      ),
      tanstack: (
        <Space direction="vertical">
          {FeatureTags.Success("Value Getters/Setters", "Advanced data accessors and mutation")}
          {FeatureTags.Error("Cell Range Selection", "Requires custom implementation")}
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
          {FeatureTags.Success("Advanced Keyboard Navigation", "Support for keyboard navigation")}
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
          {FeatureTags.Success("~50 kB (minified + gzipped)", "Core package is lightweight")}
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
      The React table ecosystem offers two distinct philosophies: ready-to-use components versus
      headless libraries that provide logic without UI. This fundamental choice affects everything
      from development speed to long-term maintenance. Many developers start their projects by
      evaluating{" "}
      <Text className="text-lg text-inherit" strong>
        TanStack Table
      </Text>{" "}
      (formerly React Table), the most popular headless table library, which provides powerful hooks
      and utilities but requires you to build every UI component from scratch. On the other side,{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      offers a complete, production-ready solution that gets you from zero to functional data grid
      in minutes rather than weeks. This comparison examines both approaches: the flexibility and
      control of building everything yourself versus the speed and convenience of a
      batteries-included solution. We'll help you determine which approach aligns better with your
      project timeline, team expertise, and design requirements.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        provides a complete solution with pre-built UI components, ready to use out of the box. It's
        ideal for projects that need a functional data grid quickly without building UI components
        from scratch. With a small bundle size (31 kB minified + gzipped) and comprehensive
        features, it's great for most table needs where you want to focus on your application logic
        rather than building UI components.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          TanStack Table
        </Text>{" "}
        is a headless library that gives you complete control over your table's UI. It provides
        hooks and utilities to handle table logic, but you'll need to build all UI components
        yourself. It's perfect for projects that require highly customized tables and have the
        resources to build custom UI components from scratch.
      </Text>
      <Text className="text-lg block text-inherit">
        Choose{" "}
        <a
          href="https://www.simple-table.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Simple Table
        </a>{" "}
        if you want a ready-to-use solution with minimal setup. Choose TanStack Table if you need
        complete UI flexibility and have the time and resources to build custom components.
      </Text>
    </>
  );

  const codeComparisonSection = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Setup Comparison: Ready-to-Use vs Headless
      </Title>

      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
          <Text className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
            Simple Table (5 minutes to working table)
          </Text>
          <div className="overflow-x-auto">
            <pre className="text-xs sm:text-sm bg-gray-900 text-green-400 p-2 sm:p-3 rounded whitespace-pre min-w-[300px]">
              {`import { SimpleTable } from 'simple-table-core';
import 'simple-table-core/styles.css';

function MyApp() {
  const headers = [
    { accessor: 'name', label: 'Name', width: '1fr' },
    { accessor: 'age', label: 'Age', width: 100 },
    { accessor: 'city', label: 'City', width: 150 }
  ];
  
  const data = [
    { id: 1, name: 'John', age: 30, city: 'NYC' },
    { id: 2, name: 'Jane', age: 25, city: 'LA' }
  ];

  return (
    <SimpleTable 
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      editColumns
      selectableCells
    />
  );
}`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
          <Text className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
            TanStack Table (2-3 days to working table)
          </Text>
          <div className="overflow-x-auto">
            <pre className="text-xs sm:text-sm bg-gray-900 text-blue-400 p-2 sm:p-3 rounded whitespace-pre min-w-[300px]">
              {`import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

function MyApp() {
  const columns = [ /* define columns */ ];
  const data = [ /* your data */ ];
  
  const table = useReactTable({
    data, columns,
    getCoreRowModel: getCoreRowModel(),
    // Configure all features manually
  });

  return (
    <div>
      {/* Build entire table UI yourself */}
      {/* Headers, rows, cells, styling */}
      {/* Filtering UI, pagination UI */}
      {/* Loading states, error handling */}
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
        <Text className="text-base text-gray-700 dark:text-gray-300">
          <strong>Time Investment:</strong> Simple Table gets you a production-ready table
          immediately, while TanStack Table requires building all UI components, styling, and
          interaction patterns from scratch. The code above represents about 5 minutes vs 2-3 days
          of development time.
        </Text>
      </div>
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
        competitorSize: "~50 kB (minified + gzipped) + custom UI",
      }}
      summaryContent={summaryContent}
      faqSection={codeComparisonSection}
    />
  );
};

export default SimpleTableVsTanstackContent;
