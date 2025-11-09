"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import ColumnWidthDemo from "@/components/demos/ColumnWidthDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_WIDTH_PROPS: PropInfo[] = [
  {
    key: "width",
    name: "HeaderObject.width",
    required: true,
    description:
      "Defines the width of the column. Can be a fixed pixel value (number) or '1fr' for auto-sizing columns that share available space proportionally.",
    type: "number | '1fr'",
    link: "/docs/api-reference#header-object",
    example: `// Fixed width in pixels
{ 
  accessor: "id", 
  label: "ID", 
  width: 60 
}

// Auto-sizing with "1fr"
{ 
  accessor: "name", 
  label: "Name", 
  width: "1fr",
  minWidth: 120
}`,
  },
  {
    key: "minWidth",
    name: "HeaderObject.minWidth",
    required: false,
    description:
      "Sets the minimum width constraint for auto-sizing columns (those using '1fr'). Prevents columns from becoming too narrow when space is limited.",
    type: "number",
    example: `// Auto-sizing column with minimum width
{ 
  accessor: "email", 
  label: "Email Address", 
  width: "1fr",
  minWidth: 200  // Won't shrink below 200px
}`,
  },
];

const ColumnWidthContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faRulerHorizontal} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Auto-Sizing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table provides flexible column width options with both fixed widths and auto-sizing
        capabilities. Use{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
          width: "1fr"
        </code>{" "}
        for columns that automatically adapt to available space.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnWidthDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnWidthDemo.tsx"].url}
          Preview={ColumnWidthDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Width Configuration
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">width</code>{" "}
          property is required for every column and accepts two types of values:
        </p>

        <PropTable props={COLUMN_WIDTH_PROPS} title="Column Width Properties" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Understanding Auto-Sizing
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When you set{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">width: "1fr"</code>,
          the column becomes flexible and shares the available space with other auto-sizing columns:
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">How "1fr" Works</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              The table calculates total available space after subtracting all fixed-width columns
            </li>
            <li>
              Remaining space is divided equally among all columns with{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                width: "1fr"
              </code>
            </li>
            <li>Each auto-sizing column gets an equal share of the available space</li>
            <li>
              The{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                minWidth
              </code>{" "}
              property ensures columns don't shrink below a specified size
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Example Calculation</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            If your table is 1000px wide with:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-2">
            <li>
              Column A:{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                width: 100
              </code>{" "}
              (fixed)
            </li>
            <li>
              Column B:{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                width: "1fr"
              </code>{" "}
              (auto)
            </li>
            <li>
              Column C:{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                width: "1fr"
              </code>{" "}
              (auto)
            </li>
            <li>
              Column D:{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                width: 150
              </code>{" "}
              (fixed)
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Columns B and C each get: (1000px - 100px - 150px) / 2 = <strong>375px</strong> each
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Responsive Behavior
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Auto-sizing columns automatically adapt when:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>The table container is resized</li>
          <li>Columns are hidden or shown</li>
          <li>Columns are reordered</li>
          <li>The viewport size changes</li>
        </ul>

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Pro Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Auto-sizing works great with column resizing! When users manually resize a column, the
            other auto-sizing columns automatically adjust to fill or use the freed space. Try it in
            the demo above by enabling column resizing.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default ColumnWidthContent;
