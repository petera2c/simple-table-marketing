"use client";

import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "@/components/PageWrapper";
import {
  faTable,
  faColumns,
  faEdit,
  faList,
  faRocket,
  faCode,
  faLayerGroup,
  faPalette,
  faArrowsUpDown,
  faArrowRightArrowLeft,
  faEye,
  faThumbtack,
  faAlignCenter,
  faBolt,
  faFileCode,
  faCheck,
  faTableCells,
  faPuzzlePiece,
  faCheckSquare,
  faInfinity,
  faPager,
  faDownload,
  faIcons,
  faShieldAlt,
  faGaugeHigh,
  faMobileAlt,
  faBook,
  faCodeBranch,
  faHeadset,
  faLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import React, { Suspense, useState } from "react";
import InfrastructureExample from "@/examples/infrastructure/InfrastructureExample";
import { useThemeContext } from "@/providers/ThemeProvider";
import AIVisibilityEnhancer from "@/components/AIVisibilityEnhancer";
import IconLibrarySelector from "@/components/IconLibrarySelector";
import ThemeSelector from "@/components/ThemeSelector";
import { IconLibrary, getTableIcons } from "@/utils/getTableIcons";
import { Theme } from "simple-table-core";

export default function HomeContent() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { theme: globalTheme } = useThemeContext();
  const [iconLibrary, setIconLibrary] = useState<IconLibrary>("default");
  const [selectedTheme, setSelectedTheme] = useState<Theme>();
  const tableIcons = getTableIcons(iconLibrary);

  // FAQ Schema for AI visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Simple Table?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple Table is a lightweight React data grid and table library that's only 31 kb in size. It provides comprehensive features like cell editing, column management, sorting, filtering, and TypeScript support, making it perfect for building responsive datagrids in React applications.",
        },
      },
      {
        "@type": "Question",
        name: "How does Simple Table compare to AG Grid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple Table is a free alternative to AG Grid that's much lighter (31 kb vs 2+ MB). While AG Grid has more enterprise features, Simple Table provides all the essential functionality most developers need for data grids, including cell editing, column management, sorting, filtering, and theming, without the licensing costs.",
        },
      },
      {
        "@type": "Question",
        name: "Is Simple Table free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Simple Table is completely free for pre-revenue and bootstrapped projects. For revenue-generating businesses, affordable paid plans are available. You can install it via npm and start building data grids immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Does Simple Table support TypeScript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Simple Table has full TypeScript support with comprehensive type definitions. This provides excellent developer experience with autocomplete, type checking, and IntelliSense support in your IDE.",
        },
      },
      {
        "@type": "Question",
        name: "What features does Simple Table include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple Table includes cell editing, column management (resizing, reordering, pinning, visibility), row grouping, pagination, sorting, filtering, custom themes, nested headers, custom renderers, and responsive design. It's designed to handle large datasets efficiently.",
        },
      },
      {
        "@type": "Question",
        name: "How do I install Simple Table?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can install Simple Table using npm: 'npm install simple-table-core'. Then import and use it in your React components. The library is ready to use with minimal configuration required.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.simple-table.com",
      },
    ],
  };

  // Add schemas to head
  React.useEffect(() => {
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, [faqSchema, breadcrumbSchema]);

  const handleDocumentationClick = () => {
    router.push("/docs/installation");
  };

  const handleExamplesClick = () => {
    router.push("/examples/infrastructure");
  };

  return (
    <PageWrapper>
      <AIVisibilityEnhancer pageType="home" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-[10dvh]">
        {/* Hero section */}
        <section className="relative pb-12">
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              React Data Grid
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Powerful, Lightweight and Production-Ready
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Render large datasets quickly with a highly customizable data grid that integrates
              seamlessly with your React and Next.js applications in minutes, not days. The
              lightweight alternative to AG Grid, TanStack Table, Material-UI Table, Ant Design
              Table, and Handsontable.
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
                Get Started
              </Button>

              <Button
                size="large"
                onClick={handleExamplesClick}
                className="hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                View Demos
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Theme and Icon Library Selectors */}
        <div className="mb-4 flex justify-end">
          <div className="flex items-center gap-4 flex-wrap">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-sm text-gray-600 dark:text-gray-300">Theme:</span>
              <ThemeSelector
                currentTheme={selectedTheme || globalTheme}
                setCurrentTheme={setSelectedTheme}
              />
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <span className="text-sm text-gray-600 dark:text-gray-300">Icons:</span>
              <IconLibrarySelector currentIconLibrary={iconLibrary} onChange={setIconLibrary} />
            </motion.div>
          </div>
        </div>

        {/* Demo section with animated entrance */}
        <motion.section
          className="mb-16 shadow-xl rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Suspense fallback={<div />}>
            <InfrastructureExample
              theme={selectedTheme || globalTheme}
              height={"70dvh"}
              {...tableIcons}
            />
          </Suspense>
        </motion.section>

        {/* Main Features Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon
                icon={faTable}
                className="text-blue-600 dark:text-blue-400 text-2xl"
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Full-Featured Data Grid Component
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Make your data handling look professional. Here's what our component brings to your
              React projects
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Core Data Grid Features
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get started with essential data grid functions out of the box. Simple Table provides
              all the tools you need to render, navigate, and interact with data.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: faColumns,
                  text: "Column Sorting & Filtering",
                  link: "/docs/column-sorting",
                },
                { icon: faEdit, text: "In-line Cell Editing", link: "/docs/cell-editing" },
                {
                  icon: faArrowRightArrowLeft,
                  text: "Column Reordering",
                  link: "/docs/column-reordering",
                },
                { icon: faEye, text: "Column Visibility Toggle", link: "/docs/column-visibility" },
                { icon: faThumbtack, text: "Column Pinning", link: "/docs/column-pinning" },
                { icon: faLayerGroup, text: "Row Grouping", link: "/docs/row-grouping" },
                { icon: faCheckSquare, text: "Row Selection", link: "/docs/row-selection" },
                { icon: faPager, text: "Pagination", link: "/docs/pagination" },
                { icon: faInfinity, text: "Infinite Scroll", link: "/docs/infinite-scroll" },
              ].map((item, index) => (
                <Link key={index} href={item.link}>
                  <motion.div
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-blue-600 dark:text-blue-400 text-lg"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Advanced Column Management */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-8 rounded-xl border border-blue-100 dark:border-blue-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faColumns}
                className="text-blue-600 dark:text-blue-400 text-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Advanced Column Management
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Complete control over your columns. Resize, reorder, pin, hide, and customize columns
              with intuitive drag-and-drop controls.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: faLeftRight,
                  title: "Column Resizing",
                  desc: "Adjust widths with min/max constraints",
                  link: "/docs/column-resizing",
                },
                {
                  icon: faArrowRightArrowLeft,
                  title: "Drag & Drop Reordering",
                  desc: "Smooth animations and intuitive UX",
                  link: "/docs/column-reordering",
                },
                {
                  icon: faThumbtack,
                  title: "Pin to Left/Right",
                  desc: "Lock important columns while scrolling",
                  link: "/docs/column-pinning",
                },
                {
                  icon: faEye,
                  title: "Show/Hide Columns",
                  desc: "Dynamic visibility with state management",
                  link: "/docs/column-visibility",
                },
                {
                  icon: faAlignCenter,
                  title: "Content Alignment",
                  desc: "Left, center, or right alignment",
                  link: "/docs/column-alignment",
                },
                {
                  icon: faLayerGroup,
                  title: "Nested Headers",
                  desc: "Hierarchical column structures",
                  link: "/docs/nested-headers",
                },
              ].map((item, index) => (
                <Link key={index} href={item.link}>
                  <motion.div
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-blue-600 dark:text-blue-400 text-xl mt-1"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Customization & Theming */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-8 rounded-xl border border-purple-100 dark:border-purple-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-purple-600 dark:text-purple-400 text-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Customizable Style & Theming
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Build the exact interface you need. Add custom components, adjust theming, or create
              entirely custom control panels that fit your workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: faPalette,
                  title: "Multiple Built-in Themes",
                  desc: "Professional themes ready to use",
                  link: "/docs/themes",
                },
                {
                  icon: faCode,
                  title: "CSS Variable Customization",
                  desc: "Adjust colors and spacing to your brand",
                  link: "/docs/custom-theme",
                },
                {
                  icon: faIcons,
                  title: "Custom Icons",
                  desc: "Replace default icons with your own",
                  link: "/docs/custom-icons",
                },
                {
                  icon: faTableCells,
                  title: "Custom Cell Renderers",
                  desc: "Full control over cell display",
                  link: "/docs/cell-renderer",
                },
                {
                  icon: faCode,
                  title: "Header Renderers",
                  desc: "Customize column headers",
                  link: "/docs/header-renderer",
                },
                {
                  icon: faPuzzlePiece,
                  title: "Theme Builder Tool",
                  desc: "Visual theme customization",
                  link: "/theme-builder",
                },
              ].map((item, index) => (
                <Link key={index} href={item.link}>
                  <motion.div
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-purple-600 dark:text-purple-400 text-xl mt-1"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-8 rounded-xl border border-green-100 dark:border-green-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-green-600 dark:text-green-400 text-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                High Performance Data Grid
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Handle large datasets without the lag. Optimized rendering ensures smooth scrolling
              and fast loading, even with thousands of rows.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: faGaugeHigh,
                  title: "Virtual Scrolling",
                  desc: "Renders only visible rows for optimal performance",
                },
                {
                  icon: faFileCode,
                  title: "Tiny Bundle Size",
                  desc: "Only 31 kb - won't bloat your app",
                },
                { icon: faBolt, title: "Fast Rendering", desc: "Optimized for large datasets" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-green-600 dark:text-green-400 text-3xl mb-3"
                  />
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Responsive & Mobile */}
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 p-8 rounded-xl border border-orange-100 dark:border-orange-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-orange-600 dark:text-orange-400 text-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Responsive & Mobile-Optimized
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Works seamlessly across all devices and screen sizes. Your data grids look
              professional whether users are on desktop, tablet, or mobile.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: faMobileAlt, text: "Mobile-first responsive design" },
                { icon: faTable, text: "Touch-friendly interactions" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-orange-600 dark:text-orange-400 text-lg"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Explore All Features CTA */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Explore 30+ Features
          </h3>
          <Button
            type="primary"
            size="large"
            onClick={handleDocumentationClick}
            className="hover:scale-105 transition-transform"
          >
            View Full Documentation
          </Button>
        </motion.section>

        {/* Built for Production Section */}
        <motion.section
          className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Built for Production Use
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            We're developers who needed a professional data grid solution. That's why we built
            Simple Table to be flexible, reliable, and actually enjoyable to work with.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-blue-600 dark:text-blue-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Flexible</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work with TypeScript or JavaScript. Drop it in existing projects or start fresh with
                easy configuration.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-green-600 dark:text-green-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Production-Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Battle-tested with comprehensive examples for React, Next.js, and more so you can
                ship faster.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  className="text-purple-600 dark:text-purple-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Browser Compatible
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consistent performance across major browsers: Chrome, Firefox, Edge, Safari, and
                Opera.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-indigo-600 dark:text-indigo-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Developer Friendly Docs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clear structure, detailed usage guides and interactive examples for easy copy-paste
                code.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 mb-4">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-orange-600 dark:text-orange-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Continuous Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular updates with new features and enhancements to keep the library current and
                robust.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-red-600 dark:text-red-400 text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Dedicated Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your feedback is important to us. Get timely technical support for your use cases.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Installation Section */}
        <motion.section
          className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faDownload} className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Get Full Integration In Minutes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Use with your favorite React framework, whether you're using Next.js, Gatsby, or just
              React. Simple Table will fit right in.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-950 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto border border-gray-700">
              <div className="mb-4">
                <div className="text-gray-400 mb-1"># Install via npm</div>
                <code className="text-green-400">npm install simple-table-core</code>
              </div>
              <div>
                <div className="text-gray-400 mb-1"># Or via yarn</div>
                <code className="text-green-400">yarn add simple-table-core</code>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="primary"
                size="large"
                onClick={handleDocumentationClick}
                className="hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                View Installation Guide
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Comparisons section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            How We Compare
          </h2>

          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            See how Simple Table stacks up against other popular data grid solutions. We're the
            lightweight, free alternative to expensive enterprise solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "vs AG Grid",
                description:
                  "Compare our lightweight solution against AG Grid's enterprise features and pricing",
                link: "/comparisons/simple-table-vs-ag-grid",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "vs Handsontable",
                description: "See how we match up to Handsontable's spreadsheet-like functionality",
                link: "/comparisons/simple-table-vs-handsontable",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "vs Material-UI Table",
                description: "Discover the benefits over Material-UI's basic table component",
                link: "/comparisons/simple-table-vs-material-react",
                color: "from-pink-500 to-pink-600",
              },
              {
                title: "vs Ant Design Table",
                description:
                  "Compare with Ant Design's table component for feature-rich applications",
                link: "/comparisons/simple-table-vs-ant-design",
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "vs TanStack Table",
                description:
                  "See how our ready-to-use solution compares to TanStack's headless approach",
                link: "/comparisons/simple-table-vs-tanstack",
                color: "from-green-500 to-green-600",
              },
            ].map((comparison, index) => (
              <Link key={index} href={comparison.link}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-2 bg-gradient-to-r ${comparison.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {comparison.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {comparison.description}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                        Read comparison →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Everything you need to know about Simple Table
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Getting Started Questions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faRocket} className="text-blue-600 dark:text-blue-400" />
                Getting Started
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: faTable,
                    question: "What is Simple Table?",
                    answer:
                      "Simple Table is a lightweight React data grid library (only 31 kb) designed for developers who need professional data grid functionality without the bloat. It provides 30+ features including cell editing, column management, sorting, filtering, row grouping, and full TypeScript support. Perfect for dashboards, admin panels, and data-heavy applications.",
                  },
                  {
                    icon: faDownload,
                    question: "How do I install and get started?",
                    answer: (
                      <>
                        Install via npm: 'npm install simple-table-core'. Import the component and
                        CSS, define your columns and data, and you're ready to go. Our{" "}
                        <Link
                          href="/docs/quick-start"
                          className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Quick Start guide
                        </Link>{" "}
                        has you up and running in under 5 minutes with complete code examples for
                        React and Next.js.
                      </>
                    ),
                  },
                  {
                    icon: faCode,
                    question: "Does Simple Table support TypeScript?",
                    answer:
                      "Yes! Simple Table is built with TypeScript and includes comprehensive type definitions out of the box. You get full autocomplete, type checking, and IntelliSense support, making development faster and reducing bugs.",
                  },
                  {
                    icon: faCodeBranch,
                    question: "Which frameworks and versions are supported?",
                    answer:
                      "Simple Table works with React 16.8+, React 18, React 19 and Next.js (both Pages and App Router). It's compatible with all major bundlers (Webpack, Vite, Rollup) and works in both JavaScript and TypeScript projects.",
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="p-5 cursor-pointer list-none flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <FontAwesomeIcon
                        icon={faq.icon}
                        className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                      />
                      <span className="flex-1 font-semibold text-gray-800 dark:text-white">
                        {faq.question}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        className="text-gray-400 transform group-open:rotate-90 transition-transform flex-shrink-0"
                      />
                    </summary>
                    <div className="px-5 pb-5 pl-11 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>

            {/* Features & Capabilities */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faBolt} className="text-purple-600 dark:text-purple-400" />
                Features & Capabilities
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: faList,
                    question: "What features does Simple Table include?",
                    answer: (
                      <>
                        Simple Table includes 30+ features: cell editing with validation, column
                        resizing/reordering/pinning/filtering/sorting, row selection and grouping,
                        pagination and infinite scroll, nested headers, custom cell and header
                        renderers, live data updates, aggregate functions, keyboard navigation,
                        multiple built-in themes, and full customization via CSS variables. Check
                        our{" "}
                        <Link
                          href="/docs/installation"
                          className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          documentation
                        </Link>{" "}
                        for the complete feature list.
                      </>
                    ),
                  },
                  {
                    icon: faGaugeHigh,
                    question: "How does it perform with large datasets?",
                    answer:
                      "Simple Table uses virtual scrolling to render only visible rows, allowing smooth performance with 100,000+ rows. The tiny 31 kb bundle size means fast initial load times. We've optimized rendering, sorting, and filtering to handle enterprise-scale data without lag or memory issues.",
                  },
                  {
                    icon: faMobileAlt,
                    question: "Is it mobile responsive?",
                    answer:
                      "Yes! Simple Table is fully responsive with mobile-first design. It automatically adapts to different screen sizes with touch-friendly interactions, horizontal scrolling for wide tables, and optimized rendering for mobile devices. Your data grids work seamlessly on desktop, tablet, and mobile.",
                  },
                  {
                    icon: faPalette,
                    question: "Can I customize the look and feel?",
                    answer:
                      "Absolutely! Choose from multiple built-in themes (including dark mode), customize via CSS variables for colors/spacing/fonts, replace icons with your own, create custom cell and header renderers, or build a completely custom theme. We also provide a Theme Builder tool for visual customization.",
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="p-5 cursor-pointer list-none flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <FontAwesomeIcon
                        icon={faq.icon}
                        className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0"
                      />
                      <span className="flex-1 font-semibold text-gray-800 dark:text-white">
                        {faq.question}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        className="text-gray-400 transform group-open:rotate-90 transition-transform flex-shrink-0"
                      />
                    </summary>
                    <div className="px-5 pb-5 pl-11 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>

            {/* Comparisons & Alternatives */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 dark:text-green-400" />
                Comparisons & Migration
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: faTable,
                    question: "How does Simple Table compare to AG Grid?",
                    answer:
                      "Simple Table is much lighter (31 kb vs 2+ MB) and completely free for most use cases. While AG Grid has more enterprise features, Simple Table provides all essential data grid functionality (editing, sorting, filtering, grouping, custom renderers) without licensing costs or bundle bloat. Perfect for teams who need 90% of the features at 1% of the size and cost.",
                  },
                  {
                    icon: faColumns,
                    question: "How does it compare to TanStack Table?",
                    answer:
                      "TanStack Table is a headless library requiring you to build the UI layer. Simple Table is a complete, ready-to-use component with built-in styling, themes, and interactions. If you need a table running today (not in 2 weeks), Simple Table is the faster choice. TanStack is great if you want total UI control.",
                  },
                  {
                    icon: faPuzzlePiece,
                    question: "What about Material-UI or Ant Design tables?",
                    answer:
                      "Simple Table offers significantly more features than MUI or Ant Design's basic tables (column pinning, row grouping, inline editing, advanced filtering). It's also framework-agnostic - you're not locked into a component ecosystem. Plus, our 31 kb bundle won't add the overhead of entire UI libraries.",
                  },
                  {
                    icon: faRocket,
                    question: "Can I migrate from another data grid library?",
                    answer:
                      "Yes! Our API is intuitive and similar to other popular data grids. Most migrations take 1-2 hours. We provide migration guides for AG Grid, TanStack Table, and other common libraries. The column definition format is straightforward, making the switch smooth.",
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-green-300 dark:hover:border-green-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="p-5 cursor-pointer list-none flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <FontAwesomeIcon
                        icon={faq.icon}
                        className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      />
                      <span className="flex-1 font-semibold text-gray-800 dark:text-white">
                        {faq.question}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        className="text-gray-400 transform group-open:rotate-90 transition-transform flex-shrink-0"
                      />
                    </summary>
                    <div className="px-5 pb-5 pl-11 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>

            {/* Pricing & Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-orange-600 dark:text-orange-400"
                />
                Pricing & Support
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: faCheck,
                    question: "Is Simple Table free to use?",
                    answer:
                      "Yes! Simple Table is completely free for pre-revenue startups, side projects, and bootstrapped companies. For revenue-generating businesses, we offer affordable commercial licenses starting at just a fraction of AG Grid's enterprise pricing. Check our pricing page for details.",
                  },
                  {
                    icon: faShieldAlt,
                    question: "Is it production-ready and actively maintained?",
                    answer:
                      "Absolutely! Simple Table is battle-tested in production by companies across multiple industries. We ship regular updates with new features, performance improvements, and bug fixes. The library is actively maintained with responsive support and a growing community.",
                  },
                  {
                    icon: faHeadset,
                    question: "What kind of support do you offer?",
                    answer:
                      "We provide comprehensive documentation with interactive examples, GitHub discussions for community support, and dedicated email support for commercial license holders. Most questions are answered within 24 hours. We also take feature requests seriously and implement the most valuable ones.",
                  },
                  {
                    icon: faBook,
                    question: "Where can I find documentation and examples?",
                    answer: (
                      <>
                        Our{" "}
                        <Link
                          href="/docs/installation"
                          className="text-orange-600 dark:text-orange-400 hover:underline cursor-pointer font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          documentation
                        </Link>{" "}
                        includes detailed guides for every feature, interactive live demos you can
                        edit in your browser, real-world{" "}
                        <Link
                          href="/examples/infrastructure"
                          className="text-orange-600 dark:text-orange-400 hover:underline cursor-pointer font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          examples
                        </Link>{" "}
                        (billing, HR, infrastructure, manufacturing, sales), code snippets ready to
                        copy-paste, and a complete{" "}
                        <Link
                          href="/docs/api-reference"
                          className="text-orange-600 dark:text-orange-400 hover:underline cursor-pointer font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          API reference
                        </Link>
                        . Everything you need to succeed is here.
                      </>
                    ),
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="p-5 cursor-pointer list-none flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <FontAwesomeIcon
                        icon={faq.icon}
                        className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0"
                      />
                      <span className="flex-1 font-semibold text-gray-800 dark:text-white">
                        {faq.question}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        className="text-gray-400 transform group-open:rotate-90 transition-transform flex-shrink-0"
                      />
                    </summary>
                    <div className="px-5 pb-5 pl-11 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
