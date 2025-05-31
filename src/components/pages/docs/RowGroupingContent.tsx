"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import RowGroupingDemo from "../../demos/RowGroupingDemo";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import CodeBlock from "@/components/CodeBlock";

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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Row Grouping</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Row grouping allows you to organize your data into expandable hierarchical structures,
        making it easier to navigate large datasets with natural parent-child relationships.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="RowGroupingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["RowGroupingDemo.tsx"].url}
          Preview={RowGroupingDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable row grouping in Simple Table, you need to:
        </p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>
            Add the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              expandable: true
            </code>{" "}
            property to the column you want to use for grouping
          </li>
          <li>Structure your data with nested arrays containing child objects</li>
          <li>
            Use the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              rowGrouping
            </code>{" "}
            prop to specify which array properties define the hierarchy
          </li>
          <li>
            Add{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              rowIdAccessor
            </code>{" "}
            to specify the unique identifier field
          </li>
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Key Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                expandable: true
              </code>
              : Makes a column expandable for grouping
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowGrouping
              </code>
              : Array of property names that define the hierarchy levels
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                rowIdAccessor
              </code>
              : Property name to use as the unique identifier
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Data Structure
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your data should be structured as flat objects with nested arrays for hierarchical
          relationships. Each level of the hierarchy is defined by an array property containing
          child objects:
        </p>

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            Benefits of This Approach
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Intuitive data structure:</strong> Nested arrays naturally represent
              hierarchical relationships
            </li>
            <li>
              <strong>Flexible grouping:</strong> Support for multiple levels of nesting (companies
              → divisions → departments)
            </li>
            <li>
              <strong>Clean API:</strong> No complex wrapper objects or metadata required
            </li>
            <li>
              <strong>Type-safe:</strong> Works seamlessly with TypeScript for better development
              experience
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Row Grouping Examples
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            rowGrouping
          </code>{" "}
          prop determines how many levels of hierarchy to display. Here are different
          configurations:
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 dark:text-white mb-2">Single Level Grouping</h4>
            <CodeBlock
              code={`// Show only companies and their divisions (2 levels)
<SimpleTable
  rowGrouping={["divisions"]}
  rowIdAccessor="id"
  rows={rows}
/>`}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Companies can expand to show divisions, but departments remain hidden.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 dark:text-white mb-2">Multi-Level Grouping</h4>
            <CodeBlock
              code={`// Show all three levels: companies → divisions → departments
<SimpleTable
  rowGrouping={["divisions", "departments"]}
  rowIdAccessor="id"
  rows={rows}
/>`}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Full hierarchy with companies containing divisions containing departments.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 dark:text-white mb-2">No Grouping</h4>
            <CodeBlock
              code={`// Flat table with no hierarchy
<SimpleTable
  // No rowGrouping prop
  rowIdAccessor="id"
  rows={rows}
/>`}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Shows only top-level items (companies) as a flat list.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The array order in{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              rowGrouping
            </code>{" "}
            defines the hierarchy depth.{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              ["divisions", "departments"]
            </code>{" "}
            means divisions are level 1 and departments are level 2 under each division.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default RowGroupingContent;
