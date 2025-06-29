"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Table, Tag, Space, Button, Typography } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";

const { Text, Title } = Typography;

interface PropInfo {
  key: string;
  name: string;
  required: boolean;
  description: string;
  type?: string;
  enumValues?: string[];
  example?: string;
}

interface TypeDefinition {
  key: string;
  name: string;
  description: string;
  definition: string;
  example?: string;
}

const TYPE_DEFINITIONS: TypeDefinition[] = [
  {
    key: "theme",
    name: "Theme",
    description: "Built-in theme options for styling the table.",
    definition: `type Theme = "light" | "dark" | "sky" | "funky" | "neutral" | "custom";`,
    example: `// Use a built-in theme
theme="dark"
theme="sky"

// Or create custom theme
theme="custom"`,
  },
  {
    key: "enumOption",
    name: "EnumOption",
    description: "Configuration object for enum column dropdown options.",
    definition: `type EnumOption = {
  label: string;  // Display text
  value: string;  // Actual value
};`,
    example: `enumOptions: [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Pending", value: "pending" }
]`,
  },
  {
    key: "aggregationType",
    name: "AggregationType",
    description: "Available aggregation functions for grouped data.",
    definition: `type AggregationType = "sum" | "average" | "count" | "min" | "max" | "custom";`,
    example: `aggregation: {
  type: "sum",     // Sum all values
  type: "average", // Calculate average
  type: "count",   // Count rows
  type: "custom"   // Custom function
}`,
  },
  {
    key: "pinned",
    name: "Pinned",
    description: "Column pinning position options.",
    definition: `type Pinned = "left" | "right";`,
    example: `// Pin to left side
pinned: "left"

// Pin to right side  
pinned: "right"`,
  },
  {
    key: "aggregationConfig",
    name: "AggregationConfig",
    description: "Configuration object for column aggregation functions.",
    definition: `type AggregationConfig = {
  type: AggregationType;
  customFunction?: (values: any[]) => any;
  label?: string;
};`,
    example: `aggregation: {
  type: "sum",
  label: "Total Sales"
}

// Custom aggregation
aggregation: {
  type: "custom",
  customFunction: (values) => values.length,
  label: "Row Count"
}`,
  },
  {
    key: "headerObject",
    name: "HeaderObject",
    description:
      "Complete column configuration object. See HeaderObject props table above for all available properties.",
    definition: `type HeaderObject = {
  accessor: string;
  label: string;
  width: number | string;
  // ... plus all optional properties
  // See HeaderObject table above for details
};`,
    example: `const header: HeaderObject = {
  accessor: "name",
  label: "Full Name", 
  width: "1fr",
  type: "string",
  isSortable: true,
  filterable: true
}`,
  },
  {
    key: "row",
    name: "Row",
    description:
      "Data object representing a single table row. Can contain any properties matching your column accessors.",
    definition: `type Row = Record<string, any>;`,
    example: `const row: Row = {
  id: 1,
  name: "John Doe",
  age: 30,
  status: "active",
  // ... any other properties
}`,
  },
  {
    key: "columnEditorPosition",
    name: "ColumnEditorPosition",
    description: "Position options for the column editor panel.",
    definition: `type ColumnEditorPosition = "left" | "right";`,
    example: `columnEditorPosition="right"`,
  },
  {
    key: "cellChangeProps",
    name: "CellChangeProps",
    description: "Event data passed to the onCellEdit callback when a cell is edited.",
    definition: `type CellChangeProps = {
  rowIndex: number;
  accessor: string;
  oldValue: any;
  newValue: any;
  row: Row;
};`,
    example: `onCellEdit={(props: CellChangeProps) => {
  console.log('Cell changed:', props.newValue);
  console.log('Row:', props.row);
}}`,
  },
  {
    key: "filterCondition",
    name: "FilterCondition",
    description: "Filter configuration object passed to the onFilterChange callback.",
    definition: `type FilterCondition = {
  accessor: string;
  operator: string;
  value: any;
  type: string;
};`,
    example: `onFilterChange={(filter: FilterCondition) => {
  console.log('Filter applied:', filter);
  // Handle external filtering logic
}}`,
  },
  {
    key: "onNextPage",
    name: "OnNextPage",
    description: "Callback function type for custom pagination handling.",
    definition: `type OnNextPage = (direction: "next" | "prev") => void;`,
    example: `onNextPage={(direction: OnNextPage) => {
  if (direction === "next") {
    // Load next page
  } else {
    // Load previous page  
  }
}}`,
  },
  {
    key: "reactNode",
    name: "ReactNode",
    description: "Any valid React element, string, number, or array of React elements.",
    definition: `type ReactNode = React.ReactElement | string | number | React.ReactNodeArray | null | undefined;`,
    example: `// String
expandIcon=">"

// React element
expandIcon={<ChevronDownIcon />}

// Custom JSX
nextIcon={<span>Next →</span>}`,
  },
];

