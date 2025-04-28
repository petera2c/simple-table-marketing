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

function SalesExampleContent({
  shouldPaginate,
  themeOverride,
  onGridReady,
}: {
  shouldPaginate: boolean;
  themeOverride?: Theme;
  onGridReady?: () => void;
}) {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";
  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });
  const howManyRowsCanFit = containerHeight ? Math.floor(containerHeight / ROW_HEIGHT) : 10;

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={SALES_HEADERS}
      editColumns
      onGridReady={onGridReady}
      rows={data as Row[]}
      theme={theme}
      selectableCells
      {...(shouldPaginate
        ? { rowsPerPage: howManyRowsCanFit, shouldPaginate }
        : {
            height: containerHeight ? `${containerHeight}px` : "70dvh",
          })}
    />
  );
}

export const SalesExample = ({
  shouldPaginate = true,
  themeOverride,
  onGridReady,
}: {
  shouldPaginate?: boolean;
  themeOverride?: Theme;
  onGridReady?: () => void;
}) => {
  return (
    <Suspense fallback={<div />}>
      <SalesExampleContent
        shouldPaginate={shouldPaginate}
        themeOverride={themeOverride}
        onGridReady={onGridReady}
      />
    </Suspense>
  );
};
