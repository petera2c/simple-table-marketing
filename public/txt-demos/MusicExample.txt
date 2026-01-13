import { useRef } from "react";
import { SimpleTable, TableRefType, Theme } from "simple-table-core";
import { HEADERS } from "./music-headers";

import "simple-table-core/styles.css";
import "./MusicTheme.css";
import { useMusicData } from "./useMusicData";

export default function MusicExample({
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
  height?: string | number;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  rowCount?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const tableRef = useRef<TableRefType | null>(null);
  const { data, isLoading } = useMusicData(rowCount);

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
        Loading music artist data...
      </div>
    );
  }

  return (
    <div className="music-theme-container" style={{ fontFamily: "Inter" }}>
      <SimpleTable
        columnReordering
        columnResizing
        defaultHeaders={HEADERS}
        expandIcon={expandIcon}
        filterIcon={filterIcon}
        headerCollapseIcon={headerCollapseIcon}
        headerExpandIcon={headerExpandIcon}
        headerHeight={30}
        height={height ? height : "70dvh"}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        rowHeight={85}
        rows={data}
        selectableCells
        sortDownIcon={sortDownIcon}
        sortUpIcon={sortUpIcon}
        tableRef={tableRef}
        theme={theme}
      />
    </div>
  );
}
