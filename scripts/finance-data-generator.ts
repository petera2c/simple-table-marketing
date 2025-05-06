import type { Row } from "simple-table-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define companies data with realistic dividend yields
const COMPANIES = [
  // Tech Giants - Lower dividend yields for growth-focused companies
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 182.52,
    marketCap: 2852.4,
    hasDividend: true,
    baseDividendYield: 0.55,
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    price: 338.14,
    marketCap: 2512.9,
    hasDividend: true,
    baseDividendYield: 0.8,
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    price: 142.65,
    marketCap: 1789.3,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    price: 175.35,
    marketCap: 1811.2,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "META",
    name: "Meta Platforms Inc.",
    price: 478.22,
    marketCap: 1214.6,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc.",
    price: 177.58,
    marketCap: 567.2,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    price: 110.55,
    marketCap: 2724.1,
    hasDividend: true,
    baseDividendYield: 0.05,
  },
  {
    ticker: "NFLX",
    name: "Netflix Inc.",
    price: 628.55,
    marketCap: 272.3,
    hasDividend: false,
    baseDividendYield: 0,
  },

  // Healthcare - Typically stable dividends
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    price: 147.52,
    marketCap: 355.3,
    hasDividend: true,
    baseDividendYield: 3.0,
  },
  {
    ticker: "PFE",
    name: "Pfizer Inc.",
    price: 26.95,
    marketCap: 152.9,
    hasDividend: true,
    baseDividendYield: 4.7,
  },
  {
    ticker: "UNH",
    name: "UnitedHealth Group Inc.",
    price: 527.24,
    marketCap: 487.5,
    hasDividend: true,
    baseDividendYield: 1.4,
  },
  {
    ticker: "MRK",
    name: "Merck & Co Inc.",
    price: 105.11,
    marketCap: 265.8,
    hasDividend: true,
    baseDividendYield: 2.7,
  },
  {
    ticker: "ABT",
    name: "Abbott Laboratories",
    price: 107.57,
    marketCap: 187.1,
    hasDividend: true,
    baseDividendYield: 1.9,
  },
  {
    ticker: "LLY",
    name: "Eli Lilly & Co.",
    price: 785.2,
    marketCap: 745.2,
    hasDividend: true,
    baseDividendYield: 0.7,
  },
  {
    ticker: "TMO",
    name: "Thermo Fisher Scientific",
    price: 583.35,
    marketCap: 225.7,
    hasDividend: true,
    baseDividendYield: 0.3,
  },

  // Financial - Often higher dividend yields
  {
    ticker: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 182.06,
    marketCap: 522.7,
    hasDividend: true,
    baseDividendYield: 2.5,
  },
  {
    ticker: "BAC",
    name: "Bank of America Corp.",
    price: 38.34,
    marketCap: 301.2,
    hasDividend: true,
    baseDividendYield: 2.7,
  },
  {
    ticker: "WFC",
    name: "Wells Fargo & Co.",
    price: 56.94,
    marketCap: 204.1,
    hasDividend: true,
    baseDividendYield: 2.4,
  },
  {
    ticker: "V",
    name: "Visa Inc.",
    price: 275.96,
    marketCap: 583.2,
    hasDividend: true,
    baseDividendYield: 0.8,
  },
  {
    ticker: "MA",
    name: "Mastercard Inc.",
    price: 445.58,
    marketCap: 416.8,
    hasDividend: true,
    baseDividendYield: 0.6,
  },
  {
    ticker: "GS",
    name: "Goldman Sachs Group",
    price: 438.32,
    marketCap: 142.5,
    hasDividend: true,
    baseDividendYield: 2.3,
  },
  {
    ticker: "MS",
    name: "Morgan Stanley",
    price: 94.15,
    marketCap: 153.2,
    hasDividend: true,
    baseDividendYield: 3.4,
  },
  {
    ticker: "BLK",
    name: "BlackRock Inc.",
    price: 832.5,
    marketCap: 124.3,
    hasDividend: true,
    baseDividendYield: 2.5,
  },

  // Consumer - Stable companies with dividends
  {
    ticker: "PG",
    name: "Procter & Gamble Co.",
    price: 169.85,
    marketCap: 400.2,
    hasDividend: true,
    baseDividendYield: 2.4,
  },
  {
    ticker: "KO",
    name: "Coca-Cola Co.",
    price: 62.17,
    marketCap: 268.6,
    hasDividend: true,
    baseDividendYield: 3.0,
  },
  {
    ticker: "PEP",
    name: "PepsiCo Inc.",
    price: 169.55,
    marketCap: 233.2,
    hasDividend: true,
    baseDividendYield: 2.8,
  },
  {
    ticker: "WMT",
    name: "Walmart Inc.",
    price: 59.68,
    marketCap: 481.4,
    hasDividend: true,
    baseDividendYield: 1.4,
  },
  {
    ticker: "MCD",
    name: "McDonald's Corp.",
    price: 257.75,
    marketCap: 186.9,
    hasDividend: true,
    baseDividendYield: 2.3,
  },
  {
    ticker: "COST",
    name: "Costco Wholesale",
    price: 732.63,
    marketCap: 324.8,
    hasDividend: true,
    baseDividendYield: 0.7,
  },
  {
    ticker: "HD",
    name: "Home Depot Inc.",
    price: 345.15,
    marketCap: 342.5,
    hasDividend: true,
    baseDividendYield: 2.4,
  },
  {
    ticker: "NKE",
    name: "Nike Inc.",
    price: 93.86,
    marketCap: 142.6,
    hasDividend: true,
    baseDividendYield: 1.3,
  },

  // Energy - Higher dividend yields
  {
    ticker: "XOM",
    name: "Exxon Mobil Corp.",
    price: 113.9,
    marketCap: 453.2,
    hasDividend: true,
    baseDividendYield: 3.8,
  },
  {
    ticker: "CVX",
    name: "Chevron Corp.",
    price: 145.29,
    marketCap: 271.4,
    hasDividend: true,
    baseDividendYield: 4.1,
  },
  {
    ticker: "COP",
    name: "ConocoPhillips",
    price: 108.14,
    marketCap: 126.5,
    hasDividend: true,
    baseDividendYield: 2.9,
  },
  {
    ticker: "SLB",
    name: "Schlumberger NV",
    price: 43.44,
    marketCap: 62.1,
    hasDividend: true,
    baseDividendYield: 2.3,
  },
  {
    ticker: "EOG",
    name: "EOG Resources",
    price: 122.76,
    marketCap: 71.1,
    hasDividend: true,
    baseDividendYield: 3.0,
  },
  {
    ticker: "OXY",
    name: "Occidental Petroleum",
    price: 56.93,
    marketCap: 50.7,
    hasDividend: true,
    baseDividendYield: 1.4,
  },

  // Industrial - Mix of dividend policies
  {
    ticker: "GE",
    name: "General Electric Co.",
    price: 159.91,
    marketCap: 174.5,
    hasDividend: true,
    baseDividendYield: 0.3,
  },
  {
    ticker: "BA",
    name: "Boeing Co.",
    price: 181.5,
    marketCap: 110.9,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "HON",
    name: "Honeywell International Inc.",
    price: 201.58,
    marketCap: 131.7,
    hasDividend: true,
    baseDividendYield: 2.0,
  },
  {
    ticker: "CAT",
    name: "Caterpillar Inc.",
    price: 345.54,
    marketCap: 168.9,
    hasDividend: true,
    baseDividendYield: 1.8,
  },
  {
    ticker: "UPS",
    name: "United Parcel Service Inc.",
    price: 134.85,
    marketCap: 115.3,
    hasDividend: true,
    baseDividendYield: 4.2,
  },
  {
    ticker: "LMT",
    name: "Lockheed Martin",
    price: 459.72,
    marketCap: 110.3,
    hasDividend: true,
    baseDividendYield: 2.6,
  },
  {
    ticker: "RTX",
    name: "RTX Corporation",
    price: 94.12,
    marketCap: 123.7,
    hasDividend: true,
    baseDividendYield: 2.5,
  },
  {
    ticker: "DE",
    name: "Deere & Company",
    price: 381.49,
    marketCap: 107.2,
    hasDividend: true,
    baseDividendYield: 1.4,
  },

  // Telecom - Typically high dividend yields
  {
    ticker: "VZ",
    name: "Verizon Communications Inc.",
    price: 40.81,
    marketCap: 171.9,
    hasDividend: true,
    baseDividendYield: 6.7,
  },
  {
    ticker: "T",
    name: "AT&T Inc.",
    price: 17.16,
    marketCap: 123.0,
    hasDividend: true,
    baseDividendYield: 6.5,
  },
  {
    ticker: "CMCSA",
    name: "Comcast Corp.",
    price: 40.01,
    marketCap: 158.1,
    hasDividend: true,
    baseDividendYield: 2.9,
  },
  {
    ticker: "TMUS",
    name: "T-Mobile US",
    price: 165.89,
    marketCap: 196.4,
    hasDividend: false,
    baseDividendYield: 0,
  },

  // Tech - Enterprise/Software
  {
    ticker: "CRM",
    name: "Salesforce Inc.",
    price: 242.98,
    marketCap: 235.6,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    price: 518.42,
    marketCap: 233.2,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "ORCL",
    name: "Oracle Corporation",
    price: 117.73,
    marketCap: 323.5,
    hasDividend: true,
    baseDividendYield: 1.3,
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    price: 31.22,
    marketCap: 132.1,
    hasDividend: true,
    baseDividendYield: 1.6,
  },
  {
    ticker: "CSCO",
    name: "Cisco Systems",
    price: 47.75,
    marketCap: 193.4,
    hasDividend: true,
    baseDividendYield: 3.2,
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices",
    price: 157.1,
    marketCap: 253.9,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "IBM",
    name: "IBM Corporation",
    price: 173.35,
    marketCap: 158.7,
    hasDividend: true,
    baseDividendYield: 4.5,
  },

  // Retail and E-commerce
  {
    ticker: "SBUX",
    name: "Starbucks Corporation",
    price: 77.98,
    marketCap: 88.5,
    hasDividend: true,
    baseDividendYield: 2.5,
  },
  {
    ticker: "TGT",
    name: "Target Corporation",
    price: 141.58,
    marketCap: 65.4,
    hasDividend: true,
    baseDividendYield: 3.2,
  },
  {
    ticker: "LOW",
    name: "Lowe's Companies",
    price: 212.51,
    marketCap: 121.6,
    hasDividend: true,
    baseDividendYield: 2.0,
  },
  {
    ticker: "EBAY",
    name: "eBay Inc.",
    price: 51.67,
    marketCap: 26.2,
    hasDividend: true,
    baseDividendYield: 2.1,
  },
  {
    ticker: "ETSY",
    name: "Etsy Inc.",
    price: 65.49,
    marketCap: 7.7,
    hasDividend: false,
    baseDividendYield: 0,
  },

  // Others
  {
    ticker: "DIS",
    name: "Walt Disney Co.",
    price: 89.32,
    marketCap: 162.8,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "NFLX",
    name: "Netflix Inc.",
    price: 628.55,
    marketCap: 272.3,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "PYPL",
    name: "PayPal Holdings",
    price: 61.35,
    marketCap: 65.7,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "ABNB",
    name: "Airbnb Inc.",
    price: 144.71,
    marketCap: 92.1,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "UBER",
    name: "Uber Technologies",
    price: 67.28,
    marketCap: 139.7,
    hasDividend: false,
    baseDividendYield: 0,
  },
  {
    ticker: "ZM",
    name: "Zoom Video Communications",
    price: 62.63,
    marketCap: 18.9,
    hasDividend: false,
    baseDividendYield: 0,
  },
];

