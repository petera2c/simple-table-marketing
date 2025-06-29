import { Metadata } from "next";
import ApiReferenceContent from "@/components/pages/docs/ApiReferenceContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.apiReference.title,
  description: SEO_STRINGS.apiReference.description,
  keywords: SEO_STRINGS.apiReference.keywords,
  openGraph: {
    title: SEO_STRINGS.apiReference.title,
    description: SEO_STRINGS.apiReference.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.apiReference.title,
    description: SEO_STRINGS.apiReference.description,
  },
};

const ApiReferencePage = () => {
  return <ApiReferenceContent />;
};

export default ApiReferencePage;
