import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import QuickStartDemo from "../../components/demos/QuickStartDemo";

const AccessibilityPage = () => {
  return (
    <>
      <SEO
        title={`Accessibility - ${SEO_STRINGS.docs.title}`}
        description="Learn about the accessibility features built into Simple Table."
        keywords={`accessibility, a11y, WCAG, screen readers, keyboard navigation, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/accessibility"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faUniversalAccess} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Accessibility</h1>
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
          Simple Table is designed with accessibility in mind, following WCAG guidelines to ensure that your data tables
          are usable by everyone, including people with disabilities.
        </motion.p>

        {/* Built-in Accessibility Features */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built-in Accessibility Features
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">Simple Table includes several built-in accessibility features:</p>

          <ul className="space-y-4 mb-6">
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Semantic HTML</h3>
              <p className="text-gray-700">
                Uses proper table elements (<code className="bg-gray-100 px-1 rounded">&lt;table&gt;</code>,{" "}
                <code className="bg-gray-100 px-1 rounded">&lt;th&gt;</code>,{" "}
                <code className="bg-gray-100 px-1 rounded">&lt;td&gt;</code>) with appropriate ARIA attributes to ensure
                screen readers properly announce table content.
              </p>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Keyboard Navigation</h3>
              <p className="text-gray-700">
                Fully navigable using the keyboard, with proper focus management for interactive elements like sort
                buttons, pagination controls, and selection checkboxes.
              </p>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Screen Reader Support</h3>
              <p className="text-gray-700">
                Includes ARIA attributes and announcements for dynamic content changes, such as sorting, filtering, and
                pagination actions.
              </p>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Sufficient Color Contrast</h3>
              <p className="text-gray-700">Default themes meet WCAG AA contrast requirements for text readability.</p>
            </li>
          </ul>
        </motion.div>

        {/* Accessibility Configuration */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Accessibility Configuration
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            To enhance the accessibility of your tables, Simple Table provides several configuration options:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import { SimpleTable } from 'simple-table';

// Accessibility-enhanced configuration
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  
  // Provide a descriptive caption/summary for screen readers
  caption="Employee data showing names, departments, and contact information"
  
  // Add ARIA labels for interactive elements
  ariaLabels={{
    sortAscending: "Sort column in ascending order",
    sortDescending: "Sort column in descending order",
    selectAllRows: "Select all rows",
    selectRow: "Select this row",
    nextPage: "Go to next page",
    previousPage: "Go to previous page",
    firstPage: "Go to first page",
    lastPage: "Go to last page",
    rowsPerPage: "Number of rows per page",
    gotoPage: "Go to page"
  }}
  
  // Announce status messages to screen readers
  announceStatusChanges={true}
  
  // Configure keyboard navigation
  enableKeyboardNavigation={true}
  keyboardNavigationOptions={{
    cellNavigation: true,  // Enable arrow key navigation between cells
    enterToEdit: true,     // Press Enter to edit cell (if editable)
    escapeToCancel: true,  // Press Escape to cancel edit
    tabNavigation: true    // Tab through interactive elements
  }}
/>`}</code>
            </pre>
          </div>
        </motion.div>

        {/* ARIA Attributes Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          ARIA Attributes
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table uses the following ARIA attributes to ensure your tables are properly interpreted by assistive
            technologies:
          </p>

          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Attribute
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Element
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-sort</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Column header (th)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Indicates the current sort direction of a column</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-label</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Sort buttons, pagination controls
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">Provides descriptive labels for controls</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-live</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Status region</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Announces status changes (sorting, filtering, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-rowcount</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Table</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Indicates total number of rows (for pagination)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-rowindex</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Table rows</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Indicates the row's position in the complete dataset
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aria-colcount</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Table</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Indicates total number of columns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Keyboard Accessibility Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Keyboard Accessibility
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="text-gray-700 mb-4">Simple Table supports the following keyboard interactions:</p>

          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Key
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Function
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tab</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Navigate between interactive elements (sort buttons, pagination, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Space/Enter</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Activate buttons, checkboxes, or triggers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Arrow Keys</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Navigate between cells when cell navigation is enabled
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Home/End</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Navigate to first/last cell in a row</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Page Up/Down</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Navigate to previous/next page in pagination</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Escape</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Cancel editing, close modals or popovers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Custom Keyboard Shortcuts</h3>
            <p className="text-gray-700">You can also define custom keyboard shortcuts for your table interactions:</p>
            <div className="bg-gray-800 text-white p-4 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <pre className="whitespace-pre-wrap">
                <code>{`<SimpleTable
  // ... other props
  keyboardShortcuts={{
    // Custom shortcut for copy selected rows
    'ctrl+c': (table) => {
      const selectedData = table.getSelectedRows();
      copyToClipboard(selectedData);
    },
    // Custom shortcut for bulk actions
    'shift+e': (table) => {
      const selectedIds = table.getSelectedRowIds();
      openEditBulkModal(selectedIds);
    },
    // Custom shortcut for refreshing data
    'ctrl+r': (table) => {
      table.refreshData();
    }
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Best Practices */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Accessibility Best Practices
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-4">
            To create the most accessible tables, follow these additional best practices:
          </p>

          <ul className="space-y-4 mb-6">
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Add a Table Caption</h3>
              <p className="text-gray-700">
                Always provide a descriptive <code className="bg-gray-100 px-1 rounded">caption</code> that explains the
                purpose and content of the table. This helps screen reader users understand the table's context.
              </p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`<SimpleTable
  caption="Employee attendance records for Q1 2023"
  // ... other props
/>`}</code>
                </pre>
              </div>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Use Clear Column Headers</h3>
              <p className="text-gray-700">
                Provide meaningful and concise column headers. Avoid abbreviations that might be confusing to screen
                reader users.
              </p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`const headers = [
  { id: 'fullName', label: 'Full Name' },  // Better than just "Name"
  { id: 'dob', label: 'Date of Birth' },   // Better than "DOB"
  { id: 'dept', label: 'Department' }      // Better than "Dept."
];`}</code>
                </pre>
              </div>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Maintain Sufficient Color Contrast</h3>
              <p className="text-gray-700">
                Ensure that text has sufficient contrast against its background. This benefits users with low vision or
                color blindness. WCAG guidelines recommend a contrast ratio of at least 4.5:1 for normal text.
              </p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`// High-contrast theme example
const highContrastTheme = {
  header: {
    cell: "bg-gray-900 text-white font-medium px-4 py-2"
  },
  body: {
    cell: "border border-gray-300 px-4 py-2 text-gray-900"
  }
};`}</code>
                </pre>
              </div>
            </li>

            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Don't Rely Solely on Color</h3>
              <p className="text-gray-700">
                When highlighting information, don't rely on color alone. Use additional visual indicators such as
                icons, patterns, or text.
              </p>
              <div className="bg-gray-800 text-white p-3 rounded-md mt-3 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                <pre className="whitespace-pre-wrap">
                  <code>{`<SimpleTable
  getCellContent={(value, header) => {
    if (header.id === 'status') {
      return (
        <div className={\`flex items-center \${
          value === 'active' ? 'text-green-600' : 'text-red-600'
        }\`}>
          {/* Include both color and icon */}
          <Icon name={value === 'active' ? 'checkCircle' : 'xCircle'} />
          <span className="ml-2">{value}</span>
        </div>
      );
    }
    return value;
  }}
  // ... other props
/>`}</code>
                </pre>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Testing Accessibility */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Testing Accessibility
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p className="text-gray-700 mb-4">We recommend testing your tables with the following methods:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Keyboard testing</strong>: Ensure all interactive elements can be accessed and used with keyboard
              only
            </li>
            <li>
              <strong>Screen reader testing</strong>: Test with popular screen readers like NVDA, JAWS, or VoiceOver
            </li>
            <li>
              <strong>Automated tools</strong>: Use tools like Axe, WAVE, or Lighthouse to identify common issues
            </li>
            <li>
              <strong>Contrast checking</strong>: Verify color contrast meets WCAG AA or AAA guidelines
            </li>
            <li>
              <strong>Zoom testing</strong>: Ensure the table works well when zoomed to 200%
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Remember</h3>
            <p className="text-gray-700">
              While Simple Table provides many accessibility features out of the box, the responsibility for creating
              fully accessible tables also depends on how you configure and use the component. Always test your
              implementation with real assistive technologies.
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
            href="/docs/theming"
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
            Previous: Theming & Styling
          </a>

          <a
            href="/docs/performance"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Performance
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

export default AccessibilityPage;
