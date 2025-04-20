"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { SimpleTable, TableRefType } from "simple-table-core";
import { Theme } from "simple-table-core";

import "simple-table-core/styles.css";
import { HEADERS } from "./finance-headers";
import data from "./finance-data.json";

export const FinancialExample = ({
  height = "70dvh",
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  const tableRef = useRef<TableRefType | null>(null);

  useEffect(() => {
    // Repeat every 10 seconds
    // const interval = setInterval(() => {
    // console.log(tableRef.current);
    if (tableRef.current) {
      tableRef.current.updateData({
        accessor: "name",
        rowIndex: 0,
        newValue: "test",
      });
    }
    // }, 2000);

    // return () => clearInterval(interval);
  }, [tableRef.current]);

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={height}
      theme={theme}
      selectableCells
      tableRef={tableRef}
    />
  );
};
