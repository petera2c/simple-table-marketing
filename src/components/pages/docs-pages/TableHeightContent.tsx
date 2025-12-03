"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";
import TableHeightDemo from "@/components/demos/TableHeightDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";
import CodeBlock from "@/components/CodeBlock";

const TABLE_HEIGHT_PROPS: PropInfo[] = [
  {
    key: "height",
    name: "height",
    required: false,
    description:
      "Sets the height of the table container. When specified, Simple Table handles vertical scrolling internally. When omitted, the table expands to fit all rows and overflows the parent container.",
    type: "string | number",
    example: `// Fixed pixel height
<SimpleTable
  height="400px"
  // ... other props
/>

// Viewport-relative height
<SimpleTable
  height="50vh"
  // ... other props
/>

// Percentage (parent must have defined height)
<SimpleTable
  height="100%"
  // ... other props
/>

// No height - table overflows parent
<SimpleTable
  // height prop omitted
  // ... other props
/>`,
  },
];

export default function TableHeightContent() {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faUpDown} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Table Height</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
          height
        </code>{" "}
        prop controls how Simple Table handles vertical overflow. Understanding this prop is
        essential for building tables that integrate well with your layout.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="TableHeightDemo.txt"
          height="500px"
          link={SANDBOX_LIST["TableHeightDemo.tsx"]?.url || "#"}
          Preview={TableHeightDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        How Height Works
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            height
          </code>{" "}
          prop is optional and determines how the table handles vertical space:
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              With height specified (recommended for most cases)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Simple Table creates a scrollable container at the specified height. The header
              remains fixed while the body scrolls. This is ideal when you have many rows and want
              to keep the table contained within a specific area of your layout.
            </p>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Without height (table overflows parent)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              When no height is specified, the table expands to show all rows and will overflow its
              parent container. This is useful when you want to handle scrolling yourself (e.g.,
              page-level scrolling) or when embedding the table in a container that manages its own
              overflow.
            </p>
          </div>
        </div>

        <PropTable props={TABLE_HEIGHT_PROPS} title="Height Configuration" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Common Patterns
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Fixed Height Table
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Most common use case. The table has a fixed height and handles its own scrolling:
        </p>
        <CodeBlock
          code={`<SimpleTable
  defaultHeaders={headers}
  rows={data}
  rowIdAccessor="id"
  height="400px"
/>`}
          language="tsx"
        />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Viewport-Relative Height
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Use viewport units for responsive heights that adapt to screen size:
        </p>
        <CodeBlock
          code={`<SimpleTable
  defaultHeaders={headers}
  rows={data}
  rowIdAccessor="id"
  height="60vh"
/>`}
          language="tsx"
        />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Fill Parent Container
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Use percentage height when the parent container has a defined height:
        </p>
        <CodeBlock
          code={`// Parent must have a defined height
<div style={{ height: '500px' }}>
  <SimpleTable
    defaultHeaders={headers}
    rows={data}
    rowIdAccessor="id"
    height="100%"
  />
</div>`}
          language="tsx"
        />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Parent-Controlled Overflow
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Omit height when you want the parent to handle scrolling:
        </p>
        <CodeBlock
          code={`// Table expands to full height, parent handles overflow
<div style={{ height: '400px', overflow: 'auto' }}>
  <SimpleTable
    defaultHeaders={headers}
    rows={data}
    rowIdAccessor="id"
    // No height prop - table overflows parent
  />
</div>`}
          language="tsx"
        />
      </motion.div>

      <motion.div
        className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <h3 className="font-bold text-gray-800 dark:text-white mb-2">Pro Tip</h3>
        <p className="text-gray-700 dark:text-gray-300">
          For most applications, specifying a{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            height
          </code>{" "}
          is recommended. This ensures consistent layout, enables virtualization for large datasets,
          and keeps the header visible while scrolling through data.
        </p>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
}
