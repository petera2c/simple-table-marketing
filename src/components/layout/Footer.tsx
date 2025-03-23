import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Simple Table</h3>
            <p className="text-gray-600 mb-4">
              A feature-rich React table component designed for flexibility and ease of use.
            </p>
          </div>

          {/* Resources section */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.simple-table.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.simple-table.com/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="https://docs.simple-table.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Community section */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yourusername/simple-table/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/simple-table/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/simple-table/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>

          {/* Connect section */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername/simple-table"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-xl transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-xl transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} Simple Table. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
