"use client";

import ManufacturingExample from "./ManufacturingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 32;

type ManufacturingExampleWrapperProps = {
  theme?: Theme;
};

const ManufacturingExampleWrapper = ({ theme }: ManufacturingExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="ManufacturingExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/manufacturing/ManufacturingExample.tsx"].url}
        Preview={() => (
          <ExamplesWrapper>
            <ManufacturingExample height={containerHeight} theme={theme} />
          </ExamplesWrapper>
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function ManufacturingExampleContainer(props: ManufacturingExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <ManufacturingExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
