import BlogsContent from "@/components/pages/BlogsContent";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.blog.title,
  description: SEO_STRINGS.blog.description,
  keywords: SEO_STRINGS.blog.keywords,
  openGraph: {
    title: SEO_STRINGS.blog.openGraph.title,
    description: SEO_STRINGS.blog.openGraph.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.blog.twitter.title,
    description: SEO_STRINGS.blog.twitter.description,
  },
};

export default function BlogPage() {
  return <BlogsContent />;
}
