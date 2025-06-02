import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8 shadow-xl rounded-lg bg-white dark:bg-gray-900 my-4">
      {children}
    </div>
  );
}
