import { SimpleTable, Row, CellChangeProps, Theme } from "simple-table-core";
import { SALES_HEADERS } from "./sales-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

export default function SalesExample({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height,
  nextIcon,
  onGridReady,
  prevIcon,
  rowCount = 1000,
  sortDownIcon,
  sortUpIcon,
  theme,
}: {
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  height?: string | number | null;
  nextIcon?: React.ReactNode;
  onGridReady?: () => void;
  prevIcon?: React.ReactNode;
  rowCount?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const processData = (salesData: any[]) => {
    const processedData = salesData.map((sale) => {
      const dealValue = sale.dealSize / sale.profitMargin;
      const commission = dealValue * 0.1;
      const dealProfit = sale.dealSize - commission;

      return {
        ...sale,
        dealValue: parseFloat(dealValue.toFixed(2)),
        commission: parseFloat(commission.toFixed(2)),
        dealProfit: parseFloat(dealProfit.toFixed(2)),
      };
    });

    return processedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.simple-table.com/api/data/sales?rowCount=${rowCount}`
        );
        if (response.ok) {
          const data = await response.json();
          const processedData = processData(data);
          setData(processedData);
        }
      } catch {
        const response = await fetch("/data/sales-data.json");
        const data = await response.json();
        const processedData = processData(data);
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
