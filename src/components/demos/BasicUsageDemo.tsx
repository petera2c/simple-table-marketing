import { SimpleTable } from "simple-table-core";

// 1. Define headers
const headers = [
  { label: "Name", accessor: "name", width: 180 },
  { label: "Email", accessor: "email", width: 220 },
  { label: "Role", accessor: "role", width: 150 },
  { label: "Status", accessor: "status", width: 120 },
  { label: "Address", accessor: "address", width: 250 },
  { label: "Phone", accessor: "phone", width: 150 },
  { label: "Company", accessor: "company", width: 200 },
  { label: "Website", accessor: "website", width: 200 },
];

// 2. Define rows data
const rows = [
  {
    rowMeta: { rowId: 1 },
    rowData: {
      name: "John Doe",
      email: "john@example.com",
      role: "Administrator",
      status: "Active",
      address: "123 Main St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 2 },
    rowData: {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "Pending",
      address: "456 Elm St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 3 },
    rowData: {
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Viewer",
      status: "Inactive",
      address: "789 Oak St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 4 },
    rowData: {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Editor",
      status: "Active",
      address: "123 Main St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 5 },
    rowData: {
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Viewer",
      status: "Inactive",
      address: "123 Main St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 6 },
    rowData: {
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Editor",
      status: "Active",
      address: "123 Main St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
  {
    rowMeta: { rowId: 7 },
    rowData: {
      name: "Daniel Wilson",
      email: "daniel@example.com",
      role: "Viewer",
      status: "Inactive",
      address: "123 Main St, Anytown, USA",
      phone: "123-456-7890",
      company: "Acme Inc.",
      website: "www.acme.com",
    },
  },
];

const BasicTableExample = () => {
  // 3. Render the table with your data
  return <SimpleTable defaultHeaders={headers} rows={rows} height="200px" />;
};

export default BasicTableExample;
