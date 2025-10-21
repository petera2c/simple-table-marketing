"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollapsibleColumnsDemo from "@/components/demos/CollapsibleColumnsDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const COLLAPSIBLE_COLUMNS_PROPS: PropInfo[] = [
  {
    key: "collapsible",
    name: "collapsible",
    required: false,
    description:
      "Enables collapsible functionality for a column group. When true, users can click the collapse arrow in the header to hide/show child columns.",
    type: "boolean",
    example: `<SimpleTable
  defaultHeaders={[
    {
      accessor: "groupName",
      label: "Group Header",
      collapsible: true,
      children: [
        { accessor: "child1", label: "Child 1" },
        { accessor: "child2", label: "Child 2" }
      ]
    }
  ]}
  // ... other props
/>`,
  },
  {
    key: "showWhen",
    name: "showWhen",
    required: false,
    description:
      'Controls when a child column is visible in collapsible groups. Can be "parentCollapsed" (only visible when collapsed), "parentExpanded" (only visible when expanded), or "always" (visible in both states).',
    type: 'ShowWhen ("parentCollapsed" | "parentExpanded" | "always")',
    example: `{
  accessor: "groupName",
  label: "Group Header",
  collapsible: true,
  children: [
    {
      accessor: "alwaysVisible",
      label: "Always Visible",
      showWhen: "always" // Visible in both states
    },
    {
      accessor: "summary",
      label: "Summary",
      showWhen: "parentCollapsed" // Only when collapsed
    },
    {
      accessor: "details",
      label: "Details",
      showWhen: "parentExpanded" // Only when expanded
    }
  ]
}`,
  },
  {
    key: "headerExpandIcon",
    name: "headerExpandIcon",
    required: false,
    description:
      "Custom icon component for the expand state of collapsible column headers. Shows when a column group can be expanded to reveal child columns.",
    type: "ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  headerExpandIcon={<FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "headerCollapseIcon",
    name: "headerCollapseIcon",
    required: false,
    description:
      "Custom icon component for the collapse state of collapsible column headers. Shows when a column group can be collapsed to hide child columns.",
    type: "ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  headerCollapseIcon={<FontAwesomeIcon icon={faChevronDown} className="text-blue-600" />}
  // ... other props
/>`,
  },
];

const CollapsibleColumnsContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faFolderMinus} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Collapsible Columns</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Collapsible columns allow users to dynamically hide and show grouped columns to optimize
        screen space and focus on relevant data. Click the arrow icons in column headers to collapse
        entire column groups while keeping important columns visible.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CollapsibleColumnsDemo.txt"
          height="400px"
          link={SANDBOX_LIST["CollapsibleColumnsDemo.tsx"].url}
          Preview={CollapsibleColumnsDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Collapsible columns are created by adding the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            collapsible: true
          </code>{" "}
          property to a parent column with{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            children
          </code>{" "}
          columns. Users can click the arrow icon in the header to collapse the column group.
        </p>

        <PropTable props={COLLAPSIBLE_COLUMNS_PROPS} title="Collapsible Columns Configuration" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Collapse Behaviors
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Collapsible columns support different behaviors when collapsed:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Visibility Control
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-sm">
              Control when child columns are visible using the{" "}
              <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded">showWhen</code>{" "}
              attribute:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border">
                <h4 className="font-semibold text-green-600 mb-2">📖 When Expanded</h4>
                <p className="text-sm">
                  <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs">
                    showWhen: "parentExpanded"
                  </code>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-600 mb-2">📕 When Collapsed</h4>
                <p className="text-sm">
                  <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs">
                    showWhen: "parentCollapsed"
                  </code>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-600 mb-2">🔄 Always Visible</h4>
                <p className="text-sm">
                  <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs">
                    showWhen: "always"
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default CollapsibleColumnsContent;
