"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import HRExample from "./HRExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const ROW_HEIGHT = 40;

export const HRExampleWrapper = ({ themeOverride }: { themeOverride?: Theme }) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <Suspense fallback={<div />}>
      <LivePreview
        demoCodeFilename="HRExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/hr/HRExample.tsx"].url}
        Preview={() => <HRExample height={containerHeight} rowHeight={ROW_HEIGHT} theme={theme} />}
      />
    </Suspense>
  );
};
