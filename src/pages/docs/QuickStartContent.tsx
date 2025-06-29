"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Table, Tag, Space, Button, Typography } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import QuickStartDemo from "@/demos/QuickStartDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { UI_STRINGS } from "@/constants/strings/ui";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";

const { Text } = Typography;

interface PropInfo {
  key: string;
  name: string;
  required: boolean;
  description: string;
  type?: string;
  enumValues?: string[];
  example?: string;
}

const TABLE_PROPS: PropInfo[] = [
  {
    key: "defaultHeaders",
    name: "defaultHeaders",
    required: true,
    description: "Array of column definitions that specify the structure of your table.",
    type: "HeaderObject[]",
    example: `const headers = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", width: "1fr", type: "string" }
];`,
  },
  {
    key: "rows",
    name: "rows",
    required: true,
    description: "Array of data objects to display in the table. Each object represents a row.",
    type: "object[]",
    example: `const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
];`,
  },
  {
    key: "rowIdAccessor",
    name: "rowIdAccessor",
    required: true,
    description:
      "The property name that uniquely identifies each row. This is crucial for proper row tracking, selection, and updates. Without this, the table cannot maintain state correctly.",
    type: "string",
    example: `// If your data has an 'id' field
rowIdAccessor="id"

// If your data has a different unique field
rowIdAccessor="employeeId"`,
  },
  {
    key: "height",
    name: "height",
    required: false,
    description: "Height of the table container. Can be any valid CSS height value.",
    type: "string",
    example: `height="400px"
height="50vh"
height="100%"`,
  },
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description: "Height of each individual row in pixels.",
    type: "number",
    example: `rowHeight={32}  // Default
rowHeight={48}  // Larger rows`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description: "Enable column reordering by drag and drop.",
    type: "boolean",
    example: `editColumns={true}`,
  },
  {
    key: "selectableCells",
    name: "selectableCells",
    required: false,
    description: "Enable cell selection functionality.",
    type: "boolean",
    example: `selectableCells={true}`,
  },
  {
    key: "theme",
    name: "theme",
    required: false,
    description: "Custom theme object to override default styling.",
    type: "Theme",
    example: `theme={{
  primaryColor: "#3b82f6",
  backgroundColor: "#ffffff"
}}`,
  },
];

const HEADER_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The key to access data in your row objects. Must match a property in your data.",
    type: "string",
    example: `{ accessor: "name" }  // Accesses row.name`,
  },
  {
    key: "label",
    name: "label",
    required: true,
    description: "The display name shown in the column header.",
    type: "string",
    example: `{ label: "Full Name" }`,
  },
  {
    key: "width",
    name: "width",
    required: true,
    description:
      "Column width. Can be a number (pixels), string with units, or flexible units like '1fr'.",
    type: "number | string",
    example: `width: 100        // 100px
width: "150px"    // 150px
width: "1fr"      // Flexible`,
  },
  {
    key: "minWidth",
    name: "minWidth",
    required: false,
    description: "Minimum width constraint for the column.",
    type: "number",
    example: `minWidth: 80`,
  },
  {
    key: "isSortable",
    name: "isSortable",
    required: false,
    description: "Enable sorting for this column.",
    type: "boolean",
    example: `isSortable: true`,
  },
  {
    key: "type",
    name: "type",
    required: false,
    description: "Data type for proper formatting and sorting behavior.",
    type: "string",
    enumValues: ["string", "number", "boolean", "date", "enum"],
    example: `type: "number"   // For numeric columns
type: "date"     // For date columns
type: "boolean"  // For true/false columns
type: "enum"     // For dropdown/select columns
type: "string"   // Default`,
  },
];

