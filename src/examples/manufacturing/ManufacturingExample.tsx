import { Row, SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";
import { useManufacturingData } from "./useManufacturingData";

export default function ManufacturingExample({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height,
  nextIcon,
  prevIcon,
  rowCount = 1000,
  sortDownIcon,
  sortUpIcon,
  theme,
}: {
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  height: number | null;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  rowCount?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const { data, isLoading } = useManufacturingData(rowCount);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: height ? `${height}px` : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading manufacturing data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      expandIcon={expandIcon}
      filterIcon={filterIcon}
      headerCollapseIcon={headerCollapseIcon}
      headerExpandIcon={headerExpandIcon}
      height={height ? `${height}px` : "70dvh"}
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      rowGrouping={["stations"]}
      rows={data}
      selectableCells
      sortDownIcon={sortDownIcon}
      sortUpIcon={sortUpIcon}
      theme={theme}
    />
  );
}
