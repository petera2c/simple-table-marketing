import { useEffect, useState } from "react";
import { generateSpaceData, SPACE_HEADERS } from "../data/space-data";
import { SimpleTable, Theme } from "simple-table-core";

const EXAMPLE_DATA = generateSpaceData();
const HEADERS = SPACE_HEADERS;

const THEME_OPTIONS: Theme[] = [
  "90s",
  "bubblegum",
  "dark",
  "desert",
  "forest",
  "high-contrast",
  "light",
  "ocean",
  "pastel",
  "solarized-dark",
  "solarized-light",
  "vibrant",
];

// Utility function to load fonts
const loadFont = (fontName: string) => {
  const existingLink = document.querySelector(`link[data-font="${fontName}"]`);
  if (existingLink) return; // Font already loaded

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, "+")}:wght@400;700&display=swap`;
  link.setAttribute("data-font", fontName);
  document.head.appendChild(link);
};

// Function to get theme color
const getThemeColor = (theme: Theme): { backgroundColor: string; color: string } => {
  switch (theme) {
    case "dark":
      return { backgroundColor: "#333", color: "white" };
    case "desert":
      return { backgroundColor: "#C19A6B", color: "white" };
    case "forest":
      return { backgroundColor: "#228B22", color: "white" };
    case "high-contrast":
      return { backgroundColor: "#000", color: "white" };
    case "light":
      return { backgroundColor: "#f0f0f0", color: "black" };
    case "ocean":
      return { backgroundColor: "#1E90FF", color: "white" };
    case "pastel":
      return { backgroundColor: "#FFDAB9", color: "black" };
    case "solarized-dark":
      return { backgroundColor: "#002b36", color: "white" };
    case "solarized-light":
      return { backgroundColor: "#fdf6e3", color: "black" };
    case "vibrant":
      return { backgroundColor: "#FF4500", color: "white" };
    case "bubblegum":
      return { backgroundColor: "#FFC0CB", color: "black" };
    case "90s":
      return { backgroundColor: "#87CEEB", color: "black" };
    default:
      return { backgroundColor: "#ccc", color: "black" };
  }
};

// Function to get hover color
const getHoverColor = (theme: Theme) => {
  switch (theme) {
    case "dark":
      return "#444";
    case "desert":
      return "#D2B48C";
    case "forest":
      return "#2E8B57";
    case "high-contrast":
      return "#111";
    case "light":
      return "#e0e0e0";
    case "ocean":
      return "#4682B4";
    case "pastel":
      return "#FFE4B5";
    case "solarized-dark":
      return "#073642";
    case "solarized-light":
      return "#eee8d5";
    case "vibrant":
      return "#FF6347";
    case "bubblegum":
      return "#FFB6C1";
    case "90s":
      return "#ADD8E6";
    default:
      return "#bbb";
  }
};

const ThemingExample = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    switch (theme) {
      case "light":
        loadFont("Nunito");
        break;
      case "dark":
        loadFont("Open Sans");
        break;
      case "pastel":
        loadFont("Comic Sans MS");
        break;
      case "vibrant":
        loadFont("Lobster");
        break;
      case "solarized-light":
      case "solarized-dark":
        loadFont("Georgia");
        break;
      case "desert":
        loadFont("Times New Roman");
        break;
      case "forest":
        loadFont("Tahoma");
        break;
      case "ocean":
        loadFont("Verdana");
        break;
      case "bubblegum":
        loadFont("Pacifico");
        break;
      case "90s":
        loadFont("Courier New");
        break;
      default:
        loadFont("Nunito"); // Default font
        break;
    }
  }, [theme]);

  return (
    <div style={{ padding: "2rem" }}>
      <SimpleTable
        columnResizing // Enable column resizing
        defaultHeaders={HEADERS} // Set the headers
        draggable // Enable draggable columns
        editColumns // Enable editing columns
        rows={EXAMPLE_DATA} // Set rows data
        selectableCells // Enable selectable cells
        selectableColumns // Select column by clicking on the header. This will override sort on header click
        theme={theme} // Set the theme
        // If using pagination use an auto height
        height="80vh"
        shouldPaginate
        rowsPerPage={10}
        // height="calc(100dvh - 112px)" // If not using pagination use a fixed height
      />
      <div style={{ display: "flex", overflow: "auto" }}>
        {THEME_OPTIONS.map((theme) => {
          const { backgroundColor, color } = getThemeColor(theme);
          return (
            <button
              key={theme}
              onClick={() => setTheme(theme)}
              style={{
                backgroundColor,
                color,
                border: "none",
                borderRadius: "4px",
                padding: "0.25rem 0.5rem",
                margin: "0.5rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                whiteSpace: "nowrap",
                fontFamily: "Nunito",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = getHoverColor(theme))}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
            >
              {theme}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemingExample;
