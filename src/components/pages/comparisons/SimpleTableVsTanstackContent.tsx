"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title, Link } = Typography;

const SimpleTableVsTanstackContent = () => {
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
        is a headless library (
        <a
          href="https://bundlephobia.com/package/@tanstack/react-table"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          14.6 kB minified + gzipped
        </a>
        ) that gives you complete control over your table's UI. It provides hooks and utilities to
        handle table logic, but you'll need to build all UI components yourself. It's perfect for
        projects that require highly customized tables and have the resources to build custom UI
        components from scratch.
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
      competitorName="TanStack Table"
      competitorPackage="tanstack"
      performanceMetrics={{
        competitor: "TanStack Table",
        competitorSize: (
          <>
            <a
              href="https://bundlephobia.com/package/@tanstack/react-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              36.1 kB (minified + gzipped)
            </a>
            {" + custom UI implementation"}
          </>
        ),
      }}
      summaryContent={summaryContent}
      faqSection={codeComparisonSection}
    />
  );
};

export default SimpleTableVsTanstackContent;
