"use client";

import HRExample from "./HRExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";
import { useSearchParams } from "next/navigation";
import { IconLibrary, getTableIcons } from "@/utils/getTableIcons";

const ROW_HEIGHT = 48;

type HRExampleWrapperProps = {
  theme?: Theme;
};

const HRExampleWrapper = ({ theme }: HRExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const iconLibrary = (searchParams?.get("icons") as IconLibrary) || "default";
  const tableIcons = getTableIcons(iconLibrary);
  const containerHeight = useExampleHeight({
    isUsingPagination: true,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="HRExample.txt"
        link={SANDBOX_LIST["examples/hr/HRExample.tsx"].url}
        Preview={() => (
          <ExamplesWrapper>
            <HRExample
              height={containerHeight}
              rowHeight={ROW_HEIGHT}
              theme={theme}
              {...tableIcons}
            />
          </ExamplesWrapper>
        )}
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
