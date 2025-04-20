import { FinancialExample } from "@/components/examples/finance/FinancialExample";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.examples.finance.title,
  description: SEO_STRINGS.examples.finance.description,
};

export default function FinancePage() {
  return <FinancialExample height="70dvh" />;
}
