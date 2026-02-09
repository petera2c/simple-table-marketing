import { faBox, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "antd";
import { ReactNode, useState } from "react";
import CodeBlock from "./CodeBlock";
import { useThemeContext } from "@/providers/ThemeProvider";
import PageWrapper from "./PageWrapper";
import { ThemeOption } from "@/types/theme";

interface LivePreviewProps {
  demoCodeFilename?: string;
  height?: string | number;
  link: string;
  Preview: ({ height, theme }: { height?: string | number; theme?: ThemeOption }) => JSX.Element;
  demoHeight?: string | number;
  selectedTheme?: ThemeOption;
  titleRenderer?: (buttons: { codeButton: ReactNode; sandboxButton: ReactNode }) => ReactNode;
}

const LivePreview = ({
  demoCodeFilename,
  height = "auto",
  link,
  Preview,
  demoHeight,
  selectedTheme,
  titleRenderer,
}: LivePreviewProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { theme: contextTheme } = useThemeContext();

  const currentTheme = selectedTheme || contextTheme;

  const codeButton = (
    <Tooltip title={isCodeVisible ? "Show preview" : "Show code"}>
      <Button
        className="min-w-[120px]"
        icon={<FontAwesomeIcon icon={faCode} />}
        onClick={() => setIsCodeVisible(!isCodeVisible)}
      >
        {isCodeVisible ? "Preview" : "Code"}
      </Button>
    </Tooltip>
  );

  const sandboxButton = (
    <Tooltip title="Sandbox">
      <Button href={link} icon={<FontAwesomeIcon icon={faBox} />} target="_blank">
        CodeSandbox
      </Button>
    </Tooltip>
  );

  return (
    <PageWrapper>
      <div className="flex flex-col gap-2 w-full flex-grow">
        {titleRenderer && titleRenderer({ codeButton, sandboxButton })}

        <div style={{ height }}>
          {isCodeVisible ? (
            <CodeBlock className={`h-full`} demoCodeFilename={demoCodeFilename} />
          ) : (
            <Preview height={demoHeight || height} theme={currentTheme} />
          )}
        </div>

        {!titleRenderer && (
          <div className="flex justify-end gap-2 w-full shrink-0">
            {codeButton}
            {sandboxButton}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default LivePreview;
