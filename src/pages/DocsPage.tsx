import { motion } from "framer-motion";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import AnimatedBackground from "../components/AnimatedBackground";
import { trackButtonClick, trackLinkClick } from "../utils/analytics";
import SEO from "../components/SEO";
import { SEO_STRINGS } from "../constants/strings/seo";
import { UI_STRINGS } from "../constants/strings/ui";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";

const Docs = () => {
  const handleButtonClick = (buttonName: string) => {
    trackButtonClick(buttonName, "Documentation Page");
  };

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
  };

  return (
    <>
      <SEO
        title={SEO_STRINGS.docs.title}
        description={SEO_STRINGS.docs.description}
        keywords={SEO_STRINGS.docs.keywords}
        canonicalUrl="/docs"
      />

      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8"
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

          <motion.div
            className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{UI_STRINGS.docs.cssSetup.title}</h2>
            <p className="text-gray-700">{UI_STRINGS.docs.cssSetup.description}</p>
            <div className="bg-gray-800 text-white p-4 rounded-md mt-3 overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                <code>{TECHNICAL_STRINGS.css.import}</code>
              </pre>
            </div>
            <p className="text-gray-700 mt-3">{UI_STRINGS.docs.cssSetup.note}</p>
          </motion.div>

          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
          </motion.p>

          <motion.p
            className="text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Simple Table is a powerful yet lightweight React grid component that provides a flexible, customizable, and
            high-performance solution for displaying and manipulating tabular data in your applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              size="large"
              href={TECHNICAL_STRINGS.links.npm}
              target="_blank"
              onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.npmPackage)}
              className="flex items-center hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={faNpm} className="mr-2" />
              {UI_STRINGS.docs.buttons.npmPackage}
            </Button>
            <Button
              size="large"
              href={TECHNICAL_STRINGS.links.discord}
              target="_blank"
              onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.joinDiscord)}
              className="flex items-center hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              {UI_STRINGS.docs.buttons.joinDiscord}
            </Button>
            <Button
              size="large"
              href={TECHNICAL_STRINGS.links.github}
              target="_blank"
              onClick={() => handleButtonClick(UI_STRINGS.docs.buttons.github)}
              className="flex items-center hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              {UI_STRINGS.docs.buttons.github}
            </Button>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            {UI_STRINGS.docs.sections.installation}
          </motion.h2>

          <motion.div
            className="bg-gray-800 text-white p-4 rounded-md mb-8 overflow-x-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
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
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            {UI_STRINGS.docs.sections.props}
          </motion.h2>

          <motion.div
            className="mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="mb-4">The Simple Table component accepts the following props:</p>

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
                <strong>height</strong>: The height of the table. Can be a string (e.g., "500px", "calc(100vh - 100px)")
                or "auto".
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
                <strong>selectableColumns</strong>: A boolean to enable selection of entire columns by clicking headers.
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
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {UI_STRINGS.docs.sections.styles}
          </motion.h2>

          <motion.div
            className="mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <p className="mb-4">
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
          </motion.div>

          <motion.div
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{UI_STRINGS.docs.sections.license}</h2>
            <p>This project is licensed under the MIT License</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Docs;
