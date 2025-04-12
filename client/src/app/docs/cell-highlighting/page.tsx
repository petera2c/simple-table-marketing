"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../../components/SEO";
import { SEO_STRINGS } from "../../../constants/strings/seo";
import CellHighlightingDemo from "../../../components/demos/CellHighlightingDemo";
import CodeBlock from "../../../components/CodeBlock";
import { useDemoCode } from "../../../hooks/useDemoCode";

const CellHighlightingPage = () => {
  const demoCode = useDemoCode("CellHighlightingDemo.txt");

  return (
    <>
      <SEO
        title={`Cell Highlighting - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement cell selection and highlighting in Simple Table."
        keywords={`cell highlighting, selection, clipboard, copy-paste, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/cell-highlighting"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faCopy} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Cell Highlighting</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Cell highlighting allows users to select and visually emphasize specific cells or ranges of
        cells within your tables. This is especially useful for copy-paste operations, data
        analysis, and drawing attention to important values.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CellHighlightingDemo />
      </motion.div>

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
          Enable cell selection by adding the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableCells</code> and{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableColumns</code>{" "}
          props to your SimpleTable component. This enables users to select individual cells and
          entire columns.
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Selection Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">selectableCells</code>
              : Enables selection of individual cells
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                selectableColumns
              </code>
              : Enables selection of entire columns
            </li>
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
        Selection Behavior
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">When selection is enabled, users can:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Click on individual cells to select them</li>
          <li>Click on column headers to select entire columns</li>
          <li>Use keyboard shortcuts (Ctrl+C/⌘+C) to copy selected data</li>
          <li>Paste the data into spreadsheet applications</li>
        </ul>
      </motion.div>

      <motion.div
        className="flex justify-between mt-12 pt-4 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous: Cell Editing
        </a>

        <a
          href="/docs/cell-renderer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: Cell Renderer
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

export default CellHighlightingPage;
