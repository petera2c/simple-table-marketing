import { useLocation, useNavigate } from "react-router-dom";
import { trackLinkClick } from "../../utils/analytics";
import PageLayout from "../../components/PageLayout";
import { Button, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faIndustry, faUsers, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

// Import all example components
import FinancialDashboard from "../../components/examples/finance/FinancialDashboard";
import ManufacturingMetrics from "../../components/examples/manufacturing/ManufacturingMetrics";
import HRManagement from "../../components/examples/hr/HRManagement";
import BillingDashboard from "../../components/examples/billing/BillingDashboard";

// Define example navigation items
const examples = [
  { id: "finance", label: "Financial", path: "/examples/finance", icon: faChartLine, component: FinancialDashboard },
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

const ExamplesLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current active example
  const currentPath = location.pathname;
  const currentExample = examples.find((example) => currentPath.includes(example.id)) || examples[0];

  // Title mapping for each example
  const exampleTitles = {
    finance: "Financial Dashboard",
    manufacturing: "Manufacturing Metrics",
    hr: "HR Management",
    billing: "Revenue Recognition",
  };

  const handleLinkClick = (linkPath: string, linkName: string) => {
    trackLinkClick(linkName, linkPath);
    navigate(linkPath);
  };

  // Create the Example component
  const ExampleComponent = currentExample.component;

  return (
    <PageLayout containerWidth="w-full" sidebar={null}>
      <div className="flex flex-col w-full h-full px-4 py-2">
        {/* Navigation Bar */}
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">{exampleTitles[currentExample.id as keyof typeof exampleTitles]}</h1>
          <Space size="middle">
            {examples.map((example) => (
              <Button
                key={example.id}
                type={currentExample.id === example.id ? "primary" : "default"}
                icon={<FontAwesomeIcon icon={example.icon} />}
                onClick={() => handleLinkClick(example.path, example.label)}
              >
                {example.label}
              </Button>
            ))}
          </Space>
        </div>

        {/* Example Content */}
        <div className="flex-grow">
          <ExampleComponent />
        </div>
      </div>
    </PageLayout>
  );
};

export default ExamplesLayout;
