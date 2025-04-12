module.exports = {

"[project]/src/utils/analyticsConfig.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Utility to conditionally enable/disable analytics services based on environment
 */ // TypeScript declaration for Hotjar
__turbopack_context__.s({
    "ANALYTICS_ENABLED": (()=>ANALYTICS_ENABLED),
    "disableHotjarInDevelopment": (()=>disableHotjarInDevelopment),
    "disableSimpleAnalyticsInDevelopment": (()=>disableSimpleAnalyticsInDevelopment)
});
// Check if we're in development mode
const isDevelopment = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return ("TURBOPACK compile-time value", "development") === "development";
    }
    "TURBOPACK unreachable";
};
const ANALYTICS_ENABLED = !isDevelopment();
const disableHotjarInDevelopment = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    "TURBOPACK unreachable";
};
const disableSimpleAnalyticsInDevelopment = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    "TURBOPACK unreachable";
};
}}),
"[project]/src/utils/analytics.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "trackButtonClick": (()=>trackButtonClick),
    "trackDownload": (()=>trackDownload),
    "trackEvent": (()=>trackEvent),
    "trackLinkClick": (()=>trackLinkClick),
    "trackPageView": (()=>trackPageView),
    "trackThemeChange": (()=>trackThemeChange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-ga4/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analyticsConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/analyticsConfig.ts [app-rsc] (ecmascript)");
;
;
const trackEvent = (category, action, label)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analyticsConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ANALYTICS_ENABLED"]) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].event({
        category,
        action,
        label
    });
};
const trackPageView = (path)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analyticsConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ANALYTICS_ENABLED"]) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].send({
        hitType: "pageview",
        page: path
    });
};
const trackLinkClick = (linkName, linkUrl)=>{
    trackEvent("Link Click", linkName, linkUrl);
};
const trackButtonClick = (buttonName, buttonLocation)=>{
    trackEvent("Button Click", buttonName, buttonLocation);
};
const trackThemeChange = (themeName)=>{
    trackEvent("Theme", "Change", themeName);
};
const trackDownload = (fileName)=>{
    trackEvent("Download", "File", fileName);
};
}}),
"[project]/src/components/AnimatedBackground.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
// Background bubble component with more visible styling
const BackgroundBubble = ({ size, x, y, delay, opacity = 0.3, color = "bg-blue-500/30" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `absolute rounded-full ${color}`,
        style: {
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
            zIndex: -1
        },
        initial: {
            scale: 0.6,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity
        },
        transition: {
            duration: 5 + Math.random() * 7,
            delay,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this);
const AnimatedBackground = ()=>{
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoaded(true);
    }, []);
    // Generate bubbles across the viewport with varied colors and improved visibility
    const bubbles = [
        {
            size: 300,
            x: 5,
            y: 10,
            delay: 0,
            opacity: 0.25,
            color: "bg-blue-500/35"
        },
        {
            size: 200,
            x: 80,
            y: 15,
            delay: 0.3,
            opacity: 0.22,
            color: "bg-indigo-500/30"
        },
        {
            size: 250,
            x: 20,
            y: 60,
            delay: 0.5,
            opacity: 0.28,
            color: "bg-blue-400/35"
        },
        {
            size: 180,
            x: 70,
            y: 70,
            delay: 0.7,
            opacity: 0.25,
            color: "bg-sky-500/35"
        },
        {
            size: 350,
            x: 40,
            y: 30,
            delay: 1.0,
            opacity: 0.2,
            color: "bg-blue-600/30"
        },
        {
            size: 420,
            x: 85,
            y: 90,
            delay: 1.3,
            opacity: 0.18,
            color: "bg-indigo-400/30"
        },
        {
            size: 280,
            x: 10,
            y: 95,
            delay: 1.5,
            opacity: 0.25,
            color: "bg-blue-500/35"
        },
        {
            size: 360,
            x: 60,
            y: 40,
            delay: 1.8,
            opacity: 0.2,
            color: "bg-sky-400/30"
        },
        // Add a few more prominent bubbles
        {
            size: 200,
            x: 30,
            y: 20,
            delay: 2.0,
            opacity: 0.3,
            color: "bg-blue-500/40"
        },
        {
            size: 230,
            x: 75,
            y: 50,
            delay: 0.8,
            opacity: 0.32,
            color: "bg-indigo-500/40"
        },
        {
            size: 190,
            x: 15,
            y: 45,
            delay: 1.2,
            opacity: 0.35,
            color: "bg-sky-400/45"
        },
        {
            size: 320,
            x: 88,
            y: 25,
            delay: 0.4,
            opacity: 0.3,
            color: "bg-blue-400/40"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none min-h-[200vh]",
        children: isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                bubbles.map((bubble, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundBubble, {
                        size: bubble.size,
                        x: bubble.x,
                        y: bubble.y,
                        delay: bubble.delay,
                        opacity: bubble.opacity,
                        color: bubble.color
                    }, index, false, {
                        fileName: "[project]/src/components/AnimatedBackground.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-grid-pattern opacity-[0.08]"
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AnimatedBackground;
}}),
"[project]/src/components/PageLayout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-rsc] (ecmascript)");
;
;
;
const PageLayout = ({ containerWidth = "w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl", sidebar, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/PageLayout.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 sm:px-6 md:px-8",
                    children: [
                        sidebar,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col flex-1 mx-auto mt-6 ${containerWidth}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8 mb-8 min-h-[calc(100dvh-84px-1.5rem)]",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageLayout.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageLayout.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageLayout.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageLayout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = PageLayout;
}}),
"[project]/src/hooks/useIsMobile.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": (()=>useIsMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const useIsMobile = (breakpoint = 768)=>{
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkViewportSize = ()=>{
            setIsMobile(window.innerWidth < breakpoint);
        };
        // Initial check
        checkViewportSize();
        // Add event listener for window resize
        window.addEventListener("resize", checkViewportSize);
        // Clean up event listener
        return ()=>window.removeEventListener("resize", checkViewportSize);
    }, [
        breakpoint
    ]);
    return isMobile;
};
}}),
"[project]/src/components/examples/finance/finance-rows.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/components/examples/finance/finance-headers.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-2 py-1 rounded font-medium ${bgColor} ${color}`,
                        children: [
                            prefix,
                            value.toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: color,
                        children: [
                            prefix,
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
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
                    const icon = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faThumbsUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faThumbsDown"] : null;
                    const direction = value >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faArrowUp"] : value < 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faArrowDown"] : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tooltip"], {
                        title: `${value.toFixed(1)} / 5.0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                            color: color,
                            className: "py-1 px-2",
                            children: [
                                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: icon,
                                    className: "mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
                                    lineNumber: 240,
                                    columnNumber: 26
                                }, this),
                                ratingLabel,
                                direction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: direction,
                                    className: "ml-1",
                                    size: "xs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
                                    lineNumber: 242,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
                            lineNumber: 239,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: getColorClass(),
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
                        lineNumber: 267,
                        columnNumber: 18
                    }, this);
                }
            }
        ]
    }
];
}}),
"[project]/src/components/examples/finance/FinancialDashboard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/finance-rows.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/finance-headers.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const FinancialDashboard = ({ height = "70dvh" })=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFinanceData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        height: height,
        theme: "light",
        selectableCells: true,
        selectableColumns: true
    }, void 0, false, {
        fileName: "[project]/src/components/examples/finance/FinancialDashboard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FinancialDashboard;
}}),
"[project]/src/components/examples/manufacturing/manufacturing-rows.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateManufacturingData": (()=>generateManufacturingData)
});
const generateManufacturingData = ()=>{
    const productLines = [
        "Assembly Line A",
        "Assembly Line B",
        "Electronics",
        "Packaging",
        "Quality Control",
        "Tooling"
    ];
    const productTypes = [
        "Component X",
        "Widget Y",
        "Module Z",
        "Part Alpha",
        "Unit Beta",
        "System Gamma"
    ];
    const machines = [
        "Robot Arm",
        "CNC Machine",
        "Injection Molder",
        "Circuit Printer",
        "Quality Scanner",
        "Packaging"
    ];
    const operators = [
        "Team Alpha",
        "Team Beta",
        "Team Gamma",
        "Team Delta",
        "Team Epsilon",
        "Team Zeta"
    ];
    let rowId = 0;
    const rows = [];
    // Generate data for each product line
    productLines.forEach((productLine, lineIndex)=>{
        // Number of machines/workstations per product line
        const numStations = Math.floor(Math.random() * 6) + 3; // 3 to 8 stations per line
        const children = [];
        let totalOutput = 0;
        let totalDefects = 0;
        let totalDowntime = 0;
        let totalEfficiency = 0;
        // Generate station data
        for(let i = 0; i < numStations; i++){
            const stationId = `${productLine.charAt(0)}${lineIndex + 1}-S${i + 1}`;
            const machineType = machines[Math.floor(Math.random() * machines.length)];
            const operator = operators[Math.floor(Math.random() * operators.length)];
            const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
            // Calculate metrics
            const outputRate = Math.floor(Math.random() * 500) + 200; // 200-700 units per shift
            const cycleTimes = Array.from({
                length: 10
            }, ()=>Math.random() * 100 + 50);
            const avgCycleTime = cycleTimes.reduce((sum, time)=>sum + time, 0) / cycleTimes.length;
            const efficiency = Math.floor(Math.random() * 40) + 60; // 60-100%
            const defectRate = Math.random() * 5; // 0-5%
            const defectCount = Math.floor(outputRate * (defectRate / 100));
            const downtimeHours = Math.random() * 4; // 0-4 hours
            const utilizationRate = Math.floor(Math.random() * 30) + 70; // 70-100%
            const energyConsumption = Math.floor(Math.random() * 1000) + 500; // 500-1500 kWh
            const maintenanceDate = new Date();
            maintenanceDate.setDate(maintenanceDate.getDate() + Math.floor(Math.random() * 30));
            // Random status weighted toward "Running"
            const statusRandom = Math.random();
            const status = statusRandom < 0.7 ? "Running" : statusRandom < 0.8 ? "Scheduled Maintenance" : statusRandom < 0.9 ? "Unplanned Downtime" : statusRandom < 0.95 ? "Idle" : "Setup";
            children.push({
                rowMeta: {
                    rowId: rowId++,
                    isExpanded: true
                },
                rowData: {
                    id: stationId,
                    productLine,
                    station: `Station ${i + 1}`,
                    machineType,
                    operator,
                    productType,
                    outputRate,
                    cycletime: avgCycleTime.toFixed(2),
                    efficiency,
                    defectRate: defectRate.toFixed(2),
                    defectCount,
                    downtime: downtimeHours.toFixed(2),
                    utilization: utilizationRate,
                    energy: energyConsumption,
                    status,
                    maintenanceDate: maintenanceDate.toISOString().split("T")[0],
                    cycleTimeData: JSON.stringify(cycleTimes)
                }
            });
            // Accumulate totals for product line summary
            totalOutput += outputRate;
            totalDefects += defectCount;
            totalDowntime += downtimeHours;
            totalEfficiency += efficiency;
        }
        // Create product line summary row
        const avgEfficiency = Math.round(totalEfficiency / children.length);
        const avgDefectRate = (totalDefects / totalOutput * 100).toFixed(2);
        rows.push({
            rowMeta: {
                rowId: rowId++,
                isExpanded: true,
                children
            },
            rowData: {
                id: `${productLine.charAt(0)}${lineIndex + 1}`,
                productLine,
                station: `${productLine} Summary`,
                machineType: "—",
                operator: "—",
                productType: "—",
                outputRate: totalOutput,
                cycletime: "—",
                efficiency: avgEfficiency,
                defectRate: avgDefectRate,
                defectCount: totalDefects,
                downtime: totalDowntime.toFixed(2),
                utilization: "—",
                energy: children.reduce((sum, child)=>sum + child.rowData.energy, 0),
                status: "—",
                maintenanceDate: "—",
                cycleTimeData: "—"
            }
        });
    });
    return rows;
};
}}),
"[project]/src/components/examples/manufacturing/manufacturing-headers.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
;
;
;
;
const HEADERS = [
    {
        accessor: "productLine",
        label: "Production Line",
        width: 180,
        expandable: true,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string",
        cellRenderer: ({ row })=>{
            const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
            return isLineRow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold",
                children: row.rowData.productLine
            }, void 0, false, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 25,
                columnNumber: 26
            }, this) : row.rowData.productLine;
        }
    },
    {
        accessor: "station",
        label: "Workstation",
        width: 150,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string",
        cellRenderer: ({ row })=>{
            const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
            if (isLineRow) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-500",
                    children: row.rowData.id
                }, void 0, false, {
                    fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-blue-100 text-blue-700 text-xs font-medium px-1.5 py-0.5 rounded",
                        children: row.rowData.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: row.rowData.station
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this);
        }
    },
    {
        accessor: "machineType",
        label: "Machine Type",
        width: 150,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string"
    },
    {
        accessor: "status",
        label: "Status",
        width: 180,
        isSortable: true,
        isEditable: false,
        align: "center",
        type: "string",
        cellRenderer: ({ row })=>{
            if (row.rowData.status === "—") return "—";
            const status = row.rowData.status;
            const colorMap = {
                Running: {
                    color: "green",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faCheckCircle"]
                },
                "Scheduled Maintenance": {
                    color: "blue",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faCog"]
                },
                "Unplanned Downtime": {
                    color: "red",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faExclamationTriangle"]
                },
                Idle: {
                    color: "orange",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faClock"]
                },
                Setup: {
                    color: "purple",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faTools"]
                }
            };
            const statusInfo = colorMap[status] || {
                color: "default",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faInfoCircle"]
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                color: statusInfo.color,
                className: "px-2 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: statusInfo.icon,
                        className: "mr-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    status
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this);
        }
    },
    {
        accessor: "outputRate",
        label: "Output (units/shift)",
        width: 160,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isLineRow ? "font-bold" : "",
                children: row.rowData.outputRate.toLocaleString()
            }, void 0, false, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 98,
                columnNumber: 14
            }, this);
        }
    },
    {
        accessor: "cycletime",
        label: "Cycle Time (s)",
        width: 140,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number"
    },
    {
        accessor: "efficiency",
        label: "Efficiency",
        width: 150,
        isSortable: true,
        isEditable: false,
        align: "center",
        type: "number",
        cellRenderer: ({ row })=>{
            if (row.rowData.efficiency === "—") return "—";
            const efficiency = row.rowData.efficiency;
            const getColorByEfficiency = (value)=>{
                if (value >= 90) return "success";
                if (value >= 75) return "normal";
                return "exception";
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Progress"], {
                        percent: efficiency,
                        size: "small",
                        showInfo: false,
                        status: getColorByEfficiency(efficiency)
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-center mt-1",
                        children: [
                            efficiency,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this);
        }
    },
    {
        accessor: "defectRate",
        label: "Defect Rate",
        width: 120,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            if (row.rowData.defectRate === "—") return "—";
            const rate = parseFloat(row.rowData.defectRate);
            const color = rate < 1 ? "text-green-600" : rate < 3 ? "text-orange-500" : "text-red-600";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: color,
                children: [
                    rate,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 149,
                columnNumber: 14
            }, this);
        }
    },
    {
        accessor: "defectCount",
        label: "Defects",
        width: 120,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number"
    },
    {
        accessor: "downtime",
        label: "Downtime (h)",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            if (row.rowData.downtime === "—") return "—";
            const hours = parseFloat(row.rowData.downtime);
            const color = hours < 1 ? "text-green-600" : hours < 2 ? "text-orange-500" : "text-red-600";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: color,
                children: hours
            }, void 0, false, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 175,
                columnNumber: 14
            }, this);
        }
    },
    {
        accessor: "utilization",
        label: "Utilization",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            if (row.rowData.utilization === "—") return "—";
            return `${row.rowData.utilization}%`;
        }
    },
    {
        accessor: "energy",
        label: "Energy (kWh)",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            return row.rowData.energy.toLocaleString();
        }
    },
    {
        accessor: "maintenanceDate",
        label: "Next Maintenance",
        width: 150,
        isSortable: true,
        isEditable: false,
        align: "center",
        type: "date",
        cellRenderer: ({ row })=>{
            if (row.rowData.maintenanceDate === "—") return "—";
            const date = new Date(row.rowData.maintenanceDate);
            const today = new Date();
            const diffDays = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
            let color = "blue";
            if (diffDays <= 3) color = "red";
            else if (diffDays <= 7) color = "orange";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                color: color,
                children: [
                    date.toLocaleDateString(),
                    " (",
                    diffDays,
                    " days)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/manufacturing/manufacturing-headers.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this);
        }
    }
];
}}),
"[project]/src/components/examples/manufacturing/ManufacturingMetrics.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/manufacturing/manufacturing-rows.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/manufacturing/manufacturing-headers.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const ManufacturingMetrics = ()=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateManufacturingData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        height: "60dvh",
        theme: "light",
        selectableCells: true
    }, void 0, false, {
        fileName: "[project]/src/components/examples/manufacturing/ManufacturingMetrics.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ManufacturingMetrics;
}}),
"[project]/src/components/examples/hr/hr-rows.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateHRData": (()=>generateHRData)
});
const generateHRData = ()=>{
    const departments = [
        "Engineering",
        "Marketing",
        "Sales",
        "Finance",
        "HR",
        "Operations",
        "Customer Support"
    ];
    const positions = [
        "Manager",
        "Senior",
        "Junior",
        "Lead",
        "Associate",
        "Head",
        "Coordinator",
        "Analyst",
        "Director",
        "Specialist",
        "Assistant",
        "Executive",
        "Intern"
    ];
    const firstNames = [
        "James",
        "Mary",
        "John",
        "Patricia",
        "Robert",
        "Jennifer",
        "Michael",
        "Elizabeth",
        "William",
        "Linda",
        "David",
        "Barbara",
        "Sarah",
        "Susan",
        "Karen",
        "Jessica",
        "Lisa",
        "Nancy",
        "Betty",
        "Margaret",
        "Sandra",
        "Ashley",
        "Kimberly",
        "Emily",
        "Donna",
        "Michelle",
        "Carol",
        "Amanda",
        "Melissa",
        "Deborah",
        "Stephanie",
        "Dorothy",
        "Rebecca",
        "Sharon",
        "Laura",
        "Cynthia",
        "Amy",
        "Kathleen",
        "Angela",
        "Shirley",
        "Anna",
        "Ruth",
        "Brenda",
        "Pamela",
        "Nicole",
        "Katherine",
        "Samantha",
        "Christine"
    ];
    const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
        "Anderson",
        "Thomas",
        "Jackson",
        "White",
        "Harris",
        "Martin",
        "Thompson",
        "Garcia",
        "Martinez",
        "Robinson",
        "Clark",
        "Rodriguez",
        "Lewis",
        "Lee",
        "Walker",
        "Hall",
        "Allen",
        "Young",
        "Hernandez",
        "King",
        "Wright",
        "Lopez",
        "Hill",
        "Scott",
        "Green",
        "Adams",
        "Baker",
        "Gonzalez",
        "Nelson",
        "Carter",
        "Mitchell",
        "Perez",
        "Roberts",
        "Turner",
        "Phillips",
        "Campbell",
        "Parker",
        "Evans"
    ];
    const locations = [
        "New York",
        "Los Angeles",
        "Chicago",
        "San Francisco",
        "Austin",
        "Boston",
        "Seattle",
        "Remote"
    ];
    const statuses = [
        "Active",
        "On Leave",
        "Probation",
        "Contract",
        "Terminated"
    ];
    let rowId = 0;
    const rows = [];
    // Generate a flat list of 50 employees
    const totalEmployees = 50;
    for(let i = 0; i < totalEmployees; i++){
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const department = departments[Math.floor(Math.random() * departments.length)];
        const position = positions[Math.floor(Math.random() * positions.length)];
        // Calculate random metrics
        const performanceScore = Math.floor(Math.random() * 41) + 60; // 60-100
        const salaryBase = Math.floor(Math.random() * 50) + 50; // $50k - $100k base
        const salaryMultiplier = position.includes("Senior") || position.includes("Lead") ? 1.5 : position.includes("Manager") || position.includes("Director") ? 2 : position.includes("Head") || position.includes("Executive") ? 2.5 : position.includes("Intern") ? 0.5 : 1;
        const salary = Math.floor(salaryBase * salaryMultiplier) * 1000;
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        // Generate hire date (within last 10 years)
        const currentYear = new Date().getFullYear();
        const hireYear = currentYear - Math.floor(Math.random() * 10);
        const hireMonth = Math.floor(Math.random() * 12) + 1;
        const hireDay = Math.floor(Math.random() * 28) + 1;
        const hireDate = `${hireYear}-${hireMonth.toString().padStart(2, "0")}-${hireDay.toString().padStart(2, "0")}`;
        // Calculate years of service based on hire date
        const yearsOfService = ((new Date().getTime() - new Date(hireDate).getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
        // Generate random email
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`;
        // Random location
        const location = locations[Math.floor(Math.random() * locations.length)];
        rows.push({
            rowMeta: {
                rowId: rowId++
            },
            rowData: {
                id: Math.floor(Math.random() * 10000) + 1000,
                department,
                firstName,
                lastName,
                fullName: `${firstName} ${lastName}`,
                position: `${position} ${department.includes("Engineering") ? "Engineer" : department.includes("Marketing") ? "Marketer" : department.includes("Sales") ? "Representative" : department.includes("Finance") ? "Analyst" : department.includes("HR") ? "Specialist" : department.includes("Operations") ? "Manager" : "Agent"}`,
                email,
                hireDate,
                yearsOfService: parseFloat(yearsOfService),
                salary,
                performanceScore,
                location,
                status
            }
        });
    }
    return rows;
};
}}),
"[project]/src/components/examples/hr/hr-headers.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
;
;
const HEADERS = [
    {
        accessor: "fullName",
        label: "Employee",
        width: 220,
        isSortable: true,
        isEditable: false,
        align: "left",
        pinned: "left",
        type: "string",
        cellRenderer: ({ row })=>{
            // Employee row, render with avatar and details
            const initials = `${row.rowData.firstName?.toString().charAt(0) || ""}${row.rowData.lastName?.toString().charAt(0) || ""}`;
            const name = row.rowData.fullName;
            const position = row.rowData.position;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "flex items-center justify-center bg-blue-500 text-white",
                        size: "small",
                        children: initials
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: position
                            }, void 0, false, {
                                fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this);
        }
    },
    {
        accessor: "performanceScore",
        label: "Performance",
        width: 160,
        isSortable: true,
        isEditable: false,
        align: "center",
        type: "number",
        cellRenderer: ({ row })=>{
            const score = row.rowData.performanceScore;
            const getColorByScore = (score)=>{
                if (score >= 90) return "success";
                if (score >= 65) return "normal";
                return "exception"; // Default case for low scores
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Progress"], {
                        percent: score,
                        size: "small",
                        showInfo: false,
                        status: getColorByScore(score)
                    }, void 0, false, {
                        fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-center mt-1",
                        children: [
                            score,
                            "/100"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this);
        }
    },
    {
        accessor: "department",
        label: "Department",
        width: 150,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string"
    },
    {
        accessor: "email",
        label: "Email",
        width: 220,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string"
    },
    {
        accessor: "location",
        label: "Location",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "string"
    },
    {
        accessor: "hireDate",
        label: "Hire Date",
        width: 120,
        isSortable: true,
        isEditable: false,
        align: "left",
        type: "date",
        cellRenderer: ({ row })=>{
            if (!row.rowData.hireDate) return "";
            const date = new Date(row.rowData.hireDate);
            return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });
        }
    },
    {
        accessor: "yearsOfService",
        label: "Service",
        width: 100,
        isSortable: true,
        isEditable: false,
        align: "center",
        type: "number",
        cellRenderer: ({ row })=>{
            if (row.rowData.yearsOfService === null) return "";
            return `${row.rowData.yearsOfService} yrs`;
        }
    },
    {
        accessor: "salary",
        label: "Salary",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            return `$${row.rowData.salary.toLocaleString()}`;
        }
    },
    {
        accessor: "status",
        label: "Status",
        width: 120,
        isSortable: true,
        isEditable: false,
        align: "center",
        pinned: "right",
        type: "string",
        cellRenderer: ({ row })=>{
            if (!row.rowData.status) return "";
            const status = row.rowData.status;
            const statusColor = {
                Active: "green",
                "On Leave": "orange",
                Probation: "blue",
                Contract: "purple",
                Terminated: "red"
            }[status] || "default";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                color: statusColor,
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/examples/hr/hr-headers.tsx",
                lineNumber: 153,
                columnNumber: 14
            }, this);
        }
    }
];
}}),
"[project]/src/components/examples/hr/HRManagement.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$hr$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/hr/hr-rows.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$hr$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/hr/hr-headers.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const HRManagement = ()=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$hr$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateHRData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnReordering: true,
        columnResizing: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$hr$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        rowsPerPage: 10,
        selectableCells: true,
        shouldPaginate: true,
        theme: "light"
    }, void 0, false, {
        fileName: "[project]/src/components/examples/hr/HRManagement.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = HRManagement;
}}),
"[project]/src/components/examples/billing/billing-rows.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateBillingData": (()=>generateBillingData)
});
// Utility functions
const randomBetween = (min, max)=>Math.floor(Math.random() * (max - min + 1) + min);
const randomChoice = (arr)=>arr[Math.floor(Math.random() * arr.length)];
// Generate a random date between two dates
const randomDate = (start, end)=>{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
// Current date and last year date
const currentDate = new Date();
const oneYearAgo = new Date();
oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
// Generate random account name
const generateAccountName = ()=>{
    const companies = [
        "Acme Corp",
        "Globex",
        "Soylent",
        "Initech",
        "Umbrella",
        "Stark Industries",
        "Wayne Enterprises",
        "Cyberdyne",
        "Massive Dynamic",
        "Aperture Science",
        "Virtucon",
        "LexCorp",
        "Weyland-Yutani",
        "Oscorp",
        "Dharma Initiative"
    ];
    const suffixes = [
        "Inc",
        "LLC",
        "Corp",
        "Industries",
        "Technologies",
        "Solutions",
        "Software",
        "Group"
    ];
    if (Math.random() > 0.5) {
        return `${randomChoice(companies)} ${randomChoice(suffixes)}`;
    } else {
        return randomChoice(companies);
    }
};
// Generate charge description
const generateChargeDescription = ()=>{
    const tiers = [
        "Small",
        "Medium",
        "Large",
        "Basic",
        "Premium",
        "Enterprise",
        "Standard"
    ];
    const types = [
        "Installation",
        "Setup",
        "Support",
        "Maintenance",
        "Usage",
        "License",
        "Service",
        "Access",
        "Storage",
        "Processing"
    ];
    return `${randomChoice(tiers)} - ${randomChoice(types)}`;
};
// Generate monthly data for a row
const generateMonthlyData = (startMonth, startYear, amount, monthsToDistribute = 12)=>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    // For charges, distribute the amount over the months
    let remainingAmount = amount;
    const monthlyValues = {};
    // New revenue and balance records
    const monthlyRevenue = {};
    const monthlyBalance = {};
    for(let i = 0; i < 12; i++){
        const monthIndex = (currentMonth - i + 12) % 12;
        const year = currentMonth - i < 0 ? currentYear - 1 : currentYear;
        const key = `month_${months[monthIndex]}_${year}`;
        const revenueKey = `revenue_${months[monthIndex]}_${year}`;
        const balanceKey = `balance_${months[monthIndex]}_${year}`;
        // If this month is before the start date or we've already distributed all months
        const isBeforeStart = year < startYear || year === startYear && monthIndex < startMonth;
        if (isBeforeStart || i >= monthsToDistribute) {
            monthlyValues[key] = 0;
            monthlyRevenue[revenueKey] = 0;
            monthlyBalance[balanceKey] = 0;
            continue;
        }
        // For the last month, use all remaining amount
        if (i === monthsToDistribute - 1) {
            monthlyValues[key] = parseFloat(remainingAmount.toFixed(2));
        } else {
            // Distribute with some randomness
            const variability = 0.2; // 20% variability
            const baseMonthlyAmount = remainingAmount / (monthsToDistribute - i);
            const variance = baseMonthlyAmount * variability * (Math.random() * 2 - 1);
            let monthlyAmount = Math.min(remainingAmount, baseMonthlyAmount + variance);
            // Ensure we don't exceed the remaining amount and round to 2 decimals
            monthlyAmount = parseFloat(Math.min(remainingAmount, monthlyAmount).toFixed(2));
            remainingAmount -= monthlyAmount;
            monthlyValues[key] = monthlyAmount;
        }
        // Split the monthly amount between revenue and balance
        // Revenue is typically 70-95% of the amount
        const revenuePercentage = 0.7 + Math.random() * 0.25;
        monthlyRevenue[revenueKey] = parseFloat((monthlyValues[key] * revenuePercentage).toFixed(2));
        monthlyBalance[balanceKey] = parseFloat((monthlyValues[key] - monthlyRevenue[revenueKey]).toFixed(2));
    }
    return {
        ...monthlyValues,
        ...monthlyRevenue,
        ...monthlyBalance
    };
};
// Generate revenue recognition data
const calculateRevenueRecognition = (amount, createdDate)=>{
    const diffMonths = currentDate.getMonth() - createdDate.getMonth() + 12 * (currentDate.getFullYear() - createdDate.getFullYear());
    // Calculate how much revenue has been recognized based on time elapsed
    const recognitionPeriod = randomBetween(1, 12); // Revenue is recognized over 1-12 months
    const recognizedPercentage = Math.min(1, diffMonths / recognitionPeriod);
    const recognizedRevenue = parseFloat((amount * recognizedPercentage).toFixed(2));
    const deferredRevenue = parseFloat((amount - recognizedRevenue).toFixed(2));
    return {
        recognizedRevenue,
        deferredRevenue
    };
};
const generateBillingData = ()=>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let rowId = 0;
    const accountRows = [];
    // Invoice statuses and probabilities
    const invoiceStatuses = [
        "paid",
        "overdue",
        "pending",
        "partial",
        "cancelled"
    ];
    const invoiceStatusProbs = [
        0.6,
        0.1,
        0.15,
        0.1,
        0.05
    ]; // 60% paid, 10% overdue, etc.
    // Account statuses
    const accountStatuses = [
        "active",
        "pending",
        "cancelled"
    ];
    const accountStatusProbs = [
        0.85,
        0.1,
        0.05
    ]; // 85% active, 10% pending, 5% cancelled
    // Generate 5-8 accounts
    const accountCount = randomBetween(5, 8);
    for(let a = 0; a < accountCount; a++){
        // Generate account data
        const accountName = generateAccountName();
        const accountId = `ACC-${100000 + randomBetween(1, 99999)}`;
        const accountCreatedDate = randomDate(oneYearAgo, currentDate);
        // Determine account status based on probability
        let accountStatus = "active";
        const statusRoll = Math.random();
        let cumProb = 0;
        for(let i = 0; i < accountStatuses.length; i++){
            cumProb += accountStatusProbs[i];
            if (statusRoll <= cumProb) {
                accountStatus = accountStatuses[i];
                break;
            }
        }
        // Generate invoices for this account
        const invoiceCount = randomBetween(3, 8);
        const invoiceChildren = [];
        let accountTotal = 0;
        let accountRemaining = 0;
        let accountRecognizedRevenue = 0;
        let accountDeferredRevenue = 0;
        for(let i = 0; i < invoiceCount; i++){
            // Create invoice with date after account creation but within the last year
            const earliestDate = new Date(Math.max(oneYearAgo.getTime(), accountCreatedDate.getTime()));
            const invoiceCreatedDate = randomDate(earliestDate, currentDate);
            const invoiceMonth = invoiceCreatedDate.getMonth();
            const invoiceYear = invoiceCreatedDate.getFullYear();
            // Generate random due date (10-30 days after invoice date)
            const dueDate = new Date(invoiceCreatedDate);
            dueDate.setDate(dueDate.getDate() + randomBetween(10, 30));
            const invoiceNumber = randomBetween(100, 999);
            const invoiceId = `INV-${invoiceNumber}`;
            // Use I-XXX format for invoice name
            const invoiceName = `I-${invoiceNumber}`;
            const invoiceAmount = randomBetween(500, 10000) + Math.random();
            const invoiceAmountRounded = parseFloat(invoiceAmount.toFixed(2));
            // Determine invoice status based on probability
            let invoiceStatus = "paid";
            const statusRoll = Math.random();
            let cumProb = 0;
            for(let i = 0; i < invoiceStatuses.length; i++){
                cumProb += invoiceStatusProbs[i];
                if (statusRoll <= cumProb) {
                    invoiceStatus = invoiceStatuses[i];
                    break;
                }
            }
            // Calculate remaining amount based on status
            let remainingAmount = 0;
            switch(invoiceStatus){
                case "paid":
                    remainingAmount = 0;
                    break;
                case "overdue":
                case "pending":
                    remainingAmount = invoiceAmountRounded;
                    break;
                case "partial":
                    remainingAmount = parseFloat((invoiceAmountRounded * Math.random() * 0.8).toFixed(2));
                    break;
                case "cancelled":
                    remainingAmount = 0;
                    break;
            }
            // Generate charges for this invoice
            const chargeCount = randomBetween(2, 5);
            const chargeChildren = [];
            let invoiceRecognizedRevenue = 0;
            let invoiceDeferredRevenue = 0;
            const chargeTotalAmount = invoiceAmountRounded;
            let currentChargeTotal = 0;
            for(let c = 0; c < chargeCount; c++){
                // Calculate charge amount (divide invoice amount among charges)
                let chargeAmount;
                if (c === chargeCount - 1) {
                    // Last charge gets the remainder to ensure sum equals invoice amount
                    chargeAmount = parseFloat((chargeTotalAmount - currentChargeTotal).toFixed(2));
                } else {
                    // Random portion of remaining amount
                    const remainingForCharges = chargeTotalAmount - currentChargeTotal;
                    const portion = Math.random() * 0.7; // Take up to 70% of what's left
                    chargeAmount = parseFloat((remainingForCharges * portion).toFixed(2));
                    currentChargeTotal += chargeAmount;
                }
                const chargeId = `CHG-${100000 + randomBetween(1, 999999)}`;
                // Calculate revenue recognition
                const { recognizedRevenue, deferredRevenue } = calculateRevenueRecognition(chargeAmount, invoiceCreatedDate);
                invoiceRecognizedRevenue += recognizedRevenue;
                invoiceDeferredRevenue += deferredRevenue;
                // Generate monthly distribution for this charge
                const monthlyData = generateMonthlyData(invoiceMonth, invoiceYear, chargeAmount, randomBetween(1, 6) // Distribute over 1-6 months
                );
                // Create charge row
                chargeChildren.push({
                    rowMeta: {
                        rowId: rowId++
                    },
                    rowData: {
                        type: "charge",
                        name: generateChargeDescription(),
                        id: chargeId,
                        createdDate: invoiceCreatedDate.toISOString(),
                        amount: chargeAmount,
                        recognizedRevenue,
                        deferredRevenue,
                        ...monthlyData
                    }
                });
            }
            // Calculate monthly data for the invoice by summing its charges
            const invoiceMonthlyData = {};
            const invoiceMonthlyRevenue = {};
            const invoiceMonthlyBalance = {};
            // For each month
            for(let i = 0; i < 12; i++){
                const monthIndex = (currentDate.getMonth() - i + 12) % 12;
                const year = currentDate.getMonth() - i < 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
                const key = `month_${months[monthIndex]}_${year}`;
                const revenueKey = `revenue_${months[monthIndex]}_${year}`;
                const balanceKey = `balance_${months[monthIndex]}_${year}`;
                // Sum this month's value from all charges
                invoiceMonthlyData[key] = chargeChildren.reduce((sum, charge)=>{
                    return sum + (charge.rowData[key] || 0);
                }, 0);
                // Sum this month's revenue from all charges
                invoiceMonthlyRevenue[revenueKey] = chargeChildren.reduce((sum, charge)=>{
                    return sum + (charge.rowData[revenueKey] || 0);
                }, 0);
                // Sum this month's balance from all charges
                invoiceMonthlyBalance[balanceKey] = chargeChildren.reduce((sum, charge)=>{
                    return sum + (charge.rowData[balanceKey] || 0);
                }, 0);
            }
            // Update account totals
            accountTotal += invoiceAmountRounded;
            accountRemaining += remainingAmount;
            accountRecognizedRevenue += invoiceRecognizedRevenue;
            accountDeferredRevenue += invoiceDeferredRevenue;
            // Create invoice row
            invoiceChildren.push({
                rowMeta: {
                    rowId: rowId++,
                    children: chargeChildren,
                    isExpanded: false
                },
                rowData: {
                    type: "invoice",
                    name: invoiceName,
                    id: invoiceId,
                    status: invoiceStatus,
                    createdDate: invoiceCreatedDate.toISOString(),
                    dueDate: dueDate.toISOString(),
                    amount: invoiceAmountRounded,
                    remaining: remainingAmount,
                    recognizedRevenue: parseFloat(invoiceRecognizedRevenue.toFixed(2)),
                    deferredRevenue: parseFloat(invoiceDeferredRevenue.toFixed(2)),
                    ...invoiceMonthlyData,
                    ...invoiceMonthlyRevenue,
                    ...invoiceMonthlyBalance
                }
            });
        }
        // Calculate monthly data for the account by summing its invoices
        const accountMonthlyData = {};
        const accountMonthlyRevenue = {};
        const accountMonthlyBalance = {};
        // For each month
        for(let i = 0; i < 12; i++){
            const monthIndex = (currentDate.getMonth() - i + 12) % 12;
            const year = currentDate.getMonth() - i < 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
            const key = `month_${months[monthIndex]}_${year}`;
            const revenueKey = `revenue_${months[monthIndex]}_${year}`;
            const balanceKey = `balance_${months[monthIndex]}_${year}`;
            // Sum this month's value from all invoices
            accountMonthlyData[key] = invoiceChildren.reduce((sum, invoice)=>{
                return sum + (invoice.rowData[key] || 0);
            }, 0);
            // Sum this month's revenue from all invoices
            accountMonthlyRevenue[revenueKey] = invoiceChildren.reduce((sum, invoice)=>{
                return sum + (invoice.rowData[revenueKey] || 0);
            }, 0);
            // Sum this month's balance from all invoices
            accountMonthlyBalance[balanceKey] = invoiceChildren.reduce((sum, invoice)=>{
                return sum + (invoice.rowData[balanceKey] || 0);
            }, 0);
        }
        // Create account row
        accountRows.push({
            rowMeta: {
                rowId: rowId++,
                children: invoiceChildren,
                isExpanded: true
            },
            rowData: {
                type: "account",
                name: accountName,
                id: accountId,
                status: accountStatus,
                createdDate: accountCreatedDate.toISOString(),
                amount: parseFloat(accountTotal.toFixed(2)),
                remaining: parseFloat(accountRemaining.toFixed(2)),
                recognizedRevenue: parseFloat(accountRecognizedRevenue.toFixed(2)),
                deferredRevenue: parseFloat(accountDeferredRevenue.toFixed(2)),
                ...accountMonthlyData,
                ...accountMonthlyRevenue,
                ...accountMonthlyBalance
            }
        });
    }
    return accountRows;
};
}}),
"[project]/src/components/examples/billing/billing-headers.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
// Get current month and generate 12 months (current month + 11 previous)
const generateMonthHeaders = ()=>{
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const headers = [];
    // Generate 12 months of headers (current month and 11 previous)
    for(let monthIndex = 0; monthIndex < months.length; monthIndex++){
        const year = currentMonth - monthIndex < 0 ? currentYear - 1 : currentYear;
        // Get full month name
        const fullMonthName = new Date(year, monthIndex).toLocaleString("default", {
            month: "long"
        });
        headers.push({
            accessor: `month_${months[monthIndex]}_${year}`,
            label: `${fullMonthName} ${year}`,
            width: 200,
            isSortable: true,
            isEditable: false,
            align: "right",
            type: "number",
            children: [
                {
                    label: "Balance",
                    accessor: `balance_${months[monthIndex]}_${year}`,
                    width: 200,
                    isSortable: true,
                    isEditable: false,
                    align: "right",
                    type: "number",
                    cellRenderer: ({ row, accessor })=>{
                        const balance = row.rowData[accessor];
                        if (!balance) return "—";
                        return `$${balance.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}`;
                    }
                },
                {
                    label: "Revenue",
                    accessor: `revenue_${months[monthIndex]}_${year}`,
                    width: 200,
                    isSortable: true,
                    isEditable: false,
                    align: "right",
                    type: "number",
                    cellRenderer: ({ row, accessor })=>{
                        const revenue = row.rowData[accessor];
                        if (!revenue) return "—";
                        return `$${revenue.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}`;
                    }
                }
            ]
        });
    }
    return headers;
};
const HEADERS = [
    {
        accessor: "name",
        label: "Name",
        width: 250,
        expandable: true,
        isSortable: true,
        isEditable: false,
        align: "left",
        pinned: "left",
        type: "string",
        cellRenderer: ({ row })=>{
            const name = row.rowData.name;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: row.rowData.type === "account" ? "font-semibold" : "",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/examples/billing/billing-headers.tsx",
                lineNumber: 87,
                columnNumber: 14
            }, this);
        }
    },
    {
        accessor: "amount",
        label: "Total Amount",
        width: 130,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            const amount = row.rowData.amount;
            if (!amount) return "—";
            return `$${amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
        }
    },
    {
        accessor: "deferredRevenue",
        label: "Deferred Revenue",
        width: 180,
        isSortable: true,
        isEditable: false,
        align: "right",
        type: "number",
        cellRenderer: ({ row })=>{
            const amount = row.rowData.amount;
            const deferred = row.rowData.deferredRevenue;
            if (deferred === undefined || amount === undefined) return "—";
            return `$${deferred.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
        }
    },
    ...generateMonthHeaders()
];
}}),
"[project]/src/components/examples/billing/BillingDashboard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/billing-rows.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/billing-headers.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const BillingDashboard = ({ theme = "light" })=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBillingData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        height: "70dvh",
        theme: theme,
        selectableCells: true,
        editColumns: true
    }, void 0, false, {
        fileName: "[project]/src/components/examples/billing/BillingDashboard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BillingDashboard;
}}),
"[project]/src/app/examples/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExamplesLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/analytics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsMobile.ts [app-rsc] (ecmascript)");
// Import all example components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$FinancialDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/FinancialDashboard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$ManufacturingMetrics$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/manufacturing/ManufacturingMetrics.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$HRManagement$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/hr/HRManagement.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$BillingDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/BillingDashboard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
// Define example navigation items
const examples = [
    {
        id: "finance",
        label: "Financial",
        path: "/examples/finance",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faChartLine"],
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$FinancialDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "manufacturing",
        label: "Manufacturing",
        path: "/examples/manufacturing",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faIndustry"],
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$ManufacturingMetrics$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "hr",
        label: "HR",
        path: "/examples/hr",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faUsers"],
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$hr$2f$HRManagement$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "billing",
        label: "Billing",
        path: "/examples/billing",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faFileInvoiceDollar"],
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$BillingDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }
];
function ExamplesLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useIsMobile"])();
    // Determine current active example
    const currentPath = pathname;
    const currentExample = examples.find((example)=>currentPath.includes(example.id)) || examples[0];
    // Title mapping for each example
    const exampleTitles = {
        finance: "Financial Dashboard",
        manufacturing: "Manufacturing Metrics",
        hr: "HR Management",
        billing: "Revenue Recognition"
    };
    const handleLinkClick = (linkPath, linkName)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackLinkClick"])(linkName, linkPath);
        router.push(linkPath);
    };
    // Mobile dropdown menu items
    const menuItems = examples.map((example)=>({
            key: example.id,
            label: example.label,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                icon: example.icon
            }, void 0, false, {
                fileName: "[project]/src/app/examples/layout.tsx",
                lineNumber: 74,
                columnNumber: 11
            }, this),
            onClick: ()=>handleLinkClick(example.path, example.label)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        containerWidth: "w-full",
        sidebar: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full h-full px-4 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold",
                            children: exampleTitles[currentExample.id]
                        }, void 0, false, {
                            fileName: "[project]/src/app/examples/layout.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Dropdown"], {
                            menu: {
                                items: menuItems,
                                selectedKeys: [
                                    currentExample.id
                                ]
                            },
                            trigger: [
                                "click"
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                type: "primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: currentExample.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/examples/layout.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        currentExample.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faCaretDown"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/examples/layout.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/examples/layout.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/examples/layout.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/examples/layout.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Space"], {
                            size: "middle",
                            wrap: true,
                            className: "self-end sm:self-auto",
                            children: examples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    type: currentExample.id === example.id ? "primary" : "default",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: example.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/examples/layout.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, void 0),
                                    onClick: ()=>handleLinkClick(example.path, example.label),
                                    children: example.label
                                }, index, false, {
                                    fileName: "[project]/src/app/examples/layout.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/examples/layout.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/examples/layout.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/examples/layout.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/examples/layout.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/examples/layout.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_9c517daf._.js.map