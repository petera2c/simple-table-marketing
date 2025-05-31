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
        progress bars, and more. Direct property access makes working with your data straightforward
        and intuitive.
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
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">cellRenderer</code>{" "}
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
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">accessor</code>:
              The column accessor string
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">colIndex</code>:
              The column index
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">row</code>: The row
              object containing all the data properties
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
          The <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">row</code>{" "}
          parameter is a simple object with all your data properties directly accessible:
        </p>

        <CodeBlock
          code={`// Row structure
const row = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  status: "active",
  progress: 85,
  // ... all your other properties
};

// Access properties directly
cellRenderer: ({ row }) => {
  return <span>{row.name}</span>;
}`}
        />

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Direct Property Access</h3>
          <p className="text-gray-700 dark:text-gray-300">
            All row properties are directly accessible, making it simple to reference any data field
            in your cell renderers without complex nesting or data traversal.
          </p>
        </div>
      </motion.div>

      {/* Examples Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Common Examples
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Status Badge
            </h3>
            <CodeBlock
              code={`cellRenderer: ({ row }) => {
  const status = row.status;
  const color = status === 'active' ? 'green' : 'red';
  
  return (
    <span className={\`px-2 py-1 rounded text-\${color}-600 bg-\${color}-100\`}>
      {status}
    </span>
  );
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Progress Bar
            </h3>
            <CodeBlock
              code={`cellRenderer: ({ row }) => {
  const progress = row.progress;
  
  return (
    <div className="w-full">
      <div className="text-xs mb-1">{progress}%</div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Clickable Link
            </h3>
            <CodeBlock
              code={`cellRenderer: ({ row }) => {
  return (
    <a 
      href={\`mailto:\${row.email}\`}
      className="text-blue-600 hover:underline"
    >
      {row.email}
    </a>
  );
}`}
            />
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Best Practices</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Keep cell renderers simple and focused on presentation</li>
            <li>Use TypeScript for better type safety with row properties</li>
            <li>Consider performance for large datasets - avoid complex computations</li>
            <li>Test your renderers with different data types and edge cases</li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default CellRendererContent;
