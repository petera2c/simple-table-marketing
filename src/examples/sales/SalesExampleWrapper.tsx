"use client";

import { useSearchParams } from "next/navigation";
import SalesExample from "./SalesExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";

const ROW_HEIGHT = 40;

type SalesExampleWrapperProps = {
  onGridReady?: () => void;
  shouldPaginate?: boolean;
  themeOverride?: Theme;
};

const SalesExampleWrapper = ({
  onGridReady,
  shouldPaginate = true,
  themeOverride,
}: SalesExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="SalesExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/sales/SalesExample.tsx"].url}
        Preview={() => (
          <SalesExample height={containerHeight} theme={theme} onGridReady={onGridReady} />
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function SalesExampleContainer(props: SalesExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <SalesExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
