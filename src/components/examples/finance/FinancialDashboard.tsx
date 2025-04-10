import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateFinanceData } from "./finance-rows";
import { HEADERS } from "./finance-headers";
import "simple-table-core/styles.css";

const FinancialDashboard = ({ height = "70dvh" }: { height?: string }) => {
  const [data] = useState(generateFinanceData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height={height}
      theme="light"
      selectableCells
      selectableColumns
    />
  );
};

export default FinancialDashboard;
