module.exports = {

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
"[project]/src/components/PageLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)");
;
;
;
const PageLayout = ({ containerWidth = "w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl", sidebar, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/PageLayout.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 sm:px-6 md:px-8",
                    children: [
                        sidebar,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col flex-1 mx-auto mt-6 ${containerWidth}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
"[project]/src/components/ConfigurableSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsMobile.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const ConfigurableSidebar = ({ config, className = "" })=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { title, icon, sidebarContent, footerContent, isMobileOpen, onMobileClose } = config;
    // For desktop, render the sidebar normally
    if (!isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
            initial: {
                x: -100,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            transition: {
                duration: 0.3
            },
            className: `md:w-72 w-full sticky top-[84px] mb-6 self-start h-[calc(100dvh-84px-1.5rem)] ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm flex flex-col rounded-xl h-full shadow-[4px_0_16px_rgba(0,0,0,0.08)] p-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-2 text-blue-600 flex items-center gap-2 pt-3 px-3",
                        children: [
                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                lineNumber: 37,
                                columnNumber: 22
                            }, this),
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto flex-grow px-3 pb-2",
                        children: sidebarContent
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    footerContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-3 border-t border-gray-100 mt-auto",
                        children: footerContent
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ConfigurableSidebar.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    // For mobile, render a sliding drawer that can be toggled
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 bg-black/30 z-40 backdrop-blur-sm",
                    onClick: onMobileClose
                }, void 0, false, {
                    fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
                    initial: {
                        x: "-100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "-100%"
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    className: `fixed left-0 top-0 bottom-0 w-[280px] z-50 ${className}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white flex flex-col h-full shadow-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-3 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-blue-600 flex items-center gap-2",
                                        children: [
                                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                                lineNumber: 77,
                                                columnNumber: 28
                                            }, this),
                                            title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    onMobileClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onMobileClose,
                                        className: "text-gray-500 hover:text-blue-600 transition-colors",
                                        "aria-label": "Close menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTimes"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto flex-grow px-3 py-2",
                                children: sidebarContent
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            footerContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-3 border-t border-gray-100 mt-auto",
                                children: footerContent
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ConfigurableSidebar.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/ConfigurableSidebar.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ConfigurableSidebar;
}}),
"[project]/src/components/ExpandableSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
;
;
;
const ExpandableSection = ({ title, icon, expanded, onToggle, iconClassName = "text-blue-500", children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-1 mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full flex items-center justify-between p-2 text-left text-gray-700 font-medium rounded hover:bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: icon,
                                className: iconClassName
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpandableSection.tsx",
                                lineNumber: 30,
                                columnNumber: 20
                            }, this),
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExpandableSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: expanded ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faChevronDown"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faChevronRight"],
                        className: "text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpandableSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExpandableSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 ml-3 border-l-2 border-gray-100 pl-4 pr-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ExpandableSection.tsx",
                lineNumber: 36,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExpandableSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ExpandableSection;
}}),
"[project]/src/components/ThemeColorPicker.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorPicker$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/color-picker/index.js [app-ssr] (ecmascript) <export default as ColorPicker>");
;
;
const ThemeColorPicker = ({ label, value, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-medium text-gray-700 mb-1 truncate",
                title: label,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeColorPicker.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorPicker$3e$__["ColorPicker"], {
                size: "small",
                value: value,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeColorPicker.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeColorPicker.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ThemeColorPicker;
}}),
"[project]/src/components/ThemeInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-ssr] (ecmascript) <export default as Input>");
;
;
const ThemeInput = ({ label, value, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-medium text-gray-700 mb-1 truncate",
                title: label,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeInput.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                size: "small",
                value: value,
                onChange: (e)=>onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeInput.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeInput.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ThemeInput;
}}),
"[project]/src/components/examples/billing/billing-rows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/components/examples/billing/billing-headers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HEADERS": (()=>HEADERS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/src/components/examples/billing/BillingDashboard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/billing-rows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/billing-headers.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const BillingDashboard = ({ theme = "light" })=>{
    const [data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateBillingData"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$billing$2d$headers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEADERS"],
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
"[project]/src/app/mobile-unsupported/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MobileUnsupportedPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEO.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
function MobileUnsupportedPage({ featureName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `${featureName} - Desktop Only`,
                description: `The ${featureName} is available only on desktop devices due to its advanced interface requirements.`,
                canonicalUrl: "/mobile-unsupported"
            }, void 0, false, {
                fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center p-8 min-h-[60vh] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-6 text-4xl text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faMobileAlt"],
                                    className: "mr-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDesktop"],
                                    className: "ml-4 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: [
                                featureName,
                                " is only available on desktop"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8 max-w-md",
                            children: [
                                "The ",
                                featureName,
                                " requires a larger screen for the best experience. Please visit this page on a desktop device to access all features."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/docs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        size: "large",
                                        children: "Go to Documentation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-blue-600 hover:text-blue-800 transition-colors",
                                        children: "Return to Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/mobile-unsupported/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/theme-builder/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThemeBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEO.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/ui.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/seo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$technical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/technical.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsMobile.ts [app-ssr] (ecmascript)");
// Import our reusable components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfigurableSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfigurableSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpandableSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExpandableSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeColorPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$BillingDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/billing/BillingDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobile$2d$unsupported$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/mobile-unsupported/page.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
const defaultTheme = {
    borderColor: "#d1d5db",
    borderRadius: "4px",
    borderWidth: "1px",
    buttonActiveBackgroundColor: "#1e3a8a",
    buttonHoverBackgroundColor: "#e5e7eb",
    cellColor: "#1f2937",
    cellOddRowColor: "#374151",
    cellPadding: "8px",
    checkboxCheckedBackgroundColor: "#2563eb",
    checkboxCheckedBorderColor: "#2563eb",
    columnEditorBackgroundColor: "#ffffff",
    columnEditorPopoutBackgroundColor: "#ffffff",
    draggingBackgroundColor: "#e5e7eb",
    editCellShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px -1px rgba(0, 0, 0, 0.05)",
    editableCellFocusBorderColor: "#2563eb",
    evenRowBackgroundColor: "#ffffff",
    fontFamily: '"Roboto", sans-serif',
    fontSize: "0.875rem",
    fontWeightBold: 600,
    fontWeightNormal: 400,
    footerBackgroundColor: "#ffffff",
    headerBackgroundColor: "#ffffff",
    lastGroupRowSeparatorBorderColor: "#d1d5db",
    oddRowBackgroundColor: "#ffffff",
    opacityDisabled: 0.5,
    resizeHandleColor: "#93c5fd",
    scrollbarBgColor: "#f8fafc",
    scrollbarThumbColor: "#cbd5e1",
    selectedBorderBottomColor: "#2563eb",
    selectedBorderLeftColor: "#2563eb",
    selectedBorderRightColor: "#2563eb",
    selectedBorderTopColor: "#2563eb",
    selectedCellBackgroundColor: "#bfdbfe",
    selectedCellColor: "#111827",
    selectedFirstCellBackgroundColor: "#bfdbfe",
    selectedFirstCellColor: "#111827",
    separatorBorderColor: "#f1f5f9",
    spacingLarge: "16px",
    spacingMedium: "8px",
    spacingSmall: "4px",
    transitionDuration: "0.2s",
    transitionEase: "ease"
};
function ThemeBuilder() {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        colors: true,
        typography: false,
        layout: false,
        effects: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Target the container of your table
        const container = document.querySelector(".simple-table-root");
        if (container) {
            // Set each CSS variable
            Object.entries(theme).forEach(([key, value])=>{
                const cssVarName = `--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
                document.documentElement.style.setProperty(cssVarName, value);
            });
            // Track theme change
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackThemeChange"])("Custom Theme");
        }
    }, [
        theme
    ]);
    const handleColorChange = (key)=>(color)=>{
            setTheme((prev)=>({
                    ...prev,
                    [key]: color.toHexString()
                }));
        };
    const handleValueChange = (key)=>(value)=>{
            if (value !== null) {
                setTheme((prev)=>({
                        ...prev,
                        [key]: value.toString()
                    }));
            }
        };
    const generateCSS = ()=>{
        return `
.theme-custom {
  ${Object.entries(theme).sort(([a], [b])=>a.localeCompare(b)).map(([key, value])=>`--st-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`).join("\n  ")}
}
    `.trim();
    };
    const downloadCSS = ()=>{
        const cssContent = generateCSS();
        const blob = new Blob([
            cssContent
        ], {
            type: "text/css"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$technical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TECHNICAL_STRINGS"].files.theme;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDownload"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$technical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TECHNICAL_STRINGS"].files.theme);
    };
    // Toggle expanded sections
    const toggleSection = (sectionId)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [sectionId]: !prev[sectionId]
            }));
    };
    // Subcategories for Colors
    const colorSubcategories = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.tableStructure]: [
            "borderColor",
            "lastGroupRowSeparatorBorderColor",
            "separatorBorderColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.button]: [
            "buttonActiveBackgroundColor",
            "buttonHoverBackgroundColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.cell]: [
            "cellColor",
            "cellOddRowColor",
            "evenRowBackgroundColor",
            "oddRowBackgroundColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.selection]: [
            "selectedBorderBottomColor",
            "selectedBorderLeftColor",
            "selectedBorderRightColor",
            "selectedBorderTopColor",
            "selectedCellBackgroundColor",
            "selectedCellColor",
            "selectedFirstCellBackgroundColor",
            "selectedFirstCellColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.checkbox]: [
            "checkboxCheckedBackgroundColor",
            "checkboxCheckedBorderColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.editor]: [
            "columnEditorBackgroundColor",
            "columnEditorPopoutBackgroundColor",
            "editableCellFocusBorderColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.interactiveElements]: [
            "draggingBackgroundColor",
            "resizeHandleColor"
        ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.subcategories.background]: [
            "footerBackgroundColor",
            "headerBackgroundColor",
            "scrollbarBgColor",
            "scrollbarThumbColor"
        ]
    };
    // Shorten label names
    const shortenLabel = (key)=>{
        // Capitalize first letter of each word
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim().replace("Background Color", "Bg").replace("Border Color", "Border").replace("Color", "");
    };
    // Create sidebar content
    const sidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpandableSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.categories.colors,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPalette"],
                expanded: expandedSections["colors"],
                onToggle: ()=>toggleSection("colors"),
                children: Object.entries(colorSubcategories).map(([subcategory, subKeys], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-800 mb-2",
                                children: subcategory
                            }, void 0, false, {
                                fileName: "[project]/src/app/theme-builder/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-x-2 gap-y-3",
                                children: subKeys.map((key, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: shortenLabel(key.toString()),
                                        value: theme[key].toString(),
                                        onChange: handleColorChange(key)
                                    }, index, false, {
                                        fileName: "[project]/src/app/theme-builder/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/theme-builder/page.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/theme-builder/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpandableSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.categories.typography,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCode"],
                expanded: expandedSections["typography"],
                onToggle: ()=>toggleSection("typography"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-x-2 gap-y-3",
                    children: [
                        "fontFamily",
                        "fontSize",
                        "fontWeightBold",
                        "fontWeightNormal"
                    ].map((key, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: shortenLabel(key),
                            value: theme[key],
                            onChange: (value)=>handleValueChange(key)(value)
                        }, index, false, {
                            fileName: "[project]/src/app/theme-builder/page.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/theme-builder/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpandableSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.categories.spacing,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faColumns"],
                expanded: expandedSections["layout"],
                onToggle: ()=>toggleSection("layout"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-x-2 gap-y-3",
                    children: [
                        "borderRadius",
                        "borderWidth",
                        "cellPadding",
                        "spacingLarge",
                        "spacingMedium",
                        "spacingSmall"
                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: shortenLabel(key),
                            value: theme[key],
                            onChange: (value)=>handleValueChange(key)(value)
                        }, key, false, {
                            fileName: "[project]/src/app/theme-builder/page.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/theme-builder/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpandableSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.categories.effects,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSwatchbook"],
                expanded: expandedSections["effects"],
                onToggle: ()=>toggleSection("effects"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-x-2 gap-y-3",
                    children: [
                        "editCellShadow",
                        "opacityDisabled",
                        "transitionDuration",
                        "transitionEase"
                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: shortenLabel(key),
                            value: theme[key],
                            onChange: (value)=>handleValueChange(key)(value)
                        }, key, false, {
                            fileName: "[project]/src/app/theme-builder/page.tsx",
                            lineNumber: 333,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/theme-builder/page.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/theme-builder/page.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
    // Create footer content
    const footerContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
        className: "w-full",
        type: "primary",
        onClick: downloadCSS,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDownload"]
        }, void 0, false, {
            fileName: "[project]/src/app/theme-builder/page.tsx",
            lineNumber: 352,
            columnNumber: 13
        }, void 0),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].common.download,
            " ",
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].common.theme
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/theme-builder/page.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
    // Create sidebar config
    const sidebarConfig = {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.title,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPaintBrush"],
        sidebarContent,
        footerContent
    };
    // If on mobile, return the unsupported page
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobile$2d$unsupported$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            featureName: "Theme Builder"
        }, void 0, false, {
            fileName: "[project]/src/app/theme-builder/page.tsx",
            lineNumber: 368,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].themeBuilder.title,
                description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].themeBuilder.description,
                keywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEO_STRINGS"].themeBuilder.keywords,
                canonicalUrl: "/theme-builder"
            }, void 0, false, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sidebar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfigurableSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    config: sidebarConfig
                }, void 0, false, {
                    fileName: "[project]/src/app/theme-builder/page.tsx",
                    lineNumber: 380,
                    columnNumber: 28
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UI_STRINGS"].themeBuilder.sections.livePreview
                    }, void 0, false, {
                        fileName: "[project]/src/app/theme-builder/page.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$billing$2f$BillingDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        theme: "custom"
                    }, void 0, false, {
                        fileName: "[project]/src/app/theme-builder/page.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/theme-builder/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=src_28c0add1._.js.map