import { HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "sectorName",
    label: "Sector/Company",
    width: 180,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "ticker",
    label: "Symbol",
    width: 100,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "companyName",
    label: "Name",
    width: 200,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "price",
    label: "Price (USD)",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
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
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.priceChangePercent === "—") return "—";
      const value = row.rowData.priceChangePercent as number;
      const color = value < 0 ? "text-red-600" : value > 0 ? "text-green-600" : "text-gray-600";
      const prefix = value > 0 ? "+" : "";
      return (
        <span className={color}>
          {prefix}
          {value.toFixed(2)}%
        </span>
      );
    },
  },
  {
    accessor: "marketCap",
    label: "Mkt Cap ($B)",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.marketCap === "—") return "—";
      return (row.rowData.marketCap as number).toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      });
    },
  },
  {
    accessor: "peRatio",
    label: "P/E Ratio",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.peRatio === "—") return "—";
      return (row.rowData.peRatio as number).toFixed(1);
    },
  },
  {
    accessor: "dividendYield",
    label: "Div Yield",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.dividendYield === "—") return "—";
      return `${(row.rowData.dividendYield as number).toFixed(2)}%`;
    },
  },
  {
    accessor: "volume",
    label: "Volume (M)",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
  },
  {
    accessor: "region",
    label: "Region",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "revenueGrowth",
    label: "Rev Growth",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.revenueGrowth === "—") return "—";
      const value = row.rowData.revenueGrowth as number;
      const color = value < 0 ? "text-red-600" : value > 0 ? "text-green-600" : "text-gray-600";
      const prefix = value > 0 ? "+" : "";
      return (
        <span className={color}>
          {prefix}
          {value}%
        </span>
      );
    },
  },
  {
    accessor: "profitMargin",
    label: "Profit Margin",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.profitMargin === "—") return "—";
      return `${row.rowData.profitMargin}%`;
    },
  },
  {
    accessor: "riskFactor",
    label: "Risk Factor",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      if (row.rowData.riskFactor === "—") return "—";
      const value = row.rowData.riskFactor as number;
      // Visualize risk factor with colored dots
      const colorClass = value <= 3 ? "bg-green-500" : value <= 7 ? "bg-orange-400" : "bg-red-500";
      return (
        <div className="flex justify-center items-center gap-1">
          {Array.from({ length: Math.min(value, 5) }, (_, i) => (
            <span key={i} className={`inline-block w-2 h-2 rounded-full ${colorClass}`} />
          ))}
          <span className="ml-1 text-gray-600">{value}/10</span>
        </div>
      );
    },
  },
  {
    accessor: "esgScore",
    label: "ESG Score",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.esgScore === "—") return "—";
      const value = row.rowData.esgScore as number;
      // Color based on score
      const getColorClass = () => {
        if (value >= 80) return "text-green-600";
        if (value >= 60) return "text-green-500";
        if (value >= 40) return "text-orange-500";
        return "text-red-500";
      };

      return <span className={getColorClass()}>{value}</span>;
    },
  },
  {
    accessor: "analystRating",
    label: "Analyst Rating",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "center",
    pinned: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.analystRating === "—") return "—";
      const value = row.rowData.analystRating as number;

      // Display star rating
      return (
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={faChartLine}
              className={`text-xs ${star <= value ? "text-blue-500" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-1 text-gray-600">{value}</span>
        </div>
      );
    },
  },
];
