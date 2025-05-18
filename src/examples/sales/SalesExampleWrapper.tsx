"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SalesExample from "./SalesExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

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

  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });
  const howManyRowsCanFit = containerHeight ? Math.floor(containerHeight / ROW_HEIGHT) : 10;

  return (
    <Suspense fallback={<div />}>
      <SalesExample height={containerHeight} theme={theme} onGridReady={onGridReady} />
    </Suspense>
  );
};
