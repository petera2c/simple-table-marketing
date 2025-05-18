import { HeaderObject } from "simple-table-core";

// Custom Avatar component
const Avatar = ({ children, size }: { children: React.ReactNode; size?: string }) => {
  const sizePx = size === "small" ? 24 : 32;
  return (
    <div
      style={{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1890ff",
        color: "white",
        fontSize: size === "small" ? "12px" : "14px",
      }}
    >
      {children}
    </div>
  );
};

// Custom Tag component
const Tag = ({ children, color }: { children: React.ReactNode; color?: string }) => {
  const getBackgroundColor = (color?: string) => {
    const colors: Record<string, string> = {
      green: "#f6ffed",
      orange: "#fff7e6",
      blue: "#e6f7ff",
      purple: "#f9f0ff",
      red: "#fff1f0",
      default: "#f0f0f0",
    };

    const textColors: Record<string, string> = {
      green: "#2a6a0d",
      orange: "#ad4e00",
      blue: "#0050b3",
      purple: "#391085",
      red: "#a8071a",
      default: "rgba(0, 0, 0, 0.85)",
    };

    return {
      backgroundColor: colors[color || "default"],
      color: textColors[color || "default"],
    };
  };

  const style = getBackgroundColor(color);

  return (
    <span
      style={{
        ...style,
        padding: "0 7px",
        fontSize: "12px",
        lineHeight: "20px",
        borderRadius: "2px",
        display: "inline-block",
      }}
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
  status,
}: {
  percent: number;
  size?: string;
  showInfo?: boolean;
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
            backgroundColor: getColorByStatus(status),
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

// Define our table headers
export const HEADERS: HeaderObject[] = [
  {
    accessor: "fullName",
    label: "Employee",
    width: 220,
    isSortable: true,
    isEditable: false,
    align: "left",
    pinned: "left",
    type: "string",
    cellRenderer: ({ row }) => {
      // Employee row, render with avatar and details
      const initials = `${row.rowData.firstName?.toString().charAt(0) || ""}${
        row.rowData.lastName?.toString().charAt(0) || ""
      }`;
      const name = row.rowData.fullName as string;
      const position = row.rowData.position as string;

      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar size="small">{initials}</Avatar>
          <div style={{ marginLeft: "8px" }}>
            <div>{name}</div>
            <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.5)" }}>{position}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessor: "performanceScore",
    label: "Performance",
    width: 160,
    isSortable: true,
    isEditable: true,
    align: "center",
    type: "number",
    cellRenderer: ({ row }) => {
      const score = row.rowData.performanceScore as number;

      const getColorByScore = (score: number): "success" | "normal" | "exception" => {
        if (score >= 90) return "success";
        if (score >= 65) return "normal";
        return "exception"; // Default case for low scores
      };

      return (
        <div className="w-full flex flex-col">
          <Progress percent={score} size="small" showInfo={false} status={getColorByScore(score)} />
          <div className="text-xs text-center mt-1">{score}/100</div>
        </div>
      );
    },
  },
  {
    accessor: "department",
    label: "Department",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "left",
    type: "enum",
    enumOptions: [
      "Engineering",
      "Marketing",
      "Sales",
      "Finance",
      "HR",
      "Operations",
      "Customer Support",
    ],
  },
  {
    accessor: "email",
    label: "Email",
    width: 280,
    isSortable: true,
    isEditable: true,
    align: "left",
    type: "string",
  },
  {
    accessor: "location",
    label: "Location",
    width: 130,
    isSortable: true,
    isEditable: true,
    align: "left",
    type: "enum",
    enumOptions: [
      "New York",
      "Los Angeles",
      "Chicago",
      "San Francisco",
      "Austin",
      "Boston",
      "Seattle",
      "Remote",
    ],
  },
  {
    accessor: "hireDate",
    label: "Hire Date",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "left",
    type: "date",
    cellRenderer: ({ row }) => {
      if (!row.rowData.hireDate) return "";
      const date = new Date(row.rowData.hireDate as string);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  {
    accessor: "yearsOfService",
    label: "Service",
    width: 100,
    isSortable: true,
    isEditable: false,
    align: "center",
    type: "number",
    cellRenderer: ({ row }) => {
      if (row.rowData.yearsOfService === null) return "";
      return `${row.rowData.yearsOfService} yrs`;
    },
  },
  {
    accessor: "salary",
    label: "Salary",
    width: 130,
    isSortable: true,
    isEditable: true,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      return `$${(row.rowData.salary as number).toLocaleString()}`;
    },
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "center",
    pinned: "right",
    type: "enum",
    enumOptions: ["Active", "On Leave", "Probation", "Contract", "Terminated"],
    cellRenderer: ({ row }) => {
      if (!row.rowData.status) return "";

      const status = row.rowData.status as string;
      const statusColor =
        {
          Active: "green",
          "On Leave": "orange",
          Probation: "blue",
          Contract: "purple",
          Terminated: "red",
        }[status] || "default";

      return <Tag color={statusColor}>{status}</Tag>;
    },
  },
  {
    accessor: "isRemoteEligible",
    label: "Remote Eligible",
    width: 140,
    isSortable: true,
    isEditable: true,
    align: "center",
    type: "boolean",
  },
];
