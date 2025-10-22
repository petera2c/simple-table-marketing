"use client";

import LeadsExample from "./LeadsExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 60;

type LeadsExampleWrapperProps = {
  onGridReady?: () => void;
  shouldPaginate?: boolean;
  theme?: Theme;
};

const LeadsExampleWrapper = ({
  onGridReady,
  shouldPaginate = true,
  theme,
}: LeadsExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="LeadsExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/leads/LeadsExample.tsx"].url}
        Preview={() => (
          <ExamplesWrapper>
            <LeadsExample height={containerHeight} theme={theme} onGridReady={onGridReady} />
          </ExamplesWrapper>
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function LeadsExampleContainer(props: LeadsExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <LeadsExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
