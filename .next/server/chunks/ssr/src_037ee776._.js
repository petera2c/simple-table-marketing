module.exports = {

"[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
// Background bubble component with more visible styling
const BackgroundBubble = ({ size, x, y, delay, opacity = 0.3, color = "bg-blue-500/30" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none min-h-[200vh]",
        children: isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                bubbles.map((bubble, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundBubble, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/src/constants/strings/seo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SEO_STRINGS": (()=>SEO_STRINGS)
});
const SEO_STRINGS = {
    site: {
        url: "https://www.simple-table.com",
        ogImage: "https://www.simple-table.com/og-image.jpg",
        defaultKeywords: "react table, react grid, react spreadsheet, simple table, react data table, business table component, best react table"
    },
    home: {
        title: "Simple Table - The React Table That Makes Data Fun! 🚀",
        description: "Say goodbye to boring tables! Simple Table is a delightfully powerful React grid that makes your data dance. With lightning-fast editing, smooth scrolling, and pixel-perfect design, it's the table your data deserves! ✨",
        keywords: "react table component, react grid, react spreadsheet, business table, data visualization, react data table, simple table, best react table"
    },
    docs: {
        title: "Simple Table Docs - Your Guide to Table Mastery 📚",
        description: "Level up your table game! Our crystal-clear docs will guide you through Simple Table's powerful features. From basic setup to advanced customization, we've got your back! 💪",
        keywords: "simple table documentation, react table guide, react grid tutorial, simple table setup, react table implementation, table customization"
    },
    themeBuilder: {
        title: "Simple Table Theme Builder - Design Your Perfect Table ✨",
        description: "Create beautiful, custom table designs that match your brand. Our intuitive theme builder makes it easy to adjust colors, spacing, and typography for a professional look that fits your application perfectly.",
        keywords: "simple table theme builder, react table customization, table styling, react grid theme, table appearance customization, table design, professional table themes"
    }
};
}}),
"[project]/src/components/SEO.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/seo.ts [app-ssr] (ecmascript)");
;
;
;
const SEO = ({ title, description, keywords = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.defaultKeywords, ogImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.ogImage, canonicalUrl })=>{
    const fullUrl = canonicalUrl ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url}${canonicalUrl}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: keywords
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: ogImage
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:url",
                content: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:image",
                content: ogImage
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            canonicalUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 43,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: "Simple Table Core",
                    applicationCategory: "DeveloperApplication",
                    operatingSystem: "Web",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD"
                    },
                    description: description,
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url
                })
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SEO.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SEO;
}}),
"[project]/src/constants/strings/ui.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UI_STRINGS": (()=>UI_STRINGS)
});
const UI_STRINGS = {
    common: {
        liveDemo: "See the Magic ✨",
        getStarted: "Let's Build Something Amazing",
        download: "Download",
        settings: "Settings",
        preview: "Preview",
        theme: "Theme"
    },
    home: {
        hero: {
            title: "Simple Table",
            subtitle: "The table of your dreams (yes, we know you dream about tables)"
        },
        features: {
            highlyCustomizable: {
                title: "Highly Customizable",
                description: "More customizable than your coffee order at that fancy café"
            },
            cellEditing: {
                title: "Cell Editing",
                description: "Edit cells faster than your manager can say 'spreadsheet'"
            },
            columnManagement: {
                title: "Column Management",
                description: "Drag, drop, and organize like a data Marie Kondo"
            },
            pagination: {
                title: "Pagination",
                description: "Navigate through data smoother than your social media feed"
            },
            infiniteScroll: {
                title: "Infinite Scroll",
                description: "Like TikTok, but for your business data (and actually productive)"
            },
            performanceOptimized: {
                title: "Performance Optimized",
                description: "Faster than your coworker's excuse for missing the deadline"
            }
        },
        funFacts: {
            title: "Why Simple Table?",
            facts: [
                "Built by developers who actually use tables (shocking, we know)",
                "Zero table flipping incidents reported",
                "Makes Excel users question their life choices",
                "More reliable than your project estimates"
            ]
        }
    },
    docs: {
        title: "Simple Table",
        cssSetup: {
            title: "CSS Styles Setup",
            description: "For Simple Table to function correctly, you need to import the package's CSS styles in your application (don't worry, it's easier than assembling IKEA furniture):",
            note: "This import provides all the necessary styling for the table components. Copy-paste this and you're halfway to impressing your boss!"
        },
        discord: {
            text: "Got questions? Want to share your table success story? Join us on Discord",
            link: "https://discord.gg/RvKHCfg3PC"
        },
        buttons: {
            npmPackage: "NPM Package (It's Free! 🎉)",
            joinDiscord: "Join the Table Talk",
            github: "Star Us on GitHub ⭐"
        },
        sections: {
            installation: "Quick Start (No PhD Required)",
            props: "Props (The Good Stuff)",
            styles: "Make It Pretty",
            license: "The Legal Bits"
        }
    },
    themeBuilder: {
        title: "Theme Builder",
        subtitle: "Make your table so beautiful, it belongs in a museum",
        sections: {
            settings: "The Control Room",
            livePreview: "Watch the Magic Happen"
        },
        categories: {
            colors: "Pick Your Colors",
            spacing: "Space It Out",
            typography: "Font Stuff",
            effects: "Extra"
        },
        subcategories: {
            tableStructure: "The Skeleton",
            button: "Clickable Things",
            cell: "Cell Style (Not the Biology Kind)",
            selection: "Selection Highlights",
            checkbox: "Checkboxes",
            editor: "Editor Magic",
            interactiveElements: "The Fun Parts",
            background: "The Canvas"
        }
    },
    notFound: {
        title: "404 - Table Not Found",
        subtitle: "Looks like this table went on vacation",
        messages: [
            "This table is so lost, it makes a GPS look like a genius",
            "Even our table couldn't find this page, and it's really good at finding things",
            "This page is like a meeting without an agenda - it doesn't exist",
            "We checked all our tables, but this one's playing hide and seek",
            "This page is more elusive than a bug that only appears in production",
            "Our table tried to find this page but got distracted by some interesting data",
            "This page is like a database query that returns null - it's just not there",
            "Even our infinite scroll couldn't find this page",
            "This page is more missing than my motivation on Monday mornings",
            "Our table looked everywhere, even in the backup of the backup"
        ],
        cta: {
            text: "Let's get you back on track",
            buttonText: "Back to Homepage"
        }
    }
};
}}),
"[project]/src/components/examples/finance/finance-rows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/components/examples/finance/finance-headers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    fileName: "[project]/src/components/examples/finance/finance-headers.tsx",
                                    lineNumber: 240,
                                    columnNumber: 26
                                }, this),
                                ratingLabel,
                                direction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
