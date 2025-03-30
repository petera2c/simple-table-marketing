import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faList, faArrowsAlt, faEye, faThumbtack, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { Link } from "react-router-dom";

const ColumnsPage = () => {
  return (
    <>
      <SEO
        title={`Column Features - ${SEO_STRINGS.docs.title}`}
        description="Learn about column management features in Simple Table."
        keywords={`column management, visibility, pinning, alignment, resizing, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/columns"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faColumns} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Features</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful column management features that let users customize their table experience.
          This section covers all aspects of configuring and managing columns in your tables.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Column Properties */}
          <Link
            to="/docs/column-properties"
            className="flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FontAwesomeIcon icon={faList} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Column Properties</h2>
            </div>
            <p className="text-gray-600 flex-grow">
              Learn about the HeaderObject properties that define each column in your table, including required and
              optional configurations.
            </p>
          </Link>

          {/* Column Resizing */}
          <Link
            to="/docs/column-resizing"
            className="flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FontAwesomeIcon icon={faArrowsAlt} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Column Resizing</h2>
            </div>
            <p className="text-gray-600 flex-grow">
              Enable users to resize columns by dragging column dividers, customizing their view of the table data.
            </p>
          </Link>

          {/* Column Visibility */}
          <Link
            to="/docs/column-visibility"
            className="flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FontAwesomeIcon icon={faEye} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Column Visibility</h2>
            </div>
            <p className="text-gray-600 flex-grow">
              Control which columns are visible in the table and allow users to show/hide columns using the built-in
              column visibility panel.
            </p>
          </Link>

          {/* Column Pinning */}
          <Link
            to="/docs/column-pinning"
            className="flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FontAwesomeIcon icon={faThumbtack} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Column Pinning</h2>
            </div>
            <p className="text-gray-600 flex-grow">
              Keep important columns visible while scrolling horizontally by pinning them to the left or right side of
              the table.
            </p>
          </Link>

          {/* Column Alignment */}
          <Link
            to="/docs/column-alignment"
            className="flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FontAwesomeIcon icon={faAlignLeft} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Column Alignment</h2>
            </div>
            <p className="text-gray-600 flex-grow">
              Customize text alignment within columns for improved readability and visual consistency, especially for
              different data types.
            </p>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/docs/basic-usage"
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
            Previous: Basic Usage
          </a>

          <a
            href="/docs/column-properties"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Properties
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
      </div>
    </>
  );
};

export default ColumnsPage;
