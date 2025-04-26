// ES Module version of the sales data generator
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base sales regions and teams structure
const REGIONS = [
  { id: "NA", name: "North America", target: 5000000 },
  { id: "EMEA", name: "Europe & Middle East", target: 4200000 },
  { id: "APAC", name: "Asia Pacific", target: 3800000 },
  { id: "LATAM", name: "Latin America", target: 2500000 },
];

// Products data
const PRODUCTS = [
  { id: "SAAS-BASIC", name: "Basic SaaS Plan", basePrice: 99, category: "Software" },
  { id: "SAAS-PRO", name: "Professional SaaS Plan", basePrice: 299, category: "Software" },
  { id: "SAAS-ENT", name: "Enterprise SaaS Plan", basePrice: 999, category: "Software" },
  { id: "CONSULT-STD", name: "Standard Consulting", basePrice: 5000, category: "Services" },
  { id: "CONSULT-PREM", name: "Premium Consulting", basePrice: 15000, category: "Services" },
  { id: "TRAIN-BASIC", name: "Basic Training", basePrice: 1999, category: "Training" },
  { id: "TRAIN-ADV", name: "Advanced Training", basePrice: 3999, category: "Training" },
  { id: "HW-SERVER", name: "Server Hardware", basePrice: 8999, category: "Hardware" },
  { id: "HW-NETWORK", name: "Network Equipment", basePrice: 4599, category: "Hardware" },
  { id: "SUPPORT-STD", name: "Standard Support", basePrice: 499, category: "Support" },
  { id: "SUPPORT-24x7", name: "24x7 Premium Support", basePrice: 1499, category: "Support" },
];

// Sales representatives data
const SALES_REPS = [
  // North America Team
  {
    id: "REP001",
    name: "James Wilson",
    region: "NA",
    team: "Enterprise",
    experience: 8,
    baseQuota: 180000,
  },
  {
    id: "REP002",
    name: "Emily Davis",
    region: "NA",
    team: "Enterprise",
    experience: 6,
    baseQuota: 170000,
  },
  {
    id: "REP003",
    name: "Michael Johnson",
    region: "NA",
    team: "Mid-Market",
    experience: 5,
    baseQuota: 150000,
  },
  {
    id: "REP004",
    name: "Sarah Martinez",
    region: "NA",
    team: "Mid-Market",
    experience: 4,
    baseQuota: 145000,
  },
  {
    id: "REP005",
    name: "David Thompson",
    region: "NA",
    team: "SMB",
    experience: 3,
    baseQuota: 125000,
  },
  {
    id: "REP006",
    name: "Jessica Lee",
    region: "NA",
    team: "SMB",
    experience: 2,
    baseQuota: 120000,
  },
  {
    id: "REP007",
    name: "Robert Garcia",
    region: "NA",
    team: "SMB",
    experience: 1,
    baseQuota: 110000,
  },

  // EMEA Team
  {
    id: "REP008",
    name: "Thomas Müller",
    region: "EMEA",
    team: "Enterprise",
    experience: 7,
    baseQuota: 165000,
  },
  {
    id: "REP009",
    name: "Sophie Dubois",
    region: "EMEA",
    team: "Enterprise",
    experience: 5,
    baseQuota: 155000,
  },
  {
    id: "REP010",
    name: "Andreas Schmitt",
    region: "EMEA",
    team: "Mid-Market",
    experience: 4,
    baseQuota: 140000,
  },
  {
    id: "REP011",
    name: "Olivia Bennett",
    region: "EMEA",
    team: "Mid-Market",
    experience: 3,
    baseQuota: 135000,
  },
  {
    id: "REP012",
    name: "Pierre Laurent",
    region: "EMEA",
    team: "SMB",
    experience: 2,
    baseQuota: 115000,
  },
  {
    id: "REP013",
    name: "Emma Fischer",
    region: "EMEA",
    team: "SMB",
    experience: 1,
    baseQuota: 105000,
  },

  // APAC Team
  {
    id: "REP014",
    name: "Liu Wei",
    region: "APAC",
    team: "Enterprise",
    experience: 6,
    baseQuota: 160000,
  },
  {
    id: "REP015",
    name: "Akira Tanaka",
    region: "APAC",
    team: "Enterprise",
    experience: 5,
    baseQuota: 150000,
  },
  {
    id: "REP016",
    name: "Ravi Patel",
    region: "APAC",
    team: "Mid-Market",
    experience: 4,
    baseQuota: 135000,
  },
  {
    id: "REP017",
    name: "Mei Chen",
    region: "APAC",
    team: "Mid-Market",
    experience: 2,
    baseQuota: 125000,
  },
  {
    id: "REP018",
    name: "Kim Seung-Min",
    region: "APAC",
    team: "SMB",
    experience: 1,
    baseQuota: 100000,
  },

  // LATAM Team
  {
    id: "REP019",
    name: "Carlos Rodriguez",
    region: "LATAM",
    team: "Enterprise",
    experience: 5,
    baseQuota: 145000,
  },
  {
    id: "REP020",
    name: "Isabella Fernandez",
    region: "LATAM",
    team: "Mid-Market",
    experience: 3,
    baseQuota: 130000,
  },
  {
    id: "REP021",
    name: "Mateo Lopez",
    region: "LATAM",
    team: "SMB",
    experience: 2,
    baseQuota: 110000,
  },
  {
    id: "REP022",
    name: "Valentina Diaz",
    region: "LATAM",
    team: "SMB",
    experience: 1,
    baseQuota: 100000,
  },
];

