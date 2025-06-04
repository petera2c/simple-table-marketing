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

const { Text, Title } = Typography;

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
      In the enterprise data grid landscape, AG Grid has established itself as the go-to solution
      for companies willing to invest heavily in advanced table functionality. With its two-tier
      pricing model—free Community edition and $999/developer Enterprise license—AG Grid represents
      a significant financial commitment. However, many development teams find themselves
      questioning whether they truly need the Enterprise features that justify this cost, especially
      when much of their functionality is locked behind the paywall. This is where{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      presents a compelling alternative for teams seeking enterprise-grade performance without
      enterprise-grade pricing. At 197kB compared to AG Grid's 41MB (with Enterprise features),
      Simple Table delivers blazing-fast performance with core data grid features that rival AG
      Grid's Community edition—and surpass many of its Enterprise capabilities—all while remaining
      completely free. This comparison examines whether you can achieve your data grid goals without
      the complexity, licensing costs, and massive bundle overhead that AG Grid Enterprise demands.
      We'll break down the true cost of ownership and help you determine if Simple Table can deliver
      the enterprise-level functionality your application needs.
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

  const enterpriseROISection = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Enterprise ROI Calculator: AG Grid vs Simple Table
      </Title>

      <div className="space-y-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-200 dark:border-red-800">
          <Text className="text-lg sm:text-xl font-bold text-red-700 dark:text-red-300 mb-4 block">
            💸 AG Grid Enterprise Cost (3-Year Projection)
          </Text>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                5 developers × $999/year:
              </span>
              <span className="font-semibold">$14,985</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Bundle size impact (CDN costs):
              </span>
              <span className="font-semibold">~$2,400</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Training/onboarding time:
              </span>
              <span className="font-semibold">~$8,000</span>
            </div>
            <hr className="border-red-300" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-lg font-bold">
              <span>Total 3-year cost:</span>
              <span className="text-red-600 dark:text-red-400">$25,385</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-200 dark:border-green-800">
          <Text className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-300 mb-4 block">
            ✅ Simple Table Cost (3-Year Projection)
          </Text>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Licensing (unlimited devs):
              </span>
              <span className="font-semibold">$0</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Bundle size impact:
              </span>
              <span className="font-semibold">$0</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Training (minimal setup):
              </span>
              <span className="font-semibold">~$500</span>
            </div>
            <hr className="border-green-300" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-lg font-bold">
              <span>Total 3-year cost:</span>
              <span className="text-green-600 dark:text-green-400">$500</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
        <Text className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 block">
          💡 Enterprise Feature Reality Check
        </Text>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <p>
              <strong>Most teams need:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Virtualization ✅ Simple Table</li>
              <li>Column management ✅ Simple Table</li>
              <li>Cell editing ✅ Simple Table</li>
              <li>Sorting & filtering ✅ Simple Table</li>
            </ul>
          </div>
          <div>
            <p>
              <strong>AG Grid Enterprise extras:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pivot tables (niche use case)</li>
              <li>Server-side row model (overkill)</li>
              <li>Advanced context menu (minor UX)</li>
              <li>Excel export (can use libraries)</li>
            </ul>
          </div>
        </div>
      </div>

      <Text className="text-lg text-center text-gray-700 dark:text-gray-300 font-semibold">
        💰 <span className="text-green-600 dark:text-green-400">Save $24,885</span> over 3 years
        while getting 90% of the functionality
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
      faqSection={enterpriseROISection}
    />
  );
};

export default SimpleVsAgGrid;
