import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  { id: 1, name: "John Doe", math: 92, science: 88, english: 85, history: 90 },
  { id: 2, name: "Jane Smith", math: 78, science: 95, english: 92, history: 87 },
  { id: 3, name: "Mike Johnson", math: 85, science: 82, english: 90, history: 88 },
  { id: 4, name: "Sarah Williams", math: 96, science: 93, english: 89, history: 91 },
  { id: 5, name: "David Brown", math: 83, science: 87, english: 94, history: 86 },
  { id: 6, name: "Lisa Chen", math: 89, science: 91, english: 88, history: 92 },
  { id: 7, name: "Alex Rodriguez", math: 91, science: 85, english: 87, history: 89 },
  { id: 8, name: "Emily Davis", math: 87, science: 89, english: 91, history: 93 },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Student Name", width: 150, type: "string" },
  {
    accessor: "scores",
    label: "Academic Scores",
    width: 400,
    type: "string",
    children: [
      {
        accessor: "math",
        label: "Math",
        width: 100,
        type: "number",
        cellRenderer: ({ row, accessor }) => {
          const score = row[accessor] as number;
          const bgColor =
            score >= 90 ? "bg-green-100" : score >= 80 ? "bg-yellow-100" : "bg-red-100";
          const textColor =
            score >= 90 ? "text-green-800" : score >= 80 ? "text-yellow-800" : "text-red-800";
          return <div className={`px-2 py-1 rounded ${bgColor} ${textColor}`}>{score}</div>;
        },
      },
      {
        accessor: "science",
        label: "Science",
        width: 100,
        type: "number",
        cellRenderer: ({ row, accessor }) => {
          const score = row[accessor] as number;
          const bgColor =
            score >= 90 ? "bg-green-100" : score >= 80 ? "bg-yellow-100" : "bg-red-100";
          const textColor =
            score >= 90 ? "text-green-800" : score >= 80 ? "text-yellow-800" : "text-red-800";
          return <div className={`px-2 py-1 rounded ${bgColor} ${textColor}`}>{score}</div>;
        },
      },
      {
        accessor: "english",
        label: "English",
        width: 100,
        type: "number",
        cellRenderer: ({ row, accessor }) => {
          const score = row[accessor] as number;
          const bgColor =
            score >= 90 ? "bg-green-100" : score >= 80 ? "bg-yellow-100" : "bg-red-100";
          const textColor =
            score >= 90 ? "text-green-800" : score >= 80 ? "text-yellow-800" : "text-red-800";
          return <div className={`px-2 py-1 rounded ${bgColor} ${textColor}`}>{score}</div>;
        },
      },
      {
        accessor: "history",
        label: "History",
        width: 100,
        type: "number",
      },
    ],
  },
];

const NestedHeadersDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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

export default NestedHeadersDemo;
