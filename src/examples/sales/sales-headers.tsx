import { HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faUsers,
  faChartLine,
  faStar,
  faCalendarAlt,
  faDollarSign,
  faPercentage,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { Tag, Tooltip, Progress } from "antd";

export const SALES_HEADERS: HeaderObject[] = [
  {
    accessor: "repName",
    label: "Sales Representative",
    width: "2fr",
    minWidth: 200,
    isSortable: true,
    isEditable: true,
  },
  {
    accessor: "salesMetrics",
    label: "Sales Metrics",
    width: 460,
    isSortable: false,
    isEditable: true,
    children: [
      {
        accessor: "dealSize",
        label: "Deal Size",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.dealSize === "—") return "—";
          return `$${(row.rowData.dealSize as number).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },

      {
        accessor: "dealValue",
        label: "Deal Value",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.dealValue === "—") return "—";
          const value = row.rowData.dealValue as number;

          // Color code based on value tiers
          let valueClass = "text-gray-700";
          if (value > 100000) valueClass = "text-green-700 font-bold";
          else if (value > 50000) valueClass = "text-green-600";
          else if (value > 10000) valueClass = "text-green-500";

          return (
            <span className={valueClass}>
              $
              {value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          );
        },
      },
      {
        accessor: "isWon",
        label: "Status",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "center",
        type: "boolean",
        cellRenderer: ({ row }) => {
          if (row.rowData.isWon === "—") return "—";
          const isWon = row.rowData.isWon as boolean;
          return (
            <Tag color={isWon ? "success" : "error"} className="py-1 px-2">
              <FontAwesomeIcon icon={isWon ? faCheckCircle : faTimesCircle} className="mr-1" />
              {isWon ? "Won" : "Lost"}
            </Tag>
          );
        },
      },
    ],
  },

  {
    accessor: "financialMetrics",
    label: "Financial Metrics",
    width: "1fr",
    minWidth: 140,
    isSortable: false,
    children: [
      {
        accessor: "commission",
        label: "Commission",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.commission === "—") return "—";
          const value = row.rowData.commission as number;
          if (value === 0) return <span className="text-gray-400">$0.00</span>;

          return `$${value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
      {
        accessor: "profitMargin",
        label: "Profit Margin",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.profitMargin === "—") return "—";
          const value = row.rowData.profitMargin as number;

          // Enhanced color coding based on profit margin tiers
          let colorClass = "";
          if (value >= 0.7) colorClass = "text-green-700 font-bold"; // Software-like margins
          else if (value >= 0.5) colorClass = "text-green-600";
          else if (value >= 0.4) colorClass = "text-green-500";
          else if (value >= 0.3) colorClass = "text-blue-500";
          else colorClass = "text-yellow-600"; // Hardware-like margins

          return (
            <div className="flex items-center justify-end">
              <span className={colorClass}>{(value * 100).toFixed(1)}%</span>
              <div className="ml-2 w-12">
                <Progress
                  percent={value * 100}
                  size="small"
                  showInfo={false}
                  strokeColor={value >= 0.5 ? "#10B981" : value >= 0.3 ? "#3B82F6" : "#D97706"}
                />
              </div>
            </div>
          );
        },
      },
      {
        accessor: "dealProfit",
        label: "Deal Profit",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row }) => {
          if (row.rowData.dealProfit === "—") return "—";
          const value = row.rowData.dealProfit as number;
          if (value === 0) return <span className="text-gray-400">$0.00</span>;

          // Color code based on profit tiers
          let profitClass = "text-gray-700";
          if (value > 50000) profitClass = "text-green-700 font-bold";
          else if (value > 20000) profitClass = "text-green-600";
          else if (value > 10000) profitClass = "text-green-500";

          return (
            <span className={profitClass}>
              $
              {value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          );
        },
      },
    ],
  },
];
