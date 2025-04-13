import { Metadata } from "next";
import CellRendererContent from "@/components/pages/CellRendererContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.cellRenderer.title,
  description: SEO_STRINGS.cellRenderer.description,
  keywords: SEO_STRINGS.cellRenderer.keywords,
  openGraph: {
    title: SEO_STRINGS.cellRenderer.openGraph.title,
    description: SEO_STRINGS.cellRenderer.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.cellRenderer.twitter.title,
    description: SEO_STRINGS.cellRenderer.twitter.description,
  },
};

const CellRendererPage = () => {
  return <CellRendererContent />;
};

export default CellRendererPage;
