"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ColumnEditingDemo from "@/components/demos/ColumnEditingDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import CodeBlock from "@/components/CodeBlock";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLUMN_EDITING_PROPS: PropInfo[] = [
  {
    key: "selectableColumns",
    name: "selectableColumns",
    required: true,
    description:
      "Required for column editing to work. Enables column selection and interaction functionality that column editing depends on.",
    type: "boolean",
    example: `<SimpleTable
  selectableColumns={true}
  enableHeaderEditing={true}
  // ... other props
/>`,
  },
  {
    key: "enableHeaderEditing",
    name: "enableHeaderEditing",
    required: false,
    description:
      "Enables header editing functionality. When true, users can double-click on column headers to edit their labels.",
    type: "boolean",
    example: `<SimpleTable
  selectableColumns={true}
  enableHeaderEditing={true}
  onHeaderEdit={handleHeaderEdit}
  // ... other props
/>`,
  },
  {
    key: "onHeaderEdit",
    name: "onHeaderEdit",
    required: false,
    description:
      "Callback function triggered when a column header is edited. Receives the header index and new label value.",
    type: "(headerIndex: number, newLabel: string) => void",
    example: `const handleHeaderEdit = (headerIndex: number, newLabel: string) => {
  console.log('Header edited:', { headerIndex, newLabel });
  // Update your headers state here
};

<SimpleTable
  onHeaderEdit={handleHeaderEdit}
  // ... other props
/>`,
  },
  {
    key: "editColumns",
    name: "editColumns",
    required: false,
    description:
      "General prop that enables column editing capabilities. This can include adding, removing, or modifying columns.",
    type: "boolean",
    example: `<SimpleTable
  editColumns={true}
  // ... other props
/>`,
  },
  {
    key: "headerRenderer",
    name: "HeaderObject.headerRenderer",
    required: false,
    description:
      "Custom renderer for column headers. Can be used to add buttons, dropdowns, or other interactive elements to column headers.",
    type: "React.ComponentType<HeaderRendererProps>",
    example: `const headers = [
  {
    accessor: "actions",
    label: "Actions",
    headerRenderer: () => (
      <button onClick={addColumn}>
        + Add Column
      </button>
    )
  }
];`,
  },
];

const ColumnEditingContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faEdit} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Column Editing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column editing enables users to modify table structure dynamically by editing column names,
        adding new columns, and customizing the table layout. This feature is essential for building
        flexible data management interfaces.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="ColumnEditingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["ColumnEditingDemo.tsx"].url}
          Preview={(props) => <ColumnEditingDemo {...props} />}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Column Editing
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable column editing in Simple Table, you can use several approaches:
        </p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <strong>Enable column selection</strong> with{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              selectableColumns={true}
            </code>{" "}
            (required for column editing to work)
          </li>
          <li>
            Enable header editing with{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              enableHeaderEditing={true}
            </code>
          </li>
          <li>
            Provide an{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              onHeaderEdit
            </code>{" "}
            callback to handle header changes
          </li>
          <li>
            Use{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              headerRenderer
            </code>{" "}
            to add custom controls like "Add Column" buttons
          </li>
          <li>Manage column state dynamically to add or remove columns</li>
        </ol>

        <PropTable props={COLUMN_EDITING_PROPS} title="Column Editing Properties" />
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnEditingContent;
