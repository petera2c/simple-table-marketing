import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const RowGroupingDemo = () => {
  // Sample data for row grouping
  const data = [
    { id: 1, department: "Engineering", name: "John Doe", role: "Frontend Developer", salary: 85000 },
    { id: 2, department: "Engineering", name: "Jane Smith", role: "Backend Developer", salary: 92000 },
    { id: 3, department: "Engineering", name: "Mike Johnson", role: "DevOps Engineer", salary: 95000 },
    { id: 4, department: "Marketing", name: "Sarah Brown", role: "Marketing Manager", salary: 78000 },
    { id: 5, department: "Marketing", name: "Tom Wilson", role: "Content Specialist", salary: 65000 },
    { id: 6, department: "Sales", name: "Emily Davis", role: "Sales Manager", salary: 110000 },
    { id: 7, department: "Sales", name: "Chris Martin", role: "Account Executive", salary: 85000 },
    { id: 8, department: "Sales", name: "Alex Lee", role: "Sales Representative", salary: 65000 },
    { id: 9, department: "Design", name: "Lisa Park", role: "UI Designer", salary: 72000 },
    { id: 10, department: "Design", name: "David Kim", role: "UX Designer", salary: 75000 },
  ];

  // Group data by department
  const departments = [...new Set(data.map((item) => item.department))];

  // Create grouped rows
  const rows = departments.flatMap((department, deptIndex) => {
    const departmentData = data.filter((item) => item.department === department);
    const departmentRow = {
      rowMeta: {
        rowId: `dept-${deptIndex}`,
        isExpanded: true,
        groupLevel: 0,
        childRows: departmentData.map((item) => `emp-${item.id}`),
      },
      rowData: {
        department,
        name: `${department} (${departmentData.length})`,
        role: "",
        salary: departmentData.reduce((sum, item) => sum + item.salary, 0) / departmentData.length,
      },
    };

    const employeeRows = departmentData.map((item) => ({
      rowMeta: {
        rowId: `emp-${item.id}`,
        isExpanded: false,
        parentRowId: `dept-${deptIndex}`,
        groupLevel: 1,
      },
      rowData: item,
    }));

    return [departmentRow, ...employeeRows];
  });

  // Define headers
  const headers: HeaderObject[] = [
    { accessor: "department", label: "Department", width: 180 },
    { accessor: "name", label: "Name", width: 200 },
    { accessor: "role", label: "Role", width: 200 },
    {
      accessor: "salary",
      label: "Salary",
      width: 150,
      align: "right",
      cellRenderer: (row) => {
        // For department rows (group rows), show average salary
        if (row.rowMeta.children) {
          return (
            <span className="font-medium">
              {row.rowData.salary?.toLocaleString(undefined, { maximumFractionDigits: 0 })} avg
            </span>
          );
        }
        return <span>{row.rowData.salary?.toLocaleString()}</span>;
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Row Grouping Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo shows how to group rows by department, with expandable/collapsible groups and aggregated values.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default RowGroupingDemo;
