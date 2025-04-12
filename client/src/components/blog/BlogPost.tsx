import React from "react";
import { BlogPost as BlogPostType } from "../../types/blog";

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
          <time dateTime={post.createdAt} className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.author && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.description && (
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{post.description}</p>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-800 dark:prose-code:text-gray-200 max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
};
