"use client";

import Header from "./Header";
import Footer from "./Footer";
import "../app/global.css";
import { QueryProvider } from "../providers/QueryProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollRestoration(scrollRef);

  return (
    <QueryProvider>
      <ThemeProvider>
        <div
          className="h-screen flex flex-col overflow-auto transition-colors duration-200 bg-white dark:bg-gray-900"
          ref={scrollRef}
        >
          {!isMobile && <AnimatedBackground />}
          <Header />
          <div className="w-full flex-grow z-10 text-gray-800 dark:text-white">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}
