import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

const QuickStartDemo = ({ height = "300px" }: { height?: string }) => {
  // Sample data for a quick start demo
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      role: "Developer",
      department: "Engineering",
      startDate: "2020-01-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      role: "Designer",
      department: "Design",
      startDate: "2020-01-01",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 45,
      role: "Manager",
      department: "Management",
      startDate: "2020-01-01",
    },
    {
      id: 4,
      name: "Alice Williams",
      age: 24,
      role: "Intern",
      department: "Internship",
      startDate: "2020-01-01",
    },
    {
      id: 5,
      name: "Charlie Brown",
      age: 37,
      role: "DevOps",
      department: "Engineering",
      startDate: "2020-01-01",
    },
    {
      id: 6,
      name: "David Lee",
      age: 31,
      role: "QA Engineer",
      department: "Quality Assurance",
      startDate: "2020-01-01",
    },
    {
      id: 7,
      name: "Eve Green",
      age: 29,
      role: "Product Manager",
      department: "Product Management",
      startDate: "2020-01-01",
    },
    {
      id: 8,
      name: "Frank White",
      age: 33,
      role: "Sales Manager",
      department: "Sales",
      startDate: "2020-01-01",
    },
    {
      id: 9,
      name: "Grace Black",
      age: 27,
      role: "HR Manager",
      department: "Human Resources",
      startDate: "2020-01-01",
    },
  ];

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 80, isSortable: true, type: "number" },
    {
      accessor: "name",
      label: "Name",
      minWidth: 80,
      width: "1fr",
      isSortable: true,
      type: "string",
    },
    { accessor: "age", label: "Age", width: 100, isSortable: true, type: "number" },
    { accessor: "role", label: "Role", width: 150, isSortable: true, type: "string" },
    { accessor: "department", label: "Department", width: 150, isSortable: true, type: "string" },
    { accessor: "startDate", label: "Start Date", width: 150, isSortable: true, type: "date" },
  ];

  // Map data to rows format expected by SimpleTable
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id },
    rowData: item,
  }));

  return (
    <SimpleTable
      defaultHeaders={headers}
      editColumns
      height={height}
      rows={rows}
      rowHeight={48}
      selectableCells
    />
  );
};

export default QuickStartDemo;
