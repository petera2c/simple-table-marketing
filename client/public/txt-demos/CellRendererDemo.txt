import { SimpleTable, HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "simple-table-core/styles.css";

// Sample data
const data = [
  {
    rowMeta: { rowId: 1, isExpanded: false },
    rowData: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      website: "johndoe.com",
      status: "active",
      progress: 75,
      rating: 4.5,
      verified: true,
    },
  },
  {
    rowMeta: { rowId: 2, isExpanded: false },
    rowData: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      website: "janesmith.io",
      status: "inactive",
      progress: 30,
      rating: 3.2,
      verified: false,
    },
  },
  {
    rowMeta: { rowId: 3, isExpanded: false },
    rowData: {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1 (555) 567-8901",
      website: "bobjohnson.dev",
      status: "pending",
      progress: 50,
      rating: 4.0,
      verified: true,
    },
  },
  {
    rowMeta: { rowId: 4, isExpanded: false },
    rowData: {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      phone: "+1 (555) 234-5678",
      website: "alicew.net",
      status: "active",
      progress: 90,
      rating: 4.8,
      verified: true,
    },
  },
  {
    rowMeta: { rowId: 5, isExpanded: false },
    rowData: {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "+1 (555) 876-5432",
      website: "charlieb.org",
      status: "inactive",
      progress: 15,
      rating: 2.7,
      verified: false,
    },
  },
];

// Define headers with custom cell renderers
const headers: HeaderObject[] = [
  { accessor: "id", label: "ID", width: 60, type: "number" },
  { accessor: "name", label: "Name", width: 180, type: "string" },
  {
    accessor: "email",
    label: "Email",
    width: 200,
    type: "string",
    cellRenderer: ({ row }) => (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
        <a href={`mailto:${row.rowData.email}`} className="text-blue-600 hover:underline">
          {row.rowData.email}
        </a>
      </div>
    ),
  },
  {
    accessor: "phone",
    label: "Phone",
    width: 180,
    type: "string",
    cellRenderer: ({ row }) => (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2" />
        <a href={`tel:${row.rowData.phone}`} className="text-blue-600 hover:underline">
          {row.rowData.phone}
        </a>
      </div>
    ),
  },
  {
    accessor: "website",
    label: "Website",
    width: 150,
    type: "string",
    cellRenderer: ({ row }) => (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGlobe} className="text-gray-400 mr-2" />
        <a
          href={`https://${row.rowData.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {row.rowData.website}
        </a>
      </div>
    ),
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    type: "string",
    cellRenderer: ({ row }) => {
      const status = row.rowData.status as string;
      let color = "gray";
      let icon = faCheckCircle;

      if (status === "active") {
        color = "green";
        icon = faCheckCircle;
      } else if (status === "inactive") {
        color = "red";
        icon = faTimesCircle;
      } else if (status === "pending") {
        color = "yellow";
        icon = faExclamationTriangle;
      }

      return (
        <div className={`flex items-center text-${color}-500 capitalize`}>
          <FontAwesomeIcon icon={icon} className="mr-1" />
          {status}
        </div>
      );
    },
  },
  {
    accessor: "progress",
    label: "Progress",
    width: 150,
    type: "number",
    cellRenderer: ({ row }) => {
      const progress = row.rowData.progress as number;
      let color = "blue";

      if (progress < 30) color = "red";
      else if (progress < 70) color = "yellow";
      else color = "green";

      return (
        <div className="w-full">
          <div className="text-xs mb-1">{progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`bg-${color}-500 h-2.5 rounded-full`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      );
    },
  },
  {
    accessor: "rating",
    label: "Rating",
    width: 150,
    type: "number",
    cellRenderer: ({ row }) => {
      const rating = row.rowData.rating as number;
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;

      return (
        <div className="flex items-center">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={
                  i < fullStars
                    ? "text-yellow-400"
                    : i === fullStars && hasHalfStar
                    ? "text-yellow-400 opacity-50"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span>{rating.toFixed(1)}</span>
        </div>
      );
    },
  },
  {
    accessor: "verified",
    label: "Verified",
    width: 100,
    type: "boolean",
    cellRenderer: ({ row }) => {
      const verified = row.rowData.verified as boolean;

      return verified ? (
        <span className="inline-flex items-center text-green-500">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
          Yes
        </span>
      ) : (
        <span className="inline-flex items-center text-red-500">
          <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
          No
        </span>
      );
    },
  },
];

const CellRendererDemo = () => {
  return <SimpleTable defaultHeaders={headers} rows={data} />;
};

export default CellRendererDemo;
