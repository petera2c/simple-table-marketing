"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ManufacturingExample from "./ManufacturingExample";
import { Theme } from "simple-table-core";

export const ManufacturingExampleWrapper = ({ themeOverride }: { themeOverride?: Theme }) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "sky";

  return (
    <Suspense fallback={<div />}>
      <ManufacturingExample theme={theme} />
    </Suspense>
  );
};
