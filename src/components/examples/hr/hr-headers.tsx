import { HeaderObject } from "simple-table-core";
import { Button, Tooltip, Avatar, Tag, Progress } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faPencilAlt, faAddressCard, faChartBar } from "@fortawesome/free-solid-svg-icons";

// Define our table headers
export const HEADERS: HeaderObject[] = [
  {
    accessor: "fullName",
    label: "Employee",
    width: 220,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      // Check if it's a department row
      if (row.rowData.firstName === null) {
        return <span className="font-bold">{row.rowData.fullName}</span>;
      }

      // Employee row, render with avatar and details
      const initials = `${row.rowData.firstName?.toString().charAt(0)}${row.rowData.lastName?.toString().charAt(0)}`;
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
    accessor: "department",
    label: "Department",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      if (row.rowData.firstName === null) {
        return "";
      }
      return row.rowData.department;
    },
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
    accessor: "expertise",
    label: "Expertise",
    width: 250,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      if (!row.rowData.expertise) return "";

      try {
        // Parse the JSON string back to an array
        const expertiseStr = row.rowData.expertise as string;
        if (typeof expertiseStr !== "string") return "";

        const expertise = JSON.parse(expertiseStr) as string[];
        return (
          <div className="flex flex-wrap gap-1">
            {expertise.map((skill, index) => (
              <Tag key={index} color="blue" className="text-xs m-0">
                {skill}
              </Tag>
            ))}
          </div>
        );
      } catch (e) {
        return "Error parsing expertise";
      }
    },
  },
  {
    accessor: "actions",
    label: "Actions",
    width: 140,
    isSortable: false,
    isEditable: false,
    align: "center",
    pinned: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.firstName === null) {
        // Department row
        return (
          <div className="flex justify-center space-x-1">
            <Tooltip title="Department Analytics">
              <Button type="text" size="small" icon={<FontAwesomeIcon icon={faChartBar} />} />
            </Tooltip>
            <Tooltip title="Add Employee">
              <Button type="text" size="small" icon={<FontAwesomeIcon icon={faUserPlus} />} />
            </Tooltip>
          </div>
        );
      }

      return (
        <div className="flex justify-center space-x-1">
          <Tooltip title="View Profile">
            <Button type="text" size="small" icon={<FontAwesomeIcon icon={faAddressCard} />} />
          </Tooltip>
          <Tooltip title="Edit">
            <Button type="text" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
          </Tooltip>
        </div>
      );
    },
  },
];
