import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
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
  LeftOutlined as AntLeftOutlined,
  CaretDownOutlined as AntCaretDownOutlined,
  CaretUpOutlined as AntCaretUpOutlined,
  FilterOutlined as AntFilterOutlined,
} from "@ant-design/icons";
import type { ReactIconsConfig } from "@simple-table/react";

export type IconLibrary = "default" | "fontawesome" | "mui" | "antd";

export function getTableIcons(library: IconLibrary): ReactIconsConfig {
  if (library === "default") {
    return {};
  }

  if (library === "fontawesome") {
    return {
      expand: <FontAwesomeIcon icon={faChevronDown} />,
      filter: <FontAwesomeIcon icon={faFilter} />,
      headerCollapse: <FontAwesomeIcon icon={faChevronRight} />,
      headerExpand: <FontAwesomeIcon icon={faChevronDown} />,
      next: <FontAwesomeIcon icon={faAngleRight} />,
      prev: <FontAwesomeIcon icon={faAngleLeft} />,
      sortDown: <FontAwesomeIcon icon={faSortDown} />,
      sortUp: <FontAwesomeIcon icon={faSortUp} />,
    };
  }

  if (library === "mui") {
    return {
      expand: <MuiExpandMore />,
      filter: <MuiFilterList />,
      headerCollapse: <MuiChevronRight />,
      headerExpand: <MuiUnfoldMore />,
      next: <MuiNavigateNext />,
      prev: <MuiNavigateBefore />,
      sortDown: <MuiArrowDownward />,
      sortUp: <MuiArrowUpward />,
    };
  }

  if (library === "antd") {
    return {
      expand: <AntDownOutlined />,
      filter: <AntFilterOutlined />,
      headerCollapse: <AntRightOutlined />,
      headerExpand: <AntDownOutlined />,
      next: <AntRightOutlined />,
      prev: <AntLeftOutlined />,
      sortDown: <AntCaretDownOutlined />,
      sortUp: <AntCaretUpOutlined />,
    };
  }

  return {};
}
