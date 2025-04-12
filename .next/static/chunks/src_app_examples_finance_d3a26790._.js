(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/examples/finance/finance-rows.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/examples/finance/finance-headers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript) <export default as Tooltip>");
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    const icon = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faThumbsUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faThumbsDown"] : null;
                    const direction = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowDown"] : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                        title: `${value.toFixed(1)} / 5.0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                            color: color,
                            className: "py-1 px-2",
                            children: [
                                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: icon,
                                    className: "mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/examples/finance/finance-headers.tsx",
                                    lineNumber: 240,
                                    columnNumber: 26
                                }, this),
                                ratingLabel,
                                direction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/examples/finance/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/examples/finance/finance-rows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/examples/finance/finance-headers.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateFinanceData"])();
const FinancialDashboard = ({ height = "70dvh" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADERS"],
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
_c = FinancialDashboard;
const __TURBOPACK__default__export__ = FinancialDashboard;
var _c;
__turbopack_context__.k.register(_c, "FinancialDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_examples_finance_d3a26790._.js.map