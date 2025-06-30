import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import { customizingReactTableLookPost } from "@/constants/blogPosts";
import BlogLayout from "@/components/BlogLayout";
import CustomizingReactTableThemesContent from "@/components/pages/CustomizingReactTableThemesContent";

export const metadata: Metadata = {
  title:
    SEO_STRINGS.blogPosts.customizingReactTableLook?.title || customizingReactTableLookPost.title,
  description:
    SEO_STRINGS.blogPosts.customizingReactTableLook?.description ||
    customizingReactTableLookPost.description,
  keywords:
    SEO_STRINGS.blogPosts.customizingReactTableLook?.keywords ||
    customizingReactTableLookPost.tags.join(", "),
  openGraph: {
    title:
      SEO_STRINGS.blogPosts.customizingReactTableLook?.title || customizingReactTableLookPost.title,
    description:
      SEO_STRINGS.blogPosts.customizingReactTableLook?.description ||
      customizingReactTableLookPost.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      SEO_STRINGS.blogPosts.customizingReactTableLook?.title || customizingReactTableLookPost.title,
    description:
      SEO_STRINGS.blogPosts.customizingReactTableLook?.description ||
      customizingReactTableLookPost.description,
  },
};

export default function CustomizingReactTableLookPage() {
  return (
    <BlogLayout>
      <CustomizingReactTableThemesContent />
    </BlogLayout>
  );
}
