import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import BasicUsageDemo from "../../components/demos/BasicUsageDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/BasicUsageDemo.tsx?raw";

const BasicUsagePage = () => {
  return (
    <>
      <SEO
        title={`Basic Usage - ${SEO_STRINGS.docs.title}`}
        description="Learn the fundamentals of using Simple Table in your React application."
        keywords={`basic usage, simple table, react table, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/basic-usage"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faTable} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Basic Usage</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table is designed to be intuitive and straightforward to use. This guide covers the fundamental
          concepts and basic usage patterns to get you started with creating data tables in your React application.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BasicUsageDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Table Structure
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table follows a declarative approach with clear separation between headers and rows data. Here's a
            breakdown of the key components:
          </p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
            <li>
              <strong>Headers:</strong> Define your columns with label, accessor (for data lookup), and width
            </li>
            <li>
              <strong>Rows:</strong> Contains row metadata (like ID) and the actual row data
            </li>
          </ul>

          <CodeBlock code={demoCode} />
        </motion.div>
      </div>
    </>
  );
};

export default BasicUsagePage;
