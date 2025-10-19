import { faBox, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { useThemeContext } from "@/providers/ThemeProvider";
import { Theme } from "simple-table-core";

const LivePreview = ({
  demoCodeFilename,
  height = "auto",
  link,
  Preview,
}: {
  demoCodeFilename?: string;
  height?: string | number;
  link: string;
  Preview: ({ height, theme }: { height?: string | number; theme?: Theme }) => JSX.Element;
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { theme } = useThemeContext();

  return (
    <div className="flex flex-col gap-4 w-full flex-grow">
      <div style={{ height }}>
        {isCodeVisible ? (
          <CodeBlock className={`h-full`} demoCodeFilename={demoCodeFilename} />
        ) : (
          <Preview height={height} theme={theme} />
        )}
      </div>
      <div className="flex justify-end gap-2 w-full shrink-0">
        <Tooltip title={isCodeVisible ? "Show preview" : "Show code"}>
          <Button
            className="min-w-[120px]"
            icon={<FontAwesomeIcon icon={faCode} />}
            onClick={() => setIsCodeVisible(!isCodeVisible)}
          >
            {isCodeVisible ? "Preview" : "Code"}
          </Button>
        </Tooltip>
        <Tooltip title="Sandbox">
          <Button href={link} icon={<FontAwesomeIcon icon={faBox} />} target="_blank">
            CodeSandbox
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default LivePreview;
