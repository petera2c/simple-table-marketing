import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  { id: 1, name: "John Doe", age: 30, salary: 75000, performance: 85 },
  { id: 2, name: "Jane Smith", age: 25, salary: 82000, performance: 92 },
  { id: 3, name: "Mike Johnson", age: 35, salary: 95000, performance: 78 },
  { id: 4, name: "Sarah Williams", age: 28, salary: 88000, performance: 89 },
  { id: 5, name: "David Brown", age: 32, salary: 91000, performance: 76 },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, align: "center", type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", align: "left", type: "string" },
  { accessor: "age", label: "Age", width: 80, align: "center", type: "number" },
  { accessor: "salary", label: "Salary", width: 120, align: "right", type: "number" },
  { accessor: "performance", label: "Performance %", width: 140, align: "center", type: "number" },
];

const ColumnAlignmentDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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

export default ColumnAlignmentDemo;