"[project]/src/components/examples/finance/FinancialDashboard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/finance-rows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/finance-headers.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const FinancialDashboard = ({ height = "70dvh" })=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFinanceData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$finance$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEADERS"],
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
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEO.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/ui.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/seo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsMobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$FinancialDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/finance/FinancialDashboard.tsx [app-ssr] (ecmascript)");
"use client";
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
;
function Home() {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Animation variants
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    // Map icons to feature titles
    const getFeatureIcon = (title)=>{
        const iconMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.highlyCustomizable.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTable"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.cellEditing.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faEdit"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.columnManagement.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faColumns"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.pagination.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faList"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.infiniteScroll.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faScroll"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features.performanceOptimized.title]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faRocket"]
        };
        return iconMap[title] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTable"];
    };
    const handleDocumentationClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])("Documentation", "Homepage Hero");
        router.push("/docs");
    };
    const handleExamplesClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])("Examples", "Homepage Hero");
        router.push("/examples");
    };
    const handleFeatureClick = (featureTitle)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackButtonClick"])("Feature Click", featureTitle);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].home.title,
                description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].home.description,
                keywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].home.keywords,
                canonicalUrl: "/"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative z-10 text-center px-4",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: "text-4xl md:text-6xl font-bold text-gray-800 mb-4",
                                    initial: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.hero.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.4
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.hero.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `${isMobile ? "flex flex-col gap-4" : "flex justify-center gap-4"}`,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            className: "hover:scale-105 transition-transform",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCode"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 23
                                            }, void 0),
                                            onClick: handleDocumentationClick,
                                            size: "large",
                                            type: "primary",
                                            children: "Documentation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            size: "large",
                                            onClick: handleExamplesClick,
                                            className: "hover:scale-105 transition-transform",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faRocket"],
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                "Demos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "mb-16 rounded-xl shadow-xl",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$finance$2f$FinancialDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            height: "50dvh"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.features).map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100",
                                variants: itemVariants,
                                whileHover: {
                                    scale: 1.03,
                                    transition: {
                                        duration: 0.2
                                    }
                                },
                                onClick: ()=>handleFeatureClick(feature.title),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: getFeatureIcon(feature.title),
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-800",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                className: "text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faLightbulb"],
                                        className: "text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.funFacts.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].home.funFacts.facts.map((fact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "bg-white p-6 rounded-lg shadow-sm",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: index * 0.1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: fact
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=src_037ee776._.js.map