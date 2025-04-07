import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import ThemesDemo from "../../components/demos/ThemesDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/ThemesDemo.tsx?raw";
import DocNavigationButtons from "../../components/DocNavigationButtons";

const ThemesPage = () => {
  return (
    <>
      <SEO
        title={`Themes - ${SEO_STRINGS.docs.title}`}
        description="Customize the appearance of Simple Table to match your application's design system."
        keywords={`themes, customization, styling, css, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/themes"
      />

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 bg-purple-100 rounded-lg">
          <FontAwesomeIcon icon={faPalette} className="text-purple-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Themes</h1>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Simple Table can be fully customized to match your application's visual design. You can
        control everything from colors and spacing to borders and typography using theme options.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ThemesDemo />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Basic Theme Configuration
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          To apply a theme to Simple Table, simply pass the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">theme</code> prop with one
          of the available theme options:
        </p>

        <CodeBlock code={demoCode} />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Available Themes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>light - Default light theme</li>
            <li>dark - Dark mode theme</li>
            <li>90s - Retro 90s style</li>
            <li>bubblegum - Pink bubblegum theme</li>
            <li>desert - Warm desert colors</li>
            <li>forest - Green forest theme</li>
            <li>high-contrast - High contrast theme</li>
            <li>ocean - Blue ocean theme</li>
            <li>pastel - Soft pastel colors</li>
            <li>solarized-dark - Dark solarized theme</li>
            <li>solarized-light - Light solarized theme</li>
            <li>vibrant - Bright vibrant colors</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <p className="text-gray-700">
          Download this CSS file and include it in your project, then apply the theme by setting:
          <br />
          <code className="bg-gray-200 px-2 py-1 rounded text-red-600 text-sm font-medium">
            theme="arctic"
          </code>
        </p>
      </motion.div>

      <DocNavigationButtons />
    </>
  );
};

export default ThemesPage;