// Generate a single sale record
function generateSaleRecord(repData, rowId, monthOffset, weekInMonth) {
  // Create date based on offsets
  const date = new Date();
  date.setMonth(date.getMonth() - monthOffset);
  date.setDate(1 + weekInMonth * 7);
  const formattedDate = date.toISOString().split("T")[0];

  // Use month offset to create realistic sales patterns
  const seasonality = Math.sin(monthOffset * 0.5) * 0.15; // Seasonal factor
  const trend = Math.min(0.1, Math.max(-0.1, (monthOffset / 24) * 0.2)); // Long-term trend
  const experience = Math.min(1, Math.max(0.5, repData.experience / 10)); // Experience factor

  // Select a random product
  const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

  // Determine if this was a won deal
  const baseWinProbability = 0.5 + seasonality + trend + experience * 0.2;
  const isWon = Math.random() < baseWinProbability;

  // Calculate deal size with some randomness
  const multiplier = 1 + Math.random() * 2; // Deal size multiplier
  const dealSize = parseFloat((product.basePrice * multiplier).toFixed(2));

  // Number of units sold (more for cheaper products)
  const units = Math.max(1, Math.floor(50000 / product.basePrice) * Math.random() * 2);

  // Calculate deal value
  const dealValue = parseFloat((dealSize * units).toFixed(2));

  // Calculate quota for this period (month)
  const monthlyQuota = parseFloat((repData.baseQuota / 12).toFixed(2));

  // Determine sales cycle length (days)
  const baseSalesCycle = 15 + product.basePrice / 100;
  const salesCycleLength = Math.floor(baseSalesCycle * (1 + Math.random() * 0.5));

  // Commission percentage based on product type and rep performance
  const baseCommission = product.category === "Software" ? 0.1 : 0.07;
  const commissionRate = parseFloat((baseCommission * (1 + experience * 0.3)).toFixed(3));

  // Calculate commission amount if won
  const commission = isWon ? parseFloat((dealValue * commissionRate).toFixed(2)) : 0;

  // Calculate quota attainment for this deal
  const quotaAttainment = isWon ? parseFloat(((dealValue / monthlyQuota) * 100).toFixed(1)) : 0;

  // Deal profitability
  const profitMargin = parseFloat((0.3 + Math.random() * 0.3).toFixed(2));
  const dealProfit = isWon ? parseFloat((dealValue * profitMargin).toFixed(2)) : 0;

  // Customer metrics
  const isNewCustomer = Math.random() < 0.4;
  const customerSatisfaction = Math.floor(Math.random() * 5) + 1; // 1-5 stars

  return {
    rowMeta: { rowId, isExpanded: true },
    rowData: {
      repId: repData.id,
      repName: repData.name,
      region: repData.region,
      regionName: REGIONS.find((r) => r.id === repData.region)?.name,
      team: repData.team,
      date: formattedDate,
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
      quarter: `Q${Math.floor(date.getMonth() / 3) + 1}`,
      productId: product.id,
      productName: product.name,
      productCategory: product.category,
      dealSize: dealSize,
      units: units,
      dealValue: dealValue,
      isWon: isWon,
      winRatio: parseFloat(baseWinProbability.toFixed(2)),
      monthlyQuota: monthlyQuota,
      quotaAttainment: quotaAttainment,
      salesCycleLength: salesCycleLength,
      commissionRate: commissionRate,
      commission: commission,
      profitMargin: profitMargin,
      dealProfit: dealProfit,
      isNewCustomer: isNewCustomer,
      customerSatisfaction: customerSatisfaction,
      experience: repData.experience,
    },
  };
}

