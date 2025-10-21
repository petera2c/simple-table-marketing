"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnResizingDemo from "@/components/demos/ColumnResizingDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_RESIZING_PROPS: PropInfo[] = [
  {
    key: "columnResizing",
    name: "columnResizing",
    required: false,
    description:
      "Enables column resizing functionality. When true, users can resize columns by dragging the column dividers in the header row.",
    type: "boolean",
    example: `<SimpleTable
  columnResizing={true}
  // ... other props
/>`,
  },
];

const ColumnResizingContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLeftRight} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Resizing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column resizing allows users to adjust column widths to better view and interact with data
        according to their preferences.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnResizingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnResizingDemo.tsx"].url}
          Preview={ColumnResizingDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Column resizing is enabled by adding the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            columnResizing
          </code>{" "}
          prop to the SimpleTable component. Users can resize columns by dragging the column
          dividers in the header row.
        </p>

        <PropTable props={COLUMN_RESIZING_PROPS} title="Column Resizing Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default ColumnResizingContent;
