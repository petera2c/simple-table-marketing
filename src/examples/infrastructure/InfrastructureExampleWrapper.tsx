"use client";

import InfrastructureExample from "./InfrastructureExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import ExamplesWrapper from "../ExamplesWrapper";
import { getTableIcons } from "@/utils/getTableIcons";
import { useExamplesContext } from "@/providers/ExamplesProvider";
import ExampleControls from "@/components/ExampleControls";

const ROW_HEIGHT = 32;

type InfrastructureExampleWrapperProps = {
  height?: string | number;
  theme?: Theme;
};

export default function InfrastructureExampleWrapper({
  height,
  theme,
}: InfrastructureExampleWrapperProps) {
  const { currentTheme, currentIconLibrary } = useExamplesContext();
  const selectedTheme = (currentTheme as Theme) || theme;
  const tableIcons = getTableIcons(currentIconLibrary);
  
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });

  return (
    <LivePreview
      demoCodeFilename="InfrastructureExample.txt"
      height={`${containerHeight}px`}
      link={SANDBOX_LIST["examples/infrastructure/InfrastructureExample.tsx"].url}
      selectedTheme={selectedTheme}
      titleRenderer={({ codeButton, sandboxButton }) => (
        <ExampleControls codeButton={codeButton} sandboxButton={sandboxButton} />
      )}
      Preview={() => (
        <ExamplesWrapper>
          <InfrastructureExample
            height={height ? height : `${containerHeight}px`}
            theme={selectedTheme}
            {...tableIcons}
          />
        </ExamplesWrapper>
      )}
    />
  );
}
