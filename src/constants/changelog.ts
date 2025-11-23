export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "bugfix" | "breaking";
    description: string;
    link?: string;
  }[];
}

// Individual changelog entries
export const v1_8_2: ChangelogEntry = {
  version: "1.8.2",
  date: "2025-11-23",
  title: "Chart Width and Virtualization Performance",
  description:
    "Enhanced chart column rendering with improved width handling and significantly faster virtualization performance for smoother scrolling through large datasets.",
  changes: [
    {
      type: "improvement",
      description: "Improved chart width calculations for better responsive behavior",
      link: "/docs/chart-columns",
    },
    {
      type: "improvement",
      description: "Optimized virtualization engine for faster rendering and smoother scrolling",
    },
  ],
};

export const v1_8_1: ChangelogEntry = {
  version: "1.8.1",
  date: "2025-11-22",
  title: "Chart Column Types - Visualize Data Inline",
  description:
    "Added built-in chart column types (lineAreaChart and barChart) to visualize array data directly in table cells. Includes smart copy/paste functionality that formats chart data as comma-separated values for seamless integration with spreadsheets.",
  changes: [
    {
      type: "feature",
      description: "Added lineAreaChart and barChart column types for inline data visualization",
      link: "/docs/chart-columns",
    },
    {
      type: "feature",
      description:
        "Smart copy/paste for chart columns: arrays format as comma-separated values (e.g., '10, 15, 12, 18, 25')",
      link: "/docs/chart-columns",
    },
    {
      type: "feature",
      description:
        "Chart cells can be pasted with comma-separated values that automatically parse to number arrays",
      link: "/docs/chart-columns",
    },
    {
      type: "improvement",
      description:
        "Enhanced Infrastructure example with live-updating CPU history chart visualization",
      link: "/examples/infrastructure",
    },
  ],
};

export const v1_7_9: ChangelogEntry = {
  version: "1.7.9",
  date: "2024-11-22",
  title: "Value Formatter Support",
  description:
    "Added valueFormatter attribute to HeaderObject for simple cell value formatting. This provides a more performant and streamlined way to format cell values for display (currency, dates, percentages) without using cellRenderer.",
  changes: [
    {
      type: "feature",
      description:
        "Added valueFormatter attribute to HeaderObject for formatting cell values without React components",
      link: "/docs/value-formatter",
    },
    {
      type: "improvement",
      description:
        "Updated documentation to clarify when to use valueFormatter vs cellRenderer for optimal performance",
      link: "/docs/cell-renderer",
    },
  ],
};

export const v1_7_6: ChangelogEntry = {
  version: "1.7.6",
  date: "2025-11-19",
  title: "Nested Data Accessor Support",
  description:
    "Added support for nested data accessors, allowing you to access deeply nested object properties directly in column definitions using dot notation like 'latest.rank'.",
  changes: [
    {
      type: "bugfix",
      description: "Fixed nested data accessors (e.g., accessor: 'latest.rank') to work correctly",
    },
  ],
};

export const v1_7_5: ChangelogEntry = {
  version: "1.7.5",
  date: "2025-11-19",
  title: "Loading State with Skeleton Loaders",
  description:
    "Added built-in loading state support with skeleton loaders for all table cells. Perfect for showing visual feedback during data fetching, pagination, and async operations.",
  changes: [
    {
      type: "feature",
      description: "Added isLoading prop to display skeleton loaders while data is being fetched",
      link: "/docs/loading-state",
    },
    {
      type: "feature",
      description:
        "New CSS variable --st-loading-skeleton-bg-color for customizing skeleton appearance",
      link: "/docs/custom-theme",
    },
    {
      type: "feature",
      description: "New st-loading-skeleton CSS class for advanced styling customization",
      link: "/docs/loading-state",
    },
    {
      type: "improvement",
      description: "Enhanced pagination demo to showcase loading states during page transitions",
      link: "/docs/pagination",
    },
  ],
};

