import BlogLayout from "../../components/BlogLayout";

export default function BlogLayoutWrapper({ children }: { children: React.ReactNode }) {
  return <BlogLayout>{children}</BlogLayout>;
}
