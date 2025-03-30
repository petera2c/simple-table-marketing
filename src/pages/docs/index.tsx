import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DocsIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the installation page by default
    navigate("/docs/installation", { replace: true });
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default DocsIndex;
