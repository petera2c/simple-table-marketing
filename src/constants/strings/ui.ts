export const UI_STRINGS = {
  common: {
    liveDemo: "Live Demo",
    getStarted: "Get Started",
    download: "Download",
    settings: "Settings",
    preview: "Preview",
    theme: "Theme",
  },
  home: {
    hero: {
      title: "Simple Table",
      subtitle:
        "A powerful yet lightweight React grid component that brings beautiful data visualization to your applications",
    },
    features: {
      highlyCustomizable: {
        title: "Highly Customizable",
        description: "Fully customizable appearance with CSS variables and themes",
      },
      cellEditing: {
        title: "Cell Editing",
        description: "Built-in support for editable cells with controlled state",
      },
      columnManagement: {
        title: "Column Management",
        description: "Resize, reorder, pin, and hide columns with intuitive UI",
      },
      pagination: {
        title: "Pagination",
        description: "Built-in pagination with customizable controls",
      },
      infiniteScroll: {
        title: "Infinite Scroll",
        description: "Alternative to pagination for large datasets",
      },
      performanceOptimized: {
        title: "Performance Optimized",
        description: "Efficiently renders thousands of rows and columns",
      },
    },
  },
  docs: {
    title: "Simple Table",
    cssSetup: {
      title: "CSS Styles Setup",
      description:
        "For Simple Table to function correctly, you need to import the package's CSS styles in your application:",
      note: "This import provides all the necessary styling for the table components and should be included in your main CSS file.",
    },
    discord: {
      text: "Any questions, support or features requests join me on Discord",
      link: "https://discord.gg/RvKHCfg3PC",
    },
    buttons: {
      npmPackage: "NPM Package",
      joinDiscord: "Join Discord",
      github: "GitHub",
    },
    sections: {
      installation: "Installation",
      props: "Props",
      styles: "Customizable Styles",
      license: "License",
    },
  },
  themeBuilder: {
    title: "Theme Builder",
    sections: {
      settings: "Settings",
      livePreview: "Live Preview",
    },
    categories: {
      colors: "Colors",
      spacing: "Spacing",
      typography: "Typography",
      effects: "Effects",
    },
    subcategories: {
      tableStructure: "Table Structure",
      button: "Button",
      cell: "Cell",
      selection: "Selection",
      checkbox: "Checkbox",
      editor: "Editor",
      interactiveElements: "Interactive Elements",
      background: "Background",
    },
  },
} as const;
