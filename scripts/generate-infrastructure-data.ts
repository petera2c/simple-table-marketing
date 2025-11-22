import type { Row } from "simple-table-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Datacenter locations
const DATACENTERS = [
  { id: "US-EAST-1", name: "N. Virginia", region: "US East" },
  { id: "US-EAST-2", name: "Ohio", region: "US East" },
  { id: "US-WEST-1", name: "N. California", region: "US West" },
  { id: "US-WEST-2", name: "Oregon", region: "US West" },
  { id: "EU-WEST-1", name: "Ireland", region: "Europe" },
  { id: "EU-CENTRAL-1", name: "Frankfurt", region: "Europe" },
  { id: "AP-SOUTHEAST-1", name: "Singapore", region: "Asia Pacific" },
  { id: "AP-NORTHEAST-1", name: "Tokyo", region: "Asia Pacific" },
  { id: "AP-SOUTH-1", name: "Mumbai", region: "Asia Pacific" },
  { id: "SA-EAST-1", name: "São Paulo", region: "South America" },
];

// Server types
const SERVER_TYPES = [
  { type: "web", name: "Web Server", baseLoad: 45, baseCpu: 35, baseMemory: 60 },
  { type: "api", name: "API Server", baseLoad: 65, baseCpu: 50, baseMemory: 55 },
  { type: "database", name: "Database", baseLoad: 75, baseCpu: 60, baseMemory: 80 },
  { type: "cache", name: "Cache Server", baseLoad: 40, baseCpu: 30, baseMemory: 70 },
  { type: "worker", name: "Background Worker", baseLoad: 55, baseCpu: 45, baseMemory: 50 },
  { type: "loadbalancer", name: "Load Balancer", baseLoad: 50, baseCpu: 25, baseMemory: 35 },
  { type: "storage", name: "Storage Server", baseLoad: 60, baseCpu: 40, baseMemory: 45 },
  { type: "ml", name: "ML Compute", baseLoad: 85, baseCpu: 80, baseMemory: 75 },
];

// Server status options
const STATUS_OPTIONS = ["online", "warning", "critical", "maintenance", "offline"];

// Operating systems
const OS_OPTIONS = [
  "Ubuntu 22.04",
  "CentOS 8",
  "Amazon Linux 2",
  "Windows Server 2022",
  "Debian 11",
];

// Generate realistic infrastructure monitoring data
const generateInfrastructureData = (): Row[] => {
  const rows: Row[] = [];
  const totalRows = 10000;

  for (let i = 0; i < totalRows; i++) {
    // Random datacenter
    const datacenter = DATACENTERS[Math.floor(Math.random() * DATACENTERS.length)];

    // Random server type
    const serverType = SERVER_TYPES[Math.floor(Math.random() * SERVER_TYPES.length)];

    // Generate server ID
    const serverId = `${datacenter.id}-${serverType.type}-${(i % 10000)
      .toString()
      .padStart(4, "0")}`;

    // CPU usage - based on server type with variation
    const cpuUsage = Math.min(
      100,
      Math.max(0, Math.round((serverType.baseCpu + (Math.random() - 0.5) * 40) * 10) / 10)
    );

    // Memory usage - based on server type with variation
    const memoryUsage = Math.min(
      100,
      Math.max(0, Math.round((serverType.baseMemory + (Math.random() - 0.5) * 30) * 10) / 10)
    );

    // Disk usage - random but realistic
    const diskUsage = Math.round((20 + Math.random() * 70) * 10) / 10;

    // Network traffic (MB/s)
    const networkIn = Math.round(Math.random() * 500 * 100) / 100;
    const networkOut = Math.round(Math.random() * 300 * 100) / 100;

    // Active connections
    const activeConnections = Math.floor(Math.random() * 5000);

    // Requests per second
    const requestsPerSec = Math.floor(Math.random() * 10000);

    // Response time (ms)
    const responseTime = Math.round((10 + Math.random() * 500) * 10) / 10;

    // Uptime (days) - most servers have good uptime
    let uptime;
    const uptimeRandom = Math.random();
    if (uptimeRandom < 0.7) {
      // 70% have great uptime (30-365 days)
      uptime = Math.floor(30 + Math.random() * 335);
    } else if (uptimeRandom < 0.9) {
      // 20% have moderate uptime (7-30 days)
      uptime = Math.floor(7 + Math.random() * 23);
    } else {
      // 10% recently restarted (0-7 days)
      uptime = Math.floor(Math.random() * 7);
    }

    // Determine status based on metrics
    let status;
    if (cpuUsage > 90 || memoryUsage > 95 || responseTime > 400) {
      status = "critical";
    } else if (cpuUsage > 80 || memoryUsage > 85 || responseTime > 200) {
      status = "warning";
    } else if (Math.random() < 0.02) {
      status = Math.random() < 0.5 ? "maintenance" : "offline";
    } else {
      status = "online";
    }

    // Active alerts count
    const activeAlerts =
      status === "critical"
        ? Math.floor(Math.random() * 5) + 1
        : status === "warning"
        ? Math.floor(Math.random() * 3)
        : 0;

    // Is monitored
    const isMonitored = Math.random() < 0.95; // 95% are monitored

    // OS
    const os = OS_OPTIONS[Math.floor(Math.random() * OS_OPTIONS.length)];

    // Last ping timestamp - recent
    const lastPing = new Date(Date.now() - Math.random() * 300000); // Within last 5 minutes

    // Available storage (TB)
    const totalStorage = [0.5, 1, 2, 4, 8, 16][Math.floor(Math.random() * 6)];
    const usedStorage = Math.round(((totalStorage * diskUsage) / 100) * 100) / 100;
    const availableStorage = Math.round((totalStorage - usedStorage) * 100) / 100;

    // Generate CPU history for the last 30 data points (for chart visualization)
    const cpuHistory: number[] = [];
    let historicalCpu = cpuUsage;
    for (let j = 0; j < 30; j++) {
      // Generate realistic fluctuations around the current CPU value
      const change = (Math.random() - 0.5) * 15;
      historicalCpu = Math.min(100, Math.max(0, historicalCpu + change));
      cpuHistory.push(Math.round(historicalCpu * 10) / 10);
    }
    // Reverse so most recent is at the end
    cpuHistory.reverse();

    rows.push({
      id: serverId,
      serverId,
      serverName: `${datacenter.name} ${serverType.name} ${(i % 100) + 1}`,
      datacenter: datacenter.id,
      datacenterName: datacenter.name,
      region: datacenter.region,
      serverType: serverType.type,
      serverTypeName: serverType.name,
      status,
      cpuUsage,
      memoryUsage,
      diskUsage,
      networkIn,
      networkOut,
      activeConnections,
      requestsPerSec,
      responseTime,
      uptime,
      activeAlerts,
      isMonitored,
      os,
      lastPing: lastPing.toISOString(),
      totalStorage,
      usedStorage,
      availableStorage,
      cpuHistory,
    });
  }

  return rows;
};

// Run the generation and save to a file
function saveDataToFile() {
  console.log("Generating infrastructure monitoring dataset...");
  const data = generateInfrastructureData();
  console.log(`Generated ${data.length} server records`);

  const filePath = path.join(__dirname, "../public/data/infrastructure-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
