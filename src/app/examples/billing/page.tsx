import BillingExampleContent from "@/examples/billing/BillingExample";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.examples.billing.title,
  description: SEO_STRINGS.examples.billing.description,
};

export default function BillingExample() {
  return <BillingExampleContent />;
}
