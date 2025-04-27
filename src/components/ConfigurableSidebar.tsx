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
}

interface ConfigurableSidebarProps {
  config: SidebarConfig;
  className?: string;
}

const ConfigurableSidebar: React.FC<ConfigurableSidebarProps> = ({ config, className = "" }) => {
  const isMobile = useIsMobile();
  const { title, icon, sidebarContent, footerContent, isMobileOpen, onMobileClose } = config;

  // For desktop, render the sidebar normally
  if (!isMobile) {
    return (
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`md:w-72 w-full sticky top-[84px] mb-6 self-start h-[calc(100dvh-84px-1.5rem)] ${className}`}
      >
        <div className="bg-white/90 backdrop-blur-sm flex flex-col rounded-xl h-full shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1 overflow-hidden">
          <h2 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3">
            {icon && <FontAwesomeIcon icon={icon} />}
            {title}
          </h2>

          <div className="overflow-y-auto flex-grow px-2 pb-2">{sidebarContent}</div>

          {footerContent && (
            <div className="px-3 py-3 border-t border-gray-100 mt-auto">{footerContent}</div>
          )}
        </div>
      </motion.aside>
    );
  }

  // For mobile, render a sliding drawer that can be toggled
  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
            onClick={onMobileClose}
          />

          {/* Sidebar drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed left-0 top-0 bottom-0 w-[280px] z-50 ${className}`}
          >
            <div className="bg-white flex flex-col h-full shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  {icon && <FontAwesomeIcon icon={icon} />}
                  {title}
                </h2>
                {onMobileClose && (
                  <button
                    onClick={onMobileClose}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                )}
              </div>

              <div className="overflow-y-auto flex-grow px-3 py-2">{sidebarContent}</div>

              {footerContent && (
                <div className="px-3 py-3 border-t border-gray-100 mt-auto">{footerContent}</div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfigurableSidebar;
