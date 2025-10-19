import React from "react";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import BlogLayout from "@/components/BlogLayout";
import ChangelogPageContent from "@/components/pages/ChangelogPageContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.changelog.title,
  description: SEO_STRINGS.changelog.description,
  keywords: SEO_STRINGS.changelog.keywords,
  openGraph: {
    title: SEO_STRINGS.changelog.title,
    description: SEO_STRINGS.changelog.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.changelog.title,
    description: SEO_STRINGS.changelog.description,
  },
};

export default function ChangelogPage() {
  return (
    <BlogLayout width="wide">
      <ChangelogPageContent />
    </BlogLayout>
  );
}
