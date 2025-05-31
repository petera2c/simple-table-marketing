import type { Row } from "simple-table-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate manufacturing data with hierarchical structure
export const generateManufacturingData = (): Row[] => {
  const factories = [
    {
      id: "FAC-001",
      name: "Tesla Gigafactory Texas",
      location: "Austin, TX",
      capacity: 500000,
      capacityUnit: "vehicles/year",
      currentOutput: 320000,
      outputUnit: "vehicles/year",
      utilization: 64,
      efficiency: 87,
      status: "Operational",
      established: "2022-04-07",
      productionLines: [
        {
          id: "LINE-001",
          name: "Model Y Assembly",
          capacity: 300000,
          capacityUnit: "units/year",
          currentOutput: 195000,
          outputUnit: "units/year",
          utilization: 65,
          efficiency: 89,
          status: "Running",
          lastMaintenance: "2024-01-15",
          stations: [
            {
              id: "STA-001",
              name: "Body Welding",
              efficiency: 92,
              status: "Running",
              output: 1200,
              outputUnit: "units/day",
            },
            {
              id: "STA-002",
              name: "Paint Shop",
              efficiency: 88,
              status: "Running",
              output: 1150,
              outputUnit: "units/day",
            },
            {
              id: "STA-003",
              name: "Final Assembly",
              efficiency: 85,
              status: "Running",
              output: 1100,
              outputUnit: "units/day",
            },
          ],
        },
        {
          id: "LINE-002",
          name: "Model 3 Assembly",
          capacity: 200000,
          capacityUnit: "units/year",
          currentOutput: 125000,
          outputUnit: "units/year",
          utilization: 63,
          efficiency: 84,
          status: "Running",
          lastMaintenance: "2024-01-20",
          stations: [
            {
              id: "STA-004",
              name: "Body Welding",
              efficiency: 88,
              status: "Running",
              output: 800,
              outputUnit: "units/day",
            },
            {
              id: "STA-005",
              name: "Paint Shop",
              efficiency: 82,
              status: "Maintenance",
              output: 750,
              outputUnit: "units/day",
            },
            {
              id: "STA-006",
              name: "Final Assembly",
              efficiency: 80,
              status: "Running",
              output: 720,
              outputUnit: "units/day",
            },
          ],
        },
      ],
    },
    {
      id: "FAC-002",
      name: "Ford Rouge Factory",
      location: "Dearborn, MI",
      capacity: 750000,
      capacityUnit: "vehicles/year",
      currentOutput: 520000,
      outputUnit: "vehicles/year",
      utilization: 69,
      efficiency: 81,
      status: "Operational",
      established: "1928-05-26",
      productionLines: [
        {
          id: "LINE-003",
          name: "F-150 Lightning Assembly",
          capacity: 400000,
          capacityUnit: "units/year",
          currentOutput: 280000,
          outputUnit: "units/year",
          utilization: 70,
          efficiency: 83,
          status: "Running",
          lastMaintenance: "2024-01-10",
          stations: [
            {
              id: "STA-007",
              name: "Frame Assembly",
              efficiency: 86,
              status: "Running",
              output: 1400,
              outputUnit: "units/day",
            },
            {
              id: "STA-008",
              name: "Battery Installation",
              efficiency: 78,
              status: "Running",
              output: 1350,
              outputUnit: "units/day",
            },
            {
              id: "STA-009",
              name: "Final Assembly",
              efficiency: 81,
              status: "Running",
              output: 1300,
              outputUnit: "units/day",
            },
          ],
        },
        {
          id: "LINE-004",
          name: "F-150 ICE Assembly",
          capacity: 350000,
          capacityUnit: "units/year",
          currentOutput: 240000,
          outputUnit: "units/year",
          utilization: 69,
          efficiency: 79,
          status: "Running",
          lastMaintenance: "2024-01-12",
          stations: [
            {
              id: "STA-010",
              name: "Engine Installation",
              efficiency: 82,
              status: "Running",
              output: 1200,
              outputUnit: "units/day",
            },
            {
              id: "STA-011",
              name: "Transmission",
              efficiency: 77,
              status: "Running",
              output: 1180,
              outputUnit: "units/day",
            },
            {
              id: "STA-012",
              name: "Final Assembly",
              efficiency: 75,
              status: "Running",
              output: 1150,
              outputUnit: "units/day",
            },
          ],
        },
      ],
    },
  ];

  return factories;
};

function saveDataToFile() {
  const data = generateManufacturingData();
  const outputPath = path.join(__dirname, "../public/data/manufacturing-data.json");

  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Manufacturing data saved to ${outputPath}`);
  console.log(`Generated ${data.length} factories`);
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  saveDataToFile();
}
