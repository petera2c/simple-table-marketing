"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import LiveUpdateDemo from "@/demos/LiveUpdateDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const LiveUpdateContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-indigo-100 rounded-lg">
          <FontAwesomeIcon icon={faBolt} className="text-indigo-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Live Updates</h1>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="LiveUpdateDemo.txt"
          height="400px"
          link={SANDBOX_LIST["LiveUpdateDemo.tsx"].url}
          Preview={LiveUpdateDemo}
        />
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SimpleTable provides powerful tools for creating dynamic, real-time tables with data that
        updates on the fly. Using the{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          tableRef
        </code>{" "}
        and{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          updateData
        </code>{" "}
        API, you can update individual cells with smooth visual feedback through the{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          cellUpdateFlash
        </code>{" "}
        feature.
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
          To enable live updates in your table, follow these steps:
        </p>

        <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Create a table reference</strong> - Create a ref using{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              useRef
            </code>
            and pass it to the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              tableRef
            </code>{" "}
            prop
          </li>
          <li>
            <strong>Enable flash animation</strong> - Set the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              cellUpdateFlash
            </code>{" "}
            prop to{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              true
            </code>{" "}
            to enable visual feedback on cell updates
          </li>
          <li>
            <strong>Update data</strong> - Call{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              tableRef.current.updateData()
            </code>
            with the appropriate parameters to update specific cells
          </li>
        </ol>
      </motion.div>

      {/* TableRef Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        The TableRef Interface
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            TableRefType
          </code>{" "}
          provides methods to interact with the table. Currently, it offers the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            updateData
          </code>{" "}
          method:
        </p>

        <CodeBlock
          className="mb-4"
          code={`type TableRefType = {
  updateData: (params: {
    accessor: string;   // The column accessor to target
    rowIndex: number;   // The row index to update
    newValue: any;      // The new value to set
  }) => void;
};`}
        />

        <h3 className="font-bold text-gray-800 dark:text-white mb-2">TableRef Example</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            updateData
          </code>{" "}
          method updates a single cell in the table:
        </p>
        <CodeBlock
          className="mb-4"
          code={`// Create a ref
const tableRef = useRef<TableRefType | null>(null);

// Update a specific cell
tableRef.current?.updateData({
  accessor: "price",
  rowIndex: 2,
  newValue: 29.99,
});`}
        />
      </motion.div>

      {/* Cell Update Flash Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Cell Update Flash Animation
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            cellUpdateFlash
          </code>{" "}
          is enabled, cells will momentarily highlight when their value changes, providing a subtle
          visual cue to users:
        </p>

        <CodeBlock
          className="mb-4"
          code={`<SimpleTable
  cellUpdateFlash={true} // Enable the flash animation
  defaultHeaders={headers}
  rows={tableData}
  tableRef={tableRef}
/>`}
        />

        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              When updating cells, remember to also update your local state to keep it in sync with
              the table
            </li>
            <li>
              The flash effect is subtle by design to avoid distracting users with too much motion
            </li>
            <li>
              Updates are best used for small, incremental changes rather than complete table
              refreshes
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Real-world Use Cases */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Real-world Use Cases
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Live updates are particularly valuable in these scenarios:
        </p>

        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <strong>Financial dashboards</strong> - Display real-time stock price changes and trades
          </li>
          <li>
            <strong>Inventory management</strong> - Show live updates as items are purchased or
            restocked
          </li>
          <li>
            <strong>Analytics dashboards</strong> - Present data metrics that update as new
            information arrives
          </li>
          <li>
            <strong>Sports statistics</strong> - Display live game scores and player statistics
          </li>
          <li>
            <strong>IoT monitoring</strong> - Show sensor readings that update in real-time
          </li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default LiveUpdateContent;
