"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import ColumnSortingDemo from "../../demos/ColumnSortingDemo";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

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
        <h1 className="text-3xl font-bold text-gray-800">Column Sorting</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
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
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
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
        <p className="text-gray-700 mb-4">
          To enable sorting for a column, add the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable: true</code>{" "}
          property to your column definition.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Sorting Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable</code>:
              Enables sorting for the column
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortDirection</code>:
              Current sort direction ('asc' | 'desc' | null)
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onSort</code>:
              Callback function when sort direction changes
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Custom Sort Functions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700">
          You can provide a custom sort function using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortFn</code> property.
          This allows you to implement complex sorting logic for your data.
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnSortingContent;
