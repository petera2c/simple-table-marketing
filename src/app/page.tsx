import HomeContent from "@/pages/HomeContent";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.home.title,
  description: SEO_STRINGS.home.description,
  keywords: SEO_STRINGS.home.keywords,
  openGraph: {
    title: SEO_STRINGS.home.title,
    description: SEO_STRINGS.home.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.home.title,
    description: SEO_STRINGS.home.description,
  },
};

export default function HomePage() {
  return <HomeContent />;
}
