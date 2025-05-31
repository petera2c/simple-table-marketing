import { SimpleTable, HeaderObject, Theme, CellChangeProps } from "simple-table-core";
import "simple-table-core/styles.css";
import { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", age: 30, role: "Software Engineer", department: "Engineering" },
  { id: 2, name: "Jane Smith", age: 25, role: "Product Manager", department: "Product" },
  { id: 3, name: "Mike Johnson", age: 35, role: "Designer", department: "Design" },
  { id: 4, name: "Sarah Williams", age: 28, role: "Data Scientist", department: "Engineering" },
  { id: 5, name: "David Brown", age: 32, role: "Marketing Manager", department: "Marketing" },
];

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 150, isEditable: true, type: "string" },
  { accessor: "age", label: "Age", width: 80, isEditable: true, type: "number" },
  { accessor: "role", label: "Role", width: 150, isEditable: true, type: "string" },
  { accessor: "department", label: "Department", width: 150, isEditable: true, type: "string" },
];

const CellEditingDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  const [data, setData] = useState(initialData);

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) => {
      const newData = [...prevData];
      const rowIndex = newData.findIndex((item) => item.id === (row as any).id);
      if (rowIndex !== -1) {
        newData[rowIndex] = {
          ...newData[rowIndex],
          [accessor]: newValue,
        };
      }
      return newData;
    });
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={data}
      rowIdAccessor="id"
      height={height}
      onCellEdit={handleCellEdit}
      theme={theme}
    />
  );
};

export default CellEditingDemo;
