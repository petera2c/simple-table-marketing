"use client";

import { SimpleTable, Theme, CellChangeProps } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState } from "react";
import "simple-table-core/styles.css";
import HR_DATA from "./hr-data.json";

export default function HRExample({
  height = 500,
  rowHeight = 40,
  theme,
}: {
  height: number | null;
  rowHeight?: number;
  theme?: Theme;
}) {
  const [data, setData] = useState(HR_DATA);

  const howManyRowsCanFit = height ? Math.floor(height / rowHeight) : 10;

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
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      rows={data}
      rowsPerPage={howManyRowsCanFit}
      selectableCells
      shouldPaginate
      theme={theme}
      onCellEdit={handleCellEdit}
    />
  );
}
