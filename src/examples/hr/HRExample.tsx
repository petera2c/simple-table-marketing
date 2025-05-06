"use client";

import { SimpleTable, Theme, CellChangeProps } from "simple-table-core";
import { generateHRData } from "@/examples/hr/hr-rows";
import { HEADERS } from "@/examples/hr/hr-headers";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import "simple-table-core/styles.css";
import { useExampleHeight } from "@/hooks/useExampleHeight";

const initialData = generateHRData();
const ROW_HEIGHT = 40;

function HRExampleContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get("theme") as Theme) || "light";
  const [data, setData] = useState(initialData);

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
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

export default function HRExample() {
  return (
    <Suspense fallback={<div />}>
      <HRExampleContent />
    </Suspense>
  );
}
