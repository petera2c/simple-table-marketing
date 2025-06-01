"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// This should match the structure in DocsLayout.tsx
const docNavigation = [
  // Getting Started
  { id: "installation", path: "/docs/installation" },
  { id: "quick-start", path: "/docs/quick-start" },

  // Column Features
  { id: "column-resizing", path: "/docs/column-resizing" },
  { id: "column-reordering", path: "/docs/column-reordering" },
  { id: "column-visibility", path: "/docs/column-visibility" },
  { id: "column-pinning", path: "/docs/column-pinning" },
  { id: "column-alignment", path: "/docs/column-alignment" },
  { id: "column-sorting", path: "/docs/column-sorting" },
  { id: "column-filtering", path: "/docs/column-filtering" },
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
  { id: "live-updates", path: "/docs/live-updates" },

  // Customization
  { id: "themes", path: "/docs/themes" },
  { id: "custom-icons", path: "/docs/custom-icons" },
  { id: "custom-theme", path: "/docs/custom-theme" },
];

// Map paths to labels for more readable navigation buttons
const pathToLabel: Record<string, string> = {
  "/docs/installation": "Installation",
  "/docs/quick-start": "Quick Start",
  "/docs/column-resizing": "Column Resizing",
  "/docs/column-reordering": "Column Reordering",
  "/docs/column-visibility": "Column Visibility",
  "/docs/column-pinning": "Column Pinning",
  "/docs/column-alignment": "Column Alignment",
  "/docs/column-sorting": "Column Sorting",
  "/docs/column-filtering": "Column Filtering",
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
      className="flex flex-col sm:flex-row justify-between mt-6 pt-6 border-t border-gray-200 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {prevPage ? (
        <Link href={prevPage.path} className="w-full sm:w-auto">
          <Button
            type="default"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            className="flex items-center w-full sm:w-auto justify-center sm:justify-start"
          >
            <span className="hidden sm:inline">Previous: </span>
            <span className="truncate max-w-[200px] sm:max-w-none">
              {pathToLabel[prevPage.path]}
            </span>
          </Button>
        </Link>
      ) : (
        <span></span>
      )}

      {nextPage && (
        <Link href={nextPage.path} className="w-full sm:w-auto">
          <Button
            type="primary"
            className="flex items-center w-full sm:w-auto justify-center sm:justify-start"
          >
            <span className="hidden sm:inline">Next: </span>
            <span className="truncate max-w-[200px] sm:max-w-none">
              {pathToLabel[nextPage.path]}
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default DocNavigationButtons;
