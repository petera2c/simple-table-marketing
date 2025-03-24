import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faTable, faColumns, faEdit, faList, faScroll, faRocket } from "@fortawesome/free-solid-svg-icons";
import PinnedColumnsExample from "../demos/examples/pinned-columns/PinnedColumns";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Map icons to feature titles
  const getFeatureIcon = (title: string) => {
    const iconMap = {
      "Highly Customizable": faTable,
      "Cell Editing": faEdit,
      "Column Management": faColumns,
      Pagination: faList,
      "Infinite Scroll": faScroll,
      "Performance Optimized": faRocket,
    };
    return iconMap[title as keyof typeof iconMap] || faTable;
  };

  return (
    <>
      {/* Page-wide animated background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <section className="relative py-12">
          {/* Hero content with animations */}
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Simple Table
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A powerful yet lightweight React grid component that brings beautiful data visualization to your
              applications
            </motion.p>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                type="primary"
                size="large"
                href="https://codesandbox.io/p/sandbox/simple-table-pagination-example-rdjm5d"
                target="_blank"
                className="hover:scale-105 transition-transform"
              >
                Live Demo
              </Button>

              <Button
                size="large"
                href="https://www.npmjs.com/package/simple-table-core"
                target="_blank"
                className="hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon icon={faNpm} className="mr-2" />
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Demo section with animated entrance */}
        <motion.section
          className="mb-16 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <PinnedColumnsExample />
        </motion.section>

        {/* Features section with staggered animation */}
        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "Highly Customizable", desc: "Fully customizable appearance with CSS variables and themes" },
            { title: "Cell Editing", desc: "Built-in support for editable cells with controlled state" },
            { title: "Column Management", desc: "Resize, reorder, pin, and hide columns with intuitive UI" },
            { title: "Pagination", desc: "Built-in pagination with customizable controls" },
            { title: "Infinite Scroll", desc: "Alternative to pagination for large datasets" },
            { title: "Performance Optimized", desc: "Efficiently renders thousands of rows and columns" },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={getFeatureIcon(feature.title)} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Installation section with animation */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get Started
          </motion.h2>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg inline-block shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <code className="text-sm text-gray-800">npm install simple-table-core</code>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
