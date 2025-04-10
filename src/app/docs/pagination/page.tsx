"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import SEO from "@/components/SEO";
import { SEO_STRINGS } from "@/constants/strings/seo";
import PaginationDemo from "@/components/demos/PaginationDemo";
import CodeBlock from "@/components/CodeBlock";
import demoCode from "@/components/demos/PaginationDemo.tsx?raw";
import DocNavigationButtons from "@/components/DocNavigationButtons";

export default function PaginationPage() {
  return (
    <>
      <SEO
        title={`Pagination - ${SEO_STRINGS.docs.title}`}
        description="Implement pagination in Simple Table to handle large datasets efficiently."
        keywords={`pagination, page size, large datasets, data navigation, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/pagination"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faPager} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Pagination</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Pagination helps manage large datasets by dividing the table data into manageable pages.
        This improves performance, reduces visual clutter, and provides a better user experience for
        navigating through extensive data collections.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <PaginationDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Pagination
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To enable pagination in Simple Table, you need to add the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">shouldPaginate</code> prop
          to your SimpleTable component. This will automatically handle pagination of your data.
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Pagination Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">shouldPaginate</code>:
              Enables pagination functionality
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowsPerPage</code>:
              Number of rows per page (default: 10)
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">totalPages</code>:
              Total number of pages available -<span className="font-semibold"> required</span> for
              proper pagination controls
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onNextPage</code>:
              Callback function triggered when user clicks the next page button
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onPreviousPage</code>:
              Callback function triggered when user clicks the previous page button
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowHeight</code>: Sets
              the height of rows in pixels (number, e.g., 40)
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Important Note</h3>
          <p className="text-gray-600">
            The <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">totalPages</code>{" "}
            property is crucial for proper pagination functionality. Without it:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
            <li>The table won't know how many page numbers to display</li>
            <li>Next/Previous buttons won't disable correctly at boundaries</li>
            <li>Users may attempt to navigate to non-existent pages</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Always calculate and provide{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">totalPages</code> based
            on your data size and page size (e.g., <code>Math.ceil(totalItems / pageSize)</code>).
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Pagination Features
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">When pagination is enabled, Simple Table provides:</p>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
          <li>Automatic page navigation controls</li>
          <li>Page size selection</li>
          <li>Current page indicator</li>
          <li>Total pages display</li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
