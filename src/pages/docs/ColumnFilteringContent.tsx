"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnFilteringDemo from "@/demos/ColumnFilteringDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_FILTERING_PROPS: PropInfo[] = [
  {
    key: "filterable",
    name: "HeaderObject.filterable",
    required: false,
    description:
      "Enable filtering for a specific column. Each column can be independently configured for filtering based on its data type. Simple Table provides intelligent filtering with different operators for each data type.",
    type: "boolean",
    example: `// String column with filtering (8 operators)
{ 
  accessor: "name", 
  label: "Full Name", 
  type: "string",
  filterable: true 
}

// Number column with filtering (10 operators)
{ 
  accessor: "age", 
  label: "Age", 
  type: "number",
  filterable: true 
}

// Date column with filtering (8 operators)
{ 
  accessor: "birthDate", 
  label: "Birth Date", 
  type: "date",
  filterable: true 
}

// Boolean column with filtering (3 operators)
{ 
  accessor: "isActive", 
  label: "Active", 
  type: "boolean",
  filterable: true 
}

// Enum column with filtering (4 operators)
{ 
  accessor: "status", 
  label: "Status", 
  type: "enum",
  filterable: true,
  enumOptions: [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" }
  ]
}`,
  },
];

const ColumnFilteringContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-green-100 rounded-lg">
          <FontAwesomeIcon icon={faFilter} className="text-green-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Filtering</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column filtering allows users to quickly find and display only the data that meets specific
        criteria. Simple Table provides intelligent filtering for different data types including
        text, numbers, dates, booleans, and enum values.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnFilteringDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnFilteringDemo.tsx"].url}
          Preview={ColumnFilteringDemo}
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
          Column filtering is enabled by adding the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            filterable: true
          </code>{" "}
          property to individual column headers. Each column can be independently configured for
          filtering based on its data type.
        </p>

        <PropTable props={COLUMN_FILTERING_PROPS} title="Filter Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnFilteringContent;
