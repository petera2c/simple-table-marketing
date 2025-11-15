"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { Input, Empty, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { docsSearchIndex, type SearchableDoc } from "@/constants/docsSearchIndex";
import PageWrapper from "./PageWrapper";
import { useClickOutside } from "@/hooks/useClickOutside";

interface DocsSearchProps {
  placeholder?: string;
  autoFocus?: boolean;
}

const DocsSearch: React.FC<DocsSearchProps> = ({
  placeholder = "Search documentation...",
  autoFocus = false,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(docsSearchIndex, {
      keys: [
        { name: "title", weight: 3 },
        { name: "keywords", weight: 2 },
        { name: "description", weight: 1.5 },
        { name: "headings", weight: 1.2 },
        { name: "content", weight: 0.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  }, []);

  // Perform search
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const results = fuse.search(query);

    return results.slice(0, 10).map((result) => ({
      doc: result.item,
      score: result.score || 0,
      matches: result.matches || [],
    }));
  }, [query, fuse]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || searchResults.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            navigateToDoc(searchResults[selectedIndex].doc);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setQuery("");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, searchResults, selectedIndex]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle click outside to clear search
  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  useClickOutside(searchContainerRef, handleClickOutside);

  const navigateToDoc = (doc: SearchableDoc) => {
    router.push(doc.path);
    setIsOpen(false);
    setQuery("");
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    setIsOpen(value.trim().length > 0);
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <PageWrapper disableScrollRestoration>
      <div className="relative w-full" ref={searchContainerRef}>
        <Input
          prefix={<SearchOutlined />}
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(query.trim().length > 0)}
          autoFocus={autoFocus}
          allowClear
          onClear={handleClear}
        />

        {/* Search Results Dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-2 w-full min-w-[400px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-h-96 overflow-y-auto z-[9999]">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div
                  key={result.doc.id}
                  onClick={() => navigateToDoc(result.doc)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors ${
                    index === selectedIndex
                      ? "bg-blue-50 dark:bg-blue-900/30"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <Tag color="blue" className="mb-1">
                    {result.doc.section}
                  </Tag>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">
                    {result.doc.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {result.doc.description}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4">
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={
                    <span className="text-gray-500 dark:text-gray-400">
                      No results found for &quot;{query}&quot;
                    </span>
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default DocsSearch;
