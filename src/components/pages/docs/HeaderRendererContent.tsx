"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import HeaderRendererDemo from "@/components/demos/HeaderRendererDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";
import CodeBlock from "@/components/CodeBlock";

const HEADER_RENDERER_PROPS: PropInfo[] = [
  {
    key: "headerRenderer",
    name: "HeaderObject.headerRenderer",
    required: false,
    description:
      "Custom function to render header content. Receives header information and returns either a ReactNode or string for display.",
    type: "(params: HeaderRendererParams) => ReactNode | string",
    example: `{
  accessor: "status",
  label: "Status",
  headerRenderer: ({ header, accessor }) => {
    return (
      <div style={{ 
        backgroundColor: '#4f46e5', 
        color: 'white', 
        padding: '8px',
        borderRadius: '4px' 
      }}>
        🌟 {header.label}
      </div>
    );
  }
}`,
  },
];

const HEADER_RENDERER_PARAMS_PROPS: PropInfo[] = [
  {
    key: "accessor",
    name: "accessor",
    required: true,
    description: "The column accessor string identifying which column this header belongs to.",
    type: "string",
    example: `// In headerRenderer function
({ accessor }) => {
  console.log(accessor); // "firstName", "salary", etc.
}`,
  },
  {
    key: "colIndex",
    name: "colIndex",
    required: true,
    description: "The zero-based index of the column within the table.",
    type: "number",
    example: `// In headerRenderer function
({ colIndex }) => {
  console.log(colIndex); // 0, 1, 2, etc.
}`,
  },
  {
    key: "header",
    name: "header",
    required: true,
    description:
      "The complete HeaderObject containing all configuration for this column including label, width, and other properties.",
    type: "HeaderObject",
    link: "/docs/api-reference#header-object",
    example: `// In headerRenderer function
({ header }) => {
  console.log(header.label); // "Name", "Status", etc.
  console.log(header.width); // 150, "1fr", etc.
  return <div>{header.label}</div>;
}`,
  },
];

const HeaderRendererContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faPaintBrush} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Header Renderer</h1>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="HeaderRendererDemo.txt"
          height="400px"
          link={(SANDBOX_LIST as any)["HeaderRendererDemo.tsx"]?.url || "#"}
          Preview={HeaderRendererDemo}
        />
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Header renderers allow you to completely customize how column headers appear in your table.
        Create visually appealing headers with custom styling, icons, gradients, and interactive
        elements to enhance your table's design and user experience.
      </motion.p>

      {/* Basic Usage Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Each column in your table can have its own{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            headerRenderer
          </code>{" "}
          function. This function receives information about the header and returns either a
          ReactNode or a string to be rendered in the header cell.
        </p>

        <PropTable props={HEADER_RENDERER_PROPS} title="Header Renderer Configuration" />

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">
          Header Renderer Parameters
        </h3>

        <PropTable props={HEADER_RENDERER_PARAMS_PROPS} title="HeaderRendererParams Interface" />

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Use the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              header
            </code>{" "}
            parameter to access all column configuration properties, including label, width,
            sortable status, and more. This allows you to create dynamic headers that adapt based on
            column settings.
          </p>
        </div>
      </motion.div>

      {/* Header Object Structure */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Header Object Structure
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            header
          </code>{" "}
          parameter passed to your header renderer contains all the column configuration:
        </p>

        <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
          <CodeBlock
            code={`type HeaderObject = {
  accessor: string;              // Column accessor
  label: string;                 // Display label
  width?: number | string;       // Column width
  type?: CellType;               // Data type
  isSortable?: boolean;          // Can be sorted
  isEditable?: boolean;          // Can be edited
  align?: "left" | "center" | "right";
  // ... and many more properties
};

// Example header object:
{
  accessor: "starName",
  label: "Star Name", 
  width: 200,
  type: "string",
  isSortable: true
}`}
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Access any header property using{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            header.propertyName
          </code>{" "}
          in your renderer function.
        </p>
      </motion.div>

      {/* Use Cases */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Common Use Cases
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🎨 Custom Styling</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Add custom colors, gradients, fonts, and visual effects to make your headers stand out
              and match your brand.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🔤 Icons & Emojis</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Include FontAwesome icons, emojis, or custom graphics to make headers more intuitive
              and visually appealing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">📊 Sort Indicators</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Display custom sorting icons and states to help users understand column functionality.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🏷️ Smart Labels</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Create dynamic header text that adapts based on column properties or application
              state.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              Header renderers are purely visual - they don't affect sorting or filtering logic
            </li>
            <li>Each column can have its own unique header renderer</li>
            <li>Columns without a headerRenderer will display their label as plain text</li>
            <li>Header renderers should be lightweight to maintain performance</li>
            <li>Consider responsive design when creating complex header layouts</li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default HeaderRendererContent;
