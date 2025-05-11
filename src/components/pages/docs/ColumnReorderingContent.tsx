"use client";
import CodeBlock from "@/components/CodeBlock";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import DocNavigationButtons from "../../DocNavigationButtons";
import ColumnReorderingDemo from "../../demos/ColumnReorderingDemo";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

export default function ColumnReorderingContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Reordering</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column reordering allows users to drag and drop columns to reorganize the table layout
        according to their preferences.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnReorderingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnReorderingDemo.tsx"].url}
          Preview={ColumnReorderingDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Column reordering is enabled by adding the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">columnReordering</code>{" "}
          prop to the SimpleTable component. Users can drag and drop column headers to rearrange
          them.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Reordering Configuration</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                columnReordering
              </code>
              : Enable column reordering functionality
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                onColumnOrderChange
              </code>
              : Optional callback that fires when column order changes, receiving the new header
              configuration as a parameter
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">disableReorder</code>:
              Set this property on individual headers to prevent specific columns from being
              reordered
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Tip</h3>
          <p className="text-gray-700">
            The{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
              onColumnOrderChange
            </code>{" "}
            callback is useful for saving user preferences. You can store the new column order in
            localStorage or in your backend to persist the user's preferred layout across sessions.
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Usage with Other Features
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Column reordering works seamlessly with other Simple Table features. You can combine it
          with column resizing, column visibility, and pinned columns to create a highly
          customizable table experience.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Best Practice</h3>
          <p className="text-gray-700">
            When using column reordering with pinned columns, pinned columns will remain in their
            respective pinned areas (left or right) but can be reordered within those areas.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
