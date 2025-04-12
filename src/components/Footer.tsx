"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faNpm } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackLinkClick } from "@/utils/analytics";
import { TECHNICAL_STRINGS } from "@/constants/strings/technical";

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (linkName: string, linkPath: string) => {
    trackLinkClick(linkName, linkPath);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Documentation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/installation"
                  onClick={() => handleLinkClick("Footer Documentation", "/docs/installation")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/docs/installation") ? "text-white font-medium" : ""
                  }`}
                >
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Examples</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/examples/finance"
                  onClick={() => handleLinkClick("Footer Finance Example", "/examples/finance")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/examples/finance") ? "text-white font-medium" : ""
                  }`}
                >
                  Finance Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/hr"
                  onClick={() => handleLinkClick("Footer HR Example", "/examples/hr")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/examples/hr") ? "text-white font-medium" : ""
                  }`}
                >
                  HR Management
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/manufacturing"
                  onClick={() =>
                    handleLinkClick("Footer Manufacturing Example", "/examples/manufacturing")
                  }
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/examples/manufacturing") ? "text-white font-medium" : ""
                  }`}
                >
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  onClick={() => handleLinkClick("Footer Blog", "/blog")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/blog") ? "text-white font-medium" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={TECHNICAL_STRINGS.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick("Footer GitHub", TECHNICAL_STRINGS.links.github)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={TECHNICAL_STRINGS.links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick("Footer NPM", TECHNICAL_STRINGS.links.npm)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <FontAwesomeIcon icon={faNpm} className="mr-2" />
                  NPM Package
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/RvKHCfg3PC"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick("Footer Discord", "https://discord.gg/RvKHCfg3PC")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                  Discord Support
                </a>
              </li>
            </ul>
          </div>

          {/* Theme Builder */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customization</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/theme-builder"
                  onClick={() => handleLinkClick("Footer Theme Builder", "/theme-builder")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/theme-builder") ? "text-white font-medium" : ""
                  }`}
                >
                  Theme Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/themes"
                  onClick={() => handleLinkClick("Footer Themes", "/docs/themes")}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isActive("/docs/themes") ? "text-white font-medium" : ""
                  }`}
                >
                  Theme Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Simple Table. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
