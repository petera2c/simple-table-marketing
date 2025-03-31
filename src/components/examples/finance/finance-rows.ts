import { Row } from "simple-table-core";

// Generate realistic finance data
export const generateFinanceData = (): Row[] => {
  const sectors = ["Technology", "Healthcare", "Financial", "Energy", "Consumer Goods", "Utilities", "Materials"];
  const companyPrefixes = ["Tech", "Global", "First", "Next", "Apex", "Prime", "Elite"];
  const companySuffixes = ["Corp", "Inc", "Group", "Partners", "Holdings", "Systems", "Solutions"];
  const regions = ["North America", "Europe", "Asia", "Latin America", "Middle East", "Africa", "Oceania"];
  let rowId = 0;

  return sectors.map((sector) => {
    const numCompanies = Math.floor(Math.random() * 7) + 3; // 3 to 9 children
    const children = Array.from({ length: numCompanies }, () => {
      const prefix = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
      const suffix = companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
      const price = parseFloat((Math.random() * 500 + 10).toFixed(2));
      const marketCap = parseFloat((Math.random() * 900 + 100).toFixed(1));
      const peRatio = parseFloat((Math.random() * 40 + 5).toFixed(1));
      const dividendYield = parseFloat((Math.random() * 5).toFixed(2));
      const volume = Math.floor(Math.random() * 10) + 1;
      const revenueGrowth = parseFloat((Math.random() * 40 - 10).toFixed(1));
      const region = regions[Math.floor(Math.random() * regions.length)];
      const profitMargin = parseFloat((Math.random() * 30).toFixed(1));
      const riskFactor = Math.floor(Math.random() * 10) + 1;
      const esgScore = Math.floor(Math.random() * 80) + 20;
      const analystRating = parseFloat((Math.random() * 5).toFixed(1));

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

      return {
        rowMeta: { rowId: rowId++, isExpanded: true },
        rowData: {
          sectorName: sector,
          ticker: `${prefix.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 10)}${Math.floor(
            Math.random() * 10
          )}`,
          companyName: `${prefix} ${suffix}`,
          price,
          priceChangePercent,
          marketCap,
          peRatio,
          dividendYield,
          volume,
          region,
          revenueGrowth,
          profitMargin,
          riskFactor,
          esgScore,
          analystRating,
        },
      };
    });

    // Calculate sector totals and averages
    const avgPriceChange = parseFloat(
      (
        children.reduce((sum, child) => sum + (child.rowData.priceChangePercent as number), 0) / children.length
      ).toFixed(2)
    );
    const avgPERatio = parseFloat(
      (children.reduce((sum, child) => sum + (child.rowData.peRatio as number), 0) / children.length).toFixed(1)
    );
    const avgDividendYield = parseFloat(
      (children.reduce((sum, child) => sum + (child.rowData.dividendYield as number), 0) / children.length).toFixed(2)
    );
    const totalMarketCap = parseFloat(
      children.reduce((sum, child) => sum + (child.rowData.marketCap as number), 0).toFixed(1)
    );
    const totalVolume = children.reduce((sum, child) => sum + (child.rowData.volume as number), 0);
    const avgESGScore = Math.round(
      children.reduce((sum, child) => sum + (child.rowData.esgScore as number), 0) / children.length
    );

    return {
      rowMeta: { rowId: rowId++, isExpanded: true, children },
      rowData: {
        sectorName: sector,
        ticker: "—",
        companyName: `${sector} Sector Summary`,
        price: "—",
        priceChangePercent: avgPriceChange,
        marketCap: totalMarketCap,
        peRatio: avgPERatio,
        dividendYield: avgDividendYield,
        volume: totalVolume,
        region: "Global",
        revenueGrowth: "—",
        profitMargin: "—",
        riskFactor: "—",
        esgScore: avgESGScore,
        analystRating: "—",
      },
    };
  });
};
