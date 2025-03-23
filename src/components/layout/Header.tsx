import { Button, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { key: "home", label: "Home", path: "/" },
    {
      key: "docs",
      label: "Documentation",
      path: "https://docs.simple-table.com/",
      external: true,
    },
    { key: "themes", label: "Theme Builder", path: "/theme-builder" },
    {
      key: "github",
      label: "GitHub",
      path: "https://github.com/yourusername/simple-table",
      external: true,
    },
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-4 bg-white shadow-md sticky top-0 z-50 h-16">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold text-primary">
            Simple Table
          </span>
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.key}>
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Navigation Button */}
      <div className="block md:hidden">
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={showDrawer}
          className="flex items-center justify-center"
        />

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={visible}
          width={250}
        >
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.key}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
