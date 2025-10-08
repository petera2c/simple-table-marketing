import { SimpleTable, Theme, CellChangeProps } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";
import HR_DATA from "./hr-data.json";

export default function HRExample({
  height = 500,
  rowHeight = 48,
  theme,
  rowCount = 1000,
}: {
  height: number | null;
  rowHeight?: number;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState(HR_DATA.slice(0, rowCount));

  // Update data when rowCount changes
  useEffect(() => {
    setData(HR_DATA.slice(0, rowCount));
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
