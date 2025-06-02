import React from "react";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.blog.title,
  description: SEO_STRINGS.blog.description,
  keywords: SEO_STRINGS.blog.keywords,
  openGraph: {
    title: SEO_STRINGS.blog.title,
    description: SEO_STRINGS.blog.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.blog.title,
    description: SEO_STRINGS.blog.description,
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
