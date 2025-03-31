import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";

const CustomRenderersPage = () => {
  return (
    <>
      <SEO
        title={`Custom Cell Renderers - ${SEO_STRINGS.docs.title}`}
        description="Learn how to create custom cell renderers in Simple Table to display rich, interactive content."
        keywords={`custom cell renderers, cell formatting, dynamic cells, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/custom-renderers"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-purple-100 rounded-lg">
            <FontAwesomeIcon icon={faPaintBrush} className="text-purple-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Custom Cell Renderers</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Custom cell renderers allow you to take full control over how cell content is displayed in your table,
          enabling rich, interactive elements like buttons, links, progress bars, and more.
        </motion.p>

        {/* Basic Usage Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            Basic Usage
          </h2>

          <p className="text-gray-700 mb-4">
            Custom cell renderers are defined as functions in your header configuration. Each renderer receives
            information about the cell and returns a React element to be displayed.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`// Define headers with custom renderers
const headers = [
  { accessor: "id", label: "ID", width: 80 },
  { accessor: "name", label: "Name", width: 200 },
  { 
    accessor: "status", 
    label: "Status", 
    width: 120,
    // Define a custom renderer for the status column
    cellRenderer: ({ row }) => {
      const status = row.rowData.status;
      // Return different elements based on status value
      switch(status) {
        case "active":
          return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>;
        case "inactive":
          return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">Inactive</span>;
        default:
          return <span>{status}</span>;
      }
    }
  }
];

// Use the headers in SimpleTable
<SimpleTable defaultHeaders={headers} rows={rows} />`}
              </code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Cell Renderer Parameters</h3>
            <p className="text-gray-700 mb-2">
              The <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">cellRenderer</code> function receives
              an object with the following properties:
            </p>
            <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <code>{`cellRenderer: ({ 
  accessor,  // The column accessor (string)
  colIndex,  // The column index (number)
  row        // The row object
}) => React.ReactNode`}</code>
            </pre>
            <p className="text-gray-700 mt-3 mb-2">
              The <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">Row</code> type has this structure:
            </p>
            <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <code>{`type Row = {
  // Row metadata
  rowMeta: {
    children?: Row[];    // Child rows (for row grouping)
    isExpanded?: boolean; // Whether the row is expanded
    rowId: number;       // Unique identifier for the row
  };

  // Actual cell values
  rowData: { [key: string]: CellValue };
};`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Common Use Cases Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            Common Use Cases
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Status Indicators</h3>
          <p className="text-gray-700 mb-4">Create visually distinct status indicators with custom colors and icons:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`{
  accessor: "status",
  label: "Status",
  width: 120,
  cellRenderer: ({ row }) => {
    const status = row.rowData.status;
    let color = "gray";
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-800";
    
    if (status === "active") {
      bgColor = "bg-green-100";
      textColor = "text-green-800";
    } else if (status === "inactive") {
      bgColor = "bg-red-100";
      textColor = "text-red-800";
    } else if (status === "pending") {
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
    }
    
    return (
      <span className={\`px-2 py-1 rounded-full \${bgColor} \${textColor}\`}>
        {status}
      </span>
    );
  }
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Interactive Components</h3>
          <p className="text-gray-700 mb-4">Add buttons, links, or other interactive elements to your cells:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`{
  accessor: "actions",
  label: "Actions",
  width: 150,
  cellRenderer: ({ row }) => {
    const userId = row.rowData.id;
    
    return (
      <div className="flex space-x-2">
        <button 
          onClick={() => handleEdit(userId)}
          className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(userId)}
          className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    );
  }
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Progress Bars</h3>
          <p className="text-gray-700 mb-4">Visualize progress or completion percentages:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`{
  accessor: "progress",
  label: "Progress",
  width: 150,
  cellRenderer: ({ row }) => {
    const progress = row.rowData.progress || 0;
    let color = "blue";
    
    if (progress < 30) color = "red";
    else if (progress < 70) color = "yellow";
    else color = "green";
    
    return (
      <div className="w-full">
        <div className="text-xs mb-1">{progress}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={\`bg-\${color}-500 h-2.5 rounded-full\`} 
            style={{ width: \`\${progress}%\` }} 
          />
        </div>
      </div>
    );
  }
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Formatting Numbers and Dates</h3>
          <p className="text-gray-700 mb-4">Apply specific formatting to numeric or date values:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`// Currency formatter
{
  accessor: "price",
  label: "Price",
  width: 120,
  align: "right",
  cellRenderer: ({ row }) => {
    const price = row.rowData.price;
    return <span>\${price.toLocaleString(undefined, { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}</span>;
  }
}

// Date formatter
{
  accessor: "date",
  label: "Date",
  width: 150,
  cellRenderer: ({ row }) => {
    const date = new Date(row.rowData.date);
    return <span>{date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })}</span>;
  }
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Advanced Techniques Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200 mt-8">
            Advanced Techniques
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Conditional Formatting</h3>
          <p className="text-gray-700 mb-4">Apply different styles based on cell values or conditions:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`{
  accessor: "change",
  label: "Change",
  width: 120,
  align: "right",
  cellRenderer: ({ row }) => {
    const change = row.rowData.change;
    const isPositive = change >= 0;
    
    return (
      <span className={\`font-medium \${isPositive ? 'text-green-600' : 'text-red-600'}\`}>
        {isPositive ? '+' : ''}{change.toFixed(2)}%
      </span>
    );
  }
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Rich Media Content</h3>
          <p className="text-gray-700 mb-4">Display images, avatars, or other media in cells:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`{
  accessor: "user",
  label: "User",
  width: 200,
  cellRenderer: ({ row }) => {
    const { name, avatar, role } = row.rowData;
    
    return (
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-8 h-8 rounded-full mr-3" 
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    );
  }
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Dynamic Cell Content</h3>
          <p className="text-gray-700 mb-4">Create cells that react to changes in application state:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>
                {`// In a functional component
const YourComponent = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  
  // Cell renderer that shows different content based on selection state
  const selectionRenderer = ({ row }) => {
    const isSelected = selectedRows.includes(row.rowMeta.rowId);
    
    return (
      <button
        onClick={() => handleRowSelection(row.rowMeta.rowId)}
        className={\`p-1 rounded \${
          isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }\`}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    );
  };
  
  const headers = [
    // Other headers...
    {
      accessor: "selection",
      label: "Select",
      width: 100,
      cellRenderer: selectionRenderer
    }
  ];
  
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
    />
  );
};`}
              </code>
            </pre>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keep renderers performant by minimizing complex calculations</li>
              <li>Memoize renderers with React.useMemo when appropriate</li>
              <li>Use proper TypeScript types for better autocompletion and error checking</li>
              <li>Consider accessibility when designing custom UI elements</li>
              <li>Maintain consistent styling with the rest of your table</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CustomRenderersPage;
