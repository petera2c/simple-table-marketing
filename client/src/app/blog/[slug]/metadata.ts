import { Metadata } from "next";
import { API_URL } from "@/constants/global";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(`${API_URL}/api/blog/${params.slug}`);
  if (!res.ok) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const post = await res.json();

  return {
    title: post.metadata?.openGraph?.title || post.title,
    description: post.metadata?.openGraph?.description || post.description,
    keywords: post.metadata?.keywords,
    openGraph: {
      title: post.metadata?.openGraph?.title || post.title,
      description: post.metadata?.openGraph?.description || post.description,
      type: "article",
      publishedTime: post.metadata?.openGraph?.publishedTime || post.createdAt,
      authors: post.metadata?.openGraph?.authors || ["Simple Table Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata?.twitter?.title || post.title,
      description: post.metadata?.twitter?.description || post.description,
    },
  };
}