// Generate large dataset of sales data
function generateLargeSalesDataset(numMonths = 24, weeksPerMonth = 4) {
  const data = [];
  let rowId = 0;

  // For each month in history
  for (let month = 0; month < numMonths; month++) {
    // For each week in month
    for (let week = 0; week < weeksPerMonth; week++) {
      // For each sales rep
      for (const rep of SALES_REPS) {
        // Each rep has 1-3 deals per week
        const numDeals = Math.floor(Math.random() * 3) + 1;

        for (let deal = 0; deal < numDeals; deal++) {
          const saleData = generateSaleRecord(rep, rowId++, month, week);
          data.push(saleData);
        }
      }
    }
  }

  return data;
}

// Generate summarized data by region with children
function generateHierarchicalSalesData() {
  // First generate the raw data
  const rawData = generateLargeSalesDataset();
  console.log(`Generated ${rawData.length} individual sales records`);

  // Group data by region
  const regionData = {};
  const teamData = {};

  // Initialize region and team containers
  REGIONS.forEach((region) => {
    regionData[region.id] = [];
  });

  // Organize raw data into hierarchies
  rawData.forEach((record) => {
    const region = record.rowData.region;
    regionData[region].push(record);

    // Create team key
    const teamKey = `${region}-${record.rowData.team}`;
    if (!teamData[teamKey]) {
      teamData[teamKey] = [];
    }
    teamData[teamKey].push(record);
  });

  // Build hierarchical structure
  const hierarchicalData = [];
  let rowId = rawData.length; // Continue rowId sequence

  // For each region, create a parent row
  REGIONS.forEach((region) => {
    const regionRecords = regionData[region.id];
    if (regionRecords.length === 0) return;

    // Calculate region metrics
    const totalDealValue = regionRecords.reduce(
      (sum, record) => sum + (record.rowData.isWon ? record.rowData.dealValue : 0),
      0
    );
    const totalDeals = regionRecords.length;
    const wonDeals = regionRecords.filter((record) => record.rowData.isWon).length;
    const winRate = parseFloat(((wonDeals / totalDeals) * 100).toFixed(1));
    const avgDealSize = parseFloat((totalDealValue / wonDeals).toFixed(2));
    const avgCycleLength = parseFloat(
      (
        regionRecords.reduce((sum, record) => sum + record.rowData.salesCycleLength, 0) / totalDeals
      ).toFixed(1)
    );
    const totalCommission = parseFloat(
      regionRecords.reduce((sum, record) => sum + record.rowData.commission, 0).toFixed(2)
    );
    const avgQuotaAttainment = parseFloat(
      (
        regionRecords.reduce((sum, record) => sum + record.rowData.quotaAttainment, 0) / totalDeals
      ).toFixed(1)
    );

    // Get the teams in this region
    const teams = Array.from(new Set(regionRecords.map((record) => record.rowData.team)));
    const teamRows = [];

    // For each team, create a sub-level
    teams.forEach((team) => {
      const teamKey = `${region.id}-${team}`;
      const teamRecords = teamData[teamKey];

      // Calculate team metrics
      const teamDealValue = teamRecords.reduce(
        (sum, record) => sum + (record.rowData.isWon ? record.rowData.dealValue : 0),
        0
      );
      const teamDeals = teamRecords.length;
      const teamWonDeals = teamRecords.filter((record) => record.rowData.isWon).length;
      const teamWinRate = parseFloat(((teamWonDeals / teamDeals) * 100).toFixed(1));
      const teamAvgDealSize = parseFloat((teamDealValue / teamWonDeals).toFixed(2));
      const teamAvgCycleLength = parseFloat(
        (
          teamRecords.reduce((sum, record) => sum + record.rowData.salesCycleLength, 0) / teamDeals
        ).toFixed(1)
      );
      const teamTotalCommission = parseFloat(
        teamRecords.reduce((sum, record) => sum + record.rowData.commission, 0).toFixed(2)
      );
      const teamAvgQuotaAttainment = parseFloat(
        (
          teamRecords.reduce((sum, record) => sum + record.rowData.quotaAttainment, 0) / teamDeals
        ).toFixed(1)
      );

      // Add team row
      teamRows.push({
        rowMeta: {
          rowId: rowId++,
          isExpanded: true,
          children: teamRecords,
        },
        rowData: {
          repId: "—",
          repName: `${team} Team`,
          region: region.id,
          regionName: region.name,
          team: team,
          date: "—",
          month: "—",
          year: "—",
          quarter: "—",
          productId: "—",
          productName: "—",
          productCategory: "—",
          dealSize: teamAvgDealSize,
          units: "—",
          dealValue: teamDealValue,
          isWon: "—",
          winRatio: teamWinRate,
          monthlyQuota: "—",
          quotaAttainment: teamAvgQuotaAttainment,
          salesCycleLength: teamAvgCycleLength,
          commissionRate: "—",
          commission: teamTotalCommission,
          profitMargin: "—",
          dealProfit: "—",
          isNewCustomer: "—",
          customerSatisfaction: "—",
          experience: "—",
        },
      });
    });

    // Add region row with teams as children
    hierarchicalData.push({
      rowMeta: {
        rowId: rowId++,
        isExpanded: true,
        children: teamRows,
      },
      rowData: {
        repId: "—",
        repName: "—",
        region: region.id,
        regionName: region.name,
        team: "—",
        date: "—",
        month: "—",
        year: "—",
        quarter: "—",
        productId: "—",
        productName: "—",
        productCategory: "—",
        dealSize: avgDealSize,
        units: "—",
        dealValue: totalDealValue,
        isWon: "—",
        winRatio: winRate,
        monthlyQuota: "—",
        quotaAttainment: avgQuotaAttainment,
        salesCycleLength: avgCycleLength,
        commissionRate: "—",
        commission: totalCommission,
        profitMargin: "—",
        dealProfit: "—",
        isNewCustomer: "—",
        customerSatisfaction: "—",
        experience: "—",
      },
    });
  });

  return hierarchicalData;
}

// Run the generation and save to a file
async function saveDataToFile() {
  console.log("Generating sales performance dataset...");
  const data = generateHierarchicalSalesData();
  console.log(`Generated hierarchical data with ${data.length} top-level regions`);

  const filePath = path.join(__dirname, "sales-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
