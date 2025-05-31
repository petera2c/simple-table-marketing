import path from "path";
import type { Row } from "simple-table-core";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate manufacturing data
const generateManufacturingData = (): Row[] => {
  const productLines = [
    "Assembly Line A",
    "Assembly Line B",
    "Electronics",
    "Packaging",
    "Quality Control",
    "Tooling",
  ];
  const productTypes = [
    "Component X",
    "Widget Y",
    "Module Z",
    "Part Alpha",
    "Unit Beta",
    "System Gamma",
  ];
  const machines = [
    "Robot Arm",
    "CNC Machine",
    "Injection Molder",
    "Circuit Printer",
    "Quality Scanner",
    "Packaging",
  ];
  const operators = [
    "Team Alpha",
    "Team Beta",
    "Team Gamma",
    "Team Delta",
    "Team Epsilon",
    "Team Zeta",
  ];

  let rowId = 0;
  const rows: Row[] = [];

  // Generate data for each product line
  productLines.forEach((productLine, lineIndex) => {
    // Number of machines/workstations per product line
    const numStations = Math.floor(Math.random() * 6) + 3; // 3 to 8 stations per line

    const stations: Row[] = [];
    let totalOutput = 0;
    let totalDefects = 0;
    let totalDowntime = 0;
    let totalEfficiency = 0;

    // Generate station data
    for (let i = 0; i < numStations; i++) {
      const stationId = `${productLine.charAt(0)}${lineIndex + 1}-S${i + 1}`;
      const machineType = machines[Math.floor(Math.random() * machines.length)];
      const operator = operators[Math.floor(Math.random() * operators.length)];
      const productType = productTypes[Math.floor(Math.random() * productTypes.length)];

      // Calculate metrics
      const outputRate = Math.floor(Math.random() * 500) + 200; // 200-700 units per shift
      const cycleTimes = Array.from({ length: 10 }, () => Math.random() * 100 + 50);
      const avgCycleTime = cycleTimes.reduce((sum, time) => sum + time, 0) / cycleTimes.length;
      const efficiency = Math.floor(Math.random() * 40) + 60; // 60-100%
      const defectRate = Math.random() * 5; // 0-5%
      const defectCount = Math.floor(outputRate * (defectRate / 100));
      const downtimeHours = Math.random() * 4; // 0-4 hours
      const utilizationRate = Math.floor(Math.random() * 30) + 70; // 70-100%
      const energyConsumption = Math.floor(Math.random() * 1000) + 500; // 500-1500 kWh
      const maintenanceDate = new Date();
      maintenanceDate.setDate(maintenanceDate.getDate() + Math.floor(Math.random() * 30));

      // Random status weighted toward "Running"
      const statusRandom = Math.random();
      const status =
        statusRandom < 0.7
          ? "Running"
          : statusRandom < 0.8
          ? "Scheduled Maintenance"
          : statusRandom < 0.9
          ? "Unplanned Downtime"
          : statusRandom < 0.95
          ? "Idle"
          : "Setup";

      stations.push({
        id: stationId,
        productLine,
        station: `Station ${i + 1}`,
        machineType,
        operator,
        productType,
        outputRate,
        cycletime: avgCycleTime.toFixed(2),
        efficiency,
        defectRate: defectRate.toFixed(2),
        defectCount,
        downtime: downtimeHours.toFixed(2),
        utilization: utilizationRate,
        energy: energyConsumption,
        status,
        maintenanceDate: maintenanceDate.toISOString().split("T")[0],
        cycleTimeData: JSON.stringify(cycleTimes),
      });

      // Accumulate totals for product line summary
      totalOutput += outputRate;
      totalDefects += defectCount;
      totalDowntime += downtimeHours;
      totalEfficiency += efficiency;
    }

    // Create product line summary row
    const avgEfficiency = Math.round(totalEfficiency / stations.length);
    const avgDefectRate = ((totalDefects / totalOutput) * 100).toFixed(2);

    rows.push({
      id: `${productLine.charAt(0)}${lineIndex + 1}`,
      productLine,
      station: `${productLine} Summary`,
      machineType: "—",
      operator: "—",
      productType: "—",
      outputRate: totalOutput,
      cycletime: "—",
      efficiency: avgEfficiency,
      defectRate: avgDefectRate,
      defectCount: totalDefects,
      downtime: totalDowntime.toFixed(2),
      utilization: "—",
      energy: stations.reduce((sum, station) => sum + (station.energy as number), 0),
      status: "—",
      maintenanceDate: "—",
      cycleTimeData: "—",
      stations,
    });
  });

  return rows;
};

// Run the generation and save to a file
function saveDataToFile() {
  console.log("Generating finance dataset...");
  const data = generateManufacturingData();
  console.log(`Generated ${data.length} finance records`);

  const filePath = path.join(__dirname, "../src/examples/manufacturing/manufacturing-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
