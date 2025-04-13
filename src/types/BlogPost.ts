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
  type: BlogContentType;
  className?: string;
  children?: BlogContentItem[];
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  items?: string[];
  title?: string;
  gutter?: [number, number];
  span?: number;
  code?: string;
  language?: string;
  direction?: "vertical" | "horizontal";
  size?: "small" | "middle" | "large";
  textType?: "secondary" | "success" | "warning" | "danger";
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
