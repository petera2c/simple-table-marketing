// components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Simple Table</h3>
            <p className="text-gray-400">A powerful yet lightweight React grid component</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.simple-table.com/" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.simple-table.com/" className="text-gray-400 hover:text-white">
                  Website
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/RvKHCfg3PC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              <a
                href="https://github.com/petera2c/simple-table-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Simple Table. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
