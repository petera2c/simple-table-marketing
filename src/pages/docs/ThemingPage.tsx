import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ThemingDemo from "../../components/demos/ThemingDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ThemingDemo.tsx?raw";

const ThemingPage = () => {
  return (
    <>
      <SEO
        title={`Theming - ${SEO_STRINGS.docs.title}`}
        description="Customize the appearance of Simple Table to match your application's design system."
        keywords={`theming, customization, styling, css, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/theming"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-purple-100 rounded-lg">
            <FontAwesomeIcon icon={faPalette} className="text-purple-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Theming</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table can be fully customized to match your application's visual design. You can control everything
          from colors and spacing to borders and typography using theme options.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ThemingDemo />
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
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            The simplest way to customize Simple Table is by providing a theme object to the <code>theme</code> prop:
          </p>

          <CodeBlock code={demoCode} />

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Theme Structure</h3>
            <p className="text-gray-700 mb-2">
              The theme object follows a structured format with nested properties for different parts of the table:
            </p>
            <pre className="bg-white p-3 rounded border border-gray-200 text-sm overflow-x-auto">
              {`{
  colors: {
    primary: "#3B82F6",
    background: {
      header: "#F9FAFB", 
      body: "#FFFFFF",
      footer: "#F9FAFB",
      ...
    },
    text: {
      header: "#111827",
      body: "#374151",
      ...
    },
    border: "#E5E7EB",
    ...
  },
  spacing: {
    cellPadding: "0.75rem 1rem",
    ...
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
    fontSize: {
      header: "0.875rem",
      body: "0.875rem",
      ...
    },
    fontWeight: {
      header: "600",
      body: "400",
      ...
    },
    ...
  },
  borders: {
    radius: "0.375rem",
    width: "1px",
    style: "solid",
    ...
  }
}`}
            </pre>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Dark Mode
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table supports dark mode with a dedicated theme structure. You can provide both light and dark themes
            and let the table respond to the user's system preferences:
          </p>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Custom Styling
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            For more advanced customization, you can target specific elements using CSS classes or custom style props:
          </p>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Tailwind CSS Integration
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table works great with Tailwind CSS. You can provide Tailwind classes to customize the appearance:
          </p>

          <CodeBlock code={demoCode} />

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Tailwind Tip</h3>
            <p className="text-gray-700">
              When using Tailwind with Simple Table, make sure that any utility classes you're using are included in
              your PurgeCSS configuration so they don't get removed in production builds.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a
            href="/docs/custom-renderers"
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
            Previous: Custom Renderers
          </a>

          <a
            href="/docs/advanced-usage"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Advanced Usage
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

export default ThemingPage;
