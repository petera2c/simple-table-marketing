import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faTablet, faDesktop } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ResponsivePage = () => {
  return (
    <>
      <SEO
        title={`Responsive Design - ${SEO_STRINGS.docs.title}`}
        description="Learn how to create responsive tables that work beautifully across all devices with SimpleTable."
        keywords={`responsive tables, mobile-friendly tables, adaptive tables, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/responsive"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FontAwesomeIcon icon={faMobile} className="text-indigo-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Responsive Design</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creating tables that work well on all devices can be challenging. Simple Table provides several strategies for
          responsive design to ensure your data is accessible and usable across all screen sizes.
        </motion.p>

        {/* Responsive Mode Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Responsive Modes
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table provides multiple responsive strategies that can be enabled with a single prop:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

// Choose the responsive mode that best fits your use case
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  responsiveMode="scroll"  // Options: "scroll", "stack", "collapse", "hide", "custom"
/>`}</code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMobile} className="text-indigo-500 mr-3" />
                <h3 className="font-bold text-gray-800">Scroll Mode</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Keeps the table structure intact but adds horizontal scrolling when the content doesn't fit.
              </p>
              <div className="bg-indigo-50 p-3 rounded text-sm text-indigo-800">
                Best for: Tables with many columns that need to retain their structure.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMobile} className="text-indigo-500 mr-3" />
                <h3 className="font-bold text-gray-800">Stack Mode</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Restructures the table as a series of cards on smaller screens, with headers stacked vertically with
                their values.
              </p>
              <div className="bg-indigo-50 p-3 rounded text-sm text-indigo-800">
                Best for: Data-heavy tables where vertical scrolling is preferable to horizontal.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMobile} className="text-indigo-500 mr-3" />
                <h3 className="font-bold text-gray-800">Collapse Mode</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Shows only the most important columns by default, with a toggle to expand and see all data.
              </p>
              <div className="bg-indigo-50 p-3 rounded text-sm text-indigo-800">
                Best for: Tables where some columns have higher priority than others.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMobile} className="text-indigo-500 mr-3" />
                <h3 className="font-bold text-gray-800">Hide Mode</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Automatically hides less important columns as the screen size decreases based on priority.
              </p>
              <div className="bg-indigo-50 p-3 rounded text-sm text-indigo-800">
                Best for: Tables where you can determine column importance and hide non-essential columns.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Mode Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Horizontal Scroll Mode
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            The scroll mode wraps your table in a container that allows horizontal scrolling when the content doesn't
            fit:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  responsiveMode="scroll"
  scrollContainerClassName="max-h-[500px]"  // Optional: Limit vertical height too
