"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import RowGroupingDemo from "@/components/demos/RowGroupingDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import { Button } from "antd";
import { useState } from "react";
import PropTable, { type PropInfo } from "@/components/PropTable";
import OrganizationHierarchyExample from "@/examples/organization-hierarchy/OrganizationHierarchyExample";

const ROW_GROUPING_PROPS: PropInfo[] = [
  {
    key: "expandable",
    name: "HeaderObject.expandable",
    required: false,
    description:
      "Makes a column expandable for grouping. This allows users to expand/collapse hierarchical data in that column.",
    type: "boolean",
    example: `{ 
  accessor: "name", 
  label: "Company Name", 
  expandable: true 
}`,
  },
  {
    key: "rowGrouping",
    name: "rowGrouping",
    required: false,
    description:
      "Array of property names that define the hierarchy levels. The order determines the nesting depth (first element is level 1, second is level 2, etc.).",
    type: "string[]",
    example: `// Single level: companies → divisions
<SimpleTable
  rowGrouping={["divisions"]}
  // ... other props
/>

// Multi-level: companies → divisions → departments  
<SimpleTable
  rowGrouping={["divisions", "departments"]}
  // ... other props
/>`,
  },
  {
    key: "expandAll",
    name: "expandAll",
    required: false,
    description:
      "When true, all grouped rows are expanded by default on table load. When false, rows start collapsed.",
    type: "boolean",
    example: `<SimpleTable
  expandAll={true}  // Default: all groups expanded
  // ... other props
/>`,
  },
  {
    key: "onRowGroupExpand",
    name: "onRowGroupExpand",
    required: false,
    description:
      "Callback function triggered when a grouped row is expanded or collapsed. Receives detailed information about the row, depth level, and grouping key. Perfect for lazy-loading hierarchical data on demand.",
    type: "(props: OnRowGroupExpandProps) => void",
    link: "/docs/api-reference#on-row-group-expand-props",
    example: `<SimpleTable
  onRowGroupExpand={({ row, rowId, depth, groupingKey, isExpanded }) => {
    if (isExpanded && !row[groupingKey]) {
      // Fetch children data for this row
      fetchChildrenData(rowId, groupingKey);
    }
  }}
  // ... other props
/>`,
  },
];

const RowGroupingContent = () => {
  const [expandAll, setExpandAll] = useState(true);
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLayerGroup} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Row Grouping</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Row grouping allows you to organize your data into expandable hierarchical structures,
        making it easier to navigate large datasets with natural parent-child relationships.
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex justify-end">
          <Button onClick={() => setExpandAll(!expandAll)}>
            {expandAll ? "Collapse All" : "Expand All"}
          </Button>
        </div>
        <LivePreview
          demoCodeFilename="RowGroupingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["RowGroupingDemo.tsx"].url}
          Preview={(props) => <RowGroupingDemo expandAll={expandAll} {...props} />}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Row Grouping
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable row grouping in Simple Table, you need to:
        </p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>
            Add the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              expandable: true
            </code>{" "}
            property to the column you want to use for grouping
          </li>
          <li>Structure your data with nested arrays containing child objects</li>
          <li>
            Use the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              rowGrouping
            </code>{" "}
            prop to specify which array properties define the hierarchy
          </li>

          <li>
            Add{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
              expandAll
            </code>{" "}
            to specify if all grouped rows are expanded by default on table load
          </li>
        </ol>

        <PropTable props={ROW_GROUPING_PROPS} title="Row Grouping Properties" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Dynamic Row Loading
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Use the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            onRowGroupExpand
          </code>{" "}
          callback to load nested data on-demand. This example demonstrates a three-level hierarchy
          (Projects → Milestones → Tasks) where child rows are fetched from an API only when their
          parent is expanded.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This approach is ideal for large datasets where loading all nested levels upfront would
          impact performance. The table only loads the top-level rows initially, then fetches deeper
          levels as users explore the hierarchy.
        </p>

        <LivePreview
          demoCodeFilename="OrganizationHierarchyExample.txt"
          height="400px"
          link={SANDBOX_LIST["OrganizationHierarchyExample.tsx"].url}
          Preview={(props) => <OrganizationHierarchyExample {...props} />}
        />
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default RowGroupingContent;
