"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import QuickStartDemo from "../../demos/QuickStartDemo";
import CodeBlock from "../../CodeBlock";
import DocNavigationButtons from "../../DocNavigationButtons";
import { UI_STRINGS } from "@/constants/strings/ui";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";

const QuickStartContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Quick Start</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        This guide will help you quickly set up Simple Table in your React project. In just a few
        minutes, you'll have a fully functional data table.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="QuickStartDemo.txt"
          height="400px"
          link={SANDBOX_LIST["QuickStartDemo.tsx"].url}
          Preview={QuickStartDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Key Props and Features
      </motion.h2>

      <motion.div
        className="mb-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Table Headers
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Headers define the structure of your table columns. Each header can have:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">accessor</code> - The key
              to access data in your rows
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">label</code> - The display
              name for the column
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">width</code> - Column
              width (fixed or flexible with "1fr")
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">isSortable</code> -
              Enable/disable column sorting
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">type</code> - Data type
              for proper formatting (string, number, date)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Table Props</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            The SimpleTable component accepts several useful props:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">defaultHeaders</code> -
              Array of column definitions
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">rows</code> - Your data
              array with rowMeta and rowData
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">height</code> - Table
              container height
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">rowHeight</code> - Height
              of each row
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">editColumns</code> -
              Enable column reordering
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">selectableCells</code> -
              Enable cell selection
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Data Structure
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Each row in your data should follow this structure:
          </p>
          <CodeBlock
            code={`{
  rowMeta: { rowId: number },
  rowData: {
    // Your actual data fields here
    id: number,
    name: string,
    // ... other fields
  }
}`}
          />
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {UI_STRINGS.docs.cssSetup.title}
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {UI_STRINGS.docs.cssSetup.description}
        </p>

        <CodeBlock code={TECHNICAL_STRINGS.css.import} language="js" />

        <p className="text-gray-700 dark:text-gray-300">{UI_STRINGS.docs.cssSetup.note}</p>
      </motion.div>

      <motion.div
        className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h3 className="font-bold text-gray-800 dark:text-white mb-2">Pro Tip</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Simple Table automatically handles the styling of alternating rows, borders, and hover
          states. You can customize these later with themes, but the defaults look great out of the
          box!
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default QuickStartContent;
