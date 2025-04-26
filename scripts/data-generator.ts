import { Row } from "simple-table-core";
import fs from "fs";
import path from "path";

// Base companies data
const BASE_COMPANIES = [
  { ticker: "AAPL", name: "Apple Inc.", sector: "Technology", baseprice: 182.52 },
  { ticker: "MSFT", name: "Microsoft Corporation", sector: "Technology", baseprice: 338.14 },
  { ticker: "GOOGL", name: "Alphabet Inc.", sector: "Technology", baseprice: 142.65 },
  { ticker: "AMZN", name: "Amazon.com Inc.", sector: "Technology", baseprice: 175.35 },
  { ticker: "META", name: "Meta Platforms Inc.", sector: "Technology", baseprice: 478.22 },
  { ticker: "TSLA", name: "Tesla Inc.", sector: "Technology", baseprice: 177.58 },
  { ticker: "JNJ", name: "Johnson & Johnson", sector: "Healthcare", baseprice: 147.52 },
  { ticker: "PFE", name: "Pfizer Inc.", sector: "Healthcare", baseprice: 26.95 },
  { ticker: "JPM", name: "JPMorgan Chase & Co.", sector: "Financial", baseprice: 182.06 },
  { ticker: "BAC", name: "Bank of America Corp.", sector: "Financial", baseprice: 38.34 },
  { ticker: "PG", name: "Procter & Gamble Co.", sector: "Consumer", baseprice: 169.85 },
  { ticker: "KO", name: "Coca-Cola Co.", sector: "Consumer", baseprice: 62.17 },
  { ticker: "XOM", name: "Exxon Mobil Corp.", sector: "Energy", baseprice: 113.9 },
  { ticker: "CVX", name: "Chevron Corp.", sector: "Energy", baseprice: 145.29 },
  { ticker: "GE", name: "General Electric Co.", sector: "Industrial", baseprice: 159.91 },
  { ticker: "BA", name: "Boeing Co.", sector: "Industrial", baseprice: 181.5 },
  { ticker: "VZ", name: "Verizon Communications Inc.", sector: "Telecom", baseprice: 40.81 },
  { ticker: "T", name: "AT&T Inc.", sector: "Telecom", baseprice: 17.16 },
];

// Generate a single company data point with variations
function generateCompanyData(
  baseCompany: (typeof BASE_COMPANIES)[0],
  rowId: number,
  dateOffset: number
): any {
  // Apply some random variations based on the date offset
  const randomFactor = Math.sin(dateOffset * 0.1) * 0.2 + Math.random() * 0.1;
  const priceChange = baseCompany.baseprice * randomFactor;
  const price = baseCompany.baseprice + priceChange;

  // Calculate a price change percentage
  const priceChangePercent = parseFloat(((priceChange / baseCompany.baseprice) * 100).toFixed(2));

  // Generate other metrics with some correlation to price change
  const marketCap = parseFloat((price * (Math.random() * 10 + 5)).toFixed(1));
  const peRatio = parseFloat((Math.random() * 40 + 5 + priceChangePercent).toFixed(1));
  const dividendYield = parseFloat((Math.random() * 5).toFixed(2));
  const revenueGrowth = parseFloat((Math.random() * 40 - 10 + priceChangePercent * 0.5).toFixed(1));
  const profitMargin = parseFloat((Math.random() * 30 + priceChangePercent * 0.2).toFixed(1));
  const riskFactor = Math.floor(Math.random() * 10) + 1;
  const esgScore = Math.floor(Math.random() * 80) + 20;
  const analystRating = parseFloat((Math.random() * 3 + 2).toFixed(1));

  return {
    rowMeta: { rowId, isExpanded: true },
    rowData: {
      sectorName: baseCompany.sector,
      ticker: baseCompany.ticker,
      companyName: baseCompany.name,
      price: parseFloat(price.toFixed(2)),
      priceChangePercent,
      marketCap,
      peRatio,
      dividendYield,
      revenueGrowth,
      profitMargin,
      riskFactor,
      esgScore,
      analystRating,
      date: new Date(Date.now() - dateOffset * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    },
  };
}

// Generate large dataset with historical data for each company
function generateLargeDataset(numDaysHistory: number = 600): Row[] {
  const data: Row[] = [];
  let rowId = 0;

  // For each day in history
  for (let day = 0; day < numDaysHistory; day++) {
    // For each company
    for (const company of BASE_COMPANIES) {
      const companyData = generateCompanyData(company, rowId++, day);
      data.push(companyData);
    }
  }

  return data;
}

// Run the generation and save to a file
function saveDataToFile() {
  console.log("Generating large dataset...");
  const data = generateLargeDataset();
  console.log(`Generated ${data.length} rows of data`);

  const filePath = path.join(process.cwd(), "src/app/examples/finance/large-financial-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// This will run when executed directly with Node.js
if (require.main === module) {
  saveDataToFile();
}

export { generateLargeDataset };