export const v1_7_0: ChangelogEntry = {
  version: "1.7.0",
  date: "2025-11-13",
  title: "Server-Side Pagination and Enhanced Cell Selection",
  description:
    "Major update adding server-side pagination support and keyboard navigation for cell selection. Improved cell selection scrolling behavior and pagination overflow handling.",
  changes: [
    {
      type: "feature",
      description:
        "Added server-side pagination support with new props: onPageChange, serverSidePagination, and totalRowCount",
      link: "/docs/pagination",
    },
    {
      type: "feature",
      description:
        "Enable cell selection using keyboard shortcuts (Shift + Arrow keys, Ctrl/Cmd + A, etc.)",
      link: "/docs/cell-highlighting",
    },
    {
      type: "improvement",
      description: "Improved cell selection while scrolling for a smoother experience",
      link: "/docs/cell-highlighting",
    },
    {
      type: "improvement",
      description:
        "Pagination now shows overflow visible when no height is specified, eliminating unnecessary scrolling",
      link: "/docs/pagination",
    },
  ],
};

export const v1_6_7: ChangelogEntry = {
  version: "1.6.7",
  date: "2025-11-09",
  title: "Bundle Size Improvements",
  description:
    "Optimized bundle size to reduce the overall package footprint and improve loading performance.",
  changes: [
    {
      type: "improvement",
      description: "Reduced bundle size for improved loading performance",
    },
  ],
};

export const v1_6_6: ChangelogEntry = {
  version: "1.6.6",
  date: "2025-11-09",
  title: "Cell Selection and Scroll Improvements",
  description:
    "Enhanced cell selection styling and improved scrolling behavior while drag selecting cells for a smoother user experience.",
  changes: [
    {
      type: "improvement",
      description: "Improved cell selection style for better visual feedback",
      link: "/docs/cell-selection",
    },
    {
      type: "improvement",
      description: "Enhanced scroll behavior while drag selecting cells",
      link: "/docs/cell-selection",
    },
  ],
};

export const v1_6_1: ChangelogEntry = {
  version: "1.6.1",
  date: "2025-10-27",
  title: "Table Footer Pagination Improvements",
  description:
    "Enhanced table footer pagination with improved usability, better performance, and more intuitive controls for navigating through large datasets.",
  changes: [
    {
      type: "improvement",
      description: "Enhanced footer pagination controls for better usability and performance",
      link: "/docs/pagination",
    },
  ],
};

export const v1_6_0: ChangelogEntry = {
  version: "1.6.0",
  date: "2025-10-26",
  title: "Row Numbers with Pagination Fix",
  description:
    "Fixed an issue where row numbers were not correctly calculated when pagination was enabled. Row numbers now display the correct sequential numbers based on the current page.",
  changes: [
    {
      type: "bugfix",
      description: "Fixed row numbers calculation with pagination",
      link: "/docs/row-selection",
    },
  ],
};

export const v1_5_6: ChangelogEntry = {
  version: "1.5.6",
  date: "2025-10-26",
  title: "Custom Filter Icon",
  description:
    "Customize the filter icon in table headers to match your design system. Use any React component or icon library to replace the default filter icon.",
  changes: [
    {
      type: "feature",
      description: "Added filterIcon prop to customize the column filter icon",
      link: "/docs/column-filtering",
    },
  ],
};

export const v1_5_5: ChangelogEntry = {
  version: "1.5.5",
  date: "2025-10-25",
  title: "Footer Renderer",
  description:
    "Customize your table footer with complete control over its appearance and functionality. Build custom pagination controls, add summary statistics, or create any footer UI that matches your design.",
  changes: [
    {
      type: "feature",
      description: "Added footerRenderer prop to completely customize table footer UI",
      link: "/docs/footer-renderer",
    },
  ],
};

export const v1_5_1: ChangelogEntry = {
  version: "1.5.1",
  date: "2025-10-19",
  title: "CSV Export",
  description:
    "Export your table data to CSV format with a simple API call. Perfect for data analysis, reporting, and sharing.",
  changes: [
    {
      type: "feature",
      description: "Export table data to CSV using tableRef.current?.exportToCSV()",
      link: "/docs/csv-export",
    },
  ],
};

