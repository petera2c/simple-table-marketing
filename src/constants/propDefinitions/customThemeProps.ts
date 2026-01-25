import type { PropInfo } from "./types";

export const CUSTOM_THEME_PROPS: PropInfo[] = [
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description:
      "Height of table rows in pixels. If not specified, uses the default value of 40px.",
    type: "number",
    example: `customTheme={{
  rowHeight: 32
}}`,
  },
  {
    key: "headerHeight",
    name: "headerHeight",
    required: false,
    description:
      "Height of the table header in pixels. If not specified, uses the default value of 40px.",
    type: "number",
    example: `customTheme={{
  headerHeight: 48
}}`,
  },
  {
    key: "footerHeight",
    name: "footerHeight",
    required: false,
    description:
      "Height of the table footer in pixels. If not specified, uses the default value of 50px.",
    type: "number",
    example: `customTheme={{
  footerHeight: 60
}}`,
  },
  {
    key: "selectionColumnWidth",
    name: "selectionColumnWidth",
    required: false,
    description:
      "Width of the row selection checkbox column in pixels. If not specified, uses the default value of 40px.",
    type: "number",
    example: `customTheme={{
  selectionColumnWidth: 50
}}`,
  },
];
