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
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">isSortable</code> property and set the
            initial sort order.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
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

  // Set initial sort configuration
  const [sortConfig, setSortConfig] = useState({
    accessor: 'name',
    direction: 'asc'
  });

  // Handle sort changes
  const handleSortChange = (newSortConfig) => {
    setSortConfig(newSortConfig);
    console.log('Sorting by:', newSortConfig.accessor, 'in', newSortConfig.direction, 'order');
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enableSorting={true} // Default is true
      defaultSortBy={sortConfig}
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

        {/* Advanced Sorting Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Custom Sorting Logic
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            For more complex data types, you can provide custom sorting functions to determine how the data should be
            ordered:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Column with custom sorting logic
{
  label: 'Date',
  accessor: 'date',
  width: 150,
  isSortable: true,
  sortConfig: {
    // Custom comparator function for sorting
    comparator: (a, b, direction) => {
      const dateA = new Date(a).getTime();
      const dateB = new Date(b).getTime();
      
      // Return comparison based on sort direction
      return direction === 'asc' 
        ? dateA - dateB 
        : dateB - dateA;
    }
  }
},

// Column with custom sort value extraction
{
  label: 'Name',
  accessor: 'name',
  width: 180,
  isSortable: true,
  sortConfig: {
    // Extract the value to sort by
    sortValueGetter: (value) => {
      // Sort by last name instead of full name
      return value.split(' ')[1];
    }
  }
}`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Multi-column Sorting */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Multi-column Sorting
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table supports sorting by multiple columns simultaneously. Users can hold Shift while clicking column
            headers to add additional sort criteria.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Enable multi-column sorting
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  enableMultiSort={true}
  defaultMultiSortBy={[
    { accessor: 'department', direction: 'asc' },
    { accessor: 'name', direction: 'asc' }
  ]}
  onMultiSortChange={(newMultiSortConfig) => {
    console.log('New multi-sort config:', newMultiSortConfig);
  }}
/>`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            The order of sort operations matters: data is sorted by the first column in the array, then by the second
            column for rows with equal values in the first column, and so on.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="/docs/column-alignment"
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
            Previous: Column Alignment
          </a>

          <a
            href="/docs/cell-editing"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Cell Editing
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

export default ColumnSortingPage;
