"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

export const BillingExampleWrapper = ({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <Suspense fallback={<div />}>
      <BillingExample height={containerHeight} onGridReady={onGridReady} theme={theme} />
    </Suspense>
  );
};
