"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Highlight, themes } from "prism-react-renderer";
import { useDemoCode } from "@/hooks/useDemoCode";

type ThemeType = "dark" | "light";

interface CodeBlockProps {
  className?: string;
  code?: string;
  demoCodeFilename?: string;
  initialTheme?: ThemeType;
  language?: string;
  showLineNumbers?: boolean;
  showThemeToggle?: boolean;
}

const CodeBlock = ({
  className = "",
  code = "",
  demoCodeFilename = "",
  initialTheme = "dark",
  language = "tsx",
  showLineNumbers = true,
  showThemeToggle = true,
}: CodeBlockProps) => {
  const demoCode = useDemoCode(demoCodeFilename);
  code = demoCode ? demoCode.toString() : code.toString();
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const selectedTheme = theme === "dark" ? themes.nightOwl : themes.nightOwlLight;

  // Get language display name
  const getLanguageDisplayName = () => {
    const displayNames: Record<string, string> = {
      jsx: "React JSX",
      tsx: "React TSX",
      javascript: "JavaScript",
      typescript: "TypeScript",
      css: "CSS",
      html: "HTML",
      bash: "Shell",
      json: "JSON",
    };

    return displayNames[language] || language.toUpperCase();
  };

  // Filename extraction from first comment line (e.g. "// SomeFile.tsx")
  const extractFilename = (): string | null => {
    if (!code) return null;

    const firstLine = code.trim().split("\n")[0];
    if (firstLine.startsWith("// ") || firstLine.startsWith("/* ")) {
      const potentialFilename = firstLine.replace(/^\/\/\s*|^\/\*\s*/, "").trim();
      if (potentialFilename.includes(".")) {
        return potentialFilename;
      }
    }
    return null;
  };

  const filename = extractFilename();

  return (
    <div className={`rounded-md mb-6 overflow-hidden shadow-lg relative ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-gray-400 text-xs">
        <div className="flex items-center gap-2">
          <span>{getLanguageDisplayName()}</span>
          {filename && (
            <span className="text-gray-500 ml-2 border-l border-gray-700 pl-2">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {showThemeToggle && (
            <button
              className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-2 py-1 rounded cursor-pointer transition-colors"
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-xs" />
            </button>
          )}
          <div
            className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-2 py-1 rounded cursor-pointer transition-colors"
            onClick={handleCopy}
            aria-label="Copy code"
            title="Copy to clipboard"
          >
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xs" />
            <span className="sm:inline hidden">{copied ? "Copied!" : "Copy"}</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto max-w-full">
        <Highlight
          theme={selectedTheme}
          code={filename ? code.replace(/^\/\/.*?\n|^\/\*.*?\n/, "") : code.trim()}
          language={language as any}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="p-4 overflow-auto text-sm max-h-[64vh]"
              style={{
                ...style,
                backgroundColor: theme === "dark" ? "#011627" : "#FBFBFB",
              }}
            >
              {tokens.map((line, i) => {
                // Check if this line is a special comment like "// ... existing code ..."
                const isSpecialComment =
                  line.length > 1 &&
                  line[0].content.match(/\/\/|\/\*|#/) &&
                  line.some((token) => token.content.includes("existing code"));

                const lineProps = getLineProps({ line });

                return (
                  <div
                    key={i}
                    {...lineProps}
                    className={`table-row ${isSpecialComment ? "opacity-60 italic" : ""}`}
                  >
                    {showLineNumbers && (
                      <span className="table-cell text-right pr-4 select-none opacity-50 text-xs w-8">
                        {i + 1}
                      </span>
                    )}
                    <span className="table-cell whitespace-pre word-break">
                      {line.map((token, key) => (
                        <span
                          key={key}
                          {...getTokenProps({ token })}
                          className={token.types.includes("comment") ? "italic opacity-75" : ""}
                        />
                      ))}
                    </span>
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
