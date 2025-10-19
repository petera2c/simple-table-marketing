import React, { ReactNode, useState, useEffect } from "react";
import { Typography, Table, Space, Card, Button } from "antd";
import { useThemeContext } from "@/providers/ThemeProvider";
import PageLayout from "@/components/PageLayout";

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
  faqSection?: ReactNode;
}

const ComparisonLayout: React.FC<ComparisonLayoutProps> = ({
  title,
  subtitle,
  introText,
  featureTable,
  performanceMetrics,
  summaryContent,
  faqSection,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useThemeContext();

  // Handle responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-[12dvh]">
      {/* Title Card */}
      <div className="flex flex-col items-center justify-center mb-8">
        <Title
          level={1}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          {title}
        </Title>
        <Paragraph className="text-xl text-gray-600 dark:text-gray-300 text-center">
          {subtitle}
        </Paragraph>
      </div>

      {/* Introduction */}
      <div className="mb-8 text-center">
        <Paragraph className="text-lg text-gray-700 dark:text-gray-300 mb-4">{introText}</Paragraph>
      </div>

      {/* Comparison Table */}
      <Card className="mb-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Feature Comparison
        </Title>
        <div className="overflow-x-auto">
          <Table
            columns={featureTable.columns}
            dataSource={featureTable.data}
            pagination={false}
            scroll={{ x: isMobile ? "max-content" : undefined }}
            size={isMobile ? "small" : "middle"}
          />
        </div>
      </Card>

      {/* Performance Metrics */}
      <Card className="mb-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Performance Comparison
        </Title>
        <div className="overflow-x-auto">
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
                simpleTable: "31 kB (minified + gzipped)",
                competitor: performanceMetrics.competitorSize,
              },
            ]}
            pagination={false}
            scroll={{ x: isMobile ? "max-content" : undefined }}
            size={isMobile ? "small" : "middle"}
          />
        </div>
      </Card>

      {/* Summary */}
      <Card className="mb-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Summary
        </Title>
        <Paragraph className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {summaryContent}
        </Paragraph>
      </Card>

      {/* FAQ Section (optional) */}
      {faqSection && (
        <Card className="mb-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">{faqSection}</Card>
      )}

      {/* Feature Requests */}
      <Card className="mb-8 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Missing a Feature?
        </Title>
        <Paragraph className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          We're constantly working to improve Simple Table. If you need a feature that's not yet
          available, let us know! We prioritize features based on community demand.
        </Paragraph>
        <Space direction={isMobile ? "vertical" : "horizontal"} className="w-full">
          <Button
            type="primary"
            href="https://discord.gg/RvKHCfg3PC"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            Join Discord Community
          </Button>
          <Button
            href="https://github.com/petera2c/simple-table"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            Star on GitHub
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ComparisonLayout;
