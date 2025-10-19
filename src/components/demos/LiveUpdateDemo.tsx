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
  { accessor: "stock", label: "In Stock", width: 120, type: "number" },
  { accessor: "sales", label: "Sales", width: 120, type: "number" },
];

// Sample data
const initialData = [
  {
    id: 1,
    product: "Organic Green Tea",
    price: 24.99,
    stock: 156,
    sales: 342,
  },
  {
    id: 2,
    product: "Bluetooth Headphones",
    price: 89.99,
    stock: 73,
    sales: 187,
  },
  {
    id: 3,
    product: "Bamboo Yoga Mat",
    price: 45.99,
    stock: 92,
    sales: 256,
  },
  {
    id: 4,
    product: "Smart Water Bottle",
    price: 34.99,
    stock: 48,
    sales: 134,
  },
  {
    id: 5,
    product: "Ceramic Coffee Mug",
    price: 18.99,
    stock: 124,
    sales: 298,
  },
  {
    id: 6,
    product: "Wireless Phone Charger",
    price: 29.99,
    stock: 67,
    sales: 156,
  },
  {
    id: 7,
    product: "Essential Oil Diffuser",
    price: 52.99,
    stock: 89,
    sales: 203,
  },
  {
    id: 8,
    product: "Stainless Steel Tumbler",
    price: 22.99,
    stock: 134,
    sales: 267,
  },
  {
    id: 9,
    product: "LED Desk Lamp",
    price: 39.99,
    stock: 95,
    sales: 176,
  },
  {
    id: 10,
    product: "Organic Cotton Towel",
    price: 26.99,
    stock: 87,
    sales: 145,
  },
  {
    id: 11,
    product: "Portable Phone Stand",
    price: 15.99,
    stock: 203,
    sales: 387,
  },
  {
    id: 12,
    product: "Aromatherapy Candle",
    price: 31.99,
    stock: 56,
    sales: 112,
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

          // Increase sales
          const newSales = currentData[rowIndex].sales + 1;
          currentData[rowIndex].sales = newSales;

          // Update sales in the table
          tableRef.current.updateData({
            accessor: "sales",
            rowIndex,
            newValue: newSales,
          });
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