export const v1_5_0: ChangelogEntry = {
  version: "1.5.0",
  date: "2025-10-19",
  title: "Mobile-First Column Pinning",
  description:
    "Enhanced mobile experience with intelligent column pinning behavior. Pinned columns now have limited width on mobile devices and support horizontal scrolling for improved usability.",
  changes: [
    {
      type: "feature",
      description: "Pinned columns have limited width on mobile devices for better mobile UX",
      link: "/docs/column-pinning",
    },
    {
      type: "feature",
      description: "Pinned columns can now scroll horizontally on mobile devices",
      link: "/docs/column-pinning",
    },
    {
      type: "improvement",
      description: "Enhanced touch target sizes for better mobile interaction",
      link: "/blog/mobile-compatibility-react-tables",
    },
  ],
};

export const v1_4_7: ChangelogEntry = {
  version: "1.4.7",
  date: "2025-10-18",
  title: "Theme Color Improvements",
  description:
    "Enhanced theme color system with improved contrast, readability, and visual consistency across all built-in themes.",
  changes: [
    {
      type: "improvement",
      description: "Improved color contrast and readability across all themes",
      link: "/docs/themes",
    },
    {
      type: "improvement",
      description: "Enhanced styling flags for better visual customization",
      link: "/docs/themes",
    },
  ],
};

export const v1_4_4: ChangelogEntry = {
  version: "1.4.4",
  date: "2025-10-15",
  title: "Collapsible Columns Enhancement",
  description:
    "Enhanced collapsible columns with new ShowWhen attribute for better control over column visibility.",
  changes: [
    {
      type: "feature",
      description:
        'collapsible columns new ShowWhen attribute: "parentCollapsed" | "parentExpanded" | "always"',
      link: "/docs/collapsible-columns",
    },
    {
      type: "breaking",
      description: "Removed summaryColumn attribute (replaced by showWhen)",
      link: "/docs/collapsible-columns",
    },
  ],
};

// Array of all changelog entries (newest first)
export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  v1_8_2,
  v1_8_1,
  v1_7_9,
  v1_7_6,
  v1_7_5,
  v1_7_0,
  v1_6_7,
  v1_6_6,
  v1_6_1,
  v1_6_0,
  v1_5_6,
  v1_5_5,
  v1_5_1,
  v1_5_0,
  v1_4_7,
  v1_4_4,
];

// Helper function to get changelog entry by version
export const getChangelogByVersion = (version: string): ChangelogEntry | undefined => {
  return CHANGELOG_ENTRIES.find((entry) => entry.version === version);
};

// Helper function to get latest changelog entry
export const getLatestChangelog = (): ChangelogEntry => {
  return CHANGELOG_ENTRIES[0];
};

// Helper function to get change type label
export const getChangeTypeLabel = (
  type: "feature" | "improvement" | "bugfix" | "breaking"
): string => {
  const labels = {
    feature: "New Feature",
    improvement: "Improvement",
    bugfix: "Bug Fix",
    breaking: "Breaking Change",
  };
  return labels[type];
};

// Helper function to get change type color
export const getChangeTypeColor = (
  type: "feature" | "improvement" | "bugfix" | "breaking"
): { bg: string; text: string; darkBg: string; darkText: string } => {
  const colors = {
    feature: {
      bg: "bg-green-100",
      text: "text-green-800",
      darkBg: "dark:bg-green-900/30",
      darkText: "dark:text-green-400",
    },
    improvement: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-900/30",
      darkText: "dark:text-blue-400",
    },
    bugfix: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      darkBg: "dark:bg-orange-900/30",
      darkText: "dark:text-orange-400",
    },
    breaking: {
      bg: "bg-red-100",
      text: "text-red-800",
      darkBg: "dark:bg-red-900/30",
      darkText: "dark:text-red-400",
    },
  };
  return colors[type];
};
