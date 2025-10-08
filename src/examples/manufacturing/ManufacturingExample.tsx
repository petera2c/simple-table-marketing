import { SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";
import MANUFACTURING_DATA from "./manufacturing-data.json";

export default function ManufacturingExample({
  height,
  theme,
  rowCount = 1000,
}: {
  height: number | null;
  theme?: Theme;
  rowCount?: number;
}) {
  const slicedData = MANUFACTURING_DATA.slice(0, rowCount);

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={slicedData}
      rowGrouping={["stations"]}
      rowIdAccessor="id"
      height={height ? `${height}px` : "70dvh"}
      theme={theme}
      selectableCells
    />
  );
}