const PropTable = ({ props, title }: { props: PropInfo[]; title: string }) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const columns: ColumnsType<PropInfo> = [
    {
      title: "Property",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (name: string, record: PropInfo) => (
        <Space direction="vertical" size={2}>
          <Text
            code
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1890ff",
            }}
          >
            {name}
          </Text>
          {record.type && (
            <Text
              type="secondary"
              style={{
                fontSize: "11px",
                fontStyle: "italic",
              }}
            >
              {record.type}
            </Text>
          )}
        </Space>
      ),
    },
    {
      title: "Required",
      dataIndex: "required",
      key: "required",
      width: 100,
      align: "center",
      render: (required: boolean) => (
        <Tag color={required ? "blue" : "green"}>{required ? "Required" : "Optional"}</Tag>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string, record: PropInfo) => (
        <Space direction="vertical" size={4}>
          <Text>{description}</Text>
          {record.enumValues && (
            <Space direction="vertical" size={2}>
              <Text strong style={{ fontSize: "12px" }}>
                Options:
              </Text>
              <Space wrap>
                {record.enumValues.map((value) => (
                  <Tag key={value} style={{ fontSize: "11px" }}>
                    {value}
                  </Tag>
                ))}
              </Space>
            </Space>
          )}
        </Space>
      ),
    },
    {
      title: "Example",
      key: "example",
      width: 80,
      align: "center",
      render: (_, record: PropInfo) =>
        record.example ? (
          <Button
            type="text"
            size="small"
            icon={expandedRows.includes(record.key) ? <DownOutlined /> : <RightOutlined />}
            onClick={() => {
              if (expandedRows.includes(record.key)) {
                setExpandedRows(expandedRows.filter((key) => key !== record.key));
              } else {
                setExpandedRows([...expandedRows, record.key]);
              }
            }}
          />
        ) : null,
    },
  ];

  const expandedRowRender = (record: PropInfo) => {
    if (!record.example) return null;
    return (
      <div style={{ margin: "16px 0" }}>
        <Text strong style={{ marginBottom: 8, display: "block" }}>
          Example Usage:
        </Text>
        <CodeBlock code={record.example} language="tsx" />
      </div>
    );
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
      <Table<PropInfo>
        columns={columns}
        dataSource={props}
        pagination={false}
        expandable={{
          expandedRowKeys: expandedRows,
          expandedRowRender,
          showExpandColumn: false,
        }}
        size="middle"
        bordered
      />
    </motion.div>
  );
};

const QuickStartContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Quick Start</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        This guide will help you quickly set up Simple Table in your React project. In just a few
        minutes, you'll have a fully functional data table.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="QuickStartDemo.txt"
          height="400px"
          link={SANDBOX_LIST["QuickStartDemo.tsx"].url}
          Preview={QuickStartDemo}
        />
      </motion.div>

      {/* Important rowIdAccessor callout */}
      <motion.div
        className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-700 p-4 rounded-lg shadow-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-amber-600 dark:text-amber-400 mt-0.5"
          />
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-2">
              Important: rowIdAccessor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">rowIdAccessor</code>{" "}
              prop is required and crucial for proper table functionality. It tells Simple Table
              which property in your data uniquely identifies each row.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Without this, features like row selection, editing, and updates won't work correctly.
              Make sure each row has a unique value for this property.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SimpleTable Props
      </motion.h2>

      <PropTable props={TABLE_PROPS} title="Main Component Props" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Header Configuration
      </motion.h2>

      <PropTable props={HEADER_PROPS} title="Header Object Properties" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {UI_STRINGS.docs.cssSetup.title}
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {UI_STRINGS.docs.cssSetup.description}
        </p>

        <CodeBlock code={TECHNICAL_STRINGS.css.import} language="js" />

        <p className="text-gray-700 dark:text-gray-300">{UI_STRINGS.docs.cssSetup.note}</p>
      </motion.div>

      <motion.div
        className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h3 className="font-bold text-gray-800 dark:text-white mb-2">Pro Tip</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Simple Table automatically handles the styling of alternating rows, borders, and hover
          states. You can customize these later with themes, but the defaults look great out of the
          box!
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default QuickStartContent;
