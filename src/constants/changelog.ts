export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "bugfix" | "breaking";
    description: string;
    link?: string;
  }[];
}

// Individual changelog entries
export const v1_4_6: ChangelogEntry = {
  version: "1.4.6",
  date: "2025-10-19",
  title: "New Frost Theme",
  description:
    "Introducing a fresh, modern Frost theme with cool blue tones and improved visual aesthetics.",
  changes: [
    {
      type: "feature",
      description: "Added new Frost theme with cool blue tones and modern design",
      link: "/docs/themes",
    },
  ],
};

export const v1_4_4: ChangelogEntry = {
  version: "1.4.4",
  date: "2025-10-15",
  title: "Collapsible Columns Enhancement",
  description:
    "Enhanced collapsible columns with new ShowWhen attribute for better control over column visibility.",
  changes: [
    {
      type: "feature",
      description:
        'collapsible columns new ShowWhen attribute: "parentCollapsed" | "parentExpanded" | "always"',
      link: "/docs/collapsible-columns",
    },
    {
      type: "breaking",
      description: "Removed summaryColumn attribute (replaced by showWhen)",
      link: "/docs/collapsible-columns",
    },
  ],
};

// Array of all changelog entries (newest first)
export const CHANGELOG_ENTRIES: ChangelogEntry[] = [v1_4_6, v1_4_4];

// Helper function to get changelog entry by version
export const getChangelogByVersion = (version: string): ChangelogEntry | undefined => {
  return CHANGELOG_ENTRIES.find((entry) => entry.version === version);
};

// Helper function to get latest changelog entry
export const getLatestChangelog = (): ChangelogEntry => {
  return CHANGELOG_ENTRIES[0];
};

// Helper function to get change type label
export const getChangeTypeLabel = (
  type: "feature" | "improvement" | "bugfix" | "breaking"
): string => {
  const labels = {
    feature: "New Feature",
    improvement: "Improvement",
    bugfix: "Bug Fix",
    breaking: "Breaking Change",
  };
  return labels[type];
};

// Helper function to get change type color
export const getChangeTypeColor = (
  type: "feature" | "improvement" | "bugfix" | "breaking"
): { bg: string; text: string; darkBg: string; darkText: string } => {
  const colors = {
    feature: {
      bg: "bg-green-100",
      text: "text-green-800",
      darkBg: "dark:bg-green-900/30",
      darkText: "dark:text-green-400",
    },
    improvement: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-900/30",
      darkText: "dark:text-blue-400",
    },
    bugfix: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      darkBg: "dark:bg-orange-900/30",
      darkText: "dark:text-orange-400",
    },
    breaking: {
      bg: "bg-red-100",
      text: "text-red-800",
      darkBg: "dark:bg-red-900/30",
      darkText: "dark:text-red-400",
    },
  };
  return colors[type];
};
