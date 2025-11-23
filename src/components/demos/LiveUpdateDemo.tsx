import { SimpleTable, TableRefType, HeaderObject, Theme } from "simple-table-core";
import { useRef, useEffect } from "react";
import "simple-table-core/styles.css";

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "product", label: "Product", width: 180, type: "string" },
  {
    accessor: "price",
    label: "Price",
    width: "1fr",
    type: "number",
    cellRenderer: ({ row }) => {
      const price = row.price;
      if (typeof price === "number") {
        return `$${price.toFixed(2)}`;
      }
      return `$0.00`;
    },
  },
  { accessor: "stock", label: "In Stock", width: 100, type: "number" },
  {
    accessor: "stockHistory",
    label: "Stock Trend",
    width: 140,
    type: "lineAreaChart",
    align: "center",
    tooltip: "Stock levels over the last 20 updates",
    chartOptions: {
      color: "#10b981",
      fillColor: "#34d399",
      fillOpacity: 0.2,
      strokeWidth: 2,
      height: 35,
    },
  },
  { accessor: "sales", label: "Sales", width: 100, type: "number" },
  {
    accessor: "salesHistory",
    label: "Sales Trend",
    width: 140,
    type: "barChart",
    align: "center",
    tooltip: "Sales activity over the last 12 updates",
    chartOptions: {
      color: "#f59e0b",
      gap: 2,
      height: 35,
    },
  },
];

// Helper to generate initial history array
const generateStockHistory = (currentStock: number, length = 20) => {
  const history = [];
  for (let i = 0; i < length; i++) {
    const variation = (Math.random() - 0.5) * 30;
    history.push(Math.max(0, Math.round(currentStock + variation)));
  }
  return history;
};

const generateSalesHistory = (currentSales: number, length = 12) => {
  const history = [];
  const avgSalesPerUpdate = currentSales / 50; // Estimate
  for (let i = 0; i < length; i++) {
    const variation = Math.random() * avgSalesPerUpdate;
    history.push(Math.round(variation));
  }
  return history;
};

// Sample data
const initialData = [
  {
    id: 1,
    product: "Organic Green Tea",
    price: 24.99,
    stock: 156,
    sales: 342,
    stockHistory: generateStockHistory(156),
    salesHistory: generateSalesHistory(342),
  },
  {
    id: 2,
    product: "Bluetooth Headphones",
    price: 89.99,
    stock: 73,
    sales: 187,
    stockHistory: generateStockHistory(73),
    salesHistory: generateSalesHistory(187),
  },
  {
    id: 3,
    product: "Bamboo Yoga Mat",
    price: 45.99,
    stock: 92,
    sales: 256,
    stockHistory: generateStockHistory(92),
    salesHistory: generateSalesHistory(256),
  },
  {
    id: 4,
    product: "Smart Water Bottle",
    price: 34.99,
    stock: 48,
    sales: 134,
    stockHistory: generateStockHistory(48),
    salesHistory: generateSalesHistory(134),
  },
  {
    id: 5,
    product: "Ceramic Coffee Mug",
    price: 18.99,
    stock: 124,
    sales: 298,
    stockHistory: generateStockHistory(124),
    salesHistory: generateSalesHistory(298),
  },
  {
    id: 6,
    product: "Wireless Phone Charger",
    price: 29.99,
    stock: 67,
    sales: 156,
    stockHistory: generateStockHistory(67),
    salesHistory: generateSalesHistory(156),
  },
  {
    id: 7,
    product: "Essential Oil Diffuser",
    price: 52.99,
    stock: 89,
    sales: 203,
    stockHistory: generateStockHistory(89),
    salesHistory: generateSalesHistory(203),
  },
  {
    id: 8,
    product: "Stainless Steel Tumbler",
    price: 22.99,
    stock: 134,
    sales: 267,
    stockHistory: generateStockHistory(134),
    salesHistory: generateSalesHistory(267),
  },
  {
    id: 9,
    product: "LED Desk Lamp",
    price: 39.99,
    stock: 95,
    sales: 176,
    stockHistory: generateStockHistory(95),
    salesHistory: generateSalesHistory(176),
  },
  {
    id: 10,
    product: "Organic Cotton Towel",
    price: 26.99,
    stock: 87,
    sales: 145,
    stockHistory: generateStockHistory(87),
    salesHistory: generateSalesHistory(145),
  },
  {
    id: 11,
    product: "Portable Phone Stand",
    price: 15.99,
    stock: 203,
    sales: 387,
    stockHistory: generateStockHistory(203),
    salesHistory: generateSalesHistory(387),
  },
  {
    id: 12,
    product: "Aromatherapy Candle",
    price: 31.99,
    stock: 56,
    sales: 112,
    stockHistory: generateStockHistory(56),
    salesHistory: generateSalesHistory(112),
  },
];

