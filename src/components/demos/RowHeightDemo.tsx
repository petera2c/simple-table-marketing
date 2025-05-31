import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Experienced developer with expertise in React and TypeScript. Passionate about creating scalable applications.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    description:
      "Strategic product leader with a track record of launching successful products in competitive markets.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Designer",
    description:
      "Creative designer focused on user experience and interface design. Expert in Figma and design systems.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Data Scientist",
    description:
      "Analytics expert specializing in machine learning and statistical modeling for business insights.",
  },
  {
    id: 5,
    name: "David Brown",
    role: "Marketing Manager",
    description:
      "Growth-focused marketer with experience in digital campaigns and customer acquisition strategies.",
  },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 150, type: "string" },
  { accessor: "role", label: "Role", width: 180, type: "string" },
  { accessor: "description", label: "Description", minWidth: 200, width: "1fr", type: "string" },
];

const RowHeightDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      rowHeight={32}
      height={height}
      theme={theme}
    />
  );
};

export default RowHeightDemo;
