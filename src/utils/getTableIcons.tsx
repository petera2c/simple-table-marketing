import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faAngleLeft,
  faAngleRight,
  faSortDown,
  faSortUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import {
  ExpandMore as MuiExpandMore,
  ChevronRight as MuiChevronRight,
  UnfoldMore as MuiUnfoldMore,
  NavigateBefore as MuiNavigateBefore,
  NavigateNext as MuiNavigateNext,
  ArrowDownward as MuiArrowDownward,
  ArrowUpward as MuiArrowUpward,
  FilterList as MuiFilterList,
} from "@mui/icons-material";
import {
  DownOutlined as AntDownOutlined,
  RightOutlined as AntRightOutlined,
  UpOutlined as AntUpOutlined,
  LeftOutlined as AntLeftOutlined,
  CaretDownOutlined as AntCaretDownOutlined,
  CaretUpOutlined as AntCaretUpOutlined,
  FilterOutlined as AntFilterOutlined,
} from "@ant-design/icons";

export type IconLibrary = "default" | "fontawesome" | "mui" | "antd";

export interface TableIconsProps {
  expandIcon?: ReactNode;
  filterIcon?: ReactNode;
  headerCollapseIcon?: ReactNode;
  headerExpandIcon?: ReactNode;
  nextIcon?: ReactNode;
  prevIcon?: ReactNode;
  sortDownIcon?: ReactNode;
  sortUpIcon?: ReactNode;
}

/**
 * Get icon props for SimpleTable based on selected icon library
 * @param library - The icon library to use ('default' | 'fontawesome' | 'mui' | 'antd')
 * @returns Object with icon props for SimpleTable, or empty object for default
 */
export function getTableIcons(library: IconLibrary): TableIconsProps {
  if (library === "default") {
    // Return empty object to use Simple Table's default icons
    return {};
  }

  if (library === "fontawesome") {
    return {
      expandIcon: <FontAwesomeIcon icon={faChevronDown} />,
      filterIcon: <FontAwesomeIcon icon={faFilter} />,
      headerCollapseIcon: <FontAwesomeIcon icon={faChevronRight} />,
      headerExpandIcon: <FontAwesomeIcon icon={faChevronDown} />,
      nextIcon: <FontAwesomeIcon icon={faAngleRight} />,
      prevIcon: <FontAwesomeIcon icon={faAngleLeft} />,
      sortDownIcon: <FontAwesomeIcon icon={faSortDown} />,
      sortUpIcon: <FontAwesomeIcon icon={faSortUp} />,
    };
  }

  if (library === "mui") {
    return {
      expandIcon: <MuiExpandMore />,
      filterIcon: <MuiFilterList />,
      headerCollapseIcon: <MuiChevronRight />,
      headerExpandIcon: <MuiUnfoldMore />,
      nextIcon: <MuiNavigateNext />,
      prevIcon: <MuiNavigateBefore />,
      sortDownIcon: <MuiArrowDownward />,
      sortUpIcon: <MuiArrowUpward />,
    };
  }

  if (library === "antd") {
    return {
      expandIcon: <AntDownOutlined />,
      filterIcon: <AntFilterOutlined />,
      headerCollapseIcon: <AntRightOutlined />,
      headerExpandIcon: <AntDownOutlined />,
      nextIcon: <AntRightOutlined />,
      prevIcon: <AntLeftOutlined />,
      sortDownIcon: <AntCaretDownOutlined />,
      sortUpIcon: <AntCaretUpOutlined />,
    };
  }

  // Fallback to empty object
  return {};
}
