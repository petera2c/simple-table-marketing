// ES Module version of the sales data generator
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    experience: 8,
    performanceRating: 0.85,
  },
  {
    id: "REP002",
    name: "Emily Davis",
    experience: 6,
    performanceRating: 0.78,
  },
  {
    id: "REP003",
    name: "Michael Johnson",
    experience: 5,
    performanceRating: 0.72,
  },
  {
    id: "REP004",
    name: "Sarah Martinez",
    experience: 4,
    performanceRating: 0.65,
  },
  {
    id: "REP005",
    name: "David Thompson",
    experience: 3,
    performanceRating: 0.62,
  },
  {
    id: "REP006",
    name: "Jessica Lee",
    experience: 2,
    performanceRating: 0.58,
  },
  {
    id: "REP007",
    name: "Robert Garcia",
    experience: 1,
    performanceRating: 0.55,
  },
  {
    id: "REP008",
    name: "Thomas Müller",
    experience: 7,
    performanceRating: 0.8,
  },
  {
    id: "REP009",
    name: "Sophie Dubois",
    experience: 5,
    performanceRating: 0.75,
  },
  {
    id: "REP010",
    name: "Andreas Schmitt",
    experience: 4,
    performanceRating: 0.68,
  },
  {
    id: "REP011",
    name: "Olivia Bennett",
    experience: 3,
    performanceRating: 0.63,
  },
  {
    id: "REP012",
    name: "Pierre Laurent",
    experience: 2,
    performanceRating: 0.6,
  },
  {
    id: "REP013",
    name: "Emma Fischer",
    experience: 1,
    performanceRating: 0.52,
  },
  {
    id: "REP014",
    name: "Liu Wei",
    experience: 6,
    performanceRating: 0.77,
  },
  {
    id: "REP015",
    name: "Akira Tanaka",
    experience: 5,
    performanceRating: 0.76,
  },
  {
    id: "REP016",
    name: "Ravi Patel",
    experience: 4,
    performanceRating: 0.7,
  },
  {
    id: "REP017",
    name: "Mei Chen",
    experience: 2,
    performanceRating: 0.59,
  },
  {
    id: "REP018",
    name: "Kim Seung-Min",
    experience: 1,
    performanceRating: 0.51,
  },
  {
    id: "REP019",
    name: "Carlos Rodriguez",
    experience: 5,
    performanceRating: 0.73,
  },
  {
    id: "REP020",
    name: "Isabella Fernandez",
    experience: 3,
    performanceRating: 0.64,
  },
  {
    id: "REP021",
    name: "Mateo Lopez",
    experience: 2,
    performanceRating: 0.57,
  },
  {
    id: "REP022",
    name: "Valentina Diaz",
    experience: 1,
    performanceRating: 0.53,
  },
];

