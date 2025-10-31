"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title } = Typography;

const SimpleVsAgGrid = () => {
  const introText = (
    <>
      In the enterprise data grid landscape, AG Grid has established itself as the go-to solution
      for companies willing to invest heavily in advanced table functionality. With its two-tier
      pricing model—free Community edition and $999/developer Enterprise license—AG Grid represents
      a significant financial commitment. However, many development teams find themselves
      questioning whether they truly need the Enterprise features that justify this cost, especially
      when much of their functionality is locked behind the paywall. This is where{" "}
      <Text className="text-lg text-inherit" strong>
        Simple Table
      </Text>{" "}
      presents a compelling alternative for teams seeking enterprise-grade performance without
      enterprise-grade pricing. At 31 kB compared to AG Grid's ~600 kB (minified + gzipped), Simple
      Table delivers blazing-fast performance with core data grid features that rival AG Grid's
      Community edition—and surpass many of its Enterprise capabilities—all while remaining
      completely free. This comparison examines whether you can achieve your data grid goals without
      the complexity, licensing costs, and bundle overhead that AG Grid Enterprise demands. We'll
      break down the true cost of ownership and help you determine if Simple Table can deliver the
      enterprise-level functionality your application needs.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, free alternative to AG Grid, offering essential features like
        virtualization, infinite scroll, and column filters, with a smaller bundle size (31 kB
        minified + gzipped). It's ideal for projects needing a simple, performant data grid without
        the overhead of enterprise features.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          AG Grid
        </Text>{" "}
        is a feature-rich data grid with advanced capabilities like pivot tables and tree data, but
        many of these are locked behind the Enterprise version ($999/license). It has a larger
        bundle size and a steeper learning curve, making it better suited for complex,
        enterprise-level applications.
      </Text>
      <Text className="text-lg block text-inherit">
        If you're looking for a free, lightweight solution with solid features,{" "}
        <a href="https://www.simple-table.com" className="text-blue-600 hover:underline">
          try Simple Table
        </a>
        . For enterprise needs, AG Grid might be worth the investment.
      </Text>
    </>
  );

  const enterpriseROISection = (
    <>
      <Title level={2} className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Enterprise ROI Calculator: AG Grid vs Simple Table
      </Title>

      <div className="space-y-6 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-200 dark:border-red-800">
          <Text className="text-lg sm:text-xl font-bold text-red-700 dark:text-red-300 mb-4 block">
            💸 AG Grid Enterprise Cost (3-Year Projection)
          </Text>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                5 developers × $999/year:
              </span>
              <span className="font-semibold">$14,985</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Bundle size impact (CDN costs):
              </span>
              <span className="font-semibold">~$2,400</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Training/onboarding time:
              </span>
              <span className="font-semibold">~$8,000</span>
            </div>
            <hr className="border-red-300" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-lg font-bold">
              <span>Total 3-year cost:</span>
              <span className="text-red-600 dark:text-red-400">$25,385</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-200 dark:border-green-800">
          <Text className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-300 mb-4 block">
            ✅ Simple Table Cost (3-Year Projection)
          </Text>
          <div className="space-y-4">
            <div className="space-y-3">
              <Text className="font-semibold text-gray-700 dark:text-gray-300">
                Free Plan (Individuals & Startups):
              </Text>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Licensing (unlimited devs):
                </span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Bundle size impact:
                </span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Training (minimal setup):
                </span>
                <span className="font-semibold">~$500</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4 font-bold">
                <span>Subtotal:</span>
                <span className="text-green-600 dark:text-green-400">$500</span>
              </div>
            </div>

            <hr className="border-green-300" />

            <div className="space-y-3">
              <Text className="font-semibold text-gray-700 dark:text-gray-300">
                Pro Plan (Revenue-Generating Businesses):
              </Text>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Licensing: $850/year × 3 years:
                </span>
                <span className="font-semibold">$2,550</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Bundle size impact:
                </span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Training (minimal setup):
                </span>
                <span className="font-semibold">~$500</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pl-4 font-bold">
                <span>Subtotal:</span>
                <span className="text-green-600 dark:text-green-400">$3,050</span>
              </div>
            </div>

            <hr className="border-green-300" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-lg font-bold">
              <span>Total 3-year cost range:</span>
              <span className="text-green-600 dark:text-green-400">$500 - $3,050</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
        <Text className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 block">
          💡 Enterprise Feature Reality Check
        </Text>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <p>
              <strong>Most teams need:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Virtualization ✅ Simple Table</li>
              <li>Column management ✅ Simple Table</li>
              <li>Cell editing ✅ Simple Table</li>
              <li>Sorting & filtering ✅ Simple Table</li>
            </ul>
          </div>
          <div>
            <p>
              <strong>AG Grid Enterprise extras:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pivot tables (niche use case)</li>
              <li>Server-side row model (overkill)</li>
              <li>Advanced context menu (minor UX)</li>
              <li>Excel export (can use libraries)</li>
            </ul>
          </div>
        </div>
      </div>

      <Text className="text-lg text-center text-gray-700 dark:text-gray-300 font-semibold">
        💰 <span className="text-green-600 dark:text-green-400">Save $22,335 - $24,885</span> over 3
        years while getting 90% of the functionality
      </Text>
    </>
  );

  return (
    <ComparisonLayout
      title="Simple Table vs. AG Grid"
      subtitle="A comprehensive comparison of two popular React data grid solutions"
      introText={introText}
      competitorName="AG Grid"
      competitorPackage="agGrid"
      performanceMetrics={{
        competitor: "AG Grid",
        competitorSize: "~600 kB (minified + gzipped)",
      }}
      summaryContent={summaryContent}
      faqSection={enterpriseROISection}
    />
  );
};

export default SimpleVsAgGrid;
