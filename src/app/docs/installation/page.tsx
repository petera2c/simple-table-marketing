import { Metadata } from "next";
import InstallationContent from "@/pages/docs/InstallationContent";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: SEO_STRINGS.installation.title,
  description: SEO_STRINGS.installation.description,
  keywords: SEO_STRINGS.installation.keywords,
  openGraph: {
    title: SEO_STRINGS.installation.title,
    description: SEO_STRINGS.installation.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.installation.title,
    description: SEO_STRINGS.installation.description,
  },
};

const InstallationPage = () => {
  return <InstallationContent />;
};

export default InstallationPage;
