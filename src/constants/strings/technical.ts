export const TECHNICAL_STRINGS = {
  installation: {
    npm: "npm install simple-table-core",
    yarn: "yarn add simple-table-core",
    pnpm: "pnpm add simple-table-core",
  },
  css: {
    import: `// In your JavaScript or TypeScript file
import "simple-table-core/styles.css";`,
    themeVariables: {
      light: `/* light theme */
.theme-custom {
  --st-border-radius: 4px;
  --st-border-width: 1px;
  --st-cell-padding: 8px;
  --st-font-size: 0.875rem;
  --st-font-weight-normal: 400;
  --st-font-weight-bold: 600;
  --st-transition-duration: 0.2s;
  --st-transition-ease: ease;
  --st-opacity-disabled: 0.5;
  --st-spacing-small: 4px;
  --st-spacing-medium: 8px;
  --st-spacing-large: 16px;
  --st-scrollbar-bg-color: transparent;
  --st-scrollbar-thumb-color: var(--slate-200);

  --st-border-color: var(--gray-300);
  --st-odd-row-background-color: var(--white);
  --st-even-row-background-color: var(--white);
  --st-header-background-color: var(--white);
  --st-dragging-background-color: var(--gray-200);
  --st-selected-cell-background-color: var(--blue-200);
  --st-selected-first-cell-background-color: var(--blue-200);
  --st-footer-background-color: var(--white);
  --st-cell-color: var(--gray-800);
  --st-cell-odd-row-color: var(--gray-700);
  --st-edit-cell-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px -1px rgba(0, 0, 0, 0.05);
  --st-selected-cell-color: var(--gray-900);
  --st-selected-first-cell-color: var(--gray-900);
  --st-resize-handle-color: var(--blue-300);
  --st-separator-border-color: var(--slate-100);
  --st-last-group-row-separator-border-color: var(--slate-300);
  --st-selected-border-top-color: var(--blue-600);
  --st-selected-border-bottom-color: var(--blue-600);
  --st-selected-border-left-color: var(--blue-600);
  --st-selected-border-right-color: var(--blue-600);
  --st-checkbox-checked-background-color: var(--blue-600);
  --st-checkbox-checked-border-color: var(--blue-600);
  --st-column-editor-background-color: var(--white);
  --st-column-editor-popout-background-color: var(--white);
  --st-button-hover-background-color: var(--gray-200);
  --st-button-active-background-color: var(--blue-800);
  --st-font-family: "Roboto", sans-serif;
  --st-editable-cell-focus-border-color: var(--blue-600);
}`,
    },
  },
  links: {
    npm: "https://www.npmjs.com/package/simple-table-core",
    github: "https://github.com/petera2c/simple-table-marketing",
    discord: "https://discord.gg/RvKHCfg3PC",
    demo: "https://codesandbox.io/p/sandbox/simple-table-pagination-example-rdjm5d",
  },
  files: {
    theme: "simple-table-theme.css",
  },
} as const;
