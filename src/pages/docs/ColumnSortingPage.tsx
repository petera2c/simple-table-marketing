import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnSortingDemo from "../../components/demos/ColumnSortingDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ColumnSortingDemo.tsx?raw";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const ColumnSortingPage = () => {
  return (
    <>
      <SEO
        title={`Column Sorting - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement column sorting in Simple Table."
        keywords={`column sorting, data sorting, sort ascending, sort descending, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-sorting"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faSort} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Column Sorting</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Column sorting allows users to organize data in ascending or descending order based on
        column values, making it easier to find and analyze information.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ColumnSortingDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Default Sorting Implementation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To enable sorting, simply add the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable: true</code>{" "}
          property to your header objects:
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Column Sorting Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">
                isSortable: true
              </code>
              : Enables sorting for a column
            </li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ColumnSortingPage;
