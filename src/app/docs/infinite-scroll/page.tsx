import { Metadata } from "next";
import InfiniteScrollContent from "@/components/pages/docs-pages/InfiniteScrollContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.infiniteScroll.title,
  description: SEO_STRINGS.infiniteScroll.description,
  keywords: SEO_STRINGS.infiniteScroll.keywords,
  openGraph: {
    title: SEO_STRINGS.infiniteScroll.title,
    description: SEO_STRINGS.infiniteScroll.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.infiniteScroll.title,
    description: SEO_STRINGS.infiniteScroll.description,
  },
};

const InfiniteScrollPage = () => {
  return <InfiniteScrollContent />;
};

export default InfiniteScrollPage;
