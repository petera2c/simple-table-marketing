module.exports = {

"[project]/.next-internal/server/app/examples/manufacturing/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/examples/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/examples/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/app/examples/manufacturing/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ManufacturingExample)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-table-core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/manufacturing/manufacturing-rows.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/examples/manufacturing/manufacturing-headers.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$rows$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateManufacturingData"])();
function ManufacturingExample() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$table$2d$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTable"], {
        columnResizing: true,
        columnReordering: true,
        defaultHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$examples$2f$manufacturing$2f$manufacturing$2d$headers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HEADERS"],
        rows: data,
        height: "60dvh",
        theme: "light",
        selectableCells: true
    }, void 0, false, {
        fileName: "[project]/src/app/examples/manufacturing/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/examples/manufacturing/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/examples/manufacturing/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_f91c5379._.js.map