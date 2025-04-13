import { Metadata } from "next";
import ColumnPropertiesContent from "@/components/pages/ColumnPropertiesContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnProperties.title,
  description: SEO_STRINGS.columnProperties.description,
  keywords: SEO_STRINGS.columnProperties.keywords,
  openGraph: {
    title: SEO_STRINGS.columnProperties.openGraph.title,
    description: SEO_STRINGS.columnProperties.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnProperties.twitter.title,
    description: SEO_STRINGS.columnProperties.twitter.description,
  },
};

const ColumnPropertiesPage = () => {
  return <ColumnPropertiesContent />;
};

export default ColumnPropertiesPage;
