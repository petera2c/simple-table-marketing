import { SimpleTable, HeaderObject } from "simple-table-core";
import "simple-table-core/styles.css";

const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 100, isSortable: true, type: "number" },
  { accessor: "name", label: "Name", width: 200, isSortable: true, type: "string" },
  { accessor: "age", label: "Age", width: 100, isSortable: true, type: "number" },
  { accessor: "email", label: "Email", width: 200, isSortable: true, type: "string" },
  { accessor: "phone", label: "Phone", width: 200, isSortable: true, type: "string" },
  { accessor: "address", label: "Address", width: 200, isSortable: true, type: "string" },
  { accessor: "city", label: "City", width: 200, isSortable: true, type: "string" },
  { accessor: "state", label: "State", width: 200, isSortable: true, type: "string" },
  { accessor: "zip", label: "Zip", width: 200, isSortable: true, type: "string" },
  { accessor: "country", label: "Country", width: 200, isSortable: true, type: "string" },
];

const rows = [
  {
    rowMeta: { rowId: 1, isExpanded: false },
    rowData: {
      id: 1,
      name: "Alex Johnson",
      age: 32,
      email: "alex.johnson@example.com",
      phone: "555-123-4567",
      address: "872 Pine Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 2, isExpanded: false },
    rowData: {
      id: 2,
      name: "Sophia Martinez",
      age: 28,
      email: "sophia.m@techcorp.net",
      phone: "555-987-6543",
      address: "421 Oak Street",
      city: "Austin",
      state: "TX",
      zip: "78701",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 3, isExpanded: false },
    rowData: {
      id: 3,
      name: "Raj Patel",
      age: 41,
      email: "raj.patel@globex.org",
      phone: "555-456-7890",
      address: "15 Maple Road",
      city: "Chicago",
      state: "IL",
      zip: "60614",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 4, isExpanded: false },
    rowData: {
      id: 4,
      name: "Emma Wilson",
      age: 26,
      email: "e.wilson@designstudio.io",
      phone: "555-234-5678",
      address: "963 Cedar Lane",
      city: "Portland",
      state: "OR",
      zip: "97201",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 5, isExpanded: false },
    rowData: {
      id: 5,
      name: "Marcus Chen",
      age: 35,
      email: "marcus.chen@datascience.co",
      phone: "555-345-6789",
      address: "728 Birch Boulevard",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 6, isExpanded: false },
    rowData: {
      id: 6,
      name: "Isabella Kim",
      age: 29,
      email: "i.kim@healthcare.med",
      phone: "555-678-9012",
      address: "541 Elm Drive",
      city: "Boston",
      state: "MA",
      zip: "02108",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 7, isExpanded: false },
    rowData: {
      id: 7,
      name: "Diego Rodriguez",
      age: 38,
      email: "d.rodriguez@finance.biz",
      phone: "555-789-0123",
      address: "295 Willow Way",
      city: "Miami",
      state: "FL",
      zip: "33101",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 8, isExpanded: false },
    rowData: {
      id: 8,
      name: "Aisha Johnson",
      age: 31,
      email: "aisha.j@educate.edu",
      phone: "555-890-1234",
      address: "104 Spruce Street",
      city: "Denver",
      state: "CO",
      zip: "80202",
      country: "USA",
    },
  },
  {
    rowMeta: { rowId: 9, isExpanded: false },
    rowData: {
      id: 9,
      name: "Liam O'Connor",
      age: 45,
      email: "liam.oconnor@legal.law",
      phone: "555-901-2345",
      address: "672 Aspen Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
  },
];

const ColumnSortingDemo = () => {
  // Set up headers with sorting enabled

  return <SimpleTable defaultHeaders={headers} height="400px" rows={rows} />;
};

export default ColumnSortingDemo;
