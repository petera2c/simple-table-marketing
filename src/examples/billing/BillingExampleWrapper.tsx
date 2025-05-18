"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";

export const BillingExampleWrapper = ({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";

  return (
    <Suspense fallback={<div />}>
      <BillingExample onGridReady={onGridReady} theme={theme} />
    </Suspense>
  );
};
