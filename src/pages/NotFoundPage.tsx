import { motion } from "framer-motion";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { UI_STRINGS } from "../constants/strings/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  // Get a random message from our list
  const randomMessage = UI_STRINGS.notFound.messages[Math.floor(Math.random() * UI_STRINGS.notFound.messages.length)];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center max-w-2xl">
        {/* Animated flipping table icon */}
        <motion.div
          className="text-6xl text-blue-600 mb-8"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <FontAwesomeIcon icon={faTableCells} />
        </motion.div>

        {/* Title with stagger animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {UI_STRINGS.notFound.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl md:text-2xl text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {UI_STRINGS.notFound.subtitle}
        </motion.h2>

        {/* Random funny message */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {randomMessage}
        </motion.p>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">{UI_STRINGS.notFound.cta.text}</p>
          <Link to="/">
            <Button type="primary" size="large" className="hover:scale-105 transition-transform">
              {UI_STRINGS.notFound.cta.buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