// Generate realistic sales record
function generateRealisticSaleRecord(repData, recordId) {
  // Product tier selection - more experienced reps sell more enterprise products
  const repExperienceWeight = repData.experience / 10;
  const tierWeights = [
    0.7 - repExperienceWeight * 0.4, // Lower tier products
    0.2, // Mid tier products
    0.1 + repExperienceWeight * 0.4, // Higher tier products
  ];

  let productTier;
  const tierRoll = Math.random();
  if (tierRoll < tierWeights[0]) {
    productTier = 0; // Lower tier
  } else if (tierRoll < tierWeights[0] + tierWeights[1]) {
    productTier = 1; // Mid tier
  } else {
    productTier = 2; // Higher tier
  }

  // Select product based on tier
  let product;
  if (productTier === 0) {
    // Lower price products (SAAS-BASIC, SUPPORT-STD)
    const lowerTierProducts = PRODUCTS.filter((p) => p.basePrice < 500);
    product = lowerTierProducts[Math.floor(Math.random() * lowerTierProducts.length)];
  } else if (productTier === 1) {
    // Mid price products (SAAS-PRO, TRAIN-BASIC)
    const midTierProducts = PRODUCTS.filter((p) => p.basePrice >= 500 && p.basePrice < 4000);
    product = midTierProducts[Math.floor(Math.random() * midTierProducts.length)];
  } else {
    // Higher price products (SAAS-ENT, CONSULT-PREM, HW-SERVER)
    const highTierProducts = PRODUCTS.filter((p) => p.basePrice >= 4000);
    product = highTierProducts[Math.floor(Math.random() * highTierProducts.length)];
  }

  // Calculate deal size with reasonable multiplier
  const baseMultiplier = 1 + Math.random() * 0.4; // Base 1-1.4x multiplier
  const tierMultiplier = 1 + productTier * 0.3; // Higher tier means potentially larger deals
  const finalMultiplier = baseMultiplier * tierMultiplier;
  const dealSize = parseFloat((product.basePrice * finalMultiplier).toFixed(2));

  // Win probability influenced by rep performance and experience
  const baseWinRate = 0.35 + repData.performanceRating * 0.3;
  const experienceBonus = repData.experience * 0.02;
  const finalWinRate = Math.min(0.85, baseWinRate + experienceBonus);

  // Determine status
  const statusRoll = Math.random();
  let status;
  if (statusRoll < finalWinRate) {
    status = "Won";
  } else if (statusRoll < finalWinRate + 0.1) {
    status = "Lost";
  } else {
    status = "In Progress";
  }

  // Generate profit margin based on product category
  let baseProfitMargin;
  switch (product.category) {
    case "Software":
      baseProfitMargin = 0.7; // Software has high margins
      break;
    case "Hardware":
      baseProfitMargin = 0.25; // Hardware has lower margins
      break;
    case "Services":
    case "Training":
      baseProfitMargin = 0.4; // Services have medium margins
      break;
    case "Support":
      baseProfitMargin = 0.55; // Support has good margins
      break;
    default:
      baseProfitMargin = 0.45;
  }

  // Add some variability to profit margin
  const margin = parseFloat((baseProfitMargin + (Math.random() * 0.2 - 0.1)).toFixed(2));

  // Commission rates vary by product and rep experience
  const baseCommissionRate = product.category === "Software" ? 0.1 : 0.08;
  const experienceCommissionBonus = (repData.experience / 10) * 0.03;
  const commissionRate = parseFloat((baseCommissionRate + experienceCommissionBonus).toFixed(3));

  // Calculate commission only for won deals
  const commission = status === "Won" ? parseFloat((dealSize * commissionRate).toFixed(2)) : 0;

  // Generate a random close date in the past 90 days (YYYY-MM-DD format)
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 90));
  const date = pastDate.toISOString().split("T")[0];

  // Generate quarter from date
  const month = pastDate.getMonth();
  const quarter = `Q${Math.floor(month / 3) + 1} ${pastDate.getFullYear()}`;

  // Generate region
  const regions = ["North America", "Europe", "Asia Pacific", "Latin America"];
  const region = regions[Math.floor(Math.random() * regions.length)];

  // Generate sales channel
  const channels = ["Direct Sales", "Partner", "Online", "Inbound"];
  const salesChannel = channels[Math.floor(Math.random() * channels.length)];

  // Generate customer type
  const customerTypes = ["Enterprise", "SMB", "Startup", "Government"];
  const customerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];

  return {
    product,
    dealSize,
    margin,
    commission,
    quarter,
    region,
    salesChannel,
    customerType,
    status,
    date,
  };
}

// Generate realistic dataset
function generateRealisticSalesDataset(numRecords = 200) {
  const salesData = [];

  for (let i = 0; i < numRecords; i++) {
    // Select a random sales rep
    const rep = SALES_REPS[Math.floor(Math.random() * SALES_REPS.length)];

    // Generate the sale record
    const saleRecord = generateRealisticSaleRecord(rep, i + 1);

    // Create flat row structure
    salesData.push({
      id: `SALE-${String(i + 1).padStart(4, "0")}`,
      date: saleRecord.date,
      repId: rep.id,
      repName: rep.name,
      repExperience: rep.experience,
      repPerformance: rep.performanceRating,
      productId: saleRecord.product.id,
      productName: saleRecord.product.name,
      productCategory: saleRecord.product.category,
      basePrice: saleRecord.product.basePrice,
      dealSize: saleRecord.dealSize,
      margin: saleRecord.margin,
      commission: saleRecord.commission,
      quarter: saleRecord.quarter,
      region: saleRecord.region,
      salesChannel: saleRecord.salesChannel,
      customerType: saleRecord.customerType,
      status: saleRecord.status,
    });
  }

  return salesData;
}

// Helper function for weighted random selection
function weightedRandomIndex(weights) {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < weights.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return i;
    }
  }

  return weights.length - 1; // Fallback
}

// Run the generation and save to a file
async function saveDataToFile() {
  console.log("Generating realistic sales dataset...");
  const data = generateRealisticSalesDataset();
  console.log(`Generated ${data.length} sales records`);

  const filePath = path.join(__dirname, "../src/examples/sales/sales-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
