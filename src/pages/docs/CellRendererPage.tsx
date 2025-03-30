import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const CellRendererPage = () => {
  return (
    <>
      <SEO
        title={`Cell Renderer - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement custom cell renderers in Simple Table."
        keywords={`cell renderer, custom cells, react component, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/cell-renderer"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faCode} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Cell Renderer</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table allows you to customize how cells are rendered using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code> property defined on each
          column. This gives you complete control over the appearance and behavior of individual columns in your table.
        </motion.p>

        {/* Basic Usage Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Usage
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Each column in your table can have its own{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code> function. This function
            receives information about the cell and returns either a ReactNode or a string to be rendered in the cell.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';

const CellRendererExample = () => {
  // Define headers with custom cell renderers
  const headers = [
    { 
      label: 'ID', 
      accessor: 'id', 
      width: 80 
    },
    { 
      label: 'Name', 
      accessor: 'name', 
      width: 180 
    },
    { 
      label: 'Status', 
      accessor: 'status', 
      width: 120,
      // Custom renderer for the Status column
      cellRenderer: ({ accessor, colIndex, row }) => {
        const value = row.rowData[accessor];
        const isActive = value === 'active';
        return (
          <span className={\`px-2 py-1 rounded \${
            isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }\`}>
            {value}
          </span>
        );
      }
    },
    { 
      label: 'Progress', 
      accessor: 'progress', 
      width: 150,
      // Custom renderer for the Progress column
      cellRenderer: ({ accessor, colIndex, row }) => {
        const value = row.rowData[accessor];
        return (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: \`\${value}%\` }}
            ></div>
          </div>
        );
      }
    }
  ];

  const rows = [
    { id: 1, name: 'John Doe', status: 'active', progress: 75 },
    { id: 2, name: 'Jane Smith', status: 'inactive', progress: 30 },
    { id: 3, name: 'Bob Johnson', status: 'active', progress: 100 }
  ];

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
    />
  );
};`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">cellRenderer Parameters</h3>
            <p className="text-gray-700 mb-2">Each cellRenderer function receives an object with these properties:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">accessor</code>: The column accessor
                string
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">colIndex</code>: The column index
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">row</code>: The row object containing
                the data
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Row Object Structure */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Row Object Structure
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">row</code> parameter passed to your cell
            renderer has the following structure:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`type Row = {
  // Row metadata
  rowMeta: {
    children?: Row[];    // Child rows for hierarchical data
    isExpanded?: boolean; // Whether this row is expanded (for hierarchical data)
    rowId: number;       // Unique identifier for the row
  };

  // Actual cell values
  rowData: { [key: string]: CellValue };  // Map of accessors to cell values
};`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            To access a specific cell value, use{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">row.rowData[accessor]</code>.
          </p>
        </motion.div>

        {/* Return Types */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Return Types
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Your <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code> function should
            return one of the following:
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>String</strong>: A simple text value to display in the cell
              <div className="bg-gray-100 p-2 rounded mt-1">
                <code className="text-gray-800">return "Hello, world!";</code>
              </div>
            </li>
            <li>
              <strong>ReactNode</strong>: A React component for custom rendering
              <div className="bg-gray-100 p-2 rounded mt-1">
                <code className="text-gray-800">
                  return &lt;div className="flex items-center"&gt;&lt;span className="mr-2"&gt;⭐&lt;/span&gt; Custom
                  Content&lt;/div&gt;;
                </code>
              </div>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Each column can have its own unique renderer</li>
              <li>Columns without a cellRenderer will display their values as plain text</li>
              <li>Avoid expensive operations in cell renderers as they run frequently</li>
              <li>Consider memoizing complex components to improve performance</li>
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
            href="/docs/cell-highlighting"
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
            Previous: Cell Highlighting
          </a>

          <a
            href="/docs/row-grouping"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Row Grouping
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

export default CellRendererPage;
