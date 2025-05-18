"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SalesExample } from "./SalesExample";
import { Theme } from "simple-table-core";

export const SalesExampleWrapper = ({
  onGridReady,
  shouldPaginate = true,
  themeOverride,
}: {
  onGridReady?: () => void;
  shouldPaginate?: boolean;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  return (
    <Suspense fallback={<div />}>
      <SalesExample shouldPaginate={shouldPaginate} theme={theme} onGridReady={onGridReady} />
    </Suspense>
  );
};
