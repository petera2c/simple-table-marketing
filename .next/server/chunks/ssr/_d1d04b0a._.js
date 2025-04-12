module.exports = {

"[project]/src/app/examples/finance/finance-rows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateFinanceData": (()=>generateFinanceData)
});
// Define known companies by sector
const COMPANIES_BY_SECTOR = {
    Technology: [
        {
            ticker: "AAPL",
            name: "Apple Inc.",
            price: 182.52,
            marketCap: 2852.4
        },
        {
            ticker: "MSFT",
            name: "Microsoft Corporation",
            price: 338.14,
            marketCap: 2512.9
        },
        {
            ticker: "GOOGL",
            name: "Alphabet Inc.",
            price: 142.65,
            marketCap: 1789.3
        },
        {
            ticker: "AMZN",
            name: "Amazon.com Inc.",
            price: 175.35,
            marketCap: 1811.2
        },
        {
            ticker: "META",
            name: "Meta Platforms Inc.",
            price: 478.22,
            marketCap: 1214.6
        },
        {
            ticker: "TSLA",
            name: "Tesla Inc.",
            price: 177.58,
            marketCap: 567.2
        },
        {
            ticker: "NVDA",
            name: "NVIDIA Corporation",
            price: 110.55,
            marketCap: 2724.1
        },
        {
            ticker: "NFLX",
            name: "Netflix Inc.",
            price: 628.55,
            marketCap: 272.3
        }
    ],
    Healthcare: [
        {
            ticker: "JNJ",
            name: "Johnson & Johnson",
            price: 147.52,
            marketCap: 355.3
        },
        {
            ticker: "PFE",
            name: "Pfizer Inc.",
            price: 26.95,
            marketCap: 152.9
        },
        {
            ticker: "UNH",
            name: "UnitedHealth Group Inc.",
            price: 527.24,
            marketCap: 487.5
        },
        {
            ticker: "MRK",
            name: "Merck & Co Inc.",
            price: 105.11,
            marketCap: 265.8
        },
        {
            ticker: "ABT",
            name: "Abbott Laboratories",
            price: 107.57,
            marketCap: 187.1
        }
    ],
    Financial: [
        {
            ticker: "JPM",
            name: "JPMorgan Chase & Co.",
            price: 182.06,
            marketCap: 522.7
        },
        {
            ticker: "BAC",
            name: "Bank of America Corp.",
            price: 38.34,
            marketCap: 301.2
        },
        {
            ticker: "WFC",
            name: "Wells Fargo & Co.",
            price: 56.94,
            marketCap: 204.1
        },
        {
            ticker: "V",
            name: "Visa Inc.",
            price: 275.96,
            marketCap: 583.2
        },
        {
            ticker: "MA",
            name: "Mastercard Inc.",
            price: 445.58,
            marketCap: 416.8
        }
    ],
    Consumer: [
        {
            ticker: "PG",
            name: "Procter & Gamble Co.",
            price: 169.85,
            marketCap: 400.2
        },
        {
            ticker: "KO",
            name: "Coca-Cola Co.",
            price: 62.17,
            marketCap: 268.6
        },
        {
            ticker: "PEP",
            name: "PepsiCo Inc.",
            price: 169.55,
            marketCap: 233.2
        },
        {
            ticker: "WMT",
            name: "Walmart Inc.",
            price: 59.68,
            marketCap: 481.4
        },
        {
            ticker: "MCD",
            name: "McDonald's Corp.",
            price: 257.75,
            marketCap: 186.9
        }
    ],
    Energy: [
        {
            ticker: "XOM",
            name: "Exxon Mobil Corp.",
            price: 113.9,
            marketCap: 453.2
        },
        {
            ticker: "CVX",
            name: "Chevron Corp.",
            price: 145.29,
            marketCap: 271.4
        },
        {
            ticker: "COP",
            name: "ConocoPhillips",
            price: 108.14,
            marketCap: 126.5
        },
        {
            ticker: "SLB",
            name: "Schlumberger NV",
            price: 43.44,
            marketCap: 62.1
        }
    ],
    Industrial: [
        {
            ticker: "GE",
            name: "General Electric Co.",
            price: 159.91,
            marketCap: 174.5
        },
        {
            ticker: "BA",
            name: "Boeing Co.",
            price: 181.5,
            marketCap: 110.9
        },
        {
            ticker: "HON",
            name: "Honeywell International Inc.",
            price: 201.58,
            marketCap: 131.7
        },
        {
            ticker: "CAT",
            name: "Caterpillar Inc.",
            price: 345.54,
            marketCap: 168.9
        },
        {
            ticker: "UPS",
            name: "United Parcel Service Inc.",
            price: 134.85,
            marketCap: 115.3
        }
    ],
    Telecom: [
        {
            ticker: "VZ",
            name: "Verizon Communications Inc.",
            price: 40.81,
            marketCap: 171.9
        },
        {
            ticker: "T",
            name: "AT&T Inc.",
            price: 17.16,
            marketCap: 123.0
        },
        {
            ticker: "CMCSA",
            name: "Comcast Corp.",
            price: 40.01,
            marketCap: 158.1
        }
    ]
};
const generateFinanceData = ()=>{
    const sectors = Object.keys(COMPANIES_BY_SECTOR);
    let rowId = 0;
    return sectors.map((sector)=>{
        const companies = COMPANIES_BY_SECTOR[sector];
        const children = companies.map((company)=>{
            // Use realistic company data as a base
            const price = company.price * (0.9 + Math.random() * 0.2); // +/- 10% from base price
            const marketCap = company.marketCap;
            const peRatio = parseFloat((Math.random() * 40 + 5).toFixed(1));
            const dividendYield = parseFloat((Math.random() * 5).toFixed(2));
            const revenueGrowth = parseFloat((Math.random() * 40 - 10).toFixed(1));
            const profitMargin = parseFloat((Math.random() * 30).toFixed(1));
            const riskFactor = Math.floor(Math.random() * 10) + 1;
            const esgScore = Math.floor(Math.random() * 80) + 20;
            const analystRating = parseFloat((Math.random() * 3 + 2).toFixed(1)); // 2.0-5.0 range for ratings
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
                rowMeta: {
                    rowId: rowId++,
                    isExpanded: true
                },
                rowData: {
                    sectorName: sector,
                    ticker: company.ticker,
                    companyName: company.name,
                    price,
                    priceChangePercent,
                    marketCap,
                    peRatio,
                    dividendYield,
                    revenueGrowth,
                    profitMargin,
                    riskFactor,
                    esgScore,
                    analystRating
                }
            };
        });
        // Calculate sector totals and averages
        const avgPriceChange = parseFloat((children.reduce((sum, child)=>sum + child.rowData.priceChangePercent, 0) / children.length).toFixed(2));
        const avgPERatio = parseFloat((children.reduce((sum, child)=>sum + child.rowData.peRatio, 0) / children.length).toFixed(1));
        const avgDividendYield = parseFloat((children.reduce((sum, child)=>sum + child.rowData.dividendYield, 0) / children.length).toFixed(2));
        const totalMarketCap = parseFloat(children.reduce((sum, child)=>sum + child.rowData.marketCap, 0).toFixed(1));
        const avgESGScore = Math.round(children.reduce((sum, child)=>sum + child.rowData.esgScore, 0) / children.length);
        return {
            rowMeta: {
                rowId: rowId++,
                isExpanded: true,
                children
            },
            rowData: {
                sectorName: sector,
                ticker: "—",
                companyName: `${sector} Sector (${children.length})`,
                price: "—",
                priceChangePercent: avgPriceChange,
                marketCap: totalMarketCap,
                peRatio: avgPERatio,
                dividendYield: avgDividendYield,
                revenueGrowth: "—",
                profitMargin: "—",
                riskFactor: "—",
                esgScore: avgESGScore,
                analystRating: "—"
            }
        };
    });
};
}}),
"[project]/src/app/examples/finance/finance-headers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript) <export default as Tooltip>");
;
;
;
;
const HEADERS = [
    {
        accessor: "ticker",
        label: "Symbol",
        width: 100,
        isSortable: true,
        isEditable: false,
        align: "left",
        pinned: "left",
        type: "string"
    },
    {
        accessor: "companyInfo",
        label: "Company Information",
        width: 380,
        isSortable: false,
        children: [
            {
                accessor: "sectorName",
                label: "Sector",
                width: 180,
                expandable: true,
                isSortable: true,
                isEditable: false,
                align: "left",
                type: "string"
            },
            {
                accessor: "companyName",
                label: "Name",
                width: 200,
                isSortable: true,
                isEditable: false,
                align: "left",
                type: "string"
            }
        ]
    },
    {
        accessor: "priceMetrics",
        label: "Price Performance",
        width: 250,
        isSortable: false,
        children: [
            {
                accessor: "price",
                label: "Price (USD)",
                width: 130,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.price === "—") return "—";
                    return `$${row.rowData.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}`;
                }
            },
            {
                accessor: "priceChangePercent",
                label: "Change %",
                width: 120,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.priceChangePercent === "—") return "—";
                    const value = row.rowData.priceChangePercent;
                    const color = value < 0 ? "text-red-600" : value > 0 ? "text-green-600" : "text-gray-600";
                    const prefix = value > 0 ? "+" : "";
                    const bgColor = value < 0 ? "bg-red-50" : value > 0 ? "bg-green-50" : "";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-2 py-1 rounded font-medium ${bgColor} ${color}`,
                        children: [
                            prefix,
                            value.toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this);
                }
            }
        ]
    },
    {
        accessor: "fundamentals",
        label: "Fundamentals",
        width: 380,
        isSortable: false,
        children: [
            {
                accessor: "marketCap",
                label: "Mkt Cap ($B)",
                width: 130,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.marketCap === "—") return "—";
                    return row.rowData.marketCap.toLocaleString("en-US", {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    });
                }
            },
            {
                accessor: "peRatio",
                label: "P/E Ratio",
                width: 120,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.peRatio === "—") return "—";
                    return row.rowData.peRatio.toFixed(1);
                }
            },
            {
                accessor: "dividendYield",
                label: "Div Yield",
                width: 120,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.dividendYield === "—") return "—";
                    return `${row.rowData.dividendYield.toFixed(2)}%`;
                }
            }
        ]
    },
    {
        accessor: "growth",
        label: "Growth & Profitability",
        width: 260,
        isSortable: false,
        children: [
            {
                accessor: "revenueGrowth",
                label: "Rev Growth",
                width: 130,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.revenueGrowth === "—") return "—";
                    const value = row.rowData.revenueGrowth;
                    const color = value < 0 ? "text-red-600" : value > 0 ? "text-green-600" : "text-gray-600";
                    const prefix = value > 0 ? "+" : "";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: color,
                        children: [
                            prefix,
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this);
                }
            },
            {
                accessor: "profitMargin",
                label: "Profit Margin",
                width: 130,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.profitMargin === "—") return "—";
                    return `${row.rowData.profitMargin}%`;
                }
            }
        ]
    },
    {
        accessor: "ratings",
        label: "Ratings & Scores",
        width: 270,
        isSortable: false,
        children: [
            {
                accessor: "analystRating",
                label: "Analyst Rating",
                width: 150,
                isSortable: true,
                isEditable: false,
                align: "center",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.analystRating === "—") return "—";
                    const value = row.rowData.analystRating;
                    // Text ratings
                    const ratingLabels = {
                        5: "Strong Buy",
                        4.5: "Buy+",
                        4: "Buy",
                        3.5: "Overweight",
                        3: "Hold",
                        2.5: "Underweight",
                        2: "Sell",
                        1.5: "Sell+",
                        1: "Strong Sell"
                    };
                    // Color based on rating
                    const getRatingColor = (val)=>{
                        if (val >= 4.5) return "green";
                        if (val >= 4) return "green";
                        if (val >= 3.5) return "cyan";
                        if (val >= 3) return "blue";
                        if (val >= 2.5) return "orange";
                        if (val >= 2) return "volcano";
                        return "red";
                    };
                    const ratingLabel = ratingLabels[Math.round(value * 2) / 2] || "Hold";
                    const color = getRatingColor(value);
                    const icon = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faThumbsUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faThumbsDown"] : null;
                    const direction = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowDown"] : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                        title: `${value.toFixed(1)} / 5.0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                            color: color,
                            className: "py-1 px-2",
                            children: [
                                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: icon,
                                    className: "mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                                    lineNumber: 240,
                                    columnNumber: 26
                                }, this),
                                ratingLabel,
                                direction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: direction,
                                    className: "ml-1",
                                    size: "xs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                                    lineNumber: 242,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                            lineNumber: 239,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this);
                }
            },
            {
                accessor: "esgScore",
                label: "ESG Score",
                width: 120,
                isSortable: true,
                isEditable: false,
                align: "right",
                type: "number",
                cellRenderer: ({ row })=>{
                    if (row.rowData.esgScore === "—") return "—";
                    const value = row.rowData.esgScore;
                    // Color based on score
                    const getColorClass = ()=>{
                        if (value >= 80) return "text-green-600";
                        if (value >= 60) return "text-green-500";
                        if (value >= 40) return "text-orange-500";
                        return "text-red-500";
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: getColorClass(),
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                        lineNumber: 267,
                        columnNumber: 18
                    }, this);
                }
            }
        ]
    }
];
}}),
"[project]/src/app/examples/finance/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/examples/finance/finance-rows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/examples/finance/finance-headers.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFinanceData"])();
const FinancialDashboard = ({ height = "70dvh" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        height: height,
        theme: "light",
        selectableCells: true,
        selectableColumns: true
    }, void 0, false, {
        fileName: "[project]/src/app/examples/finance/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FinancialDashboard;
}}),
"[project]/node_modules/simple-table-core/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SimpleTable": (()=>ge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var g = function() {
    return g = Object.assign || function(e) {
        for(var n, r = 1, t = arguments.length; r < t; r++)for(var o in n = arguments[r])Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
    }, g.apply(this, arguments);
};
function w(e, n, r) {
    if (r || 2 === arguments.length) for(var t, o = 0, i = n.length; o < i; o++)!t && o in n || (t || (t = Array.prototype.slice.call(n, 0, o)), t[o] = n[o]);
    return e.concat(t || Array.prototype.slice.call(n));
}
"function" == typeof SuppressedError && SuppressedError;
var p = function(e) {
    var n = e.rowIndex, r = e.colIndex, t = e.rowId;
    return "".concat(n, "-").concat(r, "-").concat(t);
}, C = function(r) {
    var t = r.currentPage, o = r.hideFooter, i = r.nextIcon, a = r.onPageChange, l = r.onNextPage, d = r.onPreviousPage, c = r.prevIcon, s = r.shouldPaginate, u = r.totalPages;
    if (o || !s) return null;
    var h = !(t > 1) && !d, f = !(t < u) && !l;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-footer"
    }, {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", g({
                className: "st-next-prev-btn ".concat(h ? "disabled" : ""),
                onClick: function() {
                    var e = t - 1;
                    e >= 1 && a(e), d && d(e - 1);
                },
                disabled: h
            }, {
                children: c
            })),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", g({
                className: "st-next-prev-btn ".concat(f ? "disabled" : ""),
                onClick: function() {
                    var e = t + 1;
                    (e <= u || l) && a(e), l && l(t);
                },
                disabled: f
            }, {
                children: i
            })),
            Array.from({
                length: u
            }, function(e, r) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", g({
                    onClick: function() {
                        var e;
                        (e = r + 1) >= 1 && e <= u && (a(e), e > t && l ? l(e - 1) : e < t && d && d(e - 1));
                    },
                    className: "st-page-btn ".concat(t === r + 1 ? "active" : "")
                }, {
                    children: r + 1
                }), r);
            })
        ]
    }));
}, I = function(e) {
    var r = e.className;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", g({
        className: r,
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
        })
    }));
}, x = function(e) {
    var r = e.className;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", g({
        className: r,
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
        })
    }));
}, R = function(e) {
    var r = e.className;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", g({
        className: r,
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M5.41 11.41L10 6.83l4.59 4.58L16 10l-6-6-6 6z"
        })
    }));
}, b = function(e) {
    var r = e.className;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", g({
        className: r,
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M5.41 7.59L10 12.17l4.59-4.58L16 9l-6 6-6-6z"
        })
    }));
}, y = function(e) {
    return e.position * (e.rowHeight + 1) - 1;
}, M = function(e) {
    return e.position * (e.rowHeight + 1);
}, S = function(e) {
    var n = e.accessor, r = e.rowIndex;
    return "cell-".concat(n, "-").concat(r);
}, E = function(e) {
    var n = e.hiddenColumns, r = e.header, t = e.pinned;
    return n[r.accessor] ? null : !t && !r.pinned || r.pinned === t || null;
}, D = function(r) {
    var t = r.value, o = r.onBlur, i = r.onChange;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("select", g({
        value: t.toString(),
        onBlur: o,
        onChange: function(e) {
            var n = e.target.value;
            i("true" === n);
        }
    }, {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", g({
                value: "true"
            }, {
                children: "True"
            })),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", g({
                value: "false"
            }, {
                children: "False"
            }))
        ]
    }));
}, H = function(e) {
    var r = e.defaultValue, t = e.onBlur, i = e.onChange, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
        className: "editable-cell-input",
        ref: a,
        autoFocus: !0,
        type: "text",
        defaultValue: null != r ? r : "",
        onBlur: t,
        onChange: function(e) {
            var n = e.target.value;
            i(n);
        }
    });
}, k = function(e) {
    var r = e.defaultValue, t = e.onBlur, i = e.onChange, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
        className: "editable-cell-input",
        ref: a,
        autoFocus: !0,
        defaultValue: r.toString(),
        onBlur: t,
        onChange: function(e) {
            var n = e.target.value;
            /^\d*\.?\d*$/.test(n) && i(n);
        }
    });
}, N = function(e) {
    var t = e.onChange, o = e.setIsEditing, i = e.value, a = function(e) {
        null == t || t(e);
    }, l = function() {
        o(!1);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "string" == typeof i || null == i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(H, {
            defaultValue: i,
            onBlur: l,
            onChange: a
        }) : "boolean" == typeof i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(D, {
            onBlur: l,
            onChange: a,
            value: i
        }) : "number" == typeof i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(k, {
            defaultValue: i,
            onBlur: l,
            onChange: a
        }) : null
    });
}, L = 0, T = function() {
    return function(e) {
        var n = e.callback, r = e.callbackProps, t = e.limit, o = Date.now();
        (0 === L || o - L >= t) && (L = o, n(r));
    };
}, W = Date.now(), O = {
    screenX: 0,
    screenY: 0
}, B = function(e) {
    var n, r, t = e.draggedHeaderRef, i = e.headersRef, l = e.hoveredHeaderRef, d = e.onColumnOrderChange, c = e.onTableHeaderDragEnd, s = (n = i.current, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(n), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        r.current = n;
    }, [
        n
    ]), r.current);
    return {
        handleDragStart: function(e) {
            t.current = e, W = Date.now();
        },
        handleDragOver: function(e) {
            var n, r = e.event, o = e.hoveredHeader;
            if (r.preventDefault(), i.current) {
                var a = r.currentTarget.getAnimations().some(function(e) {
                    return "running" === e.playState;
                }), d = r.screenX, u = r.screenY, h = Math.sqrt(Math.pow(d - O.screenX, 2) + Math.pow(u - O.screenY, 2));
                l.current = o;
                var f = w([], i.current, !0), v = f.findIndex(function(e) {
                    var n;
                    return e.accessor === (null === (n = t.current) || void 0 === n ? void 0 : n.accessor);
                }), m = f.findIndex(function(e) {
                    return e.accessor === o.accessor;
                }), g = f.splice(v, 1)[0];
                if (f.splice(m, 0, g), !(a || o.accessor === (null === (n = t.current) || void 0 === n ? void 0 : n.accessor) || null === t.current || h < 10 || void 0 === v || void 0 === m || JSON.stringify(f) === JSON.stringify(i.current))) {
                    var p = Date.now();
                    JSON.stringify(f) === JSON.stringify(s) && p - W < 800 && h < 50 || (W = p, O = {
                        screenX: d,
                        screenY: u
                    }, c(f));
                }
            }
        },
        handleDragEnd: function() {
            t.current = null, l.current = null, null == d || d(i.current);
        }
    };
}, P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0), F = function(e) {
    var r = e.children, t = e.value;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(P.Provider, g({
        value: t
    }, {
        children: r
    }));
}, A = function() {
    var e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(P);
    if (void 0 === e) throw new Error("useTableContext must be used within a TableProvider");
    return e;
}, z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(r, o) {
    var i, l, d = r.borderClass, c = r.colIndex, s = r.header, u = r.isHighlighted, h = r.isInitialFocused, f = r.onExpandRowClick, v = r.rowIndex, m = r.visibleRow, w = A(), p = w.collapseIcon, C = w.draggedHeaderRef, I = w.expandIcon, x = w.handleMouseDown, R = w.handleMouseOver, b = w.headersRef, y = w.hoveredHeaderRef, M = w.onCellEdit, E = w.onTableHeaderDragEnd, D = m.depth, H = m.row, k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(H.rowData[s.accessor]), L = k[0], W = k[1], O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), P = O[0], F = O[1], z = B({
        draggedHeaderRef: C,
        headersRef: b,
        hoveredHeaderRef: y,
        onTableHeaderDragEnd: E
    }).handleDragOver, j = T(), U = "cell-".concat(v, "-").concat(c), K = Boolean(null === (l = null === (i = H.rowMeta) || void 0 === i ? void 0 : i.children) || void 0 === l ? void 0 : l.length), V = Boolean(null == s ? void 0 : s.isEditable), J = m.position % 2 == 0, X = "st-cell ".concat(D > 0 && s.expandable ? "st-cell-depth-".concat(D) : "", " ").concat(u ? h ? "st-cell-selected-first ".concat(d) : "st-cell-selected ".concat(d) : "", " ").concat(J ? "st-cell-odd-row" : "st-cell-even-row", " ").concat(V ? "clickable" : "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        W(H.rowData[s.accessor]);
    }, [
        s.accessor,
        H
    ]);
    return P ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: "st-cell-editing ".concat(J ? "st-cell-odd-row" : "st-cell-even-row"),
        id: S({
            accessor: s.accessor,
            rowIndex: v + 1
        })
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(N, {
            onChange: function(e) {
                W(e), null == M || M({
                    accessor: s.accessor,
                    newValue: e,
                    row: H
                });
            },
            setIsEditing: F,
            value: L
        })
    })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: X,
        id: U,
        onDoubleClick: function() {
            return s.isEditable && F(!0);
        },
        onMouseDown: function() {
            return x({
                rowIndex: v,
                colIndex: c,
                rowId: H.rowMeta.rowId
            });
        },
        onMouseOver: function() {
            return R({
                rowIndex: v,
                colIndex: c,
                rowId: H.rowMeta.rowId
            });
        },
        onDragOver: function(e) {
            return j({
                callback: z,
                callbackProps: {
                    event: e,
                    hoveredHeader: s
                },
                limit: 50
            });
        },
        onKeyDown: function(e) {
            "F2" !== e.key && "Enter" !== e.key || !s.isEditable || P || (e.preventDefault(), F(!0));
        },
        ref: o,
        "data-row-index": v,
        "data-col-index": c,
        "aria-selected": u
    }, {
        children: [
            s.expandable && K ? H.rowMeta.isExpanded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
                className: "st-sort-icon-container",
                onClick: function() {
                    return f(H.rowMeta.rowId);
                }
            }, {
                children: p
            })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
                className: "st-sort-icon-container",
                onClick: function() {
                    return f(H.rowMeta.rowId);
                }
            }, {
                children: I
            })) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", g({
                className: "st-cell-content ".concat("right" === s.align ? "right-aligned" : "center" === s.align ? "center-aligned" : "")
            }, {
                children: s.cellRenderer ? s.cellRenderer({
                    accessor: s.accessor,
                    colIndex: c,
                    row: H
                }) : L
            }))
        ]
    }));
}), j = function(e) {
    var t = e.children, o = function(e, n) {
        var r = {};
        for(var t in e)Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for(t = Object.getOwnPropertySymbols(e); o < t.length; o++)n.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (r[t[o]] = e[t[o]]);
        }
        return r;
    }(e, [
        "children"
    ]);
    return A().allowAnimations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(U, g({}, o, {
        children: t
    })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: t
    });
}, U = function(e) {
    var i = e.children, l = e.isBody, d = e.pauseAnimation, c = e.rowIndex, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), h = A(), f = h.draggedHeaderRef, v = h.headersRef, m = h.mainBodyRef, g = h.shouldPaginate, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}), p = w[0], C = w[1], I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({}), x = v.current;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(function() {
        if (x) {
            var e = function(e) {
                var n = e.currentHeaders, r = e.draggedHeaderRef, t = e.rowIndex, o = {};
                return n.forEach(function(e) {
                    var n;
                    if (e) {
                        var i = document.getElementById(S({
                            accessor: e.accessor,
                            rowIndex: t
                        }));
                        if (i) {
                            var a = i.getAnimations().some(function(e) {
                                return "running" === e.playState;
                            }), l = i.getBoundingClientRect();
                            a && (null === (n = null == r ? void 0 : r.current) || void 0 === n ? void 0 : n.accessor) !== e.accessor ? o[e.accessor] = !1 : o[e.accessor] = l;
                        }
                    }
                }), o;
            }({
                currentHeaders: x,
                draggedHeaderRef: f,
                rowIndex: c
            });
            JSON.stringify(e) !== JSON.stringify(p) && (I.current = p, C(e));
        }
    }, [
        p,
        x,
        f,
        l,
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(function() {
        var e = m.current, n = function() {
            s.current = !0;
        }, r = function() {
            s.current = !1;
        };
        return null == e || e.addEventListener("scroll", n), null == e || e.addEventListener("scrollend", r), function() {
            null == e || e.removeEventListener("scroll", n), null == e || e.removeEventListener("scrollend", r);
        };
    }, [
        f,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        d || s.current || Object.keys(I.current).length && x && x.forEach(function(e) {
            var n = document.getElementById(S({
                accessor: e.accessor,
                rowIndex: c
            }));
            if (n) {
                var r = I.current[e.accessor], t = p[e.accessor];
                if (r && t) {
                    var o = r.left - t.left, i = g ? 0 : r.top - t.top, a = Math.abs(o), l = Math.abs(i);
                    (a > 10 || l > 10) && requestAnimationFrame(function() {
                        n.style.transform = "translate(".concat(o, "px, ").concat(i, "px)"), n.style.transition = "transform 0s", requestAnimationFrame(function() {
                            n.style.transform = "", n.style.transition = "transform ".concat(400, "ms ease-out");
                        });
                    });
                }
            }
        });
    }, [
        p,
        x,
        l,
        d,
        I,
        c,
        g
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: i
    });
}, K = function(e) {
    var r = e.columnIndices, t = e.headers, o = e.hiddenColumns, i = e.isWidthDragging, a = e.onExpandRowClick, l = e.pinned, d = e.rowIndex, c = e.rowIndices, s = e.visibleRow, u = t.filter(function(e) {
        return E({
            hiddenColumns: o,
            header: e,
            pinned: l
        });
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(j, g({
        isBody: !0,
        pauseAnimation: i,
        rowIndex: d + 1
    }, {
        children: u.map(function(e) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(V, {
                columnIndices: r,
                header: e,
                headers: t,
                hiddenColumns: o,
                onExpandRowClick: a,
                pinned: l,
                rowIndex: d,
                rowIndices: c,
                visibleRow: s
            }, S({
                accessor: e.accessor,
                rowIndex: d + 1
            }));
        })
    }));
}, V = function(e) {
    var r = e.columnIndices, t = e.header, o = e.headers, i = e.hiddenColumns, a = e.onExpandRowClick, l = e.pinned, d = e.rowIndex, c = e.rowIndices, s = e.visibleRow, u = r[t.accessor], f = A(), v = f.getBorderClass, m = f.isSelected, g = f.isInitialFocusedCell;
    if (t.children) {
        var w = t.children.filter(function(e) {
            return E({
                hiddenColumns: i,
                header: e,
                pinned: l
            });
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: w.map(function(e) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(V, {
                    columnIndices: r,
                    header: e,
                    headers: o,
                    hiddenColumns: i,
                    onExpandRowClick: a,
                    pinned: l,
                    rowIndex: d,
                    rowIndices: c,
                    visibleRow: s
                }, S({
                    accessor: e.accessor,
                    rowIndex: d + 1
                }));
            })
        });
    }
    var p = {
        rowIndex: d,
        colIndex: u,
        rowId: s.row.rowMeta.rowId
    }, C = v(p), I = m(p), x = g(p);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(z, {
        borderClass: C,
        colIndex: u,
        header: t,
        isHighlighted: I,
        isInitialFocused: x,
        onExpandRowClick: a,
        rowIndex: d,
        visibleRow: s
    }, S({
        accessor: t.accessor,
        rowIndex: d + 1
    }));
}, J = function(e) {
    var r = e.columnIndices, t = e.gridTemplateColumns, o = e.headers, i = e.hiddenColumns, a = e.index, l = e.isWidthDragging, d = e.onExpandRowClick, c = e.pinned, s = e.rowHeight, u = e.rowIndices, h = e.visibleRow, f = h.position, v = a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: "st-table-row",
        style: {
            gridTemplateColumns: t,
            top: M({
                position: f,
                rowHeight: s
            }),
            height: "".concat(s, "px")
        }
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(K, {
            columnIndices: r,
            headers: o,
            hiddenColumns: i,
            isWidthDragging: l,
            onExpandRowClick: d,
            pinned: c,
            rowIndex: v,
            rowIndices: u,
            visibleRow: h
        }, a)
    }));
}, X = function(e) {
    var r = e.displayStrongBorder, t = e.position, o = e.rowHeight, i = e.templateColumns;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: "st-row-separator ".concat(r ? "st-last-group-row" : ""),
        style: {
            display: "grid",
            gridTemplateColumns: i,
            position: "absolute",
            top: y({
                position: t,
                rowHeight: o
            }),
            minWidth: "100%"
        }
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: {
                gridColumn: "1 / -1"
            }
        })
    }));
}, q = function(r) {
    var t = r.columnIndices;
    r.headerContainerRef;
    var o = r.headers, i = r.hiddenColumns, a = r.isWidthDragging, l = r.onExpandRowClick, d = r.pinned, c = r.rowHeight, s = r.rowIndices, u = r.sectionRef, f = r.templateColumns, v = r.totalHeight, m = r.visibleRows, w = r.width, p = d ? "st-table-body-pinned-".concat(d) : "st-table-body-main";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: p,
        ref: u,
        style: {
            position: "relative",
            height: "".concat(v, "px"),
            width: w
        }
    }, {
        children: m.map(function(r, u) {
            var v, g, w, p, C = Boolean(null === (g = null === (v = r.row.rowMeta) || void 0 === v ? void 0 : v.children) || void 0 === g ? void 0 : g.length), I = null === (p = null === (w = m[u - 1]) || void 0 === w ? void 0 : w.row.rowMeta) || void 0 === p ? void 0 : p.isExpanded;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(J, {
                        columnIndices: t,
                        gridTemplateColumns: f,
                        headers: o,
                        hiddenColumns: i,
                        index: u,
                        isWidthDragging: a,
                        onExpandRowClick: l,
                        pinned: d,
                        rowHeight: c,
                        rowIndices: s,
                        visibleRow: r
                    }),
                    0 !== u && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(X, {
                        displayStrongBorder: C && I,
                        position: r.position,
                        rowHeight: c,
                        templateColumns: f
                    })
                ]
            }, u);
        })
    }));
};
function Y(e) {
    var n = e.headersRef, r = e.hiddenColumns, t = e.pinnedLeftColumns, o = e.pinnedRightColumns, i = {}, a = 0, l = function(e, n) {
        void 0 === n && (n = !1), n || a++, i[e.accessor] = a, e.children && e.children.length > 0 && e.children.filter(function(e) {
            return E({
                hiddenColumns: r,
                header: e
            });
        }).forEach(function(e, n) {
            l(e, 0 === n);
        });
    };
    return t.forEach(function(e, n) {
        l(e, 0 === n);
    }), n.current.filter(function(e) {
        return !e.pinned && E({
            hiddenColumns: r,
            header: e
        });
    }).forEach(function(e, n) {
        var r = 0 === n && 0 === t.length;
        l(e, r);
    }), o.forEach(function(e) {
        l(e, !1);
    }), i;
}
var $, G = function(r) {
    var i, d, c, s, u, h = r.centerHeaderRef, f = r.flattenedRows, v = r.headerContainerRef, m = r.isWidthDragging, w = r.mainTemplateColumns, p = r.pinnedLeftColumns, C = r.pinnedLeftHeaderRef, I = r.pinnedLeftTemplateColumns, x = r.pinnedRightColumns, R = r.pinnedRightHeaderRef, b = r.pinnedRightTemplateColumns, y = r.setFlattenedRows, M = r.setScrollTop, S = r.visibleRows, E = A(), D = E.rowHeight, H = E.scrollbarWidth, k = E.mainBodyRef, N = E.pinnedLeftRef, L = E.pinnedRightRef, T = E.tableBodyContainerRef, W = E.hiddenColumns, O = E.headersRef;
    !function(e) {
        var n = e.headerContainerRef, r = e.mainSectionRef, o = e.scrollbarWidth, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), l = i[0], d = i[1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            var e = null == n ? void 0 : n.current;
            if (l && e) return e.classList.add("st-header-scroll-padding"), e.style.setProperty("--st-after-width", "".concat(o, "px")), function() {
                e.classList.remove("st-header-scroll-padding");
            };
        }, [
            n,
            l,
            o
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            var e = null == n ? void 0 : n.current, t = null == r ? void 0 : r.current;
            if (t && e) {
                var o = function() {
                    if (t) {
                        var e = t.scrollHeight > t.clientHeight;
                        d(e);
                    }
                };
                o();
                var i = new ResizeObserver(function() {
                    o();
                });
                return i.observe(t), function() {
                    t && i.unobserve(t);
                };
            }
        }, [
            n,
            r
        ]);
    }({
        headerContainerRef: v,
        mainSectionRef: T,
        scrollbarWidth: H
    });
    var B, P, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), z = (B = 0, (P = function(e) {
        e.forEach(function(e) {
            B += 1, e.rowMeta.isExpanded && e.rowMeta.children && P(e.rowMeta.children);
        });
    })(f), B) * (D + 1) - 1, j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return Y({
            headersRef: O,
            hiddenColumns: W,
            pinnedLeftColumns: p,
            pinnedRightColumns: x
        });
    }, [
        O,
        W,
        p,
        x
    ]), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e = {};
        return S.forEach(function(n, r) {
            var t = String(n.row.rowMeta.rowId);
            e[t] = r;
        }), e;
    }, [
        S
    ]), K = function(e) {
        var n = function(r) {
            return r.rowMeta.rowId === e && r.rowMeta.children ? g(g({}, r), {
                rowMeta: g(g({}, r.rowMeta), {
                    isExpanded: !r.rowMeta.isExpanded
                })
            }) : r.rowMeta.children ? g(g({}, r), {
                rowMeta: g(g({}, r.rowMeta), {
                    children: r.rowMeta.children.map(n)
                })
            }) : r;
        };
        y(function(e) {
            return e.map(n);
        });
    }, V = (null === (i = C.current) || void 0 === i ? void 0 : i.clientWidth) ? (null === (d = C.current) || void 0 === d ? void 0 : d.clientWidth) + 1 : 0, J = null === (c = h.current) || void 0 === c ? void 0 : c.clientWidth, X = (null === (s = R.current) || void 0 === s ? void 0 : s.clientWidth) ? (null === (u = R.current) || void 0 === u ? void 0 : u.clientWidth) + 1 : 0, $ = {
        headerContainerRef: v,
        headers: O.current,
        hiddenColumns: W,
        isWidthDragging: m,
        rowHeight: D,
        visibleRows: S,
        columnIndices: j,
        rowIndices: U
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-table-body-container",
        ref: T,
        onScroll: function(e) {
            var n = e.currentTarget.scrollTop;
            F.current && cancelAnimationFrame(F.current), F.current = requestAnimationFrame(function() {
                M(n);
            });
        }
    }, {
        children: [
            p.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(q, g({}, $, {
                onExpandRowClick: K,
                pinned: "left",
                sectionRef: N,
                templateColumns: I,
                totalHeight: z,
                width: V
            })),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(q, g({}, $, {
                onExpandRowClick: K,
                sectionRef: k,
                templateColumns: w,
                totalHeight: z,
                width: J
            })),
            x.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(q, g({}, $, {
                onExpandRowClick: K,
                pinned: "right",
                sectionRef: L,
                templateColumns: b,
                totalHeight: z,
                width: X
            }))
        ]
    }));
}, _ = function(e, n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (e.current) {
            var r = e.current, t = function() {
                var e, t = null == r ? void 0 : r.scrollLeft;
                void 0 !== t && (null === (e = n.current) || void 0 === e || e.scrollTo(t, 0));
            };
            return r.addEventListener("scroll", t), function() {
                null == r || r.removeEventListener("scroll", t);
            };
        }
    }, [
        e,
        n
    ]);
}, Q = {
    string: function(e, n, r) {
        if (e === n) return 0;
        var t = e.localeCompare(n);
        return "ascending" === r ? t : -t;
    },
    number: function(e, n, r) {
        if (e === n) return 0;
        var t = e - n;
        return "ascending" === r ? t : -t;
    },
    boolean: function(e, n, r) {
        if (e === n) return 0;
        var t = e === n ? 0 : e ? -1 : 1;
        return "ascending" === r ? t : -t;
    },
    date: function(e, n, r) {
        var t = new Date(e), o = new Date(n);
        if (t.getTime() === o.getTime()) return 0;
        var i = t.getTime() - o.getTime();
        return "ascending" === r ? i : -i;
    },
    enum: function(e, n, r) {
        return Q.string(e, n, r);
    },
    default: function(e, n, r) {
        return e === n ? 0 : null == e ? "ascending" === r ? -1 : 1 : null == n ? "ascending" === r ? 1 : -1 : "string" == typeof e && "string" == typeof n ? Q.string(e, n, r) : "number" == typeof e && "number" == typeof n ? Q.number(e, n, r) : "boolean" == typeof e && "boolean" == typeof n ? Q.boolean(e, n, r) : Q.string(String(e), String(n), r);
    }
}, Z = function(e, n, r, t) {
    if (void 0 === r && (r = "string"), null == e || "" === e) return "ascending" === t ? -1 : 1;
    if (null == n || "" === n) return "ascending" === t ? 1 : -1;
    if ("number" === r) {
        var o = function(e) {
            var n;
            if ("number" == typeof e) return e;
            var r = String(e);
            if ("string" == typeof r) {
                var t = r.replace(/[$,]/g, "").match(/^([-+]?\d*\.?\d+)([TBMKtbmk])?/);
                if (t) {
                    var o = parseFloat(t[1]), i = null === (n = t[2]) || void 0 === n ? void 0 : n.toUpperCase();
                    return "T" === i ? o *= 1e12 : "B" === i ? o *= 1e9 : "M" === i ? o *= 1e6 : "K" === i && (o *= 1e3), o;
                }
            }
            return parseFloat(r) || 0;
        }, i = o(e), a = o(n);
        return Q.number(i, a, t);
    }
    return "date" === r ? Q.date(String(e), String(n), t) : "boolean" === r ? Q.boolean(Boolean(e), Boolean(n), t) : "enum" === r ? Q.enum(String(e), String(n), t) : Q.string(String(e), String(n), t);
}, ee = function(e, n, r) {
    var t = r.find(function(e) {
        return e.accessor === n.key.accessor;
    }), o = (null == t ? void 0 : t.type) || "string", i = n.direction, a = new Map, l = new Map, d = "";
    e.forEach(function(e) {
        var r;
        if (e.rowData && !e.rowData[n.key.accessor] && void 0 !== e.rowMeta.isExpanded) {
            var t = (e.rowData.sector || "group_".concat(a.size)).toString();
            d = t, l.set(d, e), a.has(d) || a.set(d, []);
        } else if (d) {
            var o = a.get(d) || [];
            o.push(e), a.set(d, o);
        } else {
            var i = "default";
            a.has(i) || a.set(i, []), null === (r = a.get(i)) || void 0 === r || r.push(e);
        }
    });
    var c = [];
    return a.forEach(function(e, t) {
        if (l.has(t)) {
            var a = l.get(t);
            a.rowMeta.children && a.rowMeta.children.length > 0 && (a.rowMeta.children = ne(a.rowMeta.children, n, r)), c.push(a);
        }
        var d = w([], e, !0).sort(function(e, r) {
            if (!(null == e ? void 0 : e.rowData) || !(null == r ? void 0 : r.rowData)) return 0;
            var t = n.key.accessor, a = e.rowData[t], l = r.rowData[t];
            return Z(a, l, o, i);
        });
        c.push.apply(c, d.map(function(e) {
            var t = g({}, e);
            if (t.rowMeta.children && t.rowMeta.children.length > 0) {
                var o = ne(t.rowMeta.children, n, r);
                t.rowMeta = g(g({}, t.rowMeta), {
                    children: o
                });
            }
            return t;
        }));
    }), c;
}, ne = function(e, n, r) {
    var t = r.find(function(e) {
        return e.accessor === n.key.accessor;
    }), o = (null == t ? void 0 : t.type) || "string", i = n.direction;
    return w([], e, !0).sort(function(e, r) {
        if (!(null == e ? void 0 : e.rowData) || !(null == r ? void 0 : r.rowData)) return 0;
        var t = n.key.accessor, a = e.rowData[t], l = r.rowData[t];
        return Z(a, l, o, i);
    }).map(function(e) {
        return e.rowMeta.children && e.rowMeta.children.length > 0 ? g(g({}, e), {
            rowMeta: g(g({}, e.rowMeta), {
                children: ne(e.rowMeta.children, n, r)
            })
        }) : e;
    });
}, re = function(e) {
    e.colIndex;
    var n = e.event, r = e.forceUpdate, t = e.header;
    e.headersRef;
    var o = e.gridColumnEnd, i = e.gridColumnStart, a = e.setIsWidthDragging, l = e.startWidth;
    a(!0), n.preventDefault();
    var d = n.clientX;
    if (t) {
        var c = "number" == typeof t.minWidth ? t.minWidth : 40, s = function(e) {
            return e.children && 0 !== e.children.length ? e.children.flatMap(function(e) {
                return s(e);
            }) : [
                e
            ];
        }, u = o - i > 1, h = u ? s(t) : [
            t
        ], f = h.map(function(e) {
            return "number" == typeof e.width ? e.width : parseInt(String(e.width), 10) || 150;
        }).reduce(function(e, n) {
            return e + n;
        }, 0), v = function(e) {
            var n = e.clientX - d;
            if (u && h.length > 1) {
                for(var o = Math.max(f + n, h.length * c), i = Math.max(Math.floor(o / h.length), c), a = 0; a < h.length - 1; a++)h[a].width = i;
                var s = i * (h.length - 1), v = Math.max(o - s, c);
                h[h.length - 1].width = v;
            } else {
                var m = Math.max(l + n, c);
                t.width = m;
            }
            r();
        }, m = function() {
            document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m), a(!1);
        };
        document.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
    }
}, te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(r, o) {
    var i = r.colIndex, l = r.gridColumnEnd, d = r.gridColumnStart, c = r.gridRowEnd, s = r.gridRowStart, u = r.header, h = r.reverse, f = r.sort, v = A(), m = v.columnReordering, p = v.columnResizing, C = v.draggedHeaderRef, I = v.forceUpdate, x = v.headersRef, R = v.hoveredHeaderRef, b = v.onColumnOrderChange, y = v.onSort, M = v.onTableHeaderDragEnd, E = v.rowHeight, D = v.selectColumns, H = v.selectableColumns, k = v.setInitialFocusedCell, N = v.setIsWidthDragging, L = v.setSelectedCells, W = v.setSelectedColumns, O = v.sortDownIcon, P = v.sortUpIcon, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), z = F[0], j = F[1], U = Boolean(null == u ? void 0 : u.isSortable), K = "st-header-cell ".concat(u === R.current ? "st-hovered" : "", " ").concat(z ? "st-dragging" : "", " ").concat(U ? "clickable" : "", " ").concat(m && !U ? "columnReordering" : "", " ").concat("right" === (null == u ? void 0 : u.align) ? "right-aligned" : "center" === (null == u ? void 0 : u.align) ? "center-aligned" : ""), V = B({
        draggedHeaderRef: C,
        headersRef: x,
        hoveredHeaderRef: R,
        onColumnOrderChange: b,
        onTableHeaderDragEnd: M
    }), J = V.handleDragStart, X = V.handleDragEnd, q = V.handleDragOver, Y = T(), $ = function(e) {
        var n = e.event, r = e.header;
        if (H) {
            var t = function(e, n) {
                if (!e.children || 0 === e.children.length) return [
                    n
                ];
                var r = [], t = function(e, n) {
                    if (!e.children || 0 === e.children.length) return r.push(n), n + 1;
                    for(var o = n, i = 0, a = e.children; i < a.length; i++){
                        var l = a[i];
                        o = t(l, o);
                    }
                    return o;
                };
                return t(e, n), r;
            }(r, i);
            return n.shiftKey && D ? W(function(e) {
                if (0 === e.size) return new Set(t);
                var n = t[0], r = Array.from(e).sort(function(e, n) {
                    return e - n;
                }), o = r[0], i = Math.abs(n - o);
                r.forEach(function(e) {
                    var r = Math.abs(n - e);
                    r < i && (i = r, o = e);
                });
                var a, l, d, c, s = w(w([], (a = o, l = n, d = Math.min(a, l), c = Math.max(a, l), Array.from({
                    length: c - d + 1
                }, function(e, n) {
                    return d + n;
                })), !0), t, !0);
                return new Set(w(w([], Array.from(e), !0), s, !0));
            }) : D && D(t), L(new Set), void k(null);
        }
        r.isSortable && y(i, r.accessor);
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = function(e) {
            e.preventDefault(), e.dataTransfer.dropEffect = "move";
        };
        return document.addEventListener("dragover", e), function() {
            document.removeEventListener("dragover", e);
        };
    }, []), !u) return null;
    var G = p && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "st-header-resize-handle",
        onMouseDown: function(e) {
            var n;
            Y({
                callback: re,
                callbackProps: {
                    colIndex: i,
                    event: e,
                    forceUpdate: I,
                    header: u,
                    headersRef: x,
                    gridColumnEnd: l,
                    gridColumnStart: d,
                    setIsWidthDragging: N,
                    startWidth: "object" == typeof o && null !== o && "current" in o ? null === (n = o.current) || void 0 === n ? void 0 : n.offsetWidth : void 0
                },
                limit: 10
            });
        }
    }), _ = f && f.key.accessor === u.accessor && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-sort-icon-container",
        onClick: function(e) {
            return $({
                event: e,
                header: u
            });
        }
    }, {
        children: [
            "ascending" === f.direction && P && P,
            "descending" === f.direction && O && O
        ]
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: K,
        id: S({
            accessor: u.accessor,
            rowIndex: 0
        }),
        onDragOver: function(e) {
            Y({
                callback: q,
                callbackProps: {
                    event: e,
                    hoveredHeader: u
                },
                limit: 50
            });
        },
        ref: o,
        style: g(g({
            gridRowStart: s,
            gridRowEnd: c,
            gridColumnStart: d,
            gridColumnEnd: l
        }, l - d > 1 ? {} : {
            width: u.width
        }), c - s > 1 ? {} : {
            height: E
        })
    }, {
        children: [
            h && G,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
                className: "st-header-label ".concat("right" === u.align ? "right-aligned" : "center" === u.align ? "center-aligned" : ""),
                draggable: m,
                onClick: function(e) {
                    return $({
                        event: e,
                        header: u
                    });
                },
                onDragEnd: function(e) {
                    e.preventDefault(), j(!1), X();
                },
                onDragStart: function(e) {
                    m && u && function(e) {
                        j(!0), J(e);
                    }(u);
                }
            }, {
                children: [
                    "right" === u.align && _,
                    null == u ? void 0 : u.label,
                    "right" !== u.align && _
                ]
            })),
            !h && G
        ]
    }));
}), oe = function(r) {
    var t = r.columnIndices, o = r.depth, i = r.header, a = r.hiddenColumns, l = r.maxDepth, d = r.pinned, c = r.gridPosition, s = r.reverse, u = r.sort;
    if (!E({
        hiddenColumns: a,
        header: i,
        pinned: d
    })) return null;
    var v = c.gridColumnStart, m = c.gridColumnEnd, g = c.gridRowStart, w = c.gridRowEnd, p = t[i.accessor];
    if (i.children) {
        var C = i.children.filter(function(e) {
            return E({
                hiddenColumns: a,
                header: e,
                pinned: d
            });
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(te, {
                    colIndex: p,
                    gridColumnEnd: m,
                    gridColumnStart: v,
                    gridRowEnd: w,
                    gridRowStart: g,
                    header: i,
                    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])(),
                    reverse: s,
                    sort: u
                }),
                C.map(function(e, r) {
                    var i, h = null === (i = c.children) || void 0 === i ? void 0 : i[e.accessor];
                    return h ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(oe, {
                        columnIndices: t,
                        depth: o + 1,
                        gridPosition: h,
                        header: e,
                        hiddenColumns: a,
                        maxDepth: l,
                        pinned: d,
                        reverse: s,
                        sort: u
                    }, e.accessor) : null;
                })
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(te, {
        colIndex: p,
        gridColumnEnd: m,
        gridColumnStart: v,
        gridRowEnd: w,
        gridRowStart: g,
        header: i,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])(),
        reverse: s,
        sort: u
    });
}, ie = function(e) {
    var r = e.columnIndices, t = e.gridTemplateColumns, o = e.handleScroll, i = e.headersRef, a = e.hiddenColumns, d = e.maxDepth, c = e.pinned, s = e.sectionRef, u = e.sort, h = i.current.filter(function(e) {
        return E({
            hiddenColumns: a,
            header: e,
            pinned: c
        });
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e, n, r;
        return e = {}, n = 1, r = function(t, o, i) {
            var l, s;
            void 0 === i && (i = !1), i || n++;
            var u = null !== (s = null === (l = t.children) || void 0 === l ? void 0 : l.filter(function(e) {
                return E({
                    hiddenColumns: a,
                    header: e,
                    pinned: c
                });
            }).length) && void 0 !== s ? s : 0, h = {
                gridColumnStart: n,
                gridColumnEnd: u > 0 ? n + u : n + 1,
                gridRowStart: o,
                gridRowEnd: u > 0 ? o + 1 : d + 1,
                children: {}
            };
            return t.children && t.children.length > 0 && t.children.filter(function(e) {
                return E({
                    hiddenColumns: a,
                    header: e,
                    pinned: c
                });
            }).forEach(function(e, n) {
                h.children[e.accessor] = r(e, o + 1, 0 === n);
            }), e[t.accessor] = h, h;
        }, h.forEach(function(e, n) {
            r(e, 1, 0 === n);
        }), e;
    }, [
        h,
        a,
        d,
        c
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: "st-header-".concat(c ? "pinned-".concat(c) : "main")
    }, o && {
        onScroll: o
    }, {
        ref: s,
        style: {
            gridTemplateColumns: t
        }
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(j, g({
            rowIndex: 0
        }, {
            children: h.map(function(e) {
                var t = f[e.accessor];
                return t ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(oe, {
                    columnIndices: r,
                    depth: 1,
                    gridPosition: t,
                    header: e,
                    hiddenColumns: a,
                    maxDepth: d,
                    pinned: c,
                    reverse: "right" === c,
                    sort: u
                }, e.accessor) : null;
            })
        }))
    }));
}, ae = function(e) {
    var n;
    return (null === (n = e.children) || void 0 === n ? void 0 : n.length) ? 1 + Math.max.apply(Math, e.children.map(ae)) : 1;
}, le = function(r) {
    var t = r.centerHeaderRef, o = r.headerContainerRef, i = r.headersRef, a = r.hiddenColumns, d = r.mainTemplateColumns, c = r.pinnedLeftColumns, s = r.pinnedLeftHeaderRef, u = r.pinnedLeftTemplateColumns, h = r.pinnedRightColumns, f = r.pinnedRightHeaderRef, v = r.pinnedRightTemplateColumns, m = r.sort, w = A().mainBodyRef;
    _(w, t);
    var p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return Y({
            headersRef: i,
            hiddenColumns: a,
            pinnedLeftColumns: c,
            pinnedRightColumns: h
        });
    }, [
        i,
        a,
        c,
        h
    ]), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e = i.current, n = 0;
        return e.forEach(function(e) {
            if (E({
                hiddenColumns: a,
                header: e
            })) {
                var r = ae(e);
                n = Math.max(n, r);
            }
        }), {
            maxDepth: n
        };
    }, [
        i,
        a
    ]).maxDepth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-header-container",
        ref: o
    }, {
        children: [
            c.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ie, {
                columnIndices: p,
                gridTemplateColumns: u,
                handleScroll: void 0,
                headersRef: i,
                hiddenColumns: a,
                maxDepth: C,
                pinned: "left",
                sectionRef: s,
                sort: m
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ie, {
                columnIndices: p,
                gridTemplateColumns: d,
                handleScroll: function(e) {
                    var n, r, o = null === (n = t.current) || void 0 === n ? void 0 : n.scrollLeft;
                    void 0 !== o && (null === (r = w.current) || void 0 === r || r.scrollTo(o, 0));
                },
                headersRef: i,
                hiddenColumns: a,
                maxDepth: C,
                sectionRef: t,
                sort: m
            }),
            h.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ie, {
                columnIndices: p,
                gridTemplateColumns: v,
                handleScroll: void 0,
                headersRef: i,
                hiddenColumns: a,
                maxDepth: C,
                pinned: "right",
                sectionRef: f,
                sort: m
            })
        ]
    }));
}, de = function(e) {
    var n = e.headers, r = e.hiddenColumns, t = function(e) {
        var n = e.headers, o = e.flattenedHeaders;
        return n.forEach(function(e) {
            !0 !== r[e.accessor] && (e.children ? t({
                headers: e.children,
                flattenedHeaders: o
            }) : o.push(e));
        }), o;
    }, o = t({
        headers: n,
        flattenedHeaders: []
    });
    return "".concat(o.map(function(e) {
        return function(e) {
            var n = e.minWidth, r = e.width;
            return "number" == typeof r && (r = "".concat(r, "px")), n && "number" == typeof n && (n = "".concat(n, "px")), void 0 !== n ? "minmax(".concat(n, ", ").concat(r, ")") : r;
        }(e);
    }).join(" "));
}, ce = function(r) {
    var t = r.flattenedRows, i = r.isWidthDragging, a = r.setFlattenedRows, d = r.setScrollTop, c = r.sort, s = r.visibleRows, u = A(), h = u.editColumns, f = u.headersRef, v = u.hiddenColumns, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), I = f.current.filter(function(e) {
        return !e.pinned;
    }), x = f.current.filter(function(e) {
        return "left" === e.pinned;
    }), R = f.current.filter(function(e) {
        return "right" === e.pinned;
    }), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return de({
            headers: x,
            hiddenColumns: v
        });
    }, [
        x,
        v
    ]), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return de({
            headers: I,
            hiddenColumns: v
        });
    }, [
        I,
        v
    ]), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return de({
            headers: R,
            hiddenColumns: v
        });
    }, [
        R,
        v
    ]), S = {
        centerHeaderRef: p,
        flattenedRows: t,
        headerContainerRef: m,
        isWidthDragging: i,
        mainTemplateColumns: y,
        pinnedLeftColumns: x,
        pinnedLeftHeaderRef: w,
        pinnedLeftTemplateColumns: b,
        pinnedRightColumns: R,
        pinnedRightHeaderRef: C,
        pinnedRightTemplateColumns: M,
        setFlattenedRows: a,
        setScrollTop: d,
        visibleRows: s
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-table-content",
        style: {
            width: h ? "calc(100% - 27.5px)" : "100%"
        }
    }, {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(le, g({}, {
                centerHeaderRef: p,
                headerContainerRef: m,
                headersRef: f,
                hiddenColumns: v,
                mainTemplateColumns: y,
                pinnedLeftColumns: x,
                pinnedLeftHeaderRef: w,
                pinnedLeftTemplateColumns: b,
                pinnedRightColumns: R,
                pinnedRightHeaderRef: C,
                pinnedRightTemplateColumns: M,
                sort: c
            })),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(G, g({}, S))
        ]
    }));
}, se = function(e) {
    var n = e.callback, r = e.ref, t = e.widthAttribute;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = r.current;
        if (e) {
            var o = function() {
                n(e[t] || 0);
            };
            o();
            var i = new ResizeObserver(function() {
                o();
            });
            return i.observe(e), function() {
                return i.disconnect();
            };
        }
    }, [
        n,
        r,
        t
    ]);
}, ue = function(r) {
    var i = r.mainBodyRef, a = r.pinnedLeftRef, l = r.pinnedRightRef, d = r.tableContentWidth, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), s = c[0], u = c[1], h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), f = h[0], v = h[1], m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), w = m[0], p = m[1], C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return se({
        widthAttribute: "offsetWidth",
        callback: u,
        ref: a
    }), se({
        widthAttribute: "scrollWidth",
        callback: p,
        ref: i
    }), se({
        widthAttribute: "offsetWidth",
        callback: v,
        ref: l
    }), _(i, C), !i.current || i.current.scrollWidth <= i.current.clientWidth ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-horizontal-scrollbar-container",
        style: {
            width: d
        }
    }, {
        children: [
            s > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "st-horizontal-scrollbar-left",
                style: {
                    flexShrink: 0,
                    width: s
                }
            }),
            w > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
                className: "st-horizontal-scrollbar-middle",
                onScroll: function(e) {
                    var n = e.target.scrollLeft;
                    void 0 !== n && i.current && i.current.scrollTo({
                        left: n,
                        behavior: "auto"
                    });
                },
                ref: C
            }, {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    style: {
                        width: w
                    }
                })
            })),
            f > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "st-horizontal-scrollbar-right",
                style: {
                    flexShrink: 0,
                    minWidth: f
                }
            })
        ]
    }));
}, he = function(e) {
    var n = e.headers, r = e.tableRows, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), i = o[0], a = o[1], d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e = {};
        return n.forEach(function(n) {
            !0 === n.hide && (e[n.accessor] = !0);
        }), e;
    }, [
        n
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(d), s = c[0], u = c[1], h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (!i) return r;
        var e = function(e, n, r) {
            return {
                sortedData: ee(n, r, e),
                newSortConfig: r
            };
        }(n, r, i).sortedData;
        return e;
    }, [
        r,
        i,
        n
    ]);
    return {
        sort: i,
        setSort: a,
        updateSort: function(e, r) {
            var t = n.find(function(e) {
                return e.accessor === r;
            });
            t && a(function(e) {
                return e && e.key.accessor === r ? "ascending" === e.direction ? {
                    key: t,
                    direction: "descending"
                } : null : {
                    key: t,
                    direction: "ascending"
                };
            });
        },
        sortedRows: h,
        hiddenColumns: s,
        setHiddenColumns: u
    };
}, fe = function(r) {
    var o = r.checked, i = void 0 !== o && o, a = r.children, l = r.onChange, d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(i), c = d[0], s = d[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("label", g({
        className: "st-checkbox-label"
    }, {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                checked: c,
                className: "st-checkbox-input",
                onChange: function() {
                    var e = !c;
                    s(e), l && l(e);
                },
                type: "checkbox"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", g({
                className: "st-checkbox-custom ".concat(c ? "st-checked" : "")
            }, {
                children: c && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "st-checkbox-checkmark"
                })
            })),
            a
        ]
    }));
}, ve = function(e) {
    var r = e.headers, t = e.open, o = e.position;
    e.setOpen;
    var i = e.setHiddenColumns, a = e.hiddenColumns, l = "left" === o ? "left" : "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
        className: "st-column-editor-popout ".concat(t ? "open" : "", " ").concat(l),
        onClick: function(e) {
            return e.stopPropagation();
        }
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
            className: "st-column-editor-popout-content"
        }, {
            children: r.map(function(e, r) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(fe, g({
                    checked: a[e.accessor],
                    onChange: function(n) {
                        var r;
                        return i(g(g({}, a), ((r = {})[e.accessor] = n, r)));
                    }
                }, {
                    children: e.label
                }), r);
            })
        }))
    }));
}, me = function(r) {
    var o = r.columnEditorText, i = r.editColumns, a = r.editColumnsInitOpen, l = r.headers, d = r.position, c = void 0 === d ? "right" : d, s = r.setHiddenColumns, u = r.hiddenColumns, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(a), f = h[0], v = h[1];
    return i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
        className: "st-column-editor ".concat(f ? "open" : "", " ").concat(c),
        onClick: function() {
            return function(e) {
                v(e);
            }(!f);
        }
    }, {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", g({
                className: "st-column-editor-text"
            }, {
                children: o
            })),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ve, {
                headers: l,
                open: f,
                position: c,
                setOpen: v,
                setHiddenColumns: s,
                hiddenColumns: u
            })
        ]
    })) : null;
};
!function(e) {
    e.Left = "left", e.Right = "right";
}($ || ($ = {}));
var ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function(r) {
    var d = r.allowAnimations, c = void 0 !== d && d, s = r.collapseIcon, h = void 0 === s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(b, {
        className: "st-sort-icon"
    }) : s, f = r.columnEditorPosition, v = void 0 === f ? $.Right : f, w = r.columnEditorText, y = void 0 === w ? "Columns" : w, M = r.columnReordering, S = void 0 !== M && M, E = r.columnResizing, D = void 0 !== E && E, H = r.defaultHeaders, k = r.editColumns, N = void 0 !== k && k, L = r.editColumnsInitOpen, T = void 0 !== L && L, W = r.expandIcon, O = void 0 === W ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(x, {
        className: "st-sort-icon"
    }) : W, B = r.height, P = r.hideFooter, A = void 0 !== P && P, z = r.nextIcon, j = void 0 === z ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(x, {
        className: "st-next-prev-icon"
    }) : z, U = r.onCellEdit, K = r.onColumnOrderChange, V = r.onNextPage, J = r.onPreviousPage, X = r.prevIcon, q = void 0 === X ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(I, {
        className: "st-next-prev-icon"
    }) : X, Y = r.rowHeight, G = void 0 === Y ? 40 : Y, _ = r.rows, Q = r.rowsPerPage, Z = void 0 === Q ? 10 : Q, ee = r.selectableCells, ne = void 0 !== ee && ee, re = r.selectableColumns, te = void 0 !== re && re, oe = r.shouldPaginate, ie = void 0 !== oe && oe, ae = r.sortDownIcon, le = void 0 === ae ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(b, {
        className: "st-sort-icon"
    }) : ae, de = r.sortUpIcon, se = void 0 === de ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(R, {
        className: "st-sort-icon"
    }) : de, fe = r.theme, ve = void 0 === fe ? "light" : fe, ge = r.totalPages, we = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(H), Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), Ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), xe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), Re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), ye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), Me = ye[0], Se = ye[1], Ee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1), De = Ee[0], He = Ee[1], ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), Ne = ke[0], Le = ke[1], Te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), We = Te[0], Oe = Te[1], Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), Pe = Be[0], Fe = Be[1], Ae = he({
        headers: pe.current,
        tableRows: _
    }), ze = Ae.sort, je = Ae.sortedRows, Ue = Ae.hiddenColumns, Ke = Ae.setHiddenColumns, Ve = Ae.updateSort, Je = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (!ie) return je;
        var e = (De - 1) * Z, n = e + Z;
        return je.slice(e, n);
    }, [
        De,
        Z,
        ie,
        je
    ]), Xe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Je), qe = Xe[0], Ye = Xe[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        Ye(Je);
    }, [
        Je
    ]);
    var $e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e;
        if (!B) return window.innerHeight - G;
        var n = document.querySelector(".simple-table-root"), r = 0;
        if (B.endsWith("px")) r = parseInt(B, 10);
        else if (B.endsWith("vh")) {
            var t = parseInt(B, 10);
            r = window.innerHeight * t / 100;
        } else if (B.endsWith("%")) {
            var o = parseInt(B, 10);
            r = ((null === (e = null == n ? void 0 : n.parentElement) || void 0 === e ? void 0 : e.clientHeight) || window.innerHeight) * o / 100;
        } else r = window.innerHeight;
        return Math.max(0, r - G);
    }, [
        B,
        G
    ]), Ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return function(e) {
            var n = e.bufferRowCount, r = e.contentHeight, t = e.flattenedRows, o = e.rowHeight, i = e.scrollTop, a = [], l = 0, d = Math.max(0, i - o * n), c = i + r + o * n, s = function(e, n) {
                for(var r, t = 0, i = e; t < i.length; t++){
                    var u = i[t], h = l * o;
                    if (h >= c) break;
                    h + o > d && a.push({
                        row: u,
                        depth: n,
                        position: l,
                        isLastGroupRow: Boolean(null === (r = u.rowMeta.children) || void 0 === r ? void 0 : r.length) && n > 1
                    }), l += 1, u.rowMeta.isExpanded && u.rowMeta.children && s(u.rowMeta.children, n + 1);
                }
            };
            return s(t, 0), a;
        }({
            bufferRowCount: 10,
            contentHeight: $e,
            flattenedRows: qe,
            rowHeight: G,
            scrollTop: Pe
        });
    }, [
        $e,
        G,
        qe,
        Pe
    ]), _e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(function(e) {
        return e + 1;
    }, 0)[1], Qe = function(e) {
        var n = e.selectableCells, r = e.headers, d = e.visibleRows, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set), s = c[0], u = c[1], h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set), f = h[0], v = h[1], m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), g = m[0], w = m[1], C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), I = C[0], x = C[1], R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
            var e = Array.from(s).reduce(function(e, n) {
                var t = n.split("-").map(Number), o = t[0], i = t[1];
                return e[o] || (e[o] = []), e[o][i] = d[o].row.rowData[r[i].accessor], e;
            }, {}), n = Object.values(e).map(function(e) {
                return Object.values(e).join("\t");
            }).join("\n");
            s.size > 0 && navigator.clipboard.writeText(n);
        }, [
            r,
            s,
            d
        ]), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e, n) {
            for(var r = new Set, t = Math.min(e.rowIndex, n.rowIndex), o = Math.max(e.rowIndex, n.rowIndex), i = Math.min(e.colIndex, n.colIndex), a = Math.max(e.colIndex, n.colIndex), l = t; l <= o; l++)for(var c = i; c <= a; c++)if (l >= 0 && l < d.length) {
                var s = d[l].row.rowMeta.rowId;
                r.add(p({
                    colIndex: c,
                    rowIndex: l,
                    rowId: s
                }));
            }
            v(new Set), w(null), u(r);
        }, [
            d,
            v,
            w,
            u
        ]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
            if (e.rowIndex >= 0 && e.rowIndex < d.length && e.colIndex >= 0 && e.colIndex < r.length) {
                var n = p(e);
                v(new Set), w(null), u(new Set([
                    n
                ])), x(e);
            }
        }, [
            r.length,
            d.length,
            v,
            w,
            u,
            x
        ]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e, n) {
            void 0 === n && (n = !1), u(new Set), x(null), v(function(r) {
                var t = new Set(n ? r : []);
                return e.forEach(function(e) {
                    return t.add(e);
                }), t;
            }), e.length > 0 && w(e[e.length - 1]);
        }, [
            u,
            x,
            v,
            w
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            var e = function(e) {
                if (n && I) {
                    var t = I.rowIndex, o = I.colIndex, i = I.rowId;
                    if (!e.ctrlKey && !e.metaKey || "c" !== e.key) {
                        if (d[t].row.rowMeta.rowId !== i) {
                            var a = d.findIndex(function(e) {
                                return e.row.rowMeta.rowId === i;
                            });
                            if (-1 === a) return;
                            t = a;
                        }
                        if ("ArrowUp" === e.key) {
                            if (e.preventDefault(), t > 0) {
                                var l = {
                                    rowIndex: t - 1,
                                    colIndex: o,
                                    rowId: d[t - 1].row.rowMeta.rowId
                                };
                                S(l);
                            }
                        } else "ArrowDown" === e.key ? (e.preventDefault(), t < d.length - 1 && (l = {
                            rowIndex: t + 1,
                            colIndex: o,
                            rowId: d[t + 1].row.rowMeta.rowId
                        }, S(l))) : "ArrowLeft" === e.key || "Tab" === e.key && e.shiftKey ? (e.preventDefault(), o > 0 && (l = {
                            rowIndex: t,
                            colIndex: o - 1,
                            rowId: d[t].row.rowMeta.rowId
                        }, S(l))) : "ArrowRight" === e.key || "Tab" === e.key ? (e.preventDefault(), o < r.length - 1 && (l = {
                            rowIndex: t,
                            colIndex: o + 1,
                            rowId: d[t].row.rowMeta.rowId
                        }, S(l))) : "Escape" === e.key && (u(new Set), v(new Set), w(null), b.current = null, x(null));
                    } else y();
                }
            };
            return document.addEventListener("keydown", e), function() {
                document.removeEventListener("keydown", e);
            };
        }, [
            y,
            r.length,
            I,
            M,
            S,
            n,
            d
        ]);
        var D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
            var n = e.colIndex, r = e.rowIndex, t = e.rowId, o = p({
                colIndex: n,
                rowIndex: r,
                rowId: t
            }), i = s.has(o), a = f.has(n);
            return i || a;
        }, [
            s,
            f
        ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
            var n, r, t, o, i, a, l = e.colIndex, c = e.rowIndex, s = e.rowId, u = [], h = null === (t = null === (r = null === (n = d[c - 1]) || void 0 === n ? void 0 : n.row) || void 0 === r ? void 0 : r.rowMeta) || void 0 === t ? void 0 : t.rowId, v = {
                colIndex: l,
                rowIndex: c + 1,
                rowId: null === (a = null === (i = null === (o = d[c + 1]) || void 0 === o ? void 0 : o.row) || void 0 === i ? void 0 : i.rowMeta) || void 0 === a ? void 0 : a.rowId
            }, m = {
                colIndex: l - 1,
                rowIndex: c,
                rowId: s
            }, g = {
                colIndex: l + 1,
                rowIndex: c,
                rowId: s
            };
            return (!D({
                colIndex: l,
                rowIndex: c - 1,
                rowId: h
            }) || f.has(l) && 0 === c) && u.push("st-selected-top-border"), (!D(v) || f.has(l) && c === d.length - 1) && u.push("st-selected-bottom-border"), D(m) || u.push("st-selected-left-border"), D(g) || u.push("st-selected-right-border"), u.join(" ");
        }, [
            D,
            d,
            f
        ]), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
            return I ? function(e) {
                var n = e.rowIndex, r = e.colIndex, t = e.rowId;
                return n === I.rowIndex && r === I.colIndex && t === I.rowId;
            } : function() {
                return !1;
            };
        }, [
            I
        ]);
        return {
            getBorderClass: H,
            handleMouseDown: function(e) {
                var r = e.colIndex, t = e.rowIndex, o = e.rowId;
                if (n) {
                    R.current = !0, b.current = {
                        rowIndex: t,
                        colIndex: r,
                        rowId: o
                    }, v(new Set), w(null);
                    var i = p({
                        colIndex: r,
                        rowIndex: t,
                        rowId: o
                    });
                    u(new Set([
                        i
                    ])), x({
                        rowIndex: t,
                        colIndex: r,
                        rowId: o
                    });
                }
            },
            handleMouseOver: function(e) {
                var r = e.colIndex, t = e.rowIndex;
                if (e.rowId, n && R.current && b.current) {
                    for(var o = new Set, i = Math.min(b.current.rowIndex, t), a = Math.max(b.current.rowIndex, t), l = Math.min(b.current.colIndex, r), c = Math.max(b.current.colIndex, r), s = i; s <= a; s++)for(var h = l; h <= c; h++)if (s >= 0 && s < d.length) {
                        var f = d[s].row.rowMeta.rowId;
                        o.add(p({
                            colIndex: h,
                            rowIndex: s,
                            rowId: f
                        }));
                    }
                    u(o);
                }
            },
            handleMouseUp: function() {
                R.current = !1;
            },
            isInitialFocusedCell: k,
            isSelected: D,
            lastSelectedColumnIndex: g,
            selectColumns: E,
            selectedCells: s,
            selectedColumns: f,
            setInitialFocusedCell: x,
            setSelectedCells: u,
            setSelectedColumns: v
        };
    }({
        selectableCells: ne,
        headers: pe.current,
        visibleRows: Ge
    }), Ze = Qe.handleMouseDown, en = Qe.handleMouseOver, nn = Qe.handleMouseUp, rn = Qe.isSelected, tn = Qe.getBorderClass, on = Qe.isInitialFocusedCell, an = Qe.setSelectedCells, ln = Qe.setSelectedColumns, dn = Qe.selectColumns, cn = Qe.setInitialFocusedCell, sn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e, n) {
        Ve(e, n);
    }, [
        Ve
    ]), un = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        pe.current = e, _e();
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = function(e) {
            var n = e.target;
            n.closest(".st-cell") || te && (n.classList.contains("st-header-cell") || n.classList.contains("st-header-label")) || (an(new Set), te && ln(new Set));
        };
        return document.addEventListener("mousedown", e), function() {
            document.removeEventListener("mousedown", e);
        };
    }, [
        te,
        an,
        ln
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(function() {
        if (be.current) {
            var e = be.current.offsetWidth - be.current.clientWidth, n = be.current.clientWidth;
            Le(e), Oe(n);
        }
    }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(function() {
        var e = function() {
            if (_e(), be.current) {
                var e = be.current.offsetWidth - be.current.clientWidth, n = be.current.clientWidth;
                Le(e), Oe(n);
            }
        };
        return window.addEventListener("resize", e), function() {
            return window.removeEventListener("resize", e);
        };
    }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(F, g({
        value: {
            allowAnimations: c,
            collapseIcon: h,
            columnReordering: S,
            columnResizing: D,
            draggedHeaderRef: we,
            editColumns: N,
            expandIcon: O,
            forceUpdate: _e,
            getBorderClass: tn,
            handleMouseDown: Ze,
            handleMouseOver: en,
            headersRef: pe,
            hiddenColumns: Ue,
            hoveredHeaderRef: Ce,
            isInitialFocusedCell: on,
            isSelected: rn,
            mainBodyRef: Ie,
            onCellEdit: U,
            onColumnOrderChange: K,
            onSort: sn,
            onTableHeaderDragEnd: un,
            pinnedLeftRef: xe,
            pinnedRightRef: Re,
            rowHeight: G,
            scrollbarWidth: Ne,
            selectColumns: dn,
            selectableColumns: te,
            setInitialFocusedCell: cn,
            setIsWidthDragging: Se,
            setSelectedCells: an,
            setSelectedColumns: ln,
            shouldPaginate: ie,
            sortDownIcon: le,
            sortUpIcon: se,
            tableBodyContainerRef: be
        }
    }, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
            className: "simple-table-root st-wrapper theme-".concat(ve),
            style: B ? {
                height: B
            } : {}
        }, {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
                    className: "st-table-wrapper-container"
                }, {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", g({
                            className: "st-table-wrapper",
                            onMouseUp: nn,
                            onMouseLeave: nn
                        }, {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ce, {
                                    flattenedRows: qe,
                                    isWidthDragging: Me,
                                    setFlattenedRows: Ye,
                                    setScrollTop: Fe,
                                    sort: ze,
                                    visibleRows: Ge
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(me, {
                                    columnEditorText: y,
                                    editColumns: N,
                                    editColumnsInitOpen: T,
                                    headers: pe.current,
                                    hiddenColumns: Ue,
                                    position: v,
                                    setHiddenColumns: Ke
                                })
                            ]
                        })),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ue, {
                            mainBodyRef: Ie,
                            pinnedLeftRef: xe,
                            pinnedRightRef: Re,
                            tableContentWidth: We
                        })
                    ]
                })),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(C, {
                    currentPage: De,
                    hideFooter: A,
                    nextIcon: j,
                    onPageChange: He,
                    onNextPage: V,
                    onPreviousPage: J,
                    prevIcon: q,
                    shouldPaginate: ie,
                    totalPages: ge || Math.ceil(je.length / Z)
                })
            ]
        }))
    }));
});
;
 //# sourceMappingURL=index.es.js.map
}}),
"[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript) <export default as Tooltip>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_d1d04b0a._.js.map