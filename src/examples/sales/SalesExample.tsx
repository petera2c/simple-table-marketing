import { SimpleTable, Row, CellChangeProps, Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

// Function to process the data and add the new fields
const processData = (rawData: Row[]): (Row & { closeDate: string; category: string })[] => {
  return rawData.map((row: Row) => {
    // Generate a random close date in the past 90 days
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - Math.floor(Math.random() * 90));
    const closeDate = pastDate.toISOString().split("T")[0];

    // Assign a random category
    const categories = ["Software", "Hardware", "Services", "Consulting", "Training", "Support"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    return {
      ...row,
      closeDate,
      category,
    };
  });
};

export default function SalesExample({
  height,
  onGridReady,
  theme,
  rowCount = 50,
}: {
  height?: number | null;
  onGridReady?: () => void;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState<(Row & { closeDate: string; category: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch sales data from API and process it
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/data/sales?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const salesData = await response.json();
        const processedData = processData(salesData);
        setData(processedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

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
        Loading sales data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={SALES_HEADERS}
      editColumns
      onGridReady={onGridReady}
      rowIdAccessor="id"
      rows={data}
      theme={theme}
      selectableCells
      onCellEdit={handleCellEdit}
      height={height ? `${height}px` : "70dvh"}
    />
  );
}