const SIMPLE_TABLE_PROPS: PropInfo[] = [
  {
    key: "defaultHeaders",
    name: "defaultHeaders",
    required: true,
    description: "Array of column definitions that specify the structure of your table.",
    type: "HeaderObject[]",
    example: `const headers = [
  { accessor: "id", label: "ID", width: 80 },
  { accessor: "name", label: "Name", width: "1fr" }
];`,
  },
  {
    key: "rows",
    name: "rows",
    required: true,
    description: "Array of data objects to display in the table. Each object represents a row.",
    type: "Row[]",
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
      "Property name to use as row ID. This is crucial for proper row tracking, selection, and updates.",
    type: "string",
    example: `rowIdAccessor="id"
// or
rowIdAccessor="employeeId"`,
  },
  {
    key: "height",
    name: "height",
    required: false,
    description: "Height of the table container.",
    type: "string",
    example: `height="400px"
height="50vh"`,
  },
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description: "Height of each individual row in pixels.",
    type: "number",
    example: `rowHeight={32}
rowHeight={48}`,
  },
  {
    key: "allowAnimations",
    name: "allowAnimations",
    required: false,
    description: "Flag for allowing animations throughout the table.",
    type: "boolean",
    example: `allowAnimations={true}`,
  },
  {
    key: "cellUpdateFlash",
    name: "cellUpdateFlash",
    required: false,
    description: "Flag for flash animation after cell update.",
    type: "boolean",
    example: `cellUpdateFlash={true}`,
  },
  {
    key: "columnReordering",
    name: "columnReordering",
    required: false,
    description: "Enable column reordering by drag and drop.",
    type: "boolean",
    example: `columnReordering={true}`,
  },
  {
    key: "columnResizing",
    name: "columnResizing",
    required: false,
    description: "Enable column resizing functionality.",
    type: "boolean",
    example: `columnResizing={true}`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description: "Flag for column editing via column editor panel.",
    type: "boolean",
    example: `editColumns={true}`,
  },
  {
    key: "editColumnsInitOpen",
    name: "editColumnsInitOpen",
    required: false,
    description: "Flag for opening the column editor when the table is loaded.",
    type: "boolean",
    example: `editColumnsInitOpen={true}`,
  },
  {
    key: "expandAll",
    name: "expandAll",
    required: false,
    description: "Flag for expanding all rows by default (for grouped rows).",
    type: "boolean",
    example: `expandAll={true}`,
  },
  {
    key: "expandIcon",
    name: "expandIcon",
    required: false,
    description: "Icon for expandable rows (will rotate on expand/collapse).",
    type: "ReactNode",
    example: `expandIcon={<ChevronIcon />}`,
  },
  {
    key: "externalFilterHandling",
    name: "externalFilterHandling",
    required: false,
    description: "Flag to let consumer handle filter logic completely.",
    type: "boolean",
    example: `externalFilterHandling={true}`,
  },
  {
    key: "hideFooter",
    name: "hideFooter",
    required: false,
    description: "Flag for hiding the table footer.",
    type: "boolean",
    example: `hideFooter={true}`,
  },
  {
    key: "rowGrouping",
    name: "rowGrouping",
    required: false,
    description: "Array of property names that define row grouping hierarchy.",
    type: "string[]",
    example: `rowGrouping={["department", "team"]}`,
  },
  {
    key: "rowsPerPage",
    name: "rowsPerPage",
    required: false,
    description: "Number of rows per page for pagination.",
    type: "number",
    example: `rowsPerPage={25}`,
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
    key: "selectableColumns",
    name: "selectableColumns",
    required: false,
    description: "Flag for selectable column headers.",
    type: "boolean",
    example: `selectableColumns={true}`,
  },
  {
    key: "shouldPaginate",
    name: "shouldPaginate",
    required: false,
    description: "Flag for enabling pagination.",
    type: "boolean",
    example: `shouldPaginate={true}`,
  },
  {
    key: "theme",
    name: "theme",
    required: false,
    description: "Theme configuration for the table styling.",
    type: "Theme",
    example: `theme={{
  primaryColor: "#1890ff",
  backgroundColor: "#ffffff"
}}`,
  },
  {
    key: "useOddColumnBackground",
    name: "useOddColumnBackground",
    required: false,
    description: "Flag for using alternating column background colors.",
    type: "boolean",
    example: `useOddColumnBackground={true}`,
  },
  {
    key: "useHoverRowBackground",
    name: "useHoverRowBackground",
    required: false,
    description: "Flag for using hover row background highlighting.",
    type: "boolean",
    example: `useHoverRowBackground={true}`,
  },
  {
    key: "useOddEvenRowBackground",
    name: "useOddEvenRowBackground",
    required: false,
    description: "Flag for using odd/even row background colors.",
    type: "boolean",
    example: `useOddEvenRowBackground={true}`,
  },
];

