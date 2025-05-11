"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnResizingDemo from "../../demos/ColumnResizingDemo";
import DocNavigationButtons from "../../DocNavigationButtons";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const ColumnResizingContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLeftRight} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Resizing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column resizing allows users to adjust column widths to better view and interact with data
        according to their preferences.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnResizingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnResizingDemo.tsx"].url}
          Preview={ColumnResizingDemo}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Column resizing is enabled by adding the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">columnResizing</code> prop
          to the SimpleTable component. Users can resize columns by dragging the column dividers in
          the header row.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Resizing Configuration</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">columnResizing</code>:
              Enable column resizing functionality
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnResizingContent;
