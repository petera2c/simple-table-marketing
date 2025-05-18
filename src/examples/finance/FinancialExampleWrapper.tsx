"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FinancialExample from "./FinancialExample";
import { Theme } from "simple-table-core";

export const FinancialExampleWrapper = ({
  height,
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  return (
    <Suspense fallback={<div />}>
      <FinancialExample height={height} theme={theme} />
    </Suspense>
  );
};
