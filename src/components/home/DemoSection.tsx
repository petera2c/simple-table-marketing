import React, { useState } from "react";
import { Tabs } from "antd";
import { SimpleTable } from "simple-table-core";

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Demo Data
  const basicHeaders = [
    { accessor: "name", label: "Name", isSortable: true },
    { accessor: "email", label: "Email" },
    { accessor: "role", label: "Role" },
    { accessor: "status", label: "Status" },
  ];

  const basicRows = [
    {
      rowData: { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
      rowMeta: { rowId: 1 },
    },
    {
      rowData: { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
      rowMeta: { rowId: 2 },
    },
    {
      rowData: { name: "Robert Johnson", email: "robert@example.com", role: "Editor", status: "Inactive" },
      rowMeta: { rowId: 3 },
    },
    {
      rowData: { name: "Emily Wilson", email: "emily@example.com", role: "User", status: "Active" },
      rowMeta: { rowId: 4 },
    },
    {
      rowData: { name: "Michael Brown", email: "michael@example.com", role: "User", status: "Active" },
      rowMeta: { rowId: 5 },
    },
  ];

  // More complex demo with nested rows
  const complexHeaders = [
    {
      accessor: "department",
      label: "Department",
      isSortable: true,
      expandable: true,
      width: 200,
    },
    { accessor: "employees", label: "Employees", width: 120 },
    { accessor: "budget", label: "Budget", width: 150 },
    { accessor: "location", label: "Location", width: 200 },
  ];

  const complexRows = [
    {
      rowData: { department: "Engineering", employees: 45, budget: "$1,200,000", location: "San Francisco" },
      rowMeta: {
        rowId: 1,
        isExpanded: true,
        children: [
          {
            rowData: { department: "Frontend", employees: 15, budget: "$450,000", location: "San Francisco" },
            rowMeta: { rowId: 11 },
          },
          {
            rowData: { department: "Backend", employees: 18, budget: "$520,000", location: "San Francisco" },
            rowMeta: { rowId: 12 },
          },
          {
            rowData: { department: "DevOps", employees: 12, budget: "$230,000", location: "San Francisco" },
            rowMeta: { rowId: 13 },
          },
        ],
      },
    },
    {
      rowData: { department: "Marketing", employees: 28, budget: "$850,000", location: "New York" },
      rowMeta: {
        rowId: 2,
        children: [
          {
            rowData: { department: "Digital", employees: 12, budget: "$380,000", location: "New York" },
            rowMeta: { rowId: 21 },
          },
          {
            rowData: { department: "Brand", employees: 8, budget: "$270,000", location: "New York" },
            rowMeta: { rowId: 22 },
          },
          {
            rowData: { department: "Events", employees: 8, budget: "$200,000", location: "New York" },
            rowMeta: { rowId: 23 },
          },
        ],
      },
    },
    {
      rowData: { department: "Finance", employees: 18, budget: "$620,000", location: "Chicago" },
      rowMeta: {
        rowId: 3,
        children: [
          {
            rowData: { department: "Accounting", employees: 10, budget: "$350,000", location: "Chicago" },
            rowMeta: { rowId: 31 },
          },
          {
            rowData: { department: "Operations", employees: 8, budget: "$270,000", location: "Chicago" },
            rowMeta: { rowId: 32 },
          },
        ],
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: "Basic Table",
      children: (
        <div className="p-4">
          <SimpleTable defaultHeaders={basicHeaders} rows={basicRows} theme="light" />
        </div>
      ),
    },
    {
      key: "2",
      label: "Expandable Rows",
      children: (
        <div className="p-4">
          <SimpleTable defaultHeaders={complexHeaders} rows={complexRows} theme="light" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">See Simple Table in Action</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore different table configurations and features with these live examples.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <Tabs items={items} onChange={(key) => setActiveTab(key)} activeKey={activeTab} className="demo-tabs" />
        </div>

        <div className="text-center mt-10">
          <a
            href="https://docs.simple-table.com/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            View more examples →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
