import { faBox, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "antd";
import { useState } from "react";

const LivePreview = ({
  code,
  link,
  preview,
}: {
  code: React.ReactNode;
  link: string;
  preview: React.ReactNode;
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      {isCodeVisible ? code : preview}
      <div className="flex justify-end gap-2 w-full">
        <Tooltip title="Live code">
          <Button
            className="text-slate-700"
            icon={
              <FontAwesomeIcon icon={faCode} onClick={() => setIsCodeVisible(!isCodeVisible)} />
            }
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
