"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollRestoration = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById("main-scroll-container")?.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollRestoration;
