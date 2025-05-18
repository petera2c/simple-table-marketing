import { SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./billing-headers";
import "simple-table-core/styles.css";
import BILLING_DATA from "./billing-data.json";

export default function BillingExample({
  height,
  onGridReady,
  theme,
}: {
  height: number | null;
  onGridReady?: () => void;
  theme?: Theme;
}) {
  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      height={height ? `${height}px` : "70dvh"}
      onGridReady={onGridReady}
      rows={BILLING_DATA}
      selectableCells
      theme={theme}
    />
  );
}
