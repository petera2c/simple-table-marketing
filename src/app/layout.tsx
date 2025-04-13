"use client";

import { Analytics } from "../components/Analytics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./global.css";
import { QueryProvider } from "../providers/QueryProvider";
import { ClientApp } from "../components/ClientApp";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { useRef } from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollRestoration(scrollRef);
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body>
        <QueryProvider>
          <ClientApp>
            <div className="h-screen flex flex-col overflow-auto" ref={scrollRef}>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ClientApp>
        </QueryProvider>
      </body>
    </html>
  );
}
