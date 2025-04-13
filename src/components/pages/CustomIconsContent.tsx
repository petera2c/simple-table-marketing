"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import CustomIconsDemo from "@/components/demos/CustomIconsDemo";
import CodeBlock from "@/components/CodeBlock";
import DocNavigationButtons from "@/components/DocNavigationButtons";

export default function CustomIconsContent() {
  return (
    <>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faIcons} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Custom Icons</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table allows you to override the default icons used for sorting, pagination, and
        other UI elements. This customization helps you maintain consistent branding and design
        language across your application.
      </motion.p>

      {/* Demo Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CustomIconsDemo />
      </motion.div>

      {/* Basic Implementation Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To customize the icons in Simple Table, pass your custom icon components to the respective
          props. You can use any icon library like Font Awesome, Material Icons, or your own custom
          SVG icons.
        </p>

        <CodeBlock demoCodeFilename="CustomIconsDemo.txt" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Available Icon Props</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortUpIcon</code>:
              Icon for ascending sort
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">sortDownIcon</code>:
              Icon for descending sort
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">nextIcon</code>: Icon
              for pagination next button
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">prevIcon</code>: Icon
              for pagination previous button
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">expandIcon</code>:
              Icon for collapsed row groups
            </li>
            <li>
              <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">collapseIcon</code>:
              Icon for expanded row groups
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Implementation Examples</h3>
          <p className="text-gray-600 mb-2">
            You can find working examples of custom icons in the following components:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong>PaginationDemo</strong>: Uses FontAwesome chevron icons (
              <code className="bg-gray-100 px-1 py-0.5 rounded">faChevronRight</code> and{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">faChevronLeft</code>) to customize
              the pagination navigation buttons.
            </li>
            <li>
              <strong>RowGroupingDemo</strong>: Uses FontAwesome chevron icons (
              <code className="bg-gray-100 px-1 py-0.5 rounded">faChevronRight</code> and{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">faChevronDown</code>) to enhance the
              visualization of expandable row groups.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Usage with Different Icon Libraries */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Using Different Icon Libraries
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Simple Table's icon customization is library-agnostic. Here are examples of how to use
          different icon libraries:
        </p>

        <div className="space-y-6">
          {/* Font Awesome Example */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">Font Awesome</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
              {`import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
faCaretUp, 
faCaretDown, 
faAngleRight, 
faAngleLeft,
faChevronRight,
faChevronDown
} from "@fortawesome/free-solid-svg-icons";

<SimpleTable
// other props...
sortUpIcon={<FontAwesomeIcon icon={faCaretUp} className="text-blue-500" />}
sortDownIcon={<FontAwesomeIcon icon={faCaretDown} className="text-blue-500" />}
nextIcon={<FontAwesomeIcon icon={faAngleRight} className="text-blue-600" />}
prevIcon={<FontAwesomeIcon icon={faAngleLeft} className="text-blue-600" />}
expandIcon={<FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />}
collapseIcon={<FontAwesomeIcon icon={faChevronDown} className="text-blue-600" />}
/>`}
            </pre>
          </div>

          {/* Material UI Icons Example */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">Material UI Icons</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
              {`import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import NavigateNext from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";

<SimpleTable
// other props...
sortUpIcon={<ArrowUpward className="text-blue-500" />}
sortDownIcon={<ArrowDownward className="text-blue-500" />}
nextIcon={<NavigateNext className="text-blue-600" />}
prevIcon={<NavigateBefore className="text-blue-600" />}
expandIcon={<ChevronRight className="text-blue-600" />}
collapseIcon={<ExpandMore className="text-blue-600" />}
/>`}
            </pre>
          </div>

          {/* Custom SVG Example */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">Custom SVG Icons</h3>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
              {`<SimpleTable
// other props...
sortUpIcon={
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-500">
  <path d="M8 4l4 4H4z" />
</svg>
}
sortDownIcon={
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-500">
  <path d="M8 12l4-4H4z" />
</svg>
}
expandIcon={
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-600">
  <path d="M6 4l5 4-5 4V4z" />
</svg>
}
collapseIcon={
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-600">
  <path d="M4 6h8l-4 5z" />
</svg>
}
/>`}
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Best Practices Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Best Practices
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Keep icon sizes consistent for a polished look</li>
          <li>Use colors that match your application's theme</li>
          <li>Ensure icons are clear and intuitive for their purpose</li>
          <li>
            Pair related icons together (like expandIcon/collapseIcon) with complementary designs
          </li>
          <li>
            For row grouping, choose expandIcon and collapseIcon that clearly indicate the
            expand/collapse state
          </li>
          <li>Consider using the same icon family throughout your application</li>
          <li>Test your icons for visibility against different background colors</li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
}
