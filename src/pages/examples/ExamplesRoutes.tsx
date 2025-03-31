import { Routes, Route, Navigate } from "react-router-dom";
import ExamplesLayout from "./ExamplesLayout";
import FinancialDashboard from "../../components/examples/finance/FinancialDashboard";
import HRManagement from "../../components/examples/hr/HRManagement";
import ManufacturingMetrics from "../../components/examples/manufacturing/ManufacturingMetrics";
import BillingDashboard from "../../components/examples/billing/BillingDashboard";

const ExamplesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamplesLayout />}>
        {/* Redirect default route to finance example */}
        <Route index element={<Navigate to="finance" replace />} />

        {/* Industry Examples */}
        <Route path="finance" element={<FinancialDashboard />} />
        <Route path="manufacturing" element={<ManufacturingMetrics />} />
        <Route path="hr" element={<HRManagement />} />
        <Route path="billing" element={<BillingDashboard />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="finance" replace />} />
      </Route>
    </Routes>
  );
};

export default ExamplesRoutes;
