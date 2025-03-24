import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
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
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.simple-table.com/" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.simple-table.com/" className="text-gray-400 hover:text-white transition-colors">
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/simple-table-core"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  NPM Package
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://discord.gg/RvKHCfg3PC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2, color: "#7289DA" }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </motion.a>
              <motion.a
                href="https://github.com/petera2c/simple-table-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
            </div>
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
