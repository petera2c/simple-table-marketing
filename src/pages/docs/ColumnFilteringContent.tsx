"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnFilteringDemo from "@/demos/ColumnFilteringDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

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

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Filter Configuration</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                filterable: true
              </code>
              : Enable filtering for a specific column
            </li>
            <li>
              <strong>String filters:</strong> 8 operators including equals, contains, starts with,
              ends with, and more
            </li>
            <li>
              <strong>Number filters:</strong> 10 operators including comparisons, ranges, and
              equality checks
            </li>
            <li>
              <strong>Date filters:</strong> 8 operators including before/after, ranges, and
              equality
            </li>
            <li>
              <strong>Boolean filters:</strong> 3 operators for true/false and empty state checks
            </li>
            <li>
              <strong>Enum filters:</strong> 4 operators for multi-select and exclusion filtering
            </li>
          </ul>
        </div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Filter Types
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                String Filters (8 operators)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Comprehensive text search with multiple matching strategies.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
                <li>
                  <strong>Equals</strong> - Exact match
                </li>
                <li>
                  <strong>Not equals</strong> - Exclude exact match
                </li>
                <li>
                  <strong>Contains</strong> - Text anywhere in value
                </li>
                <li>
                  <strong>Does not contain</strong> - Exclude containing text
                </li>
                <li>
                  <strong>Starts with</strong> - Text at beginning
                </li>
                <li>
                  <strong>Ends with</strong> - Text at end
                </li>
                <li>
                  <strong>Is empty</strong> - No value
                </li>
                <li>
                  <strong>Is not empty</strong> - Has any value
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                Number Filters (10 operators)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Powerful numeric comparisons and range filtering.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
                <li>
                  <strong>Equals</strong> - Exact numeric match
                </li>
                <li>
                  <strong>Not equals</strong> - Exclude specific number
                </li>
                <li>
                  <strong>Greater than</strong> - Values above threshold
                </li>
                <li>
                  <strong>Less than</strong> - Values below threshold
                </li>
                <li>
                  <strong>Greater than or equal</strong> - Values at or above
                </li>
                <li>
                  <strong>Less than or equal</strong> - Values at or below
                </li>
                <li>
                  <strong>Between</strong> - Range filtering
                </li>
                <li>
                  <strong>Not between</strong> - Exclude range
                </li>
                <li>
                  <strong>Is empty</strong> - No value
                </li>
                <li>
                  <strong>Is not empty</strong> - Has any value
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                Date Filters (8 operators)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Flexible date filtering with ranges and comparisons.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
                <li>
                  <strong>Equals</strong> - Exact date match
                </li>
                <li>
                  <strong>Not equals</strong> - Exclude specific date
                </li>
                <li>
                  <strong>Before</strong> - Dates prior to selection
                </li>
                <li>
                  <strong>After</strong> - Dates following selection
                </li>
                <li>
                  <strong>Between</strong> - Date range filtering
                </li>
                <li>
                  <strong>Not between</strong> - Exclude date range
                </li>
                <li>
                  <strong>Is empty</strong> - No date set
                </li>
                <li>
                  <strong>Is not empty</strong> - Has any date
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                Boolean & Enum Filters
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Simple selection for boolean values and multi-option filtering for enums.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">Boolean (3 operators):</p>
                <ul className="list-disc pl-4 mb-3 space-y-1">
                  <li>
                    <strong>Equals</strong> - True or false
                  </li>
                  <li>
                    <strong>Is empty</strong> - No value set
                  </li>
                  <li>
                    <strong>Is not empty</strong> - Has value
                  </li>
                </ul>
                <p className="font-medium mb-1">Enum (4 operators):</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <strong>Is one of</strong> - Multi-select inclusion
                  </li>
                  <li>
                    <strong>Is not one of</strong> - Multi-select exclusion
                  </li>
                  <li>
                    <strong>Is empty</strong> - No selection
                  </li>
                  <li>
                    <strong>Is not empty</strong> - Has selection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnFilteringContent;
