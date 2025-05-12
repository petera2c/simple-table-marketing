import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import ThemeBuilderContent from "@/components/pages/ThemeBuilderContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.themeBuilder.title,
  description: SEO_STRINGS.themeBuilder.description,
  openGraph: {
    title: SEO_STRINGS.themeBuilder.title,
    description: SEO_STRINGS.themeBuilder.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.themeBuilder.title,
    description: SEO_STRINGS.themeBuilder.description,
  },
};

export default function ThemeBuilderPage() {
  return <ThemeBuilderContent />;
}
