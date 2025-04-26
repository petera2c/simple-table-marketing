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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`st-marketing-root ${nunito.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
      <Analytics />
    </html>
  );
}
