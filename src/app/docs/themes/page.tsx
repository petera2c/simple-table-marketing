import ThemesContent from "@/components/pages/ThemesContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.themes.title,
  description: SEO_STRINGS.themes.description,
  keywords: SEO_STRINGS.themes.keywords,
  openGraph: {
    title: SEO_STRINGS.themes.openGraph.title,
    description: SEO_STRINGS.themes.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.themes.twitter.title,
    description: SEO_STRINGS.themes.twitter.description,
  },
};

export default function ThemesPage() {
  return <ThemesContent />;
}
