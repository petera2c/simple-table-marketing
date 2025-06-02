export interface BlogPostMetadata {
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
      type: string;
      publishedTime: string;
      authors: string[];
    };
    twitter: {
      card: string;
      title: string;
      description: string;
    };
  };
}

export const BLOG_POSTS: BlogPostMetadata[] = [
  {
    title: "Why I Built Simple Table: A Free Alternative to AG Grid's $1,000 Fees",
    description:
      "Discover why I created Simple Table—a lightweight React data grid—as a free alternative to AG Grid, TanStack, and Handsontable, and how it solves common developer pain points.",
    slug: "free-alternative-to-ag-grid",
    tags: ["react", "data-grid", "ag-grid-alternative", "free-table"],
    createdAt: "2025-06-01",
    updatedAt: "2025-06-01",
    metadata: {
      keywords: [
        "react-table",
        "react-grid",
        "data-grid",
        "simple-table",
        "ag-grid alternative",
        "free react table",
        "tanstack table",
        "handsontable",
      ],
      openGraph: {
        title: "Why I Built Simple Table: A Free Alternative to AG Grid's $1,000 Fees",
        description:
          "Learn why I created Simple Table—a 16 kB React data grid—to solve the cost and usability issues of AG Grid, TanStack, and Handsontable.",
        type: "article",
        publishedTime: "2025-06-01",
        authors: ["Simple Table Team"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Why I Built Simple Table: A Free Alternative to AG Grid's $1,000 Fees",
        description:
          "Learn why I created Simple Table—a 16 kB React data grid—to solve the cost and usability issues of AG Grid, TanStack, and Handsontable.",
      },
    },
  },
  {
    title: "Handling 1,000,000 Rows with Simple Table: The Lightweight React Grid",
    description:
      "Discover how Simple Table efficiently handles massive datasets while maintaining exceptional performance and responsiveness in your React applications.",
    slug: "handling-one-million-rows",
    tags: ["performance", "large-datasets", "react", "data-grid"],
    createdAt: "2025-05-08",
    updatedAt: "2025-05-08",
    metadata: {
      keywords: [
        "react table",
        "large datasets",
        "data grid",
        "performance",
        "virtualization",
        "million rows",
        "simple table",
        "react",
      ],
      openGraph: {
        title: "Handling 1,000,000 Rows with Simple Table: The Lightweight React Grid",
        description:
          "Learn how Simple Table efficiently handles millions of rows with virtualization and optimized rendering.",
        type: "article",
        publishedTime: "2025-05-08",
        authors: ["Simple Table Team"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Handling 1,000,000 Rows with Simple Table: The Lightweight React Grid",
        description:
          "Learn how Simple Table efficiently handles millions of rows with virtualization and optimized rendering.",
      },
    },
  },
  {
    title: "Customizing Data Grids in React: Why Simple Table Makes Styling Easy",
    description:
      "Learn how Simple Table solves styling struggles and makes it easy to create a data grid that fits your app perfectly with CSS variables and customizable themes.",
    slug: "customizing-data-grids-styling-easy",
    tags: ["react", "styling", "css", "themes"],
    createdAt: "2025-06-01",
    updatedAt: "2025-06-01",
    metadata: {
      keywords: [
        "react table styling",
        "css variables",
        "table themes",
        "simple table",
        "handsontable styling",
        "react data grid",
        "css customization",
      ],
      openGraph: {
        title: "Customizing Data Grids in React: Why Simple Table Makes Styling Easy",
        description:
          "Learn how Simple Table solves styling struggles with CSS variables and customizable themes.",
        type: "article",
        publishedTime: "2025-06-01",
        authors: ["Simple Table Team"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Customizing Data Grids in React: Why Simple Table Makes Styling Easy",
        description:
          "Learn how Simple Table solves styling struggles with CSS variables and customizable themes.",
      },
    },
  },
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostMetadata | undefined => {
  return BLOG_POSTS.find((post) => post.slug === slug);
};

// Helper function to search blog posts
export const searchBlogPosts = (query: string): BlogPostMetadata[] => {
  const lowercaseQuery = query.toLowerCase();
  return BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.metadata.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery))
  );
};
