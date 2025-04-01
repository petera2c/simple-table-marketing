import { Routes, Route, Navigate } from "react-router-dom";
import ExamplesLayout from "./ExamplesLayout";
import NotFound from "../NotFoundPage";

const ExamplesRoutes = () => {
  return (
    <Routes>
      {/* Redirect default route to finance example */}
      <Route index element={<Navigate to="finance" replace />} />

      {/* All examples use the same layout */}
      <Route path="finance" element={<ExamplesLayout />} />
      <Route path="manufacturing" element={<ExamplesLayout />} />
      <Route path="hr" element={<ExamplesLayout />} />
      <Route path="billing" element={<ExamplesLayout />} />

      {/* Fallback route for undefined paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ExamplesRoutes;
