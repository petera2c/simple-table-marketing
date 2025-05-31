import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

const data = [
  { id: 1, name: "John Doe", age: 30, role: "Software Engineer", department: "Engineering" },
  { id: 2, name: "Jane Smith", age: 25, role: "Product Manager", department: "Product" },
  { id: 3, name: "Mike Johnson", age: 35, role: "Designer", department: "Design" },
  { id: 4, name: "Sarah Williams", age: 28, role: "Data Scientist", department: "Engineering" },
  { id: 5, name: "David Brown", age: 32, role: "Marketing Manager", department: "Marketing" },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", minWidth: 100, width: "1fr", type: "string" },
  { accessor: "age", label: "Age", width: 80, type: "number" },
  { accessor: "role", label: "Role", width: 150, type: "string" },
  { accessor: "department", label: "Department", width: 150, type: "string" },
];

const ThemesDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
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

export default ThemesDemo;
