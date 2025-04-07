import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import NestedHeadersDemo from "../../components/demos/NestedHeadersDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/NestedHeadersDemo.tsx?raw";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const NestedHeadersPage = () => {
  return (
    <>
      <SEO
        title={`Nested Headers - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement nested headers and multi-level columns in Simple Table."
        keywords={`nested headers, column grouping, hierarchical headers, multi-level columns, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/nested-headers"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faLayerGroup} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Nested Headers</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Nested headers allow you to create hierarchical column structures by grouping related
        columns under a parent header, making complex data more organized and easier to understand.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <NestedHeadersDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Implementation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To create nested headers, add a{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">children</code> array to
          your parent header object, containing the child column definitions:
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6 mt-6">
          <h3 className="font-bold text-gray-800 mb-2">Key Points About Nested Headers</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Parent headers serve as container columns and typically don't display cell data</li>
            <li>
              Child columns can have all the same properties as regular columns (sorting, filtering,
              custom renderers, etc.)
            </li>
            <li>You can have multiple levels of nesting by adding children to child columns</li>
            <li>Width of the parent column will automatically adjust to fit all child columns</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Common Use Cases
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <strong>Grouped Data Categories:</strong> Organize related columns like "Personal
            Information", "Contact Details", etc.
          </li>
          <li>
            <strong>Time-based Data:</strong> Group columns by time periods (Q1, Q2, Q3, Q4) with
            child columns for specific metrics
          </li>
          <li>
            <strong>Financial Reports:</strong> Group columns for "Revenue", "Expenses", "Profit"
            with subcategories
          </li>
          <li>
            <strong>Test Scores:</strong> As shown in the example, group different subject scores
            under a single parent
          </li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default NestedHeadersPage;
