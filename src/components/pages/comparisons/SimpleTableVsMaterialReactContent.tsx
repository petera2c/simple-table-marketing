"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title } = Typography;

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
        of a full UI framework. With its 31 kB (minified + gzipped) bundle size, it offers a great
        balance of features and performance.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Material-UI Table
        </Text>{" "}
        is part of the comprehensive Material Design framework, offering a consistent look and feel
        with other Material-UI components. It's perfect for projects already using Material-UI, but
        comes with the overhead of the full framework and lacks some advanced data grid features
        found in dedicated solutions.
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

  const materialDesignIntegration = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Material Design Integration Guide
      </Title>

      <div className="mb-6">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
          🎨 Achieving Material Design Compliance with Simple Table
        </Text>
        <Text className="text-base text-gray-700 dark:text-gray-300 mb-4">
          Simple Table's CSS variable system makes it easy to match Material Design's aesthetic
          while keeping all the advanced functionality Material-UI Table lacks.
        </Text>
      </div>

      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
          <Text className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
            CSS Variables for Material Design
          </Text>
          <div className="overflow-x-auto">
            <pre className="text-xs sm:text-sm bg-gray-900 text-blue-400 p-2 sm:p-3 rounded whitespace-pre min-w-[300px]">
              {`:root {
  /* Material Design Colors */
  --st-primary: #1976d2;
  --st-surface: #ffffff;
  --st-on-surface: rgba(0,0,0,0.87);
  --st-outline: rgba(0,0,0,0.12);
  
  /* Material Typography */
  --st-font-family: 'Roboto', sans-serif;
  --st-font-size: 14px;
  --st-line-height: 20px;
  
  /* Material Elevation */
  --st-shadow: 0px 1px 3px rgba(0,0,0,0.12);
  --st-border-radius: 4px;
  
  /* Material Interactions */
  --st-hover-color: rgba(25,118,210,0.04);
  --st-focus-color: rgba(25,118,210,0.12);
}`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
          <Text className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
            Usage with Material-UI Theme
          </Text>
          <div className="overflow-x-auto">
            <pre className="text-xs sm:text-sm bg-gray-900 text-green-400 p-2 sm:p-3 rounded whitespace-pre min-w-[300px]">
              {`import { useTheme } from '@mui/material/styles';
import { SimpleTable } from 'simple-table-core';

function MyDataGrid() {
  const theme = useTheme();
  
  // Apply Material theme to Simple Table
  const materialTableStyle = {
    '--st-primary': theme.palette.primary.main,
    '--st-surface': theme.palette.background.paper,
    '--st-on-surface': theme.palette.text.primary,
    '--st-outline': theme.palette.divider,
  };
  
  return (
    <div style={materialTableStyle}>
      <SimpleTable {...props} />
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3 block">
          📋 Material Design Compliance Checklist
        </Text>
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <Text className="font-semibold text-green-700 dark:text-green-300 mb-2 block">
              ✅ Simple Table + Material Design
            </Text>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Roboto font support</li>
              <li>✓ Material color palette</li>
              <li>✓ 4dp elevation shadows</li>
              <li>✓ 40dp touch targets</li>
              <li>✓ Focus indicators (ripple effect)</li>
              <li>✓ Accessibility compliance</li>
              <li>✓ Dark theme support</li>
              <li>✓ Advanced data grid features</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <Text className="font-semibold text-red-700 dark:text-red-300 mb-2 block">
              ❌ Material-UI Table Limitations
            </Text>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Native Material Design</li>
              <li>✗ No virtualization</li>
              <li>✗ No advanced filtering</li>
              <li>✗ No cell editing</li>
              <li>✗ No column management</li>
              <li>✗ No infinite scroll</li>
              <li>✗ Limited customization</li>
              <li>✗ Poor performance at scale</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
        <Text className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 block">
          🚀 Best Practice: Hybrid Approach
        </Text>
        <Text className="text-base text-gray-700 dark:text-gray-300 mb-2">
          Use Material-UI for forms, navigation, and layout components where Material Design excels,
          but switch to Simple Table for complex data display. This gives you:
        </Text>
        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
          <li>• Material Design consistency across 90% of your UI</li>
          <li>• Enterprise-grade data grid capabilities where you need them</li>
          <li>• Smaller bundle size (5.56MB → 0.2MB for tables)</li>
          <li>• Better performance for data-heavy applications</li>
        </ul>
      </div>

      <div className="text-center">
        <Text className="text-lg text-gray-600 dark:text-gray-400">
          💡 <strong>Pro Tip:</strong> Most users won't notice the difference in visual styling, but
          they will notice the difference in performance and functionality.
        </Text>
      </div>
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
        competitor: "Material-UI Table",
        competitorSize: "~150 kB (minified + gzipped)",
      }}
      summaryContent={summaryContent}
      faqSection={materialDesignIntegration}
    />
  );
};

export default SimpleTableVsMaterialReactContent;
