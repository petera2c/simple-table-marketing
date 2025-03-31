import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import { generateHRData } from "./hr-rows";
import { HEADERS } from "./hr-headers";

const HRManagement = () => {
  const [data] = useState(generateHRData());

  return (
    <SimpleTable
      columnReordering
      columnResizing
      defaultHeaders={HEADERS}
      rows={data}
      rowsPerPage={10}
      selectableCells
      shouldPaginate
      theme="light"
    />
  );
};

export default HRManagement;
