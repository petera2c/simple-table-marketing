"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateHRData } from "@/components/examples/hr/hr-rows";
import { HEADERS } from "@/components/examples/hr/hr-headers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "simple-table-core/styles.css";

const data = generateHRData();

function HRExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "light";

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      rows={data}
      rowsPerPage={10}
      selectableCells
      shouldPaginate
      theme={theme}
    />
  );
}

export default function HRExample() {
  return (
    <Suspense fallback={<div />}>
      <HRExampleContent />
    </Suspense>
  );
}
