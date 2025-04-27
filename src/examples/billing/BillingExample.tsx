"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateBillingData } from "@/examples/billing/billing-rows";
import { HEADERS } from "@/examples/billing/billing-headers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const data = generateBillingData();
const ROW_HEIGHT = 40;

function BillingExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "dark";
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
      rows={data}
      selectableCells
      theme={theme}
    />
  );
}

export default function BillingExample() {
  return (
    <Suspense fallback={<div />}>
      <BillingExampleContent />
    </Suspense>
  );
}
