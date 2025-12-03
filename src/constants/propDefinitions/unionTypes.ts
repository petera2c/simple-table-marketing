import type { PropInfo } from "./types";

export const UNION_TYPE_DEFINITIONS: PropInfo[] = [
  {
    key: "accessor",
    name: "Accessor",
    required: false,
    description:
      "Valid property key that exists in the Row type. Used to safely access row data. Supports nested properties using dot notation (v1.7.6+).",
    type: "keyof Row",
    example: `// If your Row type has properties: id, name, age, status
const accessor: Accessor = "name";     // Valid - exists in Row
const accessor2: Accessor = "age";     // Valid - exists in Row
// const invalid: Accessor = "xyz";    // TypeScript error - doesn't exist in Row

// Nested data accessor (v1.7.6+)
const nested: Accessor = "latest.rank";           // Access nested property
const deepNested: Accessor = "user.profile.name"; // Access deeply nested property`,
  },
  {
    key: "cellvalue",
    name: "CellValue",
    required: false,
    description: "Valid data types that can be stored in a table cell.",
    type: "string | number | boolean | undefined | null | string[] | number[] | Record<string, any>[]",
    example: `const name: CellValue = "John Doe";           // string
const age: CellValue = 30;                    // number
const isActive: CellValue = true;             // boolean
const score: CellValue = null;                // null
const description: CellValue = undefined;     // undefined
const tags: CellValue = ["tag1", "tag2"];     // string[]
const ratings: CellValue = [4.5, 3.8, 5.0];  // number[]
const users: CellValue = [                    // Record<string, any>[]
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" }
];`,
  },
  {
    key: "theme",
    name: "Theme",
    required: false,
    description: "Built-in theme options for styling the table.",
    type: '"light" | "dark" | "sky" | "violet" | "neutral" | "custom"',
    example: `theme="dark"
theme="neutral"
theme="custom"`,
  },
  {
    key: "aggregationtype",
    name: "AggregationType",
    required: false,
    description: "Available aggregation functions for grouped data.",
    type: '"sum" | "average" | "count" | "min" | "max" | "custom"',
    example: `aggregation: {
  type: "sum"     // Sum all values
}
aggregation: {
  type: "custom"  // Custom function
}`,
  },
  {
    key: "pinned",
    name: "Pinned",
    required: false,
    description: "Column pinning position options.",
    type: '"left" | "right"',
    example: `pinned: "left"   // Pin to left side
pinned: "right"  // Pin to right side`,
  },
  {
    key: "chartoptions",
    name: "ChartOptions",
    required: false,
    description:
      "Configuration object for customizing chart column appearance and behavior. Use with lineAreaChart and barChart column types.",
    type: "object",
    example: `interface ChartOptions {
  min?: number;        // Custom minimum value for chart scaling
  max?: number;        // Custom maximum value for chart scaling
  width?: number;      // Custom chart width (default: 100)
  height?: number;     // Custom chart height (default: 30)
  color?: string;      // Custom chart color (overrides theme color)
  fillColor?: string;  // Custom fill color for area charts
  fillOpacity?: number; // Fill opacity for area charts (default: 0.2)
  strokeWidth?: number; // Line stroke width (default: 2)
  gap?: number;        // Gap between bars in bar charts (default: 2)
}

// Example usage
chartOptions: {
  min: 0,
  max: 100,
  color: "#3b82f6",
  height: 35
}`,
  },
  {
    key: "columneditorposition",
    name: "ColumnEditorPosition",
    required: false,
    description: "Position options for the column editor panel.",
    type: '"left" | "right"',
    example: `columnEditorPosition="left"
columnEditorPosition="right"`,
  },
  {
    key: "row",
    name: "Row",
    required: false,
    description:
      "Data object representing a single table row. Can contain cell values, nested row arrays for hierarchical data, or any additional properties.",
    type: "Record<string, CellValue | Row[] | Record<string, any>>",
    example: `const row: Row = {
  id: 1,
  name: "John Doe",
  age: 30,
  status: "active",
  // Nested rows for hierarchical data
  children: [
    { id: 2, name: "Child Row", parentId: 1 }
  ],
  // Additional custom properties
  metadata: {
    lastModified: "2024-01-01",
    category: "active"
  }
}`,
  },
  {
    key: "type",
    name: "HeaderObject.type",
    required: false,
    description:
      "Data type for proper formatting and sorting behavior. Includes chart types for visualizing array data inline.",
    type: "string | number | boolean | date | enum | lineAreaChart | barChart | other",
    example: `type: "number"   // For numeric columns
type: "lineAreaChart"  // For inline line/area charts
type: "barChart"       // For inline bar charts`,
  },
];
