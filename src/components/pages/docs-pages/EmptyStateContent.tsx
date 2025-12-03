"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import PropTable, { type PropInfo } from "@/components/PropTable";
import CodeBlock from "@/components/CodeBlock";

const EMPTY_STATE_PROPS: PropInfo[] = [
  {
    key: "tableEmptyStateRenderer",
    name: "tableEmptyStateRenderer",
    required: false,
    description:
      "Custom content to display in the table body when there are no rows to display. This can occur when filters return no results or when no data is provided. Can be a simple string or React component.",
    type: "string | ReactNode",
    example: `// Simple string
<SimpleTable
  tableEmptyStateRenderer="No data available"
  // ... other props
/>

// Or React component
<SimpleTable
  tableEmptyStateRenderer={
    <div className="flex flex-col items-center p-8">
      <span className="text-gray-500">No results found</span>
      <button onClick={clearFilters}>Clear filters</button>
    </div>
  }
  // ... other props
/>`,
  },
];

const basicExample = `import { SimpleTable } from "simple-table-core";

const MyTable = () => {
  const [rows, setRows] = useState([]);

  return (
    <SimpleTable
      headers={headers}
      rows={rows}
      tableEmptyStateRenderer="No data available"
    />
  );
};`;

const customComponentExample = `import { SimpleTable } from "simple-table-core";

const EmptyState = ({ onClearFilters }: { onClearFilters: () => void }) => (
  <div className="flex flex-col items-center justify-center py-12 gap-4">
    <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
    <p className="text-gray-500 text-lg">No results found</p>
    <button 
      onClick={onClearFilters}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Clear filters
    </button>
  </div>
);

const MyTable = () => {
  const [filters, setFilters] = useState({});
  const filteredRows = applyFilters(rows, filters);

  return (
    <SimpleTable
      headers={headers}
      rows={filteredRows}
      tableEmptyStateRenderer={
        <EmptyState onClearFilters={() => setFilters({})} />
      }
    />
  );
};`;

const EmptyStateContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-indigo-100 rounded-lg">
          <FontAwesomeIcon icon={faInbox} className="text-indigo-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Empty State</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Customize what users see when your table has no data to display. Whether it&apos;s an empty
        dataset, filtered results returning nothing, or data that hasn&apos;t loaded yet—provide
        helpful context instead of a blank table.
      </motion.p>

      {/* Basic Usage Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Basic Usage
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The simplest way to use{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            tableEmptyStateRenderer
          </code>{" "}
          is to pass a string message:
        </p>

        <CodeBlock code={basicExample} language="tsx" />

        <PropTable props={EMPTY_STATE_PROPS} title="Empty State Configuration" />
      </motion.div>

      {/* Custom Component Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Custom React Component
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For a richer experience, pass a React component with icons, buttons, or any custom UI:
        </p>

        <CodeBlock code={customComponentExample} language="tsx" />
      </motion.div>

      {/* Use Cases Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Common Use Cases
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <strong>No search results</strong> — Show a &quot;No results found&quot; message with a
            button to clear filters
          </li>
          <li>
            <strong>Empty dataset</strong> — Display onboarding guidance like &quot;Add your first
            item&quot; with a call-to-action
          </li>
          <li>
            <strong>Permission restricted</strong> — Inform users they don&apos;t have access to
            view this data
          </li>
          <li>
            <strong>Error state</strong> — Show an error message with a retry button when data
            fetching fails
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This prop only affects the table body when there are no rows. For loading states while
            data is being fetched, use the{" "}
            <a
              href="/docs/loading-state"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              isLoading
            </a>{" "}
            prop instead.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default EmptyStateContent;
