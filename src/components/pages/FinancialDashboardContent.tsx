"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateFinanceData } from "@/app/examples/finance/finance-rows";
import { HEADERS } from "@/app/examples/finance/finance-headers";
import { useSearchParams } from "next/navigation";
import "simple-table-core/styles.css";

const data = generateFinanceData();

export const FinancialDashboardContent = ({ height = "70dvh" }: { height?: string }) => {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "funky";

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={height}
      theme={theme}
      selectableCells
      selectableColumns
    />
  );
};
