import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import CustomRenderersDemo from "../../components/demos/CustomRenderersDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/CustomRenderersDemo.tsx?raw";

const CustomRenderersPage = () => {
  return (
    <>
      <SEO
        title={`Custom Renderers - ${SEO_STRINGS.docs.title}`}
        description="Create custom cell, header, and row renderers to build a uniquely styled table experience."
        keywords={`custom renderers, custom cells, component overrides, advanced styling, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/custom-renderers"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faCode} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Custom Renderers</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Custom renderers allow you to completely control the appearance and behavior of cells, headers, and rows in your
        table. This powerful feature enables you to create tables with complex visualizations, interactive elements, and
        unique styling.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CustomRenderersDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Custom Cell Renderers
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Cell renderers allow you to customize how individual cells are displayed in your table. You can use them to
          add formatting, icons, badges, or any custom React components.
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Cell Renderer Props</h3>
          <p className="text-gray-700 mb-2">Your custom cell renderer receives these props:</p>
          <pre className="bg-white p-3 rounded border border-gray-200 text-sm overflow-x-auto">
            {`{
  value: any;            // The cell value
  rowData: Record<string, any>; // All data for the current row
  rowIndex: number;      // The index of the row
  column: {
    accessor: string;    // The column identifier
    label: string;       // The column label
    // ...other column properties
  };
  // ...additional context properties
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
        Custom Header Renderers
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Header renderers allow you to create custom column headers with additional functionality, such as filters,
          tooltips, or help text.
        </p>

        <CodeBlock code={demoCode} />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Custom Row Renderers
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 mb-4">
          Row renderers give you complete control over how entire rows are displayed, allowing for expandable rows,
          nested content, or conditional styling.
        </p>

        <CodeBlock code={demoCode} />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Advanced Examples
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactive Cells</h3>
        <p className="text-gray-700 mb-4">Create cells with interactive elements:</p>

        <CodeBlock code={demoCode} />

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Data Visualization</h3>
        <p className="text-gray-700 mb-4">Incorporate charts and visualizations in your cells:</p>

        <CodeBlock code={demoCode} />

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6 mt-6">
          <h3 className="font-bold text-gray-800 mb-2">Performance Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Use React.memo() to prevent unnecessary re-renders of complex custom renderers</li>
            <li>Load heavy visualizations lazily or only when they enter the viewport</li>
            <li>Consider the impact on scroll performance when using many complex renderers</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-between mt-12 pt-4 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <a
          href="/docs/cell-highlighting"
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
          Previous: Cell Highlighting
        </a>

        <a
          href="/docs/theming"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: Theming
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
    </>
  );
};

export default CustomRenderersPage;
