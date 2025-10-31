"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title, Link } = Typography;

const SimpleTableVsHandsontableContent = () => {
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
      presents an interesting alternative. At just{" "}
      <Link className="text-[length:inherit]" href="https://bundlephobia.com/package/@simple-table/react-table" target="_blank">
        31 kB (minified + gzipped)
      </Link>
      , Simple Table offers core spreadsheet-like functionality without the commercial licensing
      requirements or{" "}
      <a
        href="https://bundlephobia.com/package/handsontable"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        massive bundle size (325.8 kB)
      </a>
      . This comparison explores whether Simple Table can meet your spreadsheet needs without the
      enterprise complexity and cost of Handsontable.
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
          • Want to keep bundle size minimal (
          <a
            href="https://bundlephobia.com/package/handsontable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            412.4 kB
          </a>{" "}
          vs{" "}
          <Link className="text-[length:inherit]" href="https://bundlephobia.com/package/@simple-table/react-table" target="_blank">
            31 kB
          </Link>{" "}
          difference)
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
        come at the cost of a{" "}
        <a
          href="https://bundlephobia.com/package/handsontable"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          larger bundle size (412.4 kB minified + gzipped)
        </a>{" "}
        and require a commercial license starting at $590/year for production use.
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
            better performance than Handsontable due to its lighter architecture. The{" "}
            <Link className="text-[length:inherit]" href="https://bundlephobia.com/package/@simple-table/react-table" target="_blank">
              31 kB
            </Link>{" "}
            bundle size doesn't compromise on data handling capabilities.
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
      competitorName="Handsontable"
      competitorPackage="handsontable"
      performanceMetrics={{
        competitor: "Handsontable",
        competitorSize: (
          <a
            href="https://bundlephobia.com/package/handsontable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            412.4 kB (minified + gzipped)
          </a>
        ),
      }}
      summaryContent={summaryContent}
      faqSection={faqSection}
    />
  );
};

export default SimpleTableVsHandsontableContent;
