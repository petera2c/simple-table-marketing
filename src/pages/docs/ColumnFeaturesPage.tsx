import { Navigate } from "react-router-dom";

const ColumnFeaturesPage = () => {
  // Redirect to the new columns overview page
  return <Navigate to="/docs/columns" replace />;
};

export default ColumnFeaturesPage;
