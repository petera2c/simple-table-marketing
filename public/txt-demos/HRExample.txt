import { SimpleTable, Theme, CellChangeProps } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState } from "react";
import "simple-table-core/styles.css";
import HR_DATA from "./hr-data.json";

const ROW_HEIGHT = 48;

export default function HRExample({
  height = 500,
  theme,
}: {
  height: number | null;
  theme?: Theme;
}) {
  const [data, setData] = useState(HR_DATA);

  const howManyRowsCanFit = height ? Math.floor(height / ROW_HEIGHT) : 10;

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
        rowHeight={ROW_HEIGHT}
        selectableCells
        shouldPaginate
        theme={theme}
        onCellEdit={handleCellEdit}
      />
    </div>
  );
}
