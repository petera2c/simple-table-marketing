import { SimpleTable } from "simple-table-core";
import { generateFinanceData, FINANCE_HEADERS } from "../../../components/demos/data/finance-data";

const EXAMPLE_DATA = generateFinanceData();
const HEADERS = FINANCE_HEADERS;

const RowGroupingExample = () => {
  return <SimpleTable columnResizing defaultHeaders={HEADERS} rows={EXAMPLE_DATA} height="70dvh" theme="custom" />;
};

export default RowGroupingExample;
