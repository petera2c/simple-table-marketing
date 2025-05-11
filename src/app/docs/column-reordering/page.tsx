import ColumnReorderingContent from "@/components/pages/docs/ColumnReorderingContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnReordering.title,
  description: SEO_STRINGS.columnReordering.description,
  keywords: SEO_STRINGS.columnReordering.keywords,
  openGraph: {
    title: SEO_STRINGS.columnReordering.title,
    description: SEO_STRINGS.columnReordering.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnReordering.title,
    description: SEO_STRINGS.columnReordering.description,
  },
};

const ColumnReorderingPage = () => {
  return <ColumnReorderingContent />;
};

export default ColumnReorderingPage;
