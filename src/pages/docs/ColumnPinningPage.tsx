import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ColumnPinningPage = () => {
  return (
    <>
      <SEO
        title={`Column Pinning - ${SEO_STRINGS.docs.title}`}
        description="Learn how to pin columns to the left or right in Simple Table."
        keywords={`column pinning, fixed columns, frozen columns, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-pinning"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faThumbtack} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Pinning</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Column pinning allows you to keep important columns visible at all times, even when scrolling horizontally
          through a wide table. Pinned columns remain fixed in position on the left or right side.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-700 mb-4">
            Column pinning is useful for keeping important columns visible when scrolling horizontally in large tables.
            You can pin columns to the left or right side of the table using the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned</code> property.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`const headers = [
  // Left-pinned column
  { 
    label: 'ID', 
    accessor: 'id', 
    width: 80,
    pinned: 'left'
  },
  
  // Regular scrollable columns
  { label: 'Name', accessor: 'name', width: 180 },
  { label: 'Email', accessor: 'email', width: 220 },
  { label: 'Phone', accessor: 'phone', width: 150 },
  { label: 'Department', accessor: 'department', width: 180 },
  { label: 'Role', accessor: 'role', width: 150 },
  
  // Right-pinned column
  { 
    label: 'Actions', 
    accessor: 'actions', 
    width: 120,
    pinned: 'right'
  }
];`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">When to Use Column Pinning</h3>
            <p className="text-gray-700">Column pinning is particularly useful for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Tables with many columns where horizontal scrolling is necessary</li>
              <li>Identifier columns that should always be visible (like ID or Name)</li>
              <li>Action columns with buttons or controls that users need frequent access to</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Implementation Note</h3>
            <p className="text-gray-700">
              Pinned columns are rendered in separate table containers that are positioned absolutely relative to the
              main table. This ensures they stay fixed while the rest of the table scrolls horizontally.
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
            href="/docs/column-visibility"
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
            Previous: Column Visibility
          </a>

          <a
            href="/docs/column-alignment"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Alignment
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

export default ColumnPinningPage;
