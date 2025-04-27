"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateManufacturingData } from "@/examples/manufacturing/manufacturing-rows";
import { HEADERS } from "@/examples/manufacturing/manufacturing-headers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const data = generateManufacturingData();
const ROW_HEIGHT = 40;

function ManufacturingExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "sky";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={containerHeight ? `${containerHeight}px` : "70dvh"}
      theme={theme}
      selectableCells
    />
  );
}

export default function ManufacturingExample() {
  return (
    <Suspense fallback={<div />}>
      <ManufacturingExampleContent />
    </Suspense>
  );
}
