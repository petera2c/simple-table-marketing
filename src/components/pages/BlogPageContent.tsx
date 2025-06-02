"use client";

import React, { useState } from "react";
import { SearchOutlined, CalendarOutlined, TagOutlined } from "@ant-design/icons";
import Link from "next/link";
import { BLOG_POSTS, searchBlogPosts, BlogPostMetadata } from "@/constants/blogPosts";

function BlogCard({ post }: { post: BlogPostMetadata }) {
  return (
    <div className="h-full hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <CalendarOutlined />
            <span className="text-gray-500 dark:text-gray-400">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h3 className="mb-2 text-gray-900 dark:text-gray-100 text-xl font-semibold">
            {post.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{post.description}</p>

          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <TagOutlined className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMetadata[]>(BLOG_POSTS);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim() === "") {
      setFilteredPosts(BLOG_POSTS);
    } else {
      setFilteredPosts(searchBlogPosts(value));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-gray-900 dark:text-gray-100 mb-4 text-4xl font-bold">
            Simple Table Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Insights, tutorials, and updates about building better React data grids with Simple
            Table.
          </p>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8">
            <span className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length > 0
                ? `Found ${filteredPosts.length} post${
                    filteredPosts.length === 1 ? "" : "s"
                  } matching "${searchQuery}"`
                : `No posts found matching "${searchQuery}"`}
            </span>
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-gray-500 dark:text-gray-400 mb-4 text-2xl font-semibold">
              No blog posts found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your search terms or browse all available posts.
            </p>
          </div>
        )}

        {/* All Tags Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-gray-100 mb-4 text-xl font-semibold">
            Browse by Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags))).map((tag) => (
              <button
                key={tag}
                onClick={() => handleSearch(tag)}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex items-center gap-1"
              >
                <TagOutlined className="w-3 h-3" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
