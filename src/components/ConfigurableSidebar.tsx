import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SidebarConfig {
  title: string;
  icon?: IconDefinition;
  sidebarContent: React.ReactNode;
  footerContent?: React.ReactNode;
}

interface ConfigurableSidebarProps {
  config: SidebarConfig;
  className?: string;
}

const ConfigurableSidebar: React.FC<ConfigurableSidebarProps> = ({ config, className = "" }) => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`md:w-72 w-full sticky top-[84px] mb-6 self-start h-[calc(100vh-84px-4rem)] ${className}`}
    >
      <div className="bg-white/90 backdrop-blur-sm flex flex-col rounded-xl h-full shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1 overflow-hidden">
        <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
          {config.icon && <FontAwesomeIcon icon={config.icon} />}
          {config.title}
        </h2>

        <div className="overflow-y-auto flex-grow px-3 pb-2">{config.sidebarContent}</div>

        {config.footerContent && (
          <div className="px-3 py-3 border-t border-gray-100 mt-auto">{config.footerContent}</div>
        )}
      </div>
    </motion.aside>
  );
};

export default ConfigurableSidebar;
