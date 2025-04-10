(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/demos/QuickStartDemo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-client] (ecmascript)");
"use client";
;
;
;
const QuickStartDemo = ()=>{
    // Sample data for a quick start demo
    const data = [
        {
            id: 1,
            name: "John Doe",
            age: 28,
            role: "Developer",
            department: "Engineering",
            startDate: "2020-01-01"
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 32,
            role: "Designer",
            department: "Design",
            startDate: "2020-01-01"
        },
        {
            id: 3,
            name: "Bob Johnson",
            age: 45,
            role: "Manager",
            department: "Management",
            startDate: "2020-01-01"
        },
        {
            id: 4,
            name: "Alice Williams",
            age: 24,
            role: "Intern",
            department: "Internship",
            startDate: "2020-01-01"
        },
        {
            id: 5,
            name: "Charlie Brown",
            age: 37,
            role: "DevOps",
            department: "Engineering",
            startDate: "2020-01-01"
        }
    ];
    // Define headers
    const headers = [
        {
            accessor: "id",
            label: "ID",
            width: 80,
            isSortable: true,
            type: "number"
        },
        {
            accessor: "name",
            label: "Name",
            minWidth: 80,
            width: "1fr",
            isSortable: true,
            type: "string"
        },
        {
            accessor: "age",
            label: "Age",
            width: 100,
            isSortable: true,
            type: "number"
        },
        {
            accessor: "role",
            label: "Role",
            width: 150,
            isSortable: true,
            type: "string"
        },
        {
            accessor: "department",
            label: "Department",
            width: 150,
            isSortable: true,
            type: "string"
        },
        {
            accessor: "startDate",
            label: "Start Date",
            width: 150,
            isSortable: true,
            type: "date"
        }
    ];
    // Map data to rows format expected by SimpleTable
    const rows = data.map((item)=>({
            rowMeta: {
                rowId: item.id,
                isExpanded: false
            },
            rowData: item
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleTable"], {
        defaultHeaders: headers,
        editColumns: true,
        rows: rows,
        rowHeight: 48,
        selectableCells: true
    }, void 0, false, {
        fileName: "[project]/src/components/demos/QuickStartDemo.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_c = QuickStartDemo;
const __TURBOPACK__default__export__ = QuickStartDemo;
var _c;
__turbopack_context__.k.register(_c, "QuickStartDemo");
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
}]);

//# sourceMappingURL=src_components_6004e56c._.js.map