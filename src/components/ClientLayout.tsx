"use client";

import Header from "./Header";
import Footer from "./Footer";
import "../app/global.css";
import { QueryProvider } from "../providers/QueryProvider";
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
      <div className="h-screen flex flex-col overflow-auto" ref={scrollRef}>
        {!isMobile && <AnimatedBackground />}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </QueryProvider>
  );
}
