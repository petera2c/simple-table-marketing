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
    },
    {
      accessor: "growth",
      label: "Growth %",
      width: 120,
      align: "right",
    },
    {
      accessor: "status",
      label: "Status",
      width: 150,
    },
    {
      accessor: "risk",
      label: "Risk",
      width: 120,
    },
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return <SimpleTable defaultHeaders={headers} selectableCells selectableColumns rows={rows} />;
};

export default CellHighlightingDemo;
