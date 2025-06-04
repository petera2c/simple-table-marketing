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
      simpleTable: renderFeatures("columnFeatures", "simpleTable"),
      antDesign: renderFeatures("columnFeatures", "antDesign"),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: renderFeatures("rowFeatures", "simpleTable"),
      antDesign: renderFeatures("rowFeatures", "antDesign"),
    },
    {
      key: "cell-features",
      feature: FeatureIcons.CellFeatures,
      simpleTable: renderFeatures("cellFeatures", "simpleTable"),
      antDesign: renderFeatures("cellFeatures", "antDesign"),
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
      When you choose Ant Design for your React project, you're making a commitment to an entire
      design system—not just individual components. This comprehensive approach brings consistency
      and polished UI elements, but it also means that adding a simple table component requires
      pulling in the entire Ant Design ecosystem (48.3 MB unpacked). For many teams, this raises a
      critical question: is the visual consistency worth the massive bundle size impact, especially
      when the table component itself lacks many advanced data grid features?{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      offers a different philosophy entirely. At just 197 kB, it delivers more data grid
      functionality than Ant Design Table while being 240x smaller. But the choice isn't just about
      file size—it's about architectural decisions that affect your entire application's
      performance, from initial load times to runtime memory usage. This comparison examines whether
      you can achieve both design consistency AND performance by choosing Simple Table, even within
      Ant Design projects. We'll explore styling strategies, bundle optimization techniques, and
      help you determine whether Ant Design Table's framework integration justifies its massive
      overhead for your specific use case.
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
          Ant Design Table
        </Text>{" "}
        is part of the comprehensive Ant Design framework, offering a consistent look and feel with
        other Ant Design components. While it provides basic table functionality, it lacks many
        advanced data grid features that Simple Table offers. It comes with the overhead of the full
        framework (~100 kB) and requires additional customization for complex use cases.
      </Text>
      <Text className="text-lg block text-inherit">
        If you need a lightweight, standalone table component with advanced features,{" "}
        <a
          href="https://www.simple-table.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          try Simple Table
        </a>
        . If you're already using Ant Design and need a basic table with Ant Design styling, the Ant
        Design Table might be sufficient for simpler use cases.
      </Text>
    </>
  );

  const bundleImpactAnalysis = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Bundle Size Impact Analysis: Real-World Performance
      </Title>

      <div className="mb-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
          <Text className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-2 block">
            ⚡ Performance Impact Calculator
          </Text>
          <Text className="text-base text-gray-700 dark:text-gray-300">
            See how bundle size affects your users across different connection speeds:
          </Text>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                  Connection Type
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  Simple Table Load Time
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  Ant Design Table Load Time
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  Time Difference
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">
                  Fast 3G (1.5 Mbps)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">
                  0.12 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">
                  25.8 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                  +25.7s slower
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">4G (25 Mbps)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">
                  0.008 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">
                  1.5 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                  +1.5s slower
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">
                  Cable (100 Mbps)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">
                  0.002 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">
                  0.39 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
                  +0.39s slower
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <Text className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3 block">
            📊 Ant Design Table Impact
          </Text>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              • <strong>48.3 MB</strong> total bundle size
            </li>
            <li>
              • <strong>$2,400+/year</strong> extra CDN costs
            </li>
            <li>
              • <strong>25.7 seconds</strong> extra load time on 3G
            </li>
            <li>
              • <strong>Higher bounce rate</strong> due to slow loads
            </li>
            <li>
              • <strong>Poor mobile performance</strong> in developing markets
            </li>
            <li>
              • <strong>Increased memory usage</strong> affecting app performance
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <Text className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3 block">
            🚀 Simple Table Benefits
          </Text>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              • <strong>197 kB</strong> total bundle size
            </li>
            <li>
              • <strong>Minimal CDN costs</strong> and fast delivery
            </li>
            <li>
              • <strong>0.12 seconds</strong> load time on 3G
            </li>
            <li>
              • <strong>Better SEO</strong> from faster page loads
            </li>
            <li>
              • <strong>Excellent mobile performance</strong> globally
            </li>
            <li>
              • <strong>Lower memory footprint</strong> for smoother apps
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <Text className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 block">
          💡 Pro Tip: Using Simple Table with Ant Design
        </Text>
        <Text className="text-base text-gray-700 dark:text-gray-300">
          You can style Simple Table to match Ant Design's visual language using CSS variables,
          getting the best of both worlds: Ant Design's design consistency for your forms and
          layouts, plus Simple Table's performance and advanced features for data grids. This hybrid
          approach can reduce your bundle size by up to 40MB while improving functionality.
        </Text>
      </div>
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
      faqSection={bundleImpactAnalysis}
    />
  );
};

export default SimpleTableVsAntDesignContent;
