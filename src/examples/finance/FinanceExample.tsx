import { useEffect, useRef, useState } from "react";
import { SimpleTable, TableRefType, CellChangeProps, Theme } from "simple-table-core";

import "simple-table-core/styles.css";
import { HEADERS } from "./finance-headers";
import FINANCE_DATA from "./finance-data.json";

// Configuration for stock price updates
const UPDATE_CONFIG = {
  // Random interval range in milliseconds
  minInterval: 400, // Minimum time between updates
  maxInterval: 1000, // Maximum time between updates

  // What percentage of stocks to update each time
  minStocksPercent: 0.6, // 60%
  maxStocksPercent: 0.8, // 80%
};

export default function FinancialExample({ height, theme }: { height?: string; theme?: Theme }) {
  const [data, setData] = useState(FINANCE_DATA);
  const tableRef = useRef<TableRefType | null>(null);

  useEffect(() => {
    // Keep a copy of the current data in memory for calculations
    const currentData = JSON.parse(JSON.stringify(data));
    let timeoutId: NodeJS.Timeout;
    let isActive = true;

    const scheduleNextUpdate = () => {
      if (!isActive) return;

      // Random interval based on configuration
      const intervalRange = UPDATE_CONFIG.maxInterval - UPDATE_CONFIG.minInterval;
      const nextInterval = Math.random() * intervalRange + UPDATE_CONFIG.minInterval;

      timeoutId = setTimeout(() => {
        if (!isActive) return;

        // Select percentage of stocks to update based on configuration
        const totalStocks = currentData.length;
        const stocksPercent =
          UPDATE_CONFIG.minStocksPercent +
          Math.random() * (UPDATE_CONFIG.maxStocksPercent - UPDATE_CONFIG.minStocksPercent);
        const stocksToUpdate = Math.floor(totalStocks * stocksPercent);

        // Randomly select which stocks to update
        const indicesToUpdate = [];
        const usedIndices = new Set();

        for (let i = 0; i < stocksToUpdate; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * totalStocks);
          } while (usedIndices.has(randomIndex));

          usedIndices.add(randomIndex);
          indicesToUpdate.push(randomIndex);
        }

        // Update selected stocks with more realistic price movements
        const updates: { index: number; newPrice: number; newChangePercent: number }[] = [];

        indicesToUpdate.forEach((index) => {
          const stock = currentData[index];
          const currentPrice = stock.price;

          // Much more subtle price changes (0.01% to 0.15%)
          // 70% chance for tiny movements, 20% for small movements, 10% for slightly larger
          let priceChangePercent;
          const random = Math.random();

          if (random < 0.05) {
            // 5% chance for a larger drop (-0.15% to -0.05%)
            priceChangePercent = -(Math.random() * 0.1 + 0.05);
          } else if (random < 0.25) {
            // 20% chance for a small drop (-0.05% to 0%)
            priceChangePercent = -(Math.random() * 0.05);
          } else if (random < 0.75) {
            // 50% chance for a tiny gain (0% to 0.05%)
            priceChangePercent = Math.random() * 0.05;
          } else if (random < 0.95) {
            // 20% chance for a small gain (0.05% to 0.1%)
            priceChangePercent = Math.random() * 0.05 + 0.05;
          } else {
            // 5% chance for a larger gain (0.1% to 0.15%)
            priceChangePercent = Math.random() * 0.05 + 0.1;
          }

          // Calculate the new price
          const priceChange = currentPrice * (priceChangePercent / 100);
          const newPrice = currentPrice + priceChange;

          // Update the stored data
          currentData[index].price = newPrice;

          // Get the stored price change percentage and update it with heavy damping
          const storedChangePercent = currentData[index].priceChangePercent;
          // Much more conservative update to the displayed change percentage
          const newChangePercent = storedChangePercent + priceChangePercent * 0.3;
          currentData[index].priceChangePercent = parseFloat(newChangePercent.toFixed(3));

          updates.push({ index, newPrice, newChangePercent });
        });

        // Batch update the React state
        if (updates.length > 0 && isActive) {
          setData((prevData) =>
            prevData.map((item: any, itemIndex: number) => {
              const update = updates.find((u) => u.index === itemIndex);
              if (update) {
                return {
                  ...item,
                  price: update.newPrice,
                  priceChangePercent: update.newChangePercent,
                };
              }
              return item;
            })
          );
        }

        // Schedule the next update
        scheduleNextUpdate();
      }, nextInterval);
    };

    // Start the first update
    scheduleNextUpdate();

    // Cleanup function
    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
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
