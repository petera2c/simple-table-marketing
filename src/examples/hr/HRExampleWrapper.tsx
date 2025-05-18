"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import HRExample from "./HRExample";
import { Theme } from "simple-table-core";

export const HRExampleWrapper = ({ themeOverride }: { themeOverride?: Theme }) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  return (
    <Suspense fallback={<div />}>
      <HRExample theme={theme} />
    </Suspense>
  );
};
