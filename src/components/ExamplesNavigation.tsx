"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faIndustry,
  faUsers,
  faFileInvoiceDollar,
  faServer,
  faMusic,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import ThemeSelector from "@/components/ThemeSelector";
import { Suspense, useEffect } from "react";
import { useThemeContext } from "@/providers/ThemeProvider";
import PageWrapper from "./PageWrapper";
import { ThemeOption } from "@/types/theme";
import IconLibrarySelector from "@/components/IconLibrarySelector";
import { IconLibrary } from "@/utils/getTableIcons";

// Define example navigation items
const examples = [
  {
    id: "crm",
    label: "CRM",
    path: "/examples/crm",
    icon: faUserTie,
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    path: "/examples/infrastructure",
    icon: faServer,
  },
  {
    id: "music",
    label: "Music",
    path: "/examples/music",
    icon: faMusic,
  },
  {
    id: "billing",
    label: "Billing",
    path: "/examples/billing",
    icon: faFileInvoiceDollar,
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
    id: "sales",
    label: "Sales",
    path: "/examples/sales",
    icon: faChartLine,
  },
];

// Title mapping for each example
const exampleTitles = {
  infrastructure: "Infrastructure Monitoring",
  manufacturing: "Manufacturing Metrics",
  hr: "HR Management",
  billing: "Revenue Recognition",
  sales: "Sales Pipeline",
  music: "Music Artist Analytics",
  crm: "CRM Leads Management",
};

// Row count options
const rowCountOptions = [
  { value: 50, label: "50 rows" },
  { value: 1000, label: "1,000 rows" },
  { value: 10000, label: "10,000 rows" },
];

function ExamplesNavigationContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useThemeContext();
  const currentTheme = (searchParams?.get("theme") as ThemeOption) || theme;
  const currentRowCount = parseInt(searchParams?.get("rows") || "1000");
  const currentIconLibrary = (searchParams?.get("icons") as IconLibrary) || "default";

  // Determine current active example
  const currentPath = pathname;
  const currentExample =
    examples.find((example) => currentPath?.includes(example.id)) || examples[0];

  const handleLinkClick = (linkPath: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    router.push(`${linkPath}?${params.toString()}`);
  };

  const handleThemeChange = (theme: ThemeOption) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("theme", theme);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleRowCountChange = (rowCount: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("rows", rowCount.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleIconLibraryChange = (iconLibrary: IconLibrary) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("icons", iconLibrary);
    router.push(`${pathname}?${params.toString()}`);
  };

  // If we are not on the CRM example, and the theme is custom-light or custom-dark, set the theme to the website theme
  useEffect(() => {
    if (
      currentExample.id !== "crm" &&
      (currentTheme === "custom-light" || currentTheme === "custom-dark")
    ) {
      handleThemeChange(theme);
    } else if (
      currentExample.id === "crm" &&
      currentTheme !== "custom-light" &&
      currentTheme !== "custom-dark"
    ) {
      handleThemeChange(theme === "dark" ? "custom-dark" : "custom-light");
    }
  }, [currentExample.id, currentTheme, theme]);

  return (
    <PageWrapper disableScrollRestoration>
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-xl font-semibold">
          {exampleTitles[currentExample.id as keyof typeof exampleTitles]}
        </h1>
        <div className="flex items-end gap-3 flex-wrap">
          {currentExample.id !== "music" && currentExample.id !== "crm" && (
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-600 dark:text-gray-300">Rows</span>
              <Select
                placeholder="Select row count"
                style={{ width: 150 }}
                onChange={handleRowCountChange}
                value={currentRowCount}
                options={rowCountOptions}
              />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-600 dark:text-gray-300">Example</span>
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
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-600 dark:text-gray-300">Theme</span>
            <ThemeSelector
              currentTheme={currentTheme}
              setCurrentTheme={handleThemeChange}
              restrictedThemes={
                currentExample.id === "crm" ? ["custom-dark", "custom-light"] : undefined
              }
              themeLabels={
                currentExample.id === "crm"
                  ? {
                      "custom-light": "Custom Light",
                      "custom-dark": "Custom Dark",
                    }
                  : undefined
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-600 dark:text-gray-300">Icons</span>
            <IconLibrarySelector
              currentIconLibrary={currentIconLibrary}
              onChange={handleIconLibraryChange}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default function ExamplesNavigation() {
  return (
    <Suspense fallback={<div />}>
      <ExamplesNavigationContent />
    </Suspense>
  );
}
