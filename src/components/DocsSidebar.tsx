"use client";

import {
  faTable,
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faLayerGroup,
  faExpand,
  faPager,
  faTableCells,
  faRocket,
  faPuzzlePiece,
  faList,
  faEye,
  faThumbtack,
  faAlignLeft,
  faCopy,
  faPalette,
  faArrowRightArrowLeft,
  faLeftRight,
  faDownload,
  faArrowsUpDown,
  faIcons,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ExpandableSection from "./ExpandableSection";
import ConfigurableSidebar from "./ConfigurableSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Define section structure type
interface DocSection {
  id: string;
  label: string;
  icon: IconDefinition;
  subsections: DocSubSection[];
}

interface DocSubSection {
  id: string;
  label: string;
  path: string;
}

// Define section groups and navigation structure
const docSections: DocSection[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: faRocket,
    subsections: [
      { id: "installation", label: "Installation", path: "/docs/installation" },
      { id: "quick-start", label: "Quick Start", path: "/docs/quick-start" },
    ],
  },
  {
    id: "columns",
    label: "Column Features",
    icon: faColumns,
    subsections: [
      { id: "column-resizing", label: "Column Resizing", path: "/docs/column-resizing" },
      { id: "column-reordering", label: "Column Reordering", path: "/docs/column-reordering" },
      { id: "column-visibility", label: "Column Visibility", path: "/docs/column-visibility" },
      { id: "column-pinning", label: "Column Pinning", path: "/docs/column-pinning" },
      { id: "column-alignment", label: "Column Alignment", path: "/docs/column-alignment" },
      { id: "column-sorting", label: "Column Sorting", path: "/docs/column-sorting" },
      { id: "nested-headers", label: "Nested Headers", path: "/docs/nested-headers" },
    ],
  },
  {
    id: "rows",
    label: "Row Features",
    icon: faList,
    subsections: [
      { id: "row-grouping", label: "Row Grouping", path: "/docs/row-grouping" },
      { id: "row-height", label: "Row Height", path: "/docs/row-height" },
    ],
  },
  {
    id: "cells",
    label: "Cell Features",
    icon: faTableCells,
    subsections: [
      { id: "cell-editing", label: "Cell Editing", path: "/docs/cell-editing" },
      { id: "cell-highlighting", label: "Cell Highlighting", path: "/docs/cell-highlighting" },
      { id: "cell-renderer", label: "Cell Renderer", path: "/docs/cell-renderer" },
    ],
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
    icon: faPuzzlePiece,
    subsections: [
      { id: "pagination", label: "Pagination", path: "/docs/pagination" },
      { id: "live-updates", label: "Live Updates", path: "/docs/live-updates" },
    ],
  },
  {
    id: "customization",
    label: "Customization",
    icon: faPaintBrush,
    subsections: [
      { id: "themes", label: "Themes", path: "/docs/themes" },
      { id: "custom-icons", label: "Custom Icons", path: "/docs/custom-icons" },
      { id: "custom-theme", label: "Custom Theme", path: "/docs/custom-theme" },
    ],
  },
];

// Icons mapping for subsections
const subsectionIcons: Record<string, IconDefinition> = {
  "basic-usage": faTable,
  "cell-editing": faEdit,
  "cell-highlighting": faCopy,
  "cell-renderer": faCode,
  "column-alignment": faAlignLeft,
  "column-pinning": faThumbtack,
  "column-resizing": faLeftRight,
  "column-sorting": faSort,
  "column-visibility": faEye,
  "custom-theme": faCode,
  "custom-icons": faIcons,
  "custom-renderers": faEdit,
  "live-updates": faBolt,
  "nested-headers": faLayerGroup,
  "quick-start": faRocket,
  "row-grouping": faLayerGroup,
  "row-height": faArrowsUpDown,
  advanced: faTableCells,
  columns: faColumns,
  installation: faDownload,
  pagination: faPager,
  responsive: faExpand,
  themes: faPalette,
  "column-reordering": faArrowRightArrowLeft,
};

export default function DocsSidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Initialize expanded sections
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};

    docSections.forEach((section) => {
      initialExpandedState[section.id] = true;
    });

    setExpandedSections(initialExpandedState);
  }, [pathname]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Create the sidebar content
  const docsSidebarContent = (
    <div>
      {docSections.map((section, index) => (
        <ExpandableSection
          key={index}
          title={section.label}
          icon={section.icon}
          expanded={expandedSections[section.id] || false}
          onToggle={() => toggleSection(section.id)}
        >
          <ul className="space-y-1">
            {section.subsections.map((subsection, index) => (
              <li key={index}>
                <Link
                  href={subsection.path}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                    pathname === subsection.path
                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {subsectionIcons[subsection.id] && (
                    <FontAwesomeIcon
                      icon={subsectionIcons[subsection.id]}
                      className="w-3.5 h-3.5"
                    />
                  )}
                  {subsection.label}
                </Link>
              </li>
            ))}
          </ul>
        </ExpandableSection>
      ))}
    </div>
  );

  return (
    <ConfigurableSidebar
      config={{
        title: "Documentation",
        icon: faCode,
        sidebarContent: docsSidebarContent,
      }}
    />
  );
}
