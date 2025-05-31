import { SimpleTable, CellChangeProps, Theme } from "simple-table-core";
import "simple-table-core/styles.css";
import { useState, useEffect } from "react";
import { HEADERS } from "./finance-headers";
import financeData from "./finance-data.json";

const ROW_HEIGHT = 32;

export default function FinanceExample({
  onGridReady,
  height,
  theme = "light",
}: {
  onGridReady?: () => void;
  height?: string;
  theme?: Theme;
}) {
  const [data, setData] = useState(financeData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) => {
        const newData = [...currentData];
        const indexToUpdate = Math.floor(Math.random() * newData.length);

        // Get current price and calculate new price with realistic volatility
        const currentPrice = currentData[indexToUpdate].currentPrice;
        const volatility = 0.02; // 2% max change
        const changePercent = (Math.random() - 0.5) * 2 * volatility;
        const newPrice = currentPrice * (1 + changePercent);

        // Update price
        newData[indexToUpdate].currentPrice = newPrice;

        // Calculate and update price change percentage
        const storedChangePercent = currentData[indexToUpdate].priceChangePercent;
        const basePrice = currentPrice / (1 + storedChangePercent / 100);
        newData[indexToUpdate].priceChangePercent = parseFloat(
          (((newPrice - basePrice) / basePrice) * 100).toFixed(2)
        );

        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
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
      height={height || "70dvh"}
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
