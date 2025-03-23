import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
              <FontAwesomeIcon icon={faTable} className="text-blue-600 text-2xl mr-2" />
              Simple Table
            </Link>
          </div>
          <div className="space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/theme-builder"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              Theme Builder
            </NavLink>
            <a
              href="https://docs.simple-table.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              Docs
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
