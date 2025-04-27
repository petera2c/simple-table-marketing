"use client";

import { SimpleTable, Theme } from "simple-table-core";
// import { generateBillingData } from "@/examples/billing/billing-rows";
import { HEADERS } from "@/examples/billing/billing-headers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import billingData from "./billing-data.json";

// Use pre-generated data instead of generating it at runtime
const data = billingData;
const ROW_HEIGHT = 40;

function BillingExampleContent({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      height={containerHeight ? `${containerHeight}px` : "70dvh"}
      onGridReady={onGridReady}
      rows={data}
      selectableCells
      theme={theme}
    />
  );
}

export default function BillingExample({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) {
  return (
    <Suspense fallback={<div />}>
      <BillingExampleContent onGridReady={onGridReady} themeOverride={themeOverride} />
    </Suspense>
  );
}
