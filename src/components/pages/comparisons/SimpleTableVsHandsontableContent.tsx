"use client";
import React from "react";
import { Typography, Space } from "antd";
import ComparisonLayout from "../../ComparisonLayout";
import {
  FeatureIcons,
  FeatureStatus,
  FeatureTags,
  renderFeatures,
  simplePricing,
} from "../../CommonFeatures";

const { Text, Title } = Typography;

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
      simpleTable: renderFeatures("columnFeatures", "simpleTable"),
      handsontable: renderFeatures("columnFeatures", "handsontable"),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: renderFeatures("rowFeatures", "simpleTable"),
      handsontable: renderFeatures("rowFeatures", "handsontable"),
    },
    {
      key: "cell-features",
      feature: FeatureIcons.CellFeatures,
      simpleTable: renderFeatures("cellFeatures", "simpleTable"),
      handsontable: renderFeatures("cellFeatures", "handsontable"),
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
          {FeatureTags.Processing("Global Search", "Search across all columns")}
          {FeatureTags.Success("Custom Filters", "Define custom filter functions")}
          {FeatureTags.Success("Faceted Filters", "Multiple filter modes and options")}
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
          {FeatureTags.Error("Pivot Tables", "Not available in Simple Table")}
          {FeatureTags.Success("Tree Data", "Display hierarchical data in a tree structure")}
          {FeatureTags.Error("Row Spanning", "Not available in Simple Table")}
          {FeatureTags.Error("Master/Detail Views", "Not available in Simple Table")}
        </Space>
      ),
      handsontable: (
        <Space direction="vertical">
          {FeatureTags.Warning("Value Getters/Setters", "Custom data access functions (paid)")}
          {FeatureTags.Warning("Cell Range Selection", "Select and manipulate cell ranges (paid)")}
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
          {FeatureTags.Success(
            "CSV Export",
            "Export table data to CSV format with one method call"
          )}
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
          {FeatureTags.Warning("Custom Icons", "Replace default icons (paid)")}
          {FeatureTags.Error("Limited Styling", "Very limited styling options")}
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
          {FeatureTags.Warning(
            "~600 kB (minified + gzipped)",
            "Larger bundle with all spreadsheet features"
          )}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      In the world of web-based spreadsheet applications, developers often face the choice between
      comprehensive enterprise solutions and lightweight alternatives. If you're building an
      application that requires Excel-like functionality, you'll likely encounter{" "}
      <Text className="text-lg text-inherit" strong>
        Handsontable
      </Text>
      , a powerful commercial data grid that promises full spreadsheet capabilities. However, many
      developers find themselves questioning whether they need all of Handsontable's enterprise
      features and whether the licensing costs are justified. This is where{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      presents an interesting alternative. At just 31 kB (minified + gzipped), Simple Table offers
      core spreadsheet-like functionality without the commercial licensing requirements or massive
      bundle size. This comparison explores whether Simple Table can meet your spreadsheet needs
      without the enterprise complexity and cost of Handsontable.
    </>
  );

  const summaryContent = (
    <>
      {/* Use Case Scenarios - Unique to Handsontable comparison */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <Text className="text-lg mb-3 block text-inherit font-semibold">
          📊 When to Choose Handsontable
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Building complex financial modeling or accounting applications
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Need full Excel formula compatibility and cell reference system
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Users expect Excel-like context menus and keyboard shortcuts
        </Text>
        <Text className="text-base mb-4 block text-inherit">
          • Budget allows for $590+ annual licensing per developer
        </Text>

        <Text className="text-lg mb-3 block text-inherit font-semibold">
          ⚡ When to Choose Simple Table
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Building data-heavy applications with millions of rows
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Need cell editing and basic spreadsheet interactions
        </Text>
        <Text className="text-base mb-2 block text-inherit">
          • Want to keep bundle size minimal (~600 kB vs 31 kB difference)
        </Text>
        <Text className="text-base mb-4 block text-inherit">
          • Prefer open-source solutions without licensing restrictions
        </Text>
      </div>

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

  const faqSection = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
      </Title>

      <div className="space-y-6">
        <div>
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2 block">
            Q: Can Simple Table handle the same data volume as Handsontable?
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            Yes, Simple Table's virtualization can handle millions of rows efficiently, often with
            better performance than Handsontable due to its lighter architecture. The 31 kB bundle
            size doesn't compromise on data handling capabilities.
          </Text>
        </div>

        <div>
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2 block">
            Q: What happens to my Handsontable licensing if I switch to Simple Table?
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            Simple Table uses the MIT license, so you can eliminate ongoing licensing costs
            entirely. However, you'll need to rebuild any custom Excel-like formulas as Simple Table
            focuses on data grid functionality rather than spreadsheet calculations.
          </Text>
        </div>

        <div>
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2 block">
            Q: How difficult is it to migrate from Handsontable to Simple Table?
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            The migration complexity depends on how many Handsontable-specific features you're
            using. Basic cell editing, sorting, and filtering translate easily. Excel-like formulas
            and advanced spreadsheet features would need alternative implementations.
          </Text>
        </div>

        <div>
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2 block">
            Q: Does Simple Table support Excel import/export like Handsontable?
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            Excel import/export is coming soon to Simple Table. Currently, you can implement
            clipboard operations for data transfer. For immediate Excel functionality, consider
            combining Simple Table with libraries like SheetJS.
          </Text>
        </div>
      </div>
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
        competitorSize: "~600 kB (minified + gzipped)",
      }}
      summaryContent={summaryContent}
      faqSection={faqSection}
    />
  );
};

export default SimpleTableVsHandsontableContent;
