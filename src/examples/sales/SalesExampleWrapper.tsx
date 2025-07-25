"use client";

import SalesExample from "./SalesExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 32;

type SalesExampleWrapperProps = {
  onGridReady?: () => void;
  shouldPaginate?: boolean;
  theme?: Theme;
};

const SalesExampleWrapper = ({
  onGridReady,
  shouldPaginate = true,
  theme,
}: SalesExampleWrapperProps) => {
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
          <ExamplesWrapper>
            <SalesExample height={containerHeight} theme={theme} onGridReady={onGridReady} />
          </ExamplesWrapper>
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
