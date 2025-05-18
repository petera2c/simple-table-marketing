import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import FinancialExampleWrapper from "@/examples/finance/FinanceExampleWrapper";

export const metadata: Metadata = {
  title: SEO_STRINGS.examples.finance.title,
  description: SEO_STRINGS.examples.finance.description,
};

export default function FinancePage() {
  return <FinancialExampleWrapper />;
}
