export interface BlogPostMetadata {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// Individual blog post objects that can be reused
export const freeAlternativeToAgGridPost: BlogPostMetadata = {
  title: "Why I Built Simple Table: A Free Alternative to AG Grid's $1,000 Fees",
  description:
    "Discover why I created Simple Table—a lightweight React data grid—as a free alternative to AG Grid, TanStack, and Handsontable, and how it solves common developer pain points.",
  slug: "free-alternative-to-ag-grid",
  tags: ["react", "data-grid", "ag-grid-alternative", "free-table"],
  createdAt: "2025-06-01",
  updatedAt: "2025-06-01",
};

export const handlingOneMillionRowsPost: BlogPostMetadata = {
  title: "Handling 1,000,000 Rows with Simple Table: The Lightweight React Grid",
  description:
    "Discover how Simple Table efficiently handles massive datasets while maintaining exceptional performance and responsiveness in your React applications.",
  slug: "handling-one-million-rows",
  tags: ["performance", "large-datasets", "react", "data-grid"],
  createdAt: "2025-05-08",
  updatedAt: "2025-05-08",
};

export const customizingDataGridsStylingEasyPost: BlogPostMetadata = {
  title: "Customizing Data Grids in React: Why Simple Table Makes Styling Easy",
  description:
    "Learn how Simple Table solves styling struggles and makes it easy to create a data grid that fits your app perfectly with CSS variables and customizable themes.",
  slug: "customizing-data-grids-styling-easy",
  tags: ["react", "styling", "css", "themes"],
  createdAt: "2025-06-01",
  updatedAt: "2025-06-01",
};

export const nestedHeadersReactTablesPost: BlogPostMetadata = {
  title: "Nested Headers in React: How Simple Table Simplifies Complex Tables",
  description:
    "Learn how to create hierarchical column structures with nested headers in React using Simple Table, making complex data organization intuitive and accessible.",
  slug: "nested-headers-react-tables",
  tags: ["react", "nested-headers", "complex-tables", "data-organization"],
  createdAt: "2025-06-01",
  updatedAt: "2025-06-01",
};

export const bestFreeReactDataGridPost: BlogPostMetadata = {
  title: "Best Free React Data Grid: Why Simple Table Stands Out in 2025",
  description:
    "Discover why Simple Table is the best free React data grid in 2025. Compare features, performance, and ease of use against popular alternatives like AG Grid, TanStack Table, and Material-UI.",
  slug: "best-free-react-data-grid-2025",
  tags: ["react", "data-grid", "free", "2025", "comparison", "best-practices"],
  createdAt: "2025-06-21",
  updatedAt: "2025-06-21",
};

export const customizingReactTableLookPost: BlogPostMetadata = {
  title: "Customizing Your React Table Look with Simple Table's Themes",
  description:
    "Master the art of React table customization with Simple Table's powerful theming system. Learn how CSS variables, built-in themes, and custom renderers make styling effortless.",
  slug: "customizing-react-table-look-simple-table-themes",
  tags: ["react", "themes", "customization", "css-variables", "styling", "design"],
  createdAt: "2025-06-30",
  updatedAt: "2025-06-30",
};

// Array of all blog posts using the individual objects
export const BLOG_POSTS: BlogPostMetadata[] = [
  customizingReactTableLookPost,
  bestFreeReactDataGridPost,
  freeAlternativeToAgGridPost,
  handlingOneMillionRowsPost,
  customizingDataGridsStylingEasyPost,
  nestedHeadersReactTablesPost,
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
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
