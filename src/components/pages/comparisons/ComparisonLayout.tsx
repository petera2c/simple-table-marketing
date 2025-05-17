import React, { ReactNode } from "react";
import { Typography, Table, Space, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

interface FeatureTableProps {
  columns: any[];
  data: any[];
}

interface PerformanceMetricsProps {
  competitor: string;
  competitorSize: string;
}

interface ComparisonLayoutProps {
  title: string;
  subtitle: string;
  introText: ReactNode;
  featureTable: FeatureTableProps;
  performanceMetrics: PerformanceMetricsProps;
  summaryContent: ReactNode;
}

const ComparisonLayout: React.FC<ComparisonLayoutProps> = ({
  title,
  subtitle,
  introText,
  featureTable,
  performanceMetrics,
  summaryContent,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Title Card */}
        <Card className="mb-8">
          <Title level={1} className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </Title>
          <Paragraph className="text-xl text-gray-600 text-center">{subtitle}</Paragraph>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <Paragraph className="text-lg text-gray-700 mb-4">{introText}</Paragraph>
        </Card>

        {/* Comparison Table */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-6">
            Feature Comparison
          </Title>
          <Table
            columns={featureTable.columns}
            dataSource={featureTable.data}
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
              { title: performanceMetrics.competitor, dataIndex: "competitor", key: "competitor" },
            ]}
            dataSource={[
              {
                key: "bundle-size",
                metric: "Bundle Size",
                simpleTable: "197 kB (unpacked)",
                competitor: performanceMetrics.competitorSize,
              },
            ]}
            pagination={false}
          />
        </Card>

        {/* Summary */}
        <Card className="mb-8">
          <Title level={2} className="text-2xl font-semibold text-gray-900 mb-4">
            Summary
          </Title>
          {summaryContent}
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

export default ComparisonLayout;
