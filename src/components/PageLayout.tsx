"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  sidebar?: ReactNode;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ sidebar, children }) => {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 sm:px-6 md:px-8">
          {sidebar}

          <motion.div
            className={`flex flex-col flex-1 mx-auto mt-6 overflow-auto flex-grow min-h-[calc(100dvh-84px-1.5rem)] mb-8 bg-white rounded-xl  p-4 sm:p-6 md:p-8 shadow-[4px_0_16px_rgba(0,0,0,0.08)]`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
