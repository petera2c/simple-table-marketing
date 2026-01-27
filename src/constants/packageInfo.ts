/**
 * Package information constants for table libraries
 * Single source of truth for bundle sizes, pricing, and URLs
 */

export interface PackageInfo {
  name: string;
  npmPackage: string;
  version?: string;
  bundleSizeMinGzip: string;
  bundleSizeMinGzipKB: number;
  bundlePhobiaUrl: string;
  pricing: {
    free: boolean;
    paidTier?: {
      name: string;
      pricePerDeveloperPerYear: number;
      additionalInfo?: string;
    };
  };
  officialWebsite?: string;
}

// Simple Table
export const SIMPLE_TABLE_INFO: PackageInfo = {
  name: "Simple Table",
  npmPackage: "simple-table-core",
  version: "2.2.7",
  bundleSizeMinGzip: "42 kB",
  bundleSizeMinGzipKB: 42,
  bundlePhobiaUrl: "https://bundlephobia.com/package/simple-table-core",
  pricing: {
    free: true,
  },
  officialWebsite: "https://www.simple-table.com",
};

// AG Grid
export const AG_GRID_COMMUNITY_INFO: PackageInfo = {
  name: "AG Grid Community",
  npmPackage: "ag-grid-community",
  bundleSizeMinGzip: "298.2 kB",
  bundleSizeMinGzipKB: 298.2,
  bundlePhobiaUrl: "https://bundlephobia.com/package/ag-grid-community",
  pricing: {
    free: true,
  },
  officialWebsite: "https://www.ag-grid.com",
};

export const AG_GRID_ENTERPRISE_INFO: PackageInfo = {
  name: "AG Grid Enterprise",
  npmPackage: "ag-grid-enterprise",
  bundleSizeMinGzip: "230.9 kB",
  bundleSizeMinGzipKB: 230.9,
  bundlePhobiaUrl: "https://bundlephobia.com/package/ag-grid-enterprise",
  pricing: {
    free: false,
    paidTier: {
      name: "Enterprise",
      pricePerDeveloperPerYear: 999,
      additionalInfo: "Plus $750 per additional deployment license",
    },
  },
  officialWebsite: "https://www.ag-grid.com/license-pricing",
};

export const AG_GRID_TOTAL_SIZE = "529.1 kB";
export const AG_GRID_TOTAL_SIZE_KB = 529.1;

// TanStack Table
export const TANSTACK_TABLE_INFO: PackageInfo = {
  name: "TanStack Table",
  npmPackage: "@tanstack/react-table",
  bundleSizeMinGzip: "15.2 kB",
  bundleSizeMinGzipKB: 15.2,
  bundlePhobiaUrl: "https://bundlephobia.com/package/@tanstack/react-table",
  pricing: {
    free: true,
  },
  officialWebsite: "https://tanstack.com/table",
};

// Handsontable
export const HANDSONTABLE_INFO: PackageInfo = {
  name: "Handsontable",
  npmPackage: "handsontable",
  bundleSizeMinGzip: "247.1 kB",
  bundleSizeMinGzipKB: 247.1,
  bundlePhobiaUrl: "https://bundlephobia.com/package/handsontable",
  pricing: {
    free: false,
    paidTier: {
      name: "Commercial",
      pricePerDeveloperPerYear: 990,
      additionalInfo: "Free for non-commercial use",
    },
  },
  officialWebsite: "https://handsontable.com/pricing",
};

// Material-UI Table (MRT)
export const MATERIAL_REACT_TABLE_INFO: PackageInfo = {
  name: "Material React Table",
  npmPackage: "material-react-table",
  bundleSizeMinGzip: "51.8 kB",
  bundleSizeMinGzipKB: 51.8,
  bundlePhobiaUrl: "https://bundlephobia.com/package/material-react-table",
  pricing: {
    free: true,
  },
  officialWebsite: "https://www.material-react-table.com",
};

// Ant Design Table
export const ANT_DESIGN_TABLE_INFO: PackageInfo = {
  name: "Ant Design Table",
  npmPackage: "antd",
  bundleSizeMinGzip: "126.3 kB",
  bundleSizeMinGzipKB: 126.3,
  bundlePhobiaUrl: "https://bundlephobia.com/package/antd",
  pricing: {
    free: true,
  },
  officialWebsite: "https://ant.design/components/table",
};

// Syncfusion
export const SYNCFUSION_GRID_INFO: PackageInfo = {
  name: "Syncfusion Spreadsheet",
  npmPackage: "@syncfusion/ej2-spreadsheet",
  bundleSizeMinGzip: "1 MB",
  bundleSizeMinGzipKB: 1000,
  bundlePhobiaUrl: "https://bundlephobia.com/package/@syncfusion/ej2-spreadsheet",
  pricing: {
    free: false,
    paidTier: {
      name: "Commercial",
      pricePerDeveloperPerYear: 995,
      additionalInfo: "Free for companies with less than $1M revenue",
    },
  },
  officialWebsite: "https://www.syncfusion.com/react-components/react-data-grid",
};

// Tabulator
export const TABULATOR_INFO: PackageInfo = {
  name: "Tabulator",
  npmPackage: "tabulator-tables",
  bundleSizeMinGzip: "98.9 kB",
  bundleSizeMinGzipKB: 98.9,
  bundlePhobiaUrl: "https://bundlephobia.com/package/tabulator-tables",
  pricing: {
    free: true,
  },
  officialWebsite: "http://tabulator.info",
};

// React wrapper for Tabulator
export const REACT_TABULATOR_INFO: PackageInfo = {
  name: "React Tabulator",
  npmPackage: "react-tabulator",
  bundleSizeMinGzip: "4.3 kB",
  bundleSizeMinGzipKB: 4.3,
  bundlePhobiaUrl: "https://bundlephobia.com/package/react-tabulator",
  pricing: {
    free: true,
  },
  officialWebsite: "http://tabulator.info/docs/5.5/frameworks#react",
};

export const TABULATOR_TOTAL_SIZE = "103.2 kB";
export const TABULATOR_TOTAL_SIZE_KB = 103.2;

// Helper function to get total bundle size
export function getTotalBundleSize(packages: PackageInfo[]): string {
  const totalKB = packages.reduce((sum, pkg) => sum + pkg.bundleSizeMinGzipKB, 0);
  return `${totalKB.toFixed(1)} kB`;
}

// Helper function to get pricing info
export function getPricingString(packageInfo: PackageInfo): string {
  if (packageInfo.pricing.free && !packageInfo.pricing.paidTier) {
    return "Free";
  }
  if (packageInfo.pricing.paidTier) {
    return `$${packageInfo.pricing.paidTier.pricePerDeveloperPerYear}/developer/year`;
  }
  return "Unknown";
}
