import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import PaginationContent from "@/components/pages/PaginationContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.pagination.title,
  description: SEO_STRINGS.pagination.description,
  keywords: SEO_STRINGS.pagination.keywords,
  openGraph: {
    title: SEO_STRINGS.pagination.openGraph.title,
    description: SEO_STRINGS.pagination.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.pagination.twitter.title,
    description: SEO_STRINGS.pagination.twitter.description,
  },
};

const PaginationPage = () => {
  return <PaginationContent />;
};

export default PaginationPage;
