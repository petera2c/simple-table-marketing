"use client";

import { Button, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "@/components/PageWrapper";
import { faRocket, faCode, faBox, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useGitHubStars } from "@/hooks/useGitHubStars";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import InfrastructureExample from "@/examples/infrastructure/InfrastructureExample";
import { useThemeContext } from "@/providers/ThemeProvider";
import AIVisibilityEnhancer from "@/components/AIVisibilityEnhancer";
import IconLibrarySelector from "@/components/IconLibrarySelector";
import ThemeSelector from "@/components/ThemeSelector";
import { IconLibrary, getTableIcons } from "@/utils/getTableIcons";
import { Theme } from "simple-table-core";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import { DEFAULT_EXAMPLE_PATH } from "@/constants/global";
import { SIMPLE_TABLE_INFO, AG_GRID_TOTAL_SIZE } from "@/constants/packageInfo";
import { getExampleUrl } from "@/utils/getExampleUrl";

// Dynamically import heavy components that are below the fold or conditional
const CodeBlock = dynamic(() => import("@/components/CodeBlock"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), {
  ssr: true,
});
const ProductionSection = dynamic(() => import("@/components/sections/ProductionSection"), {
  ssr: true,
});
const InstallationSection = dynamic(() => import("@/components/sections/InstallationSection"), {
  ssr: true,
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: true });
const ComparisonsSection = dynamic(() => import("@/components/sections/ComparisonsSection"), {
  ssr: true,
});

export default function HomeContent() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { theme } = useThemeContext();
  const { stars } = useGitHubStars("petera2c", "simple-table");
  const [iconLibrary, setIconLibrary] = useState<IconLibrary>("default");
  const [selectedTheme, setSelectedTheme] = useState<Theme>();
  const [isCodeVisible, setIsCodeVisible] = useState(false);
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
          text: `Simple Table is a lightweight React data grid and table library that's only ${SIMPLE_TABLE_INFO.bundleSizeMinGzip} in size. It provides comprehensive features like cell editing, column management, sorting, filtering, and TypeScript support, making it perfect for building responsive datagrids in React applications.`,
        },
      },
      {
        "@type": "Question",
        name: "How does Simple Table compare to AG Grid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Simple Table is a free alternative to AG Grid that's much lighter (${SIMPLE_TABLE_INFO.bundleSizeMinGzip} vs ${AG_GRID_TOTAL_SIZE}). While AG Grid has more enterprise features, Simple Table provides all the essential functionality most developers need for data grids, including cell editing, column management, sorting, filtering, and theming, without the licensing costs.`,
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
    router.push(getExampleUrl(DEFAULT_EXAMPLE_PATH, theme));
  };

  return (
    <PageWrapper>
      <AIVisibilityEnhancer pageType="home" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-[6dvh]">
        {/* Hero section */}
        <section className="relative pb-12">
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* GitHub Star Button */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button
                href="https://github.com/petera2c/simple-table"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FontAwesomeIcon icon={faGithub} />}
                className="rounded-full px-2 py-3"
                size="small"
              >
                <span className="font-medium">Star us!</span>
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <span className="text-sm font-semibold">{stars || ""}</span>
              </Button>
            </motion.div>

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
        <div className="mb-4 flex justify-between items-center flex-wrap gap-4">
          <motion.div
            className="flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Tooltip title={isCodeVisible ? "Show preview" : "Show code"}>
              <Button
                className="min-w-[120px]"
                icon={<FontAwesomeIcon icon={faCode} />}
                onClick={() => setIsCodeVisible(!isCodeVisible)}
              >
                {isCodeVisible ? "Preview" : "Code"}
              </Button>
            </Tooltip>
            <Tooltip title="Sandbox">
              <Button
                href={SANDBOX_LIST["examples/infrastructure/InfrastructureExample.tsx"].url}
                icon={<FontAwesomeIcon icon={faBox} />}
                target="_blank"
              >
                CodeSandbox
              </Button>
            </Tooltip>
          </motion.div>
          <div className="flex items-center gap-4 flex-wrap">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-sm text-gray-600 dark:text-gray-300">Theme:</span>
              <ThemeSelector
                currentTheme={selectedTheme || theme}
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
          {isCodeVisible ? (
            <CodeBlock demoCodeFilename="InfrastructureExample.txt" />
          ) : (
            <Suspense fallback={<div />}>
              <InfrastructureExample
                theme={selectedTheme || theme}
                height={"70dvh"}
                {...tableIcons}
              />
            </Suspense>
          )}
        </motion.section>

        {/* Main Features Section */}
        <FeaturesSection />

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
        <ProductionSection />

        {/* Installation Section */}
        <InstallationSection />

        {/* Comparisons section */}
        <ComparisonsSection />

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </PageWrapper>
  );
}
