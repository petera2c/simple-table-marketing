"use client";

import { useSearchParams } from "next/navigation";
import { SimpleTable, Row } from "simple-table-core";
import { Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import data from "./sales-data.json";
import { Suspense } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

function SalesExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "light";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={SALES_HEADERS}
      rows={data as Row[]}
      height={containerHeight ? `${containerHeight}px` : "70dvh"}
      theme={theme}
      selectableCells
    />
  );
}

export const SalesExample = () => {
  return (
    <Suspense fallback={<div />}>
      <SalesExampleContent />
    </Suspense>
  );
};
