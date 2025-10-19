import { Metadata } from "next";
import CSVExportContent from "@/components/pages/docs-pages/CSVExportContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.csvExport.title,
  description: SEO_STRINGS.csvExport.description,
  keywords: SEO_STRINGS.csvExport.keywords,
  openGraph: {
    title: SEO_STRINGS.csvExport.title,
    description: SEO_STRINGS.csvExport.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.csvExport.title,
    description: SEO_STRINGS.csvExport.description,
  },
};

const CSVExportPage = () => {
  return <CSVExportContent />;
};

export default CSVExportPage;
