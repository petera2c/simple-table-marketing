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

const CUSTOM_THEME_PROPS: PropInfo[] = [
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
        Beyond the built-in themes, Simple Table allows you to create completely custom themes using
        CSS variables. By defining your own theme with custom colors, spacing, and typography, you
        can perfectly match your application's design system.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="custom-theme/CustomThemeDemo.txt"
          height="400px"
          link={SANDBOX_LIST["src/CustomThemeDemo.tsx"].url}
          Preview={CustomThemeDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Creating a Custom Theme
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To create a custom theme for Simple Table, follow these steps:
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

        <PropTable props={CUSTOM_THEME_PROPS} title="Custom Theme Configuration" />

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
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        CSS Variables Example
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-8"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Here are the CSS variables used to create the custom theme in the demo above:
        </p>

        <CodeBlock className="mb-0" demoCodeFilename="custom-theme/CustomTheme.txt" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        New in v1.8.6: Sub-Column Styling
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Version 1.8.6 introduces dedicated CSS variables for styling sub-columns (child columns
          within collapsible column groups). These variables give you fine-grained control over the
          appearance of nested column structures.
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
