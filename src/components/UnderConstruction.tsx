import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat, faTools, faCog } from "@fortawesome/free-solid-svg-icons";

const UnderConstruction = () => {
  return (
    <div className="p-12 text-center">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-8">
          <motion.div
            className="relative"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "mirror",
            }}
          >
            <FontAwesomeIcon icon={faHardHat} className="text-yellow-500 text-6xl" />
          </motion.div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Page Under Construction</h2>

        <div className="relative mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <motion.div
            className="absolute right-6 top-4 text-gray-300"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          >
            <FontAwesomeIcon icon={faCog} className="text-2xl" />
          </motion.div>

          <motion.div
            className="absolute left-6 bottom-4 text-gray-300"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            <FontAwesomeIcon icon={faCog} className="text-xl" />
          </motion.div>

          <p className="text-gray-600 mb-4">
            We're working hard to build this documentation section for you. Please check back soon!
          </p>

          <div className="flex items-center justify-center gap-2 text-blue-600">
            <FontAwesomeIcon icon={faTools} className="text-blue-500" />
            <span>Coming soon</span>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/docs/installation"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Back to Documentation Home
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
