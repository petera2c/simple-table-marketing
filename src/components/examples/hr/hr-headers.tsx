import { HeaderObject } from "simple-table-core";
import { Avatar, Tag, Progress } from "antd";

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
    cellRenderer: ({ row }) => {
      // Employee row, render with avatar and details
      const initials = `${row.rowData.firstName?.toString().charAt(0) || ""}${
        row.rowData.lastName?.toString().charAt(0) || ""
      }`;
      const name = row.rowData.fullName as string;
      const position = row.rowData.position as string;

      return (
        <div className="flex items-center">
          <Avatar className="flex items-center justify-center bg-blue-500 text-white" size="small">
            {initials}
          </Avatar>
          <div className="ml-2">
            <div>{name}</div>
            <div className="text-xs text-gray-500">{position}</div>
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
    isEditable: false,
    align: "center",
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
    isEditable: false,
    align: "left",
  },
  {
    accessor: "email",
    label: "Email",
    width: 220,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "location",
    label: "Location",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "hireDate",
    label: "Hire Date",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "left",
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
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      return `$${(row.rowData.salary as number).toLocaleString()}`;
    },
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "center",
    pinned: "right",
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
];
