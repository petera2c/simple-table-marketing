import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { UI_STRINGS } from "../../constants/strings/ui";
import { TECHNICAL_STRINGS } from "../../constants/strings/technical";
import QuickStartDemo from "../../components/demos/QuickStartDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/QuickStartDemo.tsx?raw";

const QuickStartPage = () => {
  return (
    <>
      <SEO
        title={`Quick Start - ${SEO_STRINGS.docs.title}`}
        description="Get up and running with Simple Table quickly."
        keywords={`quick start, react table, setup, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/quick-start"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Quick Start</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This guide will help you quickly set up Simple Table in your React project. In just a few minutes, you'll have
          a fully functional data table.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <QuickStartDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {UI_STRINGS.docs.cssSetup.title}
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">{UI_STRINGS.docs.cssSetup.description}</p>

          <CodeBlock code={TECHNICAL_STRINGS.css.import} language="js" />

          <p className="text-gray-700">{UI_STRINGS.docs.cssSetup.note}</p>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Creating a Simple Table
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Here's a minimal example to get you started with Simple Table:</p>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.div
          className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="font-bold text-gray-800 mb-2">Pro Tip</h3>
          <p className="text-gray-700">
            Simple Table automatically handles the styling of alternating rows, borders, and hover states. You can
            customize these later with themes, but the defaults look great out of the box!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="/docs/installation"
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
            Previous: Installation
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

export default QuickStartPage;
