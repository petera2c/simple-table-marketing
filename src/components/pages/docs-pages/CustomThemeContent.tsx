"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CustomThemeDemo from "@/components/demos/custom-theme/CustomThemeDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";
import { CUSTOM_THEME_PROPS } from "@/constants/propDefinitions";
import Link from "next/link";

const CSS_THEME_PROPS: PropInfo[] = [
  {
    key: "theme",
    name: "theme",
    required: false,
    description:
      'Set to "custom" to apply your custom CSS theme. Requires a corresponding CSS file with .theme-custom class and CSS variables.',
    type: "enum",
    link: "/docs/api-reference#union-types",
    example: `// Apply custom theme
<SimpleTable
  theme="custom"
  // ... other props
/>

// With custom CSS file containing:
// .theme-custom {
//   --st-primary-color: #your-color;
//   --st-background-color: #your-bg;
//   /* ... other CSS variables */
// }`,
  },
];

export default function CustomThemeContent() {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-green-100 rounded-lg">
          <FontAwesomeIcon icon={faCode} className="text-green-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Custom Theme</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table offers two complementary ways to customize your table's appearance: CSS-based
        theming for colors and visual styling, and the customTheme prop for layout dimensions that
        affect virtualization calculations.
      </motion.p>

      <motion.div
        className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h3 className="font-bold text-gray-800 dark:text-white mb-2">Two Types of Customization</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>CSS Theming</strong> - Use CSS variables to customize colors, fonts, and visual
            styles. Perfect for matching your design system.
          </li>
          <li>
            <strong>customTheme Prop</strong> - Configure layout dimensions (heights, widths,
            spacing) that affect virtualization calculations. These cannot be styled through CSS
            alone.
          </li>
        </ul>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        customTheme Prop: Layout Dimensions
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            customTheme
          </code>{" "}
          prop allows you to configure layout dimensions that are critical for the table's
          virtualization engine. These values determine how the table calculates scroll positions,
          visible rows, and layout measurements.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            Why These Can't Be CSS-Only
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Simple Table uses virtualization to efficiently render large datasets by only rendering
            visible rows. To calculate which rows are visible and where to position them, the table
            needs to know exact pixel dimensions before rendering. CSS values can't be read
            synchronously during render, so these dimensions must be provided as props.
          </p>
        </div>

        <PropTable props={CUSTOM_THEME_PROPS} title="customTheme Properties" />

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Example Usage
          </h3>
          <CodeBlock
            className="mb-4"
            code={`import { SimpleTable } from 'simple-table-core';
import 'simple-table-core/styles.css';

export default function MyTable() {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      customTheme={{
        // Row and header dimensions
        rowHeight: 48,
        headerHeight: 56,
        footerHeight: 60,
        
        // Border widths
        rowSeparatorWidth: 1,
        borderWidth: 2,
        pinnedBorderWidth: 3,
        
        // Nested grid configuration
        nestedGridBorderWidth: 2,
        nestedGridPaddingTop: 12,
        nestedGridPaddingBottom: 12,
        nestedGridPaddingLeft: 20,
        nestedGridPaddingRight: 20,
        nestedGridMaxHeight: 400,
        
        // Column dimensions
        selectionColumnWidth: 50,
      }}
    />
  );
}`}
          />
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Compact tables</strong> - Reduce{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowHeight
              </code>{" "}
              to 32px for dense data displays
            </li>
            <li>
              <strong>Spacious layouts</strong> - Increase{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowHeight
              </code>{" "}
              to 56px or more for better readability
            </li>
            <li>
              <strong>Nested tables</strong> - Configure{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                nestedGridMaxHeight
              </code>{" "}
              to control how tall nested grids can grow
            </li>
            <li>
              <strong>Custom borders</strong> - Adjust border widths to match your design system
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-6">
          For a complete reference of all customTheme properties, see the{" "}
          <Link
            href="/docs/api-reference#custom-theme"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            API Reference
          </Link>
          .
        </p>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        CSS Theming: Colors and Visual Styling
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Beyond the built-in themes, Simple Table allows you to create completely custom themes
          using CSS variables. By defining your own theme with custom colors, spacing, and
          typography, you can perfectly match your application's design system.
        </p>

        <LivePreview
          demoCodeFilename="custom-theme/CustomThemeDemo.txt"
          height="400px"
          link={SANDBOX_LIST["src/CustomThemeDemo.tsx"].url}
          Preview={CustomThemeDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Creating a Custom CSS Theme
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To create a custom CSS theme for Simple Table, follow these steps:
        </p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>
            Create a CSS file with your theme variables using the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              .theme-custom
            </code>{" "}
            class
          </li>
          <li>Import the CSS file into your application</li>
          <li>
            Apply the theme by passing{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              theme="custom"
            </code>{" "}
            to the SimpleTable component
          </li>
        </ol>

        <PropTable props={CSS_THEME_PROPS} title="CSS Theme Configuration" />

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Theme Variable Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              Use the{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .theme-custom
              </code>{" "}
              class to define your custom theme
            </li>
            <li>
              Define CSS variables with the{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-
              </code>{" "}
              prefix
            </li>
            <li>Customize colors, spacing, fonts, and transitions</li>
            <li>Use direct hex values or color variables for consistent styling</li>
            <li>Test your theme with different features like column resizing and cell selection</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        CSS Variables Example
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mb-8"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here are the CSS variables used to create the custom theme in the demo above:
        </p>

        <CodeBlock className="mb-0" demoCodeFilename="custom-theme/CustomTheme.txt" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Combining Both Approaches
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mb-8"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You can use both CSS theming and the customTheme prop together for complete control over
          your table's appearance:
        </p>

        <CodeBlock
          className="mb-4"
          code={`import { SimpleTable } from 'simple-table-core';
import 'simple-table-core/styles.css';
import './my-custom-theme.css'; // Your CSS variables

export default function MyTable() {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      // CSS theming for colors and visual styling
      theme="custom"
      // Layout dimensions for virtualization
      customTheme={{
        rowHeight: 48,
        headerHeight: 56,
        nestedGridMaxHeight: 400,
      }}
    />
  );
}`}
        />

        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-400 dark:border-purple-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Best Practice</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Use CSS variables for all color and visual styling (backgrounds, borders, fonts,
            shadows), and use the customTheme prop for dimensions that affect layout calculations
            (heights, widths, spacing). This separation ensures optimal performance and
            maintainability.
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        New in v2.4.1: Column Editor Styling
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Version 2.4.1 introduces new CSS classes and variables for styling the enhanced column
          editor with drag-and-drop and search functionality.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            New Column Editor CSS Classes
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-column-editor-search-wrapper
              </code>{" "}
              - Search input container
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-column-editor-search
              </code>{" "}
              - Search input wrapper
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-column-editor-list
              </code>{" "}
              - Column list container
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-column-label-container
              </code>{" "}
              - Column label wrapper
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-drag-icon-container
              </code>{" "}
              - Drag handle container
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                .st-column-editor-drag-separator
              </code>{" "}
              - Drag drop indicator line
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">New CSS Variables:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-drag-separator-color
              </code>{" "}
              - Color of the drag drop indicator line (theme-specific)
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          See the{" "}
          <a
            href="/docs/column-editing"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Column Editing
          </a>{" "}
          documentation for more details on the column editor features.
        </p>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Sub-Column Styling
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.95 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Dedicated CSS variables for styling sub-columns (child columns within collapsible column
          groups). These variables give you fine-grained control over the appearance of nested
          column structures.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            New Sub-Column CSS Variables
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-sub-cell-hover-background-color
              </code>{" "}
              - Background color when hovering over sub-cells
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-dragging-sub-header-background-color
              </code>{" "}
              - Background color when dragging sub-headers
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-selected-sub-cell-background-color
              </code>{" "}
              - Background color for selected sub-cells
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-selected-sub-cell-color
              </code>{" "}
              - Text color for selected sub-cells
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          These variables complement the existing sub-column variables:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-sub-header-background-color
              </code>{" "}
              - Background color for sub-column headers
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                --st-sub-cell-background-color
              </code>{" "}
              - Background color for sub-column cells
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          See the{" "}
          <a
            href="/docs/collapsible-columns"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Collapsible Columns
          </a>{" "}
          documentation for more details on using these variables.
        </p>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
}
