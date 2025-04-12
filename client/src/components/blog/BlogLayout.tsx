"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </motion.div>
  );
};

export default BlogLayout;
