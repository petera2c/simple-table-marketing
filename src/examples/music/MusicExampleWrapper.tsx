"use client";

import MusicExample from "./MusicExample";
import { Theme } from "simple-table-core";
import { useExampleHeight } from "@/hooks/useExampleHeight";
import SANDBOX_LIST from "@/constants/codesandbox-list.json";
import LivePreview from "@/components/LivePreview";
import SearchParamsSuspenseWrapper from "@/components/SearchParamsSuspenseWrapper";
import ExamplesWrapper from "../ExamplesWrapper";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ROW_HEIGHT = 64; // Taller rows for the artist cards

type MusicExampleWrapperProps = {
  height?: string | number;
  theme?: Theme;
};

const MusicExampleWrapper = ({ height, theme }: MusicExampleWrapperProps) => {
  const containerHeight = useExampleHeight({
    isUsingPagination: false,
    rowHeight: ROW_HEIGHT,
  });
  return (
    <SearchParamsSuspenseWrapper>
      <LivePreview
        demoCodeFilename="MusicExample.txt"
        height={`${containerHeight}px`}
        link={SANDBOX_LIST["examples/music/MusicExample.tsx"].url}
        Preview={() => (
          <ExamplesWrapper>
            <div className={inter.className}>
              <MusicExample height={height ? height : `${containerHeight}px`} theme={theme} />
            </div>
          </ExamplesWrapper>
        )}
      />
    </SearchParamsSuspenseWrapper>
  );
};

export default function MusicExampleContainer(props: MusicExampleWrapperProps) {
  return (
    <SearchParamsSuspenseWrapper>
      <MusicExampleWrapper {...props} />
    </SearchParamsSuspenseWrapper>
  );
}
