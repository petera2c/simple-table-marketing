import React, { useState } from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";

const ColumnAlignmentDemo = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", score: 85, rating: 4.2, status: "Active" },
    { id: 2, name: "Jane Smith", score: 92, rating: 4.8, status: "Active" },
    { id: 3, name: "Bob Johnson", score: 78, rating: 3.9, status: "Inactive" },
    { id: 4, name: "Alice Williams", score: 95, rating: 4.9, status: "Active" },
    { id: 5, name: "Charlie Brown", score: 82, rating: 4.1, status: "Active" },
  ];

  // Define alignment options
  type AlignmentType = "left" | "center" | "right";
  const alignmentOptions: AlignmentType[] = ["left", "center", "right"];

  // Initial headers with different alignments
  const [headers, setHeaders] = useState<HeaderObject[]>([
    { accessor: "id", label: "ID", width: 80, align: "left" },
    { accessor: "name", label: "Name", width: 180, align: "left" },
    { accessor: "score", label: "Score", width: 120, align: "right" },
    { accessor: "rating", label: "Rating", width: 120, align: "center" },
    { accessor: "status", label: "Status", width: 120, align: "left" },
  ]);

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  // Change column alignment
  const changeAlignment = (accessor: string, alignment: AlignmentType) => {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) => (header.accessor === accessor ? { ...header, align: alignment } : header))
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Alignment Demo</h2>
        <p className="text-gray-700 mb-4">
          Change the text alignment for each column to improve readability. Typically, text is left-aligned, while
          numbers are right-aligned.
        </p>

        {/* Alignment controls */}
        <div className="mb-6">
          <div className="grid grid-cols-5 gap-4">
            {headers.map((header) => (
              <div key={header.accessor} className="flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-700">{header.label}</p>
                <div className="flex gap-1">
                  {alignmentOptions.map((alignment) => (
                    <button
                      key={alignment}
                      onClick={() => changeAlignment(header.accessor, alignment)}
                      className={`px-2 py-1 text-xs rounded flex-1 ${
                        header.align === alignment ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {alignment}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default ColumnAlignmentDemo;
