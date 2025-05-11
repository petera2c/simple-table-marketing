"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import ThemesDemo from "@/components/demos/ThemesDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";

export default function ThemesContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faPalette} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Themes</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table can be fully customized to match your application's visual design. You can
        control everything from colors and spacing to borders and typography using theme options.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ThemesDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Theme Configuration
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To apply a theme to Simple Table, simply pass the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">theme</code> prop with one
          of the available theme options:
        </p>

        <CodeBlock demoCodeFilename="ThemesDemo.txt" />
        <CodeBlock demoCodeFilename="ThemesDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Available Themes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>light - Default light theme</li>
            <li>dark - Dark mode theme</li>
            <li>sky - Calm sky blue theme</li>
            <li>funky - Bold and colorful theme</li>
            <li>neutral - Subtle and balanced theme</li>
          </ul>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
