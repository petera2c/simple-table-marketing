// Do not f***ing add a use client to this file. It will break SEO metadata
// The <main className="flex-grow">{children}</main> can not have any parent that is a client component.
// If you need to use a client component, use a wrapper component like PageWrapper

import Header from "./Header";
import Footer from "./Footer";
import "../app/global.css";
import { QueryProvider } from "../providers/QueryProvider";
import { ThemeProvider } from "../providers/ThemeProvider";

const ClientLayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <div
        id="main-scroll-container"
        className="h-screen flex flex-col overflow-auto transition-colors duration-200 bg-white dark:bg-gray-900"
      >
        <Header />
        <div className="w-full flex-grow z-10 text-gray-800 dark:text-white">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </QueryProvider>
  );
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </ThemeProvider>
  );
}
