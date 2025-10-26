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

export const mobileCompatibilityReactTablesPost: BlogPostMetadata = {
  title: "Mobile-First React Tables: How Simple Table Achieves True Mobile Compatibility",
  description:
    "Discover how Simple Table solves mobile compatibility challenges in React data grids. Learn why traditional tables struggle on mobile and how touch-friendly design makes Simple Table the best mobile-first React table library.",
  slug: "mobile-compatibility-react-tables",
  tags: ["react", "mobile", "responsive", "touch", "mobile-first", "data-grid", "ux"],
  createdAt: "2025-10-19",
  updatedAt: "2025-10-19",
};

export const bestReactTableLibraries2025Post: BlogPostMetadata = {
  title: "Top React Table Libraries for 2025: Streamlining Data in Style",
  description:
    "Discover the best React table libraries in 2025. Compare Simple Table, TanStack Table, AG Grid, Handsontable, and more. Find the perfect solution for your project with detailed pros, cons, and use cases.",
  slug: "best-react-table-libraries-2025",
  tags: [
    "react",
    "table-libraries",
    "comparison",
    "2025",
    "data-grid",
    "react-table",
    "tanstack",
    "ag-grid",
    "handsontable",
  ],
  createdAt: "2025-10-07",
  updatedAt: "2025-10-07",
};

export const customFooterRenderersPost: BlogPostMetadata = {
  title: "Custom Footer Renderers: Why Full Control Beats Feature Flags in React Tables",
  description:
    "Discover why custom footer renderers are essential for React data grids. Learn how Simple Table's footerRenderer gives you complete control over pagination UI, avoiding the complexity of TanStack's approach and the limitations of rigid feature flags.",
  slug: "custom-footer-renderers-react-tables",
  tags: [
    "react",
    "footer-renderer",
    "customization",
    "pagination",
    "data-grid",
    "simple-table",
    "ui-components",
    "developer-experience",
  ],
  createdAt: "2025-10-25",
  updatedAt: "2025-10-25",
};

export const replicatingGojiberryUIPost: BlogPostMetadata = {
  title:
    "Replicating Gojiberry's Beautiful UI with Simple Table: The Ultimate Customization Showcase",
  description:
    "See how Simple Table perfectly replicates Gojiberry's stunning CRM interface with custom renderers, interactive components, and pixel-perfect design. Proof that Simple Table can handle any design you throw at it.",
  slug: "replicating-gojiberry-ui-simple-table",
  tags: [
    "react",
    "customization",
    "ui-replication",
    "crm",
    "data-grid",
    "cell-renderer",
    "custom-design",
    "gojiberry",
    "design-system",
  ],
  createdAt: "2025-10-26",
  updatedAt: "2025-10-26",
};

// Array of all blog posts using the individual objects
export const BLOG_POSTS: BlogPostMetadata[] = [
  replicatingGojiberryUIPost,
  customFooterRenderersPost,
  mobileCompatibilityReactTablesPost,
  bestReactTableLibraries2025Post,
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
