import { SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";
import MANUFACTURING_DATA from "./manufacturing-data.json";

export default function ManufacturingExample({
  height,
  theme,
}: {
  height: number | null;
  theme?: Theme;
}) {
  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={MANUFACTURING_DATA}
      height={height ? `${height}px` : "70dvh"}
      theme={theme}
      selectableCells
    />
  );
}
