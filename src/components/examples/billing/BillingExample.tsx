"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateBillingData } from "@/components/examples/billing/billing-rows";
import { HEADERS } from "@/components/examples/billing/billing-headers";
import { useSearchParams } from "next/navigation";
import "simple-table-core/styles.css";

const data = generateBillingData();

export default function BillingExample({ themeOverride }: { themeOverride?: Theme }) {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="70dvh"
      theme={theme}
      selectableCells
      editColumns
    />
  );
}
