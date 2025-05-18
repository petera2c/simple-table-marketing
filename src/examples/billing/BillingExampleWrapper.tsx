"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const ROW_HEIGHT = 40;

export const BillingExampleWrapper = ({
  onGridReady,
  themeOverride,
}: {
  onGridReady?: () => void;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <Suspense fallback={<div />}>
      <LivePreview
        demoCodeFilename="BillingExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/billing/BillingExample.tsx"].url}
        Preview={() => (
          <BillingExample height={containerHeight} onGridReady={onGridReady} theme={theme} />
        )}
      />
    </Suspense>
  );
};
