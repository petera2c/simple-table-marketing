import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Table - The Best React Table Component for Business Applications",
  description:
    "Simple Table is a powerful, lightweight React grid component that brings beautiful data visualization to your applications. Features include cell editing, column management, pagination, infinite scroll, and more.",
  keywords:
    "react table, react grid, react spreadsheet, simple table, react data table, business table component, react table library, react grid component, react data grid, react table component, react data visualization, react business table, react enterprise table",
  metadataBase: new URL("https://www.simple-table.com"),
  openGraph: {
    type: "website",
    url: "https://www.simple-table.com/",
    title: "Simple Table - The Best React Table Component for Business Applications",
    description:
      "Simple Table is a powerful, lightweight React grid component that brings beautiful data visualization to your applications. Features include cell editing, column management, pagination, infinite scroll, and more.",
    images: ["https://www.simple-table.com/og-image.jpg"],
    siteName: "Simple Table",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Table - The Best React Table Component for Business Applications",
    description:
      "Simple Table is a powerful, lightweight React grid component that brings beautiful data visualization to your applications. Features include cell editing, column management, pagination, infinite scroll, and more.",
    images: ["https://www.simple-table.com/og-image.jpg"],
    creator: "@simpletable",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon-192x192.png",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    title: "Simple Table",
    statusBarStyle: "default",
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://www.simple-table.com/",
  },
};
