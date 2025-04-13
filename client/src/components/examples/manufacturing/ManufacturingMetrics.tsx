import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateManufacturingData } from "./manufacturing-rows";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";

const ManufacturingMetrics = () => {
  const [data] = useState(generateManufacturingData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="60dvh"
      theme="light"
      selectableCells
    />
  );
};

export default ManufacturingMetrics;
