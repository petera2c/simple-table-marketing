import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faColumns,
  faPencilAlt,
  faSort,
  faPager,
  faPalette,
  faUniversalAccess,
  faBolt,
  faQuestionCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const DocsCard = ({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: any;
}) => {
  return (
    <a
      href={link}
      className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <FontAwesomeIcon icon={icon} className="text-blue-600 text-xl" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

const DocsPage = () => {
  return (
    <>
      <SEO
        title={SEO_STRINGS.docs.title}
        description={SEO_STRINGS.docs.description}
        keywords={SEO_STRINGS.docs.keywords}
        canonicalUrl="/docs"
      />

      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple Table Documentation
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to the Simple Table documentation. Here you'll find everything you need to know about using and
          customizing the Simple Table component for your React applications.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DocsCard
            title="Getting Started"
            description="Learn how to install and set up Simple Table in your React project."
            link="/docs/getting-started"
            icon={faRocket}
          />

          <DocsCard
            title="Column Features"
            description="Customize columns with sorting, resizing, reordering, and more."
            link="/docs/column-features"
            icon={faColumns}
          />

          <DocsCard
            title="Cell Editing"
            description="Enable and customize cell editing capabilities."
            link="/docs/cell-editing"
            icon={faPencilAlt}
          />

          <DocsCard
            title="Column Sorting"
            description="Implement sorting options for your table columns."
            link="/docs/column-sorting"
            icon={faSort}
          />

          <DocsCard
            title="Pagination"
            description="Add pagination to handle large datasets efficiently."
            link="/docs/pagination"
            icon={faPager}
          />

          <DocsCard
            title="Theming & Styling"
            description="Customize the look and feel of your tables."
            link="/docs/theming"
            icon={faPalette}
          />

          <DocsCard
            title="Accessibility"
            description="Ensure your tables are accessible to all users."
            link="/docs/accessibility"
            icon={faUniversalAccess}
          />

          <DocsCard
            title="Performance"
            description="Optimize table performance for large datasets."
            link="/docs/performance"
            icon={faBolt}
          />

          {/* Add more doc cards as needed */}
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 mr-3" />
            Need Help?
          </h2>
          <p className="text-gray-700 mb-4">Can't find what you're looking for? Check out our community resources:</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourusername/simple-table"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a
              href="https://discord.gg/yourdiscord"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FontAwesomeIcon icon={faDiscord} />
              Discord Community
            </a>
            <a
              href="mailto:support@simpletable.com"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email Support
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DocsPage;
