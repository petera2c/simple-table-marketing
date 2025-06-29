import SimpleTableVsAntDesignContent from "@/pages/comparisons/SimpleTableVsAntDesignContent";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.comparisons.antDesign.title,
  description: SEO_STRINGS.comparisons.antDesign.description,
  keywords: SEO_STRINGS.comparisons.antDesign.keywords,
  openGraph: {
    title: SEO_STRINGS.comparisons.antDesign.title,
    description: SEO_STRINGS.comparisons.antDesign.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.comparisons.antDesign.title,
    description: SEO_STRINGS.comparisons.antDesign.description,
  },
};

const SimpleVsAntDesign = () => {
  return <SimpleTableVsAntDesignContent />;
};

export default SimpleVsAntDesign;
