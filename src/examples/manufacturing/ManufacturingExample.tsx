import { Row, SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";
import { useState, useEffect } from "react";

export default function ManufacturingExample({
  height,
  theme,
  rowCount = 50,
}: {
  height: number | null;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch manufacturing data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/data/manufacturing?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch manufacturing data");
        }
        const manufacturingData = await response.json();
        setData(manufacturingData);
      } catch (error) {
        console.error("Error fetching manufacturing data:", error);
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
      rows={data}
      rowGrouping={["stations"]}
      rowIdAccessor="id"
      height={height ? `${height}px` : "70dvh"}
      theme={theme}
      selectableCells
    />
  );
}
