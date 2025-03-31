import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnPinningDemo from "../../components/demos/ColumnPinningDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ColumnPinningDemo.tsx?raw";

const ColumnPinningPage = () => {
  return (
    <>
      <SEO
        title={`Column Pinning - ${SEO_STRINGS.docs.title}`}
        description="Keep important columns visible while scrolling through wide tables."
        keywords={`column pinning, freeze columns, sticky columns, fixed columns, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-pinning"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faThumbtack} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Pinning</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column pinning (also known as freezing or sticking) allows you to keep important columns visible while
        horizontally scrolling through wide tables, making it easier to maintain context.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ColumnPinningDemo />
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
          To pin columns, simply add the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned</code>{" "}
          property to your header objects:
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Pinning Options</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned: "left"</code>: Pin the column to
              the left side
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">pinned: "right"</code>: Pin the column to
              the right side
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-between mt-12 pt-4 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a
          href="/docs/column-visibility"
          className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous: Column Visibility
        </a>

        <a
          href="/docs/column-alignment"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: Column Alignment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </>
  );
};

export default ColumnPinningPage;
