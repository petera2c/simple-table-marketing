import { Metadata } from "next";
import CollapsibleColumnsContent from "@/components/pages/docs-pages/CollapsibleColumnsContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.collapsibleColumns.title,
  description: SEO_STRINGS.collapsibleColumns.description,
  keywords: SEO_STRINGS.collapsibleColumns.keywords,
  openGraph: {
    title: SEO_STRINGS.collapsibleColumns.title,
    description: SEO_STRINGS.collapsibleColumns.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.collapsibleColumns.title,
    description: SEO_STRINGS.collapsibleColumns.description,
  },
};

const CollapsibleColumnsPage = () => {
  return <CollapsibleColumnsContent />;
};

export default CollapsibleColumnsPage;
