import { SimpleTable, Theme, CellChangeProps, Row } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

export default function HRExample({
  height = 500,
  rowHeight = 48,
  theme,
  rowCount = 50,
}: {
  height: number | null;
  rowHeight?: number;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch HR data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/data/hr?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch HR data");
        }
        const hrData = await response.json();
        setData(hrData);
      } catch (error) {
        console.error("Error fetching HR data:", error);
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
        rowIdAccessor="id"
        rows={data}
        rowsPerPage={howManyRowsCanFit}
        rowHeight={rowHeight}
        selectableCells
        shouldPaginate
        theme={theme}
        onCellEdit={handleCellEdit}
      />
    </div>
  );
}
