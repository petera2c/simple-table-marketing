import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faNpm } from "@fortawesome/free-brands-svg-icons";
import { trackLinkClick } from "../utils/analytics";
import { useIsMobile } from "../hooks/useIsMobile";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleNavClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => handleNavClick("Logo", "/")}
              className="flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={faTable} className="text-blue-600 text-2xl mr-2" />
              Simple Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              onClick={() => handleNavClick("Home", "/")}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/docs"
              onClick={() => handleNavClick("Documentation", "/docs")}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Documentation
            </NavLink>
            {!isMobile && (
              <NavLink
                to="/theme-builder"
                onClick={() => handleNavClick("Theme Builder", "/theme-builder")}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""}`
                }
              >
                Theme Builder
              </NavLink>
            )}
            <NavLink
              to="/examples"
              onClick={() => handleNavClick("Examples", "/examples")}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Examples
            </NavLink>
            <a
              href={TECHNICAL_STRINGS.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavClick("NPM", TECHNICAL_STRINGS.links.npm)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={faNpm} className="mr-1" />
              NPM
            </a>
            <a
              href="https://discord.gg/RvKHCfg3PC"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavClick("Support", "https://discord.gg/RvKHCfg3PC")}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={faDiscord} className="mr-1" />
              Support
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pt-2 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                onClick={() => handleNavClick("Home", "/")}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  } transition-colors`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/docs"
                onClick={() => handleNavClick("Documentation", "/docs")}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  } transition-colors`
                }
              >
                Documentation
              </NavLink>
              {/* Hide Theme Builder on mobile */}
              <NavLink
                to="/examples"
                onClick={() => handleNavClick("Examples", "/examples")}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  } transition-colors`
                }
              >
                Examples
              </NavLink>
              <a
                href={TECHNICAL_STRINGS.links.npm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleNavClick("NPM", TECHNICAL_STRINGS.links.npm)}
                className="px-3 py-2 rounded-md text-base text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center"
              >
                <FontAwesomeIcon icon={faNpm} className="mr-2" />
                NPM Package
              </a>
              <a
                href="https://discord.gg/RvKHCfg3PC"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleNavClick("Support", "https://discord.gg/RvKHCfg3PC")}
                className="px-3 py-2 rounded-md text-base text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center"
              >
                <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                Support
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
