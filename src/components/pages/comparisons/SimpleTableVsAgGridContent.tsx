"use client";
import React from "react";
import { Typography } from "antd";
import ComparisonLayout from "../../ComparisonLayout";

const { Text, Title, Link } = Typography;

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
      enterprise-grade pricing. At{" "}
      <Link
        className="text-[length:inherit]"
        href="https://bundlephobia.com/package/simple-table-core"
        target="_blank"
      >
        31 kB
      </Link>{" "}
      compared to AG Grid Community's{" "}
      <Link
        className="text-[length:inherit]"
        href="https://bundlephobia.com/package/ag-grid-community"
        target="_blank"
      >
        298.2 kB
      </Link>{" "}
      (or{" "}
      <Link
        className="text-[length:inherit]"
        href="https://bundlephobia.com/package/ag-grid-enterprise"
        target="_blank"
      >
        529.1 kB total
      </Link>{" "}
      with Enterprise, minified + gzipped), Simple Table delivers blazing-fast performance with core
      data grid features that rival AG Grid's Community edition—and surpass many of its Enterprise
      capabilities—all while remaining completely free. This comparison examines whether you can
      achieve your data grid goals without the complexity, licensing costs, and bundle overhead that
      AG Grid Enterprise demands. We'll break down the true cost of ownership and help you determine
      if Simple Table can deliver the enterprise-level functionality your application needs.
    </>
  );

  const summaryContent = (
    <>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          Simple Table
        </Text>{" "}
        is a lightweight, free alternative to AG Grid, offering essential features like
        virtualization, infinite scroll, and column filters, with a smaller bundle size (
        <Link
          className="text-[length:inherit]"
          href="https://bundlephobia.com/package/simple-table-core"
          target="_blank"
        >
          31 kB minified + gzipped
        </Link>
        ). It's ideal for projects needing a simple, performant data grid without the overhead of
        enterprise features.
      </Text>
      <Text className="text-lg mb-4 block text-inherit">
        <Text className="text-lg text-inherit" strong>
          AG Grid
        </Text>{" "}
        is a feature-rich data grid with advanced capabilities. The{" "}
        <Link
          className="text-[length:inherit]"
          href="https://bundlephobia.com/package/ag-grid-community"
          target="_blank"
        >
          Community edition
        </Link>{" "}
        is 298.2 kB (minified + gzipped), but many advanced features like pivot tables and tree data
        require the{" "}
        <Link
          className="text-[length:inherit]"
          href="https://bundlephobia.com/package/ag-grid-enterprise"
          target="_blank"
        >
          Enterprise edition
        </Link>{" "}
        (additional 230.9 kB, totaling 529.1 kB) at $999/developer/year. The combined bundle size
        and steeper learning curve make it better suited for complex, enterprise-level applications.
      </Text>
      <Text className="text-lg block text-inherit">
        If you're looking for a free, lightweight solution with solid features,{" "}
        <Link className="text-[length:inherit]" href="https://www.simple-table.com">
          try Simple Table
        </Link>
        . For enterprise needs, AG Grid might be worth the investment.
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
        competitorSize: (
          <>
            <Link
              className="text-[length:inherit]"
              href="https://bundlephobia.com/package/ag-grid-community"
              target="_blank"
            >
              298.2 kB Community
            </Link>
            {" + "}
            <Link
              className="text-[length:inherit]"
              href="https://bundlephobia.com/package/ag-grid-enterprise"
              target="_blank"
            >
              230.9 kB Enterprise
            </Link>
            {" = 529.1 kB total (minified + gzipped)"}
          </>
        ),
      }}
      summaryContent={summaryContent}
    />
  );
};

export default SimpleVsAgGrid;
