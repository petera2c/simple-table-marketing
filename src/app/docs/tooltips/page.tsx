import { Metadata } from "next";
import TooltipContent from "@/components/pages/docs-pages/TooltipContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.tooltips.title,
  description: SEO_STRINGS.tooltips.description,
  keywords: SEO_STRINGS.tooltips.keywords,
  openGraph: {
    title: SEO_STRINGS.tooltips.title,
    description: SEO_STRINGS.tooltips.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.tooltips.title,
    description: SEO_STRINGS.tooltips.description,
  },
};

const TooltipsPage = () => {
  return <TooltipContent />;
};

export default TooltipsPage;
