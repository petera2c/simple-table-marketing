"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FinancialExample from "./FinanceExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";

const ROW_HEIGHT = 40;

export const FinancialExampleWrapper = ({
  height,
  themeOverride,
}: {
  height?: string;
  themeOverride?: Theme;
}) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <Suspense fallback={<div />}>
      <LivePreview
        demoCodeFilename="FinanceExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/finance/FinanceExample.tsx"].url}
        Preview={() => (
          <FinancialExample height={height ? height : `${containerHeight}px`} theme={theme} />
        )}
      />
    </Suspense>
  );
};