const LiveUpdateDemo = ({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) => {
  // Keep a local copy of the data to update
  const tableRef = useRef<TableRefType | null>(null);

  // Set up intervals for automatic updates
  useEffect(() => {
    // Keep a copy of the current data in memory for calculations
    const currentData = JSON.parse(JSON.stringify(initialData));

    // Update price at regular intervals
    const priceInterval = setInterval(() => {
      if (tableRef.current) {
        // Pick a random row to update
        const rowIndex = Math.floor(Math.random() * currentData.length);

        // Generate a new price (±5% from current)
        const currentPrice = currentData[rowIndex].price;
        const randomFactor = 0.95 + Math.random() * 0.1; // between -5% and +5%
        const newPrice = parseFloat((currentPrice * randomFactor).toFixed(2));

        // Update our local copy
        currentData[rowIndex].price = newPrice;

        // Update the table with flash animation
        tableRef.current.updateData({
          accessor: "price",
          rowIndex,
          newValue: newPrice,
        });
      }
    }, 500); // Update every 2 seconds

    // Simulate sales activity (stock/sales updates)
    const salesInterval = setInterval(() => {
      if (tableRef.current) {
        // Pick a random row that has stock
        const availableRows = currentData
          .map((row: (typeof initialData)[0], index: number) => ({
            index,
            stock: row.stock,
          }))
          .filter((item: { index: number; stock: number }) => item.stock > 0);

        if (availableRows.length > 0) {
          const randomItem = availableRows[Math.floor(Math.random() * availableRows.length)];
          const rowIndex = randomItem.index;

          // Decrease stock by 1
          const newStock = currentData[rowIndex].stock - 1;
          currentData[rowIndex].stock = newStock;

          // Update stock in the table
          tableRef.current.updateData({
            accessor: "stock",
            rowIndex,
            newValue: newStock,
          });

          // Update stock history chart (keep fixed length)
          const currentStockHistory = currentData[rowIndex].stockHistory as number[];
          if (Array.isArray(currentStockHistory) && currentStockHistory.length > 0) {
            const updatedStockHistory = [...currentStockHistory.slice(1), newStock];
            currentData[rowIndex].stockHistory = updatedStockHistory;
            tableRef.current.updateData({
              accessor: "stockHistory",
              rowIndex,
              newValue: updatedStockHistory,
            });
          }

          // Increase sales
          const newSales = currentData[rowIndex].sales + 1;
          currentData[rowIndex].sales = newSales;

          // Update sales in the table
          tableRef.current.updateData({
            accessor: "sales",
            rowIndex,
            newValue: newSales,
          });

          // Update sales history chart (keep fixed length, increment last bar)
          const currentSalesHistory = currentData[rowIndex].salesHistory as number[];
          if (Array.isArray(currentSalesHistory) && currentSalesHistory.length > 0) {
            const updatedSalesHistory = [...currentSalesHistory];
            updatedSalesHistory[updatedSalesHistory.length - 1] += 1;
            currentData[rowIndex].salesHistory = updatedSalesHistory;
            tableRef.current.updateData({
              accessor: "salesHistory",
              rowIndex,
              newValue: updatedSalesHistory,
            });
          }
        }
      }
    }, 5000); // Update every 5 seconds

    // Clean up intervals on unmount
    return () => {
      clearInterval(priceInterval);
      clearInterval(salesInterval);
    };
  }, []);

  return (
    <SimpleTable
      defaultHeaders={headers}
      rowIdAccessor="id"
      rows={initialData}
      tableRef={tableRef}
      cellUpdateFlash={true}
      height={height}
      theme={theme}
    />
  );
};

export default LiveUpdateDemo;
