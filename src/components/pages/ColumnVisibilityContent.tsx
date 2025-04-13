"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ColumnVisibilityDemo from "../../components/demos/ColumnVisibilityDemo";
import CodeBlock from "../../components/CodeBlock";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const ColumnVisibilityContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faEye} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Visibility</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column visibility controls allow users to show or hide specific columns, customizing their
        view to focus on the most relevant data.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ColumnVisibilityDemo />
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
          Column visibility can be controlled using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">hide</code> property in
          the header objects and the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">editColumns</code> prop on
          the SimpleTable component.
        </p>

        <CodeBlock demoCodeFilename="ColumnVisibilityDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Key Visibility Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">hide</code>: Boolean
              property in header objects to control initial visibility
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">editColumns</code>:
              Enable column visibility controls
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                editColumnsInitOpen
              </code>
              : Open the column visibility menu by default
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnVisibilityContent;
