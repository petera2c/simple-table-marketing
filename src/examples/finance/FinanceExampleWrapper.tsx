"use client";

import { useSearchParams } from "next/navigation";
import FinancialExample from "./FinanceExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";

const ROW_HEIGHT = 40;

type FinancialExampleWrapperProps = {
  height?: string;
  themeOverride?: Theme;
};

const FinancialExampleWrapper = ({ height, themeOverride }: FinancialExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="FinanceExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/finance/FinanceExample.tsx"].url}
        Preview={() => (
          <FinancialExample height={height ? height : `${containerHeight}px`} theme={theme} />
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function FinancialExampleContainer(props: FinancialExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <FinancialExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
