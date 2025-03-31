import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnAlignmentDemo from "../../components/demos/ColumnAlignmentDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ColumnAlignmentDemo.tsx?raw";

const ColumnAlignmentPage = () => {
  return (
    <>
      <SEO
        title={`Column Alignment - ${SEO_STRINGS.docs.title}`}
        description="Control the horizontal alignment of text and content in your Simple Table columns."
        keywords={`column alignment, text alignment, center align, right align, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-alignment"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faAlignCenter} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Alignment</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Column alignment allows you to control how content is positioned horizontally within each column, improving
          readability and visual organization of your data.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ColumnAlignmentDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
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
          <p className="text-gray-700 mb-4">
            Control column alignment by setting the <code>align</code> property in your header definitions:
          </p>

          <CodeBlock code={demoCode} />

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Alignment Options</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "left"</code> (default):
                Left-align content
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "center"</code>: Center content
                horizontally
              </li>
              <li>
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align: "right"</code>: Right-align
                content
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Best Practices
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Consider these guidelines for optimal column alignment:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Text Content</h3>
              <p className="text-gray-700">
                Left-align text content such as names, descriptions, and other textual data for easier reading.
              </p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Numeric Values</h3>
              <p className="text-gray-700">
                Right-align numbers, currencies, and percentages to make decimal points align vertically.
              </p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Headers</h3>
              <p className="text-gray-700">Match the header alignment with its column content for consistency.</p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Status Indicators</h3>
              <p className="text-gray-700">
                Center-align status badges, icons, and other indicator elements to create visual focus.
              </p>
            </div>
          </div>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="/docs/column-pinning"
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
            Previous: Column Pinning
          </a>

          <a
            href="/docs/column-properties"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Properties
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
      </div>
    </>
  );
};

export default ColumnAlignmentPage;
