import ColumnReorderingContent from "@/components/pages/ColumnReorderingContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnReordering.title,
  description: SEO_STRINGS.columnReordering.description,
  keywords: SEO_STRINGS.columnReordering.keywords,
  openGraph: {
    title: SEO_STRINGS.columnReordering.openGraph.title,
    description: SEO_STRINGS.columnReordering.openGraph.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnReordering.twitter.title,
    description: SEO_STRINGS.columnReordering.twitter.description,
  },
};

const ColumnReorderingPage = () => {
  return <ColumnReorderingContent />;
};

export default ColumnReorderingPage;
