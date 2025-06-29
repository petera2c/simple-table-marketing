import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "simple-table-core/styles.css";

// Define headers with custom header renderers including sorting
const headers: HeaderObject[] = [
  {
    accessor: "id",
    label: "ID",
    width: 80,
    type: "number",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          backgroundColor: "rgb(139, 0, 0)", // darkred
          color: "rgb(255, 255, 255)", // white
          padding: "8px 12px",
          borderRadius: "6px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>🆔 ID</span>
        <FontAwesomeIcon icon={faSort} style={{ fontSize: "12px", opacity: 0.8 }} />
      </div>
    ),
  },
  {
    accessor: "starName",
    label: "Star Name",
    width: 200,
    type: "string",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          backgroundColor: "rgb(0, 0, 139)", // darkblue
          color: "rgb(255, 255, 255)", // white
          padding: "8px 12px",
          borderRadius: "6px",
          fontStyle: "italic",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>⭐ Star Name</span>
        <FontAwesomeIcon icon={faSort} style={{ fontSize: "12px", opacity: 0.8 }} />
      </div>
    ),
  },
  {
    accessor: "constellation",
    label: "Constellation",
    width: 150,
    type: "string",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          backgroundColor: "rgb(0, 100, 0)", // darkgreen
          color: "rgb(255, 255, 255)", // white
          padding: "8px 12px",
          borderRadius: "6px",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>🌌 CONSTELLATION</span>
        <FontAwesomeIcon icon={faSort} style={{ fontSize: "10px", opacity: 0.8 }} />
      </div>
    ),
  },
  {
    accessor: "magnitude",
    label: "Magnitude",
    width: 120,
    type: "number",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          backgroundColor: "rgb(255, 165, 0)", // orange
          color: "rgb(255, 255, 255)", // white
          padding: "8px 12px",
          borderRadius: "6px",
          border: "2px solid rgb(255, 140, 0)", // darkorange
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>✨ Magnitude</span>
        <FontAwesomeIcon icon={faSort} style={{ fontSize: "12px", opacity: 0.8 }} />
      </div>
    ),
  },
  {
    accessor: "spectralClass",
    label: "Spectral Class",
    width: 140,
    type: "string",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>🌈 Class</span>
        <FontAwesomeIcon icon={faSort} style={{ fontSize: "12px", opacity: 0.8 }} />
      </div>
    ),
  },
  {
    accessor: "distanceLY",
    label: "Distance (LY)",
    width: 130,
    type: "number",
    isSortable: true,
    headerRenderer: ({ header }) => (
      <div
        style={{
          backgroundColor: "rgb(16, 185, 129)", // emerald
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>🚀 Distance</span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <FontAwesomeIcon icon={faSort} style={{ fontSize: "12px", opacity: 0.8 }} />
          <div
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              backgroundColor: "rgb(34, 197, 94)",
              borderRadius: "50%",
              width: "8px",
              height: "8px",
            }}
          />
        </div>
      </div>
    ),
  },
];

// Unique astronomical data
const STAR_DATA = [
  {
    id: 1,
    starName: "Sirius",
    constellation: "Canis Major",
    magnitude: -1.46,
    spectralClass: "A1V",
    distanceLY: 8.6,
  },
  {
    id: 2,
    starName: "Canopus",
    constellation: "Carina",
    magnitude: -0.74,
    spectralClass: "F0II",
    distanceLY: 310,
  },
  {
    id: 3,
    starName: "Arcturus",
    constellation: "Boötes",
    magnitude: -0.05,
    spectralClass: "K1.5IIIFe-0.5",
    distanceLY: 37,
  },
  {
    id: 4,
    starName: "Vega",
    constellation: "Lyra",
    magnitude: 0.03,
    spectralClass: "A0Va",
    distanceLY: 25,
  },
  {
    id: 5,
    starName: "Capella",
    constellation: "Auriga",
    magnitude: 0.08,
    spectralClass: "G5III",
    distanceLY: 43,
  },
  {
    id: 6,
    starName: "Rigel",
    constellation: "Orion",
    magnitude: 0.13,
    spectralClass: "B8Ia",
    distanceLY: 860,
  },
  {
    id: 7,
    starName: "Procyon",
    constellation: "Canis Minor",
    magnitude: 0.34,
    spectralClass: "F5IV-V",
    distanceLY: 11.5,
  },
  {
    id: 8,
    starName: "Betelgeuse",
    constellation: "Orion",
    magnitude: 0.42,
    spectralClass: "M1-2Ia-Iab",
    distanceLY: 640,
  },
  {
    id: 9,
    starName: "Achernar",
    constellation: "Eridanus",
    magnitude: 0.46,
    spectralClass: "B6Vep",
    distanceLY: 139,
  },
  {
    id: 10,
    starName: "Hadar",
    constellation: "Centaurus",
    magnitude: 0.61,
    spectralClass: "B1III",
    distanceLY: 390,
  },
  {
    id: 11,
    starName: "Altair",
    constellation: "Aquila",
    magnitude: 0.77,
    spectralClass: "A7V",
    distanceLY: 17,
  },
  {
    id: 12,
    starName: "Acrux",
    constellation: "Crux",
    magnitude: 0.81,
    spectralClass: "B0.5IV",
    distanceLY: 320,
  },
];

const HeaderRendererDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rowIdAccessor="id"
      rows={STAR_DATA}
      selectableCells
      theme={theme}
    />
  );
};

export default HeaderRendererDemo;
