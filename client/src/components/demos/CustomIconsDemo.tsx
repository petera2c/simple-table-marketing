import { SimpleTable, HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
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
const data = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      product: "Laptop Pro",
      category: "Electronics",
      price: 1299.99,
      stock: 45,
      rating: 4.5,
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      product: "Smartphone X",
      category: "Electronics",
      price: 799.99,
      stock: 68,
      rating: 4.7,
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      product: "Wireless Headphones",
      category: "Audio",
      price: 199.99,
      stock: 32,
      rating: 4.3,
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      product: "Office Chair",
      category: "Furniture",
      price: 249.99,
      stock: 12,
      rating: 3.9,
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      product: "Coffee Maker",
      category: "Appliances",
      price: 89.99,
      stock: 24,
      rating: 4.1,
    },
  },
  {
    rowMeta: { rowId: 6 },
    rowData: {
      id: 6,
      product: "Fitness Tracker",
      category: "Wearables",
      price: 129.99,
      stock: 37,
      rating: 4.2,
    },
  },
  {
    rowMeta: { rowId: 7 },
    rowData: {
      id: 7,
      product: "Smart Watch",
      category: "Wearables",
      price: 249.99,
      stock: 22,
      rating: 4.4,
    },
  },
  {
    rowMeta: { rowId: 8 },
    rowData: {
      id: 8,
      product: "Bluetooth Speaker",
      category: "Audio",
      price: 79.99,
      stock: 41,
      rating: 4.0,
    },
  },
];

// Custom icons using FontAwesome
const customIcons = {
  // For sorting columns
  sortUpIcon: <FontAwesomeIcon icon={faCaretUp} className="text-blue-500" />,
  sortDownIcon: <FontAwesomeIcon icon={faCaretDown} className="text-blue-500" />,

  // For pagination navigation
  nextIcon: <FontAwesomeIcon icon={faAngleRight} className="text-blue-600" />,
  prevIcon: <FontAwesomeIcon icon={faAngleLeft} className="text-blue-600" />,
};

const CustomIconsDemo = () => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      shouldPaginate
      rowsPerPage={5}
      totalPages={2}
      height="auto"
      // Custom icons props
      sortUpIcon={customIcons.sortUpIcon}
      sortDownIcon={customIcons.sortDownIcon}
      nextIcon={customIcons.nextIcon}
      prevIcon={customIcons.prevIcon}
    />
  );
};

export default CustomIconsDemo;
