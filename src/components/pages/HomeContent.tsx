"use client";

import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faColumns,
  faEdit,
  faList,
  faScroll,
  faRocket,
  faLightbulb,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimatedBackground from "../../components/AnimatedBackground";
import { trackButtonClick } from "../../utils/analytics";
import { UI_STRINGS } from "../../constants/strings/ui";
import { SEO_STRINGS } from "../../constants/strings/seo";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FinancialExample } from "../examples/finance/FinancialExample";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: SEO_STRINGS.home.title,
  description: SEO_STRINGS.home.description,
  keywords: SEO_STRINGS.home.keywords,
  openGraph: {
    title: SEO_STRINGS.home.title,
    description: SEO_STRINGS.home.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.home.title,
    description: SEO_STRINGS.home.description,
  },
};

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
        staggerChildren: 0.2,
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

  // Map icons to feature titles
  const getFeatureIcon = (title: string) => {
    const iconMap = {
      [UI_STRINGS.home.features.highlyCustomizable.title]: faTable,
      [UI_STRINGS.home.features.cellEditing.title]: faEdit,
      [UI_STRINGS.home.features.columnManagement.title]: faColumns,
      [UI_STRINGS.home.features.pagination.title]: faList,
      [UI_STRINGS.home.features.infiniteScroll.title]: faScroll,
      [UI_STRINGS.home.features.performanceOptimized.title]: faRocket,
    };
    return iconMap[title as keyof typeof iconMap] || faTable;
  };

  const handleDocumentationClick = () => {
    trackButtonClick("Documentation", "Homepage Hero");
    router.push("/docs/installation");
  };

  const handleExamplesClick = () => {
    trackButtonClick("Examples", "Homepage Hero");
    router.push("/examples/finance");
  };

  const handleFeatureClick = (featureTitle: string) => {
    trackButtonClick("Feature Click", featureTitle);
  };

  return (
    <>
      {/* Page-wide animated background */}
      {!isMobile && <AnimatedBackground />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <section className="relative py-12">
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
              {UI_STRINGS.home.hero.subtitle}
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
          className="mb-16 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Suspense fallback={<div />}>
            <FinancialExample themeOverride="light" height="50dvh" />
          </Suspense>
        </motion.section>

        {/* Features section with staggered animation */}
        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.values(UI_STRINGS.home.features).map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={getFeatureIcon(feature.title)} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Fun Facts section */}
        <motion.section
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
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
            {UI_STRINGS.home.funFacts.facts.map((fact: string, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
