import { Metadata } from "next";
import ColumnAlignmentContent from "@/components/pages/docs/ColumnAlignmentContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnAlignment.title,
  description: SEO_STRINGS.columnAlignment.description,
  keywords: SEO_STRINGS.columnAlignment.keywords,
  openGraph: {
    title: SEO_STRINGS.columnAlignment.title,
    description: SEO_STRINGS.columnAlignment.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnAlignment.title,
    description: SEO_STRINGS.columnAlignment.description,
  },
};

const ColumnAlignmentPage = () => {
  return <ColumnAlignmentContent />;
};

export default ColumnAlignmentPage;
