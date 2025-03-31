import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import PaginationDemo from "../../components/demos/PaginationDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/PaginationDemo.tsx?raw";

const PaginationPage = () => {
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
        Pagination helps manage large datasets by dividing the table data into manageable pages. This improves
        performance, reduces visual clutter, and provides a better user experience for navigating through extensive data
        collections.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <PaginationDemo />
      </motion.div>

      {/* Basic Pagination Section */}
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
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pagination</code> prop to your SimpleTable
          component. This will automatically handle pagination of your data.
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Pagination Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pagination</code>: Enables pagination
              functionality
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pageSize</code>: Number of rows per page
              (default: 10)
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

      <motion.div
        className="flex justify-between mt-12 pt-4 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <a
          href="/docs/row-grouping"
          className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous: Row Grouping
        </a>

        <a
          href="/docs/themes"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: Themes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </>
  );
};

export default PaginationPage;
