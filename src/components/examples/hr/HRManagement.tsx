import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateHRData } from "./hr-rows";
import { HEADERS } from "./hr-headers";

const HRManagement = () => {
  const [data] = useState(generateHRData());

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

export default HRManagement;
