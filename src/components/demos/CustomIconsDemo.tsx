import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  {
    id: 1,
    product: "Smartphone Pro",
    price: 899,
    rating: 4.8,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    product: "Laptop Ultra",
    price: 1299,
    rating: 4.6,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    product: "Wireless Headphones",
    price: 199,
    rating: 4.4,
    category: "Audio",
    inStock: false,
  },
  { id: 4, product: "Smart Watch", price: 299, rating: 4.2, category: "Wearables", inStock: true },
  { id: 5, product: "Gaming Console", price: 499, rating: 4.9, category: "Gaming", inStock: true },
  {
    id: 6,
    product: "4K Monitor",
    price: 399,
    rating: 4.5,
    category: "Electronics",
    inStock: false,
  },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "product", label: "Product", minWidth: 150, width: "1fr", type: "string" },
  {
    accessor: "price",
    label: "Price",
    width: 120,
    type: "number",
    cellRenderer: ({ row }) => {
      const price = row.price as number;
      return (
        <div className="flex items-center">
          <span className="mr-2">💰</span>
          <span>${price}</span>
        </div>
      );
    },
  },
  {
    accessor: "rating",
    label: "Rating",
    width: 140,
    type: "number",
    cellRenderer: ({ row }) => {
      const rating = row.rating as number;
      const stars = Math.round(rating);
      return (
        <div className="flex items-center">
          <span className="mr-2">{"⭐".repeat(stars)}</span>
          <span>{rating}</span>
        </div>
      );
    },
  },
  { accessor: "category", label: "Category", width: 120, type: "string" },
  {
    accessor: "inStock",
    label: "In Stock",
    width: 100,
    type: "boolean",
    cellRenderer: ({ row }) => {
      const inStock = row.inStock as boolean;
      return (
        <div className="flex items-center">
          <span className="mr-2">{inStock ? "✅" : "❌"}</span>
          <span>{inStock ? "Yes" : "No"}</span>
        </div>
      );
    },
  },
];

const CustomIconsDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      height={height}
      theme={theme}
    />
  );
};

export default CustomIconsDemo;