const HEADER_OBJECT_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The key to access data in your row objects. Must match a property in your data.",
    type: "string",
    example: `{ accessor: "firstName" }`,
  },
  {
    key: "label",
    name: "label",
    required: true,
    description: "The display name shown in the column header.",
    type: "string",
    example: `{ label: "First Name" }`,
  },
  {
    key: "width",
    name: "width",
    required: true,
    description: "Column width. Can be pixels, string with units, or flexible units like '1fr'.",
    type: "number | string",
    example: `width: 100        // 100px
width: "150px"    // 150px  
width: "1fr"      // Flexible`,
  },
  {
    key: "align",
    name: "align",
    required: false,
    description: "Text alignment for the column content.",
    type: "string",
    enumValues: ["left", "center", "right"],
    example: `align: "center"`,
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
type: "enum"     // For dropdown columns
type: "string"   // Default`,
  },
  {
    key: "minWidth",
    name: "minWidth",
    required: false,
    description: "Minimum width constraint for the column.",
    type: "number | string",
    example: `minWidth: 80
minWidth: "100px"`,
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
    key: "filterable",
    name: "filterable",
    required: false,
    description: "Enable filtering for this column.",
    type: "boolean",
    example: `filterable: true`,
  },
  {
    key: "isEditable",
    name: "isEditable",
    required: false,
    description: "Enable inline editing for this column.",
    type: "boolean",
    example: `isEditable: true`,
  },
  {
    key: "hide",
    name: "hide",
    required: false,
    description: "Hide this column from display.",
    type: "boolean",
    example: `hide: true`,
  },
  {
    key: "disableReorder",
    name: "disableReorder",
    required: false,
    description: "Prevent this column from being reordered.",
    type: "boolean",
    example: `disableReorder: true`,
  },
  {
    key: "expandable",
    name: "expandable",
    required: false,
    description: "Make this column expandable for row grouping.",
    type: "boolean",
    example: `expandable: true`,
  },
  {
    key: "pinned",
    name: "pinned",
    required: false,
    description: "Pin this column to left or right side.",
    type: "Pinned",
    enumValues: ["left", "right"],
    example: `pinned: "left"`,
  },
  {
    key: "children",
    name: "children",
    required: false,
    description: "Child columns for nested header structure.",
    type: "HeaderObject[]",
    example: `children: [
  { accessor: "firstName", label: "First", width: 100 },
  { accessor: "lastName", label: "Last", width: 100 }
]`,
  },
  {
    key: "enumOptions",
    name: "enumOptions",
    required: false,
    description: "Options for enum type columns (dropdown values).",
    type: "EnumOption[]",
    example: `enumOptions: [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" }
]`,
  },
  {
    key: "cellRenderer",
    name: "cellRenderer",
    required: false,
    description: "Custom render function for cell content.",
    type: "Function",
    example: `cellRenderer: ({ row, accessor }) => (
  <span style={{ color: 'blue' }}>
    {row[accessor]}
  </span>
)`,
  },
  {
    key: "headerRenderer",
    name: "headerRenderer",
    required: false,
    description: "Custom render function for header content.",
    type: "Function",
    example: `headerRenderer: ({ header }) => (
  <strong>{header.label}</strong>
)`,
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

const TypeDefinitionsTable = () => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const columns = [
    {
      title: "Type Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (name: string, record: TypeDefinition) => (
        <div id={record.key}>
          <Text
            code
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1890ff",
            }}
          >
            {name}
          </Text>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) => <Text>{description}</Text>,
    },
    {
      title: "Definition",
      key: "definition",
      width: 80,
      align: "center" as const,
      render: (_: any, record: TypeDefinition) => (
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
        >
          View
        </Button>
      ),
    },
  ];

  const expandedRowRender = (record: TypeDefinition) => {
    return (
      <div style={{ margin: "16px 0" }}>
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <div>
            <Text strong style={{ marginBottom: 8, display: "block" }}>
              Type Definition:
            </Text>
            <CodeBlock code={record.definition} language="typescript" />
          </div>
          {record.example && (
            <div>
              <Text strong style={{ marginBottom: 8, display: "block" }}>
                Usage Examples:
              </Text>
              <CodeBlock code={record.example} language="tsx" />
            </div>
          )}
        </Space>
      </div>
    );
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Table<TypeDefinition>
        columns={columns}
        dataSource={TYPE_DEFINITIONS}
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

const ApiReferenceContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faBook} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">API Reference</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Complete reference for all SimpleTable component props and HeaderObject configuration
        options.
      </motion.p>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SimpleTable Props
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        These are all the props available for the main{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">SimpleTable</code> component.
      </motion.p>

      <PropTable props={SIMPLE_TABLE_PROPS} title="SimpleTable Component Props" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        HeaderObject Configuration
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        These are all the properties available when defining column headers in the{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">defaultHeaders</code> array.
      </motion.p>

      <PropTable props={HEADER_OBJECT_PROPS} title="Header Object Properties" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Type Definitions
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Detailed definitions for all custom types used in SimpleTable props. Click on any type name
        in the props tables above to jump to its definition.
      </motion.p>

      <TypeDefinitionsTable />

      <DocNavigationButtons />
    </>
  );
};

export default ApiReferenceContent;
