"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../../components/SEO";
import { SEO_STRINGS } from "../../../constants/strings/seo";
import RowHeightDemo from "../../../components/demos/RowHeightDemo";
import CodeBlock from "../../../components/CodeBlock";
import { useDemoCode } from "../../../hooks/useDemoCode";
import DocNavigationButtons from "../../../components/DocNavigationButtons";

export default function RowHeightPage() {
  const demoCode = useDemoCode("RowHeightDemo.txt");

  return (
    <>
      <SEO
        title={`Row Height - ${SEO_STRINGS.docs.title}`}
        description="Learn how to customize row heights in your tables using the Simple Table component."
        keywords={`row height, dynamic row sizing, table rows, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/row-height"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faArrowsUpDown} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Row Height</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The Simple Table component allows you to customize the height of rows to accommodate
        different types of content and design requirements. This page explains how to configure and
        use the row height feature.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <RowHeightDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Using Row Height
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          You can specify the height of rows in a Simple Table using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowHeight</code> property.
          This property accepts a numeric value representing the height in pixels.
        </p>

        <CodeBlock code={demoCode} />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Row Height Configuration
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Row Height Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowHeight</code>: Sets
              the height of all rows in pixels (numeric value)
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
