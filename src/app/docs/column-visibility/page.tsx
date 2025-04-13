import { Metadata } from "next";
import ColumnVisibilityContent from "@/components/pages/ColumnVisibilityContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnVisibility.title,
  description: SEO_STRINGS.columnVisibility.description,
  keywords: SEO_STRINGS.columnVisibility.keywords,
  openGraph: {
    title: SEO_STRINGS.columnVisibility.openGraph.title,
    description: SEO_STRINGS.columnVisibility.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnVisibility.twitter.title,
    description: SEO_STRINGS.columnVisibility.twitter.description,
  },
};

const ColumnVisibilityPage = () => {
  return <ColumnVisibilityContent />;
};

export default ColumnVisibilityPage;
