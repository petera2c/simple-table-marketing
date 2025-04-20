"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { trackLinkClick } from "../../utils/analytics";
import PageLayout from "../../components/PageLayout";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faIndustry,
  faUsers,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Theme } from "simple-table-core";
import ThemeSelector from "@/components/ThemeSelector";
import { useEffect } from "react";

// Define example navigation items
const examples = [
  {
    id: "finance",
    label: "Financial",
    path: "/examples/finance",
    icon: faChartLine,
    defaultTheme: "light" as Theme,
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    path: "/examples/manufacturing",
    icon: faIndustry,
    defaultTheme: "dark" as Theme,
  },
  {
    id: "hr",
    label: "HR",
    path: "/examples/hr",
    icon: faUsers,
    defaultTheme: "dark" as Theme,
  },
  {
    id: "billing",
    label: "Billing",
    path: "/examples/billing",
    icon: faFileInvoiceDollar,
    defaultTheme: "light" as Theme,
  },
  {
    id: "sales",
    label: "Sales",
    path: "/examples/sales",
    icon: faChartLine,
    defaultTheme: "light" as Theme,
  },
];

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTheme = searchParams.get("theme") as Theme;

  // Determine current active example
  const currentPath = pathname;
  const currentExample =
    examples.find((example) => currentPath.includes(example.id)) || examples[0];

  // Initialize default theme if none is set
  useEffect(() => {
    if (!currentTheme && currentExample) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("theme", currentExample.defaultTheme);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [currentTheme, currentExample, pathname, router, searchParams]);

  // Title mapping for each example
  const exampleTitles = {
    finance: "Financial Dashboard",
    manufacturing: "Manufacturing Metrics",
    hr: "HR Management",
    billing: "Revenue Recognition",
  };

  const handleLinkClick = (linkPath: string, linkName: string) => {
    trackLinkClick(linkName, linkPath);
    const example = examples.find((e) => e.path === linkPath);
    const params = new URLSearchParams(searchParams.toString());

    // Only set default theme if no theme is currently set
    if (!params.has("theme") && example) {
      params.set("theme", example.defaultTheme);
    }

    router.push(`${linkPath}?${params.toString()}`);
  };

  const handleThemeChange = (theme: Theme) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("theme", theme);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <PageLayout containerWidth="w-full" sidebar={null}>
      <div className="flex flex-col w-full h-full px-4 py-2">
        {/* Navigation Bar */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h1 className="text-xl font-semibold">
            {exampleTitles[currentExample.id as keyof typeof exampleTitles]}
          </h1>
          <div className="flex items-center gap-2">
            <Select
              placeholder="Select an example"
              style={{ width: 200 }}
              onChange={(value) => {
                const example = examples.find((e) => e.id === value);
                if (example) {
                  handleLinkClick(example.path, example.label);
                }
              }}
              value={currentExample.id}
              options={examples.map((example) => ({
                value: example.id,
                label: (
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={example.icon} />
                    {example.label}
                  </div>
                ),
              }))}
            />
            <ThemeSelector currentTheme={currentTheme} setCurrentTheme={handleThemeChange} />
          </div>
        </div>

        {/* Example Content */}
        <div className="flex-grow">{children}</div>
      </div>
    </PageLayout>
  );
}
