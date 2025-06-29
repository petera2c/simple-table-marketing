import SimpleTableVsMaterialReactContent from "@/pages/comparisons/SimpleTableVsMaterialReactContent";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.comparisons.materialReact.title,
  description: SEO_STRINGS.comparisons.materialReact.description,
  keywords: SEO_STRINGS.comparisons.materialReact.keywords,
  openGraph: {
    title: SEO_STRINGS.comparisons.materialReact.title,
    description: SEO_STRINGS.comparisons.materialReact.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.comparisons.materialReact.title,
    description: SEO_STRINGS.comparisons.materialReact.description,
  },
};

const SimpleVsMaterialReact = () => {
  return <SimpleTableVsMaterialReactContent />;
};

export default SimpleVsMaterialReact;
