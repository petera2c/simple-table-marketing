import { useState } from "react";
import { SimpleTable, HeaderObject, CellChangeProps } from "simple-table-core";
import "simple-table-core/styles.css";

// Define headers with editable property and various types
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 80, isEditable: false, type: "number" },
  { accessor: "firstName", label: "First Name", width: 150, isEditable: true, type: "string" },
  { accessor: "lastName", label: "Last Name", width: 150, isEditable: true, type: "string" },
  {
    accessor: "email",
    label: "Email",
    minWidth: 100,
    width: "1fr",
    isEditable: true,
    type: "string",
  },
  {
    accessor: "role",
    label: "Role",
    width: 150,
    isEditable: true,
    type: "enum",
    enumOptions: ["Developer", "Designer", "Manager", "Marketing", "QA"],
  },
  {
    accessor: "hireDate",
    label: "Hire Date",
    width: 150,
    isEditable: true,
    type: "date",
  },
  {
    accessor: "isActive",
    label: "Active",
    width: 100,
    isEditable: true,
    type: "boolean",
  },
  {
    accessor: "salary",
    label: "Salary",
    width: 120,
    isEditable: true,
    type: "number",
  },
];

// Sample initial data
const initialData = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      role: "Developer",
      hireDate: "2020-01-15",
      isActive: true,
      salary: 85000,
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      role: "Designer",
      hireDate: "2021-03-22",
      isActive: true,
      salary: 78000,
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      role: "Manager",
      hireDate: "2019-11-05",
      isActive: true,
      salary: 92000,
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      id: 4,
      firstName: "Alice",
      lastName: "Williams",
      email: "alice@example.com",
      role: "Developer",
      hireDate: "2022-01-10",
      isActive: false,
      salary: 83000,
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      id: 5,
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie@example.com",
      role: "Marketing",
      hireDate: "2021-08-17",
      isActive: true,
      salary: 76000,
    },
  },
];

const CellEditingDemo = () => {
  // State to track the data
  const [data, setData] = useState(initialData);

  // Handle cell edit
  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.rowMeta.rowId === row.rowMeta.rowId) {
          return {
            ...item,
            rowData: {
              ...item.rowData,
              [accessor]: newValue,
            },
          };
        }
        return item;
      })
    );
  };

  return <SimpleTable defaultHeaders={headers} rows={data} onCellEdit={handleCellEdit} />;
};

export default CellEditingDemo;
