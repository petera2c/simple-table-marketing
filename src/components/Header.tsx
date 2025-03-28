import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { trackLinkClick } from "../utils/analytics";

const Header = () => {
  const handleNavClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
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
          <div className="space-x-8">
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
            <NavLink
              to="/theme-builder"
              onClick={() => handleNavClick("Theme Builder", "/theme-builder")}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Theme Builder
            </NavLink>
            <a
              href="https://docs.simple-table.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavClick("Demos", "https://docs.simple-table.com/")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Demos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
