import { SimpleTable } from "simple-table-core";
import { FINANCE_HEADERS, generateFinanceData } from "./data/finance-data";

const EXAMPLE_DATA = generateFinanceData();
const HEADERS = FINANCE_HEADERS;

const InstallationDemo = () => {
  return <SimpleTable defaultHeaders={HEADERS} rows={EXAMPLE_DATA} />;
};

export default InstallationDemo;
