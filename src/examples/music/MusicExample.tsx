import { useEffect, useRef, useState } from "react";
import { SimpleTable, TableRefType, Theme, Row } from "simple-table-core";
import { HEADERS } from "./music-headers";

import "simple-table-core/styles.css";
import "./MusicTheme.css";

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
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch music data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.simple-table.com/api/data/music?rowCount=${rowCount}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch {
        const response = await fetch("/data/music-data.json");
        const data = await response.json();
        setData(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

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
        rowIdAccessor="id"
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
