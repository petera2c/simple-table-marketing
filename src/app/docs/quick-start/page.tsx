import { Metadata } from "next";
import QuickStartContent from "@/components/pages/docs/QuickStartContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.quickStart.title,
  description: SEO_STRINGS.quickStart.description,
  keywords: SEO_STRINGS.quickStart.keywords,
  openGraph: {
    title: SEO_STRINGS.quickStart.title,
    description: SEO_STRINGS.quickStart.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.quickStart.title,
    description: SEO_STRINGS.quickStart.description,
  },
};

const QuickStartPage = () => {
  return <QuickStartContent />;
};

export default QuickStartPage;
