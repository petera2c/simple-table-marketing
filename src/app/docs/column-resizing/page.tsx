"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "@/components/SEO";
import { SEO_STRINGS } from "@/constants/strings/seo";
import ColumnResizingDemo from "@/components/demos/ColumnResizingDemo";
import CodeBlock from "@/components/CodeBlock";
import { useDemoCode } from "@/hooks/useDemoCode";
import DocNavigationButtons from "@/components/DocNavigationButtons";

const ColumnResizingPage = () => {
  const demoCode = useDemoCode("ColumnResizingDemo.txt");

  return (
    <>
      <SEO
        title={`Column Resizing - ${SEO_STRINGS.docs.title}`}
        description="Adjust column widths easily with Simple Table's resizing feature."
        keywords={`column resizing, adjustable columns, dynamic width, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-resizing"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLeftRight} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Resizing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column resizing allows users to adjust column widths to better view and interact with data
        according to their preferences.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ColumnResizingDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Column resizing is enabled by adding the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">columnResizing</code> prop
          to the SimpleTable component. Users can resize columns by dragging the column dividers in
          the header row.
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Resizing Configuration</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">columnResizing</code>:
              Enable column resizing functionality
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnResizingPage;
