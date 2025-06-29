import { Metadata } from "next";
import ColumnVisibilityContent from "@/pages/docs/ColumnVisibilityContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnVisibility.title,
  description: SEO_STRINGS.columnVisibility.description,
  keywords: SEO_STRINGS.columnVisibility.keywords,
  openGraph: {
    title: SEO_STRINGS.columnVisibility.title,
    description: SEO_STRINGS.columnVisibility.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnVisibility.title,
    description: SEO_STRINGS.columnVisibility.description,
  },
};

const ColumnVisibilityPage = () => {
  return <ColumnVisibilityContent />;
};

export default ColumnVisibilityPage;
