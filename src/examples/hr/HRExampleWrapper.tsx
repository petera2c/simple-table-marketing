"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import HRExample from "./HRExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

export const HRExampleWrapper = ({ themeOverride }: { themeOverride?: Theme }) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <Suspense fallback={<div />}>
      <HRExample height={containerHeight} rowHeight={ROW_HEIGHT} theme={theme} />
    </Suspense>
  );
};
