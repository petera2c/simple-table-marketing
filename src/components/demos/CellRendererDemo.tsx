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
          {row.email as string}
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
          {row.phone as string}
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
          {row.website as string}
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

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "Isabella Romano",
    email: "isabella@creativedesigns.co",
    phone: "+1 (917) 845-3721",
    website: "isabellaromano.design",
    status: "active",
    progress: 92,
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    name: "Ethan McKenzie",
    email: "ethan@webcraft.studio",
    phone: "+1 (503) 629-4815",
    website: "ethanmckenzie.dev",
    status: "active",
    progress: 87,
    rating: 4.7,
    verified: true,
  },
  {
    id: 3,
    name: "Zoe Patterson",
    email: "zoe@brandalchemy.com",
    phone: "+1 (415) 738-9264",
    website: "zoepatterson.com",
    status: "pending",
    progress: 34,
    rating: 4.2,
    verified: false,
  },
  {
    id: 4,
    name: "Felix Chang",
    email: "felix@mobilefirst.agency",
    phone: "+1 (212) 596-7413",
    website: "felixchang.mobile",
    status: "active",
    progress: 95,
    rating: 4.8,
    verified: true,
  },
  {
    id: 5,
    name: "Aria Gonzalez",
    email: "aria@wordsmithcreative.io",
    phone: "+1 (720) 485-6937",
    website: "ariagonzalez.writer",
    status: "active",
    progress: 78,
    rating: 4.6,
    verified: true,
  },
  {
    id: 6,
    name: "Jasper Flynn",
    email: "jasper@techconsulting.pro",
    phone: "+1 (206) 352-8140",
    website: "jasperflynn.tech",
    status: "inactive",
    progress: 12,
    rating: 3.8,
    verified: false,
  },
  {
    id: 7,
    name: "Nova Sterling",
    email: "nova@digitalmarketing.expert",
    phone: "+1 (312) 674-5829",
    website: "novasterling.marketing",
    status: "active",
    progress: 83,
    rating: 4.5,
    verified: true,
  },
  {
    id: 8,
    name: "Cruz Martinez",
    email: "cruz@photographypro.studio",
    phone: "+1 (818) 429-7605",
    website: "cruzmartinez.photo",
    status: "active",
    progress: 71,
    rating: 4.4,
    verified: true,
  },
  {
    id: 9,
    name: "Sage Thompson",
    email: "sage@uxdesigns.creative",
    phone: "+1 (404) 538-7291",
    website: "sagethompson.ux",
    status: "active",
    progress: 89,
    rating: 4.7,
    verified: true,
  },
  {
    id: 10,
    name: "River Davis",
    email: "river@contentstrategy.pro",
    phone: "+1 (617) 294-8156",
    website: "riverdavis.content",
    status: "pending",
    progress: 45,
    rating: 4.1,
    verified: false,
  },
  {
    id: 11,
    name: "Phoenix Williams",
    email: "phoenix@digitalconsulting.io",
    phone: "+1 (512) 675-3948",
    website: "phoenixwilliams.digital",
    status: "active",
    progress: 93,
    rating: 4.8,
    verified: true,
  },
  {
    id: 12,
    name: "Atlas Johnson",
    email: "atlas@branddesign.studio",
    phone: "+1 (305) 847-2163",
    website: "atlasjohnson.brand",
    status: "inactive",
    progress: 28,
    rating: 3.6,
    verified: false,
  },
];

const CellRendererDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  return (
    <SimpleTable
      defaultHeaders={headers}
      height={height}
      rowIdAccessor="id"
      rows={EMPLOYEE_DATA}
      selectableCells
      theme={theme}
    />
  );
};

export default CellRendererDemo;
