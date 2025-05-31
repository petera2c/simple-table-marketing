import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  { id: 1, name: "John Doe", age: 30, score: 95, status: "Active" },
  { id: 2, name: "Jane Smith", age: 25, score: 88, status: "Active" },
  { id: 3, name: "Mike Johnson", age: 35, score: 92, status: "Inactive" },
  { id: 4, name: "Sarah Williams", age: 28, score: 97, status: "Active" },
  { id: 5, name: "David Brown", age: 32, score: 84, status: "Active" },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 150, type: "string" },
  { accessor: "age", label: "Age", width: 80, type: "number" },
  {
    accessor: "score",
    label: "Score",
    width: 100,
    type: "number",
    cellRenderer: ({ row }) => {
      const score = row.score as number;
      const bgColor = score >= 90 ? "bg-green-100" : score >= 80 ? "bg-yellow-100" : "bg-red-100";
      const textColor =
        score >= 90 ? "text-green-800" : score >= 80 ? "text-yellow-800" : "text-red-800";
      return <div className={`px-2 py-1 rounded ${bgColor} ${textColor}`}>{score}</div>;
    },
  },
  {
    accessor: "status",
    label: "Status",
    width: 100,
    type: "string",
    cellRenderer: ({ row }) => {
      const status = row.status as string;
      const isActive = status === "Active";
      return (
        <div
          className={`px-2 py-1 rounded ${
            isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </div>
      );
    },
  },
];

const CellHighlightingDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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

export default CellHighlightingDemo;
