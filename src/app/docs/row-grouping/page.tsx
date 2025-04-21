import { Metadata } from "next";
import RowGroupingContent from "@/components/pages/RowGroupingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.rowGrouping.title,
  description: SEO_STRINGS.rowGrouping.description,
  keywords: SEO_STRINGS.rowGrouping.keywords,
  openGraph: {
    title: SEO_STRINGS.rowGrouping.title,
    description: SEO_STRINGS.rowGrouping.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.rowGrouping.title,
    description: SEO_STRINGS.rowGrouping.description,
  },
};

const RowGroupingPage = () => {
  return <RowGroupingContent />;
};

export default RowGroupingPage;
