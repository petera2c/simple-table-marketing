import { SimpleTable, Row, CellChangeProps, Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import rawData from "./sales-data.json";
import { useState } from "react";
import "simple-table-core/styles.css";

// Process the data to add the new fields
const processedData = (rawData as Row[]).map((row: Row) => {
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

export default function SalesExample({
  height,
  onGridReady,
  theme,
}: {
  height?: number | null;
  onGridReady?: () => void;
  theme?: Theme;
}) {
  const [data, setData] = useState(processedData);

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
