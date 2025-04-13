import BlogPostContent from "@/components/pages/BlogContent";
import { API_URL } from "@/constants/global";
import { Metadata } from "next";
import { use } from "react";

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const res = await fetch(`${API_URL}/api/blog/${slug}`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);

  return <BlogPostContent slug={slug} />;
}
