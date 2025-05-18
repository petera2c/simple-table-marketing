"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FinancialExample from "./FinancialExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

export const FinancialExampleWrapper = ({
  height,
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <Suspense fallback={<div />}>
      <FinancialExample height={height ? height : `${containerHeight}px`} theme={theme} />
    </Suspense>
  );
};
