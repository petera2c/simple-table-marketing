"use client";

import InfrastructureExample from "./InfrastructureExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";

const ROW_HEIGHT = 32;

type InfrastructureExampleWrapperProps = {
  height?: string | number;
  theme?: Theme;
};

const InfrastructureExampleWrapper = ({ height, theme }: InfrastructureExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="InfrastructureExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/infrastructure/InfrastructureExample.tsx"].url}
        Preview={() => (
          <ExamplesWrapper>
            <InfrastructureExample
              height={height ? height : `${containerHeight}px`}
              theme={theme}
            />
          </ExamplesWrapper>
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function InfrastructureExampleContainer(props: InfrastructureExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <InfrastructureExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
