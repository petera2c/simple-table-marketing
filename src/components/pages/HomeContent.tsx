"use client";

import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faColumns,
  faEdit,
  faList,
  faRocket,
  faLightbulb,
  faCode,
  faLayerGroup,
  faPalette,
  faArrowsUpDown,
  faArrowRightArrowLeft,
  faEye,
  faThumbtack,
  faAlignCenter,
  faClock,
  faBolt,
  faFileCode,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { trackButtonClick } from "../../utils/analytics";
import { UI_STRINGS } from "../../constants/strings/ui";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Suspense } from "react";
import FinancialExample from "@/examples/finance/FinanceExample";

// Define feature data with more details
const features = [
  {
    title: UI_STRINGS.home.features.highlyCustomizable.title,
    description: UI_STRINGS.home.features.highlyCustomizable.description,
    icon: faTable,
    link: "/docs/themes",
    details: "Multiple built-in themes with complete CSS variable customization system.",
  },
  {
    title: UI_STRINGS.home.features.cellEditing.title,
    description: UI_STRINGS.home.features.cellEditing.description,
    icon: faEdit,
    link: "/docs/cell-editing",
    details: "Edit cell values with input validation and controlled state management.",
  },
  {
    title: "Column Management",
    description: "Drag, drop, and organize like a data Marie Kondo",
    icon: faColumns,
    link: "/docs/column-reordering",
    details: "Reorder, resize, pin, hide and customize columns with intuitive controls.",
  },
  {
    title: "Column Resizing",
    description: "Adjust column widths to fit your content perfectly",
    icon: faArrowsUpDown,
    link: "/docs/column-resizing",
    details: "Resize columns with minimum and maximum width constraints for optimal layouts.",
  },
  {
    title: "Column Reordering",
    description: "Drag & drop columns to your preferred arrangement",
    icon: faArrowRightArrowLeft,
    link: "/docs/column-reordering",
    details: "Intuitive drag-and-drop reordering with smooth animations.",
  },
  {
    title: "Column Visibility",
    description: "Show or hide columns to focus on what matters",
    icon: faEye,
    link: "/docs/column-visibility",
    details: "Toggle column visibility with persistent state management.",
  },
  {
    title: "Column Pinning",
    description: "Lock important columns in place while scrolling",
    icon: faThumbtack,
    link: "/docs/column-pinning",
    details: "Pin columns to left or right sides while scrolling horizontally.",
  },
  {
    title: "Column Alignment",
    description: "Align content for optimal readability",
    icon: faAlignCenter,
    link: "/docs/column-alignment",
    details: "Left, center, or right alignment options for different data types.",
  },
  {
    title: "Nested Headers",
    description: "Create hierarchical column structures",
    icon: faLayerGroup,
    link: "/docs/nested-headers",
    details: "Group related columns under parent headers for complex data relationships.",
  },
  {
    title: "Row Grouping",
    description: "Organize data with collapsible hierarchies",
    icon: faLayerGroup,
    link: "/docs/row-grouping",
    details: "Create expandable/collapsible row hierarchies with multiple nesting levels.",
  },
  {
    title: UI_STRINGS.home.features.pagination.title,
    description: UI_STRINGS.home.features.pagination.description,
    icon: faList,
    link: "/docs/pagination",
    details: "Built-in pagination with customizable rows-per-page and navigation controls.",
  },
  {
    title: "Theming System",
    description: "Customize the look and feel with zero effort",
    icon: faPalette,
    link: "/docs/themes",
    details: "Multiple built-in themes and complete CSS variable customization.",
  },
];

export default function HomeContent() {
  const isMobile = useIsMobile();
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleDocumentationClick = () => {
    trackButtonClick("Documentation", "Homepage Hero");
    router.push("/docs/installation");
  };

  const handleExamplesClick = () => {
    trackButtonClick("Examples", "Homepage Hero");
    router.push("/examples/finance");
  };

  const handleFeatureClick = (featureTitle: string, link: string) => {
    trackButtonClick("Feature Click", featureTitle);
    if (link) {
      router.push(link);
    }
  };

  return (
    <>
      {/* Page-wide animated background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-[12dvh]">
        {/* Hero section */}
        <section className="relative pb-12">
          {/* Hero content with animations */}
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {UI_STRINGS.home.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Build dynamic React tables in minutes with a lightweight, free, and customizable
              library
            </motion.p>

            <motion.div
              className={`${isMobile ? "flex flex-col gap-4" : "flex justify-center gap-4"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                className="hover:scale-105 transition-transform"
                icon={<FontAwesomeIcon icon={faCode} />}
                onClick={handleDocumentationClick}
                size="large"
                type="primary"
              >
                Documentation
              </Button>

              <Button
                size="large"
                onClick={handleExamplesClick}
                className="hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Demos
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Demo section with animated entrance */}
        <motion.section
          className="mb-16 shadow-xl overflow-hidden min-h-[70dvh]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Suspense fallback={<div />}>
            <FinancialExample theme="light" height={"70dvh"} />
          </Suspense>
        </motion.section>

        {/* Feature Categories Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Everything You Need In A Table
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faColumns} />
                Column Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-500" />
                  Resizing & Reordering
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-500" />
                  Visibility & Pinning
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-500" />
                  Sorting & Alignment
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-500" />
                  Nested Headers
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} />
                Row & Cell Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-500" />
                  Row Grouping & Height
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-500" />
                  Cell Editing
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-500" />
                  Cell Highlighting
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-500" />
                  Custom Cell Renderers
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100">
              <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faPalette} />
                Customization
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  Multiple Built-in Themes
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  Custom CSS Theming
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  Custom Icons
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  Theme Builder Tool
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Features section with staggered animation */}
        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => handleFeatureClick(feature.title, feature.link)}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={feature.icon} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Installation Section */}
        <motion.section
          className="my-8 bg-gray-50 rounded-xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 justify-center">
            <FontAwesomeIcon icon={faCode} className="text-blue-500" />
            Quick Installation
          </h2>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
            <code>npm install simple-table-core</code>
          </div>

          <div className="text-center">
            <Button type="primary" size="large" onClick={handleDocumentationClick}>
              View Full Documentation
            </Button>
          </div>
        </motion.section>

        {/* Fun Facts section */}
        <motion.section
          className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
            {UI_STRINGS.home.funFacts.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: faRocket,
                text: "Built by developers who actually use tables (shocking, we know)",
                color: "text-blue-500",
              },
              {
                icon: faTable,
                text: "Zero table flipping incidents reported",
                color: "text-purple-500",
              },
              {
                icon: faCode,
                text: "Makes Excel users question their life choices",
                color: "text-green-500",
              },
              {
                icon: faClock,
                text: "More reliable than your project estimates",
                color: "text-orange-500",
              },
              {
                icon: faBolt,
                text: "Optimized performance even with large datasets",
                color: "text-indigo-500",
              },
              {
                icon: faFileCode,
                text: "Bundle size that won't make your app cry",
                color: "text-red-500",
              },
            ].map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gray-50 ${fact.color}`}>
                    <FontAwesomeIcon icon={fact.icon} className="text-lg" />
                  </div>
                  <p className="text-gray-700 text-md">{fact.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
