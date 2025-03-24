import { SimpleTable } from "simple-table-core";
import { generateRetailSalesData, RETAIL_SALES_HEADERS } from "../../data/retail-data";

const EXAMPLE_DATA = generateRetailSalesData();
const HEADERS = RETAIL_SALES_HEADERS;

const PinnedColumnsExample = () => {
  return (
    <SimpleTable
      columnResizing // Enable column resizing
      defaultHeaders={HEADERS} // Set the headers
      draggable // Enable draggable columns
      rows={EXAMPLE_DATA} // Set rows data
      height="50dvh" // If not using pagination use a fixed height
      selectableCells
    />
  );
};

export default PinnedColumnsExample;
