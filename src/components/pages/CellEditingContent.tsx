"use client";
import CodeBlock from "@/components/CodeBlock";
import CellEditingDemo from "@/components/demos/CellEditingDemo";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import DocNavigationButtons from "../DocNavigationButtons";

export default function CellEditingContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faEdit} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Cell Editing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table provides powerful cell editing capabilities, allowing users to modify data
        directly within the table interface. This creates a more interactive and efficient user
        experience for data entry and management.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CellEditingDemo />
      </motion.div>

      {/* Basic Editing Setup Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Editing Setup
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">To enable cell editing in Simple Table, you need to:</p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
          <li>
            Add the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isEditable: true</code>{" "}
            property to the columns you want to make editable
          </li>
          <li>
            Provide an{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onCellEdit</code>{" "}
            handler to manage the data updates
          </li>
        </ol>

        <CodeBlock demoCodeFilename="CellEditingDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Cell Editing Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                isEditable: true
              </code>
              : Makes a column editable
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onCellEdit</code>:
              Callback function to handle cell edits
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
