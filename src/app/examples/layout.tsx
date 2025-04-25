import PageLayout from "../../components/PageLayout";
import ExamplesNavigation from "../../components/ExamplesNavigation";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout containerWidth="w-full" sidebar={null}>
      <div className="flex flex-col w-full h-full px-4 py-2">
        <ExamplesNavigation />
        <div className="flex-grow">{children}</div>
      </div>
    </PageLayout>
  );
}
