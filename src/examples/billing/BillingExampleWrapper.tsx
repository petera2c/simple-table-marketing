"use client";

import BillingExample from "./BillingExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import ExamplesWrapper from "../ExamplesWrapper";
import { getTableIcons } from "@/utils/getTableIcons";
import { useExamplesContext } from "@/providers/ExamplesProvider";
import ExampleControls from "@/components/ExampleControls";

const ROW_HEIGHT = 40;

type BillingExampleWrapperProps = {
  onGridReady?: () => void;
  theme?: Theme;
};

export default function BillingExampleWrapper({ onGridReady, theme }: BillingExampleWrapperProps) {
  const { currentTheme, currentIconLibrary } = useExamplesContext();
  const selectedTheme = (currentTheme as Theme) || theme;
  const tableIcons = getTableIcons(currentIconLibrary);
  
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <LivePreview
      demoCodeFilename="BillingExample.txt"
      height={`${containerHeight}px`}
      link={SANDBOX_LIST["examples/billing/BillingExample.tsx"].url}
      selectedTheme={selectedTheme}
      titleRenderer={({ codeButton, sandboxButton }) => (
        <ExampleControls codeButton={codeButton} sandboxButton={sandboxButton} />
      )}
      Preview={() => (
        <ExamplesWrapper>
          <BillingExample
            height={containerHeight}
            onGridReady={onGridReady}
            theme={selectedTheme}
            {...tableIcons}
          />
        </ExamplesWrapper>
      )}
    />
  );
}
