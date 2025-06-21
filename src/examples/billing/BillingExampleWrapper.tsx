"use client";

import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 40;

type BillingExampleWrapperProps = {
  onGridReady?: () => void;
  theme?: Theme;
};

const BillingExampleWrapper = ({ onGridReady, theme }: BillingExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <LivePreview
      demoCodeFilename="BillingExample.txt"
      height={`${containerHeight}px`}
      link={SANDBOX_LIST["examples/billing/BillingExample.tsx"].url}
      Preview={() => (
        <ExamplesWrapper>
          <BillingExample height={containerHeight} onGridReady={onGridReady} theme={theme} />
        </ExamplesWrapper>
      )}
    />
  );
};

export default function BillingExampleContainer(props: BillingExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <BillingExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
