import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const headers: HeaderObject[] = [
  {
    accessor: "id",
    label: "ID",
    width: 80,
    isSortable: true,
    type: "number",
  },
  {
    accessor: "name",
    label: "Name",
    width: "1fr",
    isSortable: true,
    type: "string",
  },
  {
    accessor: "score",
    label: "Test Scores",
    width: 300,
    isSortable: false,
    type: "number",
    children: [
      {
        accessor: "mathScore",
        label: "Math",
        width: 100,
        isSortable: true,
        type: "number",
        align: "right",
        cellRenderer: ({ row, accessor }) => {
          const score = row.rowData[accessor] as number;
          return score >= 90 ? <span className="text-green-600 font-bold">{score}</span> : score;
        },
      },
      {
        accessor: "scienceScore",
        label: "Science",
        width: 100,
        isSortable: true,
        type: "number",
        align: "right",
        cellRenderer: ({ row, accessor }) => {
          const score = row.rowData[accessor] as number;
          return score >= 90 ? <span className="text-green-600 font-bold">{score}</span> : score;
        },
      },
      {
        accessor: "historyScore",
        label: "History",
        width: 100,
        isSortable: true,
        type: "number",
        align: "right",
        cellRenderer: ({ row, accessor }) => {
          const score = row.rowData[accessor] as number;
          return score >= 90 ? <span className="text-green-600 font-bold">{score}</span> : score;
        },
      },
    ],
  },
  {
    accessor: "grade",
    label: "Overall Grade",
    width: 120,
    isSortable: true,
    type: "string",
    align: "center",
  },
];

const rows = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      name: "Emma Johnson",
      mathScore: 92,
      scienceScore: 88,
      historyScore: 95,
      grade: "A",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      name: "Noah Smith",
      mathScore: 78,
      scienceScore: 82,
      historyScore: 75,
      grade: "B",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      name: "Olivia Davis",
      mathScore: 95,
      scienceScore: 97,
      historyScore: 91,
      grade: "A",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      name: "Liam Wilson",
      mathScore: 65,
      scienceScore: 71,
      historyScore: 68,
      grade: "C",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      name: "Ava Martinez",
      mathScore: 88,
      scienceScore: 92,
      historyScore: 84,
      grade: "B",
    },
  },
  {
    rowMeta: { rowId: 6 },
    rowData: {
      id: 6,
      name: "Mason Lee",
      mathScore: 73,
      scienceScore: 68,
      historyScore: 79,
      grade: "C",
    },
  },
  {
    rowMeta: { rowId: 7 },
    rowData: {
      id: 7,
      name: "Sophia Brown",
      mathScore: 91,
      scienceScore: 85,
      historyScore: 93,
      grade: "A",
    },
  },
  {
    rowMeta: { rowId: 8 },
    rowData: {
      id: 8,
      name: "Isabella White",
      mathScore: 82,
      scienceScore: 78,
      historyScore: 87,
      grade: "B",
    },
  },
];

const NestedHeadersDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rows={rows}
      columnResizing
      theme={theme}
    />
  );
};

export default NestedHeadersDemo;
