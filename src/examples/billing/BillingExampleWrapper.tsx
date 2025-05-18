"use client";

import { useSearchParams } from "next/navigation";
import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";

const ROW_HEIGHT = 40;

type BillingExampleWrapperProps = {
  onGridReady?: () => void;
  themeOverride?: Theme;
};

const BillingExampleWrapper = ({ onGridReady, themeOverride }: BillingExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "dark";
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
        <BillingExample height={containerHeight} onGridReady={onGridReady} theme={theme} />
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
