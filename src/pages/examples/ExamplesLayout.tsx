import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { trackLinkClick } from "../../utils/analytics";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faUsers, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import PageLayout from "../../components/PageLayout";
import ConfigurableSidebar, { SidebarConfig } from "../../components/ConfigurableSidebar";
import ExpandableSection from "../../components/ExpandableSection";

// Define section structure types
interface ExampleSection {
  id: string;
  label: string;
  icon: IconDefinition;
  subsections: ExampleSubsection[];
}

interface ExampleSubsection {
  id: string;
  label: string;
  path: string;
  icon: IconDefinition;
}

// Define example sections - only including implemented examples
const exampleSections: ExampleSection[] = [
  {
    id: "examples",
    label: "Dashboard Examples",
    icon: faChartLine,
    subsections: [
      { id: "finance", label: "Financial Dashboard", path: "/examples/finance", icon: faChartLine },
      { id: "manufacturing", label: "Manufacturing Metrics", path: "/examples/manufacturing", icon: faIndustry },
      { id: "hr", label: "HR Management", path: "/examples/hr", icon: faUsers },
    ],
  },
];

const ExamplesLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Initialize expanded sections
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};

    exampleSections.forEach((section) => {
      const isActive = section.subsections.some((subsection) => subsection.path === location.pathname);
      initialExpandedState[section.id] = isMobile ? isActive : true;
    });

    setExpandedSections(initialExpandedState);
  }, [location.pathname, isMobile]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
  };

  // Create the sidebar content
  const sidebarContent = (
    <div>
      {exampleSections.map((section) => (
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
                  <FontAwesomeIcon icon={subsection.icon} className="w-3.5 h-3.5" />
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
    title: "Data Table Examples",
    icon: faChartLine,
    sidebarContent,
  };

  return (
    <PageLayout sidebar={<ConfigurableSidebar config={sidebarConfig} />}>
      <Outlet />
    </PageLayout>
  );
};

export default ExamplesLayout;
