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
          if (row.price === "—") return "—";
          return `$${(row.price as number).toLocaleString("en-US", {
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
        cellRenderer: ({ row, theme }) => {
          if (row.priceChangePercent === "—" || row.priceChangePercent === null) return "—";
          const value = row.priceChangePercent as number;
          const prefix = value > 0 ? "+" : "";

          // Theme-dependent color styles
          const getColorStyles = (value: number, theme: string) => {
            const isNegative = value < 0;
            const isPositive = value > 0;

            switch (theme) {
              case "dark":
                return {
                  color: isNegative ? "#f87171" : isPositive ? "#4ade80" : "#9ca3af",
                  backgroundColor: isNegative
                    ? "rgba(127, 29, 29, 0.3)"
                    : isPositive
                    ? "rgba(20, 83, 45, 0.3)"
                    : "rgba(55, 65, 81, 0.3)",
                };
              case "sky":
                return {
                  color: isNegative ? "#dc2626" : isPositive ? "#059669" : "#475569",
                  backgroundColor: isNegative ? "#fef2f2" : isPositive ? "#ecfdf5" : "#f8fafc",
                };
              case "funky":
                return {
                  color: isNegative ? "#db2777" : isPositive ? "#0891b2" : "#9333ea",
                  backgroundColor: isNegative ? "#fdf2f8" : isPositive ? "#ecfeff" : "#faf5ff",
                };
              case "neutral":
                return {
                  color: isNegative ? "#57534e" : isPositive ? "#57534e" : "#78716c",
                  backgroundColor: isNegative ? "#f5f5f4" : isPositive ? "#f5f5f4" : "#fafaf9",
                };
              case "light":
              default:
                return {
                  color: isNegative ? "#dc2626" : isPositive ? "#16a34a" : "#4b5563",
                  backgroundColor: isNegative ? "#fef2f2" : isPositive ? "#f0fdf4" : "#f9fafb",
                };
            }
          };

          const styles = getColorStyles(value, theme);

          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  width: "70%",
                  minWidth: "min-content",
                  padding: "1px 8px",
                  borderRadius: "4px",
                  fontWeight: "500",
                  ...styles,
                }}
              >
                {prefix}
                {value.toFixed(2)}%
              </div>
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
          if (row.peRatio === "—" || row.peRatio === null) return "—";
          return (row.peRatio as number).toFixed(1);
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
          if (row.dividendYield === "—" || row.dividendYield === null) return "—";
          return `${(row.dividendYield as number).toFixed(2)}%`;
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
        cellRenderer: ({ row, theme }) => {
          if (!row.analystRating) return "—";
          const rating = row.analystRating as string;

          // Theme-dependent color styles for analyst ratings
          const getColorStyles = (rating: string, theme: string) => {
            const getRatingColors = (rating: string) => {
              switch (rating) {
                case "Strong Buy":
                  return { type: "strongBuy" };
                case "Buy":
                  return { type: "buy" };
                case "Hold":
                  return { type: "hold" };
                case "Sell":
                  return { type: "sell" };
                case "Strong Sell":
                  return { type: "strongSell" };
                default:
                  return { type: "neutral" };
              }
            };

            const { type } = getRatingColors(rating);

            switch (theme) {
              case "dark":
                return {
                  strongBuy: { color: "#4ade80", backgroundColor: "rgba(20, 83, 45, 0.3)" },
                  buy: { color: "#22d3ee", backgroundColor: "rgba(6, 78, 59, 0.3)" },
                  hold: { color: "#fbbf24", backgroundColor: "rgba(146, 64, 14, 0.3)" },
                  sell: { color: "#fb7185", backgroundColor: "rgba(127, 29, 29, 0.3)" },
                  strongSell: { color: "#f87171", backgroundColor: "rgba(127, 29, 29, 0.3)" },
                  neutral: { color: "#9ca3af", backgroundColor: "rgba(55, 65, 81, 0.3)" },
                }[type];
              case "sky":
                return {
                  strongBuy: { color: "#059669", backgroundColor: "#ecfdf5" },
                  buy: { color: "#0891b2", backgroundColor: "#f0f9ff" },
                  hold: { color: "#d97706", backgroundColor: "#fffbeb" },
                  sell: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  strongSell: { color: "#b91c1c", backgroundColor: "#fef2f2" },
                  neutral: { color: "#475569", backgroundColor: "#f8fafc" },
                }[type];
              case "funky":
                return {
                  strongBuy: { color: "#0891b2", backgroundColor: "#ecfeff" },
                  buy: { color: "#059669", backgroundColor: "#ecfdf5" },
                  hold: { color: "#9333ea", backgroundColor: "#faf5ff" },
                  sell: { color: "#db2777", backgroundColor: "#fdf2f8" },
                  strongSell: { color: "#be185d", backgroundColor: "#fdf2f8" },
                  neutral: { color: "#9333ea", backgroundColor: "#faf5ff" },
                }[type];
              case "neutral":
                return {
                  strongBuy: { color: "#57534e", backgroundColor: "#f5f5f4" },
                  buy: { color: "#57534e", backgroundColor: "#f5f5f4" },
                  hold: { color: "#78716c", backgroundColor: "#fafaf9" },
                  sell: { color: "#57534e", backgroundColor: "#f5f5f4" },
                  strongSell: { color: "#44403c", backgroundColor: "#f5f5f4" },
                  neutral: { color: "#78716c", backgroundColor: "#fafaf9" },
                }[type];
              case "light":
              default:
                return {
                  strongBuy: { color: "#16a34a", backgroundColor: "#f0fdf4" },
                  buy: { color: "#10b981", backgroundColor: "#f0fdf4" },
                  hold: { color: "#d97706", backgroundColor: "#fffbeb" },
                  sell: { color: "#ef4444", backgroundColor: "#fef2f2" },
                  strongSell: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  neutral: { color: "#4b5563", backgroundColor: "#f9fafb" },
                }[type];
            }
          };

          const styles = getColorStyles(rating, theme);

          return (
            <div
              style={{
                padding: "4px 8px",
                borderRadius: "4px",
                fontWeight: "500",
                ...styles,
              }}
            >
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
