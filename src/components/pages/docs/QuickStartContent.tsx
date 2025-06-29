"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import QuickStartDemo from "@/components/demos/QuickStartDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import { UI_STRINGS } from "@/constants/strings/ui";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import PropTable, { type PropInfo } from "@/components/PropTable";

const TABLE_PROPS: PropInfo[] = [
  {
    key: "defaultHeaders",
    name: "defaultHeaders",
    required: true,
    description: "Array of column definitions that specify the structure of your table.",
    type: "HeaderObject[]",
    link: "/docs/api-reference#header-object",
    example: `const headers = [
  { accessor: "id", label: "ID", width: 80, type: "number" },
  { accessor: "name", label: "Name", width: "1fr", type: "string" }
];`,
  },
  {
    key: "rows",
    name: "rows",
    required: true,
    description: "Array of data objects to display in the table. Each object represents a row.",
    type: "Row[]",
    link: "/docs/api-reference#union-types",
    example: `const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
];`,
  },
  {
    key: "rowIdAccessor",
    name: "rowIdAccessor",
    required: true,
    description:
      "The property name that uniquely identifies each row. This is crucial for proper row tracking, selection, and updates. Without this, the table cannot maintain state correctly.",
    type: "string",
    example: `// If your data has an 'id' field
rowIdAccessor="id"

// If your data has a different unique field
rowIdAccessor="employeeId"`,
  },
  {
    key: "height",
    name: "height",
    required: false,
    description: "Height of the table container. Can be any valid CSS height value.",
    type: "string",
    example: `height="400px"
height="50vh"
height="100%"`,
  },
  {
    key: "rowHeight",
    name: "rowHeight",
    required: false,
    description: "Height of each individual row in pixels.",
    type: "number",
    example: `rowHeight={32}  // Default
rowHeight={48}  // Larger rows`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description: "Enable column reordering by drag and drop.",
    type: "boolean",
    example: `editColumns={true}`,
  },
  {
    key: "selectableCells",
    name: "selectableCells",
    required: false,
    description: "Enable cell selection functionality.",
    type: "boolean",
    example: `selectableCells={true}`,
  },
  {
    key: "theme",
    name: "theme",
    required: false,
    description: "Custom theme object to override default styling.",
    type: "Theme",
    link: "/docs/api-reference#union-types",
    example: `theme={{
  primaryColor: "#3b82f6",
  backgroundColor: "#ffffff"
}}`,
  },
];

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

      {/* Important rowIdAccessor callout */}

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SimpleTable Props
      </motion.h2>

      <PropTable props={TABLE_PROPS} title="Main Component Props" />

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
