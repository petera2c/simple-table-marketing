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
        from scratch. With a small bundle size (
        <Link
          className="text-[length:inherit]"
          href="https://bundlephobia.com/package/@simple-table/react-table"
          target="_blank"
        >
          31 kB minified + gzipped
        </Link>
        ) and comprehensive features, it's great for most table needs where you want to focus on
        your application logic rather than building UI components.
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
              14.6 kB (minified + gzipped)
            </a>
            {" + custom UI implementation"}
          </>
        ),
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsTanstackContent;
