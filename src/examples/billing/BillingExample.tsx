"use client";

import { SimpleTable, Theme } from "simple-table-core";
// import { generateBillingData } from "@/examples/billing/billing-rows";
import { HEADERS } from "@/examples/billing/billing-headers";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import billingData from "./billing-data.json";

// Use pre-generated data instead of generating it at runtime
const data = billingData;
const ROW_HEIGHT = 40;

export default function BillingExample({
  onGridReady,
  theme,
}: {
  onGridReady?: () => void;
  theme?: Theme;
}) {
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
