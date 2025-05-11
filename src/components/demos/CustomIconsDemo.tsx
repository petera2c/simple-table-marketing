import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with various properties
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, isSortable: true, type: "number" },
  {
    accessor: "product",
    label: "Product",
    minWidth: 100,
    width: "1fr",
    isSortable: true,
    type: "string",
  },
  {
    accessor: "category",
    label: "Category",
    width: 150,
    isSortable: true,
    type: "string",
  },
  {
    accessor: "price",
    label: "Price",
    width: 120,
    isSortable: true,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      const price = row.rowData.price as number;
      return `$${price.toFixed(2)}`;
    },
  },
  {
    accessor: "stock",
    label: "Stock",
    width: 100,
    isSortable: true,
    align: "right",
    type: "number",
  },
  {
    accessor: "rating",
    label: "Rating",
    width: 120,
    isSortable: true,
    align: "right",
    type: "number",
    cellRenderer: ({ row }) => {
      const rating = row.rowData.rating as number;
      return `${rating.toFixed(1)} ★`;
    },
  },
];

// Sample data
const PRODUCT_DATA = [
  {
    id: 1,
    product: "Laptop Pro",
    category: "Electronics",
    price: 1299.99,
    stock: 45,
    rating: 4.5,
  },
  {
    id: 2,
    product: "Wireless Mouse",
    category: "Accessories",
    price: 49.99,
    stock: 120,
    rating: 4.2,
  },
  {
    id: 3,
    product: "Mechanical Keyboard",
    category: "Accessories",
    price: 129.99,
    stock: 75,
    rating: 4.8,
  },
  {
    id: 4,
    product: "4K Monitor",
    category: "Electronics",
    price: 399.99,
    stock: 30,
    rating: 4.6,
  },
  {
    id: 5,
    product: "Gaming Headset",
    category: "Audio",
    price: 89.99,
    stock: 60,
    rating: 4.3,
  },
  {
    id: 6,
    product: "USB-C Hub",
    category: "Accessories",
    price: 39.99,
    stock: 200,
    rating: 4.0,
  },
  {
    id: 7,
    product: "External SSD",
    category: "Storage",
    price: 149.99,
    stock: 85,
    rating: 4.7,
  },
  {
    id: 8,
    product: "Webcam",
    category: "Electronics",
    price: 79.99,
    stock: 50,
    rating: 4.4,
  },
  {
    id: 9,
    product: "Wireless Earbuds",
    category: "Audio",
    price: 159.99,
    stock: 90,
    rating: 4.5,
  },
];

// Map data to rows format expected by SimpleTable
const rows = PRODUCT_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

// Custom icons using simple HTML/CSS
const customIcons = {
  // For sorting columns
  sortUpIcon: <span className="text-blue-500 text-lg">▲</span>,
  sortDownIcon: <span className="text-blue-500 text-lg">▼</span>,

  // For pagination navigation
  nextIcon: <span className="text-blue-600 text-lg inline-block rotate-90">▲</span>,
  prevIcon: <span className="text-blue-600 text-lg inline-block -rotate-90">▲</span>,
};

const CustomIconsDemo = () => {
  return (
    <div style={{ display: "flex" }}>
      <SimpleTable
        defaultHeaders={headers}
        rows={rows}
        shouldPaginate
        rowsPerPage={7}
        height={"auto"}
        // Custom icons props
        sortUpIcon={customIcons.sortUpIcon}
        sortDownIcon={customIcons.sortDownIcon}
        nextIcon={customIcons.nextIcon}
        prevIcon={customIcons.prevIcon}
      />
    </div>
  );
};

export default CustomIconsDemo;
