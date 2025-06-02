import React from "react";
import { CalendarOutlined, HomeOutlined, CodeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Metadata } from "next";
import { SEO_STRINGS } from "@/constants/strings/seo";
import CallToActionCard from "@/components/CallToActionCard";

export const metadata: Metadata = {
  title: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.title,
  description: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.description,
  keywords: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.keywords,
  openGraph: {
    title: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.title,
    description: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.title,
    description: SEO_STRINGS.blogPosts.customizingDataGridsStylingEasy.description,
  },
};

export default function CustomizingDataGridsStylingEasyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-4 md:p-8 mb-6">
            <h1 className="text-gray-900 dark:text-gray-100 mb-4 text-3xl md:text-4xl font-bold text-center">
              Customizing Data Grids in React: Why Simple Table Makes Styling Easy
            </h1>

            <div className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <CalendarOutlined />
                <span className="text-gray-600 dark:text-gray-400">Published on June 01, 2025</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
              Learn how Simple Table solves styling struggles with CSS variables and customizable
              themes, making it easy to create beautiful data grids that match your app's design.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <article className="space-y-8">
          {/* Introduction */}
          <section>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-0">
                  Hey everyone, I'm a full-time front-end developer who's spent every weekend for
                  months building{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">Simple Table</span>,
                  a lightweight React data grid. One of the biggest challenges I faced with other
                  data grids was styling. For my React side project, I needed a table that matched
                  my app's design, but the customization process with libraries like Handsontable
                  was a nightmare. In this post, I'll share how Simple Table solves those styling
                  struggles and makes it easy to create a data grid that fits your app perfectly.
                </p>
              </div>
            </div>
          </section>

          {/* The Handsontable Nightmare */}
          <section>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
              <h2 className="text-gray-900 dark:text-gray-100 mb-6 text-2xl font-semibold">
                The Handsontable Styling Nightmare
              </h2>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  When I first tried Handsontable, I thought it would be the perfect fit for my
                  project. But customizing its UI was nearly impossible. I spent hours fighting its
                  rigid styles, trying to override default classes just to change the header color
                  or adjust cell padding. The CSS specificity issues were exhausting, and I often
                  ended up with a table that looked nothing like my app's design. It was so
                  frustrating, and I hope you never have to deal with that kind of struggle.
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-amber-800 dark:text-amber-200">
                      Frustration Alert
                    </span>
                  </div>
                  <p className="text-amber-700 dark:text-amber-300">
                    Hours of tweaking CSS with Handsontable often led to inconsistent results,
                    breaking my app's visual harmony.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How Simple Table Makes Styling Easy */}
          <section>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
              <h2 className="text-gray-900 dark:text-gray-100 mb-6 text-2xl font-semibold">
                How Simple Table Makes Styling Easy
              </h2>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  When I set out to build Simple Table, I wanted to eliminate those styling
                  struggles for good. With Simple Table, every div has its own class name that you
                  can easily override, giving you full control over the look and feel. But what
                  really sets it apart is the use of{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">CSS variables</span>.
                  Most of the styling in Simple Table comes from CSS vars, which you can customize
                  with a theme to match your app's design in minutes.
                </p>
              </div>
            </div>
          </section>

          {/* A Custom Theme in Action */}
          <section>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
              <h2 className="text-gray-900 dark:text-gray-100 mb-6 text-2xl font-semibold">
                A Custom Theme in Action
              </h2>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Let me show you how easy it is to style Simple Table. Below is an example of a
                  custom theme I created. This theme uses CSS variables to adjust everything from
                  border radius to row colors, ensuring the table blends seamlessly into any React
                  app.
                </p>

                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CodeOutlined className="text-blue-600 dark:text-blue-400" />
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      CSS Theme Example
                    </span>
                  </div>
                  <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 md:p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
                    {`.custom-theme-container .theme-custom {
  /* Layout/Structure variables */
  --st-border-radius: 8px;
  --st-cell-padding: 12px;

  /* Spacing variables */
  --st-spacing-small: 6px;
  --st-spacing-medium: 10px;

  /* Scrollbar variables */
  --st-scrollbar-bg-color: var(--st-stone-100);
  --st-scrollbar-thumb-color: var(--st-violet-500);

  /* Color variables */
  --st-border-color: var(--st-stone-200);
  --st-odd-row-background-color: var(--st-amber-50);
  --st-even-row-background-color: var(--st-amber-100);
  --st-header-background-color: var(--st-violet-600);
  --st-header-label-color: var(--st-white);
  --st-dragging-background-color: var(--st-violet-50);
  --st-selected-cell-background-color: var(--st-violet-50);
  --st-selected-first-cell-background-color: var(--st-violet-100);
  --st-footer-background-color: var(--st-stone-100);
  --st-cell-color: var(--st-stone-700);
  --st-cell-odd-row-color: var(--st-stone-700);
  --st-edit-cell-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06);
  --st-selected-cell-color: var(--st-violet-800);
  --st-selected-first-cell-color: var(--st-violet-800);
  --st-resize-handle-color: var(--st-violet-400);
  --st-separator-border-color: var(--st-stone-200);
  --st-last-group-row-separator-border-color: var(--st-stone-300);

  /* Border colors */
  --st-selected-border-color: var(--st-violet-500);
  --st-editable-cell-focus-border-color: var(--st-violet-500);

  /* Component-specific colors */
  --st-checkbox-checked-background-color: var(--st-violet-500);
  --st-checkbox-checked-border-color: var(--st-violet-600);
  --st-column-editor-background-color: var(--st-white);
  --st-column-editor-popout-background-color: var(--st-white);
  --st-button-hover-background-color: var(--st-violet-50);
  --st-button-active-background-color: var(--st-violet-600);
  --st-cell-flash-color: var(--st-violet-200);
}

/* Custom styles for table headers */
.custom-theme-container .theme-custom .st-header-label {
  font-weight: 600 !important;
  letter-spacing: 0.025em !important;
}`}
                  </pre>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  With this theme, I can quickly adjust the table's appearance. For example, I set
                  the header background to a deep violet (
                  <code className="bg-gray-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 px-2 py-1 rounded">
                    --st-header-background-color: var(--st-violet-600)
                  </code>
                  ), made the odd and even rows alternate between amber shades for better
                  readability, and even customized the scrollbar to match my app's aesthetic. The
                  best part? I didn't have to wrestle with CSS specificity or worry about breaking
                  other styles.
                </p>
              </div>
            </div>
          </section>

          {/* Wrapping Up */}
          <section>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
              <h2 className="text-gray-900 dark:text-gray-100 mb-6 text-2xl font-semibold">
                Wrapping Up: Style with Ease
              </h2>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Building Simple Table has been a labor of love for me. I've dedicated every
                  weekend for months to create a tool that solves real problems for developers like
                  us, especially when it comes to styling. Simple Table's approach to customization
                  with CSS variables and overridable class names means you can make your data grid
                  look exactly how you want without the frustration I experienced with other
                  libraries. I hope Simple Table can help you bring your React projects to life with
                  a beautifully styled table that fits your app perfectly.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <CallToActionCard
            title="Ready to try a free React data grid that's easy to style?"
            description="Simple Table makes styling effortless with CSS variables and customizable themes. Start building beautiful data grids that match your app's design."
            primaryButton={{
              text: "Check out Simple Table on NPM",
              href: "https://www.npmjs.com/package/simple-table-core",
              external: true,
            }}
            secondaryButton={{
              text: "Back to Home Page",
              href: "/",
            }}
          />
        </article>
      </div>
    </div>
  );
}
