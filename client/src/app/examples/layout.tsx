"use client";

import { usePathname, useRouter } from "next/navigation";
import { trackLinkClick } from "../../utils/analytics";
import PageLayout from "../../components/PageLayout";
import { Button, Space, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faIndustry,
  faUsers,
  faFileInvoiceDollar,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "../../hooks/useIsMobile";

// Import all example components
import FinancialDashboard from "../../components/examples/finance/FinancialDashboard";
import ManufacturingMetrics from "../../components/examples/manufacturing/ManufacturingMetrics";
import HRManagement from "../../components/examples/hr/HRManagement";
import BillingDashboard from "../../components/examples/billing/BillingDashboard";

// Define example navigation items
const examples = [
  {
    id: "finance",
    label: "Financial",
    path: "/examples/finance",
    icon: faChartLine,
    component: FinancialDashboard,
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    path: "/examples/manufacturing",
    icon: faIndustry,
    component: ManufacturingMetrics,
  },
  { id: "hr", label: "HR", path: "/examples/hr", icon: faUsers, component: HRManagement },
  {
    id: "billing",
    label: "Billing",
    path: "/examples/billing",
    icon: faFileInvoiceDollar,
    component: BillingDashboard,
  },
];

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();

  // Determine current active example
  const currentPath = pathname;
  const currentExample =
    examples.find((example) => currentPath.includes(example.id)) || examples[0];

  // Title mapping for each example
  const exampleTitles = {
    finance: "Financial Dashboard",
    manufacturing: "Manufacturing Metrics",
    hr: "HR Management",
    billing: "Revenue Recognition",
  };

  const handleLinkClick = (linkPath: string, linkName: string) => {
    trackLinkClick(linkName, linkPath);
    router.push(linkPath);
  };

  // Mobile dropdown menu items
  const menuItems = examples.map((example) => ({
    key: example.id,
    label: example.label,
    icon: <FontAwesomeIcon icon={example.icon} />,
    onClick: () => handleLinkClick(example.path, example.label),
  }));

  return (
    <PageLayout containerWidth="w-full" sidebar={null}>
      <div className="flex flex-col w-full h-full px-4 py-2">
        {/* Navigation Bar */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h1 className="text-xl font-semibold">
            {exampleTitles[currentExample.id as keyof typeof exampleTitles]}
          </h1>

          {/* Show dropdown on mobile, buttons on desktop */}
          {isMobile ? (
            <Dropdown
              menu={{ items: menuItems, selectedKeys: [currentExample.id] }}
              trigger={["click"]}
            >
              <Button type="primary">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={currentExample.icon} />
                  {currentExample.label}
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </Button>
            </Dropdown>
          ) : (
            <Space size="middle" wrap className="self-end sm:self-auto">
              {examples.map((example, index) => (
                <Button
                  key={index}
                  type={currentExample.id === example.id ? "primary" : "default"}
                  icon={<FontAwesomeIcon icon={example.icon} />}
                  onClick={() => handleLinkClick(example.path, example.label)}
                >
                  {example.label}
                </Button>
              ))}
            </Space>
          )}
        </div>

        {/* Example Content */}
        <div className="flex-grow">{children}</div>
      </div>
    </PageLayout>
  );
}
