(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/constants/strings/seo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SEO.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/seo.ts [app-client] (ecmascript)");
;
;
;
const SEO = ({ title, description, keywords = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.defaultKeywords, ogImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.ogImage, canonicalUrl })=>{
    const fullUrl = canonicalUrl ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url}${canonicalUrl}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: keywords
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: ogImage
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:url",
                content: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "twitter:image",
                content: ogImage
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            canonicalUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: fullUrl
            }, void 0, false, {
                fileName: "[project]/src/components/SEO.tsx",
                lineNumber: 43,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
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
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].site.url
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
_c = SEO;
const __TURBOPACK__default__export__ = SEO;
var _c;
__turbopack_context__.k.register(_c, "SEO");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/demos/PaginationDemo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const ROWS_PER_PAGE = 10;
const HEADERS = [
    {
        accessor: "id",
        label: "ID",
        width: 60,
        type: "number"
    },
    {
        accessor: "name",
        label: "Name",
        width: "1fr",
        minWidth: 100,
        type: "string"
    },
    {
        accessor: "email",
        label: "Email",
        width: 200,
        type: "string"
    },
    {
        accessor: "role",
        label: "Role",
        width: 140,
        type: "string"
    },
    {
        accessor: "department",
        label: "Department",
        width: 150,
        type: "string"
    },
    {
        accessor: "status",
        label: "Status",
        width: 110,
        type: "string"
    }
];
const ROWS = [
    {
        rowMeta: {
            rowId: 1
        },
        rowData: {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Senior Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 2
        },
        rowData: {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "Product Manager",
            department: "Product",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 3
        },
        rowData: {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            role: "UX Designer",
            department: "Design",
            status: "On Leave"
        }
    },
    {
        rowMeta: {
            rowId: 4
        },
        rowData: {
            id: 4,
            name: "Bob Brown",
            email: "bob.brown@example.com",
            role: "DevOps Engineer",
            department: "Infrastructure",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 5
        },
        rowData: {
            id: 5,
            name: "Charlie Davis",
            email: "charlie.davis@example.com",
            role: "Marketing Specialist",
            department: "Marketing",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 6
        },
        rowData: {
            id: 6,
            name: "Diana White",
            email: "diana.white@example.com",
            role: "Data Scientist",
            department: "Analytics",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 7
        },
        rowData: {
            id: 7,
            name: "Eve Green",
            email: "eve.green@example.com",
            role: "QA Engineer",
            department: "Engineering",
            status: "Inactive"
        }
    },
    {
        rowMeta: {
            rowId: 8
        },
        rowData: {
            id: 8,
            name: "Frank Black",
            email: "frank.black@example.com",
            role: "Sales Representative",
            department: "Sales",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 9
        },
        rowData: {
            id: 9,
            name: "Grace Blue",
            email: "grace.blue@example.com",
            role: "Customer Support",
            department: "Support",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 10
        },
        rowData: {
            id: 10,
            name: "Henry White",
            email: "henry.white@example.com",
            role: "Frontend Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 11
        },
        rowData: {
            id: 11,
            name: "Isabella Martinez",
            email: "isabella.m@example.com",
            role: "Backend Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 12
        },
        rowData: {
            id: 12,
            name: "Jack Wilson",
            email: "jack.wilson@example.com",
            role: "Product Designer",
            department: "Design",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 13
        },
        rowData: {
            id: 13,
            name: "Kylie Brown",
            email: "kylie.brown@example.com",
            role: "Content Writer",
            department: "Marketing",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 14
        },
        rowData: {
            id: 14,
            name: "Liam Johnson",
            email: "liam.j@example.com",
            role: "IT Support",
            department: "IT",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 15
        },
        rowData: {
            id: 15,
            name: "Mia Thompson",
            email: "mia.t@example.com",
            role: "Accountant",
            department: "Finance",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 16
        },
        rowData: {
            id: 16,
            name: "Nathan Clark",
            email: "nathan.c@example.com",
            role: "HR Specialist",
            department: "Human Resources",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 17
        },
        rowData: {
            id: 17,
            name: "Olivia Davis",
            email: "olivia.d@example.com",
            role: "Social Media Manager",
            department: "Marketing",
            status: "On Leave"
        }
    },
    {
        rowMeta: {
            rowId: 18
        },
        rowData: {
            id: 18,
            name: "Peter Zhang",
            email: "peter.z@example.com",
            role: "Mobile Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 19
        },
        rowData: {
            id: 19,
            name: "Quinn Roberts",
            email: "quinn.r@example.com",
            role: "Project Manager",
            department: "Product",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 20
        },
        rowData: {
            id: 20,
            name: "Ryan Cooper",
            email: "ryan.c@example.com",
            role: "Systems Analyst",
            department: "IT",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 21
        },
        rowData: {
            id: 21,
            name: "Sophia Lee",
            email: "sophia.l@example.com",
            role: "UX Researcher",
            department: "Design",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 22
        },
        rowData: {
            id: 22,
            name: "Thomas Garcia",
            email: "thomas.g@example.com",
            role: "Database Administrator",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 23
        },
        rowData: {
            id: 23,
            name: "Uma Patel",
            email: "uma.p@example.com",
            role: "Legal Counsel",
            department: "Legal",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 24
        },
        rowData: {
            id: 24,
            name: "Victor Anderson",
            email: "victor.a@example.com",
            role: "Sales Manager",
            department: "Sales",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 25
        },
        rowData: {
            id: 25,
            name: "Wendy Martinez",
            email: "wendy.m@example.com",
            role: "Customer Success",
            department: "Support",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 26
        },
        rowData: {
            id: 26,
            name: "Xavier Johnson",
            email: "xavier.j@example.com",
            role: "Security Engineer",
            department: "IT",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 27
        },
        rowData: {
            id: 27,
            name: "Yasmine Ali",
            email: "yasmine.a@example.com",
            role: "Data Analyst",
            department: "Analytics",
            status: "Inactive"
        }
    },
    {
        rowMeta: {
            rowId: 28
        },
        rowData: {
            id: 28,
            name: "Zachary Miller",
            email: "zachary.m@example.com",
            role: "Frontend Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 29
        },
        rowData: {
            id: 29,
            name: "Abigail Wilson",
            email: "abigail.w@example.com",
            role: "Backend Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 30
        },
        rowData: {
            id: 30,
            name: "Benjamin Taylor",
            email: "benjamin.t@example.com",
            role: "DevOps Engineer",
            department: "Infrastructure",
            status: "On Leave"
        }
    },
    {
        rowMeta: {
            rowId: 31
        },
        rowData: {
            id: 31,
            name: "Chloe Rodriguez",
            email: "chloe.r@example.com",
            role: "Graphic Designer",
            department: "Design",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 32
        },
        rowData: {
            id: 32,
            name: "Daniel Kim",
            email: "daniel.k@example.com",
            role: "Product Manager",
            department: "Product",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 33
        },
        rowData: {
            id: 33,
            name: "Emily Chen",
            email: "emily.c@example.com",
            role: "Content Strategist",
            department: "Marketing",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 34
        },
        rowData: {
            id: 34,
            name: "Felix Wong",
            email: "felix.w@example.com",
            role: "Software Engineer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 35
        },
        rowData: {
            id: 35,
            name: "Gabriella Nguyen",
            email: "gabriella.n@example.com",
            role: "UX Designer",
            department: "Design",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 36
        },
        rowData: {
            id: 36,
            name: "Hector Gomez",
            email: "hector.g@example.com",
            role: "Sales Representative",
            department: "Sales",
            status: "Inactive"
        }
    },
    {
        rowMeta: {
            rowId: 37
        },
        rowData: {
            id: 37,
            name: "Iris Scott",
            email: "iris.s@example.com",
            role: "Financial Analyst",
            department: "Finance",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 38
        },
        rowData: {
            id: 38,
            name: "Julian Parker",
            email: "julian.p@example.com",
            role: "Technical Writer",
            department: "Documentation",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 39
        },
        rowData: {
            id: 39,
            name: "Kara Williams",
            email: "kara.w@example.com",
            role: "Support Specialist",
            department: "Support",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 40
        },
        rowData: {
            id: 40,
            name: "Leo Adams",
            email: "leo.a@example.com",
            role: "UI Developer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 41
        },
        rowData: {
            id: 41,
            name: "Maya Jackson",
            email: "maya.j@example.com",
            role: "QA Manager",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 42
        },
        rowData: {
            id: 42,
            name: "Noah Bennett",
            email: "noah.b@example.com",
            role: "Business Analyst",
            department: "Product",
            status: "On Leave"
        }
    },
    {
        rowMeta: {
            rowId: 43
        },
        rowData: {
            id: 43,
            name: "Olivia Franklin",
            email: "olivia.f@example.com",
            role: "User Researcher",
            department: "Design",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 44
        },
        rowData: {
            id: 44,
            name: "Patrick Murphy",
            email: "patrick.m@example.com",
            role: "Backend Engineer",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 45
        },
        rowData: {
            id: 45,
            name: "Rachel Sanders",
            email: "rachel.s@example.com",
            role: "Marketing Director",
            department: "Marketing",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 46
        },
        rowData: {
            id: 46,
            name: "Samuel Washington",
            email: "samuel.w@example.com",
            role: "Frontend Team Lead",
            department: "Engineering",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 47
        },
        rowData: {
            id: 47,
            name: "Tara Wilson",
            email: "tara.w@example.com",
            role: "Operations Manager",
            department: "Operations",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 48
        },
        rowData: {
            id: 48,
            name: "Umar Khan",
            email: "umar.k@example.com",
            role: "Machine Learning Engineer",
            department: "AI Research",
            status: "Active"
        }
    },
    {
        rowMeta: {
            rowId: 49
        },
        rowData: {
            id: 49,
            name: "Victoria Lopez",
            email: "victoria.l@example.com",
            role: "Customer Relations",
            department: "Support",
            status: "Inactive"
        }
    },
    {
        rowMeta: {
            rowId: 50
        },
        rowData: {
            id: 50,
            name: "William Chen",
            email: "william.c@example.com",
            role: "CTO",
            department: "Executive",
            status: "Active"
        }
    }
];
const PaginationDemo = ()=>{
    _s();
    // Only hold the current page data, not all data
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ROWS.slice(0, ROWS_PER_PAGE));
    // Handler for next page data fetch
    const onNextPage = (pageIndex)=>{
        const startIndex = pageIndex * ROWS_PER_PAGE;
        const endIndex = startIndex + ROWS_PER_PAGE;
        const newPageData = ROWS.slice(startIndex, endIndex);
        if (newPageData.length === 0 || rows.length > startIndex) {
            return;
        }
        setRows((prevRows)=>[
                ...prevRows,
                ...newPageData
            ]);
    };
    // Handler for previous page data fetch
    const onPreviousPage = (pageIndex)=>{
        const startIndex = pageIndex * ROWS_PER_PAGE;
        const endIndex = startIndex + ROWS_PER_PAGE;
        const newPageData = ROWS.slice(startIndex, endIndex);
        if (newPageData.length === 0 || rows.length > startIndex) {
            return;
        }
        setRows((prevRows)=>[
                ...newPageData,
                ...prevRows
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleTable"], {
        defaultHeaders: HEADERS,
        height: "auto",
        onNextPage: onNextPage,
        onPreviousPage: onPreviousPage,
        rows: rows,
        rowsPerPage: ROWS_PER_PAGE,
        shouldPaginate: true,
        totalPages: Math.ceil(ROWS.length / ROWS_PER_PAGE),
        nextIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faChevronRight"],
            className: "text-blue-600"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/PaginationDemo.tsx",
            lineNumber: 610,
            columnNumber: 17
        }, void 0),
        prevIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faChevronLeft"],
            className: "text-blue-600"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/PaginationDemo.tsx",
            lineNumber: 611,
            columnNumber: 17
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/components/demos/PaginationDemo.tsx",
        lineNumber: 601,
        columnNumber: 5
    }, this);
};
_s(PaginationDemo, "DnUwX8+8Qirul4SEYyd1UvU+jN0=");
_c = PaginationDemo;
const __TURBOPACK__default__export__ = PaginationDemo;
var _c;
__turbopack_context__.k.register(_c, "PaginationDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CodeBlock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prism-react-renderer/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CodeBlock = ({ className = "", code, initialTheme = "dark", language = "tsx", showLineNumbers = true, showThemeToggle = true })=>{
    _s();
    code = code.toString();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTheme);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(code).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        });
    };
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === "dark" ? "light" : "dark");
    };
    const selectedTheme = theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].nightOwl : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].nightOwlLight;
    // Get language display name
    const getLanguageDisplayName = ()=>{
        const displayNames = {
            jsx: "React JSX",
            tsx: "React TSX",
            javascript: "JavaScript",
            typescript: "TypeScript",
            css: "CSS",
            html: "HTML",
            bash: "Shell",
            json: "JSON"
        };
        return displayNames[language] || language.toUpperCase();
    };
    // Filename extraction from first comment line (e.g. "// SomeFile.tsx")
    const extractFilename = ()=>{
        if (!code) return null;
        const firstLine = code.trim().split("\n")[0];
        if (firstLine.startsWith("// ") || firstLine.startsWith("/* ")) {
            const potentialFilename = firstLine.replace(/^\/\/\s*|^\/\*\s*/, "").trim();
            if (potentialFilename.includes(".")) {
                return potentialFilename;
            }
        }
        return null;
    };
    const filename = extractFilename();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-md mb-6 overflow-hidden shadow-lg relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 bg-gray-900 text-gray-400 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: getLanguageDisplayName()
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 ml-2 border-l border-gray-700 pl-2",
                                children: filename
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeBlock.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            showThemeToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-2 py-1 rounded cursor-pointer transition-colors",
                                onClick: toggleTheme,
                                title: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faSun"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMoon"],
                                    className: "text-xs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeBlock.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-2 py-1 rounded cursor-pointer transition-colors",
                                onClick: handleCopy,
                                "aria-label": "Copy code",
                                title: "Copy to clipboard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: copied ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCheck"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCopy"],
                                        className: "text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeBlock.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:inline hidden",
                                        children: copied ? "Copied!" : "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeBlock.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeBlock.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodeBlock.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto max-w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                    theme: selectedTheme,
                    code: filename ? code.replace(/^\/\/.*?\n|^\/\*.*?\n/, "") : code.trim(),
                    language: language,
                    children: ({ style, tokens, getLineProps, getTokenProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "p-4 overflow-auto text-sm max-h-[64vh]",
                            style: {
                                ...style,
                                backgroundColor: theme === "dark" ? "#011627" : "#FBFBFB"
                            },
                            children: tokens.map((line, i)=>{
                                // Check if this line is a special comment like "// ... existing code ..."
                                const isSpecialComment = line.length > 1 && line[0].content.match(/\/\/|\/\*|#/) && line.some((token)=>token.content.includes("existing code"));
                                const lineProps = getLineProps({
                                    line
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ...lineProps,
                                    className: `table-row ${isSpecialComment ? "opacity-60 italic" : ""}`,
                                    children: [
                                        showLineNumbers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "table-cell text-right pr-4 select-none opacity-50 text-xs w-8",
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeBlock.tsx",
                                            lineNumber: 137,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "table-cell whitespace-pre word-break",
                                            children: line.map((token, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ...getTokenProps({
                                                        token
                                                    }),
                                                    className: token.types.includes("comment") ? "italic opacity-75" : ""
                                                }, key, false, {
                                                    fileName: "[project]/src/components/CodeBlock.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeBlock.tsx",
                                            lineNumber: 141,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/CodeBlock.tsx",
                                    lineNumber: 131,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeBlock.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CodeBlock.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CodeBlock.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodeBlock.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
};
_s(CodeBlock, "fCbKQdxQZg9SaWLQ8c4IYNrSSn4=");
_c = CodeBlock;
const __TURBOPACK__default__export__ = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DocNavigationButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// This should match the structure in DocsLayout.tsx
const docNavigation = [
    // Getting Started
    {
        id: "installation",
        path: "/docs/installation"
    },
    {
        id: "quick-start",
        path: "/docs/quick-start"
    },
    // Column Features
    {
        id: "column-properties",
        path: "/docs/column-properties"
    },
    {
        id: "column-resizing",
        path: "/docs/column-resizing"
    },
    {
        id: "column-reordering",
        path: "/docs/column-reordering"
    },
    {
        id: "column-visibility",
        path: "/docs/column-visibility"
    },
    {
        id: "column-pinning",
        path: "/docs/column-pinning"
    },
    {
        id: "column-alignment",
        path: "/docs/column-alignment"
    },
    {
        id: "column-sorting",
        path: "/docs/column-sorting"
    },
    {
        id: "nested-headers",
        path: "/docs/nested-headers"
    },
    // Row Features
    {
        id: "row-grouping",
        path: "/docs/row-grouping"
    },
    {
        id: "row-height",
        path: "/docs/row-height"
    },
    // Cell Features
    {
        id: "cell-editing",
        path: "/docs/cell-editing"
    },
    {
        id: "cell-highlighting",
        path: "/docs/cell-highlighting"
    },
    {
        id: "cell-renderer",
        path: "/docs/cell-renderer"
    },
    // Advanced Features
    {
        id: "pagination",
        path: "/docs/pagination"
    },
    // Customization
    {
        id: "themes",
        path: "/docs/themes"
    },
    {
        id: "custom-icons",
        path: "/docs/custom-icons"
    },
    {
        id: "custom-theme",
        path: "/docs/custom-theme"
    }
];
// Map paths to labels for more readable navigation buttons
const pathToLabel = {
    "/docs/installation": "Installation",
    "/docs/quick-start": "Quick Start",
    "/docs/column-properties": "Column Properties",
    "/docs/column-resizing": "Column Resizing",
    "/docs/column-reordering": "Column Reordering",
    "/docs/column-visibility": "Column Visibility",
    "/docs/column-pinning": "Column Pinning",
    "/docs/column-alignment": "Column Alignment",
    "/docs/column-sorting": "Column Sorting",
    "/docs/nested-headers": "Nested Headers",
    "/docs/row-grouping": "Row Grouping",
    "/docs/row-height": "Row Height",
    "/docs/cell-editing": "Cell Editing",
    "/docs/cell-highlighting": "Cell Highlighting",
    "/docs/cell-renderer": "Cell Renderer",
    "/docs/pagination": "Pagination",
    "/docs/themes": "Themes",
    "/docs/custom-icons": "Custom Icons",
    "/docs/custom-theme": "Custom Theme"
};
/**
 * Component for rendering dynamic next/previous navigation buttons based on the docs structure
 */ const DocNavigationButtons = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { prevPage, nextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocNavigationButtons.useMemo": ()=>{
            const currentIndex = docNavigation.findIndex({
                "DocNavigationButtons.useMemo.currentIndex": (item)=>item.path === pathname
            }["DocNavigationButtons.useMemo.currentIndex"]);
            // If page not found in navigation, return empty
            if (currentIndex === -1) {
                return {
                    prevPage: null,
                    nextPage: null
                };
            }
            const prevPage = currentIndex > 0 ? docNavigation[currentIndex - 1] : null;
            const nextPage = currentIndex < docNavigation.length - 1 ? docNavigation[currentIndex + 1] : null;
            return {
                prevPage,
                nextPage
            };
        }
    }["DocNavigationButtons.useMemo"], [
        pathname
    ]);
    if (!prevPage && !nextPage) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex justify-between mt-12 pt-4 border-t border-gray-200",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.5,
            delay: 0.9
        },
        children: [
            prevPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: prevPage.path,
                className: "flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 19l-7-7 7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DocNavigationButtons.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DocNavigationButtons.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    "Previous: ",
                    pathToLabel[prevPage.path]
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DocNavigationButtons.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/DocNavigationButtons.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            nextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: nextPage.path,
                className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm",
                children: [
                    "Next: ",
                    pathToLabel[nextPage.path],
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DocNavigationButtons.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DocNavigationButtons.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DocNavigationButtons.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DocNavigationButtons.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(DocNavigationButtons, "NYF8o5GktdkS2KUcABr4EUvtim4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DocNavigationButtons;
const __TURBOPACK__default__export__ = DocNavigationButtons;
var _c;
__turbopack_context__.k.register(_c, "DocNavigationButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/docs/pagination/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginationPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEO.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/strings/seo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$PaginationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/PaginationDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocNavigationButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DocNavigationButtons.tsx [app-client] (ecmascript)");
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
function PaginationPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEO$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: `Pagination - ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].docs.title}`,
                description: "Implement pagination in Simple Table to handle large datasets efficiently.",
                keywords: `pagination, page size, large datasets, data navigation, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$strings$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_STRINGS"].docs.keywords}`,
                canonicalUrl: "/docs/pagination"
            }, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center gap-3 mb-6",
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-blue-100 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faPager"],
                            className: "text-blue-600 text-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/docs/pagination/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800",
                        children: "Pagination"
                    }, void 0, false, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-gray-700 mb-6 text-lg",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.2
                },
                children: "Pagination helps manage large datasets by dividing the table data into manageable pages. This improves performance, reduces visual clutter, and provides a better user experience for navigating through extensive data collections."
            }, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mb-8",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$PaginationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/docs/pagination/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.3
                },
                children: "Basic Pagination"
            }, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mb-8",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: [
                            "To enable pagination in Simple Table, you need to add the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                children: "shouldPaginate"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            " prop to your SimpleTable component. This will automatically handle pagination of your data."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$PaginationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-gray-800 mb-2",
                                children: "Pagination Properties"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-1 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "shouldPaginate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            ": Enables pagination functionality"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "rowsPerPage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            ": Number of rows per page (default: 10)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "totalPages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            ": Total number of pages available -",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: " required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 48
                                            }, this),
                                            " for proper pagination controls"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "onNextPage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            ": Callback function triggered when user clicks the next page button"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "onPreviousPage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            ": Callback function triggered when user clicks the previous page button"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-200 px-1 py-0.5 rounded text-gray-800",
                                                children: "rowHeight"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            ": Sets the height of rows in pixels (number, e.g., 40)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50 border-l-4 border-amber-300 p-4 rounded-lg shadow-sm mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-gray-700 mb-2",
                                children: "Important Note"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    "The ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-gray-100 px-1 py-0.5 rounded text-gray-700",
                                        children: "totalPages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "property is crucial for proper pagination functionality. Without it:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-1 text-gray-600 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "The table won't know how many page numbers to display"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Next/Previous buttons won't disable correctly at boundaries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Users may attempt to navigate to non-existent pages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-2",
                                children: [
                                    "Always calculate and provide",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-gray-100 px-1 py-0.5 rounded text-gray-700",
                                        children: "totalPages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    " based on your data size and page size (e.g., ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "Math.ceil(totalItems / pageSize)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 52
                                    }, this),
                                    ")."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.5
                },
                children: "Pagination Features"
            }, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mb-8",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "When pagination is enabled, Simple Table provides:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-8 space-y-2 text-gray-700 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Automatic page navigation controls"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Page size selection"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Current page indicator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Total pages display"
                            }, void 0, false, {
                                fileName: "[project]/src/app/docs/pagination/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/docs/pagination/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocNavigationButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/docs/pagination/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = PaginationPage;
var _c;
__turbopack_context__.k.register(_c, "PaginationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1bbea94c._.js.map