"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateManufacturingData } from "@/components/examples/manufacturing/manufacturing-rows";
import { HEADERS } from "@/components/examples/manufacturing/manufacturing-headers";
import { useSearchParams } from "next/navigation";
import "simple-table-core/styles.css";

const data = generateManufacturingData();

export default function ManufacturingExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "sky";

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="60dvh"
      theme={theme}
      selectableCells
    />
  );
}
