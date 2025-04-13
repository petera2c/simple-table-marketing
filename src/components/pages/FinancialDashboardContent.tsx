"use client";

import { SimpleTable } from "simple-table-core";
import { generateFinanceData } from "@/app/examples/finance/finance-rows";
import { HEADERS } from "@/app/examples/finance/finance-headers";
import "simple-table-core/styles.css";

const data = generateFinanceData();

export const FinancialDashboardContent = ({ height = "70dvh" }: { height?: string }) => {
  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={height}
      theme="light"
      selectableCells
      selectableColumns
    />
  );
};
