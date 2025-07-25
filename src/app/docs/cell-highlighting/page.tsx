import { Metadata } from "next";
import CellHighlightingContent from "@/components/pages/docs-pages/CellHighlightingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.cellHighlighting.title,
  description: SEO_STRINGS.cellHighlighting.description,
  keywords: SEO_STRINGS.cellHighlighting.keywords,
  openGraph: {
    title: SEO_STRINGS.cellHighlighting.title,
    description: SEO_STRINGS.cellHighlighting.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.cellHighlighting.title,
    description: SEO_STRINGS.cellHighlighting.description,
  },
};

const CellHighlightingPage = () => {
  return <CellHighlightingContent />;
};

export default CellHighlightingPage;
