import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";

export const metadata: Metadata = {
  title: `Blog - ${SEO_STRINGS.docs.title}`,
  description: "Read the latest articles and tutorials about Simple Table",
  keywords: `blog, articles, tutorials, ${SEO_STRINGS.docs.keywords}`,
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
