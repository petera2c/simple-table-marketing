"use client";

import Header from "./Header";
import Footer from "./Footer";
import "../app/global.css";
import { QueryProvider } from "../providers/QueryProvider";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { useRef } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollRestoration(scrollRef);

  return (
    <QueryProvider>
      <div className="h-screen flex flex-col overflow-auto" ref={scrollRef}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </QueryProvider>
  );
}
