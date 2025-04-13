import CustomIconsContent from "@/components/pages/CustomIconsContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.customIcons.title,
  description: SEO_STRINGS.customIcons.description,
  keywords: SEO_STRINGS.customIcons.keywords,
  openGraph: {
    title: SEO_STRINGS.customIcons.openGraph.title,
    description: SEO_STRINGS.customIcons.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.customIcons.twitter.title,
    description: SEO_STRINGS.customIcons.twitter.description,
  },
};
const CustomIconsPage = () => {
  return <CustomIconsContent />;
};

export default CustomIconsPage;
