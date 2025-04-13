import ColumnPinningContent from "@/components/pages/ColumnPinningContent";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnPinning.title,
  description: SEO_STRINGS.columnPinning.description,
  keywords: SEO_STRINGS.columnPinning.keywords,
  openGraph: {
    title: SEO_STRINGS.columnPinning.openGraph.title,
    description: SEO_STRINGS.columnPinning.openGraph.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnPinning.twitter.title,
    description: SEO_STRINGS.columnPinning.twitter.description,
  },
};

const ColumnPinningPage = () => {
  return <ColumnPinningContent />;
};

export default ColumnPinningPage;
