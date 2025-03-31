import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChartLine } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import QuickStartDemo from "../../components/demos/QuickStartDemo";

const PerformancePage = () => {
  return (
    <>
      <SEO
        title={`Performance Optimization - ${SEO_STRINGS.docs.title}`}
        description="Learn how to optimize Simple Table for handling large datasets efficiently."
        keywords={`performance, optimization, large datasets, virtual scrolling, memoization, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/performance"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Performance Optimization</h1>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <QuickStartDemo />
          </div>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table is optimized for performance, but when working with very large datasets or complex tables,
          additional optimization techniques can help maintain a smooth user experience.
        </motion.p>

        {/* Virtualization Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Virtualization
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Virtualization is a technique that renders only the visible rows in the viewport, dramatically improving
            performance with large datasets:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

// Enable virtualization for large datasets
<SimpleTable
  defaultHeaders={headers}
  rows={largeDataset} // Even with thousands of rows
  enableVirtualization={true}
  virtualizedOptions={{
    height: 500,             // Fixed height container 
    overscan: 10,            // Number of rows to render above/below viewport
    estimatedRowHeight: 40,  // Helps with initial rendering calculation
    onScroll: (scrollInfo) => console.log('Scrolled to:', scrollInfo)
  }}
/>`}</code>
            </pre>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">When to Use Virtualization</h3>
            <p className="text-gray-700">Virtualization is recommended when:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Your table contains more than 100 rows</li>
              <li>Rows have complex content that's expensive to render</li>
              <li>You notice scrolling performance issues</li>
              <li>You need to support lower-end devices</li>
            </ul>
          </div>
        </motion.div>

        {/* Lazy Loading Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Lazy Loading & Infinite Scrolling
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Instead of loading all data at once, you can fetch data incrementally as the user scrolls:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState, useEffect, useCallback } from 'react';
import { SimpleTable } from 'simple-table';

const InfiniteScrollTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  
  // Function to fetch more data
  const fetchMoreData = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      // API call to get next page of data
      const response = await fetch(
        \`https://api.example.com/data?page=\${page}&limit=20\`
      );
      const newData = await response.json();
      
      // Format for SimpleTable
      const newRows = newData.items.map(item => ({
        rowMeta: { rowId: item.id },
        rowData: item
      }));
      
      // Append new rows
      setRows(prevRows => [...prevRows, ...newRows]);
      
      // Update state for next fetch
      setPage(page + 1);
      setHasMore(newData.hasMore);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);
  
  // Initial data fetch
  useEffect(() => {
    fetchMoreData();
  }, []);
  
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enableVirtualization={true}
      virtualizedOptions={{
        height: 600,
        onScrollEnd: fetchMoreData  // Fetch more when reaching end
      }}
      loading={loading}
      loadingMessage="Loading more data..."
      infiniteScroll={{
        enabled: true,
        hasMore: hasMore,
        loadingIndicator: 'Fetching more rows...',
        scrollThreshold: 0.8  // Load more when 80% scrolled
      }}
    />
  );
};`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Data Memoization Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Data Memoization
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">To prevent unnecessary re-renders, use React's memoization techniques:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useMemo, useCallback } from 'react';
import { SimpleTable } from 'simple-table';

const OptimizedTable = ({ data, filters, onRowSelect }) => {
  // Memoize the headers to prevent re-creation on each render
  const headers = useMemo(() => [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    // ... other headers
  ], []);
  
  // Memoize the filtered rows to only recompute when data or filters change
  const filteredRows = useMemo(() => {
    return data
      .filter(item => {
        // Apply filters
        if (filters.minAge && item.age < filters.minAge) return false;
        if (filters.category && item.category !== filters.category) return false;
        return true;
      })
      .map(item => ({
        rowMeta: { rowId: item.id },
        rowData: item
      }));
  }, [data, filters.minAge, filters.category]);
  
  // Memoize callback functions
  const handleRowSelect = useCallback((rowId) => {
    onRowSelect(rowId);
  }, [onRowSelect]);
  
  // Memoize row class computation
  const getRowClassName = useCallback((row) => {
    return row.rowData.status === 'active' ? 'bg-green-50' : '';
  }, []);
  
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={filteredRows}
      onRowSelect={handleRowSelect}
      getRowClassName={getRowClassName}
    />
  );
};

// Consider using React.memo for the entire component
export default React.memo(OptimizedTable);`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Cell Rendering Optimization */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Cell Rendering Optimization
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            For complex cell content, use memoized cell renderers to avoid expensive re-renders:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { memo } from 'react';
import { SimpleTable } from 'simple-table';

// Create memoized cell components
const StatusCell = memo(({ value }) => {
  const bgColor = value === 'active' ? 'bg-green-100' : 
                  value === 'pending' ? 'bg-yellow-100' : 'bg-red-100';
  
  const textColor = value === 'active' ? 'text-green-800' : 
                   value === 'pending' ? 'text-yellow-800' : 'text-red-800';
  
  return (
    <span className={\`px-2 py-1 rounded-full text-xs font-medium \${bgColor} \${textColor}\`}>
      {value}
    </span>
  );
});

// Chart cell that only re-renders when its data changes
const ChartCell = memo(({ value }) => {
  // Potentially expensive visualization component
  return <MiniChart data={value} width={100} height={40} />;
});

// Use in your table
const OptimizedCellRenderingTable = () => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      getCellContent={(value, header, row) => {
        // Render different cell components based on column
        if (header.id === 'status') {
          return <StatusCell value={value} />;
        }
        
        if (header.id === 'trend') {
          return <ChartCell value={row.rowData.trendData} />;
        }
        
        return value; // Default rendering for simple cells
      }}
    />
  );
};`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Pagination vs Virtualization */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Pagination vs. Virtualization
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-4">Choosing between pagination and virtualization depends on your use case:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Pagination</h3>
              <p className="text-gray-700 mb-4">
                Shows a fixed number of rows at a time with controls to navigate between pages.
              </p>
              <h4 className="font-semibold text-gray-800 mb-1">Best for:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Server-side data fetching</li>
                <li>Structured browsing of data</li>
                <li>Traditional database interfaces</li>
                <li>When exact positioning matters</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Virtualization</h3>
              <p className="text-gray-700 mb-4">
                Renders only visible rows in a scrollable container for better performance.
              </p>
              <h4 className="font-semibold text-gray-800 mb-1">Best for:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Large datasets loaded on the client</li>
                <li>Continuous scrolling experience</li>
                <li>When memory usage is a concern</li>
                <li>Modern, app-like interfaces</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Combined Approach</h3>
            <p className="text-gray-700">You can combine both strategies for the best of both worlds:</p>
            <div className="bg-gray-800 text-white p-4 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <pre className="whitespace-pre-wrap">
                <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={currentPageRows}
  enablePagination={true}
  pagination={pagination}
  onPaginationChange={handlePaginationChange}
  enableVirtualization={true}
  virtualizedOptions={{
    height: 500,
    overscan: 5,
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Advanced Optimization Strategies */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Advanced Optimization Strategies
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <ul className="space-y-4 mb-6">
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Deferred Rendering</h3>
              <p className="text-gray-700">Render complex cells only after the table's initial render is complete:</p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`const DeferredTable = () => {
  const [renderComplexCells, setRenderComplexCells] = useState(false);
  
  useEffect(() => {
    // Defer rendering of complex cells
    const timer = setTimeout(() => {
      setRenderComplexCells(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SimpleTable
      // ... other props
      getCellContent={(value, header, row) => {
        if (header.id === 'chart' && !renderComplexCells) {
          return <div className="h-10 w-full bg-gray-100 animate-pulse"></div>;
        }
        
        if (header.id === 'chart') {
          return <ComplexChartCell data={value} />;
        }
        
        return value;
      }}
    />
  );
};`}</code>
                </pre>
              </div>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Web Workers</h3>
              <p className="text-gray-700">Use web workers for expensive data operations to prevent UI blocking:</p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`// In a separate file: sortWorker.js
self.onmessage = function(e) {
  const { data, sortConfig } = e.data;
  
  // Perform expensive sorting operation
  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (sortConfig.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  // Send sorted data back to main thread
  self.postMessage(sortedData);
};

// In your component
const WorkerOptimizedTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [sortConfig, setSortConfig] = useState(null);
  const workerRef = useRef(null);
  
  useEffect(() => {
    // Initialize worker
    workerRef.current = new Worker('sortWorker.js');
    
    // Listen for results
    workerRef.current.onmessage = (e) => {
      const sortedData = e.data.map(item => ({
        rowMeta: { rowId: item.id },
        rowData: item
      }));
      setRows(sortedData);
    };
    
    return () => workerRef.current.terminate();
  }, []);
  
  const handleSort = (columnId, direction) => {
    setSortConfig({ key: columnId, direction });
    
    // Send data to worker
    if (workerRef.current) {
      workerRef.current.postMessage({
        data: rows.map(r => r.rowData),
        sortConfig: { key: columnId, direction }
      });
    }
  };
  
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      onSort={handleSort}
      sortConfig={sortConfig}
    />
  );
};`}</code>
                </pre>
              </div>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Throttle & Debounce</h3>
              <p className="text-gray-700">Optimize event handlers for scroll, search, and resize events:</p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`import { debounce, throttle } from 'lodash';

const ResponsiveTable = () => {
  // Debounce search to reduce number of filtering operations
  const handleSearch = useCallback(
    debounce((searchTerm) => {
      // Filter data based on search term
      setFilteredRows(/* filtering logic */);
    }, 300),
    []
  );
  
  // Throttle scroll handlers
  const handleScroll = useCallback(
    throttle((scrollInfo) => {
      // Handle scroll event 
      console.log('Scrolled to:', scrollInfo);
    }, 100),
    []
  );
  
  return (
    <SimpleTable
      // ... other props
      onSearch={handleSearch}
      virtualizedOptions={{
        onScroll: handleScroll
      }}
    />
  );
};`}</code>
                </pre>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Performance Monitoring */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Performance Monitoring
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <p className="text-gray-700 mb-4">
            To identify potential performance issues, Simple Table provides built-in performance tracking:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  // ... other props
  enablePerformanceTracking={true}
  onPerformanceReport={(metrics) => {
    console.log('Table Performance:', metrics);
    
    // Example metrics object:
    // {
    //   initialRenderTime: 124,      // ms to first render
    //   rowRenderAverage: 0.8,       // avg ms per row render
    //   sortingTime: 56,             // ms to perform sort
    //   filteringTime: 32,           // ms to filter data
    //   scrollFPS: 58,               // frames per second during scroll
    //   memoryUsage: 2.4             // approximate MB used (if available)
    // }
    
    // Log to your analytics or performance monitoring system
    if (metrics.rowRenderAverage > 2) {
      logPerformanceWarning('Slow row rendering detected');
    }
  }}
/>`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Performance Checklist</h3>
            <p className="text-gray-700 mb-2">When optimizing your tables, consider:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Is the table re-rendering unnecessarily?</li>
              <li>Are complex cell renderers optimized with memoization?</li>
              <li>Could virtualization improve rendering time?</li>
              <li>Is server-side pagination a better approach for your data size?</li>
              <li>Are callbacks and derived data properly memoized?</li>
              <li>Could web workers help with expensive computations?</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <a
            href="/docs/accessibility"
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
            Previous: Accessibility
          </a>

          <a
            href="/docs/api-reference"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: API Reference
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

export default PerformancePage;
