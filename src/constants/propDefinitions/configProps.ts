import type { PropInfo } from "./types";

export const ENUM_OPTION_PROPS: PropInfo[] = [
  {
    key: "label",
    name: "label",
    required: true,
    description: "Display text shown in the dropdown",
    type: "string",
    example: `{ label: "Active" }`,
  },
  {
    key: "value",
    name: "value",
    required: true,
    description: "Actual value stored in the data",
    type: "string",
    example: `{ value: "active" }`,
  },
];

export const AGGREGATION_CONFIG_PROPS: PropInfo[] = [
  {
    key: "type",
    name: "type",
    required: true,
    description: "The aggregation function to use",
    type: "AggregationType",
    link: "#union-types",
    example: `{ type: "sum" }`,
  },
  {
    key: "parseValue",
    name: "parseValue",
    required: false,
    description: "Function to parse string values to numbers (e.g., '$15.0M' to 15000000)",
    type: "(value: any) => number",
    example: `parseValue: (val) => parseFloat(val.replace(/[^0-9.-]/g, ''))`,
  },
  {
    key: "formatResult",
    name: "formatResult",
    required: false,
    description: "Function to format the aggregated result back to string",
    type: "(value: number) => string",
    example: `formatResult: (val) => '$' + val.toLocaleString()`,
  },
  {
    key: "customFn",
    name: "customFn",
    required: false,
    description: "Custom aggregation function (only when type is 'custom')",
    type: "(values: any[]) => any",
    example: `customFn: (values) => values.filter(v => v > 0).length`,
  },
];

export const CHART_OPTIONS_PROPS: PropInfo[] = [
  {
    key: "min",
    name: "min",
    required: false,
    description:
      "Custom minimum value for chart scaling. If not provided, the minimum data value is used.",
    type: "number",
    example: `min: 0`,
  },
  {
    key: "max",
    name: "max",
    required: false,
    description:
      "Custom maximum value for chart scaling. If not provided, the maximum data value is used.",
    type: "number",
    example: `max: 100`,
  },
  {
    key: "width",
    name: "width",
    required: false,
    description: "Custom chart width in pixels. Default is 100.",
    type: "number",
    example: `width: 120`,
  },
  {
    key: "height",
    name: "height",
    required: false,
    description: "Custom chart height in pixels. Default is 30.",
    type: "number",
    example: `height: 35`,
  },
  {
    key: "color",
    name: "color",
    required: false,
    description: "Custom chart color (CSS color value). Overrides the theme color.",
    type: "string",
    example: `color: "#3b82f6"`,
  },
  {
    key: "fillColor",
    name: "fillColor",
    required: false,
    description:
      "Custom fill color for area charts (CSS color value). Only applies to lineAreaChart type. Overrides the theme fill color.",
    type: "string",
    example: `fillColor: "#93c5fd"`,
  },
  {
    key: "fillOpacity",
    name: "fillOpacity",
    required: false,
    description:
      "Fill opacity for area charts. Value between 0 and 1. Default is 0.2. Only applies to lineAreaChart type.",
    type: "number",
    example: `fillOpacity: 0.3`,
  },
  {
    key: "strokeWidth",
    name: "strokeWidth",
    required: false,
    description: "Line stroke width in pixels. Default is 2. Only applies to lineAreaChart type.",
    type: "number",
    example: `strokeWidth: 2`,
  },
  {
    key: "gap",
    name: "gap",
    required: false,
    description: "Gap between bars in pixels. Default is 2. Only applies to barChart type.",
    type: "number",
    example: `gap: 3`,
  },
];

export const FILTER_CONDITION_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor/key being filtered",
    type: "Accessor",
    link: "#union-types",
    example: `{ accessor: "age" }`,
  },
  {
    key: "operator",
    name: "operator",
    required: true,
    description: "The filter operation to perform",
    type: "FilterOperator",
    example: `{ operator: "greaterThan" }`,
  },
  {
    key: "value",
    name: "value",
    required: false,
    description: "Single value for most filter operations",
    type: "CellValue",
    link: "#union-types",
    example: `{ value: 25 }`,
  },
  {
    key: "values",
    name: "values",
    required: false,
    description: "Array of values for 'between', 'in', etc. operations",
    type: "CellValue[]",
    link: "#union-types",
    example: `{ values: [18, 65] } // for between filter`,
  },
];

export const SORT_CONFIG_PROPS: PropInfo[] = [
  {
    key: "key",
    name: "key",
    required: true,
    description: "The HeaderObject representing the column being sorted.",
    type: "HeaderObject",
    link: "#header-object",
    example: `key: { accessor: "name", label: "Name", width: 150 }`,
  },
  {
    key: "direction",
    name: "direction",
    required: true,
    description: "The sort direction for the column.",
    type: '"ascending" | "descending"',
    example: `direction: "ascending"`,
  },
];

export const TABLE_FILTER_STATE_PROPS: PropInfo[] = [
  {
    key: "filterCondition",
    name: "filterCondition",
    required: true,
    description: "The FilterCondition object containing the filter logic.",
    type: "FilterCondition",
    link: "#filter-condition",
    example: `{
  accessor: "name",
  operator: "contains",
  value: "John"
}`,
  },
];
