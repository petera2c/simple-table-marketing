import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const InstallationDemo = () => {
  const packageManagers = [
    { command: "npm install simple-table-core", type: "npm" },
    { command: "yarn add simple-table-core", type: "yarn" },
    { command: "pnpm add simple-table-core", type: "pnpm" },
  ];

  const headers: HeaderObject[] = [
    { accessor: "type", label: "Package Manager", width: 150 },
    { accessor: "command", label: "Installation Command", width: 250 },
  ];

  const rows = packageManagers.map((item, index) => ({
    rowMeta: { rowId: index, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Installation Commands</h2>
        <p className="text-gray-700 mb-6">
          Below are the commands to install Simple Table using various package managers.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default InstallationDemo;
