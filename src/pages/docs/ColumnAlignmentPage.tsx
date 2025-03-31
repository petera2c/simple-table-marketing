import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ColumnAlignmentDemo from "../../components/demos/ColumnAlignmentDemo";

const ColumnAlignmentPage = () => {
  return (
    <>
      <SEO
        title={`Column Alignment - ${SEO_STRINGS.docs.title}`}
        description="Learn how to control text alignment in Simple Table columns."
        keywords={`column alignment, text alignment, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-alignment"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faAlignLeft} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Alignment</h1>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <ColumnAlignmentDemo />
          </div>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Column alignment allows you to control how content is positioned within cells, improving the readability of
          your data. Different types of data benefit from different alignments.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-700 mb-4">
            Control the text alignment within columns using the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">align</code> property. This affects all
            cells in the column, including the header.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`const headers = [
  // Left alignment (default)
  { label: 'Name', accessor: 'name', width: 180 },
  
  // Center alignment
  { label: 'Status', accessor: 'status', width: 120, align: 'center' },
  
  // Right alignment (good for numbers)
  { label: 'Amount', accessor: 'amount', width: 100, align: 'right', type: 'number' }
];`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Alignment Best Practices</h3>
            <p className="text-gray-700 mb-3">For optimal readability, consider these alignment conventions:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <strong>Left alignment</strong>: Use for text data (names, descriptions, etc.)
              </li>
              <li>
                <strong>Right alignment</strong>: Use for numerical data (amounts, quantities, percentages)
              </li>
              <li>
                <strong>Center alignment</strong>: Use for short status labels, boolean values, or action buttons
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Consistent alignment across your table makes the data more scannable and helps users interpret the
            information more quickly.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/docs/column-pinning"
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
            Previous: Column Pinning
          </a>

          <a
            href="/docs/column-sorting"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Sorting
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

export default ColumnAlignmentPage;
