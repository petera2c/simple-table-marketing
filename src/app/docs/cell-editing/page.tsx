import { Metadata } from "next";
import CellEditingContent from "@/components/pages/docs-pages/CellEditingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.cellEditing.title,
  description: SEO_STRINGS.cellEditing.description,
  keywords: SEO_STRINGS.cellEditing.keywords,
  openGraph: {
    title: SEO_STRINGS.cellEditing.title,
    description: SEO_STRINGS.cellEditing.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.cellEditing.title,
    description: SEO_STRINGS.cellEditing.description,
  },
};

const CellEditingPage = () => {
  return <CellEditingContent />;
};

export default CellEditingPage;
