"use client";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { trackPageView } from "../utils/analytics";
import { usePathname } from "next/navigation";

const RouteContainer = () => {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return <Outlet />;
};

export default RouteContainer;
