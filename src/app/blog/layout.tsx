import PageLayout from "../../components/PageLayout";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout sidebar={null}>{children}</PageLayout>;
}
