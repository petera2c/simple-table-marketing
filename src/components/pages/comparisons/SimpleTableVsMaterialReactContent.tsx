"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title, Link } = Typography;

const SimpleTableVsMaterialReactContent = () => {
  const introText = (
    <>
      Material Design represents Google's comprehensive design philosophy, emphasizing clean
      aesthetics, meaningful motion, and consistent user experiences across platforms. When building
      React applications that follow Material Design principles, developers often turn to
      Material-UI (now MUI) for its faithful implementation of Google's design language. However,
      this devotion to design consistency can sometimes come at the cost of functionality,
      particularly when it comes to data tables. Material-UI's Table component prioritizes visual
      harmony over advanced data grid capabilities, leaving developers to choose between aesthetic
      consistency and feature completeness.{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      challenges this false dichotomy. While it doesn't come with Material Design styling out of the
      box, its flexible theming system allows you to achieve Material Design compliance without
      sacrificing the advanced features your users need. This comparison explores whether you can
      maintain Material Design's visual excellence while gaining enterprise-level data grid
      functionality. We'll examine theming strategies, accessibility compliance, and design system
      integration to help you determine if Simple Table can deliver both the aesthetics your
      designers demand and the functionality your users deserve.
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
        of a full UI framework. With its{" "}
        <Link
          className="text-[length:inherit]"
          href="https://bundlephobia.com/package/simple-table-core"
          target="_blank"
        >
          31 kB (minified + gzipped)
        </Link>{" "}
        bundle size, it offers a great balance of features and performance.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Material React Table
        </Text>{" "}
        is built on top of TanStack Table and provides Material-UI styling out of the box. It offers
        advanced data grid features with{" "}
        <a
          href="https://bundlephobia.com/package/material-react-table"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          58.3 kB (minified + gzipped)
        </a>
        , making it a middle-ground option between Simple Table's minimal footprint and
        full-featured enterprise solutions.
      </Text>
      <Text className="text-lg block text-inherit">
        If you need a lightweight, standalone table component with advanced data grid features,{" "}
        <a
          href="https://www.simple-table.com"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          try Simple Table
        </a>
        . If you're already using Material-UI and want consistent styling with basic table
        functionality, Material-UI Table might be the better choice.
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. Material-UI Table"
      subtitle="A comprehensive comparison of lightweight vs full-featured React data grid solutions"
      introText={introText}
      competitorName="Material-UI Table"
      competitorPackage="materialReact"
      performanceMetrics={{
        competitor: "Material React Table",
        competitorSize: (
          <a
            href="https://bundlephobia.com/package/material-react-table"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            58.3 kB (minified + gzipped)
          </a>
        ),
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleTableVsMaterialReactContent;
