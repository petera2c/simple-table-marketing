import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

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
        <span className="text-gray-400 mr-2">✉</span>
        <a href={`mailto:${row.email}`} className="text-blue-600 hover:underline">
          {row.email}
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
        <span className="text-gray-400 mr-2">📞</span>
        <a href={`tel:${row.phone}`} className="text-blue-600 hover:underline">
          {row.phone}
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
        <span className="text-gray-400 mr-2">🌐</span>
        <a
          href={`https://${row.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {row.website}
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
      const status = row.status as string;
      let color = "gray";
      let icon = "•";

      if (status === "active") {
        color = "green";
        icon = "✓";
      } else if (status === "inactive") {
        color = "red";
        icon = "✕";
      } else if (status === "pending") {
        color = "yellow";
        icon = "!";
      }

      return (
        <div className={`flex items-center text-${color}-500 capitalize`}>
          <span className="mr-1 font-bold">{icon}</span>
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
      const progress = row.progress as number;
      let color = "blue";

      if (progress < 30) color = "red";
      else if (progress < 70) color = "yellow";
      else color = "green";

      return (
        <div className="w-full">
          <div className="text-xs mb-1">{progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`bg-${color}-500 h-2.5 rounded-full`}
              style={{ width: `${progress}%` }}
            />
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
      const rating = row.rating as number;
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;

      return (
        <div className="flex items-center">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < fullStars
                    ? "text-yellow-400"
                    : i === fullStars && hasHalfStar
                    ? "text-yellow-400 opacity-50"
                    : "text-gray-300"
                }
              >
                ★
              </span>
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
      const verified = row.verified as boolean;

      return verified ? (
        <span className="inline-flex items-center text-green-500">
          <span className="mr-1 font-bold">✓</span>
          Yes
        </span>
      ) : (
        <span className="inline-flex items-center text-red-500">
          <span className="mr-1 font-bold">✕</span>
          No
        </span>
      );
    },
  },
];

// Sample data with flat structure
const employeeData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "johndoe.com",
    status: "active",
    progress: 85,
    rating: 4.5,
    verified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 234-5678",
    website: "janesmith.com",
    status: "active",
    progress: 92,
    rating: 4.8,
    verified: true,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1 (555) 345-6789",
    website: "bobjohnson.com",
    status: "inactive",
    progress: 45,
    rating: 3.2,
    verified: false,
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    phone: "+1 (555) 456-7890",
    website: "alicewilliams.com",
    status: "pending",
    progress: 67,
    rating: 4.1,
    verified: true,
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "+1 (555) 567-8901",
    website: "charliebrown.com",
    status: "active",
    progress: 78,
    rating: 3.9,
    verified: false,
  },
  {
    id: 6,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    phone: "+1 (555) 678-9012",
    website: "dianaprince.com",
    status: "active",
    progress: 95,
    rating: 4.7,
    verified: true,
  },
];

const CellRendererDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      rows={employeeData}
      rowIdAccessor="id"
      height={height}
      rowHeight={52}
      theme={theme}
    />
  );
};

export default CellRendererDemo;
