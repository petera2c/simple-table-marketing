"use client";
import React from "react";
import { Typography, Table, Tag, Space, Card, Tooltip } from "antd";
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

const { Title, Paragraph, Text } = Typography;

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
      feature: (
        <Space>
          <FontAwesomeIcon icon={faCode} className="text-gray-600" />
          <span>Quick Start</span>
        </Space>
      ),
      simpleTable: (
        <Space>
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          <span>Easy npm install and minimal setup</span>
        </Space>
      ),
      agGrid: (
        <Space>
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          <span>Simple setup, but requires module registration for optimal use</span>
        </Space>
      ),
    },
    {
      key: "virtualization",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faGaugeHigh} className="text-gray-600" />
          <span>Virtualization</span>
        </Space>
      ),
      simpleTable: (
        <Space>
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          <span>Supports millions of rows with advanced row virtualization</span>
        </Space>
      ),
      agGrid: (
        <Space>
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          <span>Supports millions of rows with advanced row virtualization</span>
        </Space>
      ),
    },
    {
      key: "infinite-scroll",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600" />
          <span>Infinite Scroll</span>
        </Space>
      ),
      simpleTable: (
        <Space>
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          <span>Built-in support with customizable loading states</span>
        </Space>
      ),
      agGrid: (
        <Space>
          <FontAwesomeIcon icon={faDollarSign} className="text-yellow-500" />
          <span>Available in Enterprise version (Server-Side Row Model)</span>
        </Space>
      ),
    },
    {
      key: "column-features",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faTableColumns} className="text-gray-600" />
          <span>Column Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Resize columns by dragging their edges">
            <Tag color="success">Resizing</Tag>
          </Tooltip>
          <Tooltip title="Drag and drop columns to reorder them">
            <Tag color="success">Reordering</Tag>
          </Tooltip>
          <Tooltip title="Show/hide columns dynamically">
            <Tag color="success">Visibility</Tag>
          </Tooltip>
          <Tooltip title="Pin columns to the left or right side">
            <Tag color="success">Pinning</Tag>
          </Tooltip>
          <Tooltip title="Align content left, center, or right">
            <Tag color="success">Alignment</Tag>
          </Tooltip>
          <Tooltip title="Sort data by clicking column headers">
            <Tag color="success">Sorting</Tag>
          </Tooltip>
          <Tooltip title="Create nested column headers for complex data structures">
            <Tag color="success">Nested Headers</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Resize columns by dragging their edges">
            <Tag color="success">Resizing</Tag>
          </Tooltip>
          <Tooltip title="Drag and drop columns to reorder them">
            <Tag color="success">Reordering</Tag>
          </Tooltip>
          <Tooltip title="Show/hide columns dynamically">
            <Tag color="success">Visibility</Tag>
          </Tooltip>
          <Tooltip title="Pin columns to the left or right side">
            <Tag color="success">Pinning</Tag>
          </Tooltip>
          <Tooltip title="Align content left, center, or right">
            <Tag color="success">Alignment</Tag>
          </Tooltip>
          <Tooltip title="Sort data by clicking column headers">
            <Tag color="success">Sorting</Tag>
          </Tooltip>
          <Tooltip title="Create nested column headers for complex data structures">
            <Tag color="success">Nested Headers</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "row-features",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600" />
          <span>Row Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Group rows by column values with expand/collapse functionality">
            <Tag color="success">Row Grouping</Tag>
          </Tooltip>
          <Tooltip title="Adjust row height dynamically or set fixed heights">
            <Tag color="success">Adjustable Height</Tag>
          </Tooltip>
          <Tooltip title="Select single or multiple rows with checkboxes or clicks">
            <Tag color="success">Selection</Tag>
          </Tooltip>
          <Tooltip title="Expand rows to show additional details or nested content">
            <Tag color="success">Expansion</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Group rows by column values with expand/collapse functionality (Enterprise only)">
            <Tag color="warning">Row Grouping (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Adjust row height dynamically or set fixed heights">
            <Tag color="success">Adjustable Height</Tag>
          </Tooltip>
          <Tooltip title="Select single or multiple rows with checkboxes or clicks">
            <Tag color="success">Selection</Tag>
          </Tooltip>
          <Tooltip title="Expand rows to show additional details or nested content">
            <Tag color="success">Expansion</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "cell-features",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faTableCells} className="text-gray-600" />
          <span>Cell Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Edit cell values inline with validation and formatting">
            <Tag color="success">Editing</Tag>
          </Tooltip>
          <Tooltip title="Highlight cells based on conditions or selection">
            <Tag color="success">Highlighting</Tag>
          </Tooltip>
          <Tooltip title="Create custom cell renderers for complex content">
            <Tag color="success">Custom Renderers</Tag>
          </Tooltip>
          <Tooltip title="Update cell values in real-time without page refresh">
            <Tag color="success">Live Updates</Tag>
          </Tooltip>
          <Tooltip title="Format cell values (numbers, dates, currency, etc.)">
            <Tag color="success">Formatting</Tag>
          </Tooltip>
          <Tooltip title="Validate cell input with custom rules and error messages">
            <Tag color="success">Validation</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Edit cell values inline with validation and formatting">
            <Tag color="success">Editing</Tag>
          </Tooltip>
          <Tooltip title="Highlight cells based on conditions or selection">
            <Tag color="success">Highlighting</Tag>
          </Tooltip>
          <Tooltip title="Create custom cell components for complex content">
            <Tag color="success">Custom Components</Tag>
          </Tooltip>
          <Tooltip title="Update cell values in real-time without page refresh">
            <Tag color="success">Live Updates</Tag>
          </Tooltip>
          <Tooltip title="Format cell values (numbers, dates, currency, etc.)">
            <Tag color="success">Formatting</Tag>
          </Tooltip>
          <Tooltip title="Validate cell input with custom rules and error messages (Enterprise only)">
            <Tag color="warning">Validation (Enterprise)</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "customization",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faPalette} className="text-gray-600" />
          <span>Customization</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Support for light and dark themes with easy customization">
            <Tag color="success">Multiple Themes</Tag>
          </Tooltip>
          <Tooltip title="Replace default icons with custom ones">
            <Tag color="success">Custom Icons</Tag>
          </Tooltip>
          <Tooltip title="Complete control over styling through CSS variables">
            <Tag color="success">Full Theme Control</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Built-in themes with customization options">
            <Tag color="success">Multiple Themes</Tag>
          </Tooltip>
          <Tooltip title="Replace default icons with custom ones">
            <Tag color="success">Custom Icons</Tag>
          </Tooltip>
          <Tooltip title="Style customization through CSS/SCSS">
            <Tag color="success">CSS/SCSS Customization</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "enterprise-features",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faGear} className="text-gray-600" />
          <span>Enterprise Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Create pivot tables for data analysis (not available)">
            <Tag color="error">Pivot Tables</Tag>
          </Tooltip>
          <Tooltip title="Display hierarchical data in a tree structure (not available)">
            <Tag color="error">Tree Data</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Create pivot tables for data analysis (Enterprise only)">
            <Tag color="warning">Pivot Tables (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Display hierarchical data in a tree structure (Enterprise only)">
            <Tag color="warning">Tree Data (Enterprise)</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "pricing",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faDollarSign} className="text-gray-600" />
          <span>Pricing & Size</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Completely free to use in any project">
            <Tag color="success">100% Free</Tag>
          </Tooltip>
          <Tooltip title="Minimal bundle size for optimal performance">
            <Tag color="success">16 kB (minified + gzipped)</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Free community version or paid enterprise version at $999/license">
            <Tag color="warning">Community (free) / Enterprise ($999/license)</Tag>
          </Tooltip>
          <Tooltip title="Larger bundle size due to extensive feature set">
            <Tag color="error">Larger bundle size</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "advanced-data",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faGear} className="text-gray-600" />
          <span>Advanced Data Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Display master-detail relationships between rows (not available)">
            <Tag color="error">Master/Detail Views</Tag>
          </Tooltip>
          <Tooltip title="Span cells across multiple rows (not available)">
            <Tag color="error">Row Spanning</Tag>
          </Tooltip>
          <Tooltip title="Calculate sums, averages, and other aggregations (coming soon)">
            <Tag color="processing">Aggregation Functions (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="Custom functions to get and set cell values">
            <Tag color="success">Value Getters/Setters</Tag>
          </Tooltip>
          <Tooltip title="Select multiple cells in a range">
            <Tag color="success">Cell Range Selection</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Display master-detail relationships between rows (Enterprise only)">
            <Tag color="warning">Master/Detail Views (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Span cells across multiple rows (Enterprise only)">
            <Tag color="warning">Row Spanning (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Calculate sums, averages, and other aggregations (Enterprise only)">
            <Tag color="warning">Aggregation Functions (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Custom functions to get and set cell values">
            <Tag color="success">Value Getters/Setters</Tag>
          </Tooltip>
          <Tooltip title="Select multiple cells in a range (Enterprise only)">
            <Tag color="warning">Cell Range Selection (Enterprise)</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "advanced-ui",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faPalette} className="text-gray-600" />
          <span>Advanced UI Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Right-click context menu (not available)">
            <Tag color="error">Context Menu</Tag>
          </Tooltip>
          <Tooltip title="Status bar showing selected rows and other info (not available)">
            <Tag color="error">Status Bar</Tag>
          </Tooltip>
          <Tooltip title="Column menu for filtering, sorting, and more (coming soon)">
            <Tag color="processing">Column Menu (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="Rows that span the full width of the table (coming soon)">
            <Tag color="processing">Full Width Rows (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="Advanced tooltips with rich content (not available)">
            <Tag color="error">Advanced Tooltips</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Right-click context menu (Enterprise only)">
            <Tag color="warning">Context Menu (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Status bar showing selected rows and other info (Enterprise only)">
            <Tag color="warning">Status Bar (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Column menu for filtering, sorting, and more">
            <Tag color="success">Column Menu</Tag>
          </Tooltip>
          <Tooltip title="Rows that span the full width of the table">
            <Tag color="success">Full Width Rows</Tag>
          </Tooltip>
          <Tooltip title="Advanced tooltips with rich content (Enterprise only)">
            <Tag color="warning">Advanced Tooltips (Enterprise)</Tag>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: "integration",
      feature: (
        <Space>
          <FontAwesomeIcon icon={faCode} className="text-gray-600" />
          <span>Integration Features</span>
        </Space>
      ),
      simpleTable: (
        <Space direction="vertical">
          <Tooltip title="Export and import data in Excel format (coming soon)">
            <Tag color="processing">Excel Export/Import (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="Export and import data in CSV format (coming soon)">
            <Tag color="processing">CSV Export/Import (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="Copy and paste data to/from clipboard">
            <Tag color="success">Clipboard Operations</Tag>
          </Tooltip>
          <Tooltip title="Advanced keyboard navigation and shortcuts (coming soon)">
            <Tag color="processing">Advanced Keyboard Navigation (Coming Soon)</Tag>
          </Tooltip>
          <Tooltip title="ARIA attributes and keyboard navigation (coming soon)">
            <Tag color="processing">Accessibility Features (Coming Soon)</Tag>
          </Tooltip>
        </Space>
      ),
      agGrid: (
        <Space direction="vertical">
          <Tooltip title="Export and import data in Excel format (Enterprise only)">
            <Tag color="warning">Excel Export/Import (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Export and import data in CSV format">
            <Tag color="success">CSV Export/Import</Tag>
          </Tooltip>
          <Tooltip title="Copy and paste data to/from clipboard (Enterprise only)">
            <Tag color="warning">Clipboard Operations (Enterprise)</Tag>
          </Tooltip>
          <Tooltip title="Advanced keyboard navigation and shortcuts">
            <Tag color="success">Advanced Keyboard Navigation</Tag>
          </Tooltip>
          <Tooltip title="ARIA attributes and keyboard navigation (Enterprise only)">
            <Tag color="warning">Accessibility Features (Enterprise)</Tag>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Title Card */}
        <Card className="mb-8">
          <Title level={1} className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Simple Table vs. AG Grid
          </Title>
          <Paragraph className="text-xl text-gray-600 text-center">
            A comprehensive comparison of two popular React data grid solutions
          </Paragraph>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <Paragraph className="text-lg text-gray-700 mb-4">
            Choosing the right React data grid can make or break your project. In this comparison,
            we'll look at{" "}
            <Text className="text-lg" strong>
              Simple Table
            </Text>
            , a lightweight (16 kB) React data grid, against{" "}
            <Text className="text-lg" strong>
              AG Grid
            </Text>
            , a popular, feature-rich data grid known for its enterprise capabilities. Let's break
            down their features, performance, and more to help you decide.
          </Paragraph>
        </Card>

        {/* Comparison Table */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-6">
            Feature Comparison
          </Title>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="comparison-table"
          />
        </Card>

        {/* Performance Metrics */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-4">
            Performance Comparison
          </Title>
          <Table
            columns={[
              { title: "Metric", dataIndex: "metric", key: "metric" },
              { title: "Simple Table", dataIndex: "simpleTable", key: "simpleTable" },
              { title: "AG Grid", dataIndex: "agGrid", key: "agGrid" },
            ]}
            dataSource={[
              {
                key: "bundle-size",
                metric: "Bundle Size",
                simpleTable: "16 kB (minified + gzipped)",
                agGrid: "~200 kB (minified + gzipped)",
              },
              {
                key: "initial-render",
                metric: "Initial Render (10k rows)",
                simpleTable: "< 100ms",
                agGrid: "~200ms",
              },
              {
                key: "memory",
                metric: "Memory Usage (10k rows)",
                simpleTable: "~50MB",
                agGrid: "~100MB",
              },
              {
                key: "scrolling",
                metric: "Scrolling Performance",
                simpleTable: "60 FPS with virtualization",
                agGrid: "60 FPS with virtualization",
              },
            ]}
            pagination={false}
          />
        </Card>

        {/* Migration Guide */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-4">
            Migrating from AG Grid to Simple Table
          </Title>
          <Paragraph className="text-lg text-gray-700 mb-4">
            If you're considering migrating from AG Grid to Simple Table, check out our{" "}
            <a href="/docs" className="text-blue-600 hover:underline">
              documentation
            </a>{" "}
            for detailed guides on:
          </Paragraph>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>API differences and equivalents</li>
            <li>Feature migration guides</li>
            <li>Performance optimization tips</li>
            <li>Common migration patterns</li>
          </ul>
        </Card>

        {/* Summary */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-4">
            Summary
          </Title>
          <Paragraph className="text-lg text-gray-700 mb-4">
            <Text className="text-lg" strong>
              Simple Table
            </Text>{" "}
            is a lightweight, free alternative to AG Grid, offering essential features like
            virtualization, infinite scroll, and column filters, with a smaller bundle size (16 kB).
            It's ideal for projects needing a simple, performant data grid without the overhead of
            enterprise features.
          </Paragraph>
          <Paragraph className="text-lg text-gray-700 mb-4">
            <Text className="text-lg" strong>
              AG Grid
            </Text>{" "}
            is a feature-rich data grid with advanced capabilities like pivot tables and tree data,
            but many of these are locked behind the Enterprise version ($999/license). It has a
            larger bundle size and a steeper learning curve, making it better suited for complex,
            enterprise-level applications.
          </Paragraph>
          <Paragraph className="text-lg text-gray-700">
            If you're looking for a free, lightweight solution with solid features,{" "}
            <a href="https://www.simple-table.com" className="text-blue-600 hover:underline">
              try Simple Table
            </a>
            . For enterprise needs, AG Grid might be worth the investment.
          </Paragraph>
        </Card>

        {/* Feature Requests */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-4">
            Missing a Feature?
          </Title>
          <Paragraph className="text-lg text-gray-700 mb-4">
            We're constantly working to improve Simple Table. If you need a feature that's not yet
            available, let us know! We prioritize features based on community demand.
          </Paragraph>
          <Space>
            <a
              href="https://discord.gg/RvKHCfg3PC"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Join Discord Community
            </a>
            <a
              href="https://github.com/petera2c/simple-table-marketing"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Star on GitHub
            </a>
          </Space>
        </Card>
      </main>
    </div>
  );
};

export default SimpleVsAgGrid;
