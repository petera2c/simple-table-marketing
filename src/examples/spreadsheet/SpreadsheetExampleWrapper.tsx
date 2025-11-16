"use client";

import SpreadsheetExample from "./SpreadsheetExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";
import { useSearchParams } from "next/navigation";
import { IconLibrary, getTableIcons } from "@/utils/getTableIcons";

const ROW_HEIGHT = 24;

type SpreadsheetExampleWrapperProps = {
  onGridReady?: () => void;
  theme?: Theme;
  rowCount?: number;
};

const SpreadsheetExampleWrapper = ({
  onGridReady,
  theme,
  rowCount,
}: SpreadsheetExampleWrapperProps) => {
  const searchParams = useSearchParams();
  const iconLibrary = (searchParams?.get("icons") as IconLibrary) || "default";
  const tableIcons = getTableIcons(iconLibrary);
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <LivePreview
      demoCodeFilename="SpreadsheetExample.txt"
      height={`${containerHeight}px`}
      link={SANDBOX_LIST["examples/spreadsheet/SpreadsheetExample.tsx"].url}
      Preview={() => (
        <ExamplesWrapper>
          <SpreadsheetExample
            height={containerHeight}
            onGridReady={onGridReady}
            rowCount={rowCount}
            theme={theme}
            {...tableIcons}
          />
        </ExamplesWrapper>
      )}
    />
  );
};

export default function SpreadsheetExampleContainer(props: SpreadsheetExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <SpreadsheetExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
