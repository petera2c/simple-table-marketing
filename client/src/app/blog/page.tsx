"use client";

import BlogLayout from "../../components/blog/BlogLayout";
import BlogCard from "../../components/blog/BlogCard";
import { useState, useEffect } from "react";
import { BlogPost } from "../../types/blog";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts from:", `${API_URL}/api/blog`);
        const response = await fetch(`${API_URL}/api/blog`);
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await response.json();
        console.log("Received posts:", data);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("Filtering posts with query:", searchQuery);
    const filtered = posts.filter(
      (post: BlogPost) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    console.log("Filtered posts:", filtered);
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  if (loading) {
    return (
      <BlogLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </BlogLayout>
    );
  }

  if (error) {
    return (
      <BlogLayout>
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Latest articles and tutorials about Simple Table</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-center text-gray-500">No blog posts found matching your search.</p>
          </div>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
