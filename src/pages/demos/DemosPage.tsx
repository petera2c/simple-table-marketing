import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faTableCells,
  faPuzzlePiece,
  faList,
  faArrowsAlt,
  faEye,
  faThumbtack,
  faAlignLeft,
  faSort,
  faEdit,
  faCopy,
  faCode,
  faLayerGroup,
  faPager,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { trackLinkClick } from "../../utils/analytics";

// Demo card component for consistent styling
interface DemoCardProps {
  title: string;
  description: string;
  link: string;
  icon: any;
}

const DemoCard = ({ title, description, link, icon }: DemoCardProps) => {
  const handleClick = () => {
    trackLinkClick(title, link);
  };

  return (
    <Link
      to={link}
      onClick={handleClick}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-100"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const DemosPage = () => {
  // List of demos organized by categories
  const columnDemos = [
    {
      title: "Column Properties",
      description: "Configure column labels, widths, alignment, and more.",
      link: "/demos/column-properties",
      icon: faList,
    },
    {
      title: "Column Resizing",
      description: "Allow users to resize columns with drag handles.",
      link: "/demos/column-resizing",
      icon: faArrowsAlt,
    },
    {
      title: "Column Visibility",
      description: "Toggle column visibility dynamically.",
      link: "/demos/column-visibility",
      icon: faEye,
    },
    {
      title: "Column Pinning",
      description: "Keep important columns in view while scrolling.",
      link: "/demos/column-pinning",
      icon: faThumbtack,
    },
    {
      title: "Column Alignment",
      description: "Control text alignment in columns.",
      link: "/demos/column-alignment",
      icon: faAlignLeft,
    },
    {
      title: "Column Sorting",
      description: "Sort table data by clicking column headers.",
      link: "/demos/column-sorting",
      icon: faSort,
    },
  ];

  const cellDemos = [
    {
      title: "Cell Editing",
      description: "Enable inline cell editing with validation.",
      link: "/demos/cell-editing",
      icon: faEdit,
    },
    {
      title: "Cell Highlighting",
      description: "Select and highlight cells for copy/paste.",
      link: "/demos/cell-highlighting",
      icon: faCopy,
    },
    {
      title: "Cell Renderer",
      description: "Create custom cell renderers for rich content.",
      link: "/demos/cell-renderer",
      icon: faCode,
    },
  ];

  const advancedDemos = [
    {
      title: "Row Grouping",
      description: "Group and nest rows hierarchically.",
      link: "/demos/row-grouping",
      icon: faLayerGroup,
    },
    {
      title: "Pagination",
      description: "Paginate large datasets efficiently.",
      link: "/demos/pagination",
      icon: faPager,
    },
    {
      title: "Theming",
      description: "Customize table appearance with themes.",
      link: "/demos/theming",
      icon: faPaintBrush,
    },
  ];

  return (
    <>
      <SEO
        title="Interactive Demos - Simple Table"
        description="Explore interactive demos of Simple Table capabilities including sorting, filtering, editing, and more."
        keywords="demos, examples, table demos, react table, react grid, data visualization"
        canonicalUrl="/demos"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Interactive Demos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore working examples of Simple Table's features. Each demo showcases specific functionality with live,
            interactive tables.
          </p>
        </motion.div>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FontAwesomeIcon icon={faColumns} className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Column Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {columnDemos.map((demo) => (
              <DemoCard
                key={demo.link}
                title={demo.title}
                description={demo.description}
                link={demo.link}
                icon={demo.icon}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FontAwesomeIcon icon={faTableCells} className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Cell Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cellDemos.map((demo) => (
              <DemoCard
                key={demo.link}
                title={demo.title}
                description={demo.description}
                link={demo.link}
                icon={demo.icon}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FontAwesomeIcon icon={faPuzzlePiece} className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Advanced Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedDemos.map((demo) => (
              <DemoCard
                key={demo.link}
                title={demo.title}
                description={demo.description}
                link={demo.link}
                icon={demo.icon}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default DemosPage;
