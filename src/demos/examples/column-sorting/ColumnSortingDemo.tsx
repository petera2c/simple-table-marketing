import { SimpleTable, HeaderObject } from "simple-table-core";
import { generateAthletesData, ATHLETES_HEADERS } from "../../../components/demos/data/athlete-data";

const ColumnSortingDemo = () => {
  // Generate sample data
  const rows = generateAthletesData();

  // Set up headers with sorting enabled
  const headers = ATHLETES_HEADERS.map((header: HeaderObject) => ({
    ...header,
    isSortable: true, // Ensure sorting is enabled for all columns
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Column Sorting Demo</h2>
        <p className="text-gray-700 mb-6">
          Click on any column header to sort by that column. Click again to toggle between ascending and descending
          order. Click a third time to remove sorting.
        </p>

        <div className="h-[600px] border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">How It Works</h3>
        <p className="text-gray-700 mb-4">
          Sorting is enabled by setting the <code className="bg-gray-100 px-1 py-0.5 rounded">isSortable</code> property
          on columns.
        </p>
        <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
          <pre className="text-sm">
            {`// Enable sorting on columns
const headers = [
  { 
    label: 'Name', 
    accessor: 'name',
    isSortable: true 
  },
  // ...other columns
];

// Set up the table with sorting
<SimpleTable
  defaultHeaders={headers}
  rows={rows}
/>

// The table will automatically handle sorting internally`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ColumnSortingDemo;
