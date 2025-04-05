import { HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Tag, Tooltip } from "antd";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "ticker",
    label: "Symbol",
    width: 100,
    isSortable: true,
    isEditable: false,
    align: "left",
    pinned: "left",
    type: "string",
  },
  {
    accessor: "priceChangePercent",
    label: "Change %",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      if (row.rowData.priceChangePercent === "—") return "—";
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
  {
    accessor: "sectorName",
    label: "Sector/Company",
    width: 180,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
    type: "string",
  },

  {
    accessor: "companyName",
    label: "Name",
    width: 200,
    isSortable: true,
    isEditable: false,
    align: "left",
    type: "string",
  },
  {
    accessor: "price",
    label: "Price (USD)",
    width: 130,
    isSortable: true,
    isEditable: false,
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
    accessor: "analystRating",
    label: "Analyst Rating",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "center",
    type: "number",
    cellRenderer: ({ row }) => {
      if (row.rowData.analystRating === "—") return "—";
      const value = row.rowData.analystRating as number;

      // Text ratings
      const ratingLabels = {
        5: "Strong Buy",
        4.5: "Buy+",
        4: "Buy",
        3.5: "Overweight",
        3: "Hold",
        2.5: "Underweight",
        2: "Sell",
        1.5: "Sell+",
        1: "Strong Sell",
      };

      // Color based on rating
      const getRatingColor = (val: number) => {
        if (val >= 4.5) return "green";
        if (val >= 4) return "green";
        if (val >= 3.5) return "cyan";
        if (val >= 3) return "blue";
        if (val >= 2.5) return "orange";
        if (val >= 2) return "volcano";
        return "red";
      };

      const ratingLabel = ratingLabels[(Math.round(value * 2) / 2) as keyof typeof ratingLabels] || "Hold";
      const color = getRatingColor(value);

      const icon = value >= 4 ? faThumbsUp : value < 3 ? faThumbsDown : null;
      const direction = value >= 4 ? faArrowUp : value < 3 ? faArrowDown : null;

      return (
        <Tooltip title={`${value.toFixed(1)} / 5.0`}>
          <Tag color={color} className="py-1 px-2">
            {icon && <FontAwesomeIcon icon={icon} className="mr-1" />}
            {ratingLabel}
            {direction && <FontAwesomeIcon icon={direction} className="ml-1" size="xs" />}
          </Tag>
        </Tooltip>
      );
    },
  },
  {
    accessor: "revenueGrowth",
    label: "Rev Growth",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
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
    accessor: "marketCap",
    label: "Mkt Cap ($B)",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
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
    type: "number",
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
    type: "number",
    cellRenderer: ({ row }) => {
      if (row.rowData.dividendYield === "—") return "—";
      return `${(row.rowData.dividendYield as number).toFixed(2)}%`;
    },
  },
  {
    accessor: "profitMargin",
    label: "Profit Margin",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      if (row.rowData.profitMargin === "—") return "—";
      return `${row.rowData.profitMargin}%`;
    },
  },
  {
    accessor: "esgScore",
    label: "ESG Score",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
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
];
