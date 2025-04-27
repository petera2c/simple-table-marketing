import PageLayout from "../../components/PageLayout";
import ExamplesNavigation from "../../components/ExamplesNavigation";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout sidebar={null}>
      <ExamplesNavigation />
      <div className="flex-grow">{children}</div>
    </PageLayout>
  );
}
