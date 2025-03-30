import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTable, faChevronDown, faChevronRight, faColumns, faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, NavLink } from "react-router-dom";
import { trackLinkClick } from "../utils/analytics";
import { useIsMobile } from "../hooks/useIsMobile";

export interface SectionItem {
  id: string;
  label: string;
  path: string;
}

export interface Section {
  icon: IconDefinition;
  id: string;
  label: string;
  subsections: SectionItem[];
}

interface SidebarProps {
  title: string;
  sections: Section[];
  subsectionIcons: Record<string, IconDefinition>;
  initialOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ title, sections, subsectionIcons, initialOpen = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(initialOpen);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const isMobile = useIsMobile();

  // Initialize expanded sections and highlight current section based on URL
  useEffect(() => {
    // Initially expand all sections on desktop, but only the active section on mobile
    const initialExpandedState: Record<string, boolean> = {};

    sections.forEach((section) => {
      // Check if this section is active based on current pathname
      const isActive = section.subsections.some((subsection) => subsection.path === location.pathname);

      initialExpandedState[section.id] = isMobile ? isActive : true;
    });

    setExpandedSections(initialExpandedState);
  }, [location.pathname, isMobile, sections]);

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
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed left-4 top-20 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <FontAwesomeIcon icon={sidebarOpen ? faColumns : faBars} className="text-xl" />
        </button>
      )}

      {/* Sidebar */}
      {sidebarOpen && (
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`md:w-72 w-full ${
            isMobile ? "fixed left-0 top-0 h-full z-40" : "sticky top-[84px] mb-6 self-start h-[calc(100vh-84px-4rem)]"
          }`}
        >
          <div
            className={`bg-white/90 backdrop-blur-sm ${
              isMobile ? "rounded-none pt-16 h-full shadow-xl" : "flex flex-col rounded-xl h-full overflow-hidden"
            } shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1`}
            style={{ maxHeight: "min-content" }}
          >
            <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
              <FontAwesomeIcon icon={faTable} />
              {title}
            </h2>
            <nav className="overflow-y-auto flex-grow px-3 pb-4">
              <ul className="space-y-4">
                {sections.map((section) => (
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
                                  isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-100"
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
    </>
  );
};

export default Sidebar;
