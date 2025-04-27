"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "../hooks/useIsMobile";

export interface SidebarConfig {
  title: string;
  icon?: IconDefinition;
  sidebarContent: React.ReactNode;
  footerContent?: React.ReactNode;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
  width?: string; // Optional width for the sidebar
}

interface ConfigurableSidebarProps {
  config: SidebarConfig;
  className?: string;
}

const ConfigurableSidebar: React.FC<ConfigurableSidebarProps> = ({ config, className = "" }) => {
  const isMobile = useIsMobile();
  const { title, icon, sidebarContent, footerContent, isMobileOpen, onMobileClose, width } = config;

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`shrink-0 w-full sticky top-[84px] my-6 self-start h-[calc(100dvh-84px-1.5rem)] bg-white/90 backdrop-blur-sm flex flex-col rounded-xl shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1 overflow-hidden ${
        width ? "" : "w-64"
      } ${className}`}
      style={width ? { width } : undefined}
    >
      <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
        {icon && <FontAwesomeIcon icon={icon} />}
        {title}
      </h2>

      <div className="overflow-y-auto flex-grow px-2 pb-2">{sidebarContent}</div>

      {footerContent && (
        <div className="px-3 py-3 border-t border-gray-100 mt-auto">{footerContent}</div>
      )}
    </motion.div>
  );
};

export default ConfigurableSidebar;
