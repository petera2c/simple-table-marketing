"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import ColumnAlignmentDemo from "../../demos/ColumnAlignmentDemo";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const ColumnAlignmentContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faAlignCenter} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Alignment</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column alignment allows you to control how content is positioned horizontally within each
        column, improving readability and visual organization of your data.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnAlignmentDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnAlignmentDemo.tsx"].url}
          Preview={ColumnAlignmentDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Usage
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Control column alignment by setting the <code>align</code> property in your header
          definitions:
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Alignment Options</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "left"</code>{" "}
              (default): Left-align content
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "center"</code>
              : Center content horizontally
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "right"</code>:
              Right-align content
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
        Best Practices
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Consider these guidelines for optimal column alignment:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Text Content</h3>
            <p className="text-gray-700">
              Left-align text content such as names, descriptions, and other textual data for easier
              reading.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Numeric Values</h3>
            <p className="text-gray-700">
              Right-align numbers, currencies, and percentages to make decimal points align
              vertically.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Headers</h3>
            <p className="text-gray-700">
              Match the header alignment with its column content for consistency.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Status Indicators</h3>
            <p className="text-gray-700">
              Center-align status badges, icons, and other indicator elements to create visual
              focus.
            </p>
          </div>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnAlignmentContent;
