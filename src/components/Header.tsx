"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faBars,
  faXmark,
  faSun,
  faMoon,
  faQuestionCircle,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { useIsMobile } from "../hooks/useIsMobile";
import { useThemeContext } from "../providers/ThemeProvider";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Unified link button component that handles both internal and external links
interface LinkButtonProps {
  href: string;
  label: string;
  icon?: IconDefinition;
  isMobile?: boolean;
  isExternal?: boolean;
  useActivePath?: boolean;
  onMobileClick?: () => void;
}

const LinkButton = ({
  href,
  label,
  icon,
  isMobile = false,
  isExternal = false,
  useActivePath = false,
  onMobileClick,
}: LinkButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Get the base path (e.g., "/docs" from "/docs/installation")
  const basePath = "/" + href.split("/").filter(Boolean)[0];
  const isActivePath = pathname?.startsWith(basePath);

  const shouldHighlight = !isExternal && (useActivePath ? isActivePath : isActive);

  const handleClick = () => {
    if (isMobile && onMobileClick) {
      onMobileClick();
    }
  };

  const buttonClasses = isMobile
    ? `px-3 py-2 rounded-md text-base w-full text-left ${
        shouldHighlight
          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
      } transition-colors flex items-center`
    : `${
        shouldHighlight
          ? "text-blue-600 dark:text-blue-400 font-semibold"
          : "text-gray-600 dark:text-gray-300"
      } hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center focus:outline-none`;

  const buttonContent = (
    <button onClick={handleClick} className={buttonClasses}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {label}
    </button>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {buttonContent}
    </Link>
  );
};

// Support dropdown component
const SupportDropdown = ({
  isMobile = false,
  onMobileClick,
}: {
  isMobile?: boolean;
  onMobileClick?: () => void;
}) => {
  const supportLinks = [
    {
      key: "discord",
      href: "https://discord.gg/RvKHCfg3PC",
      label: "Discord Support",
      icon: faDiscord,
      isExternal: true,
    },
    {
      key: "github",
      href: TECHNICAL_STRINGS.links.githubIssues,
      label: "Report Issue",
      icon: faGithub,
      isExternal: true,
    },
    {
      key: "blog",
      href: "/blog",
      label: "Blog",
      icon: faNewspaper,
      isExternal: false,
    },
  ];

  if (isMobile) {
    return (
      <>
        {supportLinks.map((link) => {
          const linkClasses =
            "px-3 py-2 rounded-md text-base text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center";
          const linkContent = (
            <>
              <FontAwesomeIcon icon={link.icon} className="mr-2" />
              {link.label}
            </>
          );

          if (link.isExternal) {
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onMobileClick && onMobileClick()}
                className={linkClasses}
              >
                {linkContent}
              </a>
            );
          } else {
            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => onMobileClick && onMobileClick()}
                className={linkClasses}
              >
                {linkContent}
              </Link>
            );
          }
        })}
      </>
    );
  }

  const menuItems: MenuProps["items"] = supportLinks.map((link) => ({
    key: link.key,
    label: link.isExternal ? (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <FontAwesomeIcon icon={link.icon} className="mr-2 w-4" />
        {link.label}
      </a>
    ) : (
      <Link
        href={link.href}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <FontAwesomeIcon icon={link.icon} className="mr-2 w-4" />
        {link.label}
      </Link>
    ),
  }));

  return (
    <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={["click"]}>
      <Button type="text" size="large">
        <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" />
        Support
      </Button>
    </Dropdown>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useThemeContext();
  const headerRef = useRef<HTMLElement>(null);

  // Handle click outside header to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside as EventListener);
      document.addEventListener("touchstart", handleClickOutside as EventListener);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener);
      document.removeEventListener("touchstart", handleClickOutside as EventListener);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/docs/installation", label: "Documentation", useActivePath: true },
    { href: "/theme-builder", label: "Theme Builder" },
    { href: `/examples/finance`, label: "Examples", useActivePath: true },
  ];

  const externalLinks = [{ href: TECHNICAL_STRINGS.links.npm, label: "NPM", icon: faNpm }];

  return (
    <header
      ref={headerRef}
      className="backdrop-blur-md bg-white/80 dark:bg-gray-900/90 shadow-sm sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FontAwesomeIcon
                icon={faTable}
                className="text-blue-600 dark:text-blue-400 text-2xl mr-2"
              />
              Simple Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="text-xl" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href !== "/theme-builder" || !isMobile ? (
                <LinkButton key={link.href} {...link} />
              ) : null
            )}

            <div className="flex items-center gap-4">
              {externalLinks.map((link) => (
                <LinkButton key={link.href} {...link} isExternal={true} />
              ))}
              <SupportDropdown />

              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pt-2 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <LinkButton
                  key={link.href}
                  {...link}
                  isMobile={true}
                  onMobileClick={() => setIsMenuOpen(false)}
                />
              ))}

              {externalLinks.map((link) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  label={link.label === "NPM" ? "NPM Package" : link.label}
                  icon={link.icon}
                  isExternal={true}
                  isMobile={true}
                  onMobileClick={() => setIsMenuOpen(false)}
                />
              ))}

              <SupportDropdown isMobile={true} onMobileClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
