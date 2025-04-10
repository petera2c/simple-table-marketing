"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// This should match the structure in DocsLayout.tsx
const docNavigation = [
  // Getting Started
  { id: "installation", path: "/docs/installation" },
  { id: "quick-start", path: "/docs/quick-start" },

  // Column Features
  { id: "column-properties", path: "/docs/column-properties" },
  { id: "column-resizing", path: "/docs/column-resizing" },
  { id: "column-reordering", path: "/docs/column-reordering" },
  { id: "column-visibility", path: "/docs/column-visibility" },
  { id: "column-pinning", path: "/docs/column-pinning" },
  { id: "column-alignment", path: "/docs/column-alignment" },
  { id: "column-sorting", path: "/docs/column-sorting" },
  { id: "nested-headers", path: "/docs/nested-headers" },

  // Row Features
  { id: "row-grouping", path: "/docs/row-grouping" },
  { id: "row-height", path: "/docs/row-height" },

  // Cell Features
  { id: "cell-editing", path: "/docs/cell-editing" },
  { id: "cell-highlighting", path: "/docs/cell-highlighting" },
  { id: "cell-renderer", path: "/docs/cell-renderer" },

  // Advanced Features
  { id: "pagination", path: "/docs/pagination" },

  // Customization
  { id: "themes", path: "/docs/themes" },
  { id: "custom-icons", path: "/docs/custom-icons" },
  { id: "custom-theme", path: "/docs/custom-theme" },
];

// Map paths to labels for more readable navigation buttons
const pathToLabel: Record<string, string> = {
  "/docs/installation": "Installation",
  "/docs/quick-start": "Quick Start",
  "/docs/column-properties": "Column Properties",
  "/docs/column-resizing": "Column Resizing",
  "/docs/column-reordering": "Column Reordering",
  "/docs/column-visibility": "Column Visibility",
  "/docs/column-pinning": "Column Pinning",
  "/docs/column-alignment": "Column Alignment",
  "/docs/column-sorting": "Column Sorting",
  "/docs/nested-headers": "Nested Headers",
  "/docs/row-grouping": "Row Grouping",
  "/docs/row-height": "Row Height",
  "/docs/cell-editing": "Cell Editing",
  "/docs/cell-highlighting": "Cell Highlighting",
  "/docs/cell-renderer": "Cell Renderer",
  "/docs/pagination": "Pagination",
  "/docs/themes": "Themes",
  "/docs/custom-icons": "Custom Icons",
  "/docs/custom-theme": "Custom Theme",
};

/**
 * Component for rendering dynamic next/previous navigation buttons based on the docs structure
 */
const DocNavigationButtons = () => {
  const pathname = usePathname();

  const { prevPage, nextPage } = useMemo(() => {
    const currentIndex = docNavigation.findIndex((item) => item.path === pathname);

    // If page not found in navigation, return empty
    if (currentIndex === -1) {
      return { prevPage: null, nextPage: null };
    }

    const prevPage = currentIndex > 0 ? docNavigation[currentIndex - 1] : null;
    const nextPage =
      currentIndex < docNavigation.length - 1 ? docNavigation[currentIndex + 1] : null;

    return { prevPage, nextPage };
  }, [pathname]);

  if (!prevPage && !nextPage) {
    return null;
  }

  return (
    <motion.div
      className="flex justify-between mt-12 pt-4 border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {prevPage ? (
        <a
          href={prevPage.path}
          className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous: {pathToLabel[prevPage.path]}
        </a>
      ) : (
        <span></span>
      )}

      {nextPage && (
        <a
          href={nextPage.path}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Next: {pathToLabel[nextPage.path]}
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
      )}
    </motion.div>
  );
};

export default DocNavigationButtons;
