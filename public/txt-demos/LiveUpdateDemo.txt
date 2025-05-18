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
      const price = row.rowData.price;
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
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      product: "Widget A",
      price: 19.99,
      stock: 42,
      sales: 120,
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      product: "Widget B",
      price: 24.99,
      stock: 28,
      sales: 85,
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      product: "Widget C",
      price: 15.99,
      stock: 53,
      sales: 210,
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      product: "Widget D",
      price: 29.99,
      stock: 14,
      sales: 65,
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      product: "Widget E",
      price: 12.99,
      stock: 78,
      sales: 180,
    },
  },
  {
    rowMeta: { rowId: 6 },
    rowData: {
      id: 6,
      product: "Widget F",
      price: 14.99,
      stock: 32,
      sales: 105,
    },
  },
  {
    rowMeta: { rowId: 7 },
    rowData: {
      id: 7,
      product: "Widget G",
      price: 16.99,
      stock: 45,
      sales: 150,
    },
  },
  {
    rowMeta: { rowId: 8 },
    rowData: {
      id: 8,
      product: "Widget H",
      price: 18.99,
      stock: 22,
      sales: 90,
    },
  },
  {
    rowMeta: { rowId: 9 },
    rowData: {
      id: 9,
      product: "Widget I",
      price: 13.99,
      stock: 50,
      sales: 120,
    },
  },
];

const LiveUpdateDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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
        const currentPrice = currentData[rowIndex].rowData.price;
        const randomFactor = 0.95 + Math.random() * 0.1; // between -5% and +5%
        const newPrice = parseFloat((currentPrice * randomFactor).toFixed(2));

        // Update our local copy
        currentData[rowIndex].rowData.price = newPrice;

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
            stock: row.rowData.stock,
          }))
          .filter((item: { index: number; stock: number }) => item.stock > 0);

        if (availableRows.length > 0) {
          const randomItem = availableRows[Math.floor(Math.random() * availableRows.length)];
          const rowIndex = randomItem.index;

          // Decrease stock by 1
          const newStock = currentData[rowIndex].rowData.stock - 1;
          currentData[rowIndex].rowData.stock = newStock;

          // Update stock in the table
          tableRef.current.updateData({
            accessor: "stock",
            rowIndex,
            newValue: newStock,
          });

          // Increase sales
          const newSales = currentData[rowIndex].rowData.sales + 1;
          currentData[rowIndex].rowData.sales = newSales;

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
      rows={initialData}
      tableRef={tableRef}
      cellUpdateFlash={true}
      height={height}
      theme={theme}
    />
  );
};

export default LiveUpdateDemo;
