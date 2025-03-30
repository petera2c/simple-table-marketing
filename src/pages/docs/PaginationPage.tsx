import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const PaginationPage = () => {
  return (
    <>
      <SEO
        title={`Pagination - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement pagination in Simple Table for handling large datasets."
        keywords={`pagination, data tables, react tables, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/pagination"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faPager} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Pagination</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pagination is essential for handling large datasets efficiently. Simple Table provides flexible pagination
          options to help you manage data presentation in a user-friendly way.
        </motion.p>

        {/* Basic Pagination Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Pagination
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            To enable pagination in Simple Table, you need to set up a few pagination-related props. Here's a basic
            example:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
import { SimpleTable } from 'simple-table';

const BasicPaginationExample = () => {
  // Pagination state
  const [pagination, setPagination] = useState({
    pageIndex: 0,  // Current page (0-based)
    pageSize: 10,  // Items per page
  });
  
  // Handle pagination changes
  const handlePaginationChange = (newPagination) => {
    setPagination(newPagination);
    console.log(
      \`Page changed to \${newPagination.pageIndex + 1}, 
      showing \${newPagination.pageSize} items per page\`
    );
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enablePagination={true}
      pagination={pagination}
      onPaginationChange={handlePaginationChange}
    />
  );
};`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">Simple Table's pagination component includes:</p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
            <li>Previous and next page buttons</li>
            <li>Page number selector</li>
            <li>Page size selector</li>
            <li>Current page and total pages display</li>
          </ul>
        </motion.div>

        {/* Client-side Pagination Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Client-side Pagination
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            With client-side pagination, all data is loaded at once, and Simple Table handles the pagination logic
            internally:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Client-side pagination with all data loaded at once
<SimpleTable
  defaultHeaders={headers}
  rows={allRows}  // All data is provided upfront
  enablePagination={true}
  pagination={{
    pageIndex: 0,
    pageSize: 10
  }}
  paginationMode="client"  // Default is "client"
  onPaginationChange={handlePaginationChange}
/>`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">When to Use Client-side Pagination</h3>
            <p className="text-gray-700">Client-side pagination is ideal for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Smaller datasets (typically under 1,000 rows)</li>
              <li>When all data needs to be available for operations like global filtering or sorting</li>
              <li>When you want to minimize network requests</li>
              <li>Offline applications where all data is available locally</li>
            </ul>
          </div>
        </motion.div>

        {/* Server-side Pagination Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Server-side Pagination
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Server-side pagination is essential for large datasets. With this approach, you fetch only the data needed
            for the current page:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState, useEffect } from 'react';
import { SimpleTable } from 'simple-table';

const ServerPaginationExample = () => {
  // State to store current page data
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  
  // Pagination state
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  // Fetch data when pagination changes
  useEffect(() => {
    const fetchPageData = async () => {
      setLoading(true);
      try {
        // Calculate offset based on pagination
        const offset = pagination.pageIndex * pagination.pageSize;
        
        // API call with pagination parameters
        const response = await fetch(
          \`https://api.example.com/users?offset=\${offset}&limit=\${pagination.pageSize}\`
        );
        const result = await response.json();
        
        // Update state with paginated data and total count
        setPageData(result.data.map(item => ({
          rowMeta: { rowId: item.id },
          rowData: item
        })));
        setTotalRows(result.totalCount);
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [pagination.pageIndex, pagination.pageSize]);

  // Handle pagination changes
  const handlePaginationChange = (newPagination) => {
    setPagination(newPagination);
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={pageData}  // Only current page data
      enablePagination={true}
      pagination={{
        ...pagination,
        pageCount: Math.ceil(totalRows / pagination.pageSize),
        totalRows: totalRows
      }}
      paginationMode="server"
      onPaginationChange={handlePaginationChange}
      loading={loading}
    />
  );
};`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Server Pagination Best Practices</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Always include a loading indicator to show when data is being fetched</li>
              <li>Provide the total row count from your API for accurate page count calculation</li>
              <li>Consider adding debounce to pagination changes to prevent excessive API calls</li>
              <li>When using server-side pagination, use server-side sorting and filtering as well for consistency</li>
            </ul>
          </div>
        </motion.div>

        {/* Customization Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Customizing Pagination
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table allows you to customize various aspects of the pagination component:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  // ... other props
  
  // Customize available page sizes
  pageSizeOptions={[10, 25, 50, 100]}
  
  // Customize pagination position
  paginationPosition="bottom"  // Options: "top", "bottom", "both"
  
  // Use a custom pagination component
  paginationComponent={MyCustomPagination}
  
  // Customize pagination labels
  paginationLabels={{
    showing: "Displaying",
    of: "of",
    entries: "records",
    next: "Next",
    previous: "Prev",
    rowsPerPage: "Show",
    gotoPage: "Go to page"
  }}
/>`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">You can also create a completely custom pagination component:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';

// Custom pagination component
const CustomPagination = ({ 
  pagination, 
  onPageChange, 
  onPageSizeChange, 
  pageSizeOptions 
}) => {
  const { pageIndex, pageSize, pageCount, totalRows } = pagination;
  
  return (
    <div className="flex items-center justify-between p-4 border-t">
      <div className="flex items-center space-x-2">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={e => onPageSizeChange(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>
      
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(0)}
          disabled={pageIndex === 0}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ⟪
        </button>
        <button
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ⟨
        </button>
        
        {Array.from({ length: Math.min(5, pageCount) }).map((_, i) => {
          const pageNum = pageIndex - 2 + i;
          if (pageNum >= 0 && pageNum < pageCount) {
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={\`px-3 py-1 border rounded \${
                  pageNum === pageIndex ? 'bg-blue-500 text-white' : ''
                }\`}
              >
                {pageNum + 1}
              </button>
            );
          }
          return null;
        })}
        
        <button
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex >= pageCount - 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ⟩
        </button>
        <button
          onClick={() => onPageChange(pageCount - 1)}
          disabled={pageIndex >= pageCount - 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ⟫
        </button>
      </div>
      
      <div>
        Showing {pageIndex * pageSize + 1} to {Math.min((pageIndex + 1) * pageSize, totalRows)} of {totalRows}
      </div>
    </div>
  );
};

// In your SimpleTable component
<SimpleTable
  // ... other props
  paginationComponent={CustomPagination}
/>`}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a
            href="/docs/sorting-filtering"
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
            Previous: Sorting & Filtering
          </a>

          <a
            href="/docs/responsive"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Responsive Design
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

export default PaginationPage;
