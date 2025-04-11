"use client";

import { SimpleTable } from "simple-table-core";
import { generateManufacturingData } from "@/components/examples/manufacturing/manufacturing-rows";
import { HEADERS } from "@/components/examples/manufacturing/manufacturing-headers";
import "simple-table-core/styles.css";

const data = generateManufacturingData();

export default function ManufacturingExample() {
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
}
