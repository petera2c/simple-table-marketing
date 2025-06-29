"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ColumnVisibilityDemo from "@/demos/ColumnVisibilityDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_VISIBILITY_PROPS: PropInfo[] = [
  {
    key: "hide",
    name: "HeaderObject.hide",
    required: false,
    description:
      "Controls the initial visibility of the column. When true, the column will be hidden by default.",
    type: "boolean",
    example: `// Hidden by default
{ 
  accessor: "internalId", 
  label: "Internal ID", 
  hide: true 
}

// Visible by default (default behavior)
{ 
  accessor: "name", 
  label: "Name" 
}`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description:
      "Enables the column visibility controls, allowing users to show/hide columns through a UI panel.",
    type: "boolean",
    example: `<SimpleTable
  editColumns={true}
  // ... other props
/>`,
  },
  {
    key: "editColumnsInitOpen",
    name: "editColumnsInitOpen",
    required: false,
    description:
      "Opens the column visibility menu by default when the table loads. Requires editColumns to be true.",
    type: "boolean",
    example: `<SimpleTable
  editColumns={true}
  editColumnsInitOpen={true}
  // ... other props
/>`,
  },
];

const ColumnVisibilityContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faEye} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Visibility</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column visibility controls allow users to show or hide specific columns, customizing their
        view to focus on the most relevant data.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnVisibilityDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnVisibilityDemo.tsx"].url}
          Preview={ColumnVisibilityDemo}
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
          Column visibility can be controlled using the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            hide
          </code>{" "}
          property in the header objects and the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            editColumns
          </code>{" "}
          prop on the SimpleTable component.
        </p>

        <PropTable props={COLUMN_VISIBILITY_PROPS} title="Column Visibility Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnVisibilityContent;