// Generate realistic finance data with simplified structure
export const generateFinanceData = (): Row[] => {
  let rowId = 0;

  return COMPANIES.map((company) => {
    // Use realistic company data as a base
    const price = company.price * (0.9 + Math.random() * 0.2); // +/- 10% from base price
    const marketCap = company.marketCap;

    // Calculate PE ratio based on sector characteristics
    let peRatio;
    if (company.ticker.match(/^(AMZN|TSLA|NVDA|NFLX|ZM|ETSY|ABNB|UBER)/)) {
      // Growth stocks typically have higher P/E
      peRatio = parseFloat((Math.random() * 50 + 40).toFixed(1));
    } else if (company.ticker.match(/^(XOM|CVX|COP|VZ|T|JPM|BAC|WFC)/)) {
      // Value stocks typically have lower P/E
      peRatio = parseFloat((Math.random() * 10 + 5).toFixed(1));
    } else {
      // Other stocks have moderate P/E
      peRatio = parseFloat((Math.random() * 20 + 15).toFixed(1));
    }

    // Only set dividend yield if the company has dividends
    let dividendYield = null;
    if (company.hasDividend) {
      // Minor randomization around the base dividend yield
      dividendYield = parseFloat(
        (company.baseDividendYield * (0.9 + Math.random() * 0.2)).toFixed(2)
      );
    }

    // Calculate a price change with more realistic distribution
    let priceChangePercent;
    const rand = Math.random();
    if (rand < 0.05) {
      // Rare big drops
      priceChangePercent = parseFloat((Math.random() * -15 - 5).toFixed(2));
    } else if (rand < 0.3) {
      // Common small drops
      priceChangePercent = parseFloat((Math.random() * -5).toFixed(2));
    } else if (rand < 0.7) {
      // Common small gains
      priceChangePercent = parseFloat((Math.random() * 5).toFixed(2));
    } else if (rand < 0.95) {
      // Common large gains
      priceChangePercent = parseFloat((Math.random() * 10).toFixed(2));
    } else {
      // Rare big gains
      priceChangePercent = parseFloat((Math.random() * 15 + 10).toFixed(2));
    }

    // Generate analyst rating data
    const ratings = ["Strong Buy", "Buy", "Hold", "Sell", "Strong Sell"];
    const randomRating = ratings[Math.floor(Math.random() * ratings.length)];

    // Generate a random date from the past 30 days in YYYY-MM-DD format
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - Math.floor(Math.random() * 30));
    const date = pastDate.toISOString().split("T")[0];

    // 70% chance of following a stock
    const isFollowed = Math.random() < 0.7;

    return {
      rowMeta: { rowId: rowId++ },
      rowData: {
        ticker: company.ticker,
        companyName: company.name,
        price,
        priceChangePercent,
        marketCap,
        peRatio,
        dividendYield,
        analystRating: randomRating,
        date,
        isFollowed,
      },
    };
  });
};

// Run the generation and save to a file
function saveDataToFile() {
  console.log("Generating finance dataset...");
  const data = generateFinanceData();
  console.log(`Generated ${data.length} finance records`);

  const filePath = path.join(__dirname, "../src/examples/finance/finance-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
