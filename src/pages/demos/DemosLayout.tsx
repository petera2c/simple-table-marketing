import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faLayerGroup,
  faPager,
  faTableCells,
  faPuzzlePiece,
  faChevronDown,
  faChevronRight,
  faList,
  faArrowsAlt,
  faEye,
  faThumbtack,
  faAlignLeft,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import AnimatedBackground from "../../components/AnimatedBackground";
import { trackLinkClick } from "../../utils/analytics";
import { useIsMobile } from "../../hooks/useIsMobile";

// Define section groups and navigation structure
const demoSections = [
  {
    id: "column-features",
    label: "Column Features",
    icon: faColumns,
    subsections: [
      { id: "column-properties", label: "Column Properties", path: "/demos/column-properties" },
      { id: "column-resizing", label: "Column Resizing", path: "/demos/column-resizing" },
      { id: "column-visibility", label: "Column Visibility", path: "/demos/column-visibility" },
      { id: "column-pinning", label: "Column Pinning", path: "/demos/column-pinning" },
      { id: "column-alignment", label: "Column Alignment", path: "/demos/column-alignment" },
      { id: "column-sorting", label: "Column Sorting", path: "/demos/column-sorting" },
    ],
  },
  {
    id: "cell-features",
    label: "Cell Features",
    icon: faTableCells,
    subsections: [
      { id: "cell-editing", label: "Cell Editing", path: "/demos/cell-editing" },
      { id: "cell-highlighting", label: "Cell Highlighting", path: "/demos/cell-highlighting" },
      { id: "cell-renderer", label: "Cell Renderer", path: "/demos/cell-renderer" },
    ],
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
    icon: faPuzzlePiece,
    subsections: [
      { id: "row-grouping", label: "Row Grouping", path: "/demos/row-grouping" },
      { id: "pagination", label: "Pagination", path: "/demos/pagination" },
      { id: "theming", label: "Theming", path: "/demos/theming" },
    ],
  },
];

// Icons mapping for subsections
const subsectionIcons: Record<string, any> = {
  "column-properties": faList,
  "column-resizing": faArrowsAlt,
  "column-visibility": faEye,
  "column-pinning": faThumbtack,
  "column-alignment": faAlignLeft,
  "column-sorting": faSort,
  "cell-editing": faEdit,
  "cell-highlighting": faCopy,
  "cell-renderer": faCode,
  "row-grouping": faLayerGroup,
  pagination: faPager,
  theming: faPaintBrush,
};

const DemosLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const isMobile = useIsMobile();

  // Initialize expanded sections and highlight current section based on URL
  useEffect(() => {
    // Initially expand all sections on desktop, but only the active section on mobile
    const initialExpandedState: Record<string, boolean> = {};

    demoSections.forEach((section) => {
      // Check if this section is active based on current pathname
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
                  Interactive Demos
                </h2>
                <nav className="overflow-y-auto flex-grow px-3 pb-4">
                  <ul className="space-y-4">
                    {demoSections.map((section) => (
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
          <div className="flex-1 mx-auto max-w-5xl mt-6">
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

export default DemosLayout;