/>`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Scroll Mode Tips</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Consider freezing important columns using the <code className="bg-gray-100 px-1 rounded">pinned</code>{" "}
                property
              </li>
              <li>Add a visual indicator that the table can be scrolled horizontally</li>
              <li>
                Use <code className="bg-gray-100 px-1 rounded">scrollContainerClassName</code> to customize the scroll
                container
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Stack Mode Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Stack Mode (Card View)
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            In stack mode, each row is transformed into a card-like structure on small screens, with headers and values
            displayed vertically:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  responsiveMode="stack"
  stackModeBreakpoint="md"  // When to switch to stack mode: sm, md, lg, xl
  stackModeStyles={{
    card: "bg-white rounded-lg shadow-sm p-4 mb-4",
    labelCell: "font-semibold text-gray-600",
    valueCell: "text-gray-800",
    row: "grid grid-cols-2 gap-2 mb-2"
  }}
/>`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">When to Use Stack Mode</h3>
            <p className="text-gray-700">Stack mode is particularly effective for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Detail-oriented data where all fields need to be visible</li>
              <li>Forms that display submitted data</li>
              <li>User profiles or detailed information pages</li>
              <li>When horizontal space is very limited</li>
            </ul>
          </div>
        </motion.div>

        {/* Column Priority Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Column Priority and Visibility
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">
            For "collapse" and "hide" modes, you can define which columns are most important by setting priority levels:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define headers with responsive priority
const headers = [
  { 
    id: 'id', 
    label: 'ID', 
    responsivePriority: 1  // Highest priority, always visible
  },
  { 
    id: 'name', 
    label: 'Name', 
    responsivePriority: 2  // High priority
  },
  { 
    id: 'email', 
    label: 'Email', 
    responsivePriority: 3  // Medium priority
  },
  { 
    id: 'phone', 
    label: 'Phone', 
    responsivePriority: 4  // Lower priority, hidden first
  },
  // Columns without priority will be treated as lowest priority
];

// Use with hide mode
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  responsiveMode="hide"
  responsiveHiddenBreakpoints={{
    sm: 4,  // On small screens, hide columns with priority 4 or higher
    md: 5,  // On medium screens, hide columns with priority 5 or higher
    lg: 6   // On large screens, hide columns with priority 6 or higher
  }}
/>

// Or use with collapse mode
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  responsiveMode="collapse"
  collapsedColumnLimit={2}  // Show only 2 columns by default on mobile
  collapseToggleLabel="Show all details"  // Customize toggle label
/>`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Custom Responsive Solutions Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Custom Responsive Solutions
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-4">
            For complete control over the responsive behavior, you can use the custom mode with a render function:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { useMediaQuery } from '../../hooks/useMediaQuery';

const ResponsiveTableExample = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      responsiveMode="custom"
      customResponsiveRender={({ headers, rows, renderDefaultTable }) => {
        // For mobile devices, render a completely custom view
        if (isMobile) {
          return (
            <div className="space-y-4">
              {rows.map(row => (
                <div key={row.rowMeta.rowId} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{row.rowData.name}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {headers
                      .filter(header => ['email', 'status'].includes(header.id))
                      .map(header => (
                        <div key={header.id} className="flex justify-between">
                          <span className="text-gray-600">{header.label}:</span>
                          <span className="font-medium">
                            {row.rowData[header.id]}
                          </span>
                        </div>
                      ))
                    }
                    <button className="mt-2 text-blue-600 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        
        // For tablets, maybe just hide some columns
        if (isTablet) {
          const visibleHeaders = headers.filter(
            header => !['address', 'phone'].includes(header.id)
          );
          
          return renderDefaultTable({ 
            headers: visibleHeaders,
            rows
          });
        }
        
        // For desktop, render the default table
        return renderDefaultTable();
      }}
    />
  );
};`}</code>
            </pre>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Custom Responsive Features</h3>
            <p className="text-gray-700">With the custom responsive mode, you can:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Create device-specific layouts for your data</li>
              <li>Dynamically adjust table features based on screen size</li>
              <li>Integrate with design system breakpoints</li>
              <li>Implement advanced interactions for different devices</li>
              <li>Progressively enhance the table experience based on capabilities</li>
            </ul>
          </div>
        </motion.div>

        {/* Responsive Best Practices Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Responsive Design Best Practices
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faTablet} className="text-green-500 mr-3" />
                <h3 className="font-bold text-gray-800">Prioritize Content</h3>
              </div>
              <p className="text-gray-700">
                Identify the most important data columns and ensure they're always visible, regardless of screen size.
                Use <code className="bg-gray-100 px-1 rounded">responsivePriority</code> to define column importance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faDesktop} className="text-green-500 mr-3" />
                <h3 className="font-bold text-gray-800">Test Across Devices</h3>
              </div>
              <p className="text-gray-700">
                Test your tables on actual devices or using browser developer tools to ensure they adapt correctly to
                different screen sizes and orientations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faMobile} className="text-green-500 mr-3" />
                <h3 className="font-bold text-gray-800">Consider Touch Targets</h3>
              </div>
              <p className="text-gray-700">
                Ensure interactive elements like buttons, checkboxes, and links are large enough (at least 44×44 pixels)
                to be easily tapped on touch screens.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faTablet} className="text-green-500 mr-3" />
                <h3 className="font-bold text-gray-800">Optimize Loading</h3>
              </div>
              <p className="text-gray-700">
                Mobile users may have slower connections. Use pagination, virtualization, and efficient data loading to
                ensure tables perform well on all devices.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a
            href="/docs/pagination"
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
            Previous: Pagination
          </a>

          <a
            href="/docs/theming"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Theming & Styling
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

export default ResponsivePage;
