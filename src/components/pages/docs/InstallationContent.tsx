"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CodeBlock from "../../CodeBlock";
import DocNavigationButtons from "../../DocNavigationButtons";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";

const InstallationContent = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faDownload} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Installation</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Getting started with Simple Table is easy. This guide will walk you through the installation
        process and help you set up the library in your React project.
      </motion.p>

      <CodeBlock code={`${TECHNICAL_STRINGS.installation.npm}`} language="bash" />
      <CodeBlock code={`${TECHNICAL_STRINGS.installation.yarn}`} language="bash" />
      <CodeBlock code={`${TECHNICAL_STRINGS.installation.pnpm}`} language="bash" />

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Requirements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-700 mb-4">Simple Table requires the following peer dependencies:</p>

        <ul className="list-disc pl-8 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <li>React 16.8+ (Hooks support)</li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default InstallationContent;
