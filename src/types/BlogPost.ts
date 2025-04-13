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
  | "text";

export type BlogContentItem = {
  align?: "left" | "center" | "right";
  children?: BlogContentItem[];
  className?: string;
  code?: string;
  direction?: "vertical" | "horizontal";
  gutter?: [number, number];
  items?: string[];
  language?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  size?: "small" | "middle" | "large";
  span?: number;
  text?: string;
  textType?: "secondary" | "success" | "warning" | "danger";
  title?: string;
  type: BlogContentType;
  sections?: {
    title: string;
    items: string[];
  }[];
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
