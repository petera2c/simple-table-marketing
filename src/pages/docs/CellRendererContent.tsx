"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CellRendererDemo from "@/demos/CellRendererDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";
import CodeBlock from "@/components/CodeBlock";

const CELL_RENDERER_PROPS: PropInfo[] = [
  {
    key: "cellRenderer",
    name: "HeaderObject.cellRenderer",
    required: false,
    description:
      "Custom function to render cell content. Receives cell information and returns either a ReactNode or string for display.",
    type: "(params: CellRendererParams) => ReactNode | string",
    example: `{
  accessor: "status",
  label: "Status",
  cellRenderer: ({ row, accessor }) => {
    const status = row[accessor];
    return (
      <span className={\`badge \${status === 'active' ? 'badge-green' : 'badge-red'}\`}>
        {status}
      </span>
    );
  }
}`,
  },
];

const CELL_RENDERER_PARAMS_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor string identifying which column this cell belongs to.",
    type: "string",
    example: `// In cellRenderer function
({ accessor }) => {
  console.log(accessor); // "firstName", "salary", etc.
}`,
  },
  {
    key: "colIndex",
    name: "colIndex",
    required: true,
    description: "The zero-based index of the column within the table.",
    type: "number",
    example: `// In cellRenderer function
({ colIndex }) => {
  console.log(colIndex); // 0, 1, 2, etc.
}`,
  },
  {
    key: "row",
    name: "row",
    required: true,
    description:
      "The complete row object containing all data for this row. Access cell values using row[accessor].",
    type: "Row",
    link: "/docs/api-reference#union-types",
    example: `// In cellRenderer function
({ row, accessor }) => {
  const cellValue = row[accessor];
  const otherValue = row["otherColumn"];
  return \`\${cellValue} - \${otherValue}\`;
}`,
  },
];

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

        <PropTable props={CELL_RENDERER_PROPS} title="Cell Renderer Configuration" />

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">
          Cell Renderer Parameters
        </h3>

        <PropTable props={CELL_RENDERER_PARAMS_PROPS} title="CellRendererParams Interface" />

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Use the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              row
            </code>{" "}
            parameter to access any data from the current row, not just the current cell. This
            allows you to create renderers that depend on multiple column values.
          </p>
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
          parameter passed to your cell renderer is a flat object containing all the row's data:
        </p>

        <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
          <CodeBlock
            code={`type Row = {
  id: string | number;           // Unique identifier for the row
  [accessor: string]: CellValue; // All cell values accessible by column accessor
  
  // For hierarchical data (optional):
  children?: Row[];              // Child rows (e.g., invoices array, stations array)
};

// Example row structure:
{
  id: "SALE-123",
  repName: "John Doe",
  dealSize: 15000,
  isWon: true,
  category: "Software"
}`}
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To access a specific cell value, use{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            row[accessor]
          </code>{" "}
          directly. The row object is flat and contains all the data for that row.
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
