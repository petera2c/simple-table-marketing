"use client";

import FinancialExample from "./FinanceExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 32;

type FinancialExampleWrapperProps = {
  height?: string;
  theme?: Theme;
};

const FinancialExampleWrapper = ({ height, theme }: FinancialExampleWrapperProps) => {
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
          <ExamplesWrapper>
            <FinancialExample height={height ? height : `${containerHeight}px`} theme={theme} />
          </ExamplesWrapper>
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
