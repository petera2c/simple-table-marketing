import { HeaderObject } from "simple-table-core";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Get current month and generate 12 months (current month + 11 previous)
const generateMonthHeaders = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const headers: HeaderObject[] = [];

  // Generate 12 months of headers (current month and 11 previous)
  for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
    const year = currentMonth - monthIndex < 0 ? currentYear - 1 : currentYear;

    // Get full month name
    const fullMonthName = new Date(year, monthIndex).toLocaleString("default", { month: "long" });

    headers.push({
      accessor: `month_${months[monthIndex]}_${year}`,
      label: `${fullMonthName} ${year}`,
      width: 200,
      isSortable: true,
      isEditable: false,
      align: "right",
      type: "number",
      children: [
        {
          disableReorder: true,
          label: "Balance",
          accessor: `balance_${months[monthIndex]}_${year}`,
          width: 200,
          isSortable: true,
          isEditable: false,
          align: "right",
          type: "number",
          cellRenderer: ({ row, accessor }) => {
            const balance = row.rowData[accessor] as number;
            if (!balance) return "—";

            return `$${balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
        {
          disableReorder: true,
          label: "Revenue",
          accessor: `revenue_${months[monthIndex]}_${year}`,
          width: 200,
          isSortable: true,
          isEditable: false,
          align: "right",
          type: "number",
          cellRenderer: ({ row, accessor }) => {
            const revenue = row.rowData[accessor] as number;
            if (!revenue) return "—";

            return `$${revenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      ],
    });
  }

  return headers;
};

// Main headers
export const HEADERS: HeaderObject[] = [
  {
    accessor: "name",
    label: "Name",
    width: 250,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
    pinned: "left",
    type: "string",
    cellRenderer: ({ row }) => {
      const name = row.rowData.name as string;

      return <div className={row.rowData.type === "account" ? "font-semibold" : ""}>{name}</div>;
    },
  },
  {
    accessor: "amount",
    label: "Total Amount",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      const amount = row.rowData.amount as number;
      if (!amount) return "—";

      return `$${amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "deferredRevenue",
    label: "Deferred Revenue",
    width: 180,
    isSortable: true,
    isEditable: false,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      const amount = row.rowData.amount as number;
      const deferred = row.rowData.deferredRevenue as number;

      if (deferred === undefined || amount === undefined) return "—";

      return `$${deferred.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  ...generateMonthHeaders(), // Add the monthly columns
];
