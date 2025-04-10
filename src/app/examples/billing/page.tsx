import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateBillingData } from "@/components/examples/billing/billing-rows";
import { HEADERS } from "@/components/examples/billing/billing-headers";
import "simple-table-core/styles.css";

export default function BillingExample() {
  const [data] = useState(generateBillingData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="70dvh"
      theme="light"
      selectableCells
      editColumns
    />
  );
}
