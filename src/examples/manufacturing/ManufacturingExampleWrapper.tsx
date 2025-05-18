"use client";

import { useSearchParams } from "next/navigation";
import ManufacturingExample from "./ManufacturingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";

const ROW_HEIGHT = 40;

type ManufacturingExampleWrapperProps = {
  themeOverride?: Theme;
};

const ManufacturingExampleWrapper = ({ themeOverride }: ManufacturingExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "sky";
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
        Preview={() => <ManufacturingExample height={containerHeight} theme={theme} />}
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
