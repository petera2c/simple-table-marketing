import { SimpleTable, CellChangeProps, Theme } from "simple-table-core";
import "simple-table-core/styles.css";
import { useState } from "react";
import { SALES_HEADERS } from "./sales-headers";
import salesData from "./sales-data.json";

const ROW_HEIGHT = 32;

// Process the data to add the new fields
const processedData = (salesData as any[]).map((row: any) => {
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
  onGridReady,
  height,
  theme = "light",
}: {
  onGridReady?: () => void;
  height?: number;
  theme?: Theme;
}) {
  const [data, setData] = useState(processedData);

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData: any) =>
      prevData.map((item: any) => {
        if (item.id === (row as any).id) {
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
      columnReordering
      columnResizing
      defaultHeaders={SALES_HEADERS}
      editColumns
      height={height ? `${height}px` : "70dvh"}
      onCellEdit={handleCellEdit}
      onGridReady={onGridReady}
      rows={data}
      rowIdAccessor="id"
      rowHeight={ROW_HEIGHT}
      selectableCells
      shouldPaginate
      rowsPerPage={15}
      theme={theme}
    />
  );
}
