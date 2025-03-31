import { Outlet } from "react-router-dom";
import {
  faTable,
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faLayerGroup,
  faExpand,
  faPager,
  faTableCells,
  faRocket,
  faPuzzlePiece,
  faList,
  faArrowsAlt,
  faEye,
  faThumbtack,
  faAlignLeft,
  faCopy,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground";
import Sidebar, { Section } from "../../components/Sidebar";

// Define section groups and navigation structure
const docSections: Section[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: faRocket,
    subsections: [
      { id: "installation", label: "Installation", path: "/docs/installation" },
      { id: "quick-start", label: "Quick Start", path: "/docs/quick-start" },
    ],
  },
  {
    id: "columns",
    label: "Column Features",
    icon: faColumns,
    subsections: [
      { id: "column-properties", label: "Column Properties", path: "/docs/column-properties" },
      { id: "column-resizing", label: "Column Resizing", path: "/docs/column-resizing" },
      { id: "column-visibility", label: "Column Visibility", path: "/docs/column-visibility" },
      { id: "column-pinning", label: "Column Pinning", path: "/docs/column-pinning" },
      { id: "column-alignment", label: "Column Alignment", path: "/docs/column-alignment" },
      { id: "column-sorting", label: "Column Sorting", path: "/docs/column-sorting" },
    ],
  },
  {
    id: "cells",
    label: "Cell Features",
    icon: faTableCells,
    subsections: [
      { id: "cell-editing", label: "Cell Editing", path: "/docs/cell-editing" },
      { id: "cell-highlighting", label: "Cell Highlighting", path: "/docs/cell-highlighting" },
      { id: "cell-renderer", label: "Cell Renderer", path: "/docs/cell-renderer" },
    ],
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
    icon: faPuzzlePiece,
    subsections: [
      { id: "row-grouping", label: "Row Grouping", path: "/docs/row-grouping" },
      { id: "pagination", label: "Pagination", path: "/docs/pagination" },
    ],
  },
  {
    id: "customization",
    label: "Customization",
    icon: faPaintBrush,
    subsections: [
      { id: "themes", label: "Themes", path: "/docs/themes" },
      { id: "custom-theme", label: "Custom Theme", path: "/docs/custom-theme" },
    ],
  },
];

// Icons mapping for subsections
const subsectionIcons = {
  "basic-usage": faTable,
  "cell-editing": faEdit,
  "cell-highlighting": faCopy,
  "cell-renderer": faCode,
  "column-alignment": faAlignLeft,
  "column-pinning": faThumbtack,
  "column-properties": faList,
  "column-resizing": faArrowsAlt,
  "column-sorting": faSort,
  "column-visibility": faEye,
  "custom-theme": faCode,
  "custom-renderers": faEdit,
  "quick-start": faRocket,
  "row-grouping": faLayerGroup,
  advanced: faTableCells,
  columns: faColumns,
  installation: faCode,
  pagination: faPager,
  responsive: faExpand,
  themes: faPalette,
};

const DocsLayout = () => {
  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-8">
          <Sidebar title="Documentation" sections={docSections} subsectionIcons={subsectionIcons} />

          {/* Main content area with width constraint */}
          <div className="flex-1 mx-auto max-w-4xl mt-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsLayout;
