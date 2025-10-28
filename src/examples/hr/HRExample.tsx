import { SimpleTable, Theme, CellChangeProps, Row } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

export default function HRExample({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height = 500,
  nextIcon,
  prevIcon,
  rowCount = 1000,
  rowHeight = 48,
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
  rowHeight?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.simple-table.com/api/data/hr?rowCount=${rowCount}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch {
        const response = await fetch("/data/hr-data.json");
        const data = await response.json();
        setData(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

  const howManyRowsCanFit = height ? Math.floor(height / rowHeight) : 10;

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            [accessor]: newValue,
          };
        }
        return item;
      })
    );
  };

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
        Loading HR data...
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <SimpleTable
        columnReordering
        columnResizing
        defaultHeaders={HEADERS}
        expandIcon={expandIcon}
        filterIcon={filterIcon}
        headerCollapseIcon={headerCollapseIcon}
        headerExpandIcon={headerExpandIcon}
        nextIcon={nextIcon}
        onCellEdit={handleCellEdit}
        prevIcon={prevIcon}
        rowHeight={rowHeight}
        rowIdAccessor="id"
        rows={data}
        rowsPerPage={howManyRowsCanFit}
        selectableCells
        shouldPaginate
        sortDownIcon={sortDownIcon}
        sortUpIcon={sortUpIcon}
        theme={theme}
      />
    </div>
  );
}
