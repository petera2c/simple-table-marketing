"use client";

import { useEffect, useState } from "react";

interface ClientAppProps {
  children: React.ReactNode;
}

export const ClientApp = ({ children }: ClientAppProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return <>{children}</>;
};
