import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";
import { useState, useEffect } from "react";

// Headers with cell renderers
const headers: HeaderObject[] = [
  { accessor: "symbol", label: "Symbol", width: 100, type: "string" },
  { accessor: "company", label: "Company", width: 200, type: "string" },
  {
    accessor: "price",
    label: "Price",
    width: 120,
    type: "number",
    cellRenderer: ({ row }) => {
      const price = row.price as number;
      return `$${price.toFixed(2)}`;
    },
  },
  { accessor: "change", label: "Change", width: 120, type: "number" },
  { accessor: "stock", label: "Stock", width: 100, type: "number" },
  { accessor: "sales", label: "Sales", width: 100, type: "number" },
];

// Initial stock data with flat structure
const initialData = [
  {
    id: 1,
    symbol: "AAPL",
    company: "Apple Inc.",
    price: 150.25,
    change: 2.15,
    stock: 100,
    sales: 0,
  },
  {
    id: 2,
    symbol: "MSFT",
    company: "Microsoft Corp.",
    price: 280.75,
    change: -1.25,
    stock: 150,
    sales: 0,
  },
  {
    id: 3,
    symbol: "GOOGL",
    company: "Alphabet Inc.",
    price: 2650.5,
    change: 15.75,
    stock: 75,
    sales: 0,
  },
  {
    id: 4,
    symbol: "AMZN",
    company: "Amazon.com Inc.",
    price: 3200.0,
    change: -8.5,
    stock: 50,
    sales: 0,
  },
  {
    id: 5,
    symbol: "TSLA",
    company: "Tesla Inc.",
    price: 720.25,
    change: 12.3,
    stock: 80,
    sales: 0,
  },
  {
    id: 6,
    symbol: "META",
    company: "Meta Platforms",
    price: 325.4,
    change: -3.2,
    stock: 120,
    sales: 0,
  },
  {
    id: 7,
    symbol: "NVDA",
    company: "NVIDIA Corp.",
    price: 450.8,
    change: 8.9,
    stock: 90,
    sales: 0,
  },
  {
    id: 8,
    symbol: "NFLX",
    company: "Netflix Inc.",
    price: 380.15,
    change: -2.75,
    stock: 110,
    sales: 0,
  },
  {
    id: 9,
    symbol: "AMD",
    company: "Advanced Micro Devices",
    price: 95.6,
    change: 1.85,
    stock: 200,
    sales: 0,
  },
];

const LiveUpdateDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) => {
        const newData = [...currentData];
        // Update a random stock price
        const randomIndex = Math.floor(Math.random() * newData.length);
        const currentPrice = newData[randomIndex].price;
        const changePercent = (Math.random() - 0.5) * 0.1; // ±5% change
        const newPrice = parseFloat((currentPrice * (1 + changePercent)).toFixed(2));
        const priceChange = parseFloat((newPrice - currentPrice).toFixed(2));

        newData[randomIndex] = {
          ...newData[randomIndex],
          price: newPrice,
          change: priceChange,
        };

        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBuyStock = (rowIndex: number) => {
    setData((currentData) => {
      const newData = [...currentData];
      if (newData[rowIndex].stock > 0) {
        newData[rowIndex] = {
          ...newData[rowIndex],
          stock: newData[rowIndex].stock - 1,
          sales: newData[rowIndex].sales + 1,
        };
      }
      return newData;
    });
  };

  // Add action column with buy button
  const headersWithActions: HeaderObject[] = [
    ...headers,
    {
      accessor: "actions",
      label: "Actions",
      width: 120,
      cellRenderer: ({ row }) => {
        const rowIndex = data.findIndex((item) => item.id === row.id);
        const stock = row.stock as number;
        return (
          <button
            onClick={() => handleBuyStock(rowIndex)}
            disabled={stock <= 0}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Buy ({stock})
          </button>
        );
      },
    },
  ];

  return (
    <SimpleTable
      defaultHeaders={headersWithActions}
      rows={data}
      rowIdAccessor="id"
      height={height}
      theme={theme}
    />
  );
};

export default LiveUpdateDemo;
