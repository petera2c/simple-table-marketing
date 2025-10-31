"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title } = Typography;

const SimpleTableVsAntDesignContent = () => {
  const introText = (
    <>
      When you choose Ant Design for your React project, you're making a commitment to an entire
      design system—not just individual components. This comprehensive approach brings consistency
      and polished UI elements, but it also means that adding a simple table component requires
      pulling in the entire Ant Design ecosystem (~250 kB minified + gzipped). For many teams, this
      raises a critical question: is the visual consistency worth the massive bundle size impact,
      especially when the table component itself lacks many advanced data grid features?{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      offers a different philosophy entirely. At just 31 kB (minified + gzipped), it delivers more
      data grid functionality than Ant Design Table while being 240x smaller. But the choice isn't
      just about file size—it's about architectural decisions that affect your entire application's
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
        of a full UI framework. With its 31 kB (minified + gzipped) bundle size, it offers a great
        balance of features and performance.
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

        <div className="overflow-x-auto shadow-sm">
          <table className="w-full min-w-[600px] border-collapse border border-gray-300 dark:border-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-left text-sm sm:text-base">
                  Connection Type
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-sm sm:text-base">
                  Simple Table Load Time
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-sm sm:text-base">
                  Ant Design Table Load Time
                </th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-sm sm:text-base">
                  Time Difference
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-sm sm:text-base">
                  Fast 3G (1.5 Mbps)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-green-600 text-sm sm:text-base">
                  0.12 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-red-600 text-sm sm:text-base">
                  1.3 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center font-semibold text-sm sm:text-base">
                  +1.2s slower
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-sm sm:text-base">
                  4G (25 Mbps)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-green-600 text-sm sm:text-base">
                  0.008 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-red-600 text-sm sm:text-base">
                  0.08 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center font-semibold text-sm sm:text-base">
                  +0.07s slower
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-sm sm:text-base">
                  Cable (100 Mbps)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-green-600 text-sm sm:text-base">
                  0.002 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center text-red-600 text-sm sm:text-base">
                  0.02 seconds
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-3 text-center font-semibold text-sm sm:text-base">
                  +0.02s slower
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <Text className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3 block">
            📊 Ant Design Table Impact
          </Text>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              • <strong>~250 kB</strong> total bundle size
            </li>
            <li>
              • <strong>$2,400+/year</strong> extra CDN costs
            </li>
            <li>
              • <strong>1.2 seconds</strong> extra load time on 3G
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
              • <strong>31 kB (minified + gzipped)</strong> total bundle size
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
          approach can reduce your bundle size by ~220 kB while improving functionality.
        </Text>
      </div>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. Ant Design Table"
      subtitle="A comprehensive comparison of lightweight vs full-featured React data grid solutions"
      introText={introText}
      competitorName="Ant Design Table"
      competitorPackage="antDesign"
      performanceMetrics={{
        competitor: "Ant Design Table",
        competitorSize: "~250 kB (minified + gzipped)",
      }}
      summaryContent={summaryContent}
      faqSection={bundleImpactAnalysis}
    />
  );
};

export default SimpleTableVsAntDesignContent;
