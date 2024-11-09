import { useState } from "react";
import { SimpleTable } from "simple-table-core";
import CellChangeProps from "simple-table-core/dist/types/CellChangeProps";

export const SAMPLE_HEADERS: any[] = [
  { label: "Product ID", accessor: "id", width: 150 },
  { label: "Product Name", accessor: "productName", width: 200 },
  { label: "Category", accessor: "category", width: 150 },
  { label: "Quantity", accessor: "quantity", width: 100 },
  { label: "Price", accessor: "price", width: 100 },
  { label: "Supplier", accessor: "supplier", width: 150 },
  { label: "Location", accessor: "location", width: 150 },
  { label: "Reorder Level", accessor: "reorderLevel", width: 100 },
  { label: "SKU", accessor: "sku", width: 100 },
  { label: "Description", accessor: "description", width: 250 },
  { label: "Weight", accessor: "weight", width: 100 },
  { label: "Dimensions", accessor: "dimensions", width: 150 },
  { label: "Barcode", accessor: "barcode", width: 100 },
];

export const inventoryData: any[] = Array.from({ length: 50 }, (_, index) => ({
  id: `P-${index + 1001}`,
  productName: [
    "Wireless Mouse",
    "Bluetooth Speaker",
    "LED Monitor",
    "Gaming Keyboard",
    "Smartphone",
    "Laptop",
    "Tablet",
    "Headphones",
    "Smartwatch",
    "External Hard Drive",
  ][index % 10],
  category: ["Electronics", "Furniture", "Clothing", "Food", "Books"][
    Math.floor(Math.random() * 5)
  ],
  quantity: Math.floor(Math.random() * 100) + 1,
  price: (Math.random() * 100).toFixed(2),
  supplier: [
    "Tech Supplies Co.",
    "Gadget World",
    "Office Essentials",
    "Home Comforts",
    "Fashion Hub",
  ][Math.floor(Math.random() * 5)],
  location: [
    "Warehouse A - New York",
    "Warehouse B - Los Angeles",
    "Warehouse C - Chicago",
    "Warehouse D - Houston",
    "Warehouse E - Miami",
  ][Math.floor(Math.random() * 5)],
  reorderLevel: Math.floor(Math.random() * 20) + 5,
  sku: `SKU-${index + 1001}`,
  description: `High-quality ${
    [
      "wireless mouse",
      "bluetooth speaker",
      "LED monitor",
      "gaming keyboard",
      "smartphone",
      "laptop",
      "tablet",
      "headphones",
      "smartwatch",
      "external hard drive",
    ][index % 10]
  } for everyday use.`,
  weight: `${(Math.random() * 10).toFixed(2)} kg`,
  dimensions: `${(Math.random() * 100).toFixed(2)}x${(
    Math.random() * 100
  ).toFixed(2)}x${(Math.random() * 100).toFixed(2)} cm`,
  barcode: `1234567890${index}`,
  expirationDate: `2024-${Math.floor(Math.random() * 12) + 1}-${
    Math.floor(Math.random() * 28) + 1
  }`,
  manufacturer: [
    "Tech Innovators Inc.",
    "Gadget Makers Ltd.",
    "Office Producers",
    "Home Creators",
    "Fashion Designers",
  ][Math.floor(Math.random() * 5)],
}));

const SimpleTableExample = () => {
  const [rows, setRows] = useState(inventoryData);

  const updateCell = ({
    accessor,
    newRowIndex,
    newValue,
    originalRowIndex,
    row,
  }: CellChangeProps) => {
    setRows((prevRows) => {
      prevRows[originalRowIndex][accessor] = newValue;
      return prevRows;
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <SimpleTable
        // Enable column resizing
        columnResizing
        // Enable draggable columns
        draggable
        // Enable editing columns
        editColumns
        // Set the headers
        defaultHeaders={SAMPLE_HEADERS}
        // Set the rows
        rows={inventoryData}
        // Handle cell changes
        onCellChange={updateCell}
        // Enable selectable cells
        selectableCells
        // Use pagination
        shouldPaginate
        height="auto"
        rowsPerPage={8}

        // If you aren't using pagination a height is required
        // height="calc(100dvh - 4rem)"`
      />
    </div>
  );
};

export default SimpleTableExample;
