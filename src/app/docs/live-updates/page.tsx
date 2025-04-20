import { Metadata } from "next";
import LiveUpdateContent from "@/components/pages/LiveUpdateContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.liveUpdates.title,
  description: SEO_STRINGS.liveUpdates.description,
  keywords: SEO_STRINGS.liveUpdates.keywords,
  openGraph: {
    title: SEO_STRINGS.liveUpdates.openGraph.title,
    description: SEO_STRINGS.liveUpdates.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.liveUpdates.twitter.title,
    description: SEO_STRINGS.liveUpdates.twitter.description,
  },
};

const LiveUpdatesPage = () => {
  return <LiveUpdateContent />;
};

export default LiveUpdatesPage;
