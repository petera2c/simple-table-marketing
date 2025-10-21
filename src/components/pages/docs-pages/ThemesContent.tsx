"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import ThemesDemo from "@/components/demos/ThemesDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import ThemeSelector from "@/components/ThemeSelector";
import { useEffect, useState } from "react";
import { Theme } from "simple-table-core";
import { useThemeContext } from "@/providers/ThemeProvider";
import CodeBlock from "@/components/CodeBlock";
import PropTable, { type PropInfo } from "@/components/PropTable";

const THEME_PROPS: PropInfo[] = [
  {
    key: "theme",
    name: "theme",
    required: false,
    description:
      "Built-in theme option for styling the table. Choose from predefined themes to quickly customize your table's appearance.",
    type: "Theme",
    link: "/docs/api-reference#union-types",
    enumValues: ["light", "dark", "sky", "violet", "neutral", "frost"],
    example: `<SimpleTable
  theme="dark"
  // ... other props
/>`,
  },
  {
    key: "useHoverRowBackground",
    name: "useHoverRowBackground",
    required: false,
    description:
      "Enables a background color change when hovering over a row. This provides better visual feedback for users when interacting with the table.",
    type: "boolean",
    example: `<SimpleTable
  useHoverRowBackground={true}  // Default
  // ... other props
/>`,
  },
  {
    key: "useOddEvenRowBackground",
    name: "useOddEvenRowBackground",
    required: false,
    description:
      "Applies alternating background colors to odd and even rows. This makes it easier to distinguish between adjacent rows, especially in tables with many columns.",
    type: "boolean",
    example: `<SimpleTable
  useOddEvenRowBackground={true}  // Default
  // ... other props
/>`,
  },
  {
    key: "useOddColumnBackground",
    name: "useOddColumnBackground",
    required: false,
    description:
      "Applies alternating background colors to odd and even columns. This can help differentiate between adjacent columns in tables with many columns or narrow columns.",
    type: "boolean",
    example: `<SimpleTable
  useOddColumnBackground={false}  // Default
  // ... other props
/>`,
  },
];

export default function ThemesContent() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const { theme } = useThemeContext();

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faPalette} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Themes</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table includes several beautiful built-in themes to match your application's visual
        design. Choose from Light, Dark, Sky, Violet, Neutral, or the new Frost theme with modern
        cool blue tones.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col gap-4 h-full">
          <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          <LivePreview
            demoCodeFilename="ThemesDemo.txt"
            height="400px"
            link={SANDBOX_LIST["ThemesDemo.tsx"].url}
            Preview={({ height }) => <ThemesDemo height={height} theme={currentTheme} />}
          />
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Theme Configuration
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To apply a theme to Simple Table, simply pass the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            theme
          </code>{" "}
          prop with one of the available theme options:
        </p>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Styling Flags
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In addition to themes, Simple Table provides several boolean flags that control specific
          aspects of table appearance:
        </p>

        <PropTable props={THEME_PROPS} title="Theme Configuration Options" />

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You can use these flags together with any theme to control the visual presentation of your
          table:
        </p>

        <CodeBlock
          className="mb-6"
          code={`import { SimpleTable } from 'simple-table-core';
import 'simple-table-core/styles.css';

export default function MyTable() {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      theme="dark"
      useHoverRowBackground={true}
      useOddEvenRowBackground={true}
      useOddColumnBackground={false}
    />
  );
}`}
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When creating custom themes, you can customize the colors used for these styling
            features using CSS variables like{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              --st-hover-row-background-color
            </code>{" "}
            and{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              --st-odd-row-background-color
            </code>
            . See the{" "}
            <a
              href="/docs/custom-theme"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Custom Theme
            </a>{" "}
            documentation for details.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
}
