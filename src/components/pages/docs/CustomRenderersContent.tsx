"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CustomRenderersDemo from "@/components/demos/CustomRenderersDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

export default function CustomRenderersContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faCode} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Custom Renderers</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Custom renderers allow you to override the default rendering of cells, headers, and rows to
        create a unique table experience. This is useful for adding custom styling, interactive
        elements, or complex data visualizations.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CustomRenderersDemo.txt"
          height="400px"
          link={SANDBOX_LIST["CustomRenderersDemo.tsx"].url}
          Preview={CustomRenderersDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Cell Renderers
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To create a custom cell renderer, you need to add the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code> prop
          to your column definition. This function receives the cell value and should return a React
          element.
        </p>

        <CodeBlock demoCodeFilename="CustomRenderersDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Cell Renderer Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">value</code>: The
              cell's value
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowData</code>: The
              entire row's data
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowIndex</code>: The
              row's index
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">column</code>: The
              column definition
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
        Header Renderers
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Custom header renderers work similarly to cell renderers. Add the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">headerRenderer</code> prop
          to your column definition to override the default header rendering.
        </p>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Row Renderers
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 mb-4">
          For complete control over row rendering, use the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowRenderer</code> prop on
          the SimpleTable component. This allows you to customize the entire row's appearance and
          behavior.
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
