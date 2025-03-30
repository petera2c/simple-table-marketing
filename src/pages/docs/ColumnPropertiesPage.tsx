import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ColumnPropertiesPage = () => {
  return (
    <>
      <SEO
        title={`Column Properties - ${SEO_STRINGS.docs.title}`}
        description="Learn about the properties available for columns in Simple Table."
        keywords={`column properties, headers, configuration, ${SEO_STRINGS.docs.keywords}`}
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
            <FontAwesomeIcon icon={faList} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Properties</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The HeaderObject is used to define each column in your table. This page covers all the available properties
          you can configure for your table columns.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-white p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Available HeaderObject Properties</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">accessor</code>: (Required) String key
                to access the corresponding data in your row objects
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">label</code>: (Required) Text displayed
                in the column header
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">width</code>: (Required) Width of the
                column in pixels
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align</code>: Text alignment within
                cells - "left" | "center" | "right" (default: "left")
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code>:
                {"Custom function to render cell content - (row: Row) => ReactNode"}
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">expandable</code>: Whether the column
                can trigger row expansion (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">hide</code>: Whether the column should
                be initially hidden (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isEditable</code>: Whether cells in this
                column can be edited (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable</code>: Whether the column
                can be sorted (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned</code>: Pin column to "left" or
                "right" side of the table
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">type</code>: Data type for the column -
                "string" | "number" | "boolean" | "date" | "enum"
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Example of header definitions
const headers = [
  { 
    label: 'ID', 
    accessor: 'id', 
    width: 80,
    align: "center",
    type: "number"
  },
  { 
    label: 'Name', 
    accessor: 'name', 
    width: 180,
    isEditable: true
  },
  { 
    label: 'Status', 
    accessor: 'status', 
    width: 120,
    type: "enum",
    cellRenderer: (row) => {
      // This would return a styled status badge
      const className = "status-badge status-" + row.status.toLowerCase();
      return "Custom React component with className: " + className;
    }
  }
];`}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/docs/columns"
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
            Previous: Column Features
          </a>

          <a
            href="/docs/column-resizing"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Resizing
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
