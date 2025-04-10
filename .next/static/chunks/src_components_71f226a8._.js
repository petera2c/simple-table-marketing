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
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 ml-2 border-l border-gray-700 pl-2",
                                children: filename
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeBlock.tsx",
                        lineNumber: 78,
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
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 86,
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
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:inline hidden",
                                        children: copied ? "Copied!" : "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeBlock.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodeBlock.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeBlock.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodeBlock.tsx",
                lineNumber: 77,
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
                                            lineNumber: 136,
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
                                                    lineNumber: 142,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeBlock.tsx",
                                            lineNumber: 140,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/CodeBlock.tsx",
                                    lineNumber: 130,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeBlock.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CodeBlock.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CodeBlock.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodeBlock.tsx",
        lineNumber: 76,
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
}]);

//# sourceMappingURL=src_components_71f226a8._.js.map