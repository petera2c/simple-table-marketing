import { Metadata } from "next";
import ColumnSortingContent from "@/components/pages/docs-pages/ColumnSortingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnSorting.title,
  description: SEO_STRINGS.columnSorting.description,
  keywords: SEO_STRINGS.columnSorting.keywords,
  openGraph: {
    title: SEO_STRINGS.columnSorting.title,
    description: SEO_STRINGS.columnSorting.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnSorting.title,
    description: SEO_STRINGS.columnSorting.description,
  },
};

const ColumnSortingPage = () => {
  return <ColumnSortingContent />;
};

export default ColumnSortingPage;
