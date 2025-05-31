import CustomThemeContent from "@/components/pages/docs-pages/CustomThemeContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.customTheme.title,
  description: SEO_STRINGS.customTheme.description,
  keywords: SEO_STRINGS.customTheme.keywords,
  openGraph: {
    title: SEO_STRINGS.customTheme.title,
    description: SEO_STRINGS.customTheme.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.customTheme.title,
    description: SEO_STRINGS.customTheme.description,
  },
};

const CustomThemePage = () => {
  return <CustomThemeContent />;
};

export default CustomThemePage;
