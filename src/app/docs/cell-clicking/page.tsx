import { Metadata } from "next";
import CellClickingContent from "@/components/pages/docs-pages/CellClickingContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.cellClicking.title,
  description: SEO_STRINGS.cellClicking.description,
  keywords: SEO_STRINGS.cellClicking.keywords,
  openGraph: {
    title: SEO_STRINGS.cellClicking.title,
    description: SEO_STRINGS.cellClicking.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.cellClicking.title,
    description: SEO_STRINGS.cellClicking.description,
  },
};

const CellClickingPage = () => {
  return <CellClickingContent />;
};

export default CellClickingPage;
