import { SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./billing-headers";
import "simple-table-core/styles.css";
import { useBillingData } from "./useBillingData";

export default function BillingExample({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height,
  nextIcon,
  onGridReady,
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
  onGridReady?: () => void;
  prevIcon?: React.ReactNode;
  rowCount?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const { data, isLoading } = useBillingData(rowCount);

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
        Loading billing data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      expandIcon={expandIcon}
      filterIcon={filterIcon}
      headerCollapseIcon={headerCollapseIcon}
      headerExpandIcon={headerExpandIcon}
      height={height ? `${height}px` : "70dvh"}
      initialSortColumn="amount" // Show highest amounts first
      initialSortDirection="desc"
      nextIcon={nextIcon}
      onGridReady={onGridReady}
      prevIcon={prevIcon}
      rowGrouping={["invoices", "charges"]}
      rowIdAccessor="id"
      rows={data}
      selectableCells
      sortDownIcon={sortDownIcon}
      sortUpIcon={sortUpIcon}
      theme={theme}
      useOddColumnBackground
    />
  );
}
