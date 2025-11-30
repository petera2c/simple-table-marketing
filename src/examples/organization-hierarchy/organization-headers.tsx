import { HeaderObject } from "simple-table-core";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "name",
    label: "Name",
    width: 300,
    expandable: true,
    type: "string",
    pinned: "left",
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "type",
    label: "Type",
    width: 100,
    type: "string",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    type: "string",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "client",
    label: "Client/Assignee",
    width: 180,
    type: "string",
    isSortable: true,
    isEditable: false,
    valueGetter: ({ row }) => {
      if (row.type === "project") return row.client as string;
      if (row.type === "task") return row.assignee as string;
      return "—";
    },
  },
  {
    accessor: "lead",
    label: "Lead",
    width: 150,
    type: "string",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "priority",
    label: "Priority",
    width: 100,
    type: "string",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "startDate",
    label: "Start Date",
    width: 120,
    type: "date",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "dueDate",
    label: "Due Date",
    width: 120,
    type: "date",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "budget",
    label: "Budget",
    width: 130,
    type: "string",
    align: "right",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "location",
    label: "Location",
    width: 150,
    type: "string",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "hoursEstimated",
    label: "Est. Hours",
    width: 110,
    type: "number",
    align: "right",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "hoursActual",
    label: "Actual Hours",
    width: 110,
    type: "number",
    align: "right",
    isSortable: true,
    isEditable: false,
  },
  {
    accessor: "completionPercentage",
    label: "Progress",
    width: 100,
    type: "number",
    align: "right",
    isSortable: true,
    isEditable: false,
    valueFormatter: ({ value }) => {
      if (value === undefined || value === null) return "—";
      return `${value}%`;
    },
  },
];
