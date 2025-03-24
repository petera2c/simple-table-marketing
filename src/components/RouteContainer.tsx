import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

const RouteContainer = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <Outlet />;
};

export default RouteContainer;
