import { useEffect, useRef, useState } from "react";
import { SimpleTable, TableRefType, CellChangeProps, Theme } from "simple-table-core";

import "simple-table-core/styles.css";
import { HEADERS } from "./finance-headers";
import FINANCE_DATA from "./finance-data.json";

export default function FinancialExample({ height, theme }: { height?: string; theme?: Theme }) {
  const [data, setData] = useState(FINANCE_DATA);
  const tableRef = useRef<TableRefType | null>(null);

  useEffect(() => {
    // Keep a copy of the current data in memory for calculations
    const currentData = JSON.parse(JSON.stringify(data));

    // Repeat every 2.5 seconds
    const interval = setInterval(() => {
      // Update a random row
      const indexToUpdate = Math.floor(Math.random() * currentData.length);

      // Get the current values
      const currentPrice = currentData[indexToUpdate].price;

      // Generate a random price change percentage between -0.5% and +0.5%
      // More likely to be positive than negative (market tends to go up)
      let priceChangePercent;
      const random = Math.random();
      if (random < 0.1) {
        // 10% chance for a bigger drop (-1% to -0.5%)
        priceChangePercent = -(Math.random() * 0.5 + 0.5);
      } else if (random < 0.4) {
        // 30% chance for a small drop (-0.5% to 0%)
        priceChangePercent = -(Math.random() * 0.5);
      } else if (random < 0.8) {
        // 40% chance for a small gain (0% to 0.5%)
        priceChangePercent = Math.random() * 0.5;
      } else {
        // 20% chance for a bigger gain (0.5% to 1%)
        priceChangePercent = Math.random() * 0.5 + 0.5;
      }

      // Calculate the new price based on the percentage change
      const priceChange = currentPrice * (priceChangePercent / 100);
      const newPrice = currentPrice + priceChange;

      // Update the current data in memory
      currentData[indexToUpdate].price = newPrice;

      // Get the stored price change percentage and update it
      const storedChangePercent = currentData[indexToUpdate].priceChangePercent;
      // Adjust the stored percentage by the new change, with some damping to avoid wild swings
      const newChangePercent = storedChangePercent + priceChangePercent * 0.5;
      currentData[indexToUpdate].priceChangePercent = parseFloat(newChangePercent.toFixed(2));

      // Update the price in the table
      tableRef?.current?.updateData({
        accessor: "price",
        rowIndex: indexToUpdate,
        newValue: newPrice,
      });

      // Update the price change percentage in the table
      tableRef?.current?.updateData({
        accessor: "priceChangePercent",
        rowIndex: indexToUpdate,
        newValue: newChangePercent,
      });
    }, 50);

    return () => clearInterval(interval);
  }, [data]);

  // Handle cell edit
  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item: any) => {
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
      cellUpdateFlash={true}
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      height={height ? height : "70dvh"}
      rowIdAccessor="id"
      rows={data}
      selectableCells
      tableRef={tableRef}
      theme={theme}
      onCellEdit={handleCellEdit}
    />
  );
}
