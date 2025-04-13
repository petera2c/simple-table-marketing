"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollRestoration = (scrollRef: React.RefObject<HTMLDivElement>) => {
  const pathname = usePathname();

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollRestoration;
