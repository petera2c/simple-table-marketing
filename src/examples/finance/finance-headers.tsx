import { HeaderObject } from "simple-table-core";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "ticker",
    align: "left",
    filterable: true,
    isEditable: false,
    isSortable: true,
    label: "Symbol",
    minWidth: 120,
    pinned: "left",
    type: "string",
    width: "1fr",
  },
  {
    accessor: "companyName",
    align: "left",
    filterable: true,
    isEditable: false,
    isSortable: true,
    label: "Name",
    minWidth: 220,
    type: "string",
    width: "2fr",
  },
  {
    accessor: "priceMetrics",
    label: "Price Performance",
    width: 250,
    isSortable: false,
    children: [
      {
        accessor: "price",
        label: "Price (USD)",
        width: 160,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.price === "—") return "—";
          return `$${(row.rowData.price as number).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
      {
        accessor: "priceChangePercent",
        label: "Change %",
        width: 160,
        filterable: true,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.priceChangePercent === "—" || row.rowData.priceChangePercent === null)
            return "—";
          const value = row.rowData.priceChangePercent as number;
          const color = value < 0 ? "text-red-600" : value > 0 ? "text-green-600" : "text-gray-600";
          const prefix = value > 0 ? "+" : "";
          const bgColor = value < 0 ? "bg-red-50" : value > 0 ? "bg-green-50" : "";

          return (
            <div className={`px-2 py-1 rounded font-medium ${bgColor} ${color}`}>
              {prefix}
              {value.toFixed(2)}%
            </div>
          );
        },
      },
    ],
  },
  {
    accessor: "fundamentals",
    label: "Fundamentals",
    width: 380,
    isSortable: false,
    children: [
      {
        accessor: "marketCap",
        label: "Mkt Cap ($B)",
        width: 180,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
      },
      {
        accessor: "peRatio",
        label: "P/E Ratio",
        width: 160,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.peRatio === "—" || row.rowData.peRatio === null) return "—";
          return (row.rowData.peRatio as number).toFixed(1);
        },
      },
      {
        accessor: "dividendYield",
        label: "Div Yield",
        width: 160,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.dividendYield === "—" || row.rowData.dividendYield === null) return "—";
          return `${(row.rowData.dividendYield as number).toFixed(2)}%`;
        },
      },
    ],
  },
  {
    accessor: "analystInfo",
    label: "Analyst Information",
    width: 380,
    isSortable: false,
    children: [
      {
        accessor: "analystRating",
        label: "Rating",
        width: 160,
        isSortable: true,
        isEditable: true,
        filterable: true,
        align: "center",
        type: "enum",
        enumOptions: [
          { label: "Strong Buy", value: "Strong Buy" },
          { label: "Buy", value: "Buy" },
          { label: "Hold", value: "Hold" },
          { label: "Sell", value: "Sell" },
          { label: "Strong Sell", value: "Strong Sell" },
        ],
        cellRenderer: ({ row }) => {
          if (!row.rowData.analystRating) return "—";
          const rating = row.rowData.analystRating as string;
          const colorMap: Record<string, string> = {
            "Strong Buy": "text-green-600 bg-green-50",
            Buy: "text-green-500 bg-green-50",
            Hold: "text-amber-600 bg-amber-50",
            Sell: "text-red-500 bg-red-50",
            "Strong Sell": "text-red-600 bg-red-50",
          };
          return (
            <div className={`px-2 py-1 rounded font-medium ${colorMap[rating] || ""}`}>
              {rating}
            </div>
          );
        },
      },
      {
        filterable: true,
        accessor: "date",
        label: "Date",
        width: 160,
        isSortable: true,
        isEditable: true,
        align: "center",
        type: "date",
      },
      {
        accessor: "isFollowed",
        label: "Following",
        width: 160,
        filterable: true,
        isSortable: true,
        isEditable: true,
        align: "center",
        type: "boolean",
      },
    ],
  },
];
