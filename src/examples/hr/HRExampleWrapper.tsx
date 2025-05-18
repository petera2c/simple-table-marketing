"use client";

import { useSearchParams } from "next/navigation";
import HRExample from "./HRExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";

const ROW_HEIGHT = 40;

type HRExampleWrapperProps = {
  themeOverride?: Theme;
};

const HRExampleWrapper = ({ themeOverride }: HRExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const theme = themeOverride || (searchParams.get("theme") as Theme) || "light";

  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="HRExample.txt"
        link={SANDBOX_LIST["examples/hr/HRExample.tsx"].url}
        Preview={() => <HRExample height={containerHeight} rowHeight={ROW_HEIGHT} theme={theme} />}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function HRExampleContainer(props: HRExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <HRExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
