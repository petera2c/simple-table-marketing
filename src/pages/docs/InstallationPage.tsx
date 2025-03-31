import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { TECHNICAL_STRINGS } from "../../constants/strings/technical";
import CodeBlock from "../../components/CodeBlock";

const InstallationPage = () => {
  return (
    <>
      <SEO
        title={`Installation - ${SEO_STRINGS.docs.title}`}
        description="How to install and set up Simple Table in your React project."
        keywords={`installation, setup, npm, yarn, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/installation"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faCode} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Installation</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Getting started with Simple Table is easy. This guide will walk you through the installation process and help
          you set up the library in your React project.
        </motion.p>

        <CodeBlock
          code={`# npm
${TECHNICAL_STRINGS.installation.npm}

# yarn
${TECHNICAL_STRINGS.installation.yarn}

# pnpm
${TECHNICAL_STRINGS.installation.pnpm}`}
          language="bash"
        />

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Requirements
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-700 mb-4">Simple Table requires the following peer dependencies:</p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <li>React 16.8+ (Hooks support)</li>
          </ul>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div></div>
          <a
            href="/docs/quick-start"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Quick Start
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

export default InstallationPage;
