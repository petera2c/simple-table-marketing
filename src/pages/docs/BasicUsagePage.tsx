import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import { SEO_STRINGS } from "../../constants/strings/seo";
import BasicUsageDemo from "../../components/demos/BasicUsageDemo";
import CodeBlock from "../../components/CodeBlock";
import demoCode from "../../components/demos/BasicUsageDemo.tsx?raw";

const BasicUsagePage = () => {
  return (
    <>
      <SEO
        title={`Basic Usage - ${SEO_STRINGS.docs.title}`}
        description="Learn the fundamentals of using Simple Table in your React application."
        keywords={`basic usage, simple table, react table, ${SEO_STRINGS.docs.keywords}`}
        canonicalUrl="/docs/basic-usage"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FontAwesomeIcon icon={faTable} className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Basic Usage</h1>
        </motion.div>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simple Table is designed to be intuitive and straightforward to use. This guide covers the fundamental
          concepts and basic usage patterns to get you started with creating data tables in your React application.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BasicUsageDemo />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Table Structure
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Simple Table follows a declarative approach with clear separation between headers and rows data. Here's a
            breakdown of the key components:
          </p>

          <ul className="list-disc pl-8 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
            <li>
              <strong>Headers:</strong> Define your columns with label, accessor (for data lookup), and width
            </li>
            <li>
              <strong>Rows:</strong> Contains row metadata (like ID) and the actual row data
            </li>
            <li>
              <strong>SimpleTable component:</strong> Takes your headers and rows as props
            </li>
          </ul>

          <CodeBlock code={demoCode} />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Core Props
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            These are the essential props you'll need to get started with Simple Table:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Prop</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Type</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-100 font-medium">defaultHeaders</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">Array</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                    Array of column definitions with label, accessor, and width
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-100 font-medium">rows</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">Array</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                    Array of row objects containing rowMeta and rowData
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-100 font-medium">height</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">String</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                    Height of the table (e.g., "400px", "50vh")
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-100 font-medium">width</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">String</td>
                  <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                    Width of the table (e.g., "100%", "800px")
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Dynamic Data Loading
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            In most real-world applications, you'll load data from an API. Here's how to use Simple Table with
            dynamically loaded data:
          </p>

          <CodeBlock
            code={`// DynamicDataExample.tsx
import React, { useState, useEffect } from 'react';
import { SimpleTable } from 'simple-table';

const DynamicDataExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = [
    { label: 'Name', accessor: 'name', width: 180 },
    { label: 'Email', accessor: 'email', width: 220 },
    { label: 'Role', accessor: 'role', width: 150 },
  ];

  useEffect(() => {
    // Fetch data from your API
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        
        // Transform API data to match SimpleTable row format
        const formattedRows = data.map(user => ({
          rowMeta: { rowId: user.id },
          rowData: {
            name: user.name,
            email: user.email,
            role: user.role
          }
        }));
        
        setUsers(formattedRows);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : (
        <SimpleTable
          defaultHeaders={headers}
          rows={users}
          height="500px"
          width="100%"
        />
      )}
    </div>
  );
};

export default DynamicDataExample;`}
          />
        </motion.div>

        <motion.div
          className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="font-bold text-gray-800 mb-2">Best Practice</h3>
          <p className="text-gray-700">
            Always provide a unique <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowId</code> for
            each row in the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-800">rowMeta</code> object. This
            helps Simple Table optimize rendering and is essential for features like selection and editing.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between mt-12 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="/docs/quick-start"
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
            Previous: Quick Start
          </a>

          <a
            href="/docs/column-features"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Next: Column Management
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

export default BasicUsagePage;
