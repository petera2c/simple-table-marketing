import RowHeightContent from "@/components/pages/RowHeightContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.rowHeight.title,
  description: SEO_STRINGS.rowHeight.description,
  keywords: SEO_STRINGS.rowHeight.keywords,
  openGraph: {
    title: SEO_STRINGS.rowHeight.openGraph.title,
    description: SEO_STRINGS.rowHeight.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.rowHeight.twitter.title,
    description: SEO_STRINGS.rowHeight.twitter.description,
  },
};

export default function RowHeightPage() {
  return <RowHeightContent />;
}
