import { Row, SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./billing-headers";
import "simple-table-core/styles.css";
import { useEffect, useState } from "react";

export default function BillingExample({
  height,
  onGridReady,
  theme,
  rowCount = 1000,
}: {
  height: number | null;
  onGridReady?: () => void;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch billing data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/data/billing?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch billing data");
        }
        const billingData = await response.json();
        setData(billingData);
      } catch (error) {
        console.error("Error fetching billing data:", error);
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
      height={height ? `${height}px` : "70dvh"}
      onGridReady={onGridReady}
      rowGrouping={["invoices", "charges"]}
      rowIdAccessor="id"
      rows={data}
      selectableCells
      theme={theme}
      useOddColumnBackground
    />
  );
}
