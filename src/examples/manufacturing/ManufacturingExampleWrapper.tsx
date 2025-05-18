"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ManufacturingExample from "./ManufacturingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";

const ROW_HEIGHT = 40;

export const ManufacturingExampleWrapper = ({ themeOverride }: { themeOverride?: Theme }) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "sky";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <Suspense fallback={<div />}>
      <LivePreview
        demoCodeFilename="ManufacturingExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/manufacturing/ManufacturingExample.tsx"].url}
        Preview={() => <ManufacturingExample height={containerHeight} theme={theme} />}
      />
    </Suspense>
  );
};
