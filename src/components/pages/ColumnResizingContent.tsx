"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight, faColumns } from "@fortawesome/free-solid-svg-icons";
import ColumnResizingDemo from "../../components/demos/ColumnResizingDemo";
import CodeBlock from "../../components/CodeBlock";
import DocNavigationButtons from "../../components/DocNavigationButtons";
import ColumnPropertiesDemo from "../demos/ColumnPropertiesDemo";

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
        Column properties define how each column behaves and appears in your table. This page
        documents all the available properties for customizing your columns.
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
        Basic Column Structure
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Columns in Simple Table are defined as an array of objects with various properties:
        </p>

        <CodeBlock demoCodeFilename="ColumnPropertiesDemo.txt" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Available Properties
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="space-y-6">
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Core Properties</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">accessor</code>:
                String key that matches the data field in your row objects (required)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">label</code>:
                Display text for the column header (required)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">width</code>: Column
                width in pixels (required)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">type</code>: Data
                type of the column ('string', 'number', 'boolean', 'date', 'enum')
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Display Properties</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align</code>: Cell
                text alignment ('left', 'center', 'right')
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code>:
                Custom render function for cells in this column
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">hide</code>: Whether
                to hide the column (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowHeight</code>:
                Sets the height of rows in pixels (number, e.g., 40)
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Interactive Properties</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable</code>:
                Whether the column is sortable (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isEditable</code>:
                Whether the column can be edited (boolean)
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned</code>: Pin
                column to 'left' or 'right' side
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">expandable</code>:
                Whether the column can be expanded (boolean)
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnResizingContent;
