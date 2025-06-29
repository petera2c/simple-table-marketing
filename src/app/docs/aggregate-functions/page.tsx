import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import AggregateFunctionsContent from "@/pages/docs/AggregateFunctionsContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.rowGrouping.title,
  description: SEO_STRINGS.rowGrouping.description,
  keywords: SEO_STRINGS.rowGrouping.keywords,
  openGraph: {
    title: SEO_STRINGS.rowGrouping.title,
    description: SEO_STRINGS.rowGrouping.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.rowGrouping.title,
    description: SEO_STRINGS.rowGrouping.description,
  },
};

const AggregateFunctionsPage = () => {
  return <AggregateFunctionsContent />;
};

export default AggregateFunctionsPage;
