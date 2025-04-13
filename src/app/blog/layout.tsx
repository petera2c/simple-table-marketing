"use client";

import BlogLayout from "@/components/BlogLayout";

const BlogLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <BlogLayout>{children}</BlogLayout>;
};

export default BlogLayoutWrapper;
