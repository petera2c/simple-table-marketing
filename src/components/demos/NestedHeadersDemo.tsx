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
          const score = row[accessor] as number;
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
          const score = row[accessor] as number;
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
          const score = row[accessor] as number;
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
    id: 1,
    name: "Aria Chen",
    mathScore: 94,
    scienceScore: 89,
    historyScore: 92,
    grade: "A",
  },
  {
    id: 2,
    name: "Kai Rodriguez",
    mathScore: 81,
    scienceScore: 85,
    historyScore: 78,
    grade: "B",
  },
  {
    id: 3,
    name: "Luna Nakamura",
    mathScore: 96,
    scienceScore: 94,
    historyScore: 93,
    grade: "A",
  },
  {
    id: 4,
    name: "Phoenix Williams",
    mathScore: 72,
    scienceScore: 75,
    historyScore: 69,
    grade: "C",
  },
  {
    id: 5,
    name: "River Martinez",
    mathScore: 87,
    scienceScore: 91,
    historyScore: 83,
    grade: "B",
  },
  {
    id: 6,
    name: "Sage Thompson",
    mathScore: 79,
    scienceScore: 74,
    historyScore: 82,
    grade: "B",
  },
  {
    id: 7,
    name: "Nova Patel",
    mathScore: 93,
    scienceScore: 88,
    historyScore: 95,
    grade: "A",
  },
  {
    id: 8,
    name: "Atlas Kim",
    mathScore: 86,
    scienceScore: 82,
    historyScore: 89,
    grade: "B",
  },
  {
    id: 9,
    name: "Zara Hassan",
    mathScore: 91,
    scienceScore: 97,
    historyScore: 87,
    grade: "A",
  },
  {
    id: 10,
    name: "Orion Singh",
    mathScore: 77,
    scienceScore: 73,
    historyScore: 80,
    grade: "B",
  },
  {
    id: 11,
    name: "Echo Volkov",
    mathScore: 95,
    scienceScore: 92,
    historyScore: 98,
    grade: "A",
  },
];

const NestedHeadersDemo = ({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rowIdAccessor="id"
      rows={rows}
      columnResizing
      theme={theme}
    />
  );
};

export default NestedHeadersDemo;
