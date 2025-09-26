import { Metadata } from "next";
import ColumnEditingContent from "@/components/pages/docs-pages/ColumnEditingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.columnEditing.title,
  description: SEO_STRINGS.columnEditing.description,
  keywords: SEO_STRINGS.columnEditing.keywords,
  openGraph: {
    title: SEO_STRINGS.columnEditing.title,
    description: SEO_STRINGS.columnEditing.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.columnEditing.title,
    description: SEO_STRINGS.columnEditing.description,
  },
};

const ColumnEditingPage = () => {
  return <ColumnEditingContent />;
};

export default ColumnEditingPage;
