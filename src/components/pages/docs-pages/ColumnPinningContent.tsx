"use client";
import { motion } from "framer-motion";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import ColumnPinningDemo from "@/components/demos/ColumnPinningDemo";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_PINNING_PROPS: PropInfo[] = [
  {
    key: "pinned",
    name: "HeaderObject.pinned",
    required: false,
    description:
      "Pins the column to the left or right side of the table, keeping it visible during horizontal scrolling.",
    type: "enum",
    link: "/docs/api-reference#union-types",
    enumValues: ["left", "right"],
    example: `// Pin to left side
{ 
  accessor: "id", 
  label: "ID", 
  pinned: "left",
  width: 80
}

// Pin to right side
{ 
  accessor: "actions", 
  label: "Actions", 
  pinned: "right",
  width: 120
}`,
  },
];

const ColumnPinningContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faThumbtack} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Pinning</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column pinning (also known as freezing or sticking) allows you to keep important columns
        visible while horizontally scrolling through wide tables, making it easier to maintain
        context.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnPinningDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnPinningDemo.tsx"].url}
          Preview={ColumnPinningDemo}
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
          To pin columns, simply add the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            pinned
          </code>{" "}
          property to your header objects:
        </p>

        <PropTable props={COLUMN_PINNING_PROPS} title="Column Pinning Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default ColumnPinningContent;
