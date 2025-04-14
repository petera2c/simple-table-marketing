"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import ColumnPropertiesDemo from "../../components/demos/ColumnPropertiesDemo";
import CodeBlock from "../../components/CodeBlock";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const ColumnPropertiesContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faColumns} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Properties</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Configure column behavior and appearance with a comprehensive set of properties. Control
        width, alignment, sorting, filtering, and more.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ColumnPropertiesDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Properties
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">Configure columns using these essential properties:</p>

        <CodeBlock demoCodeFilename="ColumnPropertiesDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Core Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">id</code>: Unique
              identifier for the column
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">header</code>: Column
              header text or component
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">accessor</code>: Data
              field to display
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">width</code>: Column
              width (number or string)
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">disableReorder</code>:
              Prevents the column from being reordered when column reordering is enabled
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
        Advanced Properties
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Formatting</h3>
            <p className="text-gray-700">
              Use cell and header formatters to customize content display.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Styling</h3>
            <p className="text-gray-700">Apply custom styles and classes to columns and cells.</p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Events</h3>
            <p className="text-gray-700">Handle column-specific events like click and resize.</p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Validation</h3>
            <p className="text-gray-700">Set validation rules for editable columns.</p>
          </div>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnPropertiesContent;
