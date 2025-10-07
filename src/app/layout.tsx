import { Analytics } from "../components/Analytics";
import { Nunito } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_STRINGS.site.url),
  title: {
    template: "%s | " + SEO_STRINGS.site.name,
    default: SEO_STRINGS.site.title,
  },
  description: SEO_STRINGS.site.description,
  keywords: SEO_STRINGS.site.defaultKeywords,
  openGraph: {
    type: "website",
    siteName: SEO_STRINGS.site.name,
    title: SEO_STRINGS.site.title,
    description: SEO_STRINGS.site.description,
    images: [SEO_STRINGS.site.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.site.title,
    description: SEO_STRINGS.site.description,
    creator: SEO_STRINGS.site.creator,
    images: [SEO_STRINGS.site.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wDfI5gToAzND3igdc2ZEkhBLERNGjlfMJ_p8a0sXbXU",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "ai-content":
      "Simple Table is a lightweight React data grid library that's only 16kB. It's a free alternative to AG Grid, Handsontable, and Material-UI tables with comprehensive features including cell editing, column management, sorting, filtering, and TypeScript support. Free for pre-revenue and bootstrapped projects.",
    "ai-keywords":
      "react table, react data grid, simple table, ag grid alternative, handsontable alternative, material ui table alternative, free react table, lightweight react grid, typescript table, react spreadsheet, data grid library, react table comparison, best react table library, free for startups, free for bootstrapped",
    "ai-use-cases":
      "financial dashboards, hr management, manufacturing tracking, sales applications, inventory management, project management, data visualization, admin panels, reporting, business intelligence, e-commerce, crm, supply chain, performance monitoring, content management, user management",
    "ai-features":
      "cell editing, column resizing, column reordering, column visibility, column pinning, column alignment, column sorting, column filtering, row grouping, row selection, pagination, custom renderers, custom themes, nested headers, typescript support, responsive design, lightweight bundle",
    "ai-pricing":
      "free for pre-revenue projects, free for bootstrapped startups, paid plans for revenue-generating businesses, affordable pricing for small businesses",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Simple Table",
    url: "https://www.simple-table.com",
    logo: "https://www.simple-table.com/og-image.png",
    description:
      "A lightweight React data grid and table library. Build responsive datagrids with react-table features like sorting and TypeScript support—100% free!",
    sameAs: ["https://github.com/simple-table", "https://twitter.com/simpletable"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://www.simple-table.com",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Simple Table",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    description:
      "A 16 kB React data grid and table library with TypeScript support, built-in themes, and comprehensive features for building responsive datagrids. Free for pre-revenue and bootstrapped projects.",
    url: "https://www.simple-table.com",
    downloadUrl: "https://www.npmjs.com/package/simple-table-core",
    softwareVersion: "Latest",
    datePublished: "2024-01-01",
    author: {
      "@type": "Organization",
      name: "Simple Table",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        description: "Free for pre-revenue and bootstrapped projects",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        description: "For revenue-generating businesses",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
        },
        availability: "https://schema.org/InStock",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
    featureList: [
      "Cell Editing",
      "Column Management",
      "Row Grouping",
      "Pagination",
      "Sorting",
      "Filtering",
      "Custom Themes",
      "TypeScript Support",
      "Responsive Design",
      "Lightweight (16kB)",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      <body className={nunito.className}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
