import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ColumnSortingPage = () => {
  return (
    <>
      <SEO
        title={`Column Sorting - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement sorting in Simple Table."
        keywords={`sorting, column sorting, data organization, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/column-sorting"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faSort} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Column Sorting</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful sorting capabilities to help users organize data efficiently. This page covers
          how to implement sorting features in your tables.
        </motion.p>

        {/* Basic Sorting Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Sorting
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Sorting in Simple Table is enabled by default and allows users to click on column headers to sort data. You
            can control which columns are sortable using the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable</code> property.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';

const SortingExample = () => {
  // Define headers with sorting configuration
  const headers = [
    { 
      label: 'ID', 
      accessor: 'id', 
      width: 80,
      isSortable: true // This column can be sorted (default is false)
    },
    { 
      label: 'Name', 
      accessor: 'name', 
      width: 180,
      isSortable: true
    },
    { 
      label: 'Age', 
      accessor: 'age', 
      width: 100,
      isSortable: true
    },
    { 
      label: 'Actions', 
      accessor: 'actions', 
      width: 100,
      isSortable: false // This column cannot be sorted
    }
  ];

  // Handle sort changes
  const handleSortChange = (accessor, direction) => {
    console.log('Sorting by:', accessor, 'in', direction, 'order');
    // You can implement your own sort logic here
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enableSorting={true} // Default is true
      onSortChange={handleSortChange}
    />
  );
};`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Sorting Behavior</h3>
            <p className="text-gray-700">When a user clicks a column header:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>First click: Sort ascending</li>
              <li>Second click: Sort descending</li>
              <li>Third click: Remove sorting (return to default order)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ColumnSortingPage;
