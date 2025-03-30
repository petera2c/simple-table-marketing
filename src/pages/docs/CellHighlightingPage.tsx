import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const CellHighlightingPage = () => {
  return (
    <>
      <SEO
        title={`Cell Highlighting - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement cell highlighting and selection in Simple Table."
        keywords={`cell highlighting, cell selection, copy paste, selectable cells, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/cell-highlighting"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faEdit} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Cell Highlighting</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful cell highlighting capabilities that allow users to select and copy data from
          the table. This page covers how to enable cell selection, column selection, and how to use these features for
          data export.
        </motion.p>

        {/* Basic Cell Selection Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Cell Selection
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Enable users to select individual cells by enabling the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableCells</code> property. This allows
            users to click on cells to highlight them and use keyboard shortcuts to copy their contents.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';

const CellSelectionExample = () => {
  // Define your headers and rows
  const headers = [
    { label: 'ID', accessor: 'id', width: 80 },
    { label: 'Name', accessor: 'name', width: 180 },
    { label: 'Email', accessor: 'email', width: 220 },
    { label: 'Department', accessor: 'department', width: 150 }
  ];

  const rows = [
    // Your row data here
  ];

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      selectableCells={true} // Enable cell selection
      onCellSelect={(cell, selectedCells) => {
        console.log('Selected cell:', cell);
        console.log('All selected cells:', selectedCells);
      }}
    />
  );
};`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Selection Behavior</h3>
            <p className="text-gray-700 mb-2">When cell selection is enabled:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Click a cell to select it</li>
              <li>Hold Shift and click another cell to select a range</li>
              <li>Hold Ctrl/Cmd and click to select multiple individual cells</li>
              <li>Press Ctrl/Cmd+C to copy selected cell contents to clipboard</li>
              <li>Press Escape to clear the selection</li>
            </ul>
          </div>
        </motion.div>

        {/* Column Selection Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Column Selection
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            By enabling <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableColumns</code>, users
            can click on column headers to select all cells in that column. This is useful for quickly selecting and
            copying entire columns of data.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  selectableCells={true}
  selectableColumns={true} // Enable column selection
  onColumnSelect={(columnAccessor, isSelected) => {
    console.log('Column selected:', columnAccessor);
    console.log('Is selected:', isSelected);
  }}
/>`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            When a user clicks a column header with{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableColumns</code> enabled, all cells
            in that column are selected. This is perfect for exporting specific data columns to spreadsheet
            applications.
          </p>
        </motion.div>

        {/* Copy/Paste Integration */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Copy/Paste Integration
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table's selection features integrate with the browser's copy functionality. When cells are selected,
            users can press Ctrl/Cmd+C to copy the data in a tab-delimited format that works well with spreadsheet
            applications like Excel or Google Sheets.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  selectableCells={true}
  selectableColumns={true}
  
  // Customize the copy format
  copyConfig={{
    delimiter: '\\t', // Tab delimiter (default)
    quoteStrings: true, // Add quotes around string values
    includeHeaders: true, // Include column headers in copied data
    
    // Custom formatter for cell values
    formatCellValue: (value, column) => {
      if (column.accessor === 'price') {
        return \`$\${value.toFixed(2)}\`;
      }
      return value;
    }
  }}
/>`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Copy/Paste Tips</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Selected cells will be copied in the same structure as they appear in the table</li>
              <li>When pasting into a spreadsheet, the structure will be preserved</li>
              <li>For best results with Excel, use tab as the delimiter (the default)</li>
              <li>You can customize the delimiter for special use cases</li>
            </ul>
          </div>
        </motion.div>

        {/* Selection Styling */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Customizing Selection Styles
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            You can customize the appearance of selected cells and columns to match your application's design:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  selectableCells={true}
  selectableColumns={true}
  
  // Custom selection styles
  selectionStyles={{
    selectedCell: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)', // Light blue background
      border: '1px solid #3b82f6', // Blue border
    },
    selectedColumn: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)', // Lighter blue for column
    }
  }}
/>`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            Customizing selection styles helps provide clear visual feedback to users about what is currently selected,
            improving the overall usability of your table.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a
            href="/docs/cell-editing"
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
            Previous: Cell Editing
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

export default CellHighlightingPage;
