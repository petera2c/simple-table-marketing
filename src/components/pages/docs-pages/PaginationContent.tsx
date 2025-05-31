"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import PaginationDemo from "../../demos/PaginationDemo";
import CodeBlock from "../../CodeBlock";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const PaginationContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faPager} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Pagination</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Pagination helps manage large datasets by dividing the table data into manageable pages.
        This improves performance, reduces visual clutter, and provides a better user experience for
        navigating through extensive data collections.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="PaginationDemo.txt"
          height="400px"
          link={SANDBOX_LIST["PaginationDemo.tsx"].url}
          Preview={PaginationDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Pagination
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable pagination in Simple Table, you need to add the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            shouldPaginate
          </code>{" "}
          prop to your SimpleTable component. This will automatically handle pagination of your
          data.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Pagination Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                shouldPaginate
              </code>
              : Enables pagination functionality
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowsPerPage
              </code>
              : Number of rows per page (default: 10)
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                totalPages
              </code>
              : Total number of pages available -<span className="font-semibold"> required</span>{" "}
              for proper pagination controls
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                onNextPage
              </code>
              : Callback function triggered when user clicks the next page button
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                onPreviousPage
              </code>
              : Callback function triggered when user clicks the previous page button
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowHeight
              </code>
              : Sets the height of rows in pixels (number, e.g., 40)
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-300 dark:border-amber-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Important Note</h3>
          <p className="text-gray-600 dark:text-gray-400">
            The{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-700 dark:text-gray-300">
              totalPages
            </code>{" "}
            property is crucial for proper pagination functionality. Without it:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 mt-2">
            <li>The table won't know how many page numbers to display</li>
            <li>Next/Previous buttons won't disable correctly at boundaries</li>
            <li>Users may attempt to navigate to non-existent pages</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Always calculate and provide{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-700 dark:text-gray-300">
              totalPages
            </code>{" "}
            based on your data size and page size (e.g.,{" "}
            <code>Math.ceil(totalItems / pageSize)</code>).
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Pagination Features
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When pagination is enabled, Simple Table provides:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Automatic page navigation controls</li>
          <li>Page size selection</li>
          <li>Current page indicator</li>
          <li>Total pages display</li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default PaginationContent;
