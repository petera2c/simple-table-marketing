import CustomRenderersContent from "@/components/pages/CustomRenderersContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.customRenderers.title,
  description: SEO_STRINGS.customRenderers.description,
  keywords: SEO_STRINGS.customRenderers.keywords,
  openGraph: {
    title: SEO_STRINGS.customRenderers.openGraph.title,
    description: SEO_STRINGS.customRenderers.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.customRenderers.twitter.title,
    description: SEO_STRINGS.customRenderers.twitter.description,
  },
};

const CustomRenderersPage = () => {
  return <CustomRenderersContent />;
};

export default CustomRenderersPage;
