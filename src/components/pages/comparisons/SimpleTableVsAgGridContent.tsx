"use client";
import React from "react";
import { Typography, Space, Card } from "antd";
import ComparisonLayout from "./ComparisonLayout";
import {
  FeatureIcons,
  FeatureStatus,
  FeatureTags,
  renderFeatures,
  simplePricing,
} from "./CommonFeatures";

const { Text } = Typography;

const SimpleVsAgGrid = () => {
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
      title: "AG Grid",
      dataIndex: "agGrid",
      key: "agGrid",
      width: "37.5%",
    },
  ];

  const data = [
    {
      key: "quick-start",
      feature: FeatureIcons.QuickStart,
      simpleTable: FeatureStatus.Available("Easy npm install and minimal setup"),
      agGrid: FeatureStatus.Available(
        "Simple setup, but requires module registration for optimal use"
      ),
    },
    {
      key: "virtualization",
      feature: FeatureIcons.Virtualization,
      simpleTable: FeatureStatus.Available(
        "Supports millions of rows with advanced row virtualization"
      ),
      agGrid: FeatureStatus.Available("Supports millions of rows with advanced row virtualization"),
    },
    {
      key: "infinite-scroll",
      feature: FeatureIcons.RowFeatures,
      simpleTable: FeatureStatus.Available("Built-in support with customizable loading states"),
      agGrid: FeatureStatus.Paid("Available in Enterprise version (Server-Side Row Model)"),
    },
    {
      key: "column-features",
      feature: FeatureIcons.ColumnFeatures,
      simpleTable: renderFeatures("columnFeatures", "simpleTable"),
      agGrid: renderFeatures("columnFeatures", "agGrid"),
    },
    {
      key: "row-features",
      feature: FeatureIcons.RowFeatures,
      simpleTable: renderFeatures("rowFeatures", "simpleTable"),
      agGrid: renderFeatures("rowFeatures", "agGrid"),
    },
    {
      key: "cell-features",
      feature: FeatureIcons.CellFeatures,
      simpleTable: renderFeatures("cellFeatures", "simpleTable"),
      agGrid: renderFeatures("cellFeatures", "agGrid"),
    },
    {
      key: "customization",
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
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Success("Multiple Themes", "Built-in themes with customization options")}
          {FeatureTags.Success("Custom Icons", "Replace default icons with custom ones")}
          {FeatureTags.Success("CSS/SCSS Customization", "Style customization through CSS/SCSS")}
        </Space>
      ),
    },
    {
      key: "enterprise-features",
      feature: FeatureIcons.EnterpriseFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Error(
            "Pivot Tables",
            "Create pivot tables for data analysis (not available)"
          )}
          {FeatureTags.Error(
            "Tree Data",
            "Display hierarchical data in a tree structure (not available)"
          )}
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Pivot Tables (Enterprise)",
            "Create pivot tables for data analysis (Enterprise only)"
          )}
          {FeatureTags.Warning(
            "Tree Data (Enterprise)",
            "Display hierarchical data in a tree structure (Enterprise only)"
          )}
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: FeatureIcons.PricingSize,
      simpleTable: simplePricing,
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Community (free) / Enterprise ($999/license)",
            "Free community version or paid enterprise version at $999/license"
          )}
          {FeatureTags.Error(
            "Large bundle size: 18.4 MB + 22.6 MB for Enterprise",
            "Basic package is 18.4 MB, with additional 22.6 MB for Enterprise features"
          )}
        </Space>
      ),
    },
    {
      key: "advanced-data",
      feature: FeatureIcons.AdvancedDataFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Error(
            "Master/Detail Views",
            "Display master-detail relationships between rows (not available)"
          )}
          {FeatureTags.Error("Row Spanning", "Span cells across multiple rows (not available)")}
          {FeatureTags.Processing(
            "Aggregation Functions (Coming Soon)",
            "Calculate sums, averages, and other aggregations (coming soon)"
          )}
          {FeatureTags.Success(
            "Value Getters/Setters",
            "Custom functions to get and set cell values"
          )}
          {FeatureTags.Success("Cell Range Selection", "Select multiple cells in a range")}
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Master/Detail Views (Enterprise)",
            "Display master-detail relationships between rows (Enterprise only)"
          )}
          {FeatureTags.Warning(
            "Row Spanning (Enterprise)",
            "Span cells across multiple rows (Enterprise only)"
          )}
          {FeatureTags.Warning(
            "Aggregation Functions (Enterprise)",
            "Calculate sums, averages, and other aggregations (Enterprise only)"
          )}
          {FeatureTags.Success(
            "Value Getters/Setters",
            "Custom functions to get and set cell values"
          )}
          {FeatureTags.Warning(
            "Cell Range Selection (Enterprise)",
            "Select multiple cells in a range (Enterprise only)"
          )}
        </Space>
      ),
    },
    {
      key: "advanced-ui",
      feature: FeatureIcons.AdvancedUIFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Error("Context Menu", "Right-click context menu (not available)")}
          {FeatureTags.Error(
            "Status Bar",
            "Status bar showing selected rows and other info (not available)"
          )}
          {FeatureTags.Processing(
            "Column Menu (Coming Soon)",
            "Column menu for filtering, sorting, and more (coming soon)"
          )}
          {FeatureTags.Processing(
            "Full Width Rows (Coming Soon)",
            "Rows that span the full width of the table (coming soon)"
          )}
          {FeatureTags.Error(
            "Advanced Tooltips",
            "Advanced tooltips with rich content (not available)"
          )}
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Context Menu (Enterprise)",
            "Right-click context menu (Enterprise only)"
          )}
          {FeatureTags.Warning(
            "Status Bar (Enterprise)",
            "Status bar showing selected rows and other info (Enterprise only)"
          )}
          {FeatureTags.Success("Column Menu", "Column menu for filtering, sorting, and more")}
          {FeatureTags.Success("Full Width Rows", "Rows that span the full width of the table")}
          {FeatureTags.Warning(
            "Advanced Tooltips (Enterprise)",
            "Advanced tooltips with rich content (Enterprise only)"
          )}
        </Space>
      ),
    },
    {
      key: "integration",
      feature: FeatureIcons.IntegrationFeatures,
      simpleTable: (
        <Space direction="vertical">
          {FeatureTags.Processing(
            "Excel Export/Import (Coming Soon)",
            "Export and import data in Excel format (coming soon)"
          )}
          {FeatureTags.Processing(
            "CSV Export/Import (Coming Soon)",
            "Export and import data in CSV format (coming soon)"
          )}
          {FeatureTags.Success("Clipboard Operations", "Copy and paste data to/from clipboard")}
          {FeatureTags.Processing(
            "Advanced Keyboard Navigation (Coming Soon)",
            "Advanced keyboard navigation and shortcuts (coming soon)"
          )}
          {FeatureTags.Processing(
            "Accessibility Features (Coming Soon)",
            "ARIA attributes and keyboard navigation (coming soon)"
          )}
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          {FeatureTags.Warning(
            "Excel Export/Import (Enterprise)",
            "Export and import data in Excel format (Enterprise only)"
          )}
          {FeatureTags.Success("CSV Export/Import", "Export and import data in CSV format")}
          {FeatureTags.Warning(
            "Clipboard Operations (Enterprise)",
            "Copy and paste data to/from clipboard (Enterprise only)"
          )}
          {FeatureTags.Success(
            "Advanced Keyboard Navigation",
            "Advanced keyboard navigation and shortcuts"
          )}
          {FeatureTags.Warning(
            "Accessibility Features (Enterprise)",
            "ARIA attributes and keyboard navigation (Enterprise only)"
          )}
        </Space>
      ),
    },
  ];

  const introText = (
    <>
      Choosing the right React data grid can make or break your project. In this comparison, we'll
      look at{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>
      , a lightweight (16 kB) React data grid, against{" "}
      <Text className="text-lg text-inherit" strong>
        AG Grid
      </Text>
      , a popular, feature-rich data grid known for its enterprise capabilities. Let's break down
      their features, performance, and more to help you decide.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, free alternative to AG Grid, offering essential features like
        virtualization, infinite scroll, and column filters, with a smaller bundle size (16 kB).
        It's ideal for projects needing a simple, performant data grid without the overhead of
        enterprise features.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          AG Grid
        </Text>{" "}
        is a feature-rich data grid with advanced capabilities like pivot tables and tree data, but
        many of these are locked behind the Enterprise version ($999/license). It has a larger
        bundle size and a steeper learning curve, making it better suited for complex,
        enterprise-level applications.
      </Text>
      <Text className="text-lg block text-inherit">
        If you're looking for a free, lightweight solution with solid features,{" "}
        <a href="https://www.simple-table.com" className="text-blue-600 hover:underline">
          try Simple Table
        </a>
        . For enterprise needs, AG Grid might be worth the investment.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. AG Grid"
      subtitle="A comprehensive comparison of two popular React data grid solutions"
      introText={introText}
      featureTable={{ columns, data }}
      performanceMetrics={{
        competitor: "AG Grid",
        competitorSize: "18.4 MB (unpacked), 41 MB with Enterprise features",
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleVsAgGrid;
