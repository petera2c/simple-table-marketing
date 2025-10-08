"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { Suspense } from "react";
import { useThemeContext } from "@/providers/ThemeProvider";

// Define example navigation items
const examples = [
  {
    id: "finance",
    label: "Financial",
    path: "/examples/finance",
    icon: faChartLine,
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    path: "/examples/manufacturing",
    icon: faIndustry,
  },
  {
    id: "hr",
    label: "HR",
    path: "/examples/hr",
    icon: faUsers,
  },
  {
    id: "billing",
    label: "Billing",
    path: "/examples/billing",
    icon: faFileInvoiceDollar,
  },
  {
    id: "sales",
    label: "Sales",
    path: "/examples/sales",
    icon: faChartLine,
  },
];

// Title mapping for each example
const exampleTitles = {
  finance: "Financial Dashboard",
  manufacturing: "Manufacturing Metrics",
  hr: "HR Management",
  billing: "Revenue Recognition",
  sales: "Sales Pipeline",
};

// Row count options
const rowCountOptions = [
  { value: 1000, label: "1,000 rows" },
  { value: 10000, label: "10,000 rows" },
  { value: 100000, label: "100,000 rows" },
];

function ExamplesNavigationContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useThemeContext();
  const currentTheme = (searchParams?.get("theme") as Theme) || theme;
  const currentRowCount = parseInt(searchParams?.get("rows") || "1000");

  // Determine current active example
  const currentPath = pathname;
  const currentExample =
    examples.find((example) => currentPath?.includes(example.id)) || examples[0];

  const handleLinkClick = (linkPath: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    router.push(`${linkPath}?${params.toString()}`);
  };

  const handleThemeChange = (theme: Theme) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("theme", theme);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleRowCountChange = (rowCount: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("rows", rowCount.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <h1 className="text-xl font-semibold">
        {exampleTitles[currentExample.id as keyof typeof exampleTitles]}
      </h1>
      <div className="flex items-center gap-2 flex-wrap">
        <Select
          placeholder="Select an example"
          style={{ width: 200 }}
          onChange={(value) => {
            const example = examples.find((e) => e.id === value);
            if (example) {
              handleLinkClick(example.path);
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
        <Select
          placeholder="Select row count"
          style={{ width: 150 }}
          onChange={handleRowCountChange}
          value={currentRowCount}
          options={rowCountOptions}
        />
        <ThemeSelector currentTheme={currentTheme} setCurrentTheme={handleThemeChange} />
      </div>
    </div>
  );
}

export default function ExamplesNavigation() {
  return (
    <Suspense fallback={<div />}>
      <ExamplesNavigationContent />
    </Suspense>
  );
}
