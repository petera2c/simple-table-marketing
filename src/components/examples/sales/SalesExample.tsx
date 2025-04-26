"use client";

import { useSearchParams } from "next/navigation";
import { SimpleTable, Row } from "simple-table-core";
import { Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import data from "./sales-data.json";
import { Suspense } from "react";
import "simple-table-core/styles.css";

function SalesExampleContent({
  height = "70dvh",
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={SALES_HEADERS}
      rows={data as Row[]}
      height={height}
      theme={theme}
      selectableCells
    />
  );
}

export const SalesExample = ({
  height = "70dvh",
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  return (
    <Suspense fallback={<div />}>
      <SalesExampleContent height={height} themeOverride={themeOverride} />
    </Suspense>
  );
};
