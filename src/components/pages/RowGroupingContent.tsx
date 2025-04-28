"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import RowGroupingDemo from "../../components/demos/RowGroupingDemo";
import CodeBlock from "../../components/CodeBlock";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const RowGroupingContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLayerGroup} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Row Grouping</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Row grouping allows you to organize your data by common values, creating collapsible
        sections that make it easier to navigate large datasets and analyze related information.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <RowGroupingDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Row Grouping
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">To enable row grouping in Simple Table, you need to:</p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
          <li>
            Add the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">expandable: true</code>{" "}
            property to the column you want to use for grouping
          </li>
          <li>
            Structure your data with nested rows using the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">children</code> property
            in <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowMeta</code>
          </li>
          <li>
            Set <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isExpanded</code> in{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowMeta</code> to
            control the initial expansion state
          </li>
        </ol>

        <CodeBlock demoCodeFilename="RowGroupingDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Key Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                expandable: true
              </code>
              : Makes a column expandable for grouping
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                rowMeta.children
              </code>
              : Contains nested rows for the group
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                rowMeta.isExpanded
              </code>
              : Controls whether a group is expanded
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Data Structure
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Your data should be structured with nested rows using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">children</code> property
          in <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowMeta</code>. Here's
          an example:
        </p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm text-gray-700">
            {`{
  rowMeta: { 
    rowId: 1,
    children: [
      {
        rowMeta: { rowId: 2 },
        rowData: { /* child row data */ }
      }
    ]
  },
  rowData: { /* parent row data */ }
}`}
          </pre>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default RowGroupingContent;
