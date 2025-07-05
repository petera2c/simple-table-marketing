import ColumnFilteringContent from "@/components/pages/docs-pages/ColumnFilteringContent";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnFiltering.title,
  description: SEO_STRINGS.columnFiltering.description,
  keywords: SEO_STRINGS.columnFiltering.keywords,
  openGraph: {
    title: SEO_STRINGS.columnFiltering.title,
    description: SEO_STRINGS.columnFiltering.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnFiltering.title,
    description: SEO_STRINGS.columnFiltering.description,
  },
};

const ColumnFilteringPage = () => {
  return <ColumnFilteringContent />;
};

export default ColumnFilteringPage;
