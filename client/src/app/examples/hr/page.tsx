"use client";

import { SimpleTable } from "simple-table-core";
import { generateHRData } from "../../../components/examples/hr/hr-rows";
import { HEADERS } from "../../../components/examples/hr/hr-headers";
import "simple-table-core/styles.css";

const data = generateHRData();

export default function HRExample() {
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
}
