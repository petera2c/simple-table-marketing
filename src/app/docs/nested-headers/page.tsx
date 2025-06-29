import NestedHeadersContent from "@/pages/docs/NestedHeadersContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.nestedHeaders.title,
  description: SEO_STRINGS.nestedHeaders.description,
  keywords: SEO_STRINGS.nestedHeaders.keywords,
  openGraph: {
    title: SEO_STRINGS.nestedHeaders.title,
    description: SEO_STRINGS.nestedHeaders.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.nestedHeaders.title,
    description: SEO_STRINGS.nestedHeaders.description,
  },
};

const NestedHeadersPage = () => {
  return <NestedHeadersContent />;
};

export default NestedHeadersPage;
