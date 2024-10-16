import { SimpleTable } from "simple-table-core";
import "simple-table-core/dist/style.css";

export const SAMPLE_HEADERS: any[] = [
  { label: "Product ID", accessor: "id", width: 150 },
  { label: "Product Name", accessor: "productName", width: 200 },
  { label: "Category", accessor: "category", width: 150 },
  { label: "Quantity", accessor: "quantity", width: 100 },
];

function App() {
  return (
    <SimpleTable
      defaultHeaders={SAMPLE_HEADERS}
      height="auto"
      // height="calc(100dvh - 4rem)"
      rows={[
        {
          id: 1,
          productName: "Product 1",
          category: "Category 1",
          quantity: 10,
        },
      ]}
      // shouldPaginate={false}
    />
  );
}

export default App;
