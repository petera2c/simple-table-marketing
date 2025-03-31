import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateBillingData } from "./billing-rows";
import { HEADERS } from "./billing-headers";

const BillingDashboard = ({ theme = "light" }: { theme?: "light" | "custom" }) => {
  const [data] = useState(generateBillingData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="70dvh"
      theme={theme}
      selectableCells
      editColumns
    />
  );
};

export default BillingDashboard;
