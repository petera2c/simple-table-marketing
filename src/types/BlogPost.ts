type BlogContentType =
  | "title"
  | "paragraph"
  | "list"
  | "card"
  | "section"
  | "row"
  | "col"
  | "codeBlock"
  | "space"
  | "text"
  | "divider"
  | "alert"
  | "table"
  | "tag"
  | "button"
  | "icon"
  | "progressBar"
  | "heroSection"
  | "callToAction"
  | "featureItem"
  | "container";

export type BlogContentItem = {
  align?: "left" | "center" | "right";
  alertType?: "success" | "info" | "warning" | "error";
  barClassName?: string;
  block?: boolean;
  bordered?: boolean;
  buttonType?: "primary" | "dashed" | "link" | "text" | "default";
  children?: BlogContentItem[];
  className?: string;
  code?: string;
  colorClassName?: string;
  columns?: any[];
  dataSource?: any[];
  description?: string;
  descriptionClassName?: string;
  direction?: "vertical" | "horizontal";
  ghost?: boolean;
  gutter?: [number, number] | number;
  headStyle?: React.CSSProperties;
  href?: string;
  icon?: BlogContentItem | string;
  iconClassName?: string;
  iconType?: "antd" | "fontAwesome";
  id?: string;
  isNextLink?: boolean;
  items?: string[];
  language?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  message?: string;
  name?: string;
  onClick?: () => void;
  pagination?: boolean | object;
  percentage?: string;
  preClassName?: string;
  rowClassName?: string;
  scroll?: { x?: string | number | true; y?: string | number };
  sections?: {
    title: string;
    items: string[];
  }[];
  showIcon?: boolean;
  size?: "small" | "middle" | "large";
  span?: number;
  strong?: boolean;
  style?: React.CSSProperties;
  target?: string;
  text?: string;
  textType?: "secondary" | "success" | "warning" | "danger";
  title?: string | null;
  titleContent?: BlogContentItem;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  type: BlogContentType;
  wrapperClassName?: string;
  // Responsive column widths
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  metadata: {
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      type: "article";
      publishedTime: string;
      authors: string[];
    };
    twitter: {
      card: "summary_large_image";
      title: string;
      description: string;
    };
  };
  content: BlogContentItem[];
};
