import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateFinanceData } from "./finance-rows";
import { HEADERS } from "./finance-headers";

const FinancialDashboard = () => {
  const [data] = useState(generateFinanceData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="70dvh"
      theme="light"
      selectableCells
    />
  );
};

export default FinancialDashboard;
