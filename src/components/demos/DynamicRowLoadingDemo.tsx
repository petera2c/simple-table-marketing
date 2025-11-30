import { useState, useCallback } from "react";
import { SimpleTable, HeaderObject, Theme, Row, OnRowGroupExpandProps } from "simple-table-core";
import "simple-table-core/styles.css";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface Region extends Row {
  id: string;
  name: string;
  type: "region";
  totalSales: number;
  totalRevenue: number;
  activeStores: number;
  avgRating: string;
  lastUpdate: string;
  stores?: Store[];
}

interface Store extends Row {
  id: string;
  name: string;
  type: "store";
  totalSales: number;
  totalRevenue: number;
  activeStores?: number;
  avgRating: string;
  lastUpdate: string;
  products?: Product[];
}

interface Product extends Row {
  id: string;
  name: string;
  type: "product";
  totalSales: number;
  totalRevenue: number;
  activeStores?: number;
  avgRating: string;
  lastUpdate: string;
}

type TableRow = Region | Store | Product;

// ============================================================================
// HEADERS CONFIGURATION
// ============================================================================

const HEADERS: HeaderObject[] = [
  {
    accessor: "name",
    label: "Name",
    width: 280,
    expandable: true,
    type: "string",
    pinned: "left",
  },
  {
    accessor: "type",
    label: "Type",
    width: 100,
    type: "string",
  },
  {
    accessor: "totalSales",
    label: "Total Sales",
    width: 120,
    type: "number",
    align: "right",
    aggregation: { type: "sum" },
    valueFormatter: ({ value }) => {
      if (typeof value !== "number") return "—";
      return value.toLocaleString();
    },
  },
  {
    accessor: "totalRevenue",
    label: "Revenue",
    width: 140,
    type: "number",
    align: "right",
    aggregation: { type: "sum" },
    valueFormatter: ({ value }) => {
      if (typeof value !== "number") return "—";
      return `$${value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  {
    accessor: "activeStores",
    label: "Stores",
    width: 100,
    type: "number",
    align: "right",
    valueFormatter: ({ value }) => {
      if (typeof value !== "number") return "—";
      return value.toLocaleString();
    },
  },
  {
    accessor: "avgRating",
    label: "Avg Rating",
    width: 120,
    type: "string",
    align: "center",
  },
  {
    accessor: "lastUpdate",
    label: "Last Updated",
    width: 130,
    type: "date",
  },
];

// ============================================================================
// DATA GENERATION FUNCTIONS
// ============================================================================

const REGION_NAMES = [
  "North America - East",
  "North America - West",
  "Europe - North",
  "Europe - South",
  "Asia Pacific - East",
  "Asia Pacific - Southeast",
  "Middle East",
  "Latin America - North",
  "Latin America - South",
  "Africa - North",
  "Africa - South",
  "Oceania",
];

const STORE_NAMES = [
  "Manhattan Flagship",
  "Brooklyn Heights",
  "Boston Downtown",
  "Miami Beach",
  "Los Angeles Beverly Hills",
  "San Francisco Union Square",
  "Seattle Downtown",
  "Portland Pearl District",
  "London Oxford Street",
  "Stockholm Gamla Stan",
  "Copenhagen Strøget",
  "Amsterdam Central",
  "Paris Champs-Élysées",
  "Madrid Gran Vía",
  "Rome Via del Corso",
  "Barcelona La Rambla",
  "Tokyo Shibuya",
  "Shanghai Nanjing Road",
  "Hong Kong Central",
  "Seoul Gangnam",
  "Singapore Orchard",
  "Bangkok Siam",
  "Kuala Lumpur Bukit Bintang",
  "Jakarta Grand Indonesia",
  "Dubai Mall",
  "Abu Dhabi Marina",
  "Riyadh Kingdom Centre",
  "Mexico City Reforma",
  "Monterrey Valle",
  "Guadalajara Centro",
  "São Paulo Paulista",
  "Buenos Aires Palermo",
  "Santiago Providencia",
  "Cairo City Stars",
  "Casablanca Morocco Mall",
  "Tunis Centre Urbain",
  "Johannesburg Sandton",
  "Cape Town V&A Waterfront",
  "Sydney Pitt Street",
  "Melbourne Bourke Street",
  "Auckland Queen Street",
];

const PRODUCT_NAMES = [
  "Wireless Headphones Pro",
  "Smart Watch Elite",
  "USB-C Hub Deluxe",
  "Mechanical Keyboard RGB",
  "Ergonomic Mouse",
  "Webcam 4K",
  "Portable SSD 2TB",
  "Wireless Charger Pad",
  "Phone Stand Aluminum",
  "Bluetooth Speaker Mini",
  "Laptop Stand Pro",
  "Cable Organizer Set",
  "Gaming Mouse Elite",
  "Noise Cancelling Headset",
  "RGB Desk Mat XL",
  "Wireless Presenter",
  "Document Camera",
  "Smart Pen Digital",
  "Monitor Arm Dual",
  "Docking Station Pro",
  "Microphone USB Studio",
  "Tablet Stand Adjustable",
  "HDMI Switch 4K",
  "Laptop Cooling Pad",
  "Blue Light Blocking Glasses",
  "Anti-Glare Screen Protector",
  "Laptop Privacy Filter",
  "Wireless Charging Pad Trio",
  "MagSafe Car Mount",
  "Charging Cable Braided 10ft",
  "Ergonomic Vertical Mouse",
  "Trackball Mouse Wireless",
  "Gaming Mouse Pad XXL",
  "Keyboard Wrist Rest",
  "Monitor Privacy Filter",
  "Laptop Sleeve Premium",
  "Desktop Mic Arm",
  "Cable Management Box",
  "USB Hub 7-Port",
  "Ergonomic Chair Cushion",
  "Footrest Adjustable",
  "Desk Lamp LED Smart",
  "Portable Monitor 15.6",
  "Screen Cleaning Kit",
  "Desk Organizer Bamboo",
  "Wireless Trackpad",
  "Numeric Keypad Wireless",
  "Presentation Clicker",
  "Gaming Controller Pro",
  "Racing Wheel Set",
];

// Seeded random number generator for consistent results per ID
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash = hash & hash;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
};

const getRandomInt = (seed: string, min: number, max: number) => {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
};

const getRandomRating = (seed: string) => {
  const rating = 4.0 + seededRandom(seed + "rating") * 1.0;
  return rating.toFixed(1);
};

const getRandomDate = (seed: string) => {
  const daysAgo = getRandomInt(seed + "date", 0, 5);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};

// Generate stores for a region
const generateStoresForRegion = (regionId: string): Store[] => {
  const regionIndex = parseInt(regionId.split("-")[1]);
  const numStores = getRandomInt(regionId, 3, 4);
  const stores: Store[] = [];

  const startIndex = (regionIndex - 1) * 3; // Ensure unique store names per region

  for (let i = 0; i < numStores; i++) {
    const storeId = `STORE-${regionIndex}${String(i + 1).padStart(2, "0")}`;
    const storeIndex = startIndex + i;
    const storeName = STORE_NAMES[storeIndex % STORE_NAMES.length];

    const totalSales = getRandomInt(storeId, 10000, 25000);
    const avgPrice = getRandomInt(storeId + "price", 25, 35);
    const totalRevenue = totalSales * avgPrice;

    stores.push({
      id: storeId,
      name: storeName,
      type: "store",
      totalSales,
      totalRevenue,
      avgRating: getRandomRating(storeId),
      lastUpdate: getRandomDate(storeId),
    });
  }

  return stores;
};

// Generate products for a store
const generateProductsForStore = (storeId: string): Product[] => {
  const numProducts = getRandomInt(storeId, 3, 5);
  const products: Product[] = [];

  // Use store ID to get consistent but unique product selection
  const storeNumber = parseInt(storeId.split("-")[1]);
  const startIndex = storeNumber * 3;

  for (let i = 0; i < numProducts; i++) {
    const productId = `PROD-${storeId.split("-")[1]}-${i + 1}`;
    const productIndex = (startIndex + i) % PRODUCT_NAMES.length;
    const productName = PRODUCT_NAMES[productIndex];

    const totalSales = getRandomInt(productId, 2000, 8000);
    const avgPrice = getRandomInt(productId + "price", 20, 40);
    const totalRevenue = totalSales * avgPrice;

    products.push({
      id: productId,
      name: productName,
      type: "product",
      totalSales,
      totalRevenue,
      avgRating: getRandomRating(productId),
      lastUpdate: getRandomDate(productId),
    });
  }

  return products;
};

// Generate initial regions
const generateInitialRegions = (): Region[] => {
  return REGION_NAMES.map((name, index) => {
    const regionId = `REG-${index + 1}`;
    const numStores = getRandomInt(regionId, 3, 4);

    // Calculate aggregate data for the region
    const stores = generateStoresForRegion(regionId);
    const totalSales = stores.reduce((sum, store) => sum + store.totalSales, 0);
    const totalRevenue = stores.reduce((sum, store) => sum + store.totalRevenue, 0);
    const avgRating = (
      stores.reduce((sum, store) => sum + parseFloat(store.avgRating), 0) / stores.length
    ).toFixed(1);

    return {
      id: regionId,
      name,
      type: "region",
      totalSales,
      totalRevenue,
      activeStores: numStores,
      avgRating,
      lastUpdate: getRandomDate(regionId),
    };
  });
};

// ============================================================================
// SIMULATED API FUNCTIONS
// ============================================================================

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated API: Fetch stores for a region
const fetchStoresForRegion = async (regionId: string): Promise<Store[]> => {
  await delay(1500); // Simulate network delay
  return generateStoresForRegion(regionId);
};

// Simulated API: Fetch products for a store
const fetchProductsForStore = async (storeId: string): Promise<Product[]> => {
  await delay(1000); // Simulate network delay
  return generateProductsForStore(storeId);
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const updateRowChildren = (
  rows: Region[],
  rowId: string,
  groupingKey: string,
  children: Store[] | Product[]
): Region[] => {
  return rows.map((row) => {
    // Check if this is the region we're looking for
    if (row.id === rowId) {
      return { ...row, [groupingKey]: children };
    }

    // Recursively check stores if they exist
    if (row.stores && Array.isArray(row.stores)) {
      return {
        ...row,
        stores: row.stores.map((store) => {
          if (store.id === rowId) {
            return { ...store, [groupingKey]: children };
          }
          return store;
        }),
      };
    }

    return row;
  });
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const DynamicRowLoadingDemo = ({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) => {
  // Initialize with regions only (no stores/products loaded yet)
  const [rows, setRows] = useState<Region[]>(() => generateInitialRegions());

  const handleRowExpand = useCallback(
    async ({ row, rowId, depth, groupingKey, isExpanded }: OnRowGroupExpandProps) => {
      // Don't fetch if collapsing
      if (!isExpanded) {
        return;
      }

      // Don't fetch if data already exists
      if (groupingKey && row[groupingKey] && (row[groupingKey] as any[]).length > 0) {
        return;
      }

      if (depth === 0 && groupingKey === "stores") {
        // Fetch stores from "API"
        const stores = await fetchStoresForRegion(String(rowId));

        // Update with fetched data
        setRows((prevRows) => updateRowChildren(prevRows, String(rowId), "stores", stores));
      } else if (depth === 1 && groupingKey === "products") {
        // Fetch products from "API"
        const products = await fetchProductsForStore(String(rowId));

        // Update with fetched data
        setRows((prevRows) => updateRowChildren(prevRows, String(rowId), "products", products));
      }
    },
    []
  );

  return (
    <SimpleTable
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      expandAll={false}
      height={height}
      onRowGroupExpand={handleRowExpand}
      rowGrouping={["stores", "products"]}
      rowIdAccessor="id"
      rows={rows}
      selectableCells
      theme={theme}
      useOddEvenRowBackground
    />
  );
};

export default DynamicRowLoadingDemo;
