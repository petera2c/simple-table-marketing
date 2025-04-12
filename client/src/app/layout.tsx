"use client";

import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ANALYTICS_ENABLED,
  disableHotjarInDevelopment,
  disableSimpleAnalyticsInDevelopment,
} from "../utils/analyticsConfig";
import ReactGA from "react-ga4";
import "./global.css";
import { QueryProvider } from "../providers/QueryProvider";

// Disable analytics services in development
disableHotjarInDevelopment();
disableSimpleAnalyticsInDevelopment();

// Initialize Google Analytics in production
if (ANALYTICS_ENABLED) {
  ReactGA.initialize("G-HS01JZP3DM");
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div className="h-screen flex flex-col overflow-auto">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
