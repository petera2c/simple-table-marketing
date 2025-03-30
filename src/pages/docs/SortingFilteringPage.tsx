import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const SortingFilteringPage = () => {
  return (
    <>
      <SEO
        title={`Sorting & Filtering - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement sorting and filtering in Simple Table."
        keywords={`sorting, filtering, data organization, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/sorting-filtering"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-1">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faSort} className="text-blue-600 text-2xl" />
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faFilter} className="text-blue-600 text-2xl" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Sorting & Filtering</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful sorting and filtering capabilities to help users organize and find data
          efficiently. This page covers how to implement these features in your tables.
        </motion.p>

        {/* Sorting Section */}
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
            can control which columns are sortable and set the initial sort order.
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
      sortable: true // This column can be sorted (default is true)
    },
    { 
      label: 'Name', 
      accessor: 'name', 
      width: 180,
      sortable: true
    },
    { 
      label: 'Age', 
      accessor: 'age', 
      width: 100,
      sortable: true
    },
    { 
      label: 'Actions', 
      accessor: 'actions', 
      width: 100,
      sortable: false // This column cannot be sorted
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
  sortable: true,
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
  sortable: true,
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

        {/* Basic Filtering */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Basic Filtering
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table provides several ways to filter data. The simplest approach is using the global search feature:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
import { SimpleTable } from 'simple-table';

const FilteringExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div>
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-full max-w-md"
        />
      </div>
      
      {/* Table with global search */}
      <SimpleTable
        defaultHeaders={headers}
        rows={rows}
        enableGlobalFilter={true}
        globalFilterValue={searchTerm}
        onGlobalFilterChange={setSearchTerm}
      />
    </div>
  );
};`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            By default, the global filter searches across all columns. You can customize which columns are included in
            the search:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define which columns to include in search
const headers = [
  { 
    label: 'ID', 
    accessor: 'id',
    width: 80,
    filterable: false  // Exclude this column from global search
  },
  { 
    label: 'Name', 
    accessor: 'name', 
    width: 180,
    filterable: true   // Include this column in global search (default)
  },
  // Other columns...
];`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Column Filtering */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Column-specific Filtering
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-4">For more precise control, you can implement column-specific filters:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
import { SimpleTable } from 'simple-table';

const ColumnFilteringExample = () => {
  // State to track filter values for each column
  const [columnFilters, setColumnFilters] = useState({
    name: '',
    status: 'all'
  });
  
  // Update a specific column filter
  const updateColumnFilter = (column, value) => {
    setColumnFilters({
      ...columnFilters,
      [column]: value
    });
  };
  
  return (
    <div>
      {/* Column filter controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={columnFilters.name}
            onChange={(e) => updateColumnFilter('name', e.target.value)}
            className="mt-1 px-3 py-2 border rounded"
            placeholder="Filter by name..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={columnFilters.status}
            onChange={(e) => updateColumnFilter('status', e.target.value)}
            className="mt-1 px-3 py-2 border rounded"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      
      {/* Table with column filters */}
      <SimpleTable
        defaultHeaders={headers}
        rows={rows}
        enableColumnFilters={true}
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
      />
    </div>
  );
};`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Advanced Filtering */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Custom Filter Logic
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p className="text-gray-700 mb-4">
            You can provide custom filter functions to implement complex filtering logic:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define column with custom filter
const headers = [
  // ... other columns
  {
    label: 'Date',
    accessor: 'date',
    width: 150,
    filterConfig: {
      // Custom filter function
      filterFn: (rows, accessor, filterValue) => {
        if (!filterValue || filterValue.start === undefined || filterValue.end === undefined) {
          return rows;
        }
        
        return rows.filter(row => {
          const cellDate = new Date(row.rowData[accessor]);
          const startDate = new Date(filterValue.start);
          const endDate = new Date(filterValue.end);
          
          return cellDate >= startDate && cellDate <= endDate;
        });
      }
    }
  },
  {
    label: 'Tags',
    accessor: 'tags',
    width: 200,
    filterConfig: {
      // Filter function for array values
      filterFn: (rows, accessor, filterValue) => {
        if (!filterValue) return rows;
        
        return rows.filter(row => {
          const tags = row.rowData[accessor] || [];
          return tags.some(tag => 
            tag.toLowerCase().includes(filterValue.toLowerCase())
          );
        });
      }
    }
  }
];`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Server-side Processing</h3>
            <p className="text-gray-700">
              For large datasets, consider implementing server-side sorting and filtering. Simple Table supports this by
              allowing you to intercept sort and filter changes through{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onSortChange</code> and{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">onFilterChange</code> callbacks, which you
              can use to fetch filtered data from your API.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a
            href="/docs/cell-editing"
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
            Previous: Cell Editing
          </a>

          <a
            href="/docs/pagination"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Pagination
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

export default SortingFilteringPage;
