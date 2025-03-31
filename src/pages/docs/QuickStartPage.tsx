import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { UI_STRINGS } from "../../constants/strings/ui";
import { TECHNICAL_STRINGS } from "../../constants/strings/technical";
import QuickStartDemo from "../../components/demos/QuickStartDemo";

const QuickStartPage = () => {
  return (
    <>
      <SEO
        title={`Quick Start - ${SEO_STRINGS.docs.title}`}
        description="Get up and running with Simple Table quickly."
        keywords={`quick start, react table, setup, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/quick-start"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Quick Start</h1>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <QuickStartDemo />
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This guide will help you quickly set up Simple Table in your React project. In just a few minutes, you'll have
          a fully functional data table.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {UI_STRINGS.docs.cssSetup.title}
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">{UI_STRINGS.docs.cssSetup.description}</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{TECHNICAL_STRINGS.css.import}</code>
            </pre>
          </div>

          <p className="text-gray-700">{UI_STRINGS.docs.cssSetup.note}</p>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Creating a Simple Table
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Here's a minimal example to get you started with Simple Table:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';
import 'simple-table/dist/style.css';

const QuickStartExample = () => {
  // Define your headers
  const headers = [
    { label: 'Name', accessor: 'name', width: 150 },
    { label: 'Email', accessor: 'email', width: 200 },
    { label: 'Age', accessor: 'age', width: 80 },
  ];

  // Define your data rows
  const rows = [
    {
      rowMeta: { rowId: '1' },
      rowData: { name: 'John Doe', email: 'john@example.com', age: 28 }
    },
    {
      rowMeta: { rowId: '2' },
      rowData: { name: 'Jane Smith', email: 'jane@example.com', age: 32 }
    },
    {
      rowMeta: { rowId: '3' },
      rowData: { name: 'Bob Johnson', email: 'bob@example.com', age: 45 }
    },
  ];

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      height="400px"
    />
  );
};

export default QuickStartExample;`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-6">
            This creates a basic table with three columns and three rows. The table will have a fixed height of 400px.
          </p>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Key Features to Try
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">Simple Table comes with many features enabled out of the box:</p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <li>Try resizing columns by dragging the column dividers</li>
            <li>Click on column headers to sort the data</li>
            <li>Use the pagination controls to navigate through larger datasets</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="font-bold text-gray-800 mb-2">Pro Tip</h3>
          <p className="text-gray-700">
            Simple Table automatically handles the styling of alternating rows, borders, and hover states. You can
            customize these later with themes, but the defaults look great out of the box!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="/docs/installation"
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
            Previous: Installation
          </a>

          <a
            href="/docs/basic-usage"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Basic Usage
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

export default QuickStartPage;
