"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import CustomIconsDemo from "@/components/demos/CustomIconsDemo";
import DocNavigationButtons from "@/components/DocNavigationButtons";
import PageWrapper from "@/components/PageWrapper";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import PropTable, { type PropInfo } from "@/components/PropTable";

const CUSTOM_ICON_PROPS: PropInfo[] = [
  {
    key: "sortUpIcon",
    name: "sortUpIcon",
    required: false,
    description: "Custom icon component for ascending sort indicator in column headers.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  sortUpIcon={<FontAwesomeIcon icon={faCaretUp} className="text-blue-500" />}
  // ... other props
/>`,
  },
  {
    key: "sortDownIcon",
    name: "sortDownIcon",
    required: false,
    description: "Custom icon component for descending sort indicator in column headers.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  sortDownIcon={<FontAwesomeIcon icon={faCaretDown} className="text-blue-500" />}
  // ... other props
/>`,
  },
  {
    key: "nextIcon",
    name: "nextIcon",
    required: false,
    description: "Custom icon component for pagination next button.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  nextIcon={<FontAwesomeIcon icon={faAngleRight} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "prevIcon",
    name: "prevIcon",
    required: false,
    description: "Custom icon component for pagination previous button.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  prevIcon={<FontAwesomeIcon icon={faAngleLeft} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "filterIcon",
    name: "filterIcon",
    required: false,
    description: "Custom icon component for the column filter button in filterable columns.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  filterIcon={<FontAwesomeIcon icon={faFilter} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "expandIcon",
    name: "expandIcon",
    required: false,
    description: "Custom icon component for collapsed row groups in hierarchical data display.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  expandIcon={<FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "headerExpandIcon",
    name: "headerExpandIcon",
    required: false,
    description: "Custom icon component for the expand state of collapsible column headers.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  headerExpandIcon={<FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />}
  // ... other props
/>`,
  },
  {
    key: "headerCollapseIcon",
    name: "headerCollapseIcon",
    required: false,
    description: "Custom icon component for the collapse state of collapsible column headers.",
    type: "React.ReactNode",
    example: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

<SimpleTable
  headerCollapseIcon={<FontAwesomeIcon icon={faChevronDown} className="text-blue-600" />}
  // ... other props
/>`,
  },
];

export default function CustomIconsContent() {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={faIcons} className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Custom Icons</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
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
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LivePreview
          demoCodeFilename="CustomIconsDemo.txt"
          height="400px"
          link={SANDBOX_LIST["CustomIconsDemo.tsx"].url}
          Preview={CustomIconsDemo}
        />
      </motion.div>

      {/* Basic Implementation Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Implementation
      </motion.h2>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To customize the icons in Simple Table, pass your custom icon components to the respective
          props. You can use any icon library like Font Awesome, Material Icons, or your own custom
          SVG icons.
        </p>

        <PropTable props={CUSTOM_ICON_PROPS} title="Available Icon Props" />
      </motion.div>

      {/* Best Practices Section */}
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Best Practices
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Keep icon sizes consistent for a polished look</li>
          <li>Use colors that match your application's theme</li>
          <li>Ensure icons are clear and intuitive for their purpose</li>
          <li>
            For row grouping, choose expandIcon that clearly indicate the expand/collapse state
          </li>
          <li>Consider using the same icon family throughout your application</li>
          <li>Test your icons for visibility against different background colors</li>
        </ul>
      </motion.div>

      <DocNavigationButtons />
    </PageWrapper>
  );
}
