import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import AggregateFunctionsContent from "@/components/pages/docs/AggregateFunctionsContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.aggregateFunctions.title,
  description: SEO_STRINGS.aggregateFunctions.description,
  keywords: SEO_STRINGS.aggregateFunctions.keywords,
  openGraph: {
    title: SEO_STRINGS.aggregateFunctions.title,
    description: SEO_STRINGS.aggregateFunctions.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.aggregateFunctions.title,
    description: SEO_STRINGS.aggregateFunctions.description,
  },
};

const AggregateFunctionsPage = () => {
  return <AggregateFunctionsContent />;
};

export default AggregateFunctionsPage;
