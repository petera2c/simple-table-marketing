"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import PaginationDemo from "@/components/demos/PaginationDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const PAGINATION_PROPS: PropInfo[] = [
  {
    key: "shouldPaginate",
    name: "shouldPaginate",
    required: false,
    description:
      "Enables pagination functionality for the table. When true, the table will display pagination controls and divide data into pages.",
    type: "boolean",
    example: `<SimpleTable
  shouldPaginate={true}
  // ... other props
/>`,
  },
  {
    key: "rowsPerPage",
    name: "rowsPerPage",
    required: false,
    description: "Number of rows to display per page. Default is 10.",
    type: "number",
    example: `<SimpleTable
  shouldPaginate={true}
  rowsPerPage={20}
  // ... other props
/>`,
  },
  {
    key: "onNextPage",
    name: "onNextPage",
    required: false,
    description: "Callback function triggered when user clicks the next page button.",
    type: "() => void",
    example: `const [currentPage, setCurrentPage] = useState(1);

<SimpleTable
  shouldPaginate={true}
  onNextPage={() => setCurrentPage(prev => prev + 1)}
  // ... other props
/>`,
  },
];

const PaginationContent = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faPager} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Pagination</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Pagination helps manage large datasets by dividing the table data into manageable pages.
        This improves performance, reduces visual clutter, and provides a better user experience for
        navigating through extensive data collections.
      </motion.p>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="PaginationDemo.txt"
          height="400px"
          link={SANDBOX_LIST["PaginationDemo.tsx"].url}
          Preview={PaginationDemo}
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Pagination
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enable pagination in Simple Table, you need to add the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            shouldPaginate
          </code>{" "}
          prop to your SimpleTable component. This will automatically handle pagination of your
          data.
        </p>

        <PropTable props={PAGINATION_PROPS} title="Pagination Configuration" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Pagination Features
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When pagination is enabled, Simple Table provides:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Automatic page navigation controls</li>
          <li>Page size selection</li>
          <li>Current page indicator</li>
          <li>Total pages display</li>
        </ul>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Customizing the Footer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          While Simple Table provides a default pagination footer, you can completely customize its
          appearance and functionality using the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
            footerRenderer
          </code>{" "}
          prop. This allows you to:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>Match your application&apos;s design system</li>
          <li>Add custom pagination controls and navigation</li>
          <li>Display summary statistics or totals</li>
          <li>Include action buttons or additional functionality</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">
            💡 Advanced Customization
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Learn how to create custom pagination footers with complete control over appearance and
            behavior. Visit the{" "}
            <a
              href="/docs/footer-renderer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Footer Renderer
            </a>{" "}
            documentation for detailed examples and API reference.
          </p>
        </div>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
};

export default PaginationContent;
