import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ExpandableSectionProps {
  title: string;
  icon?: IconDefinition;
  expanded: boolean;
  onToggle: () => void;
  iconClassName?: string;
  children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  icon,
  expanded,
  onToggle,
  iconClassName = "text-blue-500",
  children,
}) => {
  return (
    <div className="py-1 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100"
      >
        <span className="flex items-center gap-2">
          {icon && <FontAwesomeIcon icon={icon} className={iconClassName} />}
          {title}
        </span>
        <FontAwesomeIcon icon={expanded ? faChevronDown : faChevronRight} className="text-gray-400" />
      </button>

      {expanded && <div className="mt-1 ml-3 border-l-2 border-gray-100 pl-4 pr-2">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
