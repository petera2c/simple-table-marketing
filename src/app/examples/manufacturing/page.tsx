import ManufacturingExampleContent from "@/components/examples/manufacturing/ManufacturingExample";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_STRINGS.examples.manufacturing.title,
  description: SEO_STRINGS.examples.manufacturing.description,
  openGraph: {
    title: SEO_STRINGS.examples.manufacturing.title,
    description: SEO_STRINGS.examples.manufacturing.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.examples.manufacturing.title,
    description: SEO_STRINGS.examples.manufacturing.description,
  },
};

export default function ManufacturingExample() {
  return <ManufacturingExampleContent />;
}
