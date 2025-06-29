import React from "react";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import BlogLayout from "@/components/BlogLayout";
import HandlingOneMillionRowsContent from "@/pages/HandlingOneMillionRowsContent";

export const metadata: Metadata = {
  title: SEO_STRINGS.blogPosts.handlingOneMillionRows.title,
  description: SEO_STRINGS.blogPosts.handlingOneMillionRows.description,
  keywords: SEO_STRINGS.blogPosts.handlingOneMillionRows.keywords,
  openGraph: {
    title: SEO_STRINGS.blogPosts.handlingOneMillionRows.title,
    description: SEO_STRINGS.blogPosts.handlingOneMillionRows.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.blogPosts.handlingOneMillionRows.title,
    description: SEO_STRINGS.blogPosts.handlingOneMillionRows.description,
  },
};

export default function HandlingOneMillionRowsPage() {
  return (
    <BlogLayout>
      <HandlingOneMillionRowsContent />
    </BlogLayout>
  );
}
