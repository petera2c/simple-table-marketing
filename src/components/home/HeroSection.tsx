import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Build Beautiful Data Tables with <span className="text-primary">Simple&nbsp;Table</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A powerful, customizable, and developer-friendly React table component built for modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                type="primary"
                size="large"
                className="bg-primary hover:bg-primary-dark h-12 px-8 flex items-center"
                href="https://docs.simple-table.com/getting-started"
                target="_blank"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
              <Button
                size="large"
                className="border-gray-300 h-12 px-8"
                href="https://docs.simple-table.com/"
                target="_blank"
              >
                Documentation
              </Button>
            </div>
            <div className="mt-6 text-gray-500">
              <p>npm install simple-table-core</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <pre className="bg-gray-800 rounded text-green-400 p-4 overflow-auto text-sm">
                <code>{`import { SimpleTable } from 'simple-table-core';

const MyComponent = () => {
  const headers = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'email', label: 'Email' },
    { accessor: 'role', label: 'Role' },
  ];

  const rows = [
    { rowData: { name: 'John Doe', email: 'john@example.com', role: 'Admin' } },
    { rowData: { name: 'Jane Smith', email: 'jane@example.com', role: 'User' } },
    // more rows...
  ];

  return (
    <SimpleTable 
      defaultHeaders={headers}
      rows={rows}
      theme="light"
    />
  );
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
