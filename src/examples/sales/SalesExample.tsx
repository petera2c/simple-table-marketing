import { SimpleTable, Row, CellChangeProps, Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import rawData from "./sales-data.json";
import { useState } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const ROW_HEIGHT = 40;

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
    rowData: {
      ...row.rowData,
      closeDate,
      category,
    },
  };
});

export function SalesExample({
  onGridReady,
  shouldPaginate,
  theme,
}: {
  onGridReady?: () => void;
  shouldPaginate: boolean;
  theme?: Theme;
}) {
  const [data, setData] = useState(processedData);

  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });
  const howManyRowsCanFit = containerHeight ? Math.floor(containerHeight / ROW_HEIGHT) : 10;

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.rowMeta.rowId === row.rowMeta.rowId) {
          return {
            ...item,
            rowData: {
              ...item.rowData,
              [accessor]: newValue,
            },
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
      rows={data}
      theme={theme}
      selectableCells
      onCellEdit={handleCellEdit}
      {...(shouldPaginate
        ? { rowsPerPage: howManyRowsCanFit, shouldPaginate }
        : {
            height: containerHeight ? `${containerHeight}px` : "70dvh",
          })}
    />
  );
}
