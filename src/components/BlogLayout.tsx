"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8">
          <div className="flex flex-col flex-1 mx-auto mt-6 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8 mb-8 min-h-[calc(100dvh-84px-1.5rem)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
