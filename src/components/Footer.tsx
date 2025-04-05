import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { trackLinkClick } from "../utils/analytics";
import { TECHNICAL_STRINGS } from "../constants/strings/technical";

const Footer = () => {
  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackLinkClick(linkName, linkUrl);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg font-semibold mb-4">Simple Table</h3>
            <p className="text-gray-400">
              A powerful yet lightweight React grid component that brings beautiful data visualization to your
              applications
            </p>
            <a
              href={TECHNICAL_STRINGS.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("Footer NPM Button", TECHNICAL_STRINGS.links.npm)}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <FontAwesomeIcon icon={faNpm} className="text-lg" />
              <span>Get from NPM</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/docs"
                  onClick={() => handleLinkClick("Footer Documentation", "/docs")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/examples"
                  onClick={() => handleLinkClick("Footer Examples", "/examples")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Examples
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/theme-builder"
                  onClick={() => handleLinkClick("Footer Theme Builder", "/theme-builder")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Theme Builder
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="https://github.com/petera2c/simple-table-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick("Footer GitHub", "https://github.com/petera2c/simple-table-marketing")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub Repository
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
                  Join our Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/petera2c/simple-table-marketing/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleLinkClick("Footer Issues", "https://github.com/petera2c/simple-table-marketing/issues")
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Simple Table. Licensed under MIT.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
