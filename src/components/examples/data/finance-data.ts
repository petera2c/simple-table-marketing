import { HeaderObject, Row } from "simple-table-core";

export const generateFinanceData = (): Row[] => {
  const sectors = Array.from({ length: 20 }, (_, i) => `Sector ${i + 1}`);
  const companyPrefixes = ["Tech", "Fin", "Health", "Energy", "Goods"];
  const companySuffixes = ["Corp", "Inc", "Ltd", "Group", "Solutions"];
  const locations = ["New York", "London", "Tokyo", "Shanghai", "San Francisco"];
  let rowId = 0;

  return sectors.map((sector) => {
    const numCompanies = Math.floor(Math.random() * 7) + 2; // 2 to 8 children
    const children = Array.from({ length: numCompanies }, () => {
      const prefix = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
      const suffix = companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
      const year = 1950 + Math.floor(Math.random() * 75);
      const price = parseFloat((Math.random() * 500 + 10).toFixed(2));
      const marketCap = parseFloat((Math.random() * 3).toFixed(1));
      const revenue = parseFloat((Math.random() * 100).toFixed(1));
      const peRatio = parseFloat((Math.random() * 40 + 5).toFixed(1));
      const dividendYield = parseFloat((Math.random() * 5).toFixed(2));
      const volume = Math.floor(Math.random() * 100);
      const lastUpdatedDay = Math.floor(Math.random() * 18) + 1;
      const lastUpdated = `2025-03-${lastUpdatedDay < 10 ? `0${lastUpdatedDay}` : lastUpdatedDay}`;
      const analystRating = parseFloat((Math.random() * 5).toFixed(1));
      const employees = Math.floor(Math.random() * 100000) + 1000;

      return {
        rowMeta: { rowId: rowId++, isExpanded: true },
        rowData: {
          sectorName: sector,
          ticker: `${sector.slice(0, 2).toUpperCase()}${Math.floor(Math.random() * 1000)}`,
          companyName: `${prefix} ${suffix}`,
          price,
          marketCap,
          peRatio,
          dividendYield,
          volume,
          lastUpdated,
          revenue,
          employees,
          founded: year,
          hqLocation: locations[Math.floor(Math.random() * locations.length)],
          analystRating,
        },
      };
    });

    const sectorTotalEmployees = children.reduce((sum, child) => sum + (child.rowData.employees as number), 0);
    const sectorTotalRevenue = children.reduce((sum, child) => sum + (child.rowData.revenue as number), 0);

    return {
      rowMeta: { rowId: rowId++, isExpanded: true, children },
      rowData: {
        sectorName: sector,
        ticker: "-",
        companyName: "-",
        price: "-",
        marketCap: "-",
        peRatio: "-",
        dividendYield: "-",
        volume: "-",
        lastUpdated: "-",
        revenue: sectorTotalRevenue,
        employees: sectorTotalEmployees,
        founded: "-",
        hqLocation: "-",
        analystRating: "-",
      },
    };
  });
};

export const FINANCE_HEADERS: HeaderObject[] = [
  {
    accessor: "sectorName",
    label: "Sector",
    width: 150,
    expandable: true,
    isSortable: true,
    isEditable: true,
    align: "left",
  },
  { accessor: "ticker", label: "Ticker", width: 120, isSortable: true, isEditable: true, align: "left" },
  { accessor: "companyName", label: "Company Name", width: 250, isSortable: true, isEditable: true, align: "left" },
  {
    accessor: "price",
    label: "Price",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.price === "-") return "-";
      return `$${(row.rowData.price as number).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "marketCap",
    label: "Market Cap",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.marketCap === "-") return "-";
      return `$${(row.rowData.marketCap as number).toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}T`;
    },
  },
  {
    accessor: "peRatio",
    label: "P/E Ratio",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.peRatio === "-") return "-";
      return (row.rowData.peRatio as number).toFixed(1);
    },
  },
  {
    accessor: "dividendYield",
    label: "Dividend Yield",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.dividendYield === "-") return "-";
      return `${(row.rowData.dividendYield as number).toFixed(2)}%`;
    },
  },
  {
    accessor: "volume",
    label: "Volume",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.volume === "-") return "-";
      return `${row.rowData.volume}M`;
    },
  },
  {
    accessor: "lastUpdated",
    label: "Last Updated",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "left",
    cellRenderer: ({ row }) => {
      if (row.rowData.lastUpdated === "-") return "-";
      const date = new Date(row.rowData.lastUpdated as string);
      return date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  {
    accessor: "revenue",
    label: "Revenue",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.revenue === "-") return "-";
      return `$${(row.rowData.revenue as number).toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}B`;
    },
  },
  { accessor: "employees", label: "Employees", width: 120, isSortable: true, isEditable: true, align: "right" },
  {
    accessor: "founded",
    label: "Founded",
    width: 120,
    isSortable: true,
    isEditable: true,
    align: "left",
    cellRenderer: ({ row }) => (row.rowData.founded === "-" ? "-" : `${row.rowData.founded}`),
  },
  { accessor: "hqLocation", label: "HQ Location", width: 180, isSortable: true, isEditable: true, align: "left" },
  {
    accessor: "analystRating",
    label: "Analyst Rating",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.analystRating === "-") return "-";
      return `${(row.rowData.analystRating as number).toFixed(1)}/5`;
    },
  },
];
