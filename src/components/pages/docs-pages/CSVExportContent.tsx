"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CSVExportDemo from "@/components/demos/CSVExportDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const CSV_EXPORT_PROPS: PropInfo[] = [
  {
    key: "tableRef",
    name: "tableRef",
    required: true,
    description:
      "React ref object that provides access to table methods including exportToCSV. Pass this ref to the SimpleTable component to enable CSV export functionality.",
    type: "React.RefObject<TableRefType>",
    example: `const tableRef = useRef<TableRefType>(null);

<SimpleTable
  tableRef={tableRef}
  // ... other props
/>`,
  },
  {
    key: "exportToCSV",
    name: "exportToCSV",
    required: false,
    description:
      "Method to export table data to CSV format. Call via tableRef.current?.exportToCSV(). Optionally pass a filename parameter.",
    type: "(props?: { filename?: string }) => void",
    example: `// Default filename
tableRef.current?.exportToCSV();

// Custom filename
tableRef.current?.exportToCSV({ filename: "report.csv" });`,
  },
];

const CSVExportContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-green-100 rounded-lg">
          <FontAwesomeIcon icon={faDownload} className="text-green-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">CSV Export (beta)</h1>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CSVExportDemo.txt"
          height={500}
          link={SANDBOX_LIST["CSVExportDemo.tsx"]?.url || "#"}
          Preview={CSVExportDemo}
        />
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SimpleTable makes it easy to export your table data to CSV format with just one method call.
        Using the{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          tableRef
        </code>{" "}
        and the{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          exportToCSV()
        </code>{" "}
        method, users can download their data for analysis, reporting, or sharing.
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
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable CSV export in your table, follow these steps:
        </p>

        <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Create a table reference</strong> - Create a ref using{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              useRef
            </code>{" "}
            and pass it to the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              tableRef
            </code>{" "}
            prop
          </li>
          <li>
            <strong>Add an export button</strong> - Create a button or trigger that calls the export
            method
          </li>
          <li>
            <strong>Call exportToCSV()</strong> - Invoke{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              tableRef.current?.exportToCSV()
            </code>{" "}
            to download the CSV file
          </li>
        </ol>

        <PropTable props={CSV_EXPORT_PROPS} title="CSV Export Configuration" />

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          The exported CSV includes all visible columns and respects active filters/sorting. Default
          filename is{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">table-export.csv</code>
          . Customize with{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">
            {`exportToCSV({ filename: "my-file.csv" })`}
          </code>
          .
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default CSVExportContent;
