import { Routes, Route, Navigate } from "react-router-dom";
import ExamplesLayout from "./ExamplesLayout";

const ExamplesRoutes = () => {
  return (
    <Routes>
      {/* Redirect default route to finance example */}
      <Route index element={<Navigate to="finance" replace />} />

      {/* All examples use the same layout */}
      <Route path=":exampleId" element={<ExamplesLayout />} />

      {/* Fallback route for undefined paths */}
      <Route path="*" element={<Navigate to="finance" replace />} />
    </Routes>
  );
};

export default ExamplesRoutes;
