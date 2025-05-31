"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import RowGroupingDemo from "../../demos/RowGroupingDemo";
import DocNavigationButtons from "../../DocNavigationButtons";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import CodeBlock from "@/components/CodeBlock";

const RowGroupingContent = () => {
  return (
    <>
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
        Row grouping allows you to organize hierarchical data with expandable/collapsible sections.
        Create multi-level hierarchies using named array properties for intuitive data organization.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="RowGroupingDemo.txt"
          height="400px"
          link={SANDBOX_LIST["RowGroupingDemo.tsx"].url}
          Preview={RowGroupingDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Setting Up Row Grouping
      </motion.h2>

      <motion.div
        className="mb-8"
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
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
              expandable: true
            </code>{" "}
            property to the column you want to use for grouping
          </li>
          <li>Structure your data with named array properties for child levels</li>
          <li>
            Pass the{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rowGrouping</code>{" "}
            prop with an array of property names defining the hierarchy
          </li>
          <li>
            Set the{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rowIdAccessor</code>{" "}
            prop to specify which property contains the unique row identifier
          </li>
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Key Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                expandable: true
              </code>
              : Makes a column expandable for grouping
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                rowGrouping={["divisions", "departments"]}
              </code>
              : Defines the hierarchy levels using property names
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                rowIdAccessor="id"
              </code>
              : Specifies which property contains the unique identifier
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Data Structure
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your hierarchical data should use named array properties for child levels. This provides
          an intuitive and readable structure:
        </p>

        <CodeBlock
          code={`// Hierarchical structure with named array properties
const data = [
  {
    id: "COMP-001",
    organization: "TechSolutions Inc.",
    employees: 137,
    budget: "$15.0M",
    divisions: [
      {
        id: "DIV-001", 
        organization: "Engineering Division",
        employees: 97,
        budget: "$8.5M",
        departments: [
          {
            id: "DEPT-001",
            organization: "Frontend Team", 
            employees: 28,
            budget: "$2.8M"
          },
          {
            id: "DEPT-002",
            organization: "Backend Team",
            employees: 32, 
            budget: "$3.4M"
          }
        ]
      }
    ]
  }
];

// Usage
<SimpleTable
  defaultHeaders={headers}
  rows={data}
  rowIdAccessor="id"
  rowGrouping={["divisions", "departments"]}
/>`}
        />

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-700 p-4 rounded-lg shadow-sm mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            ✨ Benefits of This Structure
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Intuitive and readable data structure</li>
            <li>Flexible hierarchy levels with meaningful property names</li>
            <li>Excellent TypeScript support and autocomplete</li>
            <li>Easy data manipulation and generation</li>
            <li>Clear separation of concerns between data and presentation</li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default RowGroupingContent;
