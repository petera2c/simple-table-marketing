"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateBillingData } from "@/components/examples/billing/billing-rows";
import { HEADERS } from "@/components/examples/billing/billing-headers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "simple-table-core/styles.css";

const data = generateBillingData();

function BillingExampleContent({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      height="70dvh"
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
