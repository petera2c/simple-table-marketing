"use client";

import BlogLayout from "../../../components/blog/BlogLayout";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPost } from "../../../types/blog";
import { useEffect } from "react";
import { useState } from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    console.log(params);
    const fetchPost = async () => {
      const res = await fetch(`${API_URL}/api/blog/${params.slug}`);
      const post = await res.json();
      setPost(post);
    };
    fetchPost();
  }, [params.slug]);

  if (!post) {
    return null;
  }

  return (
    <BlogLayout>
      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{format(new Date(post.createdAt), "MMMM d, yyyy")}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogPostPage;
