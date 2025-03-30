import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const GettingStartedPage = () => {
  return (
    <>
      <SEO
        title={`Getting Started - ${SEO_STRINGS.docs.title}`}
        description="Learn how to install and set up Simple Table in your React application."
        keywords={`installation, setup, quick start, react table, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/getting-started"
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
          <h1 className="text-3xl font-bold text-gray-800">Getting Started</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Simple Table! This guide will help you install the package and set up your first table in just a
          few minutes.
        </motion.p>

        {/* Installation Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Installation
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">First, install the Simple Table package using npm or yarn:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>npm install simple-table # OR yarn add simple-table</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            Simple Table has a few peer dependencies that you might need to install if you don't have them already:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                npm install react react-dom # Required for animations (optional, but recommended) npm install
                framer-motion
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Basic Setup Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Basic Setup
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Here's a simple example to get you started with Simple Table:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';

const BasicTableExample = () => {
  // Define column headers
  const headers = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' }
  ];

  // Define row data
  const rows = [
    {
      rowMeta: { rowId: '1' },
      rowData: { name: 'John Doe', age: 28, email: 'john@example.com' }
    },
    {
      rowMeta: { rowId: '2' },
      rowData: { name: 'Jane Smith', age: 32, email: 'jane@example.com' }
    },
    {
      rowMeta: { rowId: '3' },
      rowData: { name: 'Bob Johnson', age: 45, email: 'bob@example.com' }
    }
  ];

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
    />
  );
};

export default BasicTableExample;`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            This example creates a simple table with three columns and three rows. The{" "}
            <code className="bg-gray-100 px-1 rounded">defaultHeaders</code> prop defines your column structure, while
            the <code className="bg-gray-100 px-1 rounded">rows</code> prop provides the data.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Important Note</h3>
            <p className="text-gray-700">
              Each row must have a unique <code className="bg-gray-100 px-1 rounded">rowId</code> in its{" "}
              <code className="bg-gray-100 px-1 rounded">rowMeta</code> object. This is used internally for features
              like selection, sorting, and row updates.
            </p>
          </div>
        </motion.div>

        {/* TypeScript Support */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          TypeScript Support
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table is written in TypeScript and provides full type definitions. Here's how to use it with
            TypeScript:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable, TableHeader, TableRow } from 'simple-table';

// Define your data type
interface User {
  name: string;
  age: number;
  email: string;
}

const TypeScriptExample = () => {
  // Use generics to provide type safety
  const headers: TableHeader<User>[] = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' }
  ];

  const rows: TableRow<User>[] = [
    {
      rowMeta: { rowId: '1' },
      rowData: { name: 'John Doe', age: 28, email: 'john@example.com' }
    },
    {
      rowMeta: { rowId: '2' },
      rowData: { name: 'Jane Smith', age: 32, email: 'jane@example.com' }
    }
  ];

  return (
    <SimpleTable<User>
      defaultHeaders={headers}
      rows={rows}
    />
  );
};

export default TypeScriptExample;`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">Using TypeScript with Simple Table gives you several benefits:</p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
            <li>Type checking for table configurations</li>
            <li>IntelliSense/autocompletion for props and options</li>
            <li>Catch errors during development instead of runtime</li>
            <li>Better documentation and code navigation</li>
          </ul>
        </motion.div>

        {/* Next Steps Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Next Steps
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            Now that you have Simple Table installed and set up, you can explore more advanced features:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                →
              </span>
              <a href="/docs/column-features" className="text-blue-600 hover:underline">
                Learn about column features
              </a>{" "}
              (sorting, resizing, reordering)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                →
              </span>
              <a href="/docs/cell-editing" className="text-blue-600 hover:underline">
                Enable cell editing capabilities
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                →
              </span>
              <a href="/docs/sorting-filtering" className="text-blue-600 hover:underline">
                Implement sorting and filtering
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                →
              </span>
              <a href="/docs/pagination" className="text-blue-600 hover:underline">
                Add pagination
              </a>{" "}
              for large datasets
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                →
              </span>
              <a href="/docs/theming" className="text-blue-600 hover:underline">
                Customize the look and feel
              </a>{" "}
              with theming
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Go Further?</h3>
          <p className="text-gray-700 mb-4">Check out our complete examples with all features enabled:</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://codesandbox.io/s/simple-table-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              CodeSandbox Demo
            </a>
            <a
              href="https://github.com/yourusername/simple-table/tree/main/examples"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              GitHub Examples
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div></div> {/* Empty div for flex spacing */}
          <a
            href="/docs/column-features"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Features
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

export default GettingStartedPage;
