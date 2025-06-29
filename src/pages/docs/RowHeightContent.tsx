"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import RowHeightDemo from "@/demos/RowHeightDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const ROW_HEIGHT_PROPS: PropInfo[] = [
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description:
      "Sets the height of all rows in the table. Accepts a numeric value representing pixels.",
    type: "number",
    example: `// Standard row height
<SimpleTable
  rowHeight={40}
  // ... other props
/>

// Compact rows
<SimpleTable
  rowHeight={32}
  // ... other props
/>

// Large rows for better readability
<SimpleTable
  rowHeight={56}
  // ... other props
/>`,
  },
];

export default function RowHeightContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faArrowsUpDown} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Row Height</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The Simple Table component allows you to customize the height of rows to accommodate
        different types of content and design requirements. This page explains how to configure and
        use the row height feature.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="RowHeightDemo.txt"
          height="400px"
          link={SANDBOX_LIST["RowHeightDemo.tsx"].url}
          Preview={RowHeightDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Using Row Height
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You can specify the height of rows in a Simple Table using the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            rowHeight
          </code>{" "}
          property. This property accepts a numeric value representing the height in pixels.
        </p>

        <PropTable props={ROW_HEIGHT_PROPS} title="Row Height Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
