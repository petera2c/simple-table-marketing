import { HeaderObject } from "simple-table-core";

// Custom Tag component
const Tag = ({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) => {
  const getColorStyles = (color?: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      success: { bg: "#f6ffed", text: "#2a6a0d" },
      error: { bg: "#fff1f0", text: "#a8071a" },
      green: { bg: "#f6ffed", text: "#2a6a0d" },
      blue: { bg: "#e6f7ff", text: "#0050b3" },
      red: { bg: "#fff1f0", text: "#a8071a" },
      orange: { bg: "#fff7e6", text: "#ad4e00" },
      purple: { bg: "#f9f0ff", text: "#391085" },
      default: { bg: "#f0f0f0", text: "rgba(0, 0, 0, 0.85)" },
    };

    return colors[color || "default"];
  };

  const { bg, text } = getColorStyles(color);

  return (
    <span
      style={{
        backgroundColor: bg,
        color: text,
        padding: "0 7px",
        fontSize: "12px",
        lineHeight: "20px",
        borderRadius: "2px",
        display: "inline-block",
      }}
      className={className}
    >
      {children}
    </span>
  );
};

// Custom Progress component
const Progress = ({
  percent,
  size,
  showInfo = true,
  strokeColor,
  status,
}: {
  percent: number;
  size?: string;
  showInfo?: boolean;
  strokeColor?: string;
  status?: "success" | "normal" | "exception";
}) => {
  const getColorByStatus = (status?: string) => {
    switch (status) {
      case "success":
        return "#52c41a";
      case "exception":
        return "#ff4d4f";
      case "normal":
      default:
        return "#1890ff";
    }
  };

  const height = size === "small" ? 6 : 8;
  const color = strokeColor || getColorByStatus(status);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        marginRight: showInfo ? "50px" : "0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          height: `${height}px`,
          width: "100%",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            backgroundColor: color,
            borderRadius: "100px",
          }}
        />
      </div>
      {showInfo && (
        <span
          style={{
            marginLeft: "8px",
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          {`${percent}%`}
        </span>
      )}
    </div>
  );
};

export const SALES_HEADERS: HeaderObject[] = [
  {
    accessor: "repName",
    label: "Sales Representative",
    width: "2fr",
    minWidth: 200,
    isSortable: true,
    isEditable: true,
    type: "string",
  },
  {
    accessor: "salesMetrics",
    label: "Sales Metrics",
    width: 600,
    isSortable: false,
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
              {isWon ? "Won" : "Lost"}
            </Tag>
          );
        },
      },
      {
        accessor: "closeDate",
        label: "Close Date",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "center",
        type: "date",
        cellRenderer: ({ row }) => {
          if (!row.rowData.closeDate) return "—";
          const date = new Date(row.rowData.closeDate as string);
          return (
            <div className="flex items-center justify-center">
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
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
      {
        accessor: "category",
        label: "Category",
        width: "1fr",
        minWidth: 140,
        isSortable: true,
        isEditable: true,
        align: "center",
        type: "enum",
        enumOptions: ["Software", "Hardware", "Services", "Consulting", "Training", "Support"],
      },
    ],
  },
];
