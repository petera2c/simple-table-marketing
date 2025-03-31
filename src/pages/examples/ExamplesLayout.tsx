import { Outlet } from "react-router-dom";
import {
  faCode,
  faPaintBrush,
  faColumns,
  faEdit,
  faSort,
  faLayerGroup,
  faPager,
  faTableCells,
  faPuzzlePiece,
  faList,
  faArrowsAlt,
  faEye,
  faThumbtack,
  faAlignLeft,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground";
import Sidebar, { Section } from "../../components/Sidebar";

// Define section groups and navigation structure
const demoSections: Section[] = [
  {
    id: "column-features",
    label: "Column Features",
    icon: faColumns,
    subsections: [
      { id: "column-properties", label: "Column Properties", path: "/demos/column-properties" },
      { id: "column-resizing", label: "Column Resizing", path: "/demos/column-resizing" },
      { id: "column-visibility", label: "Column Visibility", path: "/demos/column-visibility" },
      { id: "column-pinning", label: "Column Pinning", path: "/demos/column-pinning" },
      { id: "column-alignment", label: "Column Alignment", path: "/demos/column-alignment" },
      { id: "column-sorting", label: "Column Sorting", path: "/demos/column-sorting" },
    ],
  },
  {
    id: "cell-features",
    label: "Cell Features",
    icon: faTableCells,
    subsections: [
      { id: "cell-editing", label: "Cell Editing", path: "/demos/cell-editing" },
      { id: "cell-highlighting", label: "Cell Highlighting", path: "/demos/cell-highlighting" },
      { id: "cell-renderer", label: "Cell Renderer", path: "/demos/cell-renderer" },
    ],
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
    icon: faPuzzlePiece,
    subsections: [
      { id: "row-grouping", label: "Row Grouping", path: "/demos/row-grouping" },
      { id: "pagination", label: "Pagination", path: "/demos/pagination" },
      { id: "theming", label: "Theming", path: "/demos/theming" },
    ],
  },
];

// Icons mapping for subsections
const subsectionIcons = {
  "column-properties": faList,
  "column-resizing": faArrowsAlt,
  "column-visibility": faEye,
  "column-pinning": faThumbtack,
  "column-alignment": faAlignLeft,
  "column-sorting": faSort,
  "cell-editing": faEdit,
  "cell-highlighting": faCopy,
  "cell-renderer": faCode,
  "row-grouping": faLayerGroup,
  pagination: faPager,
  theming: faPaintBrush,
};

const DemosLayout = () => {
  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-8">
          <Sidebar title="Interactive Demos" sections={demoSections} subsectionIcons={subsectionIcons} />

          {/* Main content area with width constraint */}
          <div className="flex-1 mx-auto max-w-5xl mt-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-8 mb-8 min-h-[calc(100dvh-84px-4rem)]"
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

export default DemosLayout;
