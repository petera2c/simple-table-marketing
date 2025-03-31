import { Routes, Route, Navigate } from "react-router-dom";
import ExamplesLayout from "./ExamplesLayout";
import FinancialDashboard from "../../components/examples/finance/FinancialDashboard";
import HRManagement from "../../components/examples/hr/HRManagement";
import ManufacturingMetrics from "../../components/examples/manufacturing/ManufacturingMetrics";
import ProjectManagement from "../../components/examples/project/ProjectManagement";

// Placeholder for examples that haven't been created yet
const ExamplePlaceholder = ({ name }: { name: string }) => (
  <div className="flex flex-col gap-4 items-center justify-center h-[70vh]">
    <h1 className="text-2xl font-bold">{name} Example</h1>
    <p className="text-gray-600">This example is coming soon. Check back later!</p>
  </div>
);

const ExamplesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamplesLayout />}>
        {/* Redirect default route to finance example */}
        <Route index element={<Navigate to="finance" replace />} />

        {/* Industry Examples */}
        <Route path="finance" element={<FinancialDashboard />} />
        <Route path="manufacturing" element={<ManufacturingMetrics />} />
        <Route path="project" element={<ProjectManagement />} />

        {/* Specialty Examples */}
        <Route path="sports" element={<ExamplePlaceholder name="Sports Analytics" />} />
        <Route path="space" element={<ExamplePlaceholder name="Space Missions" />} />
        <Route path="hr" element={<HRManagement />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="finance" replace />} />
      </Route>
    </Routes>
  );
};

export default ExamplesRoutes;
