import { SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./billing-headers";
import "simple-table-core/styles.css";
import BILLING_DATA from "./billing-data.json";

export default function BillingExample({
  height,
  onGridReady,
  theme,
  rowCount = 1000,
}: {
  height: number | null;
  onGridReady?: () => void;
  theme?: Theme;
  rowCount?: number;
}) {
  const slicedData = BILLING_DATA.slice(0, rowCount);

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      height={height ? `${height}px` : "70dvh"}
      onGridReady={onGridReady}
      rowGrouping={["invoices", "charges"]}
      rowIdAccessor="id"
      rows={slicedData}
      selectableCells
      theme={theme}
      useOddColumnBackground
    />
  );
}
