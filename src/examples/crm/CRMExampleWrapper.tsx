"use client";

import CRMExample from "./CRMExample";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import LivePreview from "@/components/LivePreview";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";
import { ThemeOption } from "@/types/theme";

/* @import url("https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"); */
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const ROW_HEIGHT = 60;

type CRMExampleWrapperProps = {
  onGridReady?: () => void;
  shouldPaginate?: boolean;
  theme?: ThemeOption;
};

const CRMExampleWrapper = ({
  onGridReady,
  shouldPaginate = true,
  theme,
}: CRMExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: shouldPaginate,
    rowHeight: ROW_HEIGHT,
  });

  // Map any theme to custom-light or custom-dark
  const crmTheme: "custom-light" | "custom-dark" =
    theme === "custom-dark" ? "custom-dark" : "custom-light";

  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="CRMExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/crm/CRMExample.tsx"].url}
        Preview={() => (
          <div className={plusJakartaSans.className}>
            <ExamplesWrapper>
              <CRMExample height={containerHeight} theme={crmTheme} onGridReady={onGridReady} />
            </ExamplesWrapper>
          </div>
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function CRMExampleContainer(props: CRMExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <CRMExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
