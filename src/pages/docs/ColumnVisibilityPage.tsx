import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnVisibilityDemo from "../../components/demos/ColumnVisibilityDemo";

const ColumnVisibilityPage = () => {
  return (
    <>
      <SEO
        title={`Column Visibility - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement column visibility controls in Simple Table."
        keywords={`column visibility, hide columns, show columns, toggle columns, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-visibility"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faEye} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Visibility</h1>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <ColumnVisibilityDemo />
          </div>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Column visibility controls allow users to show or hide specific columns, providing a customized view of the
          data that focuses on the information most relevant to their needs.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-700 mb-4">Simple Table provides two ways to control column visibility:</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            1. Initial Visibility with <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">hide</code>{" "}
            Property
          </h3>

          <p className="text-gray-700 mb-4">
            You can set columns to be initially hidden when the table first loads by using the <code>hide</code>{" "}
            property in your header definitions:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define a column as initially hidden
const headers = [
  // Visible columns
  { label: 'Name', accessor: 'name', width: 180 },
  { label: 'Email', accessor: 'email', width: 220 },
  
  // Hidden column
  { label: 'Phone', accessor: 'phone', width: 150, hide: true },
  
  // Other columns...
];`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            2. Built-in Column Visibility Panel with{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">editColumns</code> Prop
          </h3>

          <p className="text-gray-700 mb-4">
            Simple Table provides a built-in column visibility panel that allows users to show/hide columns via
            checkboxes. Enable this feature by setting the <code>editColumns</code> prop to <code>true</code>:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  editColumns={true} // Enables the column visibility panel
  onColumnsChange={(updatedHeaders) => {
    console.log('Columns configuration changed:', updatedHeaders);
    // You can persist this configuration if needed
  }}
/>`}</code>
            </pre>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Best Practice</h3>
            <p className="text-gray-700">
              The <code>editColumns</code> feature provides a great user experience by allowing users to customize their
              view without requiring custom UI development. It displays checkboxes for each column in a panel that
              appears to the right of the table when enabled.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/docs/column-resizing"
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
            Previous: Column Resizing
          </a>

          <a
            href="/docs/column-pinning"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Pinning
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

export default ColumnVisibilityPage;
