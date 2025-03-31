import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import RowGroupingDemo from "../../components/demos/RowGroupingDemo";

const RowGroupingPage = () => {
  return (
    <>
      <SEO
        title={`Row Grouping - ${SEO_STRINGS.docs.title}`}
        description="Learn how to implement row grouping in Simple Table."
        keywords={`row grouping, hierarchical data, nested rows, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/row-grouping"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faLayerGroup} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Row Grouping</h1>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RowGroupingDemo />
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Row grouping allows you to organize hierarchical data in collapsible groups, making it easier to visualize and
          navigate complex datasets.
        </motion.p>

        {/* Implementation Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            How to Implement Row Grouping
          </h2>

          <p className="text-gray-700 mb-4">Implementing row grouping requires two key elements:</p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              Setting <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">expandable: true</code> on the
              header objects
            </li>
            <li>Structuring your row data to include parent-child relationships</li>
          </ul>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`// 1. Define headers with 'expandable' property
const headers = [
  { 
    accessor: "department", 
    label: "Department", 
    width: 180, 
    expandable: true  // Enable expand/collapse for this column
  },
  { accessor: "name", label: "Name", width: 200 },
  { accessor: "role", label: "Role", width: 180 },
  { accessor: "salary", label: "Salary", width: 120, align: "right" },
];

// 2. Structure your data with parent-child relationships
const departmentRows = departments.map((department, deptIndex) => {
  // Create a parent row for each department
  const departmentRow = {
    rowMeta: { 
      rowId: \`dept-\${deptIndex}\`, 
      isExpanded: true,  // Initially expanded
      children: employeeRows  // Child rows
    },
    rowData: { 
      department, 
      name: \`\${department} Department\`, 
      role: "", 
      salary: departmentData.reduce((sum, item) => sum + item.salary, 0) / departmentData.length 
    }
  };
  
  // Create child rows for employees in this department
  const employeeRows = departmentData.map(employee => ({
    rowMeta: { 
      rowId: \`emp-\${employee.id}\`,
      isExpanded: false
    },
    rowData: employee
  }));
  
  return [departmentRow, ...employeeRows];
}).flat();

// 3. Use the rows in SimpleTable
<SimpleTable defaultHeaders={headers} rows={departmentRows} />`}
              </code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Row Structure for Grouping</h3>
            <p className="text-gray-700 mb-2">
              The <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">Row</code> type includes metadata
              fields that control grouping:
            </p>
            <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <code>{`type Row = {
  // Row metadata
  rowMeta: {
    children?: Row[];      // Child rows for grouping
    isExpanded?: boolean;  // Whether this group is expanded
    rowId: number;         // Unique identifier for the row
  };

  // Actual cell values
  rowData: { [key: string]: CellValue };
};`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RowGroupingPage;
