"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CSVExportDemo from "@/components/demos/CSVExportDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
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
      "Method to export table data to CSV format. Exports ALL data including all pages when pagination is enabled (fixed in v1.9.4). Call via tableRef.current?.exportToCSV(). Optionally pass a filename parameter.",
    type: "(props?: { filename?: string }) => void",
    example: `// Default filename - exports all data
tableRef.current?.exportToCSV();

// Custom filename
tableRef.current?.exportToCSV({ filename: "report.csv" });`,
  },
  {
    key: "includeHeadersInCSVExport",
    name: "includeHeadersInCSVExport",
    required: false,
    description:
      "When true, includes column headers as the first row in CSV exports. Defaults to true.",
    type: "boolean",
    example: `<SimpleTable
  includeHeadersInCSVExport={false}  // Export data without headers
  // ... other props
/>`,
  },
  {
    key: "excludeFromRender",
    name: "HeaderObject.excludeFromRender",
    required: false,
    description:
      "When true, hides the column from the table display and from the column editor, while keeping it in CSV exports. Perfect for internal IDs, database keys, or technical fields that shouldn't clutter the UI but are needed in exports.",
    type: "boolean",
    example: `{
  accessor: "internalId",
  label: "Internal ID",
  type: "string",
  excludeFromRender: true  // Hidden in table and visibility menu, included in CSV
}`,
  },
  {
    key: "excludeFromCsv",
    name: "HeaderObject.excludeFromCsv",
    required: false,
    description:
      "When true, shows the column in the table but excludes it from CSV exports. Perfect for action buttons, interactive elements, or UI-only columns that don't make sense in exported data.",
    type: "boolean",
    example: `{
  accessor: "actions",
  label: "Actions",
  type: "string",
  excludeFromCsv: true,  // Visible in table, excluded from CSV
  cellRenderer: () => <button>View</button>
}`,
  },
];

const CSVExportContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-green-100 rounded-lg">
          <FontAwesomeIcon icon={faDownload} className="text-green-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">CSV Export</h1>
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

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mt-4 mb-4">
          <h4 className="font-bold text-gray-800 dark:text-white mb-2">✨ Full Data Export</h4>
          <p className="text-gray-700 dark:text-gray-300">
            The{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">exportToCSV()</code>{" "}
            method now exports <strong>all data</strong> from your table, including all pages when
            pagination is enabled. Previously, only the current page was exported - this has been
            fixed in version 1.9.4.
          </p>
        </div>

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

      {/* Formatting CSV Exports */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        Formatting CSV Exports
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Control how column values appear in CSV exports using three powerful options. By default,
          CSV exports use raw data values.
        </p>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              1. Use Formatted Values (useFormattedValueForCSV)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Export the same formatted values that are displayed in the table. Perfect when you
              want CSV exports to match what users see on screen.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <CodeBlock
                code={`{
  accessor: "salary",
  label: "Annual Salary",
  valueFormatter: ({ value }) => \`$\${(value / 1000).toFixed(0)}K\`,
  useFormattedValueForCSV: true
}

// Table displays: "$85K"
// CSV exports: "$85K"
// Without flag: CSV would export 85000`}
              />
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              2. Custom Export Values (exportValueGetter)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Provide completely different values specifically for CSV export. Takes highest
              priority. Ideal for adding codes, identifiers, or transforming data for spreadsheet
              compatibility.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <CodeBlock
                code={`{
  accessor: "completionRate",
  label: "Completion Rate",
  valueFormatter: ({ value }) => \`\${(value * 100).toFixed(1)}%\`,
  exportValueGetter: ({ value }) => {
    // Round to whole percentage for CSV
    return \`\${Math.round(value * 100)}%\`;
  }
}

// Table displays: "92.5%"
// CSV exports: "93%"
// Raw value: 0.925`}
              />
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              3. Adding Context to Exports
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Use exportValueGetter to add department codes, identifiers, or additional context for
              better data clarity:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <CodeBlock
                code={`{
  accessor: "department",
  label: "Department",
  valueFormatter: ({ value }) => capitalize(value),
  exportValueGetter: ({ value }) => {
    const codes = {
      engineering: "ENG",
      product: "PRD",
      sales: "SLS",
      marketing: "MKT"
    };
    const code = codes[value] || "OTH";
    return \`\${capitalize(value)} (\${code})\`;
  }
}

// Table displays: "Engineering"
// CSV exports: "Engineering (ENG)"`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* New Table API Methods Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Accessing Table Data
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          New in v1.9.4: The table ref now provides powerful methods to access all table data and
          configuration programmatically. Try clicking the <strong>"Get Table Info"</strong> button
          in the demo above!
        </p>

        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              getAllRows() - Access Complete Dataset
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Returns all rows as{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">TableRow[]</code>{" "}
              objects, flattened and including nested/grouped rows. Each TableRow contains the raw
              data in the{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">row</code> property
              plus metadata like depth, position, and rowPath. Perfect for analytics, batch
              operations, or custom exports.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <CodeBlock
                code={`// Calculate total revenue from all rows
const allRows = tableRef.current?.getAllRows();
const totalRevenue = allRows?.reduce((sum, tableRow) => 
  sum + (tableRow.row.revenue || 0), 0
);

// Access row metadata
allRows?.forEach(tableRow => {
  console.log(\`Depth: \${tableRow.depth}, Position: \${tableRow.position}\`);
  console.log("Data:", tableRow.row);
});

// Export raw data to custom format
const allRows = tableRef.current?.getAllRows();
const rawData = allRows?.map(tableRow => tableRow.row);
const jsonData = JSON.stringify(rawData, null, 2);
downloadFile(jsonData, "data.json");`}
              />
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              getHeaders() - Access Column Configuration
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Returns the table's current header/column definitions. Useful for dynamic table
              manipulation or building custom UI controls.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <CodeBlock
                code={`// Get all column names
const headers = tableRef.current?.getHeaders();
const columnNames = headers?.map(h => h.label);
console.log("Columns:", columnNames);

// Validate configuration
const sortableColumns = headers?.filter(h => h.isSortable);
console.log(\`\${sortableColumns.length} sortable columns\`);`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default CSVExportContent;
