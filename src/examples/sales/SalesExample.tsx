import { SimpleTable, Row, CellChangeProps, Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

// Backup data (first 20 rows from sales-data.json)
const BACKUP_SALES_DATA = [
  {
    id: "SALE-0",
    repName: "James Wilson",
    dealSize: 18060.98,
    isWon: true,
    commission: 3756.68,
    dealProfit: 5779.51,
    dealValue: 36121.96,
    profitMargin: 0.16,
    closeDate: "2025-07-24",
    category: "Support",
  },
  {
    id: "SALE-1",
    repName: "James Wilson",
    dealSize: 101.96,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 20086.12,
    profitMargin: 0.66,
    closeDate: "2025-08-19",
    category: "Services",
  },
  {
    id: "SALE-2",
    repName: "Thomas Müller",
    dealSize: 8961.98,
    isWon: true,
    commission: 3620.64,
    dealProfit: 6094.15,
    dealValue: 35847.92,
    profitMargin: 0.17,
    closeDate: "2025-09-09",
    category: "Consulting",
  },
  {
    id: "SALE-3",
    repName: "Emma Fischer",
    dealSize: 690.21,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 82134.99,
    profitMargin: 0.53,
    closeDate: "2025-08-20",
    category: "Services",
  },
  {
    id: "SALE-4",
    repName: "Emily Davis",
    dealSize: 550.7,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 52316.5,
    profitMargin: 0.63,
    closeDate: "2025-08-30",
    category: "Training",
  },
  {
    id: "SALE-5",
    repName: "Thomas Müller",
    dealSize: 27507.58,
    isWon: true,
    commission: 2778.27,
    dealProfit: 12653.49,
    dealValue: 27507.58,
    profitMargin: 0.46,
    closeDate: "2025-07-20",
    category: "Support",
  },
  {
    id: "SALE-6",
    repName: "Jessica Lee",
    dealSize: 111.78,
    isWon: true,
    commission: 1540.33,
    dealProfit: 10753.24,
    dealValue: 14531.4,
    profitMargin: 0.74,
    closeDate: "2025-09-01",
    category: "Services",
  },
  {
    id: "SALE-7",
    repName: "Ravi Patel",
    dealSize: 18607.03,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 37214.06,
    profitMargin: 0.19,
    closeDate: "2025-07-31",
    category: "Support",
  },
  {
    id: "SALE-8",
    repName: "Sarah Martinez",
    dealSize: 109.64,
    isWon: true,
    commission: 2394.54,
    dealProfit: 16248.65,
    dealValue: 21379.8,
    profitMargin: 0.76,
    closeDate: "2025-09-07",
    category: "Training",
  },
  {
    id: "SALE-9",
    repName: "Thomas Müller",
    dealSize: 26241.8,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 78725.4,
    profitMargin: 0.41,
    closeDate: "2025-07-22",
    category: "Hardware",
  },
  {
    id: "SALE-10",
    repName: "Emily Davis",
    dealSize: 3283.57,
    isWon: true,
    commission: 4826.85,
    dealProfit: 24134.24,
    dealValue: 49253.55,
    profitMargin: 0.49,
    closeDate: "2025-09-11",
    category: "Consulting",
  },
  {
    id: "SALE-11",
    repName: "Sarah Martinez",
    dealSize: 615.95,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 117646.45,
    profitMargin: 0.63,
    closeDate: "2025-09-02",
    category: "Consulting",
  },
  {
    id: "SALE-12",
    repName: "Valentina Diaz",
    dealSize: 109.57,
    isWon: true,
    commission: 598.14,
    dealProfit: 3542.4,
    dealValue: 5807.21,
    profitMargin: 0.61,
    closeDate: "2025-07-27",
    category: "Hardware",
  },
  {
    id: "SALE-13",
    repName: "Thomas Müller",
    dealSize: 640.4,
    isWon: true,
    commission: 1487.65,
    dealProfit: 9132.1,
    dealValue: 14729.2,
    profitMargin: 0.62,
    closeDate: "2025-08-06",
    category: "Services",
  },
  {
    id: "SALE-14",
    repName: "Sarah Martinez",
    dealSize: 2567.94,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 33383.22,
    profitMargin: 0.49,
    closeDate: "2025-08-30",
    category: "Consulting",
  },
  {
    id: "SALE-15",
    repName: "Emily Davis",
    dealSize: 134.49,
    isWon: true,
    commission: 2951.79,
    dealProfit: 18010.9,
    dealValue: 25015.14,
    profitMargin: 0.72,
    closeDate: "2025-09-09",
    category: "Hardware",
  },
  {
    id: "SALE-16",
    repName: "Ravi Patel",
    dealSize: 685.34,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 111025.08,
    profitMargin: 0.53,
    closeDate: "2025-07-24",
    category: "Hardware",
  },
  {
    id: "SALE-17",
    repName: "Sophie Dubois",
    dealSize: 10355.39,
    isWon: true,
    commission: 2951.29,
    dealProfit: 14911.76,
    dealValue: 31066.17,
    profitMargin: 0.48,
    closeDate: "2025-08-04",
    category: "Software",
  },
  {
    id: "SALE-18",
    repName: "Mei Chen",
    dealSize: 8689.03,
    isWon: false,
    commission: 0,
    dealProfit: 0,
    dealValue: 26067.09,
    profitMargin: 0.4,
    closeDate: "2025-09-02",
    category: "Services",
  },
  {
    id: "SALE-19",
    repName: "Liu Wei",
    dealSize: 119.98,
    isWon: true,
    commission: 2321.85,
    dealProfit: 14757.54,
    dealValue: 19676.72,
    profitMargin: 0.75,
    closeDate: "2025-09-18",
    category: "Training",
  },
];

// Function to process the data and add the new fields
const processData = (rawData: Row[]): (Row & { closeDate: string; category: string })[] => {
  return rawData.map((row: Row) => {
    // Generate a random close date in the past 90 days
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - Math.floor(Math.random() * 90));
    const closeDate = pastDate.toISOString().split("T")[0];

    // Assign a random category
    const categories = ["Software", "Hardware", "Services", "Consulting", "Training", "Support"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    return {
      ...row,
      closeDate,
      category,
    };
  });
};

export default function SalesExample({
  height,
  onGridReady,
  theme,
  rowCount = 50,
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  nextIcon,
  prevIcon,
  sortDownIcon,
  sortUpIcon,
}: {
  height?: number | null;
  onGridReady?: () => void;
  theme?: Theme;
  rowCount?: number;
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
}) {
  const [data, setData] = useState<(Row & { closeDate: string; category: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch sales data from API and process it
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
        const isProduction =
          typeof window !== "undefined" && window.location.hostname.includes("simple-table.com");

        // Use backup data if not on localhost or production
        if (!isLocal && !isProduction) {
          const processedData = processData(BACKUP_SALES_DATA);
          setData(processedData);
          setIsLoading(false);
          return;
        }

        // Use relative path for local development, full URL for production
        const baseUrl = isLocal ? "" : "https://www.simple-table.com";
        const response = await fetch(`${baseUrl}/api/data/sales?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const salesData = await response.json();
        const processedData = processData(salesData);
        setData(processedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
        // Fallback to backup data on error
        const processedData = processData(BACKUP_SALES_DATA);
        setData(processedData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            [accessor]: newValue,
          };
        }
        return item;
      })
    );
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: height ? `${height}px` : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading sales data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={SALES_HEADERS}
      editColumns
      expandIcon={expandIcon}
      filterIcon={filterIcon}
      headerCollapseIcon={headerCollapseIcon}
      headerExpandIcon={headerExpandIcon}
      height={height ? `${height}px` : "70dvh"}
      nextIcon={nextIcon}
      onCellEdit={handleCellEdit}
      onGridReady={onGridReady}
      prevIcon={prevIcon}
      rowIdAccessor="id"
      rows={data}
      selectableCells
      sortDownIcon={sortDownIcon}
      sortUpIcon={sortUpIcon}
      theme={theme}
    />
  );
}
