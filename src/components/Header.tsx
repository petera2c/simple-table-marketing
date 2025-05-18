"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useIsMobile } from "../hooks/useIsMobile";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Internal link component for navigation
interface NavLinkProps {
  href: string;
  label: string;
  icon?: IconDefinition;
  isMobile?: boolean;
  useActivePath?: boolean;
}

const NavLink = ({ href, label, icon, isMobile = false, useActivePath = false }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Get the base path (e.g., "/docs" from "/docs/installation")
  const basePath = "/" + href.split("/").filter(Boolean)[0];
  const isActivePath = pathname.startsWith(basePath);

  const shouldHighlight = useActivePath ? isActivePath : isActive;

  if (isMobile) {
    return (
      <Link
        href={href}
        className={`px-3 py-2 rounded-md text-base ${
          shouldHighlight
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
        } transition-colors flex items-center`}
      >
        {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`hover:text-blue-600 transition-colors flex items-center ${
        shouldHighlight ? "text-blue-600 font-semibold" : "text-gray-600"
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1" />}
      {label}
    </Link>
  );
};

// External link component
interface ExternalLinkProps {
  href: string;
  label: string;
  icon: IconDefinition;
  isMobile?: boolean;
}

const ExternalLink = ({ href, label, icon, isMobile = false }: ExternalLinkProps) => {
  if (isMobile) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 rounded-md text-base text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center"
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      <FontAwesomeIcon icon={icon} className="mr-1" />
      {label}
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
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
    { href: "/examples/finance", label: "Examples", useActivePath: true },
  ];

  const externalLinks = [
    { href: TECHNICAL_STRINGS.links.npm, label: "NPM", icon: faNpm },
    { href: "https://discord.gg/RvKHCfg3PC", label: "Support", icon: faDiscord },
    { href: TECHNICAL_STRINGS.links.githubIssues, label: "Report Issue", icon: faGithub },
  ];

  return (
    <header ref={headerRef} className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
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
            {navLinks.map((link) =>
              link.href !== "/theme-builder" || !isMobile ? (
                <NavLink key={link.href} {...link} />
              ) : null
            )}

            {externalLinks.map((link) => (
              <ExternalLink key={link.href} {...link} />
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pt-2 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} isMobile={true} />
              ))}

              {externalLinks.map((link) => (
                <ExternalLink
                  key={link.href}
                  {...link}
                  isMobile={true}
                  label={link.label === "NPM" ? "NPM Package" : link.label}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
