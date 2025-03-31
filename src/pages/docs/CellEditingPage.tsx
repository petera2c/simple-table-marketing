import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import CellEditingDemo from "../../components/demos/CellEditingDemo";

const CellEditingPage = () => {
  return (
    <>
      <SEO
        title={`Cell Editing - ${SEO_STRINGS.docs.title}`}
        description="Make your tables interactive with cell editing capabilities in Simple Table."
        keywords={`cell editing, editable cells, data input, form validation, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/cell-editing"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-purple-100 rounded-lg">
            <FontAwesomeIcon icon={faEdit} className="text-purple-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Cell Editing</h1>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CellEditingDemo />
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table provides powerful cell editing capabilities, allowing users to modify data directly within the
          table interface. This creates a more interactive and efficient user experience for data entry and management.
        </motion.p>

        {/* Basic Editing Setup Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Basic Editing Setup
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">To enable cell editing in Simple Table, you need to:</p>

          <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
            <li>Set which rows are editable (all or specific ones)</li>
            <li>Configure which cells in those rows can be edited</li>
            <li>Handle data changes when edits are made</li>
          </ol>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React, { useState } from 'react';
import { SimpleTable } from 'simple-table';

const BasicEditingExample = () => {
  // Initial data
  const [userData, setUserData] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 32 },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
  ]);

  // Convert to SimpleTable row format
  const rows = userData.map(user => ({
    rowMeta: { 
      rowId: user.id,
      isEditable: true  // This row can be edited
    },
    rowData: { ...user }
  }));

  // Define headers with editing configuration
  const headers = [
    { 
      label: 'ID', 
      accessor: 'id', 
      width: 80,
      editable: false  // This column can't be edited
    },
    { 
      label: 'Name', 
      accessor: 'name', 
      width: 180,
      editable: true  // This column can be edited
    },
    { 
      label: 'Email', 
      accessor: 'email', 
      width: 220,
      editable: true
    },
    { 
      label: 'Age', 
      accessor: 'age', 
      width: 100,
      editable: true,
      // Optional: Input type for this column
      editConfig: {
        type: 'number',
        min: 18,
        max: 100
      }
    }
  ];

  // Handle cell edit events
  const handleCellEdit = (rowId, accessor, value) => {
    // Update your data
    setUserData(prevData => 
      prevData.map(user => 
        user.id === rowId 
          ? { ...user, [accessor]: value }
          : user
      )
    );
  };

  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={rows}
      enableEditing={true}
      onCellChange={handleCellEdit}
    />
  );
};`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Edit Modes Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Edit Modes
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Simple Table supports different editing modes to suit various use cases:</p>

          <div className="mb-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Click-to-Edit</h3>
                <p className="text-gray-700 mb-3">
                  Users click on a cell to enter edit mode. This is the default behavior.
                </p>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 block">editMode="click"</code>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Double-Click-to-Edit</h3>
                <p className="text-gray-700 mb-3">Users double-click a cell to enter edit mode.</p>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 block">editMode="dblclick"</code>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cell Selection</h3>
                <p className="text-gray-700 mb-3">
                  Users can select cells and edit using keyboard shortcuts (F2 or Enter).
                </p>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 block">editMode="select"</code>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Batch Editing</h3>
                <p className="text-gray-700 mb-3">Changes are accumulated and committed together (with Save/Cancel).</p>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 block">editMode="batch"</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`<SimpleTable
  defaultHeaders={headers}
  rows={rows}
  enableEditing={true}
  editMode="dblclick"  // Change this to your preferred mode
  onCellChange={handleCellEdit}
/>`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Validation Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Validation
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table provides multiple ways to validate cell edits before committing changes:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`// Define headers with validation
const headers = [
  // Email column with validation
  { 
    label: 'Email', 
    accessor: 'email', 
    width: 220,
    editable: true,
    editConfig: {
      // Built-in validation (matches HTML input validation)
      type: 'email',
      required: true,
      
      // Custom validation function
      validate: (value, rowData) => {
        if (!value.includes('@')) {
          return {
            isValid: false,
            message: 'Please enter a valid email address'
          };
        }
        
        if (value.endsWith('test.com')) {
          return {
            isValid: false,
            message: 'test.com emails are not allowed'
          };
        }
        
        return { isValid: true };
      }
    }
  },
  
  // Age column with range validation
  {
    label: 'Age',
    accessor: 'age',
    width: 100,
    editable: true,
    editConfig: {
      type: 'number',
      min: 18,
      max: 100,
      
      // Format the display value
      formatDisplay: (value) => \`\${value} years\`,
      
      // Parse the input value
      parseValue: (input) => parseInt(input, 10)
    }
  }
];`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Validation Best Practices</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Use HTML5 input types (email, number, date) for built-in browser validation</li>
              <li>Provide clear error messages that explain how to fix the issue</li>
              <li>Consider cross-field validation when one field depends on another</li>
              <li>
                Use the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">formatDisplay</code> option to
                show formatted values while not editing
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Custom Editors Section */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Custom Editors
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-700 mb-4">
            For more complex editing scenarios, you can provide custom editor components for specific columns:
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <pre className="whitespace-pre-wrap">
              <code>{`import React from 'react';
import { SimpleTable } from 'simple-table';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

// Custom Select editor component
const StatusEditor = ({ value, onChange, onBlur, editorProps }) => {
  const options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ];
  
  return (
    <Select
      value={options.find(o => o.value === value)}
      onChange={(option) => onChange(option.value)}
      onBlur={onBlur}
      options={options}
      className="w-full"
      {...editorProps}
    />
  );
};

// Custom DatePicker editor component
const DateEditor = ({ value, onChange, onBlur }) => {
  return (
    <DatePicker
      selected={value ? new Date(value) : null}
      onChange={(date) => onChange(date.toISOString())}
      onBlur={onBlur}
      dateFormat="yyyy-MM-dd"
      className="w-full p-2 border rounded"
    />
  );
};

// In your headers definition
const headers = [
  // ... other headers
  {
    label: 'Status',
    accessor: 'status',
    width: 150,
    editable: true,
    editConfig: {
      editorComponent: StatusEditor
    }
  },
  {
    label: 'Due Date',
    accessor: 'dueDate',
    width: 150,
    editable: true,
    editConfig: {
      editorComponent: DateEditor
    }
  }
];`}</code>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            Custom editors give you complete control over the editing experience and allow you to use any third-party
            input components.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a
            href="/docs/column-sorting"
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Column Sorting
          </a>

          <a
            href="/docs/cell-highlighting"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Cell Highlighting
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default CellEditingPage;
