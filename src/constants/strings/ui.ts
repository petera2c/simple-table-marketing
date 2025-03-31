export const UI_STRINGS = {
  common: {
    liveDemo: "See the Magic ✨",
    getStarted: "Let's Build Something Amazing",
    download: "Download",
    settings: "Settings",
    preview: "Preview",
    theme: "Theme",
  },
  home: {
    hero: {
      title: "Simple Table",
      subtitle: "The table of your dreams (yes, we know you dream about tables)",
    },
    features: {
      highlyCustomizable: {
        title: "Highly Customizable",
        description: "More customizable than your coffee order at that fancy café",
      },
      cellEditing: {
        title: "Cell Editing",
        description: "Edit cells faster than your manager can say 'spreadsheet'",
      },
      columnManagement: {
        title: "Column Management",
        description: "Drag, drop, and organize like a data Marie Kondo",
      },
      pagination: {
        title: "Pagination",
        description: "Navigate through data smoother than your social media feed",
      },
      infiniteScroll: {
        title: "Infinite Scroll",
        description: "Like TikTok, but for your business data (and actually productive)",
      },
      performanceOptimized: {
        title: "Performance Optimized",
        description: "Faster than your coworker's excuse for missing the deadline",
      },
    },
    funFacts: {
      title: "Why Simple Table?",
      facts: [
        "Built by developers who actually use tables (shocking, we know)",
        "Zero table flipping incidents reported",
        "Makes Excel users question their life choices",
        "More reliable than your project estimates",
      ],
    },
  },
  docs: {
    title: "Simple Table",
    cssSetup: {
      title: "CSS Styles Setup",
      description:
        "For Simple Table to function correctly, you need to import the package's CSS styles in your application (don't worry, it's easier than assembling IKEA furniture):",
      note: "This import provides all the necessary styling for the table components. Copy-paste this and you're halfway to impressing your boss!",
    },
    discord: {
      text: "Got questions? Want to share your table success story? Join us on Discord",
      link: "https://discord.gg/RvKHCfg3PC",
    },
    buttons: {
      npmPackage: "NPM Package (It's Free! 🎉)",
      joinDiscord: "Join the Table Talk",
      github: "Star Us on GitHub ⭐",
    },
    sections: {
      installation: "Quick Start (No PhD Required)",
      props: "Props (The Good Stuff)",
      styles: "Make It Pretty",
      license: "The Legal Bits",
    },
  },
  themeBuilder: {
    title: "Theme Builder",
    subtitle: "Make your table so beautiful, it belongs in a museum",
    sections: {
      settings: "The Control Room",
      livePreview: "Watch the Magic Happen",
    },
    categories: {
      colors: "Pick Your Colors",
      spacing: "Space It Out",
      typography: "Font Stuff",
      effects: "Extra",
    },
    subcategories: {
      tableStructure: "The Skeleton",
      button: "Clickable Things",
      cell: "Cell Style (Not the Biology Kind)",
      selection: "Selection Highlights",
      checkbox: "Checkboxes",
      editor: "Editor Magic",
      interactiveElements: "The Fun Parts",
      background: "The Canvas",
    },
  },
  notFound: {
    title: "404 - Table Not Found",
    subtitle: "Looks like this table got flipped! 🙃",
    messages: [
      "Even the best tables sometimes go missing...",
      "Have you tried turning it off and on again?",
      "This is not the table you're looking for 👋",
      "Error 404: Table manners not found",
    ],
    cta: {
      text: "Let's get you back to some actual tables",
      buttonText: "Take Me Home 🏠",
    },
  },
} as const;
