import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";
import LeadsExampleWrapper from "@/examples/leads/LeadsExampleWrapper";

export const metadata: Metadata = {
  title: SEO_STRINGS.examples.leads.title,
  description: SEO_STRINGS.examples.leads.description,
  openGraph: {
    title: SEO_STRINGS.examples.leads.title,
    description: SEO_STRINGS.examples.leads.description,
    type: "website",
    images: [SEO_STRINGS.site.ogImage],
    siteName: SEO_STRINGS.site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.examples.leads.title,
    description: SEO_STRINGS.examples.leads.description,
    creator: SEO_STRINGS.site.creator,
    images: SEO_STRINGS.site.ogImage.url,
  },
  alternates: {
    canonical: "/examples/leads",
  },
};

export default function LeadsPage() {
  return <LeadsExampleWrapper shouldPaginate={false} />;
}
