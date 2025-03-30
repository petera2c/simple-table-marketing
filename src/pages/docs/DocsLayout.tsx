import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faTable,
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faFilter,
  faLayerGroup,
  faExpand,
  faPager,
  faTableCells,
  faGears,
  faRocket,
  faBook,
  faPuzzlePiece,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import AnimatedBackground from "../../components/AnimatedBackground";
import { trackLinkClick } from "../../utils/analytics";
import { useIsMobile } from "../../hooks/useIsMobile";

// Define section groups and navigation structure
const docSections = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: faRocket,
    subsections: [
      { id: "installation", label: "Installation", path: "/docs/installation" },
      { id: "quick-start", label: "Quick Start", path: "/docs/quick-start" },
      { id: "basic-usage", label: "Basic Usage", path: "/docs/basic-usage" },
    ],
  },
  {
    id: "core-concepts",
    label: "Core Concepts",
    icon: faBook,
    subsections: [
      { id: "column-features", label: "Column Management", path: "/docs/column-features" },
      { id: "cell-editing", label: "Cell Editing", path: "/docs/cell-editing" },
      { id: "sorting-filtering", label: "Sorting & Filtering", path: "/docs/sorting-filtering" },
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
      { id: "theming", label: "Theming", path: "/docs/theming" },
      { id: "custom-renderers", label: "Custom Renderers", path: "/docs/custom-renderers" },
    ],
  },
];

// Icons mapping for subsections
const subsectionIcons: Record<string, any> = {
  installation: faCode,
  "quick-start": faRocket,
  "basic-usage": faTable,
  "column-features": faColumns,
  "cell-editing": faEdit,
  "sorting-filtering": faSort,
  "row-grouping": faLayerGroup,
  pagination: faPager,
  responsive: faExpand,
  advanced: faTableCells,
  theming: faPaintBrush,
  "custom-renderers": faEdit,
};

const navigationItems = [
  {
    heading: "Introduction",
    items: [{ name: "Getting Started", href: "/docs/getting-started" }],
  },
  {
    heading: "Core Features",
    items: [
      { name: "Column Features", href: "/docs/column-features" },
      { name: "Cell Editing", href: "/docs/cell-editing" },
      { name: "Sorting & Filtering", href: "/docs/sorting-filtering" },
      { name: "Pagination", href: "/docs/pagination" },
    ],
  },
  {
    heading: "Customization",
    items: [{ name: "Theming & Styling", href: "/docs/theming" }],
  },
  {
    heading: "Advanced Topics",
    items: [
      { name: "Accessibility", href: "/docs/accessibility" },
      { name: "Performance", href: "/docs/performance" },
    ],
  },
];

const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const isMobile = useIsMobile();

  // Initialize expanded sections and highlight current section based on URL
  useEffect(() => {
    // Initially expand all sections on desktop, but only the active section on mobile
    const initialExpandedState: Record<string, boolean> = {};

    docSections.forEach((section) => {
      const isActive = section.subsections.some((subsection) => subsection.path === location.pathname);
      initialExpandedState[section.id] = isMobile ? isActive : true;
    });

    setExpandedSections(initialExpandedState);
  }, [location.pathname, isMobile]);

  // Update sidebar open state based on mobile status
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);

    // Close sidebar on mobile when navigating
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-8">
          {/* Mobile toggle button */}
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="fixed left-4 top-20 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
            >
              <FontAwesomeIcon icon={sidebarOpen ? faColumns : faTable} className="text-xl" />
            </button>
          )}

          {/* Sidebar */}
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`md:w-72 w-full ${
                isMobile
                  ? "fixed left-0 top-0 h-full z-40"
                  : "sticky top-[84px] mb-6 self-start h-[calc(100vh-84px-4rem)]"
              }`}
            >
              <div
                className={`bg-white/90 backdrop-blur-sm ${
                  isMobile ? "rounded-none pt-16 h-full shadow-xl" : "flex flex-col rounded-xl h-full overflow-hidden"
                } shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1`}
              >
                <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
                  <FontAwesomeIcon icon={faTable} />
                  Documentation
                </h2>
                <nav className="overflow-y-auto flex-grow px-3 pb-4">
                  <ul className="space-y-4">
                    {docSections.map((section) => (
                      <li key={section.id} className="py-1">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
                        >
                          <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={section.icon} className="text-blue-500" />
                            {section.label}
                          </span>
                          <FontAwesomeIcon
                            icon={expandedSections[section.id] ? faChevronDown : faChevronRight}
                            className="text-gray-400"
                          />
                        </button>

                        {expandedSections[section.id] && (
                          <ul className="mt-1 ml-3 space-y-1 border-l-2 border-gray-100 pl-4">
                            {section.subsections.map((subsection) => (
                              <li key={subsection.id}>
                                <NavLink
                                  to={subsection.path}
                                  onClick={() => handleLinkClick(subsection.label, subsection.path)}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                                      isActive
                                        ? "bg-blue-100 text-blue-700 font-medium"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`
                                  }
                                >
                                  <FontAwesomeIcon icon={subsectionIcons[subsection.id]} className="w-3.5 h-3.5" />
                                  {subsection.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          )}

          {/* Main content area with width constraint */}
          <div className="flex-1 mx-auto max-w-4xl mt-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsLayout;
