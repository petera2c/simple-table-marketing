import { Metadata } from "next";
import QuickStartContent from "@/components/pages/QuickStartContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.quickStart.title,
  description: SEO_STRINGS.quickStart.description,
  keywords: SEO_STRINGS.quickStart.keywords,
  openGraph: {
    title: SEO_STRINGS.quickStart.openGraph.title,
    description: SEO_STRINGS.quickStart.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.quickStart.twitter.title,
    description: SEO_STRINGS.quickStart.twitter.description,
  },
};

const QuickStartPage = () => {
  return <QuickStartContent />;
};

export default QuickStartPage;
