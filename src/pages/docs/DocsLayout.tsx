import { Outlet, NavLink } from "react-router-dom";
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
  faArrowsAlt,
  faEye,
  faThumbtack,
  faAlignLeft,
  faCopy,
  faPalette,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { trackLinkClick } from "../../utils/analytics";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
import PageLayout from "../../components/PageLayout";
import ExpandableSection from "../../components/ExpandableSection";
import ConfigurableSidebar, { SidebarConfig } from "../../components/ConfigurableSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      { id: "column-properties", label: "Column Properties", path: "/docs/column-properties" },
      { id: "column-resizing", label: "Column Resizing", path: "/docs/column-resizing" },
      { id: "column-visibility", label: "Column Visibility", path: "/docs/column-visibility" },
      { id: "column-pinning", label: "Column Pinning", path: "/docs/column-pinning" },
      { id: "column-alignment", label: "Column Alignment", path: "/docs/column-alignment" },
      { id: "column-sorting", label: "Column Sorting", path: "/docs/column-sorting" },
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
      { id: "row-grouping", label: "Row Grouping", path: "/docs/row-grouping" },
      { id: "pagination", label: "Pagination", path: "/docs/pagination" },
    ],
  },
  {
    id: "customization",
    label: "Customization",
    icon: faPaintBrush,
    subsections: [
      { id: "themes", label: "Themes", path: "/docs/themes" },
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
  "column-properties": faList,
  "column-resizing": faArrowsAlt,
  "column-sorting": faSort,
  "column-visibility": faEye,
  "custom-theme": faCode,
  "custom-renderers": faEdit,
  "quick-start": faRocket,
  "row-grouping": faLayerGroup,
  advanced: faTableCells,
  columns: faColumns,
  installation: faCode,
  pagination: faPager,
  responsive: faExpand,
  themes: faPalette,
};

const DocsLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize expanded sections
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};

    docSections.forEach((section) => {
      const isActive = section.subsections.some((subsection) => subsection.path === location.pathname);
      initialExpandedState[section.id] = isMobile ? isActive : true;
    });

    setExpandedSections(initialExpandedState);
  }, [location.pathname, isMobile]);

  // Close sidebar when location changes (on mobile)
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Create the sidebar content
  const docsSidebarContent = (
    <div>
      {docSections.map((section) => (
        <ExpandableSection
          key={section.id}
          title={section.label}
          icon={section.icon}
          expanded={expandedSections[section.id] || false}
          onToggle={() => toggleSection(section.id)}
        >
          <ul className="space-y-1">
            {section.subsections.map((subsection) => (
              <li key={subsection.id}>
                <NavLink
                  to={subsection.path}
                  onClick={() => handleLinkClick(subsection.label, subsection.path)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                      isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {subsectionIcons[subsection.id] && (
                    <FontAwesomeIcon icon={subsectionIcons[subsection.id]} className="w-3.5 h-3.5" />
                  )}
                  {subsection.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </ExpandableSection>
      ))}
    </div>
  );

  // Create sidebar config
  const sidebarConfig: SidebarConfig = {
    title: "Documentation",
    icon: faCode,
    sidebarContent: docsSidebarContent,
    isMobileOpen: sidebarOpen,
    onMobileClose: () => setSidebarOpen(false),
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Toggle documentation menu"
        >
          <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
        </button>
      )}

      <PageLayout sidebar={<ConfigurableSidebar config={sidebarConfig} />}>
        <Outlet />
      </PageLayout>
    </>
  );
};

export default DocsLayout;
