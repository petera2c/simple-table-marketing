import { HeaderObject } from "simple-table-core";

export const getSpreadsheetHeaders = (additionalColumns: HeaderObject[] = []): HeaderObject[] => [
  {
    accessor: "principal",
    label: "Principal",
    width: 130,
    minWidth: 100,
    align: "right",
    isEditable: true,
    type: "number",
    aggregation: { type: "sum" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      return `$${numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "interestRate",
    label: "Interest Rate %",
    width: 130,
    minWidth: 110,
    align: "right",
    isEditable: true,
    type: "number",
    aggregation: { type: "average" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      return `${numValue.toFixed(2)}%`;
    },
  },
  {
    accessor: "monthlyPayment",
    label: "Monthly Payment",
    width: 140,
    minWidth: 120,
    align: "right",
    isEditable: true,
    type: "number",
    aggregation: { type: "sum" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      return `$${numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "remainingBalance",
    label: "Remaining Balance",
    width: 150,
    minWidth: 130,
    align: "right",
    type: "number",
    aggregation: { type: "sum" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      const color = numValue > 0 ? "#6b7280" : "#10b981";
      return (
        <span style={{ color, fontWeight: 500 }}>
          $
          {numValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      );
    },
  },
  {
    accessor: "totalPaid",
    label: "Total Paid",
    width: 130,
    minWidth: 110,
    align: "right",
    type: "number",
    aggregation: { type: "sum" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      return `$${numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "interestPaid",
    label: "Interest Paid",
    width: 130,
    minWidth: 110,
    align: "right",
    type: "number",
    aggregation: { type: "sum" },
    cellRenderer: ({ row, accessor }) => {
      const value = row[accessor];
      if (value === null || value === undefined) return "";
      const numValue = typeof value === "number" ? value : parseFloat(value as string);
      return `$${numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  ...additionalColumns,
];
