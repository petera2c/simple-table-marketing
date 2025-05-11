import ThemesContent from "@/components/pages/docs/ThemesContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.themes.title,
  description: SEO_STRINGS.themes.description,
  keywords: SEO_STRINGS.themes.keywords,
  openGraph: {
    title: SEO_STRINGS.themes.title,
    description: SEO_STRINGS.themes.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.themes.title,
    description: SEO_STRINGS.themes.description,
  },
};

export default function ThemesPage() {
  return <ThemesContent />;
}
