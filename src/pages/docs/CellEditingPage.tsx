import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import CellEditingDemo from "../../components/demos/CellEditingDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/CellEditingDemo.tsx?raw";

const CellEditingPage = () => {
  return (
    <>
      <SEO
        title={`Cell Editing - ${SEO_STRINGS.docs.title}`}
        description="Make your tables interactive with cell editing capabilities in Simple Table."
        keywords={`cell editing, editable cells, data input, form validation, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/cell-editing"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faEdit} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Cell Editing</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table provides powerful cell editing capabilities, allowing users to modify data directly within the
        table interface. This creates a more interactive and efficient user experience for data entry and management.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CellEditingDemo />
      </motion.div>

      {/* Basic Editing Setup Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Editing Setup
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">To enable cell editing in Simple Table, you need to:</p>

        <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
          <li>
            Add the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isEditable: true</code> property to
            the columns you want to make editable
          </li>
          <li>
            Provide an <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onCellEdit</code> handler to
            manage the data updates
          </li>
        </ol>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Cell Editing Properties</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isEditable: true</code>: Makes a column
              editable
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onCellEdit</code>: Callback function to
              handle cell edits
            </li>
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
          href="/docs/column-sorting"
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
          Previous: Column Sorting
        </a>

        <a
          href="/docs/cell-highlighting"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: Cell Highlighting
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

export default CellEditingPage;
