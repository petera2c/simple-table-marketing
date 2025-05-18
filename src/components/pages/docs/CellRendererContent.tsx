"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CellRendererDemo from "../../demos/CellRendererDemo";
import CodeBlock from "../../CodeBlock";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const CellRendererContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faCode} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Cell Renderer</h1>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CellRendererDemo.txt"
          height="400px"
          link={SANDBOX_LIST["CellRendererDemo.tsx"].url}
          Preview={CellRendererDemo}
        />
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Cell renderers give you complete control over how data is displayed in your table cells.
        Using custom renderers, you can create rich, interactive elements like buttons, badges,
        progress bars, and more.
      </motion.p>

      {/* Basic Usage Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Each column in your table can have its own{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            cellRenderer
          </code>{" "}
          function. This function receives information about the cell and returns either a ReactNode
          or a string to be rendered in the cell.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">cellRenderer Parameters</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Each cellRenderer function receives an object with these properties:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                accessor
              </code>
              : The column accessor string
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                colIndex
              </code>
              : The column index
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                row
              </code>
              : The row object containing the data
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Row Object Structure */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            row
          </code>{" "}
          parameter passed to your cell renderer has the following structure:
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

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To access a specific cell value, use{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            row.rowData[accessor]
          </code>
          .
        </p>
      </motion.div>

      {/* Return Types */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Return Types
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            cellRenderer
          </code>{" "}
          function should return one of the following:
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <strong>String</strong>: A simple text value to display in the cell
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1">
              <code className="text-gray-800 dark:text-gray-200">return "Hello, world!";</code>
            </div>
          </li>
          <li>
            <strong>ReactNode</strong>: A React component for custom rendering
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1">
              <code className="text-gray-800 dark:text-gray-200">
                return &lt;div className="flex items-center"&gt;&lt;span
                className="mr-2"&gt;⭐&lt;/span&gt; Custom Content&lt;/div&gt;;
              </code>
            </div>
          </li>
        </ul>

        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Each column can have its own unique renderer</li>
            <li>Columns without a cellRenderer will display their values as plain text</li>
            <li>Avoid expensive operations in cell renderers as they run frequently</li>
            <li>Consider memoizing complex components to improve performance</li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default CellRendererContent;
