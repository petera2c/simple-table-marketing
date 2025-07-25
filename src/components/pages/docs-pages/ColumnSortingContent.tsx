"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import ColumnSortingDemo from "@/components/demos/ColumnSortingDemo";
import ExternalSortDemo from "@/components/demos/ExternalSortDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_SORTING_PROPS: PropInfo[] = [
  {
    key: "isSortable",
    name: "HeaderObject.isSortable",
    required: false,
    description:
      "Enables sorting functionality for the column. When true, users can click the column header to sort data.",
    type: "boolean",
    example: `{ 
  accessor: "name", 
  label: "Full Name", 
  isSortable: true 
}`,
  },
];

const EXTERNAL_SORTING_PROPS: PropInfo[] = [
  {
    key: "onSortChange",
    name: "onSortChange",
    required: false,
    description:
      "Callback function triggered when sort configuration changes. Receives the current sort configuration or null if no sorting is applied.",
    type: "(sort: SortConfig | null) => void",
    link: "/docs/api-reference#sort-config",
    example: `onSortChange={(sortConfig) => {
  if (sortConfig) {
    console.log(\`Sorting by \${sortConfig.key.accessor} (\${sortConfig.direction})\`);
    // Make API call with sort parameters
  }
}}`,
  },
  {
    key: "externalSortHandling",
    name: "externalSortHandling",
    required: false,
    description:
      "When true, completely disables internal sorting logic. The table will not sort data internally - you must provide pre-sorted data via the rows prop.",
    type: "boolean",
    example: `externalSortHandling={true}`,
  },
];

const ColumnSortingContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faSort} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Sorting</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column sorting allows users to organize table data in ascending or descending order based on
        column values. This feature is essential for data analysis and quick information retrieval.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnSortingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnSortingDemo.tsx"].url}
          Preview={ColumnSortingDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Sorting
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable sorting for a column, add the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            isSortable: true
          </code>{" "}
          property to your column definition.
        </p>

        <PropTable props={COLUMN_SORTING_PROPS} title="Column Sorting Configuration" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        External Sorting
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For advanced use cases, you can handle sorting externally - perfect for server-side
          sorting, API integration, or custom sorting logic. This demo shows how to manage sorting
          completely outside the table component.
        </p>

        <div className="mb-6">
          <LivePreview
            demoCodeFilename="ExternalSortDemo.txt"
            height="400px"
            link={SANDBOX_LIST["ExternalSortDemo.tsx"].url}
            Preview={ExternalSortDemo}
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          External sorting provides two key benefits:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li>
            <strong>API Integration:</strong> Use{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              onSortChange
            </code>{" "}
            to trigger server-side sorting while keeping the table's UI sorting indicators.
          </li>
          <li>
            <strong>Complete Control:</strong> Use{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              externalSortHandling={true}
            </code>{" "}
            to disable all internal sorting and provide your own pre-sorted data.
          </li>
        </ul>

        <PropTable props={EXTERNAL_SORTING_PROPS} title="External Sorting Configuration" />
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnSortingContent;
