import { motion } from "framer-motion";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faTable,
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faLayerGroup,
  faPager,
  faGears,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedBackground from "../components/AnimatedBackground";
import { trackButtonClick, trackLinkClick } from "../utils/analytics";
import SEO from "../components/SEO";
import { SEO_STRINGS } from "../constants/strings/seo";
import { UI_STRINGS } from "../constants/strings/ui";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";
import { useState, useEffect } from "react";

const Docs = () => {
  const [activeSection, setActiveSection] = useState<string>("installation");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Check if viewport is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    trackButtonClick(buttonName, "Documentation Page");
  };

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (isMobile) {
      setSidebarOpen(false);
    }

    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define doc sections
  const sections = [
    { id: "installation", label: "Installation", icon: faCode },
    { id: "quick-start", label: "Quick Start", icon: faRocket },
    { id: "basic-usage", label: "Basic Usage", icon: faTable },
    { id: "props", label: "Props Reference", icon: faGears },
    { id: "column-features", label: "Column Management", icon: faColumns },
    { id: "cell-editing", label: "Cell Editing", icon: faEdit },
    { id: "sorting-filtering", label: "Sorting & Filtering", icon: faSort },
    { id: "row-grouping", label: "Row Grouping", icon: faLayerGroup },
    { id: "pagination", label: "Pagination", icon: faPager },
    { id: "theming", label: "Theming", icon: faPaintBrush },
  ];

  return (
    <>
      <SEO
        title={SEO_STRINGS.docs.title}
        description={SEO_STRINGS.docs.description}
        keywords={SEO_STRINGS.docs.keywords}
        canonicalUrl="/docs"
      />

      <AnimatedBackground />

      <div className="relative z-10 md:max-w-none max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6">
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
              className={`md:w-64 w-full ${
                isMobile
                  ? "fixed left-0 top-0 h-full z-40 bg-white/95 shadow-xl p-6 pt-20"
                  : "sticky top-24 h-[calc(100vh-150px)] overflow-y-auto"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faTable} />
                  Documentation
                </h2>
                <nav>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => handleSectionClick(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 transition-colors ${
                            activeSection === section.id ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
                          }`}
                        >
                          <FontAwesomeIcon icon={section.icon} className="w-4" />
                          <span>{section.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-2">
                    <Button
                      size="middle"
                      href={TECHNICAL_STRINGS.links.npm}
                      target="_blank"
                      onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.npmPackage)}
                      className="flex items-center justify-center hover:scale-105 transition-transform w-full"
                    >
                      <FontAwesomeIcon icon={faNpm} className="mr-2" />
                      {UI_STRINGS.docs.buttons.npmPackage}
                    </Button>
                    <Button
                      size="middle"
                      href={TECHNICAL_STRINGS.links.discord}
                      target="_blank"
                      onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.joinDiscord)}
                      className="flex items-center justify-center hover:scale-105 transition-transform w-full"
                    >
                      <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                      {UI_STRINGS.docs.buttons.joinDiscord}
                    </Button>
                    <Button
                      size="middle"
                      href={TECHNICAL_STRINGS.links.github}
                      target="_blank"
                      onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.github)}
                      className="flex items-center justify-center hover:scale-105 transition-transform w-full"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" />
                      {UI_STRINGS.docs.buttons.github}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}

          {/* Main content */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faTable} className="text-blue-600 text-3xl" />
              <h1 className="text-3xl font-bold text-gray-800">{UI_STRINGS.docs.title}</h1>
            </motion.div>

            {/* Installation Section */}
            <section id="installation" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-blue-500" />
                {UI_STRINGS.docs.sections.installation}
              </h2>

              <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>
                    {`# npm
${TECHNICAL_STRINGS.installation.npm}

# yarn
${TECHNICAL_STRINGS.installation.yarn}

# pnpm
${TECHNICAL_STRINGS.installation.pnpm}`}
                  </code>
                </pre>
              </div>
            </section>

            {/* CSS Setup Section */}
            <section id="quick-start" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faRocket} className="text-blue-500" />
                Quick Start
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{UI_STRINGS.docs.cssSetup.title}</h3>
                <p className="text-gray-700">{UI_STRINGS.docs.cssSetup.description}</p>
                <div className="bg-gray-800 text-white p-4 rounded-md mt-3 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <code>{TECHNICAL_STRINGS.css.import}</code>
                  </pre>
                </div>
                <p className="text-gray-700 mt-3">{UI_STRINGS.docs.cssSetup.note}</p>
              </div>
            </section>

            {/* Basic Usage Section */}
            <section id="basic-usage" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faTable} className="text-blue-500" />
                Basic Usage
              </h2>

              <p className="mb-4 text-gray-700">
                Simple Table is a powerful yet lightweight React grid component that provides a flexible, customizable,
                and high-performance solution for displaying and manipulating tabular data in your applications.
              </p>

              <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>
                    {`import React from 'react';
import { SimpleTable } from 'simple-table';
import 'simple-table/dist/style.css';

const Example = () => {
  const headers = [
    { label: 'Name', accessor: 'name', width: 150 },
    { label: 'Email', accessor: 'email', width: 200 },
    { label: 'Age', accessor: 'age', width: 80 },
  ];

  const rows = [
    {
      rowMeta: { rowId: '1' },
      rowData: { name: 'John Doe', email: 'john@example.com', age: 28 }
    },
    {
      rowMeta: { rowId: '2' },
      rowData: { name: 'Jane Smith', email: 'jane@example.com', age: 32 }
    },
    // More rows...
  ];

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      height="400px"
    />
  );
};

export default Example;`}
                  </code>
                </pre>
              </div>
            </section>

            {/* Props Section */}
            <section id="props" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faGears} className="text-blue-500" />
                {UI_STRINGS.docs.sections.props}
              </h2>

              <p className="mb-4 text-gray-700">The Simple Table component accepts the following props:</p>

              <div className="mb-6">
                <h3 className="font-bold mb-2">defaultHeaders</h3>
                <p className="ml-4 mb-2">
                  An array of <code className="bg-gray-100 px-1 py-0.5 rounded">HeaderObject</code> defining the table
                  headers. Each <code className="bg-gray-100 px-1 py-0.5 rounded">HeaderObject</code> includes:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>
                    <strong>label</strong>: A string representing the display name of the column header.
                  </li>
                  <li>
                    <strong>accessor</strong>: A string used to access the corresponding data in each row.
                  </li>
                  <li>
                    <strong>width</strong>: A number specifying the width of the column.
                  </li>
                  <li>
                    <strong>isEditable</strong>: An optional boolean indicating if the column is editable.
                  </li>
                  <li>
                    <strong>isSortable</strong>: An optional boolean indicating if the column is sortable.
                  </li>
                  <li>
                    <strong>type</strong>: An optional string specifying the data type of the column. Can be "string",
                    "number", "boolean", "date", or "enum".
                  </li>
                  <li>
                    <strong>cellRenderer</strong>: An optional function that takes a row object and returns a{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">ReactNode</code> for custom cell rendering.
                  </li>
                  <li>
                    <strong>align</strong>: Text alignment within cells - "left", "center", or "right"
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">rows</h3>
                <p className="ml-4 mb-2">
                  An array of data rows to be displayed in the table. Each row object should have:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>
                    <strong>rowMeta</strong>: Object containing metadata for the row
                    <ul className="list-disc pl-8 space-y-1">
                      <li>
                        <strong>rowId</strong>: Unique identifier for the row
                      </li>
                      <li>
                        <strong>isExpanded</strong>: Optional boolean for row grouping expansion state
                      </li>
                      <li>
                        <strong>children</strong>: Optional array of child rows for row grouping
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>rowData</strong>: Object containing the actual data to display (keys should match header
                    accessors)
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>theme</strong>: Theme name to apply to the table. Options include "light", "dark",
                  "high-contrast", etc.
                </p>
                <p>
                  <strong>height</strong>: The height of the table. Can be a string (e.g., "500px", "calc(100vh -
                  100px)") or "auto".
                </p>
                <p>
                  <strong>shouldPaginate</strong>: A boolean to enable or disable pagination. Default is{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">true</code>.
                </p>
                <p>
                  <strong>rowsPerPage</strong>: The number of rows to display per page. Default is{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">10</code>.
                </p>
                <p>
                  <strong>columnResizing</strong>: A boolean to enable or disable column resizing. Default is{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">true</code>.
                </p>
                <p>
                  <strong>draggable</strong>: A boolean to enable or disable column dragging.
                </p>
                <p>
                  <strong>pinned</strong>: A boolean to enable or disable column pinning.
                </p>
                <p>
                  <strong>editColumns</strong>: A boolean to enable or disable column management.
                </p>
                <p>
                  <strong>hideFooter</strong>: A boolean to hide or show the footer. Default is{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">false</code>.
                </p>
                <p>
                  <strong>selectableCells</strong>: A boolean to enable or disable cell selection.
                </p>
                <p>
                  <strong>selectableColumns</strong>: A boolean to enable selection of entire columns by clicking
                  headers.
                </p>
                <p>
                  <strong>onCellChange</strong>: A function called when a cell value changes.
                </p>
                <p>
                  <strong>nextIcon</strong>: A React element to display as the next page icon.
                </p>
                <p>
                  <strong>prevIcon</strong>: A React element to display as the previous page icon.
                </p>
                <p>
                  <strong>sortDownIcon</strong>: A React element to display as the sort down icon.
                </p>
                <p>
                  <strong>sortUpIcon</strong>: A React element to display as the sort up icon.
                </p>
              </div>
            </section>

            {/* Column Management Section */}
            <section id="column-features" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faColumns} className="text-blue-500" />
                Column Management
              </h2>

              <p className="mb-4 text-gray-700">
                Simple Table provides powerful column management features to create a highly interactive table
                experience:
              </p>

              <ul className="list-disc pl-8 space-y-2 mb-6">
                <li>
                  <strong>Column Resizing</strong>: Drag column edges to resize them to your preferred width
                </li>
                <li>
                  <strong>Column Reordering</strong>: Drag and drop columns to change their order
                </li>
                <li>
                  <strong>Column Pinning</strong>: Lock columns to the left or right side of the table
                </li>
                <li>
                  <strong>Column Visibility</strong>: Show or hide columns dynamically
                </li>
                <li>
                  <strong>Custom Column Width</strong>: Set initial column widths or let them auto-size
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                <h3 className="font-bold mb-2">Example</h3>
                <p className="mb-2">Enable column management with the following props:</p>
                <code className="block bg-gray-100 p-2 rounded">
                  &lt;SimpleTable
                  <br />
                  &nbsp;&nbsp;defaultHeaders={"{headers}"}
                  <br />
                  &nbsp;&nbsp;rows={"{rows}"}
                  <br />
                  &nbsp;&nbsp;columnResizing={"{true}"}
                  <br />
                  &nbsp;&nbsp;draggable={"{true}"}
                  <br />
                  &nbsp;&nbsp;pinned={"{true}"}
                  <br />
                  &nbsp;&nbsp;editColumns={"{true}"}
                  <br />
                  /&gt;
                </code>
              </div>
            </section>

            {/* Cell Editing Section */}
            <section id="cell-editing" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                Cell Editing
              </h2>

              <p className="mb-4 text-gray-700">Simple Table provides robust cell editing capabilities:</p>

              <ul className="list-disc pl-8 space-y-2 mb-6">
                <li>
                  <strong>Inline Editing</strong>: Edit cell contents directly within the table
                </li>
                <li>
                  <strong>Type-Specific Editors</strong>: Different editors for strings, numbers, booleans, dates, etc.
                </li>
                <li>
                  <strong>Validation</strong>: Built-in validation to ensure data integrity
                </li>
                <li>
                  <strong>Custom Editors</strong>: Define your own cell editors for special data types
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-bold mb-2">Cell Editing Example</h3>
                <p className="mb-2">
                  To enable cell editing, set the <code className="bg-gray-100 px-1 py-0.5 rounded">isEditable</code>{" "}
                  property on your header definition:
                </p>
                <code className="block bg-gray-100 p-2 rounded">
                  const headers = [
                  <br />
                  &nbsp;&nbsp;{'{ label: "Name", accessor: "name", width: 150, isEditable: true },'}
                  <br />
                  &nbsp;&nbsp;{'{ label: "Email", accessor: "email", width: 200, isEditable: true },'}
                  <br />
                  &nbsp;&nbsp;{'{ label: "Age", accessor: "age", width: 80, isEditable: true, type: "number" },'}
                  <br />
                  ];
                </code>
              </div>
            </section>

            {/* More sections would be added here but trimming for space */}

            {/* Theming Section */}
            <section id="theming" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faPaintBrush} className="text-blue-500" />
                {UI_STRINGS.docs.sections.styles}
              </h2>

              <p className="mb-4 text-gray-700">
                All styles for the Simple Table are customizable through CSS variables. You can override these variables
                in your own CSS to match your application's design system.
              </p>

              <h3 className="font-bold mb-2">CSS Variables</h3>
              <p className="mb-4">
                You can override the following CSS variables to customize the appearance of the table:
              </p>

              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>{TECHNICAL_STRINGS.css.themeVariables.light}</code>
                </pre>
              </div>
            </section>

            {/* License Section */}
            <section id="license" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} className="text-blue-500" />
                {UI_STRINGS.docs.sections.license}
              </h2>
              <p>This project is licensed under the MIT License</p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 mb-4">
                  {UI_STRINGS.docs.discord.text}{" "}
                  <a
                    href={TECHNICAL_STRINGS.links.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkClick("Documentation Discord", TECHNICAL_STRINGS.links.discord)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {TECHNICAL_STRINGS.links.discord}
                  </a>
                  . I am happy to help and make this table even better!
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Docs;
