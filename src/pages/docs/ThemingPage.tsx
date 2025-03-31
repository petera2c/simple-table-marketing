import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const ThemingPage = () => {
  return (
    <>
      <SEO
        title={`Theming - ${SEO_STRINGS.docs.title}`}
        description="Learn how to customize the look and feel of Simple Table using CSS variables."
        keywords={`theming, styling, css variables, customization, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/theming"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-green-100 rounded-lg">
            <FontAwesomeIcon icon={faPalette} className="text-green-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Theming</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table comes with a fully customizable theme system based on CSS variables. This approach gives you
          complete control over the visual appearance of your tables without affecting functionality.
        </motion.p>

        {/* Basic Usage Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            Basic Usage
          </h2>

          <p className="text-gray-700 mb-4">
            To apply a custom theme to your table, create a CSS class that overrides the default CSS variables, then
            apply it to your table wrapper element.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* In your CSS file */
.theme-custom {
  /* Change the border color */
  --st-border-color: #e2e8f0;
  
  /* Change the header background */
  --st-header-background-color: #f8fafc;
  
  /* Change text colors */
  --st-cell-color: #334155;
}

/* In your React component */
<div className="theme-custom">
  <SimpleTable defaultHeaders={headers} rows={rows} />
</div>`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Available CSS Variables Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            Available CSS Variables
          </h2>

          <p className="text-gray-700 mb-4">
            Simple Table provides a comprehensive set of CSS variables that you can customize. Here are all the
            available variables grouped by category:
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Base Variables</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* Base Variables */
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
--st-scrollbar-bg-color: var(--st-slate-50);
--st-scrollbar-thumb-color: var(--st-slate-300);
--st-font-family: "Roboto", sans-serif;`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Colors and Backgrounds</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* Colors and Backgrounds */
--st-border-color: var(--st-gray-300);
--st-odd-row-background-color: var(--st-white);
--st-even-row-background-color: var(--st-white);
--st-header-background-color: var(--st-white);
--st-footer-background-color: var(--st-white);
--st-dragging-background-color: var(--st-gray-200);
--st-cell-color: var(--st-gray-800);
--st-cell-odd-row-color: var(--st-gray-700);
--st-separator-border-color: var(--st-slate-100);
--st-last-group-row-separator-border-color: var(--st-slate-300);`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Selection and Interaction</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* Selection and Interaction */
--st-selected-cell-background-color: var(--st-blue-200);
--st-selected-first-cell-background-color: var(--st-blue-200);
--st-selected-cell-color: var(--st-gray-900);
--st-selected-first-cell-color: var(--st-gray-900);
--st-selected-border-top-color: var(--st-blue-600);
--st-selected-border-bottom-color: var(--st-blue-600);
--st-selected-border-left-color: var(--st-blue-600);
--st-selected-border-right-color: var(--st-blue-600);
--st-resize-handle-color: var(--st-blue-300);
--st-edit-cell-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px -1px rgba(0, 0, 0, 0.05);
--st-editable-cell-focus-border-color: var(--st-blue-600);`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">UI Components</h3>
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* UI Components */
--st-checkbox-checked-background-color: var(--st-blue-600);
--st-checkbox-checked-border-color: var(--st-blue-600);
--st-column-editor-background-color: var(--st-white);
--st-column-editor-popout-background-color: var(--st-white);
--st-button-hover-background-color: var(--st-gray-200);
--st-button-active-background-color: var(--st-blue-800);`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Common Themes Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 mt-8">
            Common Theme Presets
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Dark Theme</h3>
          <p className="text-gray-700 mb-4">A dark theme preset for low-light environments:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`.theme-dark {
  /* Base */
  --st-border-radius: 4px;
  --st-border-width: 1px;
  
  /* Colors */
  --st-border-color: #374151;
  --st-odd-row-background-color: #1f2937;
  --st-even-row-background-color: #1f2937;
  --st-header-background-color: #111827;
  --st-cell-color: #e5e7eb;
  --st-cell-odd-row-color: #e5e7eb;
  
  /* Selection */
  --st-selected-cell-background-color: #2d3748;
  --st-selected-first-cell-background-color: #2d3748;
  --st-selected-cell-color: #f9fafb;
  --st-selected-first-cell-color: #f9fafb;
  --st-selected-border-top-color: #4b5563;
  --st-selected-border-bottom-color: #4b5563;
  --st-selected-border-left-color: #4b5563;
  --st-selected-border-right-color: #4b5563;
  
  /* Scrollbars */
  --st-scrollbar-bg-color: #111827;
  --st-scrollbar-thumb-color: #4b5563;
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Branded Theme</h3>
          <p className="text-gray-700 mb-4">An example of a branded theme using a primary color:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`.theme-branded {
  /* Primary brand color (purple in this example) */
  --brand-color-50: #faf5ff;
  --brand-color-100: #f3e8ff;
  --brand-color-200: #e9d5ff;
  --brand-color-300: #d8b4fe;
  --brand-color-400: #c084fc;
  --brand-color-500: #a855f7;
  --brand-color-600: #9333ea;
  --brand-color-700: #7e22ce;
  --brand-color-800: #6b21a8;
  --brand-color-900: #581c87;
  
  /* Header */
  --st-header-background-color: var(--brand-color-600);
  --st-cell-color: white;
  
  /* Selection */
  --st-selected-cell-background-color: var(--brand-color-100);
  --st-selected-first-cell-background-color: var(--brand-color-100);
  --st-selected-cell-color: var(--brand-color-900);
  --st-selected-border-top-color: var(--brand-color-600);
  --st-selected-border-bottom-color: var(--brand-color-600);
  --st-selected-border-left-color: var(--brand-color-600);
  --st-selected-border-right-color: var(--brand-color-600);
  
  /* UI Components */
  --st-checkbox-checked-background-color: var(--brand-color-600);
  --st-checkbox-checked-border-color: var(--brand-color-600);
  --st-resize-handle-color: var(--brand-color-400);
  --st-button-active-background-color: var(--brand-color-700);
  --st-editable-cell-focus-border-color: var(--brand-color-600);
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Alternating Rows Theme</h3>
          <p className="text-gray-700 mb-4">A theme with alternating row colors for better readability:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`.theme-alternating-rows {
  /* Alternating row colors */
  --st-odd-row-background-color: #ffffff;
  --st-even-row-background-color: #f9fafb;
  
  /* Header styling */
  --st-header-background-color: #f3f4f6;
  --st-border-color: #e5e7eb;
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Advanced Theming Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 mt-8">
            Advanced Theming Techniques
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Theme Switching</h3>
          <p className="text-gray-700 mb-4">Implement theme switching in your application:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`import React, { useState } from 'react';
import { SimpleTable } from 'simple-table-core';

const ThemeSwitcherExample = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  
  // Handle theme change
  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };
  
  return (
    <div>
      {/* Theme selector */}
      <div className="mb-4">
        <button 
          onClick={() => changeTheme('default')}
          className={\`px-3 py-1 mr-2 \${currentTheme === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
        >
          Default
        </button>
        <button 
          onClick={() => changeTheme('dark')}
          className={\`px-3 py-1 mr-2 \${currentTheme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
        >
          Dark
        </button>
        <button 
          onClick={() => changeTheme('branded')}
          className={\`px-3 py-1 \${currentTheme === 'branded' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
        >
          Branded
        </button>
      </div>
      
      {/* Apply selected theme class to wrapper */}
      <div className={\`theme-\${currentTheme}\`}>
        <SimpleTable
          defaultHeaders={headers}
          rows={rows}
        />
      </div>
    </div>
  );
};`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Responsive Theming</h3>
          <p className="text-gray-700 mb-4">Adjust themes based on screen size or user preferences:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`/* In your CSS file */
/* Media query for dark mode preference */
@media (prefers-color-scheme: dark) {
  .theme-auto {
    /* Apply dark theme variables */
    --st-border-color: #374151;
    --st-odd-row-background-color: #1f2937;
    --st-header-background-color: #111827;
    --st-cell-color: #e5e7eb;
    /* ... other dark theme variables */
  }
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .theme-responsive {
    /* Adjust padding and font size for better mobile experience */
    --st-cell-padding: 6px;
    --st-font-size: 0.75rem;
    --st-spacing-small: 2px;
    --st-spacing-medium: 4px;
  }
}`}
              </code>
            </pre>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Create a consistent theme that aligns with your application's branding</li>
              <li>Consider accessibility guidelines when choosing colors and contrasts</li>
              <li>Test your themes across different screen sizes and devices</li>
              <li>Maintain separate theme classes instead of directly overriding the base variables</li>
              <li>Use CSS preprocessors like SASS to manage complex theme definitions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThemingPage;
