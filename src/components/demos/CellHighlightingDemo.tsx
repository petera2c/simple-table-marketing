import React, { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const CellHighlightingDemo = () => {
  // Sample data with values to highlight
  const data = [
    { id: 1, product: "Laptop", sales: 1250, growth: 15, status: "In Stock", risk: "Low" },
    { id: 2, product: "Smartphone", sales: 2430, growth: -5, status: "Low Stock", risk: "Medium" },
    { id: 3, product: "Tablet", sales: 890, growth: 23, status: "In Stock", risk: "Low" },
    { id: 4, product: "Headphones", sales: 560, growth: -12, status: "Out of Stock", risk: "High" },
    { id: 5, product: "Monitor", sales: 1180, growth: 8, status: "In Stock", risk: "Low" },
    { id: 6, product: "Keyboard", sales: 350, growth: -2, status: "Low Stock", risk: "Medium" },
    { id: 7, product: "Mouse", sales: 410, growth: 5, status: "In Stock", risk: "Low" },
    { id: 8, product: "Speaker", sales: 680, growth: -8, status: "Out of Stock", risk: "High" },
  ];

  // Define headers with conditional cell styling
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80 },
    { accessor: "product", label: "Product", width: 180 },
    {
      accessor: "sales",
      label: "Sales",
      width: 120,
      align: "right",
      cellRenderer: (row) => {
        const sales = row.rowData.sales as number;
        let color = "text-gray-800";
        if (sales > 2000) color = "text-green-600 font-bold";
        else if (sales > 1000) color = "text-blue-600";
        else if (sales < 600) color = "text-red-600";

        return <span className={color}>${sales.toLocaleString()}</span>;
      },
    },
    {
      accessor: "growth",
      label: "Growth %",
      width: 120,
      align: "right",
      cellRenderer: (row) => {
        const growth = row.rowData.growth as number;
        const color = growth >= 0 ? "text-green-600" : "text-red-600";

        return (
          <span className={color}>
            {growth > 0 ? "+" : ""}
            {growth}%
          </span>
        );
      },
    },
    {
      accessor: "status",
      label: "Status",
      width: 150,
      cellRenderer: (row) => {
        const status = row.rowData.status as string;
        let bgColor = "bg-green-100 text-green-800";

        if (status === "Low Stock") bgColor = "bg-yellow-100 text-yellow-800";
        else if (status === "Out of Stock") bgColor = "bg-red-100 text-red-800";

        return <span className={`px-2 py-1 rounded-full text-xs ${bgColor}`}>{status}</span>;
      },
    },
    {
      accessor: "risk",
      label: "Risk",
      width: 120,
      cellRenderer: (row) => {
        const risk = row.rowData.risk as string;
        let bgColor = "bg-green-100 text-green-800";

        if (risk === "Medium") bgColor = "bg-yellow-100 text-yellow-800";
        else if (risk === "High") bgColor = "bg-red-100 text-red-800";

        return <span className={`px-2 py-1 rounded-full text-xs ${bgColor}`}>{risk}</span>;
      },
    },
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cell Highlighting Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo shows how to highlight cells based on their values for better data visualization. Cell renderers are
          used to apply conditional formatting.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Sales Highlight</h3>
            <p className="text-xs text-gray-600">
              <span className="text-green-600 font-bold">High</span> for &gt;$2000,{" "}
              <span className="text-blue-600">Medium</span> for &gt;$1000, <span className="text-red-600">Low</span> for
              &lt;$600
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Growth Highlight</h3>
            <p className="text-xs text-gray-600">
              <span className="text-green-600">Positive</span> or <span className="text-red-600">Negative</span> growth
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Status Indicators</h3>
            <p className="text-xs text-gray-600">Color-coded status labels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellHighlightingDemo;
