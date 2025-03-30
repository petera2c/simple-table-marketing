import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ColumnFeaturesPage = () => {
  return (
    <>
      <SEO
        title={`Column Management - ${SEO_STRINGS.docs.title}`}
        description="Learn how to customize and manage columns in Simple Table."
        keywords={`column management, resizing, reordering, hiding, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-features"
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
          <h1 className="text-3xl font-bold text-gray-800">Column Management</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful column management features that let users customize their table experience.
          This page covers column resizing, reordering, visibility control, and pinning.
        </motion.p>

        {/* Column Resizing Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Column Resizing
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table allows users to resize columns by dragging the column dividers. This feature is enabled by
            default for all columns.
          </p>

          <p className="text-gray-700 mb-4">
            You can control the resizing behavior for individual columns in your header configuration:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define headers with resizing constraints
const headers = [
  { 
    label: 'ID', 
    accessor: 'id', 
    width: 80,
    resizable: false, // Disable resizing for this column
  },
  { 
    label: 'Name', 
    accessor: 'name', 
    width: 180,
    minWidth: 120, // Minimum width when resizing
    maxWidth: 300, // Maximum width when resizing
  },
  // Other columns...
];`}</code>
            </pre>
          </div>

          <div className="rounded-lg overflow-hidden border border-gray-200 bg-white p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">Available Resizing Properties</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">width</code>: Initial width of the
                column in pixels
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">minWidth</code>: Minimum width the
                column can be resized to (default: 50px)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">maxWidth</code>: Maximum width the
                column can be resized to (default: none)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">resizable</code>: Enable/disable
                resizing for this column (default: true)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Column Reordering Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Column Reordering
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Users can reorder columns by dragging the column headers. This provides a flexible way to customize the
            table layout to their preference.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

const ColumnReorderingExample = () => {
  // Enable column reordering for the table
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enableColumnReordering={true} // Default is true
      onColumnOrderChange={(newColumnOrder) => {
        console.log('New column order:', newColumnOrder);
        // You can persist this new order if needed
      }}
    />
  );
};`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-3">You can also lock specific columns to prevent them from being reordered:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`const headers = [
  { 
    label: 'ID', 
    accessor: 'id', 
    width: 80,
    reorderable: false, // This column cannot be reordered
  },
  // Other columns...
];`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Column Visibility Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Column Visibility
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table allows you to control column visibility, enabling users to show or hide columns as needed.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define a column as initially hidden
const headers = [
  // Visible columns
  { label: 'Name', accessor: 'name', width: 180 },
  { label: 'Email', accessor: 'email', width: 220 },
  
  // Hidden column
  { label: 'Phone', accessor: 'phone', width: 150, hidden: true },
  
  // Other columns...
];

// In your component
const [visibleColumns, setVisibleColumns] = useState(
  headers.filter(h => !h.hidden).map(h => h.accessor)
);

return (
  <>
    {/* Column visibility control UI */}
    <div className="mb-4">
      {headers.map(header => (
        <label key={header.accessor} className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            checked={visibleColumns.includes(header.accessor)}
            onChange={() => {
              if (visibleColumns.includes(header.accessor)) {
                setVisibleColumns(visibleColumns.filter(c => c !== header.accessor));
              } else {
                setVisibleColumns([...visibleColumns, header.accessor]);
              }
            }}
          />
          <span className="ml-2">{header.label}</span>
        </label>
      ))}
    </div>
    
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      visibleColumns={visibleColumns}
      onVisibleColumnsChange={setVisibleColumns}
    />
  </>
);`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Column Pinning Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Column Pinning
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-700 mb-4">
            Column pinning is useful for keeping important columns visible when scrolling horizontally in large tables.
            You can pin columns to the left or right side of the table.
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
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
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
            href="/docs/cell-editing"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Cell Editing
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

export default ColumnFeaturesPage;
