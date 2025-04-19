"use client";

import { SimpleTable, Theme } from "simple-table-core";
import { generateFinanceData } from "@/app/examples/finance/finance-rows";
import { HEADERS } from "@/app/examples/finance/finance-headers";
import { useSearchParams } from "next/navigation";
import "simple-table-core/styles.css";

const data = generateFinanceData();

export const FinancialDashboardContent = ({
  height = "70dvh",
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={height}
      theme={theme}
      selectableCells
    />
  );
};
