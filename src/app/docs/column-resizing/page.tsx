import { Metadata } from "next";
import ColumnResizingContent from "@/components/pages/ColumnResizingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnResizing.title,
  description: SEO_STRINGS.columnResizing.description,
  keywords: SEO_STRINGS.columnResizing.keywords,
  openGraph: {
    title: SEO_STRINGS.columnResizing.openGraph.title,
    description: SEO_STRINGS.columnResizing.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnResizing.twitter.title,
    description: SEO_STRINGS.columnResizing.twitter.description,
  },
};

const ColumnResizingPage = () => {
  return <ColumnResizingContent />;
};

export default ColumnResizingPage;
