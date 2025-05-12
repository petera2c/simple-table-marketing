import { faBox, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

const LivePreview = ({
  demoCodeFilename,
  height = "400px",
  link,
  Preview,
}: {
  demoCodeFilename?: string;
  height?: string;
  link: string;
  Preview: ({ height }: { height?: string }) => JSX.Element;
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full flex-grow">
      <div style={{ height }}>
        {isCodeVisible ? (
          <CodeBlock className={`h-full`} demoCodeFilename={demoCodeFilename} />
        ) : (
          <Preview height={height} />
        )}
      </div>
      <div className="flex justify-end gap-2 w-full shrink-0">
        <Tooltip title={isCodeVisible ? "Show preview" : "Show code"}>
          <Button
            className="text-slate-700"
            icon={<FontAwesomeIcon icon={faCode} />}
            onClick={() => setIsCodeVisible(!isCodeVisible)}
          />
        </Tooltip>
        <Tooltip title="Sandbox">
          <Button
            className="text-slate-700"
            href={link}
            icon={<FontAwesomeIcon icon={faBox} />}
            target="_blank"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default LivePreview;
