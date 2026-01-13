import { useRef, useState, useEffect } from "react";
import { SimpleTable, TableRefType, Theme } from "simple-table-core";
import "simple-table-core/styles.css";
import { HEADERS } from "./infrastructure-headers";
import { useServerMetricsUpdates } from "./useServerMetricsUpdates";
import { useInfrastructureData } from "./useInfrastructureData";

export default function InfrastructureExample({
  height,
  theme,
  rowCount = 1000,
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  nextIcon,
  prevIcon,
  sortDownIcon,
  sortUpIcon,
}: {
  height?: string | number;
  theme?: Theme;
  rowCount?: number;
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
}) {
  const tableRef = useRef<TableRefType | null>(null);
  const { data, isLoading } = useInfrastructureData(rowCount);
  const [isMobile, setIsMobile] = useState(false);

  // Use the hook for live metrics updates
  useServerMetricsUpdates(tableRef, data);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: height ? height : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading infrastructure data...
      </div>
    );
  }

  return (
    <SimpleTable
      autoExpandColumns={!isMobile}
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      expandIcon={expandIcon}
      filterIcon={filterIcon}
      headerCollapseIcon={headerCollapseIcon}
      headerExpandIcon={headerExpandIcon}
      height={height ? height : "70dvh"}
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      rows={data}
      selectableCells
      sortDownIcon={sortDownIcon}
      sortUpIcon={sortUpIcon}
      tableRef={tableRef}
      theme={theme}
    />
  );
}
