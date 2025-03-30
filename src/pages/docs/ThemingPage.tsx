import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ThemingPage = () => {
  return (
    <>
      <SEO
        title={`Theming & Styling - ${SEO_STRINGS.docs.title}`}
        description="Learn how to customize the look and feel of your Simple Table component with powerful styling options."
        keywords={`theming, styling, css customization, tailwind, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/theming"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-purple-100 rounded-lg">
            <FontAwesomeIcon icon={faPalette} className="text-purple-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Theming & Styling</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table offers extensive styling options to match your application's design system. From basic color
          adjustments to complete theme customization, you can make your tables look exactly how you want.
        </motion.p>

        {/* Basic Styling Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Styling
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            The simplest way to style your table is using the built-in className props:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

// Basic styling with className props
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  
  // Container styling
  className="border border-gray-200 rounded-lg shadow-sm"
  
  // Header styling
  headerClassName="bg-gray-100 text-gray-700 font-medium"
  
  // Row styling
  rowClassName="hover:bg-gray-50 border-b border-gray-100"
  
  // Cell styling
  cellClassName="p-3 text-sm"
/>`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">You can also apply conditional styling based on row or cell data:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  
  // Conditional row styling
  getRowClassName={(row) => 
    row.rowData.status === 'active' 
      ? 'bg-green-50' 
      : row.rowData.status === 'pending' 
        ? 'bg-yellow-50' 
        : 'bg-red-50'
  }
  
  // Conditional cell styling
  getCellClassName={(value, header, row) => {
    // Style negative numbers in red
    if (header.id === 'amount' && value < 0) {
      return 'text-red-500 font-medium';
    }
    
    // Style specific column
    if (header.id === 'status') {
      return \`font-medium \${
        value === 'active' ? 'text-green-600' : 
        value === 'pending' ? 'text-yellow-600' : 
        'text-red-600'
      }\`;
    }
    
    return '';
  }}
/>`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Theme Presets Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Theme Presets
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table includes several built-in theme presets that you can use out of the box:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable, THEMES } from 'simple-table';

// Use a built-in theme
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  theme={THEMES.LIGHT} // Options: LIGHT, DARK, MINIMAL, BORDERED, STRIPED
/>`}</code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Light Theme</h3>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                Clean, light background with subtle borders and hover states. Ideal for content-heavy interfaces.
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 shadow-sm">
              <h3 className="font-bold text-gray-100 mb-3 pb-2 border-b border-gray-700">Dark Theme</h3>
              <div className="bg-purple-900 bg-opacity-30 p-3 rounded text-sm text-purple-300">
                Dark backgrounds with light text, reduced eye strain for night mode or dark interfaces.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Minimal Theme</h3>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                No borders, clean typography, and subtle hover states. Perfect for modern, minimalist designs.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Bordered Theme</h3>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                All cells have borders, creating a more traditional spreadsheet look. Great for dense data.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Custom Theme Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Creating Custom Themes
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">You can create a completely custom theme by providing a theme object:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

// Define a custom theme
const customTheme = {
  container: "border border-indigo-200 rounded-xl overflow-hidden shadow-sm",
  table: "w-full",
  header: {
    row: "bg-indigo-50",
    cell: "px-4 py-3 text-left text-sm font-semibold text-indigo-900"
  },
  body: {
    row: "border-b border-indigo-100 hover:bg-indigo-50 transition-colors",
    cell: "px-4 py-3 text-sm text-gray-700",
    stripedRow: "bg-indigo-25"
  },
  pagination: {
    container: "bg-white px-4 py-3 flex items-center justify-between border-t border-indigo-100",
    button: "px-3 py-1 rounded border border-indigo-200 text-indigo-600 hover:bg-indigo-50",
    activeButton: "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700",
    text: "text-sm text-gray-700"
  },
  // Other components can also be themed
  checkbox: {
    container: "flex items-center justify-center",
    input: "h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
  },
  loading: {
    container: "flex justify-center items-center p-4",
    spinner: "animate-spin h-6 w-6 text-indigo-600"
  }
};

// Apply custom theme
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  theme={customTheme}
/>`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Theme Structure</h3>
            <p className="text-gray-700">
              Your custom theme doesn't need to include all properties. Any missing properties will fall back to the
              default theme. This allows for simple theme customizations where you only specify what you want to change.
            </p>
          </div>
        </motion.div>

        {/* Integration with Design Systems Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Integration with Design Systems
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">Simple Table works well with popular CSS frameworks and design systems:</p>

          <div className="bg-purple-50 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Tailwind CSS Integration</h3>
            <p className="text-gray-700 mb-3">
              All examples in this documentation use Tailwind CSS classes. Simple Table is designed to work seamlessly
              with Tailwind:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <pre className="whitespace-pre-wrap">
                <code>{`// Create a Tailwind-themed table
const tailwindTheme = {
  container: "overflow-x-auto rounded-lg border border-gray-200 shadow-sm",
  table: "min-w-full divide-y divide-gray-200",
  header: {
    row: "bg-gray-50",
    cell: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  },
  body: {
    row: "bg-white divide-y divide-gray-200 hover:bg-gray-50",
    cell: "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
  }
};

<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  theme={tailwindTheme}
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Material Design</h3>
            <p className="text-gray-700 mb-3">Create tables that follow Material Design principles:</p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <pre className="whitespace-pre-wrap">
                <code>{`// Material Design-inspired theme
const materialTheme = {
  container: "rounded shadow-md overflow-hidden",
  table: "min-w-full",
  header: {
    row: "border-b border-gray-200",
    cell: "px-6 py-4 text-left text-sm font-medium text-gray-700"
  },
  body: {
    row: "hover:bg-gray-50 border-b border-gray-100",
    cell: "px-6 py-4 text-sm text-gray-700"
  },
  pagination: {
    container: "bg-white px-4 py-3 flex items-center justify-between",
    button: "p-2 rounded-full hover:bg-gray-100 text-gray-700",
    activeButton: "bg-blue-600 text-white hover:bg-blue-700"
  }
};

<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  theme={materialTheme}
/>`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Component-Specific Styling Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Component-Specific Styling
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-4">Each feature in Simple Table can be styled individually:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  // ... other props
  
  // Sorting indicator styling
  sortIndicatorClassName="text-indigo-600 ml-1"
  
  // Selection styling
  selectionClassName="bg-indigo-50"
  checkboxClassName="h-4 w-4 rounded border-gray-300 text-indigo-600"
  
  // Pagination styling
  paginationClassName="bg-white border-t border-gray-200"
  paginationButtonClassName="px-3 py-1 border rounded"
  paginationActiveButtonClassName="bg-indigo-600 text-white"
  
  // Empty state styling 
  emptyStateClassName="py-12 text-center text-gray-500"
  
  // Loading state styling
  loadingOverlayClassName="bg-white bg-opacity-75"
  loadingSpinnerClassName="h-8 w-8 text-indigo-600"
/>`}</code>
            </pre>
          </div>
        </motion.div>

        {/* CSS Variables Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Using CSS Variables
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table also supports customization through CSS variables, making it easy to integrate with your design
            system:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`/* In your CSS file */
:root {
  /* Colors */
  --simple-table-primary: #4f46e5;
  --simple-table-primary-light: #e0e7ff;
  --simple-table-border: #e5e7eb;
  --simple-table-text: #374151;
  --simple-table-text-light: #6b7280;
  --simple-table-background: #ffffff;
  --simple-table-background-alt: #f9fafb;
  
  /* Spacing */
  --simple-table-cell-padding-x: 1rem;
  --simple-table-cell-padding-y: 0.75rem;
  
  /* Typography */
  --simple-table-font-size: 0.875rem;
  --simple-table-header-font-weight: 600;
  
  /* Borders */
  --simple-table-border-radius: 0.5rem;
  --simple-table-border-width: 1px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --simple-table-primary: #818cf8;
    --simple-table-primary-light: #312e81;
    --simple-table-border: #374151;
    --simple-table-text: #f9fafb;
    --simple-table-text-light: #9ca3af;
    --simple-table-background: #1f2937;
    --simple-table-background-alt: #111827;
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">CSS Variable Benefits</h3>
            <p className="text-gray-700">Using CSS variables offers several advantages:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Update your table styling globally without changing component props</li>
              <li>Support dark mode and theme switching with a simple CSS change</li>
              <li>Keep styling consistent across multiple table instances</li>
              <li>Integrate more easily with design tokens</li>
            </ul>
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
            href="/docs/accessibility"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Accessibility
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

export default ThemingPage;
