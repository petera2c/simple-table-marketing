import { Metadata } from "next";
import CellRendererContent from "@/components/pages/docs-pages/CellRendererContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.cellRenderer.title,
  description: SEO_STRINGS.cellRenderer.description,
  keywords: SEO_STRINGS.cellRenderer.keywords,
  openGraph: {
    title: SEO_STRINGS.cellRenderer.title,
    description: SEO_STRINGS.cellRenderer.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.cellRenderer.title,
    description: SEO_STRINGS.cellRenderer.description,
  },
};

const CellRendererPage = () => {
  return <CellRendererContent />;
};

export default CellRendererPage;
