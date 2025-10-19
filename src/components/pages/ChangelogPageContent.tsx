"use client";

import React from "react";
import Link from "next/link";
import { CHANGELOG_ENTRIES, ChangelogEntry } from "@/constants/changelog";

function ChangeItem({ change }: { change: ChangelogEntry["changes"][0] }) {
  const emoji = {
    feature: "🚀",
    improvement: "⚡",
    bugfix: "🐛",
    breaking: "💥",
  }[change.type];

  const typeLabel = {
    feature: "New",
    improvement: "Improved",
    bugfix: "Fix",
    breaking: "Breaking",
  }[change.type];

  return (
    <li className="text-gray-700 dark:text-gray-300">
      {emoji} {typeLabel} {change.description}
      {change.link && (
        <>
          {" "}
          <Link href={change.link} className="text-blue-600 dark:text-blue-400 hover:underline">
            →
          </Link>
        </>
      )}
    </li>
  );
}

function VersionCard({ entry }: { entry: ChangelogEntry }) {
  // Parse date correctly without timezone conversion
  const [year, month, day] = entry.date.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="mb-12">
      {/* Version number as large title */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">{entry.version}</h2>

      {/* Date tag */}
      <div className="inline-block mb-6">
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded">
          {formattedDate}
        </span>
      </div>

      {/* Changes list */}
      <ul className="space-y-2 list-disc list-inside ml-1">
        {entry.changes.map((change, idx) => (
          <ChangeItem key={idx} change={change} />
        ))}
      </ul>
    </div>
  );
}

export default function ChangelogPageContent() {
  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-gray-900 dark:text-gray-100 mb-3 text-3xl font-bold">Changelog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Release history and updates for Simple Table.
        </p>
      </header>

      {/* Changelog entries */}
      <div>
        {CHANGELOG_ENTRIES.map((entry) => (
          <VersionCard key={entry.version} entry={entry} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          View full release notes and download packages:
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/petera2c/simple-table/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub Releases →
          </a>
          <a
            href="https://www.npmjs.com/package/simple-table-core"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            NPM Package →
          </a>
        </div>
      </div>
    </>
  );
}
