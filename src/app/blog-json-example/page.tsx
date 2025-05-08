"use client";

import React from "react";
import { BlogPost } from "@/types/BlogPost";
import { Typography } from "antd";

import { renderContent } from "@/components/pages/BlogContent";

// Example JSON that could be used to render a similar blog to SimpleTableVsAgGrid
const exampleBlogPost: BlogPost = {
  title: "Simple Table vs AG Grid: Choosing the Right React Data Grid",
  description:
    "A comprehensive comparison of two popular React data grid libraries to help you make the best choice for your project needs.",
  slug: "simple-table-vs-ag-grid",
  tags: ["React", "Data Grid", "Comparison", "AG Grid", "Simple Table"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  metadata: {
    keywords: [
      "Simple Table",
      "AG Grid",
      "React data grid",
      "comparison",
      "performance",
      "table component",
      "React table",
    ],
    openGraph: {
      title: "Simple Table vs AG Grid: Choosing the Right React Data Grid",
      description:
        "A comprehensive comparison of Simple Table and AG Grid - features, performance, pricing, and developer experience for React applications.",
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["Simple Table Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Simple Table vs AG Grid: Choosing the Right React Data Grid",
      description:
        "A comprehensive comparison of Simple Table and AG Grid - features, performance, pricing, and developer experience for React applications.",
    },
  },
  content: [
    // Hero Section
    {
      type: "heroSection",
      className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 1,
          text: "Simple Table vs AG Grid: Choosing the Right React Data Grid",
          className: "text-center mb-4 md:mb-6 text-2xl md:text-4xl",
        },
        {
          type: "paragraph",
          text: "A comprehensive comparison of two popular React data grid libraries to help you make the best choice for your project needs, focusing on features, performance, developer experience, and cost effectiveness.",
          className: "text-center text-base md:text-lg text-gray-700 max-w-4xl mx-auto",
        },
        {
          type: "container",
          className: "flex flex-col sm:flex-row justify-center items-center gap-3 mt-6",
          children: [
            {
              type: "button",
              text: "Try Simple Table",
              buttonType: "primary",
              size: "large",
              href: "https://www.npmjs.com/package/simple-table-core",
              target: "_blank",
              className: "w-full sm:w-auto",
            },
            {
              type: "button",
              text: "See Comparison",
              size: "large",
              href: "#feature-comparison",
              className: "w-full sm:w-auto",
            },
          ],
        },
      ],
    },

    // Introduction
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Introduction",
          className: "mb-4 text-xl md:text-2xl",
        },
        {
          type: "paragraph",
          text: "When building data-rich applications in React, choosing the right data grid component is crucial. Two popular options are ",
          className: "text-gray-700 text-base md:text-lg",
        },
        {
          type: "text",
          text: "Simple Table",
          strong: true,
          className: "text-gray-700 text-base md:text-lg",
        },
        {
          type: "text",
          text: " and ",
          className: "text-gray-700 text-base md:text-lg",
        },
        {
          type: "text",
          text: "AG Grid",
          strong: true,
          className: "text-gray-700 text-base md:text-lg",
        },
        {
          type: "text",
          text: ". Each has its own strengths and trade-offs. This comparison will help you understand which library might be the best fit for your specific needs.",
          className: "text-gray-700 text-base md:text-lg",
        },
        {
          type: "alert",
          message: "New to Simple Table?",
          description:
            "Simple Table is a lightweight, high-performance React data grid component with zero dependencies and a focus on developer experience. All features are completely free under MIT license.",
          alertType: "info",
          showIcon: true,
          className: "my-6",
        },
      ],
    },

    // Quick Overview Section (Added to match hardcoded version)
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Quick Overview",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "row",
          gutter: [16, 16],
          className: "mb-8 md:mb-12",
          children: [
            {
              type: "col",
              xs: 24,
              md: 12,
              children: [
                {
                  type: "card",
                  title: null,
                  titleContent: {
                    type: "container",
                    className: "flex items-center",
                    children: [
                      {
                        type: "text",
                        text: "Simple Table",
                        strong: true,
                        className: "text-lg md:text-xl mr-2",
                      },
                      {
                        type: "tag",
                        text: "Free",
                        colorClassName: "green",
                      },
                    ],
                  },
                  bordered: false,
                  className: "h-full shadow-md hover:shadow-lg transition-shadow",
                  headStyle: { backgroundColor: "#f0f5ff", borderBottom: "2px solid #1890ff" },
                  children: [
                    {
                      title: "here",
                      type: "container",
                      className: "space-y-3 md:space-y-4",
                      children: [
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "antd",
                            name: "thunderbolt",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Lightweight & Fast",
                          description:
                            "Only 16kB minified and gzipped, making it one of the smallest data grid libraries available.",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "antd",
                            name: "dollar",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "100% Free",
                          description:
                            "All features included under MIT license - no premium features or paid versions.",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "antd",
                            name: "code",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Developer-Friendly API",
                          description:
                            "React-first design with minimal API surface and TypeScript support.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "col",
              xs: 24,
              md: 12,
              children: [
                {
                  type: "card",
                  title: null,
                  titleContent: {
                    type: "container",
                    className: "flex items-center",
                    children: [
                      {
                        type: "text",
                        text: "AG Grid",
                        strong: true,
                        className: "text-lg md:text-xl mr-2",
                      },
                      {
                        type: "tag",
                        text: "Freemium",
                        colorClassName: "orange",
                      },
                    ],
                  },
                  bordered: false,
                  className: "h-full shadow-md hover:shadow-lg transition-shadow",
                  headStyle: { backgroundColor: "#fff7e6", borderBottom: "2px solid #fa8c16" },
                  children: [
                    {
                      type: "container",
                      className: "space-y-3 md:space-y-4",
                      children: [
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "antd",
                            name: "fileText",
                            iconClassName: "text-orange-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Feature-Rich",
                          description:
                            "Extensive set of features, especially in the Enterprise version (requires paid license).",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "fontAwesome",
                            name: "balance-scale",
                            iconClassName: "text-orange-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Mature Ecosystem",
                          description:
                            "Well-established with large community and extensive documentation.",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "fontAwesome",
                            name: "code",
                            iconClassName: "text-orange-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Framework Support",
                          description:
                            "Works with multiple JavaScript frameworks including React, Angular, and Vue.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Feature Comparison Section (Updated with more rows to match hardcoded version)
    {
      type: "section",
      className: "mb-8 md:mb-12 scroll-mt-16 md:scroll-mt-24",
      children: [
        {
          type: "title",
          level: 2,
          text: "Feature Comparison",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "table",
          wrapperClassName: "overflow-x-auto",
          className: "border border-gray-200 rounded-lg overflow-hidden min-w-[650px]",
          rowClassName: "hover:bg-gray-50",
          scroll: { x: "max-content" },
          bordered: true,
          pagination: false,
          dataSource: [
            {
              key: "1",
              feature: "Bundle Size",
              simpleTable: "16 kB (minified + gzipped)",
              agGrid: "130 kB+ (Community), 170 kB+ (Enterprise)",
              winner: "simple-table",
            },
            {
              key: "2",
              feature: "Free Features",
              simpleTable: "All features included",
              agGrid: "Limited feature set in Community version",
              winner: "simple-table",
            },
            {
              key: "3",
              feature: "Learning Curve",
              simpleTable: "Minimal API surface, React-first design",
              agGrid: "Large API surface, specific configuration syntax",
              winner: "simple-table",
            },
            {
              key: "4",
              feature: "Sorting",
              simpleTable: "Included",
              agGrid: "Included",
              winner: "tie",
            },
            {
              key: "5",
              feature: "Filtering",
              simpleTable: "Included",
              agGrid: "Included",
              winner: "tie",
            },
            {
              key: "6",
              feature: "Virtual Scrolling",
              simpleTable: "Included",
              agGrid: "Included",
              winner: "tie",
            },
            {
              key: "7",
              feature: "Row/Cell Selection",
              simpleTable: "Included",
              agGrid: "Included",
              winner: "tie",
            },
            {
              key: "8",
              feature: "Custom Cell Renderers",
              simpleTable: "Simple React components",
              agGrid: "Component registration system",
              winner: "simple-table",
            },
            {
              key: "9",
              feature: "Keyboard Navigation",
              simpleTable: "Included",
              agGrid: "Included",
              winner: "tie",
            },
            {
              key: "10",
              feature: "Advanced Enterprise Features",
              simpleTable: "Under development",
              agGrid: "Extensive but requires Enterprise license",
              winner: "ag-grid",
            },
            {
              key: "11",
              feature: "TypeScript Support",
              simpleTable: "First-class support",
              agGrid: "Supported",
              winner: "tie",
            },
            {
              key: "12",
              feature: "Pricing",
              simpleTable: "Free / MIT License",
              agGrid: "Community (free) / Enterprise ($$$)",
              winner: "simple-table",
            },
          ],
          columns: [
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
              width: "30%",
            },
            {
              title: "AG Grid",
              dataIndex: "agGrid",
              key: "agGrid",
              width: "30%",
            },
            {
              title: "Winner",
              dataIndex: "winner",
              key: "winner",
              width: "15%",
              render: (winner: string) => {
                if (winner === "simple-table") {
                  return {
                    type: "tag",
                    colorClassName: "green",
                    text: "Simple Table",
                    className: "flex items-center justify-center",
                  };
                } else if (winner === "ag-grid") {
                  return {
                    type: "tag",
                    colorClassName: "blue",
                    text: "AG Grid",
                    className: "flex items-center justify-center",
                  };
                }
                return {
                  type: "tag",
                  colorClassName: "orange",
                  text: "Tie",
                  className: "flex items-center justify-center",
                };
              },
            },
          ],
        },
      ],
    },

    // Size and Performance Section (Added to match hardcoded version)
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Size and Performance",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "row",
          gutter: [16, 16],
          children: [
            {
              type: "col",
              xs: 24,
              lg: 12,
              children: [
                {
                  type: "card",
                  title: "Bundle Size Comparison",
                  bordered: false,
                  className: "h-full shadow-md mb-4 lg:mb-0",
                  children: [
                    {
                      type: "container",
                      className: "space-y-4",
                      children: [
                        {
                          type: "container",
                          children: [
                            {
                              type: "text",
                              text: "Simple Table: ",
                              strong: true,
                            },
                            {
                              type: "text",
                              text: "16 kB minified + gzipped",
                            },
                            {
                              type: "progressBar",
                              percentage: "16%",
                              colorClassName: "bg-blue-500",
                            },
                          ],
                        },
                        {
                          type: "container",
                          children: [
                            {
                              type: "text",
                              text: "AG Grid Community: ",
                              strong: true,
                            },
                            {
                              type: "text",
                              text: "~130 kB minified + gzipped",
                            },
                            {
                              type: "progressBar",
                              percentage: "65%",
                              colorClassName: "bg-orange-500",
                            },
                          ],
                        },
                        {
                          type: "container",
                          children: [
                            {
                              type: "text",
                              text: "AG Grid Enterprise: ",
                              strong: true,
                            },
                            {
                              type: "text",
                              text: "~170 kB minified + gzipped",
                            },
                            {
                              type: "progressBar",
                              percentage: "85%",
                              colorClassName: "bg-red-500",
                            },
                          ],
                        },
                        {
                          type: "paragraph",
                          text: "Simple Table is significantly smaller, resulting in faster loading times and better overall performance, especially for applications where initial load time is critical.",
                          className: "text-gray-600 text-xs md:text-sm mt-4",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "col",
              xs: 24,
              lg: 12,
              children: [
                {
                  type: "card",
                  title: "Performance Considerations",
                  bordered: false,
                  className: "h-full shadow-md",
                  children: [
                    {
                      type: "container",
                      className: "space-y-3 md:space-y-4",
                      children: [
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "fontAwesome",
                            name: "rocket",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Rendering Large Datasets",
                          description:
                            "Both libraries implement virtualization for efficient handling of large datasets, but Simple Table's smaller codebase generally results in faster initial render times.",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "fontAwesome",
                            name: "lightbulb",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Memory Usage",
                          description:
                            "Simple Table typically uses less memory due to its focused feature set and simpler implementation.",
                        },
                        {
                          type: "featureItem",
                          icon: {
                            type: "icon",
                            iconType: "fontAwesome",
                            name: "cube",
                            iconClassName: "text-blue-500 text-lg md:text-xl mt-1 mr-3",
                          },
                          title: "Re-rendering Efficiency",
                          description:
                            "Simple Table leverages React's rendering model directly, while AG Grid uses a more complex rendering approach that can sometimes lead to better performance for specific use-cases.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Developer Experience section (Updated with AG Grid example)
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Developer Experience",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "row",
          gutter: [16, 16],
          children: [
            {
              type: "col",
              xs: 24,
              children: [
                {
                  type: "card",
                  className: "shadow-md",
                  children: [
                    {
                      type: "title",
                      level: 4,
                      text: "Simple Table Example",
                      className: "mb-3 md:mb-4 text-lg md:text-xl",
                    },
                    {
                      type: "codeBlock",
                      code: `import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

const MyTable = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", age: 28, role: "Developer" },
    { id: 2, name: "Jane Smith", age: 32, role: "Designer" }
  ];

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80, isSortable: true, type: "number" },
    { accessor: "name", label: "Name", minWidth: 80, width: "1fr", type: "string" },
    { accessor: "age", label: "Age", width: 100, isSortable: true, type: "number" },
    { accessor: "role", label: "Role", width: 150, isSortable: true, type: "string" }
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id },
    rowData: item,
  }));

  return <SimpleTable defaultHeaders={headers} rows={rows} selectableCells />;
};`,
                    },
                    {
                      type: "divider",
                      className: "my-4 md:my-6",
                    },
                    {
                      type: "title",
                      level: 4,
                      text: "AG Grid Example",
                      className: "mb-3 md:mb-4 text-lg md:text-xl",
                    },
                    {
                      type: "codeBlock",
                      code: `import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyTable = () => {
  // Sample data
  const rowData = [
    { id: 1, name: "John Doe", age: 28, role: "Developer" },
    { id: 2, name: "Jane Smith", age: 32, role: "Designer" }
  ];

  // Column definitions
  const columnDefs = [
    { field: 'id', headerName: 'ID', width: 80, sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 80, sortable: true, filter: true },
    { field: 'age', headerName: 'Age', width: 100, sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'role', headerName: 'Role', width: 150, sortable: true, filter: true }
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
      />
    </div>
  );
};`,
                    },
                    {
                      type: "paragraph",
                      text: "Note how Simple Table requires less boilerplate and has a more React-native approach to configuration. AG Grid offers more configuration options but requires learning its specific API patterns.",
                      className: "text-gray-600 mt-4 md:mt-6 text-sm md:text-base",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Pricing Comparison Section (Added to match hardcoded version)
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Pricing Comparison",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "row",
          gutter: [16, 16],
          children: [
            {
              type: "col",
              xs: 24,
              md: 12,
              children: [
                {
                  type: "card",
                  title: null,
                  titleContent: {
                    type: "container",
                    className: "flex items-center",
                    children: [
                      {
                        type: "text",
                        text: "Simple Table Pricing",
                        strong: true,
                        className: "text-lg md:text-xl",
                      },
                    ],
                  },
                  bordered: false,
                  className: "h-full shadow-md mb-4 md:mb-0",
                  headStyle: { backgroundColor: "#f6ffed", borderBottom: "2px solid #52c41a" },
                  children: [
                    {
                      type: "container",
                      className: "text-center mb-4 md:mb-6",
                      children: [
                        {
                          type: "title",
                          level: 1,
                          text: "$0",
                          className: "text-green-500 mb-0 text-3xl md:text-4xl",
                        },
                        {
                          type: "text",
                          text: "Forever Free",
                          className: "text-gray-500 text-sm md:text-base",
                        },
                      ],
                    },
                    {
                      type: "container",
                      className: "space-y-2 md:space-y-3 flex-grow",
                      children: [
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "All features included",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "MIT License",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "Commercial use allowed",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "No usage restrictions",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "No feature limitations",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "container",
                      className: "mt-4 md:mt-6",
                      children: [
                        {
                          type: "button",
                          text: "Get Started for Free",
                          buttonType: "primary",
                          block: true,
                          href: "https://www.npmjs.com/package/simple-table-core",
                          target: "_blank",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "col",
              xs: 24,
              md: 12,
              children: [
                {
                  type: "card",
                  title: null,
                  titleContent: {
                    type: "container",
                    className: "flex items-center",
                    children: [
                      {
                        type: "text",
                        text: "AG Grid Pricing",
                        strong: true,
                        className: "text-lg md:text-xl",
                      },
                    ],
                  },
                  bordered: false,
                  className: "h-full shadow-md",
                  headStyle: { backgroundColor: "#fff7e6", borderBottom: "2px solid #fa8c16" },
                  children: [
                    {
                      type: "container",
                      className: "mb-4 md:mb-6",
                      children: [
                        {
                          type: "container",
                          className: "text-center",
                          children: [
                            {
                              type: "title",
                              level: 4,
                              text: "Community Edition",
                              className: "mb-1 text-base md:text-lg",
                            },
                            {
                              type: "title",
                              level: 1,
                              text: "$0",
                              className: "text-orange-400 mb-0 text-3xl md:text-4xl",
                            },
                            {
                              type: "text",
                              text: "Limited Features",
                              className: "text-gray-500 text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "divider",
                          className: "my-3 md:my-6",
                        },
                        {
                          type: "container",
                          className: "text-center",
                          children: [
                            {
                              type: "title",
                              level: 4,
                              text: "Enterprise Edition",
                              className: "mb-1 text-base md:text-lg",
                            },
                            {
                              type: "title",
                              level: 1,
                              text: "$$$",
                              className: "text-orange-600 mb-0 text-3xl md:text-4xl",
                            },
                            {
                              type: "text",
                              text: "Starting from $799/dev",
                              className: "text-gray-500 text-sm md:text-base",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "container",
                      className: "space-y-2 md:space-y-3",
                      children: [
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "Basic features in Community Edition",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "close",
                              iconClassName: "text-red-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "Advanced features require Enterprise license",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "close",
                              iconClassName: "text-red-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "Per-developer licensing costs",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-center",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "close",
                              iconClassName: "text-red-500 mr-2",
                            },
                            {
                              type: "text",
                              text: "Annual renewal fees",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "container",
                      className: "mt-4 md:mt-6",
                      children: [
                        {
                          type: "button",
                          text: "Visit AG Grid Website",
                          block: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Conclusion Section (Updated to match hardcoded version)
    {
      type: "section",
      className: "mb-8 md:mb-12",
      children: [
        {
          type: "title",
          level: 2,
          text: "Conclusion - Which One to Choose?",
          className: "mb-4 md:mb-6 text-xl md:text-2xl",
        },
        {
          type: "card",
          className: "shadow-md",
          children: [
            {
              type: "row",
              gutter: [16, 16],
              children: [
                {
                  type: "col",
                  xs: 24,
                  md: 12,
                  children: [
                    {
                      type: "title",
                      level: 4,
                      text: "Choose Simple Table if:",
                      className: "text-blue-600 mb-3 text-base md:text-lg",
                    },
                    {
                      type: "container",
                      className: "space-y-2 md:space-y-3",
                      children: [
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You want a lightweight solution with minimal bundle size",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You need a simple, React-first API",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You want to avoid licensing costs for all features",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "Your project prioritizes performance and load times",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You prefer TypeScript-first development",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "col",
                  xs: 24,
                  md: 12,
                  className: "mt-6 md:mt-0",
                  children: [
                    {
                      type: "title",
                      level: 4,
                      text: "Choose AG Grid if:",
                      className: "text-orange-500 mb-3 text-base md:text-lg",
                    },
                    {
                      type: "container",
                      className: "space-y-2 md:space-y-3",
                      children: [
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You need very specific enterprise features",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "Your budget allows for commercial licensing",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You need a battle-tested solution with years of market presence",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You need to support multiple frameworks (React, Angular, Vue)",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                        {
                          type: "container",
                          className: "flex items-start",
                          children: [
                            {
                              type: "icon",
                              iconType: "antd",
                              name: "check",
                              iconClassName: "text-green-500 mt-1 mr-2",
                            },
                            {
                              type: "text",
                              text: "You prioritize extensive documentation and community resources",
                              className: "text-sm md:text-base",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "divider",
              className: "my-4 md:my-6",
            },
            {
              type: "paragraph",
              text: "Simple Table offers a compelling alternative to AG Grid with its lightweight footprint, developer-friendly API, and completely free feature set. For many React applications, Simple Table will provide all the functionality needed without the complexity and cost of AG Grid's Enterprise features.",
              className: "text-base md:text-lg",
            },
            {
              type: "container",
              className: "mt-4 md:mt-6 text-center",
              children: [
                {
                  type: "button",
                  text: "Try Simple Table Today",
                  buttonType: "primary",
                  size: "large",
                  href: "https://www.npmjs.com/package/simple-table-core",
                  target: "_blank",
                  className: "w-full sm:w-auto",
                },
              ],
            },
          ],
        },
      ],
    },

    // Call to Action (Already matched the hardcoded version)
    {
      type: "callToAction",
      className:
        "bg-gradient-to-r from-purple-800 to-violet-800 rounded-xl p-4 md:p-8 text-center shadow-lg",
      children: [
        {
          type: "title",
          level: 2,
          text: "Ready to simplify your data tables?",
          className: "!text-white mb-3 md:mb-4 text-xl md:text-2xl font-bold",
        },
        {
          type: "paragraph",
          text: "Get started with Simple Table today - free, lightweight, and powerful.",
          className: "text-white text-base md:text-lg mb-4 md:mb-6",
        },
        {
          type: "space",
          className: "flex flex-col sm:flex-row justify-center gap-3",
          children: [
            {
              type: "button",
              text: "View on NPM",
              size: "large",
              href: "https://www.npmjs.com/package/simple-table-core",
              target: "_blank",
              className: "w-full sm:w-auto bg-white text-gray-800 hover:bg-gray-100 border-white",
            },
            {
              type: "button",
              text: "Back to Home",
              buttonType: "primary",
              size: "large",
              href: "/",
              isNextLink: true,
              className:
                "w-full sm:w-auto bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600",
            },
          ],
        },
      ],
    },
  ],
};

export default function BlogJsonExample() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 bg-white">
      {renderContent(exampleBlogPost.content)}
    </div>
  );
}
