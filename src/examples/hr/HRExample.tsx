import { SimpleTable, CellChangeProps, Theme } from "simple-table-core";
import "simple-table-core/styles.css";
import { useState } from "react";
import { HEADERS } from "./hr-headers";
import hrData from "./hr-data.json";

const DEFAULT_ROW_HEIGHT = 32;

export default function HRExample({
  onGridReady,
  height,
  rowHeight = DEFAULT_ROW_HEIGHT,
  theme = "light",
}: {
  onGridReady?: () => void;
  height?: number | null;
  rowHeight?: number;
  theme?: Theme;
}) {
  const [data, setData] = useState(hrData);

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
      defaultHeaders={HEADERS}
      editColumns
      height={height ? `${height}px` : "70dvh"}
      onCellEdit={handleCellEdit}
      onGridReady={onGridReady}
      rows={data}
      rowIdAccessor="id"
      rowGrouping={["departments", "teams"]}
      rowHeight={rowHeight}
      selectableCells
      shouldPaginate
      rowsPerPage={15}
      theme={theme}
    />
  );
}
