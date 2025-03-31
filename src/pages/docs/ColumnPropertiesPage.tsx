import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnPropertiesDemo from "../../components/demos/ColumnPropertiesDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ColumnPropertiesDemo.tsx?raw";

const ColumnPropertiesPage = () => {
  return (
    <>
      <SEO
        title={`Column Properties - ${SEO_STRINGS.docs.title}`}
        description="Learn about all available column properties in Simple Table."
        keywords={`column configuration, column properties, headers, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-properties"
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
          <h1 className="text-3xl font-bold text-gray-800">Column Properties</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Column properties define how each column behaves and appears in your table. This page documents all the
          available properties for customizing your columns.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ColumnPropertiesDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Column Structure
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Columns in Simple Table are defined as an array of objects with various properties:
          </p>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Available Properties
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="space-y-6">
            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Core Properties</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">accessor</code>: String key that
                  matches the data field in your row objects (required)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">label</code>: Display text for the
                  column header (required)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">width</code>: Column width in pixels
                  (default: 150)
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Display Properties</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align</code>: Cell text alignment
                  ('left', 'center', 'right')
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code>: Custom render
                  function for cells in this column
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">headerRenderer</code>: Custom render
                  function for the column header
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">formatValue</code>: Function to format
                  the cell value for display
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Interactive Properties</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortable</code>: Whether the column is
                  sortable (boolean)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortDirection</code>: Initial sort
                  direction ('asc', 'desc', or null)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">resizable</code>: Whether the column
                  can be resized (boolean)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned</code>: Pin column to 'left' or
                  'right' side
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">editable</code>: Whether the column
                  can be edited (boolean)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Extended Example
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">Here's a comprehensive example showcasing multiple column properties:</p>

          <CodeBlock code={demoCode} />

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6 mt-4">
            <h3 className="font-bold text-gray-800 mb-2">Tip</h3>
            <p className="text-gray-700">
              You don't need to define all properties for every column. Only specify the properties you want to
              customize from the defaults.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="/docs/column-alignment"
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
            Previous: Column Alignment
          </a>

          <a
            href="/docs/column-sorting"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Sorting
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

export default ColumnPropertiesPage;
