import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import PaginationContent from "@/pages/docs/PaginationContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.pagination.title,
  description: SEO_STRINGS.pagination.description,
  keywords: SEO_STRINGS.pagination.keywords,
  openGraph: {
    title: SEO_STRINGS.pagination.title,
    description: SEO_STRINGS.pagination.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.pagination.title,
    description: SEO_STRINGS.pagination.description,
  },
};

const PaginationPage = () => {
  return <PaginationContent />;
};

export default PaginationPage;
