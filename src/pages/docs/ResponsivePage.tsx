import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import UnderConstruction from "../../components/UnderConstruction";

const ResponsivePage = () => {
  return (
    <>
      <SEO
        title={`Responsive Design - ${SEO_STRINGS.docs.title}`}
        description="Learn how to make Simple Table responsive on different screen sizes."
        keywords={`responsive design, mobile-friendly, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/responsive"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faExpand} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Responsive Design</h1>
        </motion.div>

        <UnderConstruction />
      </div>
    </>
  );
};

export default ResponsivePage;
