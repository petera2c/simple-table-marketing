import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import CustomCSSDemo from "../../components/demos/custom-theme/CustomThemeDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/custom-theme/CustomThemeDemo.tsx?raw";
import cssCode from "../../components/demos/custom-theme/CustomTheme.css?raw";

const CustomThemePage = () => {
  return (
    <>
      <SEO
        title={`Custom Theme - ${SEO_STRINGS.docs.title}`}
        description="Learn how to create a custom theme for Simple Table using CSS variables."
        keywords={`custom theme, styling, design, CSS variables, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/custom-theme"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-green-100 rounded-lg">
            <FontAwesomeIcon icon={faCode} className="text-green-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Custom Theme</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Beyond the built-in themes, Simple Table allows you to create completely custom themes using CSS variables. By
          defining your own theme with custom colors, spacing, and typography, you can perfectly match your
          application's design system.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CustomCSSDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Creating a Custom Theme
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">To create a custom theme for Simple Table, follow these steps:</p>

          <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
            <li>
              Create a CSS file with your theme variables using the{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">.theme-custom</code> class
            </li>
            <li>Import the CSS file into your application</li>
            <li>
              Apply the theme by passing{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">theme="custom"</code> to the SimpleTable
              component
            </li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Theme Variable Tips</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Use the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">.theme-custom</code> class to
                define your custom theme
              </li>
              <li>
                Define CSS variables with the{" "}
                <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">--st-</code> prefix
              </li>
              <li>Customize colors, spacing, fonts, and transitions</li>
              <li>Use direct hex values or color variables for consistent styling</li>
              <li>Test your theme with different features like column resizing and cell selection</li>
            </ul>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Component Implementation
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Here's how to apply a custom theme to your SimpleTable component:</p>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          CSS Variables Example
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Here are the CSS variables used to create the custom theme in the demo above:
          </p>

          <CodeBlock code={cssCode} />
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="/docs/theming"
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
            Previous: Theming
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default CustomThemePage;
