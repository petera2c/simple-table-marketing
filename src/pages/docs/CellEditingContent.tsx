"use client";
import CellEditingDemo from "@/components/demos/CellEditingDemo";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import DocNavigationButtons from "../../DocNavigationButtons";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";

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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Cell Editing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table provides powerful cell editing capabilities, allowing users to modify data
        directly within the table interface. This creates a more interactive and efficient user
        experience for data entry and management. Unlike competitors, Simple Table provides
        specialized editors for different data types including strings, numbers, dates, booleans,
        and enumerated values.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CellEditingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["CellEditingDemo.tsx"].url}
          Preview={CellEditingDemo}
        />
      </motion.div>

      {/* Basic Editing Setup Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Editing Setup
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable cell editing in Simple Table, you need to:
        </p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>
            Add the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              isEditable: true
            </code>{" "}
            property to the columns you want to make editable
          </li>
          <li>
            Provide an{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              onCellEdit
            </code>{" "}
            handler to manage the data updates
          </li>
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Cell Editing Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                isEditable: true
              </code>
              : Makes a column editable
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                onCellEdit
              </code>
              : Callback function to handle cell edits
            </li>
          </ul>
        </div>

        {/* Copy-Paste Functionality Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          Copy-Paste Functionality
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.46 }}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Simple Table includes built-in copy-paste functionality that works seamlessly with cell
            editing:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>
              Users can copy data from any selected cells using keyboard shortcuts (Ctrl+C/⌘+C)
            </li>
            <li>
              Data can be pasted from external sources like spreadsheets or other applications
            </li>
            <li>
              <strong>Important:</strong> Pasting is only allowed into columns that have{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                isEditable: true
              </code>
            </li>
            <li>Non-editable columns will be skipped during paste operations</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-700 p-4 rounded-lg shadow-sm mb-6">
            <h4 className="font-bold text-gray-800 dark:text-white mb-2">
              Copy-Paste Restrictions
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              When pasting data, only columns marked with{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                isEditable: true
              </code>{" "}
              will accept the pasted values. This ensures data integrity and prevents accidental
              modification of read-only columns like IDs or calculated fields.
            </p>
          </div>
        </motion.div>

        {/* Specialized Editors Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Specialized Editors
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Simple Table provides specialized editors for different data types, making it more
            user-friendly than competitors:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">String Editor</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Default text input for string values like names, descriptions, and emails.
              </p>
              <code className="block bg-gray-200 dark:bg-gray-700 p-2 mt-2 rounded text-gray-800 dark:text-gray-200 text-sm">
                {`type: "string"`}
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Number Editor</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Specialized input for numeric values with validation.
              </p>
              <code className="block bg-gray-200 dark:bg-gray-700 p-2 mt-2 rounded text-gray-800 dark:text-gray-200 text-sm">
                {`type: "number"`}
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Boolean Editor</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Checkbox interface for true/false values.
              </p>
              <code className="block bg-gray-200 dark:bg-gray-700 p-2 mt-2 rounded text-gray-800 dark:text-gray-200 text-sm">
                {`type: "boolean"`}
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Date Editor</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Date picker interface for selecting dates. Date values must be in the format{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                  YYYY-MM-DD
                </code>
                .
              </p>
              <code className="block bg-gray-200 dark:bg-gray-700 p-2 mt-2 rounded text-gray-800 dark:text-gray-200 text-sm">
                {`type: "date"`}
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 md:col-span-2">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Enum Editor</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dropdown selector for choosing from predefined options.
              </p>
              <code className="block bg-gray-200 dark:bg-gray-700 p-2 mt-2 rounded text-gray-800 dark:text-gray-200 text-sm">
                {`type: "enum",
enumOptions: [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" }
]`}
              </code>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
